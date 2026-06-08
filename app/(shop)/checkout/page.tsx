'use client'

import Link from 'next/link'
import { Button } from '../../components/ui/Button'

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f23]">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Checkout</h1>
        <div className="bg-[#1a1a2e] rounded-lg p-8 border border-white/10 text-center">
          <p className="text-white/70 text-lg mb-6">
            Checkout is coming soon. Add items to your cart and we&apos;ll take it from there.
          </p>
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

