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
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required')
        }

        const { data: user, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', credentials.email)
          .single()

        if (error || !user) {
          const { data: newUser, error: createError } = await supabase
            .from('users')
            .insert({
              email: credentials.email,
              password_hash: credentials.password,
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
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id
        token.tier = user.tier
      }
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.id
        session.user.tier = token.tier
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt' as const,
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
