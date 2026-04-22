'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Navigation() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Abraham Max
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/about" className="hover:text-purple-400 transition">About</Link>
          <Link href="/products" className="hover:text-purple-400 transition">Shop</Link>
          <Link href="/free-resources" className="hover:text-purple-400 transition">Resources</Link>
          <Link href="/membership" className="hover:text-purple-400 transition">Membership</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          {session ? (
            <>
              <span className="text-sm text-gray-400">{session.user?.email}</span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="px-4 py-2 text-purple-400 hover:text-purple-300 transition">
                Login
              </Link>
              <Link href="/signup" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 px-6 py-4 space-y-4">
          <Link href="/about" className="block hover:text-purple-400 transition">About</Link>
          <Link href="/products" className="block hover:text-purple-400 transition">Shop</Link>
          <Link href="/free-resources" className="block hover:text-purple-400 transition">Resources</Link>
          <Link href="/membership" className="block hover:text-purple-400 transition">Membership</Link>
          {!session && (
            <>
              <Link href="/login" className="block text-purple-400">Login</Link>
              <Link href="/signup" className="block bg-purple-600 px-4 py-2 rounded">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
