/**
 * Compare prerendered /sa shells vs current UI-linked /sa paths.
 */
import { readFileSync, existsSync, readdirSync, statSync, rmSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractCities, extractServices } from './lib/seo-catalog.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = readFileSync(join(root, 'src/data/services.ts'), 'utf8')
const citiesSrc = readFileSync(join(root, 'src/data/cities.ts'), 'utf8')
const cities = extractCities(citiesSrc).filter((c) => c.regionSlug)
const allServices = extractServices(src, { minBody: 0 })

const blocks = src.split(/\n\s*\{\n\s*slug:\s*'/)
const detailed = []
for (let i = 1; i < blocks.length; i++) {
  const b = blocks[i]
  if (!b.includes('categorySlug:')) continue
  const slug = b.match(/^([^']+)'/)?.[1]
  const categorySlug = b.match(/categorySlug:\s*'([^']+)'/)?.[1]
  const popular = /popular:\s*true/.test(b)
  const nameAr = b.match(/nameAr:\s*'([^']+)'/)?.[1]
  if (slug && categorySlug) detailed.push({ slug, categorySlug, popular, nameAr })
}

const categories = []
for (const m of src.matchAll(
  /slug:\s*'(construction-finishing|home-maintenance|cleaning|moving-logistics|other-services)'/g,
)) {
  if (!categories.includes(m[1])) categories.push(m[1])
}

/** CityPage: category first-3 + popular */
const cityPagePaths = new Set()
for (const city of cities) {
  for (const cat of categories) {
    for (const s of detailed.filter((x) => x.categorySlug === cat).slice(0, 3)) {
      cityPagePaths.add(`/sa/${city.regionSlug}/${city.slug}/${s.slug}`)
    }
  }
  for (const s of detailed.filter((x) => x.popular)) {
    cityPagePaths.add(`/sa/${city.regionSlug}/${city.slug}/${s.slug}`)
  }
}

/**
 * Accurate ServiceLocationPage expansion:
 * - related services same city (getRelatedServices limit 3)
 * - same service, other cities in same region (slice 0,4)
 */
const reachable = new Set(cityPagePaths)
let changed = true
while (changed) {
  changed = false
  for (const path of [...reachable]) {
    const [, , region, citySlug, serviceSlug] = path.split('/')
    const svc = detailed.find((s) => s.slug === serviceSlug)
    if (!svc) continue
    const related = detailed
      .filter((s) => s.categorySlug === svc.categorySlug && s.slug !== svc.slug)
      .slice(0, 3)
    for (const r of related) {
      const p = `/sa/${region}/${citySlug}/${r.slug}`
      if (!reachable.has(p)) {
        reachable.add(p)
        changed = true
      }
    }
    const sameRegion = cities
      .filter((c) => c.regionSlug === region && c.slug !== citySlug)
      .slice(0, 4)
    for (const c of sameRegion) {
      const p = `/sa/${c.regionSlug}/${c.slug}/${serviceSlug}`
      if (!reachable.has(p)) {
        reachable.add(p)
        changed = true
      }
    }
  }
}

const generated = new Set()
function walk(dir, base = '') {
  if (!existsSync(dir)) return
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, `${base}/${name}`)
    else if (name === 'index.html') generated.add(`/sa${base}`)
  }
}
walk(join(root, 'dist', 'sa'))

const fullMatrix = new Set()
for (const city of cities) {
  for (const s of allServices) {
    fullMatrix.add(`/sa/${city.regionSlug}/${city.slug}/${s.slug}`)
  }
}

const deltaVsCityPage = [...generated].filter((p) => !cityPagePaths.has(p)).sort()
const deltaVsReachable = [...generated].filter((p) => !reachable.has(p)).sort()
const officeAll = [...fullMatrix].filter((p) => p.endsWith('/office-relocation')).sort()
const officeOnCityPage = officeAll.filter((p) => cityPagePaths.has(p))
const officeReachable = officeAll.filter((p) => reachable.has(p))
const officeUnlinked = officeAll.filter((p) => !reachable.has(p))

console.log(
  JSON.stringify(
    {
      math: {
        previousReview: 624,
        cityPageLinksNow: cityPagePaths.size,
        accurateUiReachable: reachable.size,
        generatedNow: generated.size,
        fullMatrix27x24: fullMatrix.size,
      },
      delta24: {
        explanation: '648−624=24 = مهنة واحدة × 24 مدينة',
        serviceSlug: 'office-relocation',
        serviceNameAr: 'نقل المكاتب',
        whyMissingFromCityPage:
          'في فئة moving-logistics تظهر أول 3 فقط: furniture-moving, packing, furniture-assembly. نقل المكاتب رابع وغير popular، فلا يظهر في CityPage.',
        officeRelocation: {
          totalInMatrix: officeAll.length,
          linkedOnCityPage: officeOnCityPage.length,
          reachableViaRelatedOrRegionLinks: officeReachable.length,
          noUiInboundLink: officeUnlinked.length,
          sampleUnlinked: officeUnlinked.slice(0, 8),
          sampleReachable: officeReachable.slice(0, 8),
        },
      },
      generationSource:
        'prerender-meta ضرب كل servicesForRoutes (27) × كل المدن (24)، وليس قائمة روابط CityPage (624).',
      jsPageWorks:
        'أي /sa/.../office-relocation يفتح بعد JS إذا المدينة والمهنة موجودتين في البيانات — حتى بلا رابط واجهة.',
      generatedNotReachableCount: deltaVsReachable.length,
    },
    null,
    2,
  ),
)
