/**
 * After Vite build: write per-route HTML shells with correct meta into dist/
 * so the first response is not stuck on homepage title/canonical.
 *
 * Also emits /sa/{region}/{city}/{service} noindex shells for every real
 * city×service matrix link on the site — never added to sitemap.xml.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  absoluteImage,
  absoluteUrl,
  extractCities,
  extractServices,
  renderShareHtml,
} from './lib/seo-catalog.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const catalogPath = join(root, 'public', 'seo-catalog.json')

if (!existsSync(dist) || !existsSync(catalogPath)) {
  console.error('prerender-meta: missing dist/ or public/seo-catalog.json')
  process.exit(1)
}

const catalog = JSON.parse(readFileSync(catalogPath, 'utf8'))
const indexHtml = readFileSync(join(dist, 'index.html'), 'utf8')
const servicesSrc = readFileSync(join(root, 'src/data/services.ts'), 'utf8')
const citiesSrc = readFileSync(join(root, 'src/data/cities.ts'), 'utf8')

/** Same matrix the app links: every routed service × every city with region. */
const matrixServices = extractServices(servicesSrc, { minBody: 0 })
const matrixCities = extractCities(citiesSrc).filter((c) => c.regionSlug)

function injectMeta(shellHtml, page) {
  const share = renderShareHtml(page)
  const headMatch = share.match(/<head>([\s\S]*?)<\/head>/i)
  const metaBlock = headMatch?.[1] || ''
  let html = shellHtml
  html = html.replace(/<title>[\s\S]*?<\/title>/i, '')
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, '')
  html = html.replace(/<meta\s+name="robots"[^>]*>/gi, '')
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '')
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, '')
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, '')
  html = html.replace(/<head[^>]*>/i, (m) => `${m}\n${metaBlock}`)
  html = html.replace(
    /<div id="root"><\/div>/i,
    `<div id="root"><main><h1>${page.title}</h1><p>${page.description}</p></main></div>`,
  )
  return html
}

function writeShell(page) {
  const outPath =
    page.path === '/'
      ? join(dist, 'index.html')
      : join(dist, page.path.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  const html = injectMeta(indexHtml, {
    ...page,
    image: absoluteImage(page.image),
  })
  writeFileSync(outPath, html, 'utf8')
}

let catalogCount = 0
for (const page of Object.values(catalog)) {
  if (!page?.path) continue
  writeShell(page)
  catalogCount += 1
}

let localCount = 0
for (const city of matrixCities) {
  for (const service of matrixServices) {
    const path = `/sa/${city.regionSlug}/${city.slug}/${service.slug}`
    writeShell({
      path,
      title: `دليل ${service.nameAr} في ${city.nameAr} | ساعدني`,
      description: `دليل ${service.nameAr} في ${city.nameAr}. تعرّف على نطاق المهنة والسياق المحلي قبل التنفيذ.`,
      image: absoluteImage(service.image),
      robots: 'noindex,nofollow',
      type: 'website',
    })
    localCount += 1
  }
}

console.log(
  `prerender-meta → ${catalogCount} catalog shells + ${localCount} /sa noindex shells (example ${absoluteUrl('/services')}; local e.g. /sa/riyadh/riyadh/plumbing)`,
)
