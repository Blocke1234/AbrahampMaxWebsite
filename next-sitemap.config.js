/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://bigwilliestyle.co',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/cart', '/checkout', '/messages', '/api/*', '/icon.svg'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cart', '/checkout', '/messages', '/api/'],
      },
    ],
  },
}
