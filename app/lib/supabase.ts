import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

// User subscription types
export type UserSubscription = {
  id: string
  user_id: string
  tier: 'free' | 'basic' | 'pro'
  stripe_subscription_id: string | null
  status: 'active' | 'cancelled' | 'expired'
  created_at: string
  updated_at: string
}

// Content types
export type ExclusiveContent = {
  id: string
  partner_id: string
  content_type: 'photo' | 'video' | 'message'
  title: string
  description: string
  file_url: string
  tier_required: 'basic' | 'pro'
  created_at: string
}

// Product types
export type Product = {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  stripe_product_id: string
  inventory: number
  created_at: string
}
