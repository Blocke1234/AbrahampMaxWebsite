# Step-by-Step Paste Guide for Vercel Editor

## Quick Start (5 minutes)

Follow these steps in order in your Vercel project editor:

---

### Step 1: Replace `app/globals.css`
Open your existing `app/globals.css` and **replace all content** with the file provided.

---

### Step 2: Replace `app/layout.tsx`
Open your existing `app/layout.tsx` and **replace all content** with the file provided.

---

### Step 3: Replace `app/page.tsx` (MOST IMPORTANT)
This is your new homepage. Open `app/page.tsx` and **replace all content**.

**After pasting, update these placeholder values:**
- Search for `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_MASSAGER` → replace with your real Stripe Price ID
- Search for `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_NECKWRAP` → replace with your real Stripe Price ID
- Search for `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_PATCHES` → replace with your real Stripe Price ID
- Search for `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_PILLOW` → replace with your real Stripe Price ID
- Search for `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_BALLS` → replace with your real Stripe Price ID
- Search for `price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID_HEATPILLOW` → replace with your real Stripe Price ID

---

### Step 4: Create `app/api/checkout/route.ts`
If this file already exists in your project, replace it. If not, create the folder structure:
`app/api/checkout/route.ts`

---

### Step 5: Create `app/success/page.tsx`
Create a new folder `success` inside `app/`, then create `page.tsx` inside it.

---

### Step 6: Replace `tailwind.config.ts`
Replace your existing Tailwind config with the provided file.

---

### Step 7: Replace `next.config.js`
Replace your existing Next config. This adds image domain allowlists.

---

### Step 8: Update `package.json`
Add `"stripe": "^14.14.0"` to your dependencies if not already present.

---

### Step 9: Set Environment Variables
In Vercel Dashboard → Your Project → Settings → Environment Variables:
- `STRIPE_SECRET_KEY` = your Stripe secret key
- `NEXT_PUBLIC_BASE_URL` = your site URL after deployment

---

### Step 10: Delete Old Product Pages
Remove any files related to old products that you no longer want (e.g., old product page routes, old contribute page if desired).

---

### Step 11: Deploy
Commit/save changes and Vercel will auto-deploy. Check your live site!

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Stripe error on checkout | Verify STRIPE_SECRET_KEY is set in Vercel env vars |
| Images not loading | Add image domains to next.config.js remotePatterns |
| Styles not applying | Make sure globals.css import is in layout.tsx |
| 404 on /success | Ensure app/success/page.tsx exists |
| Build fails | Run `npm install` or check for missing stripe package |
