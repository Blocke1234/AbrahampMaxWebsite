'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ============================================================
// PRODUCT DATA - Update Stripe Price IDs when ready
// ============================================================
const HERO_PRODUCT = {
  id: 'massager-001',
  name: 'Back Neck & Shoulder Massager',
  tagline: 'Turn long days into calm nights.',
  description: '16 deep-kneading massage heads with optional heat, 3 speeds, direction control, and adjustable straps. 15-minute auto shut-off with overheat protection.',
  originalPrice: 106.65,
  salePrice: 79.99,
  rating: 5,
  reviewCount: 449,
  stripePriceId: 'price_1TfQKS0iayan8LQgf8dbXQxe',
  image: 'https://ergonomiclux.com/cdn/shop/files/1_277def93-2402-48c5-836f-c8c0bfc08506.webp?v=1768458072&width=1946',
  features: [
    { icon: '🔄', text: '16 Deep-Kneading Massage Heads' },
    { icon: '🔥', text: 'Optional Soothing Heat' },
    { icon: '⚡', text: '3 Speeds + Direction Control' },
    { icon: '🎯', text: 'Adjustable Straps for Pressure' },
    { icon: '🛡️', text: '15-Min Auto Shut-Off' },
    { icon: '✅', text: '30-Day Money Back Guarantee' },
  ],
}

const RECOMMENDED_PRODUCTS = [
  {
    id: 'neckwrap-001',
    name: 'Heated Neck Wrap',
    description: 'Microfiber heated therapy wrap for deep muscle relaxation. Pairs perfectly with your massager routine.',
    price: 29.99,
    stripePriceId: 'price_1TfQLY0iayan8LQgr2YXM17q',
    image: '/images/heated-neck-wrap.jpg',
    badge: 'Best Seller',
  },
  {
    id: 'patches-001',
    name: 'Muscle Relief Patches',
    description: 'Bamboo charcoal patches for post-massage recovery. 12-pack for extended relief.',
    price: 14.99,
    stripePriceId: 'price_1TfQM40iayan8LQgf2Ck6TAe',
    image: '/images/muscle-patches.jpg',
    badge: 'Consumable',
  },
  {
    id: 'pillow-001',
    name: 'Cervical Traction Pillow',
    description: 'Ergonomic memory foam pillow designed for neck alignment and overnight recovery.',
    price: 39.99,
    stripePriceId: 'price_1TfQMX0iayan8LQgCWw0v0Pp',
    image: '/images/cervical-pillow.jpg',
    badge: 'Popular',
  },
  {
    id: 'massageball-001',
    name: 'Trigger Point Ball Set',
    description: 'Set of 3 density levels for targeted deep tissue relief. Perfect complement to electric massage.',
    price: 19.99,
    stripePriceId: 'price_1TfQO10iayan8LQgTqUM7yOO',
    image: '/images/massage-balls.jpg',
    badge: null,
  },
  {
    id: 'heatpillow-001',
    name: 'Lavender Heat Pillow',
    description: 'Microwavable aromatherapy pillow. No electronics, pure relaxation with natural lavender.',
    price: 24.99,
    stripePriceId: 'price_1TfQOY0iayan8LQgrhtozrm6',
    image: '/images/lavender-pillow.jpg',
    badge: 'New',
  },
]

const TESTIMONIALS = [
  {
    name: 'Mirabela',
    text: 'The massage heads hit the tight spots in my neck and shoulders, and the optional heat makes it feel extra soothing. I like that I can change the direction and speed, and the straps help me control the pressure exactly how I want.',
    rating: 5,
  },
  {
    name: 'Ethan C.',
    text: 'I put it on after work and the kneading hits the tight spots fast. My shoulders feel looser in minutes.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Marissa L.',
    text: 'The warmth plus massage is so relaxing. I can feel my neck unclench, especially at the end of the day.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Gavin P.',
    text: 'I use it while leaning forward on the couch and it really digs into my upper back. Great pressure without needing someone else.',
    rating: 5,
    verified: true,
  },
]

const FAQ_ITEMS = [
  {
    question: 'What areas does it massage?',
    answer: 'The massager is designed for your neck, shoulders, upper back, and lower back. The ergonomic shape and adjustable straps let you target specific tension points.',
  },
  {
    question: 'Is it safe to use every day?',
    answer: 'Yes! The 15-minute auto shut-off and overheat protection make it safe for daily use. We recommend 1-2 sessions per day for optimal relief.',
  },
  {
    question: 'Will it hurt if my muscles are very tight?',
    answer: 'Start on the lowest speed without heat. The adjustable straps let you control pressure — pull tighter for deeper massage, looser for gentler relief. Most users find relief within the first session.',
  },
  {
    question: 'How long should I use it each session?',
    answer: '10-15 minutes per session is ideal. The auto shut-off activates at 15 minutes to prevent overuse. You can restart immediately if needed.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money back guarantee. If you don\'t love it, send it back for a full refund — no questions asked.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 7-14 business days. Expedited shipping (3-5 business days) is available at checkout.',
  },
]

