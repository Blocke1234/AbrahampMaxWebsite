/**
 * Analytics Event Tracking Utility
 *
 * Dispatches events to GA4, Meta Pixel, and TikTok Pixel
 * Event taxonomy: signup, subscribe_basic, subscribe_pro, message_partner, content_view
 */

export type AnalyticsEvent =
  | 'signup_completed'
  | 'subscribe_basic'
  | 'subscribe_pro'
  | 'message_partner'
  | 'content_view'
  | 'cta_clicked'
  | 'form_submitted'
  | 'page_view'

interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

/**
 * Track event across all platforms (GA4, Meta Pixel, TikTok Pixel)
 */
export function trackEvent(eventName: AnalyticsEvent, properties?: EventProperties) {
  // GA4 event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
    })
  }

  // Meta Pixel event (converts snake_case to camelCase for Meta's expectations)
  if (typeof window !== 'undefined' && window.fbq) {
    const metaEventMap: Record<AnalyticsEvent, string> = {
      'signup_completed': 'CompleteRegistration',
      'subscribe_basic': 'Purchase',
      'subscribe_pro': 'Purchase',
      'message_partner': 'Contact',
      'content_view': 'ViewContent',
      'cta_clicked': 'ViewContent',
      'form_submitted': 'Contact',
      'page_view': 'PageView',
    }

    const metaEventName = metaEventMap[eventName] || eventName
    window.fbq('track', metaEventName, properties)
  }

  // TikTok Pixel event
  if (typeof window !== 'undefined' && window.ttq) {
    const ttqEventMap: Record<AnalyticsEvent, string> = {
      'signup_completed': 'CompleteRegistration',
      'subscribe_basic': 'Purchase',
      'subscribe_pro': 'Purchase',
      'message_partner': 'Contact',
      'content_view': 'ViewContent',
      'cta_clicked': 'ViewContent',
      'form_submitted': 'Contact',
      'page_view': 'PageView',
    }

    const ttqEventName = ttqEventMap[eventName] || eventName
    window.ttq.track(ttqEventName, properties)
  }
}

/**
 * Track page view with metadata
 */
export function trackPageView(pageTitle?: string, properties?: EventProperties) {
  trackEvent('page_view', {
    page_title: pageTitle || document.title,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    ...properties,
  })
}

/**
 * Track CTA click
 */
export function trackCTAClick(buttonText: string, location: string, properties?: EventProperties) {
  trackEvent('cta_clicked', {
    button_text: buttonText,
    location,
    ...properties,
  })
}

/**
 * Track form submission
 */
export function trackFormSubmit(formType: string, properties?: EventProperties) {
  trackEvent('form_submitted', {
    form_type: formType,
    ...properties,
  })
}

/**
 * Track signup completion
 */
export function trackSignupCompleted(method: string, plan?: string, properties?: EventProperties) {
  trackEvent('signup_completed', {
    method,
    plan: plan || 'free',
    ...properties,
  })
}

/**
 * Track subscription (Basic tier - $9.99/mo)
 */
export function trackSubscribeBasic(properties?: EventProperties) {
  trackEvent('subscribe_basic', {
    plan: 'basic',
    price: 9.99,
    currency: 'USD',
    ...properties,
  })
}

/**
 * Track subscription (Pro tier - $29.99/mo)
 */
export function trackSubscribePro(properties?: EventProperties) {
  trackEvent('subscribe_pro', {
    plan: 'pro',
    price: 29.99,
    currency: 'USD',
    ...properties,
  })
}

/**
 * Track message/contact to partner
 */
export function trackMessagePartner(partnerName?: string, properties?: EventProperties) {
  trackEvent('message_partner', {
    partner_name: partnerName || 'unknown',
    ...properties,
  })
}

/**
 * Track content view
 */
export function trackContentView(contentType: string, contentId?: string, properties?: EventProperties) {
  trackEvent('content_view', {
    content_type: contentType,
    content_id: contentId,
    ...properties,
  })
}

// Global type augmentation for gtag, fbq, ttq
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    ttq?: {
      track: (event: string, properties?: EventProperties) => void
      page: () => void
    }
    dataLayer?: any[]
  }
}
