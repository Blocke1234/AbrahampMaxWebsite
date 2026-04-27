# Product Marketing Context — Abraham Max / Bigwillie Style

> **Purpose:** Single source of truth for every marketing skill (paid-ads, ad-creative, email-sequence, copywriting, onboarding-cro, etc.). Every skill reads this before producing output. Update this file when positioning changes — do NOT update it inside individual campaigns.

> **Last updated:** 2026-04-27
> **Owner:** Bryan (Abraham Max)

---

## 1. The Person Behind the Brand

The brand is the man. Every campaign, page, ad, and email must lead with **who he is**, not what he sells.

| Stat | Detail |
|---|---|
| Education | Bachelor's degree |
| Military | 4 years active service |
| Geography | Lived in **7 U.S. states**, traveled to **6 countries** |
| Experience | **10 years in sales** |
| Active licenses | Life insurance · Tax preparer |
| In progress | Real estate license (in training) |

**Personality stack (use as flavor, never the headline):**
- **Gemini** — dual-perspective, adaptable communicator
- **Life Path 11** — intuitive, visionary, leader
- **Dragon (Chinese zodiac)** — bold, commanding presence

**One-line identity:** *"Veteran. Licensed. Lived in 7 states, walked through 6 countries. Spent 10 years selling. Now I show people what I learned."*

---

## 2. Ideal Customer Profile (ICP)

### Primary
- **Age:** 22–45, English-speaking, mobile-first
- **Mindset:** Curious about wealth, content creation, lifestyle freedom — but skeptical of "guru" garbage
- **Pain:** Saturated with influencers who never had a real job, never served, never sold anything offline. They want a guide who's been *outside* the algorithm.
- **Where they hang out:** TikTok, Instagram, YouTube Shorts, Twitch, Kick

### Secondary (paying premium tier)
- Adults who want **direct, gated access** to exclusive content + partners
- Higher disposable income, value privacy, will pay for curation over feed scroll

### Anti-ICP (don't waste ad spend on these)
- Pure freebie hunters who'll never convert
- Clout chasers who only follow for collabs
- Anyone outside US/CA/UK/AU on day one (international expansion = phase 3)

---

## 3. Positioning Statement

> **For** people tired of online "experts" who never lived a real life,
> **Abraham Max** is a **multifaceted creator hub** built by a **veteran with a Bachelor's, two active professional licenses, and 10 years of real-world sales** —
> who delivers **content, products, and exclusive access** through a single membership,
> **unlike** OnlyFans clones or generic "lifestyle gurus" who hide behind a logo.
> **The proof is in the bio** — it's all real, all licensed, all verifiable.

---

## 4. Brand Voice Rules (every skill must obey)

1. **Anchor in lived experience.** Every hook references something only he could say (a country, a state, a deployment, a sales war story).
2. **Drop the credential flex early.** Within the first 3 lines of any page/ad: at least one of {veteran, licensed, traveled, sales-trained}.
3. **Dual-perspective framing.** Show both sides of any debate (Gemini energy), then guide to his recommendation. Never preachy.
4. **Friend, not pitcher.** Every CTA should feel like a friend recommending — not a stranger selling.
5. **Global lens when relevant.** "I've seen this in [country] — here's what works."
6. **Sales intent always present.** Every post is a seed for conversion. Never water it down.
7. **Plain language.** No jargon. Short sentences for action, longer for explanation.

---

## 5. Hero Copy Direction (locked patterns)

**Pattern A — Credibility Stack (default)**
> "Veteran. Licensed in life insurance and taxes. 10 years in sales. 7 states, 6 countries.
> This is the hub for everything I'm building — content, products, exclusive access.
> You're not getting another guru. You're getting the man with the receipts."

**Pattern B — Transformation Promise**
> "I spent 10 years learning how to sell anything to anyone, in any state, in any country.
> Now I'm putting all of it inside one membership.
> Free to start. Pro for the people who want everything."

**Pattern C — Story Hook**
> "Four years in uniform. Seven states. Six countries. Two active licenses.
> Then ten years selling. Now I run this — content, products, and an exclusive vault.
> Pull up a chair."

**Default to A on the homepage.** Test B and C in paid ad creative + landing page A/B tests via the `ab-test-setup` skill.

---

## 6. Pricing & Offer Architecture (canonical)

| Tier | Price | What they get |
|---|---|---|
| Free | $0 | Browse free resources · limited content · community forum |
| Basic | **$9.99/mo** | All free + exclusive content · partner messaging · 10 exclusive photos/month · priority support |
| Pro | **$29.99/mo** | All basic + unlimited exclusive content · priority messaging · early access · exclusive live sessions · ad-free |

**Risk reversal language to add everywhere:** "Cancel anytime. Upgrade or downgrade with one click. Billing is monthly — no annual lock-in."

---

## 7. Channel Strategy

| Channel | Role | Lead message |
|---|---|---|
| TikTok | Top-of-funnel cold reach | Story hooks (Pattern C), short story arcs |
| Instagram | Mid-funnel warming | Carousels with credibility stack, behind-the-scenes |
| YouTube | Authority + SEO long-tail | "What I learned in [N] years selling [X]" |
| Twitch / Kick | Live trust + partner intros | Real-time conversations, AMA energy |
| Email | Conversion + retention | 5-email welcome sequence (Day 0/1/3/5/7) |
| Meta Ads | Retargeting + lookalikes | Pattern A or B hero, SFW creative |
| TikTok Ads | Spark Ads on top organic | Native-feel, no logo slams |

---

## 8. Compliance Guardrails (non-negotiable)

- **Stripe approval in writing** before any premium-tier ad spend at scale (adult-adjacent category risk)
- **All Meta/TikTok ad creative SFW** — premium content lives behind login only
- **Age-gate** on `/content` and `/messages` routes — verified before unlock
- **Geo-blocking** via Vercel edge middleware for jurisdictions where adult-adjacent content is restricted

---

## 9. Anti-Patterns (skill outputs that should auto-fail review)

- ❌ Any hero/About copy without at least one credibility stat in the first 3 lines
- ❌ "Humble beginnings" / "thousands of people" / "entrepreneur" — generic guru language
- ❌ Placeholder text ("Your image here", "Partner Name 1", "Bio and specialty") shipped to production
- ❌ Email sequences that don't reference the lived experience in at least one of the 5 emails
- ❌ Ad creative that could swap the brand name for any other creator without changing meaning

---

## 10. Reference Files

- `~/.claude/PROJECT_MAP.md` — full ecosystem map
- `~/.claude/memory/user.md` — identity + ventures
- `~/.claude/memory/preferences.md` — voice + relationship rules
- `~/.claude/decisions/marketing-agents-org-chart.md` — 7-agent org
