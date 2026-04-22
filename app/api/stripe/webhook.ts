import { stripe } from '@/app/lib/stripe'
import { headers } from 'next/headers'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('stripe-signature') || ''

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    )
  } catch (error) {
    console.error('Webhook signature verification failed', error)
    return new Response('Webhook Error', { status: 400 })
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        console.log('Subscription updated:', event.data.object)
        // TODO: Update user subscription in database
        break

      case 'customer.subscription.deleted':
        console.log('Subscription cancelled:', event.data.object)
        // TODO: Cancel user subscription in database
        break

      case 'invoice.payment_succeeded':
        console.log('Payment succeeded:', event.data.object)
        // TODO: Record payment in database
        break

      default:
        console.log(\Unhandled event type: \\)
    }

    return new Response('Webhook processed', { status: 200 })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return new Response('Webhook Error', { status: 500 })
  }
}
