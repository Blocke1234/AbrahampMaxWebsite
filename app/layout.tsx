import type { Metadata } from 'next'
import { Inter, Libre_Caslon_Text } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bigwilliestyle.co'),
  title: {
    default: 'Big Willie Style — Discipline & Mentorship Coaching',
    template: '%s · Big Willie Style',
  },
  description:
    'From lost to locked-in. The Come-Up is a 30-day, 1-on-1 discipline mentorship for hard-working adults 18–35. Founding cohort of five. Book a free discovery call.',
  openGraph: {
    siteName: 'Big Willie Style',
    type: 'website',
    locale: 'en_US',
    title: 'Big Willie Style — Discipline & Mentorship Coaching',
    description:
      'From lost to locked-in. A 30-day, 1-on-1 discipline mentorship. Founding cohort of five. Book a free discovery call.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Big Willie Style — From lost to locked-in' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caslon.variable}`}>
      <body className="font-sans bg-ink text-bone">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