// ============================================================
// CHECKOUT HANDLER - Connects to your existing Stripe setup
// ============================================================
async function handleCheckout(stripePriceId: string, quantity: number = 1) {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: stripePriceId,
        quantity,
      }),
    })
    const data = await response.json()
    if (data.url) {
      window.location.href = data.url
    }
  } catch (error) {
    console.error('Checkout error:', error)
    alert('Something went wrong. Please try again.')
  }
}

// ============================================================
// COMPONENTS
// ============================================================

function DemoNotice() {
  const [visible, setVisible] = useState(false)
  const [understood, setUnderstood] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('demo_notice_seen')) return
    const t = setTimeout(() => setVisible(true), 4000)
    return () => clearTimeout(t)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('demo_notice_seen', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(6px)' }}>
      <div className="relative bg-[#0f0f23] border border-[#4ecdc4]/40 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
        <button onClick={dismiss} aria-label="Close" className="absolute top-4 right-4 text-white/40 hover:text-white text-xl">✕</button>
        <div className="text-4xl mb-4">🚧</div>
        <h2 className="text-xl font-black text-white mb-3">This Is a Demo — Work in Progress</h2>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Welcome. Right now this site is a <span className="text-[#4ecdc4] font-semibold">live demo</span>, not a fully running store.
          It&apos;s here so you can check in on my progress as an entrepreneur and a coding individual while I keep building.
        </p>
        <p className="text-white/70 text-sm mb-6 leading-relaxed">
          Some links, products, and features aren&apos;t fully wired up yet — and that&apos;s on purpose.
          <span className="text-white font-semibold"> It takes time to perfect excellence</span>, and I&apos;d rather do it right than rush it.
          Thanks for watching it come to life.
        </p>

        <label className="flex items-start gap-3 text-left bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-5 cursor-pointer">
          <input
            type="checkbox"
            checked={understood}
            onChange={e => setUnderstood(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[#4ecdc4] flex-shrink-0"
          />
          <span className="text-white/80 text-sm">I understand this is a demo website that&apos;s still being built.</span>
        </label>

        <button
          onClick={dismiss}
          disabled={!understood}
          className="w-full bg-[#4ecdc4] hover:bg-[#3db8b0] disabled:opacity-40 disabled:cursor-not-allowed text-[#0f0f23] font-bold py-3 rounded-lg text-sm transition"
        >
          Got it — let me look around →
        </button>
      </div>
    </div>
  )
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f23]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-black text-white tracking-tight">Big Willie Style</a>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-white/80 hover:text-[#4ecdc4] transition font-medium text-sm">About</Link>
          <a href="#products" className="text-white/80 hover:text-[#4ecdc4] transition font-medium text-sm">Shop</a>
          <Link href="/free-resources" className="text-white/80 hover:text-[#4ecdc4] transition font-medium text-sm">Free Resources</Link>
          <Link href="/contribute" className="text-white/80 hover:text-[#4ecdc4] transition font-medium text-sm">Contribute</Link>
          <Link href="/cart" className="text-sm px-4 py-2 bg-white text-[#0f0f23] hover:bg-gray-200 rounded-full font-bold transition">🛒 Cart</Link>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f23] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          <Link href="/about" className="text-white/80 hover:text-[#4ecdc4] transition font-medium">About</Link>
          <a href="#products" className="text-white/80 hover:text-[#4ecdc4] transition font-medium">Shop</a>
          <Link href="/free-resources" className="text-white/80 hover:text-[#4ecdc4] transition font-medium">Free Resources</Link>
          <Link href="/contribute" className="text-white/80 hover:text-[#4ecdc4] transition font-medium">Contribute</Link>
          <Link href="/cart" className="btn-primary text-sm py-3 px-6 w-full mt-2 text-center">🛒 Cart</Link>
        </div>
      )}
    </nav>
  )
}

