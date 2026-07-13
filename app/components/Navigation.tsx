'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CALENDLY_URL } from './BookCallButton'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/85 backdrop-blur-sm border-b border-line">
      <nav
        aria-label="Main"
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        <Link
          href="/"
          className="font-display text-base sm:text-lg tracking-tight text-bone hover:text-gold-bright transition-colors duration-500 whitespace-nowrap"
        >
          <span className="sm:hidden" aria-hidden="true">BWS</span>
          <span className="hidden sm:inline">Big Willie Style</span>
          <span className="sr-only sm:hidden">Big Willie Style</span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">
          <ul className="hidden sm:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-xs uppercase tracking-kicker transition-colors duration-500 ${
                    pathname === l.href
                      ? 'text-bone'
                      : 'text-bone-dim hover:text-bone'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile: only the two secondary pages, kept tiny; CTA stays dominant */}
          <ul className="flex sm:hidden items-center gap-4">
            {links
              .filter((l) => l.href !== '/')
              .map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-[11px] uppercase tracking-kicker transition-colors duration-500 ${
                      pathname === l.href
                        ? 'text-bone'
                        : 'text-bone-dim hover:text-bone'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-gold/60 text-gold hover:border-gold-bright hover:text-gold-bright px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-kicker transition-colors duration-500 whitespace-nowrap"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  )
}
