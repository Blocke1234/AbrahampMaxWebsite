'use client'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0f0f23] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-black text-white mb-4">
          Order Confirmed!
        </h1>
        <p className="text-white/60 text-lg mb-8 leading-relaxed">
          Thank you for your purchase. Your order is being processed and you&apos;ll receive a confirmation email shortly.
        </p>
        <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
          <p className="text-white/80 text-sm">
            📦 Estimated delivery: 7-14 business days<br />
            📧 Tracking info will be sent to your email
          </p>
        </div>
        <a
          href="/"
          className="btn-primary inline-block"
        >
          Continue Shopping
        </a>
      </div>
    </main>
  )
}