function TrustBar() {
  const items = [
    '✨ Free Shipping',
    '🛡️ 30-Day Money Back Guarantee',
    '⚡ 449+ 5-Star Reviews',
    '📦 Fast Processing',
    '🔒 Secure Checkout',
    '✨ Free Shipping',
    '🛡️ 30-Day Money Back Guarantee',
    '⚡ 449+ 5-Star Reviews',
    '📦 Fast Processing',
    '🔒 Secure Checkout',
  ]

  return (
    <div className="trust-bar mt-[72px]">
      <div className="trust-bar-content">
        {items.map((item, i) => (
          <span key={i} className="text-sm font-bold whitespace-nowrap">{item}</span>
        ))}
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="section-dark py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div className="fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#f0a500] text-xl">★</span>
              ))}
            </div>
            <span className="text-white/60 text-sm">Loved by {HERO_PRODUCT.reviewCount}+ customers</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
            {HERO_PRODUCT.tagline}
          </h1>

          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            {HERO_PRODUCT.description}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/40 line-through text-xl">${HERO_PRODUCT.originalPrice}</span>
            <span className="text-4xl font-black text-[#4ecdc4]">${HERO_PRODUCT.salePrice}</span>
            <span className="sale-badge">25% OFF</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleCheckout(HERO_PRODUCT.stripePriceId)}
              className="btn-primary pulse-cta text-center"
            >
              Buy Now — ${HERO_PRODUCT.salePrice}
            </button>
            <a href="#products" className="btn-secondary text-center">
              View All Products
            </a>
          </div>
        </div>

        {/* Right - Product Image */}
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#4ecdc4]/20 to-[#f0a500]/20 rounded-3xl blur-2xl"></div>
            <img
              src={HERO_PRODUCT.image}
              alt={HERO_PRODUCT.name}
              className="relative w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="gradient-text">Built for daily relief</span> where you hold tension most.
        </h2>
        <p className="text-center text-gray-500 text-lg mb-16 max-w-2xl mx-auto">
          Professional-grade massage therapy, from the comfort of your couch.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HERO_PRODUCT.features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#faf9f6] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg text-[#0f0f23]">{feature.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProofSection() {
  return (
    <section className="section-cream py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-black text-[#0f0f23]">449+</div>
            <div className="text-gray-500 font-medium">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#0f0f23]">50%</div>
            <div className="text-gray-500 font-medium">Off Today</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#0f0f23]">30-Day</div>
            <div className="text-gray-500 font-medium">Money Back</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#0f0f23]">Free</div>
            <div className="text-gray-500 font-medium">Shipping</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          Real results, <span className="gradient-text">real customers.</span>
        </h2>
        <p className="text-center text-gray-500 text-lg mb-16">
          Join hundreds who&apos;ve found relief.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#faf9f6] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-[#f0a500]">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#0f0f23]">{testimonial.name}</span>
                {testimonial.verified && (
                  <span className="text-xs bg-[#4ecdc4]/20 text-[#3db8b0] px-2 py-0.5 rounded-full font-medium">
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="products" className="section-dark py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-4">
          complete your <span className="text-[#4ecdc4]">recovery ritual.</span>
        </h2>
        <p className="text-center text-white/60 text-lg mb-16 max-w-2xl mx-auto">
          Pair your massager with these hand-picked recovery essentials for the ultimate relaxation experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECOMMENDED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-2xl overflow-hidden"
            >
              {/* Product Image Placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl opacity-30">📦</span>
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-[#4ecdc4] text-[#0f0f23] text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#0f0f23] mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#0f0f23]">${product.price}</span>
                  <button
                    onClick={() => handleCheckout(product.stripePriceId)}
                    className="bg-[#0f0f23] text-white font-bold py-3 px-6 rounded-full text-sm hover:bg-[#1a1a2e] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#4ecdc4]/10 to-[#f0a500]/10 rounded-3xl p-12 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Bundle & Save 20%
          </h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Pick any 3 or more products and save 20% automatically at checkout.
          </p>
          <Link href="/bundle" className="btn-primary inline-block">
            Build Your Bundle
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          frequently asked <span className="gradient-text">questions.</span>
        </h2>
        <p className="text-center text-gray-500 text-lg mb-12">
          Everything you need to know before you buy.
        </p>

        <div className="space-y-0">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full py-6 px-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-[#0f0f23] text-lg pr-4">{item.question}</span>
                <span className="text-2xl text-[#4ecdc4] flex-shrink-0">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-4 pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="section-dark py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          ready to feel the <span className="text-[#4ecdc4]">difference?</span>
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
          Join 449+ customers who turned their long days into calm nights. 30-day money back guarantee — zero risk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleCheckout(HERO_PRODUCT.stripePriceId)}
            className="btn-primary pulse-cta text-center"
          >
            Get Your Massager — $79.99
          </button>
        </div>
        <p className="text-white/40 text-sm mt-6">
          🔒 Secure checkout powered by Stripe • Free shipping included
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0a0a1a] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-4">Big Willie Style</h3>
            <p className="text-white/50 leading-relaxed max-w-sm">
              Premium wellness and recovery products designed for everyday relief. Turn long days into calm nights.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-white/50 hover:text-[#4ecdc4] transition">All Products</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#4ecdc4] transition">Massager</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#4ecdc4] transition">Recovery</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#4ecdc4] transition">Bundles</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-white/50 hover:text-[#4ecdc4] transition">FAQ</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#4ecdc4] transition">Shipping Policy</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#4ecdc4] transition">Returns</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#4ecdc4] transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Big Willie Style. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-[#4ecdc4] transition text-sm">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-[#4ecdc4] transition text-sm">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-[#4ecdc4] transition text-sm">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function Home() {
  return (
    <main>
      <DemoNotice />
      <Navbar />
      <TrustBar />
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <TestimonialsSection />
      <ProductsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
