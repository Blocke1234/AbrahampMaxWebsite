import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// ============================================================
// STRIPE CHECKOUT API ROUTE
// Replace STRIPE_SECRET_KEY in your Vercel environment variables
// ============================================================

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: Request) {
  try {
    const { priceId, quantity = 1 } = await request.json()

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      // Update these URLs to match your domain
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.vercel.app'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.vercel.app'}`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU'],
      },
      // Optional: Add automatic tax calculation
      // automatic_tax: { enabled: true },
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
