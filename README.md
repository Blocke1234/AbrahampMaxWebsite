# Big Willy Style — Website Redesign

## Overview

A conversion-optimized product page for the Back Neck & Shoulder Massager, designed with inspiration from Midunu Chocolates, Recess, and Flaus. Features a dark navy premium aesthetic with teal accent CTAs, bold typography, and a streamlined checkout flow via Stripe.

---

## File Structure & Where to Paste in Vercel Editor

```
app/
├── globals.css          → Replace your existing globals.css
├── layout.tsx           → Replace your existing layout.tsx
├── page.tsx             → Replace your existing page.tsx (THIS IS THE MAIN FILE)
├── success/
│   └── page.tsx         → Create new file: app/success/page.tsx
└── api/
    └── checkout/
        └── route.ts     → Replace or create: app/api/checkout/route.ts

tailwind.config.ts       → Replace your existing tailwind.config.ts
postcss.config.js        → Replace your existing postcss.config.js
next.config.js           → Replace your existing next.config.js
package.json             → Update dependencies (add "stripe": "^14.14.0")
```

---

## Setup Steps

### 1. Update Files in Vercel Editor
Paste each file into the corresponding location shown above.

### 2. Add Stripe Dependency
If not already installed, add `stripe` to your package.json dependencies:
```json
"stripe": "^14.14.0"
```

### 3. Set Environment Variables in Vercel
Go to your Vercel project → Settings → Environment Variables and add:

| Variable | Value |
|----------|-------|
| `STRIPE_SECRET_KEY` | Your Stripe secret key (sk_live_...) |
| `NEXT_PUBLIC_BASE_URL` | Your deployed URL (e.g., https://your-site.vercel.app) |

### 4. Create Stripe Products & Prices
In your Stripe Dashboard (https://dashboard.stripe.com/products):

| Product | Suggested Price | Price ID Placeholder |
|---------|----------------|---------------------|
| Back Neck & Shoulder Massager | $79.99 | `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_MASSAGER` |
| Heated Neck Wrap | $29.99 | `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_NECKWRAP` |
| Muscle Relief Patches | $14.99 | `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_PATCHES` |
| Cervical Traction Pillow | $39.99 | `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_PILLOW` |
| Trigger Point Ball Set | $19.99 | `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_BALLS` |
| Lavender Heat Pillow | $24.99 | `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_HEATPILLOW` |

After creating each product in Stripe, copy the Price ID and replace the placeholder in `page.tsx`.

### 5. Add Product Images
Replace the placeholder images in the `RECOMMENDED_PRODUCTS` array with your actual product image URLs. You can:
- Upload images to your Vercel project's `public/images/` folder
- Use external image URLs (add domains to `next.config.js`)

### 6. Delete Old Product Pages
Remove any old product page files that are no longer needed from your project.

---

## Design Decisions

| Element | Inspiration | Implementation |
|---------|-------------|----------------|
| Hero layout | Flaus | Bold headline + product image split |
| Trust bar | Flaus | Scrolling marquee with guarantees |
| Color scheme | Custom (wellness-optimized) | Navy + teal + amber |
| Typography | Recess | Bold, lowercase, playful headings |
| Product cards | Midunu | Clean cards with hover effects |
| FAQ accordion | Flaus | Expandable questions section |
| Social proof | All three | Reviews + stats + badges |

---

## Recommended Products (Alibaba Sourcing Notes)

| Product | Alibaba Search Term | Est. Cost | Retail | Margin |
|---------|-------------------|-----------|--------|--------|
| Heated Neck Wrap | "USB heated neck wrap microfiber" | $3-6 | $29.99 | ~85% |
| Muscle Relief Patches | "bamboo charcoal pain relief patches" | $0.50-1.50 | $14.99 | ~90% |
| Cervical Traction Pillow | "cervical memory foam pillow ergonomic" | $5-10 | $39.99 | ~80% |
| Trigger Point Ball Set | "massage ball set 3 pack" | $1-3 | $19.99 | ~88% |
| Lavender Heat Pillow | "lavender wheat bag microwavable" | $3-7 | $24.99 | ~80% |

All products are:
- No FDA regulation required
- No battery shipping restrictions (except heated wrap if USB — use microwavable alternative)
- No age restrictions
- Lightweight for affordable shipping
- Consumable/repeat purchase potential (patches especially)
