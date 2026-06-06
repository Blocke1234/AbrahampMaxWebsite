import { supabase } from '@/lib/supabase'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/lib/auth'

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authConfig)
    const userEmail = (session as { user?: { email?: string } } | null)?.user?.email

    if (!userEmail) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: subscription, error } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_email', userEmail)
      .single()

    if (error && error.code !== 'PGRST116') throw error

    return Response.json({ subscription: subscription || null })
  } catch (error) {
    console.error('Subscriptions API error:', error)
    return Response.json(
      { error: 'Failed to fetch subscription' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authConfig)
    const userEmail = (session as { user?: { email?: string } } | null)?.user?.email

    if (!userEmail) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { tier, stripe_subscription_id } = body

    const { data, error } = await supabase
      .from('user_subscriptions')
      .upsert([
        {
          user_email: userEmail,
          tier,
          stripe_subscription_id,
          status: 'active',
        },
      ])
      .select()

    if (error) throw error

    return Response.json({ subscription: (data as unknown[])[0] })
  } catch (error) {
    console.error('Subscription creation error:', error)
    return Response.json(
      { error: 'Failed to update subscription' },
      { status: 500 }
    )
  }
}
