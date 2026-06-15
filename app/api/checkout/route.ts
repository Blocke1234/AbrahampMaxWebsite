import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { BUNDLE_DISCOUNT, qualifiesForBundle } from '../../data/products'

// ============================================================
// STRIPE CHECKOUT API ROUTE
// Supports two shapes:
//  1) { items: [{ name, price, quantity, image? }], customerEmail?, bundle? }
//     → builds inline line items (no pre-made Stripe Price IDs needed).
//       When `bundle` is true AND the order qualifies, applies a
//       server-validated 20% discount (we never trust a client price).
//  2) { priceId, quantity } → legacy single-item path (homepage).
// Set STRIPE_SECRET_KEY in your Vercel environment variables.
// ============================================================

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

interface IncomingItem {
  id?: string
  name: string
  price: number
  quantity?: number
  image?: string
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.vercel.app'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { priceId, quantity = 1, items, customerEmail, bundle } = body

    let line_items: Stripe.Checkout.SessionCreateParams.LineItem[]

    if (Array.isArray(items) && items.length > 0) {
      // ---- Multi-item path (cart + bundle) ----
      const distinctIds = new Set(
        (items as IncomingItem[]).map((i, idx) => i.id ?? `${i.name}-${idx}`)
      )
      const applyDiscount = bundle === true && qualifiesForBundle(distinctIds.size)
      const multiplier = applyDiscount ? 1 - BUNDLE_DISCOUNT : 1

      line_items = (items as IncomingItem[]).map((i) => {
        const unitPrice = Number(i.price)
        if (!i.name || !Number.isFinite(unitPrice) || unitPrice <= 0) {
          throw new Error('Invalid item in cart')
        }
        const qty = Math.max(1, Math.floor(Number(i.quantity) || 1))
        // Stripe wants the smallest currency unit (cents), as an integer.
        const unitAmount = Math.round(unitPrice * multiplier * 100)
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: i.name,
              ...(i.image && i.image.startsWith('http') ? { images: [i.image] } : {}),
            },
            unit_amount: unitAmount,
          },
          quantity: qty,
        }
      })
    } else if (priceId) {
      // ---- Legacy single-item path ----
      line_items = [{ price: priceId, quantity }]
    } else {
      return NextResponse.json(
        { error: 'Provide either items[] or a priceId.' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      ...(customerEmail ? { customer_email: customerEmail } : {}),
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/cart`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU'],
      },
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
