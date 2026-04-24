'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'

export default function SignUpPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    setIsLoading(true)
    try {
      // TODO: Call your signup API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Sign in automatically
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.ok) {
        toast.success('Account created successfully!')
        router.push('/membership')
      } else {
        toast.error('Sign up failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-300">Join our exclusive community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-800">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Min. 8 characters"
              required
              minLength={8}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-purple-500 outline-none"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-purple-400 hover:text-purple-300">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
