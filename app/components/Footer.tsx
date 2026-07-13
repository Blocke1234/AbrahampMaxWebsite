import Link from 'next/link'
import { CALENDLY_URL, DISCORD_URL } from './BookCallButton'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display text-lg text-bone">Big Willie Style</p>
            <p className="text-sm text-bone-faint mt-2 max-w-xs leading-relaxed">
              Discipline &amp; mentorship coaching for men and women, 18–35.
              From lost to locked-in.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-bone-dim hover:text-bone transition-colors duration-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-bone-dim hover:text-bone transition-colors duration-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-bone-dim hover:text-bone transition-colors duration-500">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold hover:text-gold-bright transition-colors duration-500"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bone-dim hover:text-bone transition-colors duration-500"
                >
                  Discord
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="rule mt-12 mb-6" />
        <p className="text-xs text-bone-faint">
          © {new Date().getFullYear()} Big Willie Style. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
