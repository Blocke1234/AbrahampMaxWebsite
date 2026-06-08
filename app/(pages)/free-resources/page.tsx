'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'

const COUNTRIES = [
  {
    flag: '🇯🇵',
    country: 'Japan',
    tagline: 'Precision & longevity built into everything.',
    products: [
      { name: 'Hario V60 Pour-Over Coffee Dripper', use: 'The cleanest cup of coffee you\'ll ever make. Japanese engineering applied to your morning routine.' },
      { name: 'Shiseido Sunscreen SPF 50+', use: 'The gold standard in UV protection. Japan takes skincare seriously — this is proof.' },
      { name: 'Muji Gel Pen (0.38mm)', use: 'The smoothest everyday pen on the planet. Once you write with it, every other pen feels broken.' },
    ],
  },
  {
    flag: '🇩🇪',
    country: 'Germany',
    tagline: 'Built to last. Engineered to perform.',
    products: [
      { name: 'Rimowa Luggage', use: 'German-built aluminum carry-on. Travels the world without breaking. Buy once, travel forever.' },
      { name: 'Braun Electric Razor Series 9', use: 'German precision on your face every morning. Closest shave, zero irritation.' },
      { name: 'Leitz Binder / File Organizer', use: 'German office organization that actually makes your paperwork disappear. Used in every serious European office.' },
    ],
  },
  {
    flag: '🇰🇷',
    country: 'South Korea',
    tagline: 'Skincare, tech, and daily habits redefined.',
    products: [
      { name: 'COSRX Snail Mucin Essence', use: 'The most effective skin repair product most Americans have never heard of. Add it after washing your face.' },
      { name: 'Gua Sha Stone (Rose Quartz)', use: 'Korean facial massage tool. 5 minutes in the morning reduces puffiness and improves circulation.' },
      { name: 'Korean Rice Water Hair Treatment', use: 'Ancient Korean hair secret. Strengthens and grows hair faster — backed by modern testing.' },
    ],
  },
  {
    flag: '🇮🇳',
    country: 'India',
    tagline: 'Ancient wisdom that modern science is still catching up to.',
    products: [
      { name: 'Ashwagandha (KSM-66)', use: 'India\'s most studied adaptogen. Reduces cortisol, improves sleep, builds stress resilience. Take it nightly.' },
      { name: 'Neem Oil', use: 'Used for thousands of years for skin, hair, and scalp health. One bottle covers everything.' },
      { name: 'Copper Water Bottle', use: 'Ayurvedic practice — drinking water stored overnight in copper has documented antimicrobial benefits.' },
    ],
  },
  {
    flag: '🇮🇹',
    country: 'Italy',
    tagline: 'The world\'s standard for quality you can taste and wear.',
    products: [
      { name: 'Moka Pot (Bialetti)', use: 'Italian stovetop espresso maker. Stronger than a drip machine, cheaper than a barista. A daily ritual.' },
      { name: 'Italian Olive Oil (Extra Virgin, DOP Certified)', use: 'Not all olive oil is equal. Real Italian EVOO has measurable health benefits — anti-inflammatory, heart-protective.' },
      { name: 'Leather Dress Belt (vegetable-tanned)', use: 'Italian vegetable-tanned leather lasts decades. Buy one good belt instead of five cheap ones.' },
    ],
  },
  {
    flag: '🇧🇷',
    country: 'Brazil',
    tagline: 'Recovery, energy, and body culture done right.',
    products: [
      { name: 'Açaí (raw, unsweetened)', use: 'Brazil\'s superfood — antioxidant density that most berries can\'t match. Eat it as a bowl, not a smoothie chain product.' },
      { name: 'Guaraná Energy Powder', use: 'Natural caffeine source used across Brazil. Smoother energy curve than coffee, no crash.' },
      { name: 'Brazilian Hammock', use: 'Recovery tool the whole country uses. 20 minutes horizontal mid-day reduces inflammation and resets focus.' },
    ],
  },
]

export default function FreeResourcesPage() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('You\'re in. Check your email.')
      setEmail('')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">

      {/* Header */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#4ecdc4] font-semibold mb-4">Free Resources</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Best of the World<br className="hidden md:block" /> Around You
        </h1>
        <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
          I&apos;ve been to six countries and lived in seven states. Every culture has something the rest of the world is sleeping on.
          These are the products and habits worth stealing — things that actually improve your day-to-day life.
          All free to read. No signup required.
        </p>
      </section>

      {/* Country Cards */}
      <section className="px-6 pb-20 max-w-6xl mx-auto space-y-12">
        {COUNTRIES.map((entry, i) => (
          <div key={i} className="bg-[#1a1a2e] border border-white/10 hover:border-[#4ecdc4]/50 rounded-2xl overflow-hidden transition">

            {/* Country Header */}
            <div className="flex items-center gap-4 px-8 py-6 border-b border-white/10 bg-[#0a0a1a]">
              <span className="text-4xl">{entry.flag}</span>
              <div>
                <h2 className="text-2xl font-bold text-white">{entry.country}</h2>
                <p className="text-white/40 text-sm">{entry.tagline}</p>
              </div>
            </div>

            {/* Products */}
            <div className="divide-y divide-gray-800">
              {entry.products.map((product, j) => (
                <div key={j} className="px-8 py-5 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#4ecdc4]/20 border border-[#4ecdc4]/40 text-[#4ecdc4] text-xs font-bold flex items-center justify-center">
                      {j + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{product.name}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{product.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Email capture */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-[#4ecdc4]/30 rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Want More Like This?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            Drop your email and I&apos;ll send new country breakdowns, product finds, and resources directly to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3 rounded-xl bg-[#0f0f23] text-white border border-white/20 focus:border-[#4ecdc4] outline-none transition text-sm"
            />
            <Button type="submit" disabled={isSubscribing} className="px-6 py-3 whitespace-nowrap">
              {isSubscribing ? 'Sending…' : 'Send It →'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

