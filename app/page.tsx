import type { Metadata } from 'next'
import BookCallButton from './components/BookCallButton'
import StickyCall from './components/StickyCall'

export const metadata: Metadata = {
  title: 'Big Willie Style — Discipline & Mentorship Coaching',
  description:
    'From lost to locked-in. The Come-Up: a 30-day, 1-on-1 discipline mentorship for hard-working adults 18–35. $199 flat, founding cohort of five. Book a free discovery call.',
}

/* ————— content ————— */

const receipts = [
  {
    n: '01',
    fact: '4 years, United States Marine Corps',
    note: 'Chosen — for the discipline, the education, and zero debt. Not assigned.',
  },
  {
    n: '02',
    fact: '10 years in sales',
    note: 'A decade of reading people and moving them forward. Plus a bachelor\u2019s degree.',
  },
  {
    n: '03',
    fact: 'Taught himself to be a father at 15',
    note: 'Later placed both aging parents in care, solo, across two states. Structure under real weight.',
  },
  {
    n: '04',
    fact: 'Licensed and still climbing',
    note: 'Active life-insurance license. Active tax-prep license. Real estate in training. 7 states lived, 6 countries traveled.',
  },
]

const mechanism = [
  {
    n: '01',
    title: 'We map your 30 days',
    body: 'One free call. You talk, I listen, and we decide if this is a fit. If it is, we build a daily structure around your actual life — your shifts, your commute, your reality. Not a template.',
  },
  {
    n: '02',
    title: 'Calls that keep you honest',
    body: '1\u20133 calls a week, one on one. Not lectures — working sessions. We adjust the plan, solve what broke, and set the next targets.',
  },
  {
    n: '03',
    title: 'A text every single day',
    body: 'Daily accountability texts. The plan on paper is worthless without someone holding you to it — that\u2019s me, every day, for 30 days.',
  },
  {
    n: '04',
    title: 'The engine runs without me',
    body: 'By day 30 the structure is yours: training discipline as the keystone habit, and a daily system that carries into your body, your career, and your money.',
  },
]

const objections = [
  {
    q: '\u201CAnother coaching thing?\u201D',
    a: 'Fair. You\u2019ve been burned by apps, planners, and 5am-club gurus. This isn\u2019t a course you\u2019ll abandon by week two — it\u2019s one man, on the phone with you every week, texting you every day, for 30 days. You can\u2019t ghost it, and it can\u2019t ghost you.',
  },
  {
    q: '\u201CWhy you?\u201D',
    a: 'Because I didn\u2019t read about discipline — I bought it with four years in the Marine Corps and a decade in sales. I\u2019m already the guy friends call about money, family, and getting unstuck. Now that seat is open to you. You\u2019ve seen the record — it\u2019s all real.',
  },
  {
    q: '\u201COnly $199 — is it real?\u201D',
    a: 'It\u2019s real, and it\u2019s deliberate. This is the founding cohort — five people, flat price, before the ladder climbs. You\u2019re early, not cheap. The first five help me sharpen the program; the price never comes back down.',
  },
  {
    q: '\u201CI don\u2019t have time.\u201D',
    a: 'That\u2019s the whole point. You don\u2019t lack time — you lack structure. The Come-Up exists to build the system that makes time. If your days already ran on rails, you wouldn\u2019t be reading this.',
  },
]

/* ————— page ————— */

