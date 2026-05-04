# Analytics Tracking Plan — Abraham Max / Bigwillie Style

**Status:** ✅ Live  
**Last updated:** 2026-04-27  
**Owner:** Bryan (Abraham Max)  
**Implementation:** GA4 + Meta Pixel + TikTok Pixel  

---

## Overview

This tracking plan instruments the entire funnel from cold awareness (TikTok) through conversion (subscription) and retention (exclusive content views).

### Tools Deployed
- **GA4** — Primary analytics, funnels, audience segments
- **Meta Pixel** — Retargeting, lookalike audiences, ROAS measurement
- **TikTok Pixel** — Native Spark Ads attribution, Ads Manager optimization

### Key Decisions
1. **Event-first approach** — Track every micro-conversion, not just macro (signup, payment)
2. **Consistent naming** — All platforms use same event names (GA4 style: `snake_case`)
3. **No PII in properties** — Never pass email, phone, or real names to any pixel
4. **Cross-domain tracking disabled** — Only track on `bigwilliestyle.co`
5. **Consent-ready** — Structure supports cookie consent mode (if/when GDPR applies)

---

## Event Taxonomy

### 1. **signup_completed** (Funnel Stage: Activation)
**When:** User finishes free signup (creates account + verifies email)  
**Properties:**
- `method` (email, google, github)
- `plan` (free, basic, pro)
- `source` (organic, paid, referral)

**Pixel behavior:**
- GA4: Custom event `signup_completed`
- Meta: Converted to `CompleteRegistration`
- TikTok: Converted to `CompleteRegistration`

---

### 2. **subscribe_basic** (Funnel Stage: Revenue)
**When:** User upgrades from free → Basic ($9.99/mo)  
**Properties:**
- `plan` (basic)
- `price` (9.99)
- `currency` (USD)
- `billing_cycle` (monthly)

**Pixel behavior:**
- GA4: Purchase event, `currency: USD`, `value: 9.99`
- Meta: `Purchase` event, `value: 9.99`, `currency: USD`
- TikTok: `Purchase` event, `value: 9.99`

---

### 3. **subscribe_pro** (Funnel Stage: Revenue)
**When:** User upgrades to Pro ($29.99/mo) or Basic → Pro  
**Properties:**
- `plan` (pro)
- `price` (29.99)
- `currency` (USD)
- `billing_cycle` (monthly)

**Pixel behavior:**
- GA4: Purchase event, `currency: USD`, `value: 29.99`
- Meta: `Purchase` event, `value: 29.99`, `currency: USD`
- TikTok: `Purchase` event, `value: 29.99`

---

### 4. **message_partner** (Funnel Stage: Engagement)
**When:** User sends message via Inner Circle partner contact form  
**Properties:**
- `partner_name` (name of the partner being contacted)

**Pixel behavior:**
- GA4: Custom event `message_partner`
- Meta: Converted to `Contact`
- TikTok: Converted to `Contact`

---

### 5. **content_view** (Funnel Stage: Engagement)
**When:** User views exclusive content (exclusive photos, videos, articles)  
**Properties:**
- `content_type` (photo, video, article, live_session)
- `content_id` (database ID of content)

**Pixel behavior:**
- GA4: Custom event `content_view`
- Meta: Converted to `ViewContent`
- TikTok: Converted to `ViewContent`

---

### Supporting Events

| Event | Purpose | When | Pixels |
|-------|---------|------|--------|
| `cta_clicked` | Measure hero/CTA engagement | User clicks "Start Free" or "See Membership" | GA4, Meta (ViewContent) |
| `form_submitted` | Pre-signup interest | User submits contact form without full signup | GA4, Meta (Contact) |
| `page_view` | Baseline traffic | Every page load | GA4 (automatic), Meta, TikTok |

---

## Implementation Details

### Environment Variables Required

```bash
# .env.local (Never commit this!)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # GA4 property ID
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX    # Meta Pixel ID
NEXT_PUBLIC_TIKTOK_PIXEL_ID=XXXXXXXXXX  # TikTok Pixel ID
```

### Pixel Initialization

All three pixels initialize automatically via `app/components/Analytics.tsx`:
- GA4: Loaded via Google Tag Manager script
- Meta: Loaded via Facebook SDK
- TikTok: Loaded via TikTok Analytics script

