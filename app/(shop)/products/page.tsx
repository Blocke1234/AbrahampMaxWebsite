// ⚠️ LAUNCH GATE: This page is NOT considered complete until all required items in
//    `.agents/ecommerce-launch-checklist.md` are checked off.
//    See sections 8 (Collection Pages), 9 (Product Page), 11 (Anti-Patterns), 12 (Pre-Flight).
//    Do not run paid ads at this Shop section until Section 12 is GREEN.

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'
import { useCart } from '../../context/CartContext'

interface Product {
  id: string
  name: string
  price: number
  compareAt: number
  description: string
  details: string
  image: string
  category: string
  type: 'digital' | 'physical'
  badge?: string
  icon?: string
}

const PRODUCTS: Product[] = [
  // ── DIGITAL ────────────────────────────────────────────────────────────────
  {
    id: 'driving-guide',
    name: 'The Driving Guide',
    price: 5,
    compareAt: 15,
    description: 'Everything you need to know behind the wheel — one PDF, one price.',
    details: 'A straightforward PDF guide covering driving fundamentals, safety habits, and road knowledge. One-time purchase. Instant download after checkout.',
    image: '',
    category: 'PDF Guide',
    type: 'digital',
    icon: '🚗',
  },
  {
    id: 'financial-literacy-2026',
    name: 'Financial Literacy for 2026',
    price: 30,
    compareAt: 60,
    description: 'Your money playbook for 2026 — budgeting, investing, and building wealth.',
    details: 'A comprehensive PDF breaking down financial literacy for the modern era. Covers budgeting frameworks, investment basics, credit management, and wealth-building strategies relevant to 2026 and beyond. One-time purchase. Instant download.',
    image: '',
    category: 'PDF Guide',
    type: 'digital',
    badge: 'Featured',
    icon: '💰',
  },
  {
    id: 'successful-young-man',
    name: 'How to Be a Successful Young Man',
    price: 5,
    compareAt: 15,
    description: 'The blueprint nobody handed me — discipline, mindset, and making moves.',
    details: 'A direct, no-fluff PDF guide written from lived experience. Covers mindset, discipline, relationships, money habits, and how to carry yourself in rooms that matter. One-time purchase. Instant download.',
    image: '',
    category: 'PDF Guide',
    type: 'digital',
    icon: '👑',
  },

  // ── PHYSICAL ───────────────────────────────────────────────────────────────
  {
    id: 'neck-massager',
    name: '4D Shiatsu Neck & Shoulder Massager with Heat',
    price: 89.99,
    compareAt: 149.99,
    description: 'Deep-tissue kneading with infrared heat. 15 minutes is all you need.',
    details: 'Deep-tissue kneading nodes with infrared heat therapy. 15 minutes is all your neck and shoulders need to recover from the grind. Cordless, rechargeable, auto shut-off after 15 min.',
    image: '/products/neck-massager.jpg',
    category: 'Wellness',
    type: 'physical',
    badge: 'Flagship',
    icon: '💆',
  },
  {
    id: 'rfid-wallet',
    name: 'Genuine Leather RFID-Blocking Trifold Wallet',
    price: 27.99,
    compareAt: 49.99,
    description: 'Real leather. RFID-blocking tech. The wallet you stop replacing.',
    details: 'Real leather. RFID-blocking technology. ID window, multiple card slots, and a bill compartment built to last. The wallet you stop replacing every year.',
    image: '/products/rfid-wallet.jpg',
    category: 'Accessories',
    type: 'physical',
    icon: '👜',
  },
  {
    id: 'tool-card',
    name: '46-in-1 Stainless Steel Pocket Multi-Tool Card',
    price: 14.99,
    compareAt: 24.99,
    description: '46 tools in one credit-card-sized piece of steel. Fits in your wallet.',
    details: '46 tools in one credit-card-sized piece of stainless steel. Hex wrenches, screwdrivers, bottle opener, phone stand — fits in your wallet. TSA-compliant.',
    image: '/products/tool-card.jpg',
    category: 'Accessories',
    type: 'physical',
    badge: 'Best Value',
    icon: '🔧',
  },
  {
    id: 'travel-adapter',
    name: 'Universal Travel Adapter — USB-C PD Fast Charge',
    price: 39.99,
    compareAt: 59.99,
    description: 'Every outlet on the planet covered. 3 USB-A + 1 USB-C PD.',
    details: 'Covers every outlet on the planet: US, UK, EU, Australia. 3 USB-A ports + 1 USB-C PD. Charge everything at once. Compact enough for a carry-on pocket.',
    image: '/products/travel-adapter.jpg',
    category: 'Travel',
    type: 'physical',
    badge: 'Staff Pick',
    icon: '✈️',
  },
  {
    id: 'posture-corrector',
    name: 'Smart Posture Corrector — Rechargeable with Vibration Alert',
    price: 24.99,
    compareAt: 44.99,
    description: 'Vibrates the second you slouch. Invisible under clothes.',
    details: 'Vibrates the second you slouch. Rechargeable, invisible under clothes, built-in LCD. The military taught me what bad posture costs — back pain, neck strain, and a presence that doesn\'t command a room.',
    image: '/products/posture-corrector.jpg',
    category: 'Wellness',
    type: 'physical',
    badge: 'Cash Cow',
    icon: '🧍',
  },
  {
    id: 'acupressure-mat',
    name: 'TOMSHOO Acupressure Mat & Pillow Recovery Set',
    price: 64.99,
    compareAt: 99.99,
    description: 'Mat, pillow, massage balls. 15 minutes and the tension melts.',
    details: 'Mat, pillow, and massage balls in a carry bag. 15 minutes on this after a long day and the tension melts. Thousands of pressure points target your back, neck, and feet.',
    image: '/products/acupressure-mat.jpg',
    category: 'Recovery',
    type: 'physical',
    icon: '🧘',
  },
  {
    id: 'red-light-panel',
    name: 'LED Red Light Therapy Panel — 225 LEDs',
    price: 64.99,
    compareAt: 109.99,
    description: 'Skin rejuvenation + muscle recovery. 15 minutes a day.',
    details: 'Red light therapy for skin rejuvenation, muscle recovery, and pain relief. 225 medical-grade LEDs, 15 minutes a day. Recovery isn\'t a luxury — it\'s the edge.',
    image: '/products/red-light-panel.avif',
    category: 'Recovery',
    type: 'physical',
    badge: 'Trending',
    icon: '💡',
  },
  {
    id: 'forearm-roller',
    name: 'Forearm Strengthener Wrist Roller — Wooden Handle',
    price: 14.99,
    compareAt: 24.99,
    description: 'Grip strength separates the strong from the average.',
    details: 'Grip strength separates the strong from the average. Wooden handle, steel carabiner clip, hang it anywhere. 3 sets a day and your handshake alone closes deals.',
    image: '/products/forearm-roller.jpg',
    category: 'Fitness',
    type: 'physical',
    icon: '💪',
  },
  {
    id: 'body-scrubber',
    name: 'Exfoliating Body Scrubber Set — Back Scrubber, Glove & Loofah',
    price: 12.99,
    compareAt: 24.99,
    description: 'Three tools, one shower. Clean skin is discipline.',
    details: 'Three tools, one shower. Back scrubber hits where your hands can\'t reach, exfoliating glove clears dead skin, loofah finishes the job. Clean skin isn\'t vanity — it\'s discipline.',
    image: '/products/body-scrubber.avif',
    category: 'Grooming',
    type: 'physical',
    badge: '990+ Reviews',
    icon: '🚿',
  },
  {
    id: 'wedge-pillow',
    name: 'Orthopedic Wedge Pillow — Anti-Snore & Recovery Sleep',
    price: 59.99,
    compareAt: 89.99,
    description: 'Your recovery starts when you sleep. Stop waking up broken.',
    details: 'Adjustable incline eliminates acid reflux, reduces snoring, and keeps your spine aligned. 8 hours of repair instead of 8 hours of damage.',
    image: '/products/wedge-pillow.jpg',
    category: 'Recovery',
    type: 'physical',
    icon: '😴',
  },
]

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
    <div className="bg-gray-900 border border-gray-800 hover:border-purple-500/60 rounded-xl overflow-hidden transition">
      <div className="flex gap-0">
        {/* Image */}
        <div className="relative w-36 sm:w-48 flex-shrink-0 bg-gray-800 flex items-center justify-center">
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
              <span className="text-xs text-gray-500 uppercase tracking-wide">PDF</span>
            </div>
          )}
          {product.badge && (
            <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
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
                className="text-left text-base sm:text-lg font-bold text-white hover:text-purple-400 transition leading-snug"
              >
                {product.icon && <span className="mr-2">{product.icon}</span>}
                {product.name}
                <span className="ml-2 text-purple-400 text-sm font-normal">
                  {expanded ? '▲ less' : '▼ more'}
                </span>
              </button>
              <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded flex-shrink-0">
                {product.category}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>

            {/* Accordion */}
            {expanded && (
              <p className="text-gray-300 text-sm leading-relaxed mt-3 pt-3 border-t border-gray-700">
                {product.details}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mt-4 gap-3 flex-wrap">
            <div>
              <span className="text-gray-600 line-through text-sm block">${product.compareAt.toFixed(2)}</span>
              <span className="text-xl font-bold text-purple-400">${product.price.toFixed(2)}</span>
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3">Big Willie Style</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">The Shop</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Every product here passed one test: would I use it myself and recommend it to someone I respect? If the answer was no, it didn&apos;t make the cut.
            </p>
          </div>
          {itemCount > 0 && (
            <Link href="/cart">
              <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-semibold transition mt-2">
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
          <span className="text-xs text-gray-500 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full">Instant Access</span>
        </div>
        <div className="space-y-4">
          {digital.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="border-t border-gray-800" />
      </div>

      {/* Physical Products */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold">📦 Physical Products</h2>
          <span className="text-xs text-gray-500 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full">Ships to You</span>
        </div>
        <div className="space-y-4">
          {physical.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
