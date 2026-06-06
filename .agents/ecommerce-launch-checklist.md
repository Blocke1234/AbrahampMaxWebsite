# E-Commerce Launch Checklist — Shop Section

> **Purpose:** Gating checklist the Shop section (`app/(shop)/*`) must pass before the e-commerce page is considered "complete" and ready for paid traffic.
>
> **Source:** Adapted from "Store Reviews Checklist" (uploaded 2026-04-27). Original is Shopify-centric — items below are translated to our **Next.js + Stripe + Supabase + Cloudinary** stack.
>
> **Rule:** Anything marked **R** is recommended, not vital. Everything else is required before launch.
>
> **Status legend:** `[ ]` = pending · `[x]` = done · `[~]` = in progress · `[N/A]` = not applicable to our stack
>
> **Owner:** Bryan · **Last reviewed:** 2026-04-27

---

## 0. Stack Notes (read once)

| PDF says | We use |
|---|---|
| Shopify | Next.js 14 on Vercel |
| Klaviyo / Optimonk popup | Custom modal + Resend (or future ESP) |
| Vitals app | Custom React components |
| "Powered by Shopify" footer | N/A — we control the footer |
| Shopify theme cart | Custom cart page (`app/(shop)/cart/page.tsx`) |
| Product photo CDN | Cloudinary |

---

## 1. Pre-Launch Requirements (must be 100% before going live)

- [ ] Store has a clickable, public link (no preview-deploy gate)
- [x] No site password / no auth wall on Shop pages
- [ ] **Custom domain `bigwilliestyle.co` is live** (currently ECONNREFUSED — Phase 0 fix)
- [x] Domain uses `.co` (no extra words like "shop" or "online")
- [ ] Read every section of the PDF and completed actionable steps
- [ ] **At least 5 products live in the Shop** (preferably ~10) — currently sample data only
- [ ] **One designated "winning product"** identified for paid ads (must meet winning-product criteria)
- [ ] Winning product priced at **3× markup** if running paid ads (or 2× if TikTok organic only)
- [ ] **Professional email address** active (e.g., `bryan@bigwilliestyle.co` via Zoho or Google Workspace)

---

## 2. General Brand & Design

