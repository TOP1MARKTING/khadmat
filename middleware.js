/**
 * Edge middleware:
 * - Social/share bots → /api/share-preview (page-specific OG meta without JS)
 * - Real HTTP 404 for commercial Phase-2 routes
 * - Real HTTP 404 for unknown public paths (SPA no longer returns 200 for junk URLs)
 * Known knowledge pages + /admin + static assets pass through.
 * Note: Googlebot is intentionally NOT rewritten (renders JS).
 */
import { next } from '@vercel/edge'
import { ALLOW_EXACT, ALLOW_PREFIXES } from './path-allowlist.js'

const SHARE_BOTS =
  /WhatsApp|facebookexternalhit|Facebot|Twitterbot|LinkedInBot|Slackbot|TelegramBot|Discordbot|SkypeUriPreview|Iframely|Embedly|Pinterest|redditbot/i

export const config = {
  matcher: [
    '/((?!_next/|api/|favicon\\.png|logo\\.png|robots\\.txt|sitemap\\.xml|google[^/]+\\.html|seo-catalog\\.json).*)',
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
  const url = new URL(request.url)
  const { pathname } = url

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

  const ua = request.headers.get('user-agent') || ''
  if (SHARE_BOTS.test(ua) && !pathname.startsWith('/admin')) {
    const preview = new URL('/api/share-preview', url.origin)
    preview.searchParams.set('path', pathname)
    return fetch(preview)
  }

  // Local /sa/* and /admin: serve SPA shell with noindex and no leftover homepage canonical/og:url.
  if (pathname.startsWith('/sa/') || pathname.startsWith('/admin')) {
    try {
      const indexRes = await fetch(new URL('/index.html', url.origin))
      if (indexRes.ok) {
        let html = await indexRes.text()
        html = html.replace(
          /<meta\s+name=["']robots["'][^>]*>/i,
          '<meta name="robots" content="noindex,nofollow" />',
        )
        if (!/name=["']robots["']/i.test(html)) {
          html = html.replace(
            /<\/head>/i,
            '<meta name="robots" content="noindex,nofollow" />\n</head>',
          )
        }
        html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '')
        html = html.replace(/<meta\s+property=["']og:url["'][^>]*>/gi, '')
        html = html.replace(
          /<title>[\s\S]*?<\/title>/i,
          pathname.startsWith('/admin')
            ? '<title>إدارة المحتوى | ساعدني</title>'
            : '<title>دليل محلي | ساعدني</title>',
        )
        return new Response(html, {
          status: 200,
          headers: {
            'content-type': 'text/html; charset=utf-8',
            'x-robots-tag': 'noindex, nofollow',
            'cache-control': 'public, max-age=0, must-revalidate',
          },
        })
      }
    } catch {
      // fall through
    }
    const res = next()
    res.headers.set('x-robots-tag', 'noindex, nofollow')
    return res
  }

  return next()
}
