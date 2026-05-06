export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-4">Big Willie Style</p>
        <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-16">Last updated: May 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Big Willie Style (&ldquo;the Site&rdquo;), you agree to be bound by
              these Terms of Service. If you do not agree, do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes. You may not:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-400 mt-3">
              <li>Reproduce, distribute, or resell any content without written permission</li>
              <li>Use the Site to transmit spam, malware, or harmful content</li>
              <li>Attempt to access accounts, systems, or data that are not yours</li>
              <li>Misrepresent your identity or affiliation with Big Willie Style</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. Purchases &amp; Refunds</h2>
            <p>
              All sales of digital products are final unless the product is defective or not as
              described. Physical product returns are accepted within 30 days of delivery in original
              condition. Shipping costs for returns are the buyer&apos;s responsibility unless the item
              arrived damaged or incorrect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content on the Site — including text, images, videos, product descriptions, and
              brand assets — is owned by Big Willie Style and protected by applicable copyright and
              trademark law. Personal, non-commercial use is permitted with attribution.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind.
              We do not guarantee that the Site will be error-free, uninterrupted, or free of
              harmful components.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Big Willie Style shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of the
              Site or purchase of products.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites, including Discord. We are not
              responsible for the content or practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the Site
              after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
            <p>
              Questions about these terms? Use the{' '}
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
