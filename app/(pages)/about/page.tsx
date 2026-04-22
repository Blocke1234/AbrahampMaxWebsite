import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Welcome to my world. I'm a entrepreneur, content creator, and advocate for personal growth and financial freedom.
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">My Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Starting from humble beginnings, I've built multiple successful ventures and helped thousands of people achieve their financial and personal goals.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My mission is to share knowledge, provide resources, and build a community of like-minded individuals dedicated to growth and success.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Through this platform, I offer exclusive content, premium resources, and direct access to me and my partners.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-300">Your image here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Featured Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-48 flex items-center justify-center">
                <span className="text-gray-300">Partner {i}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Partner Name {i}</h3>
                <p className="text-gray-300 mb-4">Bio and specialty</p>
                <Link href={/partner-\} className="text-purple-400 hover:text-purple-300">
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
        <p className="text-xl text-gray-300 mb-8">Join our community and get exclusive access</p>
        <Link href="/membership">
          <Button className="text-lg px-8 py-4">
            Join Now
          </Button>
        </Link>
      </section>
    </div>
  )
}
