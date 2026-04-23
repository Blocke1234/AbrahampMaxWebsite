'use client'
const router = useRouter()
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'
const handleSubscribe = async (tierName: string) => {
  if (!session) {
    router.push(`/signup?tier=${tierName.toLowerCase()}`)
    return
  }

  setIsLoading(tierName)
  try {
    // This would call your Stripe API
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success(`Subscribed to ${tierName} tier!`)
  } catch (error) {
    toast.error('Subscription failed. Please try again.')
  } finally {
    setIsLoading(null)
  }
}

interface Tier {
  name: string
  price: string
  features: string[]
  cta: string
  popular?: boolean
}

const TIERS: Tier[] = [
  {
    name: 'Free',
    price: '$0',
    features: [
      'Browse free resources',
      'Limited content access',
      'Community forum access',
    ],
    cta: 'Join Free',
  },
  {
    name: 'Basic',
    price: '$9.99/month',
    features: [
      'All free features',
      'Exclusive content access',
      'Partner messaging',
      '10 exclusive photos/month',
      'Priority support',
    ],
    cta: 'Subscribe Now',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$29.99/month',
    features: [
      'All basic features',
      'Unlimited exclusive content',
      'Priority messaging',
      'Early access to new content',
      'Exclusive live sessions',
      'Ad-free experience',
    ],
    cta: 'Go Pro',
  },
]

export default function MembershipPage() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleSubscribe = async (tierName: string) => {
    if (!session) {
      toast.error('Please sign in first')
      return
    }

    setIsLoading(tierName)
    try {
      // This would call your Stripe API
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success(`Subscribed to ${tierName} tier!`)
    } catch (error) {
      toast.error('Subscription failed. Please try again.')
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Exclusive Membership</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Get unlimited access to exclusive content, direct messaging, and premium features
        </p>
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-gray-900 border ${tier.popular ? 'border-purple-500' : 'border-gray-800'} rounded-lg p-8 relative`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold mb-6 text-purple-400">{tier.price}</div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.name !== 'Free' ? (
                <Button
                  onClick={() => handleSubscribe(tier.name)}
                  disabled={isLoading === tier.name}
                  className="w-full"
                >
                  {isLoading === tier.name ? 'Processing...' : tier.cta}
                </Button>
              ) : (
                <Link href="/signup" className="w-full block">
                  <Button className="w-full">
                    {tier.cta}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change my subscription level?',
                a: 'Yes, you can upgrade or downgrade at any time. Changes take effect immediately.'
              },
              {
                q: 'Is there a free trial?',
                a: 'We offer a free tier with limited content access. Upgrade anytime to access more.'
              },
              {
                q: 'How is billing handled?',
                a: 'Billing is monthly, charged on the same day each month. You can cancel anytime.'
              },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-gray-800 pb-6">
                <h4 className="text-lg font-bold mb-2">{item.q}</h4>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
