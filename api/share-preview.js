import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEFAULT_IMAGE, renderShareHtml } from '../scripts/lib/seo-catalog.mjs'

const here = dirname(fileURLToPath(import.meta.url))

function loadCatalog() {
  try {
    return JSON.parse(readFileSync(join(here, 'seo-catalog.json'), 'utf8'))
  } catch {
    try {
      return JSON.parse(
        readFileSync(join(process.cwd(), 'public', 'seo-catalog.json'), 'utf8'),
      )
    } catch {
      return {
        '/': {
          path: '/',
          title: 'ساعدني | Saedni',
          description: 'مرجع معرفي للمهن والخدمات في السعودية.',
          image: DEFAULT_IMAGE,
          robots: 'index,follow',
          type: 'website',
        },
      }
    }
  }
}

function normalizePath(raw) {
  if (!raw) return '/'
  let p = String(raw).split('?')[0].split('#')[0]
  if (!p.startsWith('/')) p = `/${p}`
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)
  return p || '/'
}

export default function handler(req, res) {
  const incoming = typeof req.url === 'string' ? req.url : '/'
  const url = new URL(incoming, 'https://www.saedniksa.com')
  const path = normalizePath(url.searchParams.get('path') || '/')
  const catalog = loadCatalog()
  const isLocalMatrix = path === '/sa' || path.startsWith('/sa/')
  const isAdmin = path === '/admin' || path.startsWith('/admin/')
  const page = catalog[path] || {
    path,
    title: isLocalMatrix
      ? 'دليل محلي | ساعدني'
      : isAdmin
        ? 'إدارة المحتوى | ساعدني'
        : 'ساعدني | Saedni',
    description: isLocalMatrix
      ? 'صفحة محلية معرفية — غير مخصّصة للفهرسة في المرحلة الحالية.'
      : 'مرجع معرفي للمهن والخدمات في المملكة العربية السعودية.',
    image: DEFAULT_IMAGE,
    robots: 'noindex,nofollow',
    type: 'website',
  }
  if (isLocalMatrix || isAdmin) {
    page.robots = 'noindex,nofollow'
  }

  const html = renderShareHtml({
    ...page,
    path: page.path || path,
    image: page.image || DEFAULT_IMAGE,
  })

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  res.statusCode = 200
  res.end(html)
}
