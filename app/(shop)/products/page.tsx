// ⚠️ LAUNCH GATE: This page is NOT considered complete until all required items in
//    `.agents/ecommerce-launch-checklist.md` are checked off.
//    See sections 8 (Collection Pages), 9 (Product Page), 11 (Anti-Patterns), 12 (Pre-Flight).
//    Do not run paid ads at this Shop section until Section 12 is GREEN.

'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'
import { useCart } from '../../context/CartContext'
import { PRODUCTS, type Product } from '../../data/products'

function ProductRow({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false)
  const { addItem, items } = useCart()
  const inCart = items.some(i => i.id === product.id)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      icon: product.icon,
      type: product.type,
    })
    toast.success(`Added to cart`)
  }

  return (
    <div className="bg-[#1a1a2e] border border-white/10 hover:border-[#4ecdc4]/60 rounded-xl overflow-hidden transition">
      <div className="flex gap-0">
        {/* Image */}
        <div className="relative w-36 sm:w-48 flex-shrink-0 bg-white/10 flex items-center justify-center">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-3"
              sizes="192px"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full py-6 px-3 text-center">
              <span className="text-4xl mb-2">{product.icon ?? '📄'}</span>
              <span className="text-xs text-white/40 uppercase tracking-wide">PDF</span>
            </div>
          )}
          {product.badge && (
            <span className="absolute top-2 left-2 bg-[#4ecdc4] text-white text-xs font-bold px-2 py-0.5 rounded z-10">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-3 mb-1">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-left text-base sm:text-lg font-bold text-white hover:text-[#4ecdc4] transition leading-snug"
              >
                {product.icon && <span className="mr-2">{product.icon}</span>}
                {product.name}
                <span className="ml-2 text-[#4ecdc4] text-sm font-normal">
                  {expanded ? '▲ less' : '▼ more'}
                </span>
              </button>
              <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded flex-shrink-0">
                {product.category}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{product.description}</p>

            {/* Accordion */}
            {expanded && (
              <p className="text-white/70 text-sm leading-relaxed mt-3 pt-3 border-t border-white/20">
                {product.details}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mt-4 gap-3 flex-wrap">
            <div>
              <span className="text-gray-600 line-through text-sm block">${product.compareAt.toFixed(2)}</span>
              <span className="text-xl font-bold text-[#4ecdc4]">${product.price.toFixed(2)}</span>
            </div>
            <Button
              onClick={handleAddToCart}
              className={`px-5 py-2 text-sm flex-shrink-0 ${inCart ? 'bg-green-700 hover:bg-green-700' : ''}`}
            >
              {inCart ? '✓ In Cart' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const digital = PRODUCTS.filter(p => p.type === 'digital')
  const physical = PRODUCTS.filter(p => p.type === 'physical')
  const { itemCount } = useCart()

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      {/* Header */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4ecdc4] font-semibold mb-3">Big Willie Style</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">The Shop</h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Every product here passed one test: would I use it myself and recommend it to someone I respect? If the answer was no, it didn&apos;t make the cut.
            </p>
          </div>
          {itemCount > 0 && (
            <Link href="/cart">
              <button className="flex items-center gap-2 bg-[#4ecdc4] hover:bg-[#3db8b0] text-white px-5 py-3 rounded-xl font-semibold transition mt-2">
                🛒 Cart ({itemCount})
              </button>
            </Link>
          )}
        </div>
      </section>

      {/* Digital Products */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold">🖥️ Digital Products</h2>
          <span className="text-xs text-white/40 bg-white/10 border border-white/20 px-3 py-1 rounded-full">Instant Access</span>
        </div>
        <div className="space-y-4">
          {digital.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="border-t border-white/10" />
      </div>

      {/* Physical Products */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold">📦 Physical Products</h2>
          <span className="text-xs text-white/40 bg-white/10 border border-white/20 px-3 py-1 rounded-full">Ships to You</span>
        </div>
        <div className="space-y-4">
          {physical.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Bottom Checkout CTA */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold text-white mb-1">Ready to check out?</p>
            <p className="text-white/50 text-sm">
              {itemCount > 0 ? `You have ${itemCount} item${itemCount > 1 ? 's' : ''} in your cart.` : 'Add items above and come back here when you\'re done.'}
            </p>
          </div>
          <Link href="/cart">
            <button className={`px-8 py-4 rounded-xl font-bold text-lg transition ${itemCount > 0 ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-700 text-white/50 cursor-default'}`}>
              {itemCount > 0 ? `🛒 Go to Checkout (${itemCount})` : '🛒 Your cart is empty'}
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}



