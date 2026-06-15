'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const DISCORD_INVITE = process.env.NEXT_PUBLIC_DISCORD_INVITE ?? 'https://discord.gg/ZaqzPTW6xu'
const POPUP_DELAY_MS = 15_000

export default function DiscordPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('discord_popup_seen')) return

    const timer = setTimeout(() => setVisible(true), POPUP_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('discord_popup_seen', '1')
    setVisible(false)
  }

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
    sessionStorage.setItem('discord_popup_seen', '1')
    setLoading(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
    >
      <div className="relative bg-gray-900 border border-purple-500/40 rounded-2xl shadow-2xl shadow-purple-900/30 w-full max-w-sm p-8 text-center">

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Headshot */}
        <div className="relative w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-900/40">
          <Image
            src="/about-headshot.jpg"
            alt="Big Willie Style"
            fill
            className="object-cover"
            priority
          />
        </div>

        {!submitted ? (
          <>
            {/* Discord logo + heading */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#7289da" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054A19.9 19.9 0 0 0 5.9 20.084a.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <h2 className="text-xl font-bold text-white">Join the Community</h2>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Drop your email and I&apos;ll send you straight to the Discord — where the real conversations happen.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-gray-800 border border-gray-700 focus:border-purple-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition text-sm"
              />
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5865F2] hover:bg-[#4752c4] disabled:opacity-60 text-white font-bold py-3 rounded-lg transition text-sm"
              >
                {loading ? 'Joining…' : 'Join the Discord →'}
              </button>
            </form>

            <button
              onClick={dismiss}
              className="mt-4 text-gray-600 hover:text-gray-400 text-xs transition"
            >
              No thanks
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-white mb-3">You&apos;re in. 🎉</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Click below to join the Discord. See you inside.
            </p>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-3 rounded-lg transition text-sm"
            >
              Open Discord →
            </a>
          </>
        )}
      </div>
    </div>
  )
}
