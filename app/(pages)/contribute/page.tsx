'use client'

import Link from 'next/link'

const CAMPAIGNS: { title: string; description: string; goal: string; link: string; icon: string }[] = [
  // Real campaigns will be added here
]

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-4">Big Willie Style</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contribute</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Every contribution goes directly toward something real — no middlemen, no mystery. Pick a campaign below and be part of making it happen.
        </p>
      </section>

      {/* Campaigns */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="space-y-6">
          {CAMPAIGNS.map((campaign, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 hover:border-purple-500/60 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center gap-6 transition"
            >
              <div className="text-5xl flex-shrink-0">{campaign.icon}</div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white mb-2">{campaign.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{campaign.description}</p>
                <p className="text-purple-400 text-sm font-semibold">{campaign.goal}</p>
              </div>
              <a
                href={campaign.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold text-sm transition text-center whitespace-nowrap"
              >
                Contribute →
              </a>
            </div>
          ))}
        </div>

        {/* Empty state shown until campaigns are added */}
        {CAMPAIGNS.length === 0 && (
          <div className="text-center py-24 text-gray-600">
            <p className="text-4xl mb-4">🚧</p>
            <p className="text-lg">Campaigns coming soon.</p>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            Want to support in another way?{' '}
            <Link href="/products" className="text-purple-400 hover:text-purple-300 transition">
              Shop the store
            </Link>
            {' '}or{' '}
            <a
              href="https://discord.gg/ThpTfdhVv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7289da] hover:text-white transition"
            >
              join the Discord
            </a>.
          </p>
        </div>
      </section>
    </div>
  )
}
