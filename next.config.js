/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ergonomiclux.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },

  // PostHog reverse proxy. Analytics calls go to our own domain instead of
  // posthog.com, so ad blockers don't silently eat a third of the traffic data.
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]
  },

  // Required by the PostHog proxy above — without it the /ingest/decide POST
  // gets 308'd and the SDK never initialises properly.
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
