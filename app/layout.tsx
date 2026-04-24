import type { Metadata } from 'next'
import { Providers } from './providers'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { GoogleAnalytics, MetaPixel } from './components/Analytics'
import './globals.css'

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
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  )
}
