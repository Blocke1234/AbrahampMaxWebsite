import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { PostHog } from 'posthog-node'
import { contactLimiter, clientIp } from '@/app/lib/ratelimit'

export const runtime = 'nodejs'

const FROM = process.env.RESEND_FROM_EMAIL || 'Big Willie Style <hello@bigwilliestyle.co>'
const NOTIFY = process.env.CONTACT_NOTIFY_EMAIL

function esc(s: string) {
  return s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c] as string))
}

export async function POST(req: Request) {
  // 1. Rate limit before doing any work.
  const ip = clientIp(req)
  if (contactLimiter) {
    const { success } = await contactLimiter.limit(ip)
    if (!success) {
      return NextResponse.json(
        { error: 'Too many messages. Give it ten minutes and try again.' },
        { status: 429 }
      )
    }
  }

  let body: { name?: string; email?: string; message?: string; company?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Malformed request.' }, { status: 400 })
  }

  // Honeypot: real people never fill a hidden field. Return 200 so bots
  // can't distinguish a rejection from a success and retune.
  if (body.company) return NextResponse.json({ ok: true })

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const message = (body.message || '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are all required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || !NOTIFY) {
    console.error('[contact] RESEND_API_KEY or CONTACT_NOTIFY_EMAIL missing')
    return NextResponse.json({ error: 'Contact is temporarily unavailable.' }, { status: 503 })
  }

  const resend = new Resend(apiKey)

  try {
    // 2. Notify Blake. replyTo means hitting reply in Gmail answers the lead.
    await resend.emails.send({
      from: FROM,
      to: NOTIFY,
      replyTo: email,
      subject: `New question from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
      html: `<p><strong>${esc(name)}</strong> &lt;${esc(email)}&gt;</p><p>${esc(message).replace(/\n/g, '<br>')}</p>`,
    })

    // 3. Auto-reply so the lead knows it landed.
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'Got your message',
      text:
        `${name.split(' ')[0]},\n\n` +
        `Got it. I read every one of these myself, and you'll hear back from me — ` +
        `usually same day.\n\n` +
        `If you'd rather just talk, book a free call: https://calendly.com/bwillette2000/bigwilliestyle\n\n` +
        `— Blake`,
    })
  } catch (err) {
    console.error('[contact] resend send failed', err)
    return NextResponse.json({ error: 'Could not send that. Try again shortly.' }, { status: 502 })
  }

  // 4. Analytics, best effort — never fail the request over a missed event.
  const phKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (phKey) {
    try {
      const ph = new PostHog(phKey, { host: 'https://us.i.posthog.com' })
      ph.capture({ distinctId: email, event: 'contact_submitted', properties: { name } })
      await ph.shutdown()
    } catch (err) {
      console.error('[contact] posthog capture failed', err)
    }
  }

  return NextResponse.json({ ok: true })
}
