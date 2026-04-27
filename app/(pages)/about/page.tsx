'use client'

import Link from 'next/link'
import { Button } from '../../components/ui/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs md:text-sm text-purple-400 font-semibold mb-6">
          The Real Bio · No Templates
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Who I Am, In Plain English
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Veteran. Licensed. Traveled. Spent ten years learning how to sell anything to anyone.
          Now I&apos;m putting all of it in one place — and you&apos;re looking at it.
        </p>
      </section>

      {/* Credibility Stack — Stat Grid */}
      <section className="bg-gray-950 border-y border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Receipts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '4', label: 'Years Active Military' },
              { stat: '10', label: 'Years in Sales' },
              { stat: '7', label: 'U.S. States Lived In' },
              { stat: '6', label: 'Countries Traveled' },
              { stat: 'B.A.', label: 'Bachelor’s Educated' },
              { stat: 'Active', label: 'Life Insurance License' },
              { stat: 'Active', label: 'Tax Preparer License' },
              { stat: 'In Training', label: 'Real Estate License' },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg p-4 hover:border-purple-500 transition">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">My Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I grew up like a lot of people who end up in this game — curious, hungry, and
                allergic to being told what was possible. So I went and found out for myself.
                Four years in uniform. Seven states. Six countries. A Bachelor&apos;s along the way.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Then ten years selling. Insurance, taxes, anything I could earn the license for.
                I learned how people actually decide — not how they say they decide. That&apos;s the
                difference between someone teaching you sales from a YouTube video and someone
                who&apos;s closed in a kitchen, in a parking lot, in three time zones.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This site is everything I&apos;m doing now in one place — the content, the products,
                the exclusive vault. Free to look around. Paid if you want the inner circle.
                That&apos;s the whole pitch. No webinar, no &quot;limited spots,&quot; no fake countdown.
              </p>
              <p className="text-lg font-semibold text-purple-400 leading-relaxed">
                You came here to see if I&apos;m real. I am. Pull up a chair.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/30 to-pink-600/30 border border-purple-500/40 rounded-lg h-96 flex items-center justify-center text-center px-6">
              {/* TODO: replace with actual photo at /public/about-headshot.jpg */}
              <div>
                <div className="text-6xl mb-4">📷</div>
                <p className="text-gray-300 font-semibold">Headshot loading…</p>
                <p className="text-gray-500 text-sm mt-2">
                  Drop a photo at <code className="text-purple-300">/public/about-headshot.jpg</code> and replace this block
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section — replaces fake "Featured Partners" */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">What I Actually Do Here</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Three sides of the brand, one membership.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Content',
              body: 'Free resources for everyone, exclusive material for members. Built from real experience — not recycled hot takes.',
              cta: 'Free Resources',
              href: '/free-resources',
            },
            {
              title: 'Products',
              body: 'A curated shop of life-enhancing products I actually use. No affiliate spam, no dropship surprises.',
              cta: 'Visit Shop',
              href: '/products',
            },
            {
              title: 'Inner Circle',
              body: 'Direct messaging, exclusive vault, live sessions. The Pro tier is the closest you can get without meeting in person.',
              cta: 'See Membership',
              href: '/membership',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition p-8 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{item.body}</p>
              <Link href={item.href} className="text-purple-400 hover:text-purple-300 font-semibold">
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Now You Know.</h2>
        <p className="text-xl text-gray-300 mb-8">
          Free tier · No card required · Cancel anytime
        </p>
        <Link href="/signup">
          <Button className="text-lg px-8 py-4">
            Start Free
          </Button>
        </Link>
      </section>
    </div>
  )
}
