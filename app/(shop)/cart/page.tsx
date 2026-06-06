'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../../context/CartContext'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [email, setEmail] = useState('')

  const handleCheckout = async () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsCheckingOut(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({
            id: i.id,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
            image: i.image,
          })),
          customerEmail: email,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout failed')
      }

      clearCart()
      window.location.href = data.url
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong. Please try again.')
      setIsCheckingOut(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white">
        <section className="px-6 py-20 max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-4xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-400 mb-8">Add something from the shop to get started.</p>
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold">Your Cart</h1>
          <Link href="/products" className="text-sm text-purple-400 hover:text-purple-300 transition">
            ← Keep Shopping
          </Link>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-10">
          {items.map(item => (
            <div key={item.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex gap-4 items-center">
              {/* Thumbnail */}
              <div className="w-16 h-16 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <Image src={item.image} alt={item.name} width={64} height={64} className="object-contain" />
                ) : (
                  <span className="text-2xl">{item.icon ?? '📄'}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">{item.name}</p>
                <p className="text-sm text-gray-400">${item.price.toFixed(2)} each</p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-7 h-7 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white font-bold transition"
                >
                  −
                </button>
                <span className="w-6 text-center font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white font-bold transition"
                >
                  +
                </button>
              </div>

              {/* Line total */}
              <p className="text-purple-400 font-bold w-20 text-right flex-shrink-0">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-600 hover:text-red-400 transition text-lg flex-shrink-0"
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Summary + Checkout */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400 text-lg">Order Total</span>
            <span className="text-3xl font-bold text-white">${total.toFixed(2)}</span>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2">
              Email address — your receipt will be sent here
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-gray-800 border border-gray-700 focus:border-purple-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition"
            />
          </div>

          <Button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="w-full py-4 text-lg"
          >
            {isCheckingOut ? 'Redirecting to checkout...' : `Pay $${total.toFixed(2)} →`}
          </Button>

          <p className="text-center text-xs text-gray-600 mt-4">
            Secured by Stripe · Your payment info is never stored on this site
          </p>
        </div>
      </section>
    </div>
  )
}
