export const dynamic = 'force-dynamic'

'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'

export default function MessagesPage() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Messages</h1>
          <p className="text-xl text-gray-300 mb-8">Sign in to access your messages</p>
          <Link href="/login">
            <Button className="text-lg px-8 py-4">Sign In</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Messages</h1>
        <p className="text-xl text-gray-300 mb-8">Direct messaging with partners</p>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 text-center">
          <p className="text-gray-300 text-lg">No messages yet. Join the Discord to connect directly.</p>
          <a href="https://discord.gg/ThpTfdhVv" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <Button>Join the Discord</Button>
          </a>
        </div>
      </section>
    </div>
  )
}

