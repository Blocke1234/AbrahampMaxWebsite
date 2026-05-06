import Link from 'next/link'

const FAQS = [
  {
    q: 'What is Big Willie Style?',
    a: 'Big Willie Style is a content, product, and community brand built by a veteran with 4 years of military service, 10 years in sales, and real-world experience across 7 states and 7 countries. No fluff. No recycled hot takes. Just real.',
  },
  {
    q: 'How do I join the community?',
    a: 'The Discord is free — no card, no subscription. Hit the Discord link in the nav and you\'re in. That\'s where the real conversations happen.',
  },
  {
    q: 'What\'s in the shop?',
    a: 'Every product in The Shop passed one test: would I use it myself and recommend it to someone I respect? Physical products, digital guides, and tools I actually use — vetted, not affiliate-spammed.',
  },
  {
    q: 'What are the Free Resources?',
    a: '"Best of the World Around You" — products, habits, and insights from every country and culture I\'ve spent time in. No signup required. All free.',
  },
  {
    q: 'How do I get a military or first responder discount?',
    a: 'Use the Contact page and select the Military or First Responder topic. We\'ll verify and apply your discount manually.',
  },
  {
    q: 'How do I report a shipping issue?',
    a: 'Head to the Contact page and select Shipping Support. Include your order number and we\'ll handle it fast.',
  },
  {
    q: 'How do I become a content creator with the brand?',
    a: 'Use the Contact page and select Become a Content Creator. Tell us about yourself and what you bring to the table.',
  },
  {
    q: 'Where can I follow Big Willie Style on social media?',
    a: 'YouTube, TikTok, Instagram, Facebook, X, Twitch, and more. The Discord is the best way to get direct access.',
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-4">Big Willie Style</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">FAQs</h1>
        <p className="text-gray-400 text-lg mb-16">
          The questions people actually ask. Answered straight.
        </p>

        <div className="space-y-8">
          {FAQS.map((item, i) => (
            <div key={i} className="border-b border-gray-800 pb-8">
              <h2 className="text-lg font-bold text-white mb-3">{item.q}</h2>
              <p className="text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <p className="text-gray-300 mb-4">Still have a question?</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold text-sm transition"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  )
}
