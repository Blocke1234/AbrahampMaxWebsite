import { NextRequest, NextResponse } from 'next/server'

// Countries where adult content is legally restricted
const RESTRICTED_COUNTRIES = [
  'IR', // Iran
  'KP', // North Korea
  'SY', // Syria
  'CU', // Cuba
]

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US'
  const pathname = request.nextUrl.pathname

  // Block access to exclusive content from restricted countries
  if (pathname.startsWith('/exclusive') || pathname.startsWith('/api/webhooks')) {
    if (RESTRICTED_COUNTRIES.includes(country)) {
      return new NextResponse('Access denied in your region', { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/exclusive/:path*', '/api/webhooks/:path*']
}
