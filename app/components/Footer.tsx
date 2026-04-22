import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-400">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-purple-400 transition">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-400">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products" className="hover:text-purple-400 transition">Products</Link></li>
              <li><Link href="/cart" className="hover:text-purple-400 transition">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-400">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/membership" className="hover:text-purple-400 transition">Membership</Link></li>
              <li><Link href="/content" className="hover:text-purple-400 transition">Content</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-400">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-purple-400 transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-purple-400 transition">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Abraham Max. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
