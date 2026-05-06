export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-4">Big Willie Style</p>
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-16">Last updated: May 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>
              When you create an account, make a purchase, or contact us, we collect the information
              you provide — such as your name, email address, and payment details. Payment processing
              is handled by Stripe; we never store your full card number.
            </p>
            <p className="mt-3">
              We also collect standard usage data automatically — pages visited, time on site, device
              type, and referral source — via Google Analytics and similar tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>To process your orders and subscriptions</li>
              <li>To send you transactional emails (receipts, order updates)</li>
              <li>To send you marketing emails if you opted in (you can unsubscribe anytime)</li>
              <li>To improve the site and understand how people use it</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We share data only with trusted service
              providers who help us operate the site — Stripe (payments), Supabase (database),
              Vercel (hosting), and analytics platforms — all under strict data agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to keep you logged in, remember your
              preferences, and measure site traffic. You can disable cookies in your browser settings,
              though some features may not work correctly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Your Rights</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time.
              Email us at the address on the Contact page and we will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide
              services. You may delete your account at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be communicated
              via email or a notice on this page. Continued use of the site after changes means
              you accept the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              Questions about this policy? Use the{' '}
              <a href="/contact" className="text-purple-400 hover:text-purple-300 transition">
                Contact page
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