### Event Firing (TypeScript)

```typescript
import { trackSignupCompleted, trackSubscribePro } from '@/app/lib/analytics'

// When free signup completes
trackSignupCompleted('email', 'free', { source: 'organic' })

// When user upgrades to Pro
trackSubscribePro({ source: 'email_day7' })
```

---

## Funnel & Conversion Goals

### Primary Funnel (Cold → Revenue)

```
TikTok/Organic → Homepage
         ↓
   [page_view logged]
         ↓
   Click CTA [cta_clicked]
         ↓
   Signup [signup_completed]
         ↓
   Browse content (free tier)
   [content_view logged]
         ↓
   Click "See Membership"
         ↓
   Upgrade to Basic/Pro
   [subscribe_basic OR subscribe_pro]
```

### Secondary Funnel (Retention)

```
Logged-in user
      ↓
Views exclusive content [content_view]
      ↓
Messages partner [message_partner]
      ↓
Upgrades plan [subscribe_pro]
```

---

## Metrics to Monitor

### Weekly Checks
- **Signup completion rate:** `signup_completed` ÷ `page_view`
- **Subscribe rate:** `subscribe_basic + subscribe_pro` ÷ `signup_completed`
- **Content engagement:** `content_view` per free/paid user
- **Partner inquiries:** `message_partner` volume

### Monthly Goals (Phase 2 target)
- 1000+ monthly signups
- 5-10% conversion to Basic
- 2-5% conversion to Pro
- <5% churn (cancel within 30 days)

### Dashboard Segments
- **By Source:** organic, tiktok, meta, email
- **By Device:** mobile, desktop, tablet
- **By Tier:** free, basic, pro
- **By Cohort:** week of signup

---

## Verification Checklist

- [ ] GA4 property created and ID pasted in `.env.local`
- [ ] Meta Pixel ID pasted in `.env.local`
- [ ] TikTok Pixel ID pasted in `.env.local`
- [ ] All 3 pixels loading (use browser DevTools → Network)
- [ ] Test signup fires `signup_completed` event
- [ ] Test subscription fires `subscribe_basic` or `subscribe_pro`
- [ ] GA4 DebugView shows events in real-time
- [ ] Meta Pixel Helper shows events firing
- [ ] TikTok ads manager shows pixel events
- [ ] No PII in any event properties
- [ ] Conversions marked in GA4 Admin

---

## Troubleshooting

### Events not firing in GA4 DebugView
1. Check `.env.local` has correct `NEXT_PUBLIC_GA_ID`
2. Verify `npm run dev` reloaded after env change
3. Open GA4 → Admin → DebugView (wait 30 sec)
4. Trigger event in app, refresh DebugView

### Meta Pixel Helper shows no events
1. Install Meta Pixel Helper Chrome extension
2. Ensure Meta Pixel ID matches in `.env.local`
3. Check Network tab → `connect.facebook.net` loads
4. Open helper → Pixels → should show your ID

### TikTok events not in Ads Manager
1. Wait 24–48 hrs for first events to sync
2. Verify pixel ID in `.env.local` matches TikTok Business account
3. Check TikTok Pixel Helper → Events should fire

---

## Next Steps (Phase 2)

1. **UTM parameter layer** — Add `utm_source=tiktok&utm_medium=social` to TikTok links
2. **Event-to-conversion mapping** — Mark GA4 conversions for each subscription tier
3. **Audience creation** — Build Meta/TikTok lookalike audiences from converters
4. **Retargeting campaigns** — 7-day follow-up for page-viewers, 14-day for almost-converters
5. **Cohort analysis** — Compare signup → subscription rate by source weekly

---

## Files Modified

- `app/layout.tsx` — Already imports Analytics components (no change needed)
- `app/components/Analytics.tsx` — GA4, Meta, TikTok pixel init (no change needed)
- `app/lib/analytics.ts` — **NEW** Event tracking utility
- `.agents/analytics-tracking-plan.md` — **NEW** This file

---

## Questions?

Check GA4/Meta Pixel/TikTok docs:
- [GA4 Event Setup](https://support.google.com/analytics/answer/9234069)
- [Meta Pixel Guide](https://www.facebook.com/business/help/952192354843755)
- [TikTok Pixel Docs](https://ads.tiktok.com/help/article/tiktok-pixel)
