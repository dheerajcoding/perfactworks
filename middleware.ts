import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '')
  const isHttps = protocol === 'https'
  const isWww = host.startsWith('www.')
  const isLocalhost = host.includes('localhost') || host.startsWith('127.0.0.1')

  if (!isLocalhost && (!isHttps || isWww)) {
    const canonicalHost = host.replace(/^www\./, '')
    const redirectUrl = new URL(request.url)
    redirectUrl.protocol = 'https:'
    redirectUrl.host = canonicalHost
    return NextResponse.redirect(redirectUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)'],
}
