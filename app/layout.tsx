import type { Metadata } from 'next'
import { Providers } from './providers'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abraham Max - Premium Content & Products',
  description: 'Exclusive content platform with premium products and coaching',
  viewport: 'width=device-width, initial-scale=1',
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
      </body>
    </html>
  )
}
