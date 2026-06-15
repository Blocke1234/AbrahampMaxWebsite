'use client'

export const dynamic = 'force-dynamic'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Button } from '../../components/ui/Button'
import {
  PRODUCTS,
  BUNDLE_MIN_ITEMS,
  BUNDLE_DISCOUNT,
  qualifiesForBundle,
} from '../../data/products'

export default function BundlePage() {
  // selected product ids
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [email, setEmail] = useState('')
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const selectAll = () => setSelected(new Set(PRODUCTS.map(p => p.id)))
  const clearAll = () => setSelected(new Set())

  const chosen = useMemo(
    () => PRODUCTS.filter(p => selected.has(p.id)),
    [selected]
  )

  const subtotal = chosen.reduce((sum, p) => sum + p.price, 0)
  const qualifies = qualifiesForBundle(chosen.length)
  const discount = qualifies ? subtotal * BUNDLE_DISCOUNT : 0
  const total = subtotal - discount
  const itemsToNextDeal = Math.max(0, BUNDLE_MIN_ITEMS - chosen.length)

  const handleCheckout = async () => {
    if (chosen.length === 0) {
      toast.error('Select at least one product')
      return
    }
    if (!email || !email.includes('@')) {
      toast.error('Enter a valid email for your receipt')
      return
    }
    setIsCheckingOut(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: chosen.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            quantity: 1,
            image: p.image,
          })),
          customerEmail: email,
          bundle: true,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error || 'Checkout failed')
      window.location.href = data.url
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong. Please try again.')
      setIsCheckingOut(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      {/* Header */}
      <section className="px-6 pt-20 pb-8 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#4ecdc4] font-semibold mb-3">
          Build Your Bundle
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mix, match & save 20%.</h1>
        <p className="text-lg text-white/70 max-w-2xl">
          Tick any <span className="text-white font-semibold">{BUNDLE_MIN_ITEMS} or more</span> products
          below and 20% comes off your whole order automatically at checkout. No codes, no fuss.
        </p>

        <div className="flex items-center gap-4 mt-6 text-sm">
          <button onClick={selectAll} className="text-[#4ecdc4] hover:text-[#3db8b0] font-semibold transition">
            Select all
          </button>
          <span className="text-white/20">|</span>
          <button onClick={clearAll} className="text-white/50 hover:text-white font-semibold transition">
            Clear
          </button>
        </div>
      </section>

      {/* Layout: product grid + sticky summary */}
      <section className="px-6 pb-24 max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-10 items-start">
        {/* Selectable product grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {PRODUCTS.map(product => {
            const isSelected = selected.has(product.id)
            return (
              <button
                key={product.id}
                onClick={() => toggle(product.id)}
                aria-pressed={isSelected}
                className={`text-left flex gap-4 p-4 rounded-xl border transition ${
                  isSelected
                    ? 'border-[#4ecdc4] bg-[#4ecdc4]/10 ring-1 ring-[#4ecdc4]/40'
                    : 'border-white/10 bg-[#1a1a2e] hover:border-white/30'
                }`}
              >
                {/* Checkbox */}
                <span
                  className={`mt-1 flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition ${
                    isSelected ? 'bg-[#4ecdc4] border-[#4ecdc4] text-[#0f0f23]' : 'border-white/30'
                  }`}
                >
                  {isSelected && <span className="text-sm font-black">✓</span>}
                </span>

                {/* Thumb */}
                <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} width={64} height={64} className="object-contain p-1" />
                  ) : (
                    <span className="text-2xl">{product.icon ?? '📄'}</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white leading-snug">{product.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{product.category}</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[#4ecdc4] font-bold">${product.price.toFixed(2)}</span>
                    <span className="text-gray-600 line-through text-xs">${product.compareAt.toFixed(2)}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Sticky summary / checkout box */}
        <div className="lg:sticky lg:top-24 bg-[#1a1a2e] border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-4">Your Bundle</h2>

          {chosen.length === 0 ? (
            <p className="text-white/40 text-sm mb-6">
              Nothing selected yet. Tick products on the left to start building.
            </p>
          ) : (
            <ul className="space-y-2 mb-5 max-h-52 overflow-auto pr-1">
              {chosen.map(p => (
                <li key={p.id} className="flex justify-between gap-3 text-sm">
                  <span className="text-white/70 truncate">{p.icon} {p.name}</span>
                  <span className="text-white/90 flex-shrink-0">${p.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="border-t border-white/10 pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-white/60">
              <span>Subtotal ({chosen.length})</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className={qualifies ? 'text-[#4ecdc4] font-semibold' : 'text-white/30'}>
                Bundle discount (20%)
              </span>
              <span className={qualifies ? 'text-[#4ecdc4] font-semibold' : 'text-white/30'}>
                −${discount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {!qualifies && chosen.length > 0 && (
            <p className="text-xs text-[#f0a500] mt-3">
              Add {itemsToNextDeal} more item{itemsToNextDeal > 1 ? 's' : ''} to unlock 20% off.
            </p>
          )}

          <div className="mt-5">
            <label className="block text-xs text-white/50 mb-2">Email for your receipt</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-white/10 border border-white/20 focus:border-[#4ecdc4] rounded-lg px-3 py-2.5 text-white placeholder-gray-500 outline-none transition text-sm"
            />
          </div>

          <Button
            onClick={handleCheckout}
            disabled={isCheckingOut || chosen.length === 0}
            className="w-full py-3 mt-4"
          >
            {isCheckingOut
              ? 'Redirecting…'
              : chosen.length === 0
                ? 'Select products'
                : `Checkout · $${total.toFixed(2)} →`}
          </Button>

          <p className="text-center text-[11px] text-gray-600 mt-3">
            Secured by Stripe · <Link href="/products" className="underline hover:text-white/60">Browse full shop</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
