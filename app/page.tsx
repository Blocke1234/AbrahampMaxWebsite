import Link from 'next/link'
import { Button } from './components/ui/Button'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Content & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Exclusive Access</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community for exclusive content, premium products, and direct access to our partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <Button className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90">
                Join Free
              </Button>
            </Link>
            <Link href="/free-resources">
              <Button variant="outline" className="text-lg px-8 py-4">
                Explore Free Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Exclusive Content',
                description: 'Access premium photos, videos, and direct messaging with our partners',
              },
              {
                title: 'Premium Products',
                description: 'Shop curated life-enhancing products at competitive prices',
              },
              {
                title: 'Community Access',
                description: 'Join a thriving community of like-minded individuals',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-black p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
        <p className="text-xl text-gray-300 mb-8">Start free, upgrade anytime</p>
        <Link href="/signup">
          <Button className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600">
            Get Started Now
          </Button>
        </Link>
      </section>
    </div>
  )
}
