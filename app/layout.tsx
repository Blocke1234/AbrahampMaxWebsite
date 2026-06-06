import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Big Willy Style | Premium Wellness & Recovery',
  description: 'Turn long days into calm nights. Premium massage and recovery products for everyday relief.',
  keywords: 'neck massager, shoulder massager, wellness, recovery, relaxation, massage therapy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
