'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Button } from '../../components/ui/Button'

function SuccessContent() {
  const params = useSearchParams()
  const sessionId = params.get('session_id')

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <div className="text-7xl mb-6">✅</div>
        <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-300 text-lg mb-2">
          Your payment was successful. Check your email for your receipt.
        </p>
        {sessionId && (
          <p className="text-gray-600 text-xs mb-8 font-mono">
            Ref: {sessionId.slice(-12)}
          </p>
        )}
        <p className="text-gray-400 mb-8">
          Physical products typically ship within 5–10 business days.
          Digital products will be emailed to you shortly.
        </p>
        <Link href="/products">
          <Button className="px-8 py-3">Back to Shop</Button>
        </Link>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <SuccessContent />
    </Suspense>
  )
}
