import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Order Confirmed — Big Willie Style',
  robots: { index: false },
}

export default function ProductSuccessPage() {
  return (
    <section className="pt-16 min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
        <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-8">
          Order confirmed
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-bone leading-tight">
          It&rsquo;s on the way.
        </h1>
        <p className="mt-8 text-bone-dim text-lg leading-relaxed max-w-prose mx-auto">
          Stripe just sent a receipt to your inbox. I ship every order myself, so if
          anything looks off, reach out and I&rsquo;ll make it right.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-kicker border border-gold/60 text-gold hover:border-gold-bright hover:text-gold-bright transition-colors duration-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
