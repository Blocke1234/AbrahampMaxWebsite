'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'

export default function FreeResourcesPage() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    try {
      // This would connect to your email service (Mailchimp, ConvertKit, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Welcome! Check your email for free resources.')
      setEmail('')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Free Resources</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Get instant access to valuable guides, templates, and insights to help you succeed.
        </p>
      </section>

      {/* Email Capture */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-900 py-20 px-6 rounded-lg max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Get Free Access</h2>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-purple-500 outline-none"
          />
          <Button
            type="submit"
            disabled={isSubscribing}
            className="px-8 py-3"
          >
            {isSubscribing ? 'Subscribing...' : 'Get Access'}
          </Button>
        </form>
      </section>

      {/* Resources Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Available Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Beginner\'s Guide', description: 'Start your journey with this comprehensive guide' },
            { title: 'Financial Templates', description: 'Ready-to-use spreadsheets and tools' },
            { title: 'Video Tutorials', description: 'Step-by-step video guides' },
            { title: 'Case Studies', description: 'Real success stories and lessons learned' },
          ].map((resource, idx) => (
            <div key={idx} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition">
              <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
              <p className="text-gray-300 mb-6">{resource.description}</p>
              <button className="text-purple-400 hover:text-purple-300 font-semibold">
                Download →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