export default function Home() {
  return (
    <>
      {/* HERO — typographic statement */}
      <section className="min-h-[92vh] flex items-end pt-16">
        <div className="max-w-6xl mx-auto px-6 pb-20 md:pb-28 w-full">
          <p className="rise rise-1 text-xs font-semibold uppercase tracking-kicker text-gold mb-8">
            Discipline &amp; Mentorship — 1&nbsp;on&nbsp;1
          </p>
          <h1 className="rise rise-2 font-display text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-bone max-w-4xl">
            From lost<br />
            to locked&#8209;in.
          </h1>
          <p className="rise rise-3 mt-8 text-lg md:text-xl text-bone-dim max-w-prose leading-relaxed">
            In 30 days, build the daily structure and training discipline that
            becomes the engine for how you show up — body, self-perception,
            career, money. One on one. No apps, no group chats, no theory.
          </p>
          <div className="rise rise-4 mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <BookCallButton label="Book a Call" />
            <p className="text-xs uppercase tracking-kicker text-bone-faint">
              Free discovery call · Founding cohort of 5
            </p>
          </div>
        </div>
      </section>

      {/* PAIN — name it back to them */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-6">
            01 — The problem
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone max-w-3xl leading-tight">
            You&rsquo;re not lazy.<br />You&rsquo;re scattered.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-bone-dim text-lg leading-relaxed">
                You work hard — harder than most people you know. But the day
                runs you, not the other way around. You react, you scramble,
                you fall into bed having done a lot and moved nothing forward.
                And the question keeps circling:{' '}
                <em className="font-display text-bone">
                  &ldquo;I&rsquo;m a hard worker — why am I still this
                  scattered?&rdquo;
                </em>
              </p>
            </div>
            <div>
              <p className="text-bone-dim text-lg leading-relaxed">
                Maybe it showed up in your body first — training fell off, and
                everything else followed. Maybe it&rsquo;s the calendar — no
                routine, everything urgent, nothing important. Either way,
                the fix is the same: not more effort,{' '}
                <span className="text-bone">a structure that holds</span> —
                and one person making sure you hold it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF — the service record */}
      <section className="border-t border-line bg-ink-soft">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-6">
            02 — Why listen to me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone max-w-3xl leading-tight">
            I didn&rsquo;t study discipline.<br />I lived it.
          </h2>
          <p className="mt-8 text-bone-dim text-lg leading-relaxed max-w-prose">
            I&rsquo;m Blake Willette. No guru act, no rented Lamborghini —
            just a record. Everything I&rsquo;ll ask of you in 30 days, I did
            first, under heavier weight.
          </p>

          <div className="mt-14">
            {receipts.map((r) => (
              <div
                key={r.n}
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-x-4 sm:gap-x-8 py-7 border-t border-line last:border-b"
              >
                <span className="font-display text-gold text-lg sm:text-xl pt-0.5">
                  {r.n}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-bone tracking-tight">
                    {r.fact}
                  </h3>
                  <p className="mt-2 text-bone-dim leading-relaxed max-w-2xl">
                    {r.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MECHANISM — how the 30 days work */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-6">
            03 — The program
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone leading-tight">
            The Come&#8209;Up
          </h2>
          <p className="mt-8 text-bone-dim text-lg leading-relaxed max-w-prose">
            Thirty days. One promise: the daily structure and training
            discipline that becomes the engine for everything else. Here is
            exactly how it works — no mystery box.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-px bg-line">
            {mechanism.map((m) => (
              <div key={m.n} className="bg-ink p-8 md:p-10">
                <span className="font-display text-gold text-lg">{m.n}</span>
                <h3 className="mt-4 font-display text-xl sm:text-2xl text-bone tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-3 text-bone-dim leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER — the terms, plainly */}
      <section className="border-t border-line bg-ink-soft">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl mx-auto border border-gold/40 p-8 sm:p-12 md:p-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-8">
              The founding cohort
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone leading-tight">
              Five seats.<br />Then the door closes.
            </h2>
            <p className="mt-8 text-bone-dim text-lg leading-relaxed">
              The Come-Up is 1-on-1 — my calls, my texts, my attention, every
              day. That doesn&rsquo;t scale, so the first cohort is capped at
              five people. When they&rsquo;re filled, it&rsquo;s closed until
              cohort two.
            </p>
            <div className="rule my-10 max-w-[8rem] mx-auto" />
            <p className="font-display text-5xl sm:text-6xl text-bone">$199</p>
            <p className="mt-3 text-xs uppercase tracking-kicker text-bone-faint">
              Flat · 30 days · 1&#8209;on&#8209;1 · Founding&#8209;cohort pricing
            </p>
            <p className="mt-6 text-bone-dim leading-relaxed max-w-md mx-auto">
              Founder pricing before the ladder climbs. Nothing is sold on the
              site and nothing is sold on the call — we talk, and if it&rsquo;s
              a fit, I&rsquo;ll send you the details afterward.
            </p>
            <div className="mt-10">
              <BookCallButton label="Book Your Free Call" />
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS — answered without defensiveness */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-6">
            04 — Straight talk
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone max-w-3xl leading-tight">
            The questions you&rsquo;re<br />already asking.
          </h2>

          <div className="mt-14 max-w-3xl">
            {objections.map((o) => (
              <div key={o.q} className="py-8 border-t border-line last:border-b">
                <h3 className="font-display text-xl sm:text-2xl text-bone tracking-tight">
                  {o.q}
                </h3>
                <p className="mt-3 text-bone-dim leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 text-center">
          <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-8">
            The next step
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-bone leading-tight">
            One call.<br />No pitch, no pressure.
          </h2>
          <p className="mt-8 text-bone-dim text-lg leading-relaxed max-w-prose mx-auto">
            Thirty minutes to see if we&rsquo;re a fit. Worst case, you leave
            with a clearer picture of what&rsquo;s actually breaking your days.
            Best case, you take one of five seats.
          </p>
          <div className="mt-10">
            <BookCallButton label="Book a Call" />
          </div>
        </div>
      </section>

      <StickyCall />
    </>
  )
}
