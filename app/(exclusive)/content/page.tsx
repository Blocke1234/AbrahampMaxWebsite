'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { useState } from 'react'

interface ContentItem {
  id: string
  title: string
  type: 'photo' | 'video'
  partner: string
  tier: 'basic' | 'pro'
}

const SAMPLE_CONTENT: ContentItem[] = [
  {
    id: '1',
    title: 'Exclusive Photoshoot',
    type: 'photo',
    partner: 'Partner 1',
    tier: 'basic',
  },
  {
    id: '2',
    title: 'Premium Video Content',
    type: 'video',
    partner: 'Partner 2',
    tier: 'pro',
  },
  {
    id: '3',
    title: 'VIP Photoshoot',
    type: 'photo',
    partner: 'Partner 3',
    tier: 'pro',
  },
]

export default function ExclusiveContentPage() {
  const { data: session } = useSession()
  const [selectedTier, setSelectedTier] = useState<'all' | 'basic' | 'pro'>('all')

  if (!session) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Exclusive Content</h1>
          <p className="text-xl text-gray-300 mb-8">Sign in to view exclusive content</p>
          <Link href="/login">
            <Button className="text-lg px-8 py-4">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const filteredContent = selectedTier === 'all'
    ? SAMPLE_CONTENT
    : SAMPLE_CONTENT.filter(c => c.tier === selectedTier)

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Exclusive Content</h1>
        <p className="text-xl text-gray-300 mb-8">Access premium photos, videos, and direct messaging</p>
      </section>

      {/* Filters */}
      <section className="px-6 py-8 max-w-6xl mx-auto flex gap-4">
        {['all', 'basic', 'pro'].map(tier => (
          <button
            key={tier}
            onClick={() => setSelectedTier(tier as any)}
            className={\px-6 py-2 rounded-lg font-semibold transition \\}
          >
            {tier === 'all' ? 'All' : tier.toUpperCase()}
          </button>
        ))}
      </section>

      {/* Content Grid */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(content => (
            <div
              key={content.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition cursor-pointer"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-48 flex items-center justify-center">
                <span className="text-gray-300">{content.type}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{content.title}</h3>
                  <span className="text-xs px-2 py-1 bg-purple-600 rounded">
                    {content.tier.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">By {content.partner}</p>
                <Button className="w-full">View Content</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
