// ⚠️ LAUNCH GATE: This page is NOT considered complete until all required items in
//    `.agents/ecommerce-launch-checklist.md` are checked off.
//    See sections 8 (Collection Pages), 9 (Product Page), 11 (Anti-Patterns), 12 (Pre-Flight).
//    Do not run paid ads at this Shop section until Section 12 is GREEN.

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Masterclass',
    price: 49.99,
    description: 'Advanced strategies for business growth',
    image: 'masterclass'
  },
  {
    id: '2',
    name: 'Digital Course Bundle',
    price: 99.99,
    description: 'Complete learning package',
    image: 'course'
  },
  {
    id: '3',
    name: 'Exclusive Templates',
    price: 29.99,
    description: 'Business and marketing templates',
    image: 'templates'
  },
  {
    id: '4',
    name: 'Personal Consulting',
    price: 199.99,
    description: '1-on-1 coaching session',
    image: 'consulting'
  },
]

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const toggleProduct = (id: string) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  const handleAddToCart = (product: Product) => {
    toggleProduct(product.id)
    toast.success(`Added ${product.name} to cart`)
  }

  const getTotalPrice = () => {
    return SAMPLE_PRODUCTS
      .filter(p => selectedProducts.includes(p.id))
      .reduce((sum, p) => sum + p.price, 0)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Shop Premium Products</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Curated products and resources to help you succeed
        </p>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SAMPLE_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-40 flex items-center justify-center">
                <span className="text-gray-300">{product.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-400">${product.price.toFixed(2)}</span>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="px-4 py-2 text-sm"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {selectedProducts.length > 0 && (
          <div className="bg-gray-900 p-8 rounded-lg border-2 border-purple-500 fixed bottom-8 right-8 max-w-sm">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <div className="space-y-2 mb-6">
              {SAMPLE_PRODUCTS.filter(p => selectedProducts.includes(p.id)).map(p => (
                <div key={p.id} className="flex justify-between text-gray-300">
                  <span>{p.name}</span>
                  <span>${p.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-purple-400">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            <Link href="/checkout" className="w-full">
              <Button className="w-full">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
