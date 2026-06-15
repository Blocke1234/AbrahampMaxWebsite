'use client'

import { useState } from 'react'
import Image from 'next/image'

const DISCORD_INVITE = process.env.NEXT_PUBLIC_DISCORD_INVITE ?? 'https://discord.gg/ZaqzPTW6xu'

export default function DiscordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')

    // Best-effort email capture — never block Discord access if the save fails.
    try {
      await fetch('/api/discord-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch {
      // Ignore — the community link still works below.
    }

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center max-w-2xl mx-auto w-full">

        {/* Headshot */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-[#5865F2] shadow-2xl shadow-indigo-900/40 mb-6">
          <Image
            src="/about-headshot.jpg"
            alt="Big Willie Style"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Discord logo + title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054A19.9 19.9 0 0 0 5.9 20.084a.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold">Join the Discord</h1>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
          This is where the real conversations happen — exclusive drops, direct access, and a community of people actually moving forward.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-gray-900 border border-gray-700 focus:border-[#5865F2] rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none transition text-base"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5865F2] hover:bg-[#4752c4] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition text-base"
            >
              {loading ? 'Joining…' : 'Get Access →'}
            </button>
            <p className="text-gray-600 text-xs">No spam. Just the Discord link and updates worth reading.</p>
          </form>
        ) : (
          <div className="w-full max-w-md space-y-4 text-center">
            <div className="bg-gray-900 border border-[#5865F2]/40 rounded-xl p-8">
              <p className="text-2xl font-bold mb-2">You&apos;re in. 🎉</p>
              <p className="text-gray-400 text-sm mb-6">Click below to open the server. See you inside.</p>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-4 rounded-xl transition"
              >
                Open Discord →
              </a>
            </div>
          </div>
        )}

        {/* Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 w-full max-w-2xl text-left">
          {[
            { icon: '🔒', title: 'Exclusive Access', body: 'Content and drops that never hit the public feed.' },
            { icon: '💬', title: 'Direct Line', body: 'Real conversations — not filtered through an algorithm.' },
            { icon: '🚀', title: 'Community', body: 'People who are actually building something, not just watching.' },
          ].map((perk, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-2">{perk.icon}</div>
              <p className="font-bold text-white text-sm mb-1">{perk.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{perk.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
