# Abraham Max - Premium Content & E-Commerce Platform

A full-stack Next.js application for managing exclusive content, e-commerce, and subscription management.

## Tech Stack

- **Frontend**: Next.js 14 (React 18) + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **File Storage**: AWS S3 / Cloudinary
- **Hosting**: Vercel

## Features

✅ **Homepage** - Hero section with CTAs
✅ **About Page** - Personal bio and partner showcase
✅ **Free Resources** - Email capture and downloadable content
✅ **E-Commerce** - Product catalog with shopping cart
✅ **Membership Tiers** - Free, Basic (\.99/mo), Pro (\.99/mo)
✅ **Exclusive Content** - Tier-gated photo/video galleries
✅ **User Authentication** - Email/password and OAuth
✅ **Payment Processing** - Stripe subscriptions and one-time purchases
✅ **Admin Dashboard** - Content and subscription management
✅ **Real-time Messaging** - Partner-to-subscriber direct messaging

## Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account
- Stripe account
- AWS S3 access (or Cloudinary for image optimization)
- Google OAuth credentials (optional)

### 1. Install Dependencies

\\\ash
npm install
\\\

### 2. Set Up Environment Variables

Copy \.env.local.example\ to \.env.local\ and fill in your credentials:

\\\ash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
\\\

### 3. Set Up Supabase Database

In your Supabase dashboard, create these tables:

\\\sql
-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Subscriptions
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  tier TEXT DEFAULT 'free',
  stripe_subscription_id TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL,
  image_url TEXT,
  stripe_product_id TEXT,
  inventory INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Exclusive Content
CREATE TABLE exclusive_content (
  id UUID PRIMARY KEY,
  partner_id UUID,
  content_type TEXT,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  tier_required TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY,
  sender_id UUID,
  receiver_id UUID,
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
\\\

### 4. Run Locally

\\\ash
npm run dev
\\\

Visit \http://localhost:3000\

## Deployment

### Deploy to Vercel

\\\ash
npm i -g vercel
vercel
\\\

1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy with one click

### Set Up Stripe Webhooks

1. In Stripe Dashboard → Webhooks
2. Add endpoint: \https://yoursite.com/api/stripe/webhook\
3. Copy webhook secret to \.env.local\ as \STRIPE_WEBHOOK_SECRET\

## Project Structure

\\\
app/
├── (auth)/
│   ├── login/
│   └── signup/
├── (pages)/
│   ├── about/
│   ├── free-resources/
│   └── contact/
├── (shop)/
│   ├── products/
│   ├── cart/
│   └── checkout/
├── (exclusive)/
│   ├── membership/
│   ├── content/
│   └── messages/
├── api/
│   ├── auth/
│   ├── stripe/
│   ├── products/
│   └── subscriptions/
├── components/
│   ├── ui/
│   ├── Navigation.tsx
│   └── Footer.tsx
├── lib/
│   ├── supabase.ts
│   ├── stripe.ts
│   └── auth.ts
├── layout.tsx
├── page.tsx
└── globals.css
\\\

## Payment Integration

### Stripe Pricing Setup

1. Create pricing tiers in Stripe Dashboard:
   - Basic: \.99/month (price_xxx)
   - Pro: \.99/month (price_yyy)

2. Add prices to your code:
\\\	ypescript
const STRIPE_PRICES = {
  basic: 'price_xxx',
  pro: 'price_yyy',
}
\\\

## Key Files to Update

1. **Stripe Prices**: Update \STRIPE_PRICES\ in membership page
2. **Content**: Customize homepage, about, and resource pages
3. **Images**: Upload partner photos to AWS S3 or Cloudinary
4. **Email**: Integrate Mailchimp/ConvertKit for email capture

## Next Steps

- [ ] Configure all environment variables
- [ ] Set up Supabase database and tables
- [ ] Create Stripe products and prices
- [ ] Set up AWS S3 bucket
- [ ] Configure email service
- [ ] Upload partner content
- [ ] Test payment flow
- [ ] Deploy to Vercel
- [ ] Set up Stripe webhooks
- [ ] Launch!

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs
- Stripe Docs: https://stripe.com/docs
- NextAuth Docs: https://next-auth.js.org

---

Built with Next.js 14 + Stripe + Supabase
