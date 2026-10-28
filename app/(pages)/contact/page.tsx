import type { Metadata } from 'next'
import BookCallButton, { DISCORD_URL } from '@/app/components/BookCallButton'

export const metadata: Metadata = {
  title: 'Contact — Big Willie Style',
  description:
    'Ready to talk? Book a free discovery call for The Come-Up, or reach out with a question first. Straight answers, no pitch.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-32 pb-16 md:pb-24">
          <p className="rise rise-1 text-xs font-semibold uppercase tracking-kicker text-gold mb-8">
            Contact
          </p>
          <h1 className="rise rise-2 font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-bone max-w-4xl leading-tight">
            Two ways in.<br />Both are simple.
          </h1>
        </div>
      </section>

      {/* Two doors */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-px bg-line">
            {/* Door 1 — ready */}
            <div className="bg-ink p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-kicker text-gold">
                If you&rsquo;re ready
              </p>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl text-bone tracking-tight">
                Book the free call.
              </h2>
              <p className="mt-4 text-bone-dim leading-relaxed">
                Thirty minutes, one on one. We talk about your days, where
                the structure is breaking, and whether The Come-Up is a fit.
                Nothing is sold on the call.
              </p>
              <div className="mt-8">
                <BookCallButton label="Book a Call" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-kicker text-bone-faint">
                Free · Founding cohort of 5
              </p>
            </div>

            {/* Door 2 — question first */}
            <div className="bg-ink p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-kicker text-gold">
                If you have a question first
              </p>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl text-bone tracking-tight">
                Ask it straight.
              </h2>
              <p className="mt-4 text-bone-dim leading-relaxed">
                No forms disappearing into the void. Ask in the Discord and
                you&rsquo;re talking to me, not a support desk. Straight
                question, straight answer.
              </p>
              <div className="mt-8">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-line text-bone-dim hover:text-bone hover:border-bone-faint px-8 py-4 text-sm font-semibold uppercase tracking-kicker transition-colors duration-500"
                >
                  Ask on Discord
                </a>
              </div>
              <p className="mt-4 text-xs uppercase tracking-kicker text-bone-faint">
                Usually same-day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance close */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-bone leading-tight">
            Either way — no pitch, no pressure.
          </h2>
          <p className="mt-6 text-bone-dim text-lg leading-relaxed max-w-prose mx-auto">
            The Come-Up only works if it&rsquo;s a fit. If it&rsquo;s not,
            I&rsquo;ll tell you that on the call and point you somewhere
            better. That&rsquo;s the whole policy.
          </p>
        </div>
      </section>
    </>
  )
}
