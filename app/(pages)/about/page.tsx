'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Button } from '../../components/ui/Button'

const TravelMap = dynamic(() => import('../../components/TravelMap'), { ssr: false })

const CALENDLY_URL = 'https://calendly.com/abrahammax'

const schedule = [
  { day: 'Monday', platforms: 'YouTube + TikTok', time: '7:00 PM EST', type: 'Content Drop' },
  { day: 'Tuesday', platforms: 'Instagram + Facebook', time: '6:00 PM EST', type: 'Story + Reel' },
  { day: 'Wednesday', platforms: 'Twitch + Kick', time: '8:00 PM EST', type: 'Live Stream' },
  { day: 'Thursday', platforms: 'TikTok + YouTube Shorts', time: '7:00 PM EST', type: 'Content Drop' },
  { day: 'Friday', platforms: 'All Platforms', time: '6:00 PM EST', type: 'Weekly Recap' },
  { day: 'Saturday', platforms: 'OnlyFans + Members Portal', time: '9:00 PM EST', type: 'Exclusive Drop' },
  { day: 'Sunday', platforms: 'YouTube', time: '5:00 PM EST', type: 'Long-Form Upload' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Opening Quote */}
      <section className="px-6 pt-20 pb-12 max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl md:text-5xl font-bold leading-tight text-white">
          &ldquo;I didn&apos;t study the game from the sideline.
          I played it — in seven states, six countries, and every room
          they said I didn&apos;t belong in.&rdquo;
        </blockquote>
        <p className="mt-6 text-purple-400 font-semibold tracking-widest uppercase text-sm">
          — Abraham Max
        </p>
      </section>

      {/* Headshot + Intro + Objective + Intent */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Headshot */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-900/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about-headshot.jpg"
                alt="Big Willie Style"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Intro · Objective · Intent */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Introduction</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m Abraham Max — veteran, licensed professional, salesman, traveler, and
                creator. Four years in uniform. A decade in sales. Licenses in insurance, taxes,
                and real estate in progress. I&apos;ve lived in seven U.S. states and visited six
                countries. This site is everything I do, in one place.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Objective</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                To build the most honest, high-value personal brand on the internet — content
                that actually teaches, products that actually work, and a community that actually
                gets access to the real me. No gatekeeper but the paywall, and the paywall is
                fair.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Intent</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every post, every product, every piece of content is built to move people
                forward — toward better decisions, better options, and better outcomes. I don&apos;t
                do fluff. If I&apos;m putting it out, it&apos;s because it&apos;s worth your time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Stack */}
      <section className="bg-gray-950 border-y border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Receipts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

      {/* Interactive Travel Map */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Where I&apos;ve Been</p>
          <h2 className="text-3xl md:text-4xl font-bold">7 States. 7 Countries.</h2>
          <p className="text-gray-500 mt-2 max-w-xl">Toggle between the map of every state I&apos;ve lived in and every country I&apos;ve set foot in. Hover to explore.</p>
        </div>
        <TravelMap />
      </section>

      {/* Content + Posting Schedule (Calendly-backed) */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Where I Show Up</p>
            <h2 className="text-3xl md:text-4xl font-bold">Weekly Schedule</h2>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm border border-purple-500/40 hover:border-purple-400 px-4 py-2 rounded-lg transition whitespace-nowrap"
          >
            Book Time With Me →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 hover:border-purple-500/60 rounded-xl p-5 transition"
            >
              <p className="text-purple-400 font-bold text-sm uppercase tracking-wide mb-1">{item.day}</p>
              <p className="text-white font-semibold mb-1">{item.type}</p>
              <p className="text-gray-400 text-sm mb-2">{item.platforms}</p>
              <p className="text-gray-500 text-xs">{item.time}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-xs mt-6 text-center">
          Schedule subject to change. Follow on socials for real-time updates.
        </p>
      </section>

      {/* What I Do Section */}
      <section className="bg-gray-950 border-t border-gray-800 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">What I Actually Do Here</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">Three sides of the brand, one home base.</p>
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
                title: 'Community',
                body: 'Join the Discord for direct access, real conversations, and exclusive drops that never hit the public feed.',
                cta: 'Join Discord',
                href: 'https://discord.gg/ThpTfdhVv',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-500 transition p-8 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{item.body}</p>
                <Link href={item.href} className="text-purple-400 hover:text-purple-300 font-semibold">
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Now You Know.</h2>
        <p className="text-xl text-gray-300 mb-8">Free tier · No card required · Cancel anytime</p>
        <Link href="/signup">
          <Button className="text-lg px-8 py-4">Start Free</Button>
        </Link>
      </section>

    </div>
  )
}
