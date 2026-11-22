/**
 * Build-time sitemap for Phase 1 knowledge pages only.
 * Excludes: commercial paths, /sa/* matrices, admin, drafts.
 * Omits lastmod — no fabricated dates.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const SITE = 'https://www.saedniksa.com'

function extractServiceSlugsWithBody(src) {
  const slugs = []
  const blocks = src.split(/\n\s*\{\s*\n\s*slug:\s*'/)
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i]
    const slugMatch = block.match(/^([^']+)'/)
    if (!slugMatch) continue
    const slug = slugMatch[1]
    // Skip category objects (they have descriptionAr but no bodyAr)
    if (!block.includes('categorySlug:')) continue
    const bodyMatch = block.match(/bodyAr:\s*`([\s\S]*?)`/)
    const body = bodyMatch?.[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() || ''
    if (body.length >= 120) slugs.push(slug)
  }
  return slugs
}

function extractCitySlugs(src) {
  const cities = []
  const parts = src.split(/\n\s*\{\s*\n/)
  for (const part of parts) {
    const slug = part.match(/^\s*slug:\s*'([^']+)'/)?.[1]
    const nameAr = part.match(/nameAr:\s*'([^']+)'/)?.[1]
    const descMatch =
      part.match(/descriptionAr:\s*\n?\s*'((?:\\'|[^'])*)'/) ||
      part.match(/descriptionAr:\s*\n?\s*"((?:\\"|[^"])*)"/)
    const desc = descMatch?.[1]?.replace(/\\'/g, "'").trim() || ''
    if (slug && nameAr && desc.length > 20) cities.push(slug)
  }
  return [...new Set(cities)]
}

function extractPublishedArticleSlugs(src) {
  if (/export const blogArticles:\s*BlogArticle\[\]\s*=\s*\[\s*\]/.test(src)) {
    return []
  }
  const arrayMatch = src.match(
    /export const blogArticles:\s*BlogArticle\[\]\s*=\s*\[([\s\S]*?)\]\s*\n/,
  )
  if (!arrayMatch) return []
  const body = arrayMatch[1]
  const slugs = []
  const re = /slug:\s*'([^']+)'/g
  let m
  while ((m = re.exec(body))) slugs.push(m[1])
  return [...new Set(slugs)]
}

const serviceSlugs = extractServiceSlugsWithBody(
  readFileSync(resolve(root, 'src/data/services.ts'), 'utf8'),
)
const citySlugs = extractCitySlugs(
  readFileSync(resolve(root, 'src/data/cities.ts'), 'utf8'),
)
const articleSlugs = extractPublishedArticleSlugs(
  readFileSync(resolve(root, 'src/data/blog.ts'), 'utf8'),
)

const staticPaths = ['/', '/services', '/locations', '/about', '/contact', '/blog']

const urls = [
  ...staticPaths,
  ...serviceSlugs.map((s) => `/services/${s}`),
  ...citySlugs.map((c) => `/locations/${c}`),
  ...articleSlugs.map((a) => `/blog/${a}`),
]

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const body = urls
  .map(
    (path) => `  <url>
    <loc>${escapeXml(SITE + (path === '/' ? '/' : path))}</loc>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8')
console.log(
  `sitemap.xml → ${urls.length} urls (${serviceSlugs.length} services, ${citySlugs.length} cities, ${articleSlugs.length} articles)`,
)
