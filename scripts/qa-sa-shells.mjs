/**
 * Local QA for /sa prerender shells + sitemap hold.
 * Run after: npm run build
 */
import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractCities, extractServices } from './lib/seo-catalog.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const servicesSrc = readFileSync(join(root, 'src/data/services.ts'), 'utf8')
const citiesSrc = readFileSync(join(root, 'src/data/cities.ts'), 'utf8')
const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8')

const services = extractServices(servicesSrc, { minBody: 0 })
const cities = extractCities(citiesSrc).filter((c) => c.regionSlug)
const expected = services.length * cities.length

function pick(html, re) {
  return html.match(re)?.[1]?.trim() || null
}

function inspect(relPath) {
  const file = join(dist, relPath)
  assert.ok(existsSync(file), `missing ${relPath}`)
  const html = readFileSync(file, 'utf8')
  return {
    file: `dist/${relPath.replace(/\\/g, '/')}`,
    title: pick(html, /<title>([^<]*)<\/title>/i),
    robots: pick(html, /name=["']robots["']\s+content=["']([^"']*)["']/i),
    canonical: pick(html, /rel=["']canonical["']\s+href=["']([^"']*)["']/i),
    ogUrl: pick(html, /property=["']og:url["']\s+content=["']([^"']*)["']/i),
  }
}

let saFiles = 0
function walk(dir) {
  if (!existsSync(dir)) return
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (name === 'index.html') saFiles += 1
  }
}
walk(join(dist, 'sa'))

assert.equal(saFiles, expected, `expected ${expected} /sa shells, found ${saFiles}`)
assert.ok(!sitemap.includes('/sa/'), 'sitemap must not list /sa paths')
assert.equal((sitemap.match(/<loc>/g) || []).length, 54, 'sitemap stays at 54 urls')

const samples = [
  'sa/riyadh/riyadh/plumbing/index.html',
  'sa/makkah/jeddah/plumbing/index.html',
  'sa/eastern/dammam/electrical/index.html',
]

const rows = samples.map((rel) => {
  const meta = inspect(rel)
  assert.equal(meta.robots, 'noindex,nofollow', `${rel} robots`)
  assert.equal(meta.canonical, null, `${rel} must not have canonical`)
  assert.equal(meta.ogUrl, null, `${rel} must not have og:url`)
  assert.ok(meta.title?.includes('دليل'), `${rel} title`)
  return meta
})

const core = [
  'services/plumbing/index.html',
  'services/office-cleaning/index.html',
  'index.html',
]
for (const rel of core) {
  assert.ok(existsSync(join(dist, rel)), `core shell missing: ${rel}`)
}

console.log(
  JSON.stringify(
    {
      ok: true,
      saShells: saFiles,
      services: services.length,
      cities: cities.length,
      sitemapUrls: 54,
      samples: rows,
    },
    null,
    2,
  ),
)
