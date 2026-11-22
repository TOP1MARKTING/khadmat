/**
 * Local-only acceptance checks for CMS seed merge (no Firebase publish).
 * Run: node scripts/acceptance-data-merge.mjs
 */
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const servicesSrc = readFileSync(resolve(root, 'src/data/services.ts'), 'utf8')

function extractGallery(slug) {
  const re = new RegExp(`slug: '${slug}'[\\s\\S]*?gallery: \\[([\\s\\S]*?)\\],`)
  const m = servicesSrc.match(re)
  if (!m) return []
  return [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1])
}

function bodyLen(slug) {
  const re = new RegExp(`slug: '${slug}'[\\s\\S]*?bodyAr: \`([\\s\\S]*?)\``)
  const m = servicesSrc.match(re)
  const text = (m?.[1] || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return text.length
}

const five = [
  'office-cleaning',
  'upholstery-cleaning',
  'furniture-assembly',
  'office-relocation',
  'facility-management',
]

for (const slug of five) {
  assert.ok(bodyLen(slug) >= 400, `${slug} body too short (${bodyLen(slug)})`)
}

assert.equal(
  extractGallery('general-contracting').join('|'),
  [
    '/images/services/general-contracting-01-planning.jpg',
    '/images/services/general-contracting-02-coordination.jpg',
    '/images/services/general-contracting-03-handover.jpg',
  ].join('|'),
  'contracting gallery order in seed',
)

/** Mirror of src/lib/cms.ts mergeServiceFloor intent (local fixtures only). */
function uniquePaths(paths) {
  const out = []
  for (const p of paths || []) if (p && !out.includes(p)) out.push(p)
  return out
}

function mergeFloor(seed, incoming) {
  if (incoming.status === 'draft') return seed
  const cmsGallery = uniquePaths(incoming.gallery)
  const seedGallery = uniquePaths(seed.gallery)
  const cmsBodyAr = incoming.bodyAr?.trim() || ''
  const hasCmsSubstance = Boolean(
    cmsBodyAr ||
      (incoming.bodyEn || '').trim() ||
      cmsGallery.length ||
      (incoming.image || '').trim(),
  )
  let gallery
  if (cmsGallery.length > 0) gallery = cmsGallery
  else if (hasCmsSubstance) gallery = []
  else gallery = seedGallery
  return {
    ...seed,
    ...incoming,
    status: 'published',
    bodyAr: cmsBodyAr ? incoming.bodyAr : seed.bodyAr,
    gallery,
    image: (incoming.image || '').trim()
      ? incoming.image
      : hasCmsSubstance
        ? incoming.image || ''
        : seed.image,
  }
}

const seedContracting = {
  slug: 'general-contracting',
  status: 'published',
  bodyAr: 'SEED_BODY_LONG_CONTRACTING',
  image: '/images/services/general-contracting-01-planning.jpg',
  gallery: extractGallery('general-contracting'),
}

const emptyCache = mergeFloor(seedContracting, {
  slug: 'general-contracting',
  status: 'published',
  bodyAr: '',
  image: '',
  gallery: [],
})
assert.equal(emptyCache.bodyAr, 'SEED_BODY_LONG_CONTRACTING', 'empty CMS must not wipe seed body')
assert.deepEqual(emptyCache.gallery, seedContracting.gallery, 'thin empty record gets seed gallery')

const draftOnly = mergeFloor(seedContracting, {
  slug: 'general-contracting',
  status: 'draft',
  bodyAr: 'DRAFT',
  gallery: ['/old.jpg'],
})
assert.equal(draftOnly.bodyAr, 'SEED_BODY_LONG_CONTRACTING', 'draft must not replace public seed')

const adminShorterGallery = mergeFloor(seedContracting, {
  slug: 'general-contracting',
  status: 'published',
  bodyAr: 'CMS published note after removing two photos',
  image: '/images/services/general-contracting-01-planning.jpg',
  gallery: ['/images/services/general-contracting-01-planning.jpg'],
})
assert.equal(adminShorterGallery.bodyAr, 'CMS published note after removing two photos')
assert.deepEqual(
  adminShorterGallery.gallery,
  ['/images/services/general-contracting-01-planning.jpg'],
  'approved admin gallery must not be expanded back to seed photos',
)

const deletedGallery = mergeFloor(seedContracting, {
  slug: 'general-contracting',
  status: 'published',
  bodyAr: 'Published without gallery photos',
  image: '/images/services/general-contracting-01-planning.jpg',
  gallery: [],
})
assert.deepEqual(deletedGallery.gallery, [], 'intentionally cleared gallery must stay empty')

const intentionallyShort = mergeFloor(
  { slug: 'office-cleaning', status: 'published', bodyAr: 'SEED_LONG', gallery: ['/a.jpg'] },
  {
    slug: 'office-cleaning',
    status: 'published',
    bodyAr: 'short published',
    gallery: ['/b.jpg'],
    image: '/b.jpg',
  },
)
assert.equal(
  intentionallyShort.bodyAr,
  'short published',
  'intentional published short body must not be restored from seed',
)

/**
 * Conflict note (asserted as documentation, not a behavior change):
 * ensurePublicServices always seeds all 27 trades as the public floor.
 * A CMS draft cannot hide a seed trade without breaking the 27-trade floor.
 */
assert.equal(
  (servicesSrc.match(/slug: '/g) || []).length >= 27,
  true,
  'seed still defines the 27-trade floor',
)

console.log('acceptance-data-merge: ok')