- [x] Store name is short, memorable, unique (Abraham Max / Bigwillie Style — both in use)
- [ ] Overall design aesthetically pleasing — proportions, image quality, spacing consistent
- [ ] Zero scammy elements — no animated ATC buttons, no chaotic color schemes
- [ ] Nothing distracting from the purchase path
- [ ] Buttons look pressable (hover states, rounded corners, visible affordance) — ✅ Tailwind defaults
- [ ] Cookie banner only if GDPR-required (we'll need one for EU traffic later)
- [x] Logo always in the same nav position, always links to homepage
- [ ] **Max one popup**, and it's the email-capture popup (delayed 30–60s OR exit-intent)
- [ ] **Page Speed**: home, landing, product pages load <3s on https://pagespeed.web.dev/
- [ ] Mission statement on the page — what / how / why, in one sentence (pull from `.agents/product-marketing-context.md` Section 3)
- [ ] Consistent spacing throughout
- [ ] **Max 2 (3 at most) colors** — currently dark + purple/pink gradient (count = 3 — borderline, audit later)
- [ ] No low-contrast greys — all text passes WCAG AA
- [ ] Consistent font everywhere
- [ ] Consistent grammar + capitalization style
- [ ] Zero spelling errors
- [ ] Body font complements logo font
- [ ] All titles capitalized consistently
- [ ] Policy pages have NO `[ ]` placeholders left
- [ ] **Favicon installed** (visible in browser tab) — check `public/favicon.ico`
- [ ] Email-capture incentive live (e.g., "Sign up, get 10% off")

---

## 3. Copywriting

- [ ] Value prop in straightforward short sentences
- [ ] No run-on sentences anywhere
- [ ] Perfect, consistent grammar
- [ ] Only essential language — cut every word that doesn't earn its place
- [ ] No general/broad statements — always specific
- [ ] Leaves a lasting impression
- [ ] **NEVER says** "we want to give you the best shopping experience" or any variant of that template garbage

---

## 4. Logo

- [ ] HD, no pixelation
- [ ] Large enough to read on mobile
- [ ] Simple color scheme + design
- [ ] Expresses brand aesthetic
- [ ] **R** Horizontal preferred over vertical/square
- [ ] Embellishments stay to the sides or behind the brand name
- [ ] Thick lines, simple — not intricate

---

## 5. Navigation

- [ ] Max 3 menu levels — keep it simple
- [ ] **R** Sticky header (nav + cart always accessible)
- [ ] Site-wide offer at top of homepage (e.g., "Free Shipping — Today Only" + linked CTA)
- [ ] Privacy / Return / Terms NOT in main nav — they belong in the footer
- [ ] Most important pages reachable in one click

---

## 6. Footer

- [N/A] "Powered by Shopify" removal — we're on Next.js, no such footer
- [ ] **R** Real-business proof: phone, email, physical address (PO box OK)
- [ ] "Legal" menu in footer with all policies
- [ ] Email signup form
- [ ] **R** Social media links
- [ ] Quicklinks + sitemap
- [ ] **R** Payment-method icons displayed
- [ ] "Our Mission" — 2–3 sentences max, pulled from `.agents/product-marketing-context.md`
- [ ] No unnecessary embellishment
- [ ] **R** "Back to top" button

---

## 7. Homepage

- [x] Value prop is prominent + first thing customer sees (Phase 0 rewrite — credibility-stack hero)
- [ ] HQ graphics, not clip art / stock model photos — **needs real headshot at `public/about-headshot.jpg`**
- [ ] **R** Quick contact-support link visible
- [ ] **R** Brand mission/vision section on homepage
- [ ] **R** "Recently viewed products" section
- [ ] **R** Customer reviews section linking to product pages

### Banner / Above-the-Fold
- [x] One simple HQ photo (currently gradient — replace with real photo or product hero)
- [ ] Expresses unique brand aesthetic
- [ ] Mentions featured product/collection
- [x] Value clearly communicated (Phase 0 rewrite did this)
- [x] Caption + image explain what's being sold
- [x] CTA button: SHOP / SHOP NOW / BUY NOW (currently "Start Free" — adjust for Shop landing)
- [ ] Visible without scrolling — full message above the fold

---

## 8. Collection / Category Pages (`app/(shop)/products/page.tsx`)

- [ ] **R** Sort options: Best Sellers, Featured, A–Z, Price
- [ ] **R** Title shows product count (e.g., "All Products (12)")
- [ ] 3–4 product cards per row
- [ ] Professional, consistent product photography (same angle, same style across all)
- [ ] Each product card shows: title, old price, new price, discount, review stars
- [ ] **R** CTA button on hover or below card

---

## 9. Product Page (single product detail — needs to be built)

### General
- [ ] Descriptive product title
- [ ] Title prominent + large
- [ ] **R** Title max 65 characters
- [ ] Description follows the "Adding Products" video format
- [ ] **R** In-depth info in dropdown menus
- [ ] No required external research to understand the product
- [ ] Max 5 variants per product (some exceptions OK)
- [ ] "Ships From" variant deleted from all products
- [ ] Variant titles neat, capitalized, consistent
- [ ] Sizing chart present if product needs one

### Image Gallery
- [ ] Main photo makes amazing first impression
- [ ] **R** Zoom on hover/click
- [ ] All product features shown across images
- [ ] Thumbnails of other available images
- [ ] Native mobile swipe support
- [ ] Consistent style across all product pages
- [ ] Plain background photography
- [ ] **HD only — minimum 1000×1000 px**
- [ ] No low-quality / generic images, ever

### CTA Area
- [ ] Main CTA prominent, optionally with cart icon
- [ ] Variant select changes main image
- [ ] Quantity selector present
- [ ] Size chart easily accessible (if applicable)
- [ ] CTA copy tells what happens on click ("Add to Cart" / "Proceed to Checkout")
- [ ] Clear feedback on click — show added product, open mini-cart, etc.
- [ ] Price near main CTA
- [ ] CTA background color stands out, unique on page
- [ ] Old price strike-through next to new price (if applicable)
- [ ] **R** Free shipping shown near CTA (if offered)

### Social Proof
- [ ] Customer reviews on product page (with photos/videos optimal)
- [ ] Top reviews are detailed (not "great product")
- [ ] **R** Screenshots of social media DMs / comments about product
- [ ] Review stars above the fold
- [ ] Reviews paginated: show 5–10 then "Show More"
- [ ] **Winning product: ≥50 reviews · Other products: ≥20 reviews**

---

## 10. Cart Page (`app/(shop)/cart/page.tsx`)

- [ ] Clean, easy to navigate
- [ ] **R** Cart timer ("Your cart expires in 12:00")
- [ ] Cart persists via cookies — items still there on return visit
- [ ] All product info shown (title, price, variant, qty, image)
- [ ] **R** Image shown matches selected variant
- [ ] Quantity easily editable
- [ ] Items easily removable
- [ ] **R** Upsell / cross-sell widget to lift AOV

---

## 11. Reminders / Anti-Patterns (read every time)

- ❌ Don't include random "announcement" blocks — only if simple, short, conversion-relevant
- ❌ Don't build a "general store" — stay focused on solving ONE problem
- ❌ Don't rely on Unsplash — get custom photography for the products you actually sell
- ❌ Don't use complex color schemes — simple before complex, always
- ✅ Read every word of site copy out loud — if it sounds awkward, rewrite it (Grammarly OK)

---

## 12. Pre-Flight (final gate before paid ads)

Before sending one dollar of paid traffic to Shop:

- [ ] All sections above at ≥90% complete
- [ ] **GA4 + Meta Pixel + TikTok Pixel firing** (run `analytics-tracking` skill)
- [ ] **Welcome email sequence live** (run `email-sequence` skill)
- [ ] **Stripe approved in writing** for our business category
- [ ] PageSpeed Insights ≥90 mobile, ≥95 desktop on the winning product page
- [ ] Tested checkout end-to-end with a real card (Stripe test mode AND one live $0.50 transaction)
- [ ] DNS on `bigwilliestyle.co` resolving + SSL valid

---

## 13. Skill → Section Map (which Claude skill closes which gap)

| Section | Skill to run |
|---|---|
| Section 7 (Homepage) | `enhance-prompt` + `stitch-loop` (Phase 2) |
| Section 9 (Product Page) | `stitch-loop` for layout, `copywriting` skill for descriptions |
| Section 12 (Pre-Flight pixels) | `analytics-tracking` |
| Section 12 (Email gate) | `email-sequence` |
| Cart abandonment recovery | `email-sequence` (3-email cart series) |
| Review collection | Future: integrate Judge.me or build native + Supabase table |
