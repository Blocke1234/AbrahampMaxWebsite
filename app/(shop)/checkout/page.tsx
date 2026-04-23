'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'

export default function CheckoutPage() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Checkout</h1>
          <p className="text-xl text-gray-300 mb-8">Please sign in to complete your purchase.</p>
          <Link href="/login">
            <Button className="text-lg px-8 py-4">Sign In</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Checkout</h1>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 text-center">
          <p className="text-gray-300 text-lg mb-6">No items in cart. Add products before checking out.</p>
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
