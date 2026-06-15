'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/products' },
  { label: 'Free Resources', href: '/free-resources' },
  { label: 'Contribute', href: '/contribute' },
]

const DISCORD_INVITE = 'https://discord.gg/ZaqzPTW6xu'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <>
      <nav className="bg-[#0f0f23] border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-6">

          {/* Three-dot menu — left */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex flex-col gap-[5px] p-1 group flex-shrink-0"
          >
            <span className="w-1 h-1 bg-gray-400 group-hover:bg-purple-400 rounded-full transition" />
            <span className="w-1 h-1 bg-gray-400 group-hover:bg-purple-400 rounded-full transition" />
            <span className="w-1 h-1 bg-gray-400 group-hover:bg-purple-400 rounded-full transition" />
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ecdc4] to-[#f0a500] flex-shrink-0">
            Big Willie Style
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-purple-400 transition whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            {/* Discord — last, styled */}
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/40 hover:border-[#5865F2] text-[#7289da] hover:text-white px-3 py-1 rounded-full transition whitespace-nowrap"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054A19.9 19.9 0 0 0 5.9 20.084a.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>
          </div>

          {/* Right — Checkout + Discord */}
          <div className="hidden md:flex items-center gap-3 ml-auto flex-shrink-0">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 bg-[#4ecdc4] hover:bg-[#3db8b0] rounded transition"
            >
              Join Us
            </a>
            <Link
              href="/cart"
              className="text-sm px-4 py-1.5 bg-white text-black hover:bg-gray-200 rounded font-semibold transition flex items-center gap-1.5"
            >
              🛒 Checkout{itemCount > 0 && <span className="bg-[#4ecdc4] text-white text-xs rounded-full px-1.5 py-0.5">{itemCount}</span>}
            </Link>
          </div>

          {/* Mobile — Checkout */}
          <div className="md:hidden ml-auto flex-shrink-0">
            <Link
              href="/cart"
              className="text-sm px-3 py-1.5 bg-white text-black hover:bg-gray-200 rounded font-semibold transition flex items-center gap-1"
            >
              🛒{itemCount > 0 && <span className="bg-[#4ecdc4] text-white text-xs rounded-full px-1.5 py-0.5 ml-1">{itemCount}</span>}
            </Link>
          </div>
        </div>
      </nav>

      {/* Slide-out menu panel */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90]" onClick={() => setMenuOpen(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#0f0f23]/60 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="absolute top-0 left-0 h-full w-72 bg-[#0a0a1a] border-r border-white/10 flex flex-col py-8 px-6 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ecdc4] to-[#f0a500] mb-10"
            >
              Big Willie Style
            </Link>

            {/* Links */}
            <nav className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {/* Discord — last */}
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg flex items-center gap-2 text-[#7289da] hover:text-white hover:bg-[#5865F2]/20 transition font-medium mt-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054A19.9 19.9 0 0 0 5.9 20.084a.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord
              </a>
            </nav>

            {/* Bottom — Checkout + Discord */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="w-full py-2.5 text-sm text-center bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                🛒 Checkout {itemCount > 0 && `(${itemCount})`}
              </Link>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full py-2.5 text-sm text-center bg-[#4ecdc4] hover:bg-[#3db8b0] rounded-lg transition"
              >
                Join Us on Discord
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

