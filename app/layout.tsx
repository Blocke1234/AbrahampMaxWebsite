import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Providers } from './providers'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { GoogleAnalytics, MetaPixel, TikTokPixel } from './components/Analytics'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bigwilliestyle.co'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Abraham Max - Premium Content & Products',
  description: 'Exclusive content platform with premium products and coaching',
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
        <GoogleAnalytics />
        <MetaPixel />
        <TikTokPixel />
      </body>
    </html>
  )
}
