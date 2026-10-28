'use client'

import { useEffect, useState } from 'react'
import { CALENDLY_URL } from './BookCallButton'

/**
 * Mobile-only sticky CTA. Appears after the visitor scrolls past the hero,
 * hides again near the footer so it never covers the final CTA.
 */
export default function StickyCall() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9
      const nearBottom =
        window.innerHeight + window.scrollY >
        document.documentElement.scrollHeight - 900
      setVisible(past && !nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-ink/95 backdrop-blur-sm border-t border-line px-6 py-3 flex items-center justify-between gap-4">
        <p className="text-[11px] uppercase tracking-kicker text-bone-dim">
          Free call · 5 seats
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="bg-gold text-ink hover:bg-gold-bright px-5 py-2.5 text-xs font-semibold uppercase tracking-kicker transition-colors duration-500 whitespace-nowrap"
        >
          Book a Call
        </a>
      </div>
    </div>
  )
}
