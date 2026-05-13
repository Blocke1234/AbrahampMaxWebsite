import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export const config = {
  runtime: 'edge',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature') || ''

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET || ''
      )
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle checkout.session.completed for product purchases
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      const customerEmail = session.customer_email || ''
      const sessionId = session.id
      const amountTotal = session.amount_total || 0

      if (!customerEmail) {
        console.warn('No customer email in checkout session')
        return NextResponse.json({ received: true })
      }

      // Log the order to Supabase
      const { error } = await supabase
        .from('orders')
        .insert({
          customer_email: customerEmail,
          stripe_session_id: sessionId,
          amount_total: amountTotal,
          status: 'completed',
          created_at: new Date(),
        })

      if (error) {
        console.error('Supabase order insert error:', error)
        return NextResponse.json(
          { error: 'Failed to log order' },
          { status: 500 }
        )
      }

      console.log(`✅ Order logged for ${customerEmail}: $${(amountTotal / 100).toFixed(2)}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler error' },
      { status: 500 }
    )
  }
}
