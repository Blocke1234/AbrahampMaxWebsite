import type { Metadata } from 'next'
import Image from 'next/image'
import BuyButton from '@/app/components/BuyButton'

export const metadata: Metadata = {
  title: 'Shop — Big Willie Style',
  description:
    'One product, not a catalog. The 4D Shiatsu Neck & Shoulder Massager with Heat — the one physical product Big Willie Style stands behind.',
}

const features = [
  {
    n: '01',
    label: 'Deep-tissue shiatsu nodes',
    body: 'Kneading nodes built to work the knots, not just skim over them.',
  },
  {
    n: '02',
    label: 'Infrared heat therapy',
    body: 'Constant-temperature heat paired with the kneading — the combination is the point.',
  },
  {
    n: '03',
    label: 'Cordless & rechargeable',
    body: 'No cord to fight, no outlet to hunt for. Charge it, use it anywhere.',
  },
  {
    n: '04',
    label: 'Auto shut-off at 15 minutes',
    body: 'Fifteen minutes is the dose. It turns itself off so you don’t have to think about it.',
  },
]

export default function ProductsPage() {
  const buyLink = process.env.NEXT_PUBLIC_STRIPE_NECK_MASSAGER_LINK

  return (
    <>
      {/* HERO */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-32 pb-16 md:pb-24">
          <p className="rise rise-1 text-xs font-semibold uppercase tracking-kicker text-gold mb-8">
            The Shop
          </p>
          <h1 className="rise rise-2 font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-bone max-w-4xl leading-tight">
            I don&rsquo;t sell much.<br />I sell what&rsquo;s worth it.
          </h1>
          <p className="rise rise-3 mt-8 text-lg md:text-xl text-bone-dim max-w-prose leading-relaxed">
            This isn&rsquo;t a storefront. I&rsquo;m not chasing a catalog, and I&rsquo;m
            not selling you forty things you don&rsquo;t need — that&rsquo;s the opposite
            of everything this brand stands for. Right now there&rsquo;s exactly one
            product here. It&rsquo;s here because I use it, I believe in it, and
            I&rsquo;d put it against anything twice its price. When the next one earns a
            spot next to it, it&rsquo;ll show up. Until then, this is the pinnacle — the
            one I&rsquo;m willing to put my name on.
          </p>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <Image
                src="/products/neck-massager-hero.jpg"
                alt="4D Shiatsu Neck & Shoulder Massager with Heat"
                width={1400}
                height={1600}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-4">
                Flagship
              </p>
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-bone leading-tight">
                4D Shiatsu Neck &amp; Shoulder Massager — with Heat
              </h2>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="font-display text-4xl text-bone">$89.99</span>
                <span className="text-bone-faint line-through text-lg">$149.99</span>
              </div>
              <p className="mt-6 text-bone-dim text-lg leading-relaxed">
                Deep-tissue kneading nodes paired with infrared heat therapy. Fifteen
                minutes is all your neck and shoulders need to reset. Cordless,
                rechargeable, and it shuts itself off automatically at the 15-minute
                mark — because recovery shouldn&rsquo;t require your attention any more
                than it requires your gym bag.
              </p>
              <div className="mt-10">
                <BuyButton href={buyLink} label="Buy Now" />
              </div>

              <Image
                src="/products/neck-massager-detail.jpg"
                alt="Infrared heat therapy detail on the neck massager"
                width={470}
                height={430}
                className="mt-12 w-full max-w-sm h-auto border border-line"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-line bg-ink-soft">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-kicker text-gold mb-6">
            What you&rsquo;re actually getting
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone leading-tight">
            Built to be used, not admired.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line">
            {features.map((f) => (
              <div key={f.n} className="bg-ink-soft p-7 md:p-8 border-l-2 border-l-gold/50">
                <span className="font-display text-gold text-lg">{f.n}</span>
                <h3 className="mt-3 font-display text-lg sm:text-xl text-bone tracking-tight">
                  {f.label}
                </h3>
                <p className="mt-2 text-sm text-bone-dim leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JUST ONE */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-bone leading-tight">
            Why just one?
          </h2>
          <p className="mt-6 text-bone-dim text-lg leading-relaxed max-w-prose mx-auto">
            The Come-Up runs on the same principle: five seats, not five hundred. This
            product is no different — one item, chosen deliberately, not padded to look
            like a catalog. If that&rsquo;s not your speed, the door&rsquo;s still open
            for a call.
          </p>
          <div className="mt-10">
            <BuyButton href={buyLink} label="Buy Now" />
          </div>
        </div>
      </section>
    </>
  )
}
