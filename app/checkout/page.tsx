'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { loadStripe } from '@stripe/js'
import { useEffect } from 'react'

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tier = searchParams.get('tier') || 'basic'

  useEffect(() => {
    const initiateCheckout = async () => {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier }),
      })

      const { sessionId } = await response.json()
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      await stripe?.redirectToCheckout({ sessionId })
    }

    initiateCheckout()
  }, [tier])

  return <div className="text-center py-20">Loading checkout...</div>
}
