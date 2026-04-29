// ⚠️ LAUNCH GATE: This page is NOT considered complete until all required items in
//    `.agents/ecommerce-launch-checklist.md` are checked off.
//    See sections 8 (Collection Pages), 9 (Product Page), 11 (Anti-Patterns), 12 (Pre-Flight).
//    Do not run paid ads at this Shop section until Section 12 is GREEN.

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'

interface Product {
  id: string
  name: string
  price: number
  compareAt: number
  description: string
  image: string
  category: string
  badge?: string
}

const PRODUCTS: Product[] = [
  {
    id: 'neck-massager',
    name: '4D Shiatsu Neck & Shoulder Massager with Heat',
    price: 89.99,
    compareAt: 149.99,
    description: 'Deep-tissue kneading nodes with infrared heat therapy. 15 minutes is all your neck and shoulders need to recover from the grind.',
    image: '/products/neck-massager.jpg',
    category: 'Wellness',
    badge: 'Flagship',
  },
  {
    id: 'rfid-wallet',
    name: 'Genuine Leather RFID-Blocking Trifold Wallet',
    price: 27.99,
    compareAt: 49.99,
    description: 'Real leather. RFID-blocking technology. ID window, multiple card slots, and a bill compartment built to last. The wallet you stop replacing.',
    image: '/products/rfid-wallet.jpg',
    category: 'Accessories',
  },
  {
    id: 'tool-card',
    name: '46-in-1 Stainless Steel Pocket Multi-Tool Card',
    price: 14.99,
    compareAt: 24.99,
    description: '46 tools in one credit-card-sized piece of stainless steel. Hex wrenches, screwdrivers, bottle opener, phone stand — fits in your wallet.',
    image: '/products/tool-card.jpg',
    category: 'Accessories',
    badge: 'Best Value',
  },
  {
    id: 'travel-adapter',
    name: 'Universal Travel Adapter — USB-C PD Fast Charge',
    price: 39.99,
    compareAt: 59.99,
    description: 'Covers every outlet on the planet: US, UK, EU, Australia. 3 USB-A ports + 1 USB-C PD. Charge everything at once.',
    image: '/products/travel-adapter.jpg',
    category: 'Travel',
    badge: 'Staff Pick',
  },
  {
    id: 'posture-corrector',
    name: 'Smart Posture Corrector — Rechargeable with Vibration Alert',
    price: 24.99,
    compareAt: 44.99,
    description: "Vibrates the second you slouch. Rechargeable, invisible under clothes, built-in LCD. The military taught me what bad posture costs — back pain, neck strain, and a presence that doesn't command a room.",
    image: '/products/posture-corrector.jpg',
    category: 'Wellness',
    badge: 'Cash Cow',
  },
  {
    id: 'acupressure-mat',
    name: 'TOMSHOO Acupressure Mat & Pillow Recovery Set',
    price: 64.99,
    compareAt: 99.99,
    description: 'Mat, pillow, and massage balls in a carry bag. 15 minutes on this after a long day and the tension melts. Thousands of pressure points target your back, neck, and feet.',
    image: '/products/acupressure-mat.jpg',
    category: 'Recovery',
  },
  {
    id: 'red-light-panel',
    name: 'LED Red Light Therapy Panel — 225 LEDs for Skin & Recovery',
    price: 64.99,
    compareAt: 109.99,
    description: "Red light therapy for skin rejuvenation, muscle recovery, and pain relief. 225 medical-grade LEDs, 15 minutes a day. Recovery isn't a luxury — it's the edge.",
    image: '/products/red-light-panel.jpg',
    category: 'Recovery',
    badge: 'Trending',
  },
]

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const toggleProduct = (id: string) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  const handleAddToCart = (product: Product) => {
    toggleProduct(product.id)
    toast.success(`Added ${product.name} to cart`)
  }

  const getTotalPrice = () => {
    return PRODUCTS
      .filter(p => selectedProducts.includes(p.id))
      .reduce((sum, p) => sum + p.price, 0)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">The Shop</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Every product here passed one test: would I use it myself and recommend it to someone I respect? If the answer was no, it didn&apos;t make the cut.
        </p>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition flex flex-col"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center relative">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                  {product.category}
                </span>
                <span className="text-gray-500 text-sm">Image coming soon</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 leading-tight">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{product.description}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-gray-500 line-through text-sm block">${product.compareAt.toFixed(2)}</span>
                    <span className="text-2xl font-bold text-purple-400">${product.price.toFixed(2)}</span>
                  </div>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="px-4 py-2 text-sm"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {selectedProducts.length > 0 && (
          <div className="bg-gray-900 p-8 rounded-lg border-2 border-purple-500 fixed bottom-8 right-8 max-w-sm">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <div className="space-y-2 mb-6">
              {PRODUCTS.filter(p => selectedProducts.includes(p.id)).map(p => (
                <div key={p.id} className="flex justify-between text-gray-300">
                  <span>{p.name}</span>
                  <span>${p.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-purple-400">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            <Link href="/checkout" className="w-full">
              <Button className="w-full">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
