'use client'

import Link from 'next/link'
import { Button } from '../../components/ui/Button'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Cart</h1>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 text-center">
          <p className="text-gray-300 text-lg mb-6">Your cart is empty.</p>
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
