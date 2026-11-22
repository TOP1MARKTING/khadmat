/**
 * Edge middleware:
 * - Real HTTP 404 for commercial Phase-2 routes
 * - Real HTTP 404 for unknown public paths (SPA no longer returns 200 for junk URLs)
 * Known knowledge pages + /admin + static assets pass through.
 */
import { next } from '@vercel/edge'
import { ALLOW_EXACT, ALLOW_PREFIXES } from './path-allowlist.js'

export const config = {
  matcher: [
    '/((?!_next/|favicon\\.png|logo\\.png|robots\\.txt|sitemap\\.xml|google[^/]+\\.html).*)',
  ],
}

function notFound() {
  return new Response(
    `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex,nofollow" />
  <title>404 | ساعدني</title>
</head>
<body style="font-family:system-ui,sans-serif;text-align:center;padding:4rem 1rem">
  <p>404</p>
  <h1>الصفحة غير موجودة</h1>
  <p><a href="/">العودة للرئيسية</a></p>
</body>
</html>`,
    {
      status: 404,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex, nofollow',
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    },
  )
}

function isStaticAsset(pathname) {
  return /\.[a-zA-Z0-9]{1,8}$/.test(pathname)
}

function isAllowed(pathname) {
  if (pathname === '/') return true
  if (ALLOW_EXACT.has(pathname)) return true
  if (ALLOW_PREFIXES.some((p) => pathname.startsWith(p))) return true
  if (isStaticAsset(pathname)) return true
  return false
}

export default function middleware(request) {
  const { pathname } = new URL(request.url)

  // Google Search Console HTML verification must never 404.
  if (/^\/google[a-z0-9]+\.html$/i.test(pathname)) {
    return next()
  }

  if (
    pathname === '/advertise-with-us' ||
    pathname.startsWith('/advertise-with-us/') ||
    pathname === '/rent-a-page' ||
    pathname.startsWith('/rent-a-page/')
  ) {
    return notFound()
  }

  if (!isAllowed(pathname)) {
    return notFound()
  }

  return next()
}
