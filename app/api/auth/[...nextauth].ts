import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required')
        }

        // Check if user exists in Supabase
        const { data: user, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', credentials.email)
          .single()

        if (error || !user) {
          // Create new user if doesn't exist
          const { data: newUser, error: createError } = await supabase
            .from('users')
            .insert({
              email: credentials.email,
              password_hash: credentials.password, // In production, hash this!
              tier: 'free',
              created_at: new Date(),
            })
            .select()
            .single()

          if (createError || !newUser) {
            throw new Error('Failed to create user')
          }

          return {
            id: newUser.id,
            email: newUser.email,
            tier: newUser.tier,
          }
        }

        // Verify password (in production, use bcrypt!)
        if (user.password_hash !== credentials.password) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user.id,
          email: user.email,
          tier: user.tier,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.tier = user.tier
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.tier = token.tier as string
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
}

export default NextAuth(authOptions)
