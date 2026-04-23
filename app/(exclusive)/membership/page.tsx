'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'

interface Tier {
  name: string
  price: string
  features: string[]
  cta: string
  popular?: boolean
}

const TIERS: Tier[] = [
  // ... (your TIERS array stays the same)
]

export default function MembershipPage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleSubscribe = async (tierName: string) => {
    if (!session) {
      router.push(`/signup?tier=${tierName.toLowerCase()}`)
      return
    }

    setIsLoading(tierName)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success(`Subscribed to ${tierName} tier!`)
    } catch (error) {
      toast.error('Subscription failed. Please try again.')
    } finally {
      setIsLoading(null)
    }
  }

  return (
    // ... (rest of JSX stays the same)
  )
}
