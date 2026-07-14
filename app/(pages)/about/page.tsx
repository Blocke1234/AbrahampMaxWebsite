import type { Metadata } from 'next'
import BookCallButton from '@/app/components/BookCallButton'

export const metadata: Metadata = {
  title: 'About Blake Willette — Big Willie Style',
  description:
    'Marine Corps by choice. A decade in sales. Structure built under real weight. The story behind Big Willie Style and The Come-Up — 1-on-1 discipline mentorship for adults 18–35.',
}

const receipts = [
  { fact: '4 years, U.S. Marine Corps', note: 'By choice — for the discipline, the education, and zero debt.' },
  { fact: 'Bachelor\u2019s degree', note: 'Earned, not inherited.' },
  { fact: '10 years in sales', note: 'A decade of reading people and moving them to act.' },
  { fact: 'Active life-insurance license', note: 'Held now, in good standing.' },
  { fact: 'Active tax-prep license', note: 'Held now, in good standing.' },
  { fact: 'Real estate — in training', note: 'The ladder doesn\u2019t stop.' },
  { fact: '7 U.S. states lived', note: 'Structure that travels.' },
  { fact: '6 countries traveled', note: 'Perspective, first-hand.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-32 pb-16 md:pb-24">
          <p className="rise rise-1 text-xs font-semibold uppercase tracking-kicker text-gold mb-8">
            About
          </p>
          <h1 className="rise rise-2 font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-bone max-w-4xl leading-tight">
            Discipline saved me.<br />Now I hand it over.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-bone-dim text-lg leading-relaxed">
              I&rsquo;m Blake Willette — Big Willie Style. Nobody handed me a
              system. At fifteen I was teaching myself how to be a father
              figure in my own house. There was no manual and no mentor —
              just a kid learning that if the structure was going to exist,
              I&rsquo;d have to build it myself.
            </p>
            <p className="mt-6 text-bone-dim text-lg leading-relaxed">
              That&rsquo;s why the Marine Corps was a choice, not an escape.
              I picked it deliberately — for the discipline, the education,
              and a start in life with zero debt. Four years of waking up
              before I wanted to, doing the work before I felt like it, and
              learning what a day looks like when every hour answers to a
              standard. When people say discipline is a muscle, they&rsquo;re
              guessing. I&rsquo;m telling you what it benches.
            </p>
            <p className="mt-6 text-bone-dim text-lg leading-relaxed">
              After the Corps came ten years in sales and a bachelor&rsquo;s
              degree — a decade of reading people, hearing what they
              don&rsquo;t say, and moving them from stuck to decided. And
              when life put real weight on the bar, the structure held: I
              placed both of my aging parents into care, alone, across two
              states, while holding a career together. That&rsquo;s what a
              system is for. Not aesthetics — load-bearing.
            </p>
            <p className="mt-6 text-bone-dim text-lg leading-relaxed">
              Somewhere along the way I became the guy people already call —
              about money, about family, about relationships, about getting
              unstuck. Friends first, then friends of friends. The Come-Up
              just makes the seat official:{' '}
              <span className="text-bone">
                thirty days, one on one, me on the phone with you every week
                and in your texts every day
              </span>
              , building the structure I had to build for myself — around
              your life instead.
            </p>
          </div>
        </div>
      </section>

      {/* The Receipts */}
      <section className="border-t border-line bg-ink-soft">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-6">
            The receipts
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone leading-tight">
            Earned, not claimed.
          </h2>
          <p className="mt-6 text-bone-dim text-lg leading-relaxed max-w-prose">
            No borrowed authority, no stock-photo success. Just the record —
            each line paid for in full.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line">
            {receipts.map((r) => (
              <div key={r.fact} className="bg-ink-soft p-7 md:p-8 border-l-2 border-l-gold/50">
                <h3 className="font-display text-lg sm:text-xl text-bone tracking-tight">
                  {r.fact}
                </h3>
                <p className="mt-2 text-sm text-bone-dim leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone leading-tight">
            If any of that sounds like<br />the man you needed at 20 —
          </h2>
          <p className="mt-6 text-bone-dim text-lg leading-relaxed max-w-prose mx-auto">
            The first call is free, and nothing is sold on it. We talk about
            your days, your structure, and whether The Come-Up is a fit.
          </p>
          <div className="mt-10">
            <BookCallButton label="Book a Call" />
          </div>
        </div>
      </section>
    </>
  )
}
