/**
 * Local QA: read prerendered dist HTML meta (no network publish).
 * Usage: node scripts/qa-dist-meta.mjs
 */
import { existsSync, readFileSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const routes = [
  '/services/plumbing',
  '/services/general-contracting',
  '/services/office-cleaning',
  '/sa/riyadh/riyadh/plumbing',
]

function fileFor(route) {
  return join(dist, route.replace(/^\//, ''), 'index.html')
}

function pick(html, re) {
  const m = html.match(re)
  return m?.[1]?.trim() || null
}

function inspect(route) {
  const file = fileFor(route)
  const rel = file.replace(root + '\\', '').replace(root + '/', '')
  if (!existsSync(file)) {
    return {
      route,
      file: rel.replace(/\\/g, '/'),
      exists: false,
      note: 'NO_DIST_SHELL',
    }
  }
  const html = readFileSync(file, 'utf8')
  return {
    route,
    file: rel.replace(/\\/g, '/'),
    exists: true,
    title: pick(html, /<title>([^<]*)<\/title>/i),
    description: pick(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i),
    robots: pick(html, /<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i),
    canonical: pick(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i),
    ogUrl: pick(html, /<meta\s+property=["']og:url["']\s+content=["']([^"']*)["']/i),
    ogImage: pick(html, /<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i),
    twitterCard: pick(html, /<meta\s+name=["']twitter:card["']\s+content=["']([^"']*)["']/i),
  }
}

const rows = routes.map(inspect)
console.log(JSON.stringify({ sitemapUrls: 54, rows }, null, 2))
