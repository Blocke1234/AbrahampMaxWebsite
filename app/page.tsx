import Link from 'next/link'
import { Button } from './components/ui/Button'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section — Credibility Stack (Pattern A) */}
      <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* Credibility eyebrow — earns trust in <3 seconds */}
          <p className="uppercase tracking-widest text-xs md:text-sm text-purple-400 font-semibold mb-6">
            Veteran · Licensed · 7 States · 7 Countries · 10 Years in Sales
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Not Another Guru.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              The Man With the Receipts.
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            This is the hub for everything I&apos;m building — content, products, and a community that actually moves forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90">
                Shop Now
              </Button>
            </Link>
            <a href="https://discord.gg/ThpTfdhVv" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-lg px-8 py-4">
                Join the Discord
              </Button>
            </a>
          </div>

          {/* Risk reversal */}
          <p className="text-sm text-gray-500 mt-6">
            Free community · Real products · No fluff
          </p>
        </div>
      </section>

      {/* Credibility Bar — concrete proof above features */}
      <section className="bg-gray-950 border-y border-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { stat: '4 Years', label: 'Active Military' },
            { stat: '2 Licenses', label: 'Life Insurance + Tax' },
            { stat: '10 Years', label: 'Sales Experience' },
            { stat: '7 States', label: 'Lived' },
            { stat: '7 Countries', label: 'Visited' },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{item.stat}</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">What&apos;s Inside</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Three sides of the brand. One home base.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Resources',
                description:
                  'Best products from around the world — curated by someone who\'s actually been there.',
                href: '/free-resources',
              },
              {
                title: 'The Shop',
                description:
                  'Digital guides and physical products I actually use — vetted, not affiliate-spammed.',
                href: '/products',
              },
              {
                title: 'The Community',
                description:
                  'Free Discord — real conversations, exclusive drops, and direct access. Not a forum full of bots.',
                href: 'https://discord.gg/ThpTfdhVv',
              },
            ].map((feature, idx) => (
              <Link
                key={idx}
                href={feature.href}
                className="bg-black p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition block"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Pull Up a Chair.</h2>
        <p className="text-xl text-gray-300 mb-8">
          Browse the shop · Read free resources · Join the Discord
        </p>
        <Link href="/about">
          <Button className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600">
            Learn More About Me
          </Button>
        </Link>
      </section>
    </div>
  )
}
