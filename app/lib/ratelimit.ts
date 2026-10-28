import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const hasUpstash =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN

const redis = hasUpstash ? Redis.fromEnv() : null

/**
 * Contact form limiter: 5 submissions per 10 minutes per IP.
 * Sliding window so a burst at the boundary can't double the allowance.
 */
export const contactLimiter =
  redis &&
  new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '10 m'),
    prefix: 'bws:contact',
    analytics: true,
  })

/**
 * Stripe replays a webhook on any non-2xx, and can deliver the same event more
 * than once even on success. Returns true the FIRST time an event id is seen,
 * false on every repeat — so the caller can skip duplicate side effects
 * (double "you're in" emails, double purchase_completed in PostHog).
 *
 * Fails OPEN when Upstash isn't configured: better to risk a duplicate
 * confirmation email than to drop a real purchase on the floor.
 */
export async function claimStripeEvent(eventId: string): Promise<boolean> {
  if (!redis) return true
  // NX = only set if absent. 72h covers Stripe's retry window with room to spare.
  const claimed = await redis.set(`bws:stripe:evt:${eventId}`, '1', {
    nx: true,
    ex: 60 * 60 * 72,
  })
  return claimed === 'OK'
}

/** Best-effort client IP behind Vercel/Cloudflare. */
export function clientIp(req: Request): string {
  const h = req.headers
  return (
    h.get('cf-connecting-ip') ||
    h.get('x-real-ip') ||
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    '127.0.0.1'
  )
}
