import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'
import { PostHog } from 'posthog-node'
import { claimStripeEvent } from '@/app/lib/ratelimit'

export const runtime = 'nodejs'
// Stripe signature verification needs the raw body, so this route must never
// be statically optimised or have its body parsed early.
export const dynamic = 'force-dynamic'

const FROM = process.env.RESEND_FROM_EMAIL || 'Big Willie Style <hello@bigwilliestyle.co>'
const CALENDLY = 'https://calendly.com/bwillette2000/bigwilliestyle'

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!secretKey || !whSecret) {
    console.error('[stripe] STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET missing')
    return NextResponse.json({ error: 'Not configured' }, { status: 503 })
  }

  const sig = req.headers.get('stripe-signature')
  if (!sig) return NextResponse.json({ error: 'Missing signature' }, { status: 400 })

  const stripe = new Stripe(secretKey)
  const raw = await req.text()

  let event: Stripe.Event
  try {
    event = await stripe.webhooks.constructEventAsync(raw, sig, whSecret)
  } catch (err) {
    // Bad signature = not from Stripe. Never process it.
    console.error('[stripe] signature verification failed', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Stripe retries on any non-2xx and can double-deliver on success. Claim the
  // event id so a replay can't fire a second confirmation email.
  const first = await claimStripeEvent(event.id)
  if (!first) return NextResponse.json({ received: true, duplicate: true })

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.customer_details?.email || session.customer_email || undefined
    const name = session.customer_details?.name || ''
    const amount = (session.amount_total ?? 0) / 100
    // Payment Link metadata (set in the Stripe Dashboard when the link is
    // created) is what tells the two products apart — everything without it
    // is treated as the original Come-Up offer, so that flow is untouched.
    const offer = session.metadata?.product === 'neck-massager' ? 'neck-massager' : 'the-come-up'

    if (offer === 'neck-massager') {
      // Order notification to Blake — he ships this one by hand. Stripe
      // already emails the buyer their own receipt.
      const NOTIFY = process.env.CONTACT_NOTIFY_EMAIL
      const address = session.collected_information?.shipping_details?.address
      const shipTo = address
        ? [address.line1, address.line2, `${address.city}, ${address.state} ${address.postal_code}`, address.country]
            .filter(Boolean)
            .join('\n')
        : 'No shipping address collected'

      if (NOTIFY && process.env.RESEND_API_KEY) {
        try {
          const resend = new Resend(process.env.RESEND_API_KEY)
          await resend.emails.send({
            from: FROM,
            to: NOTIFY,
            subject: `New order — $${amount.toFixed(2)} from ${name || 'a customer'}`,
            text: `${name || 'Unknown'} <${email || 'no email'}>\n\nPaid: $${amount.toFixed(2)}\n\nShip to:\n${shipTo}`,
          })
        } catch (err) {
          console.error('[stripe] order notification email failed', err)
        }
      }
    } else if (email && process.env.RESEND_API_KEY) {
      // Welcome email — the Payment Link is sent after a call, so this is the
      // handoff into the program, not a generic receipt (Stripe sends that).
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: FROM,
          to: email,
          subject: "You're in — The Come-Up starts now",
          text:
            `${(name || 'Hey').split(' ')[0]},\n\n` +
            `Payment's confirmed. You're one of five in the founding cohort.\n\n` +
            `Next step: book your first session here — ${CALENDLY}\n\n` +
            `Bring one thing you've been avoiding. We start there.\n\n` +
            `— Blake`,
        })
      } catch (err) {
        console.error('[stripe] welcome email failed', err)
      }
    }

    const phKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (phKey) {
      try {
        const ph = new PostHog(phKey, { host: 'https://us.i.posthog.com' })
        ph.capture({
          distinctId: email || session.id,
          event: 'purchase_completed',
          properties: { amount, currency: session.currency, offer },
        })
        await ph.shutdown()
      } catch (err) {
        console.error('[stripe] posthog capture failed', err)
      }
    }
  }

  return NextResponse.json({ received: true })
}
