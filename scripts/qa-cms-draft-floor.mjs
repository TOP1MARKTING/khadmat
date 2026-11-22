/**
 * One local fixture: draft must not leak; published edit + image delete stick.
 * Distinguishes draft-over-seed from explicit published withdrawal.
 * Does not change the 27-trade public floor.
 */
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const servicesSrc = readFileSync(resolve(root, 'src/data/services.ts'), 'utf8')
const cmsSrc = readFileSync(resolve(root, 'src/lib/cms.ts'), 'utf8')

const seedSlugCount = [...servicesSrc.matchAll(/^\s*slug:\s*'([a-z0-9-]+)'/gm)].length
assert.ok(seedSlugCount >= 27, `seed floor expected ≥27, got ${seedSlugCount}`)

assert.match(
  cmsSrc,
  /list\.filter\(\(s\) => s\.slug && s\.status !== 'draft'\)/,
  'ensurePublicServices must drop drafts before merge',
)
assert.match(cmsSrc, /Never apply drafts|status !== 'draft'/, 'drafts excluded from public path')

function uniquePaths(paths) {
  const out = []
  for (const p of paths || []) if (p && !out.includes(p)) out.push(p)
  return out
}

/** Mirror mergeServiceFloor + ensurePublicServices draft filter (cms.ts). */
function ensurePublic(seedList, cmsList) {
  const published = cmsList.filter((s) => s.slug && s.status !== 'draft')
  const bySlug = new Map(seedList.map((s) => [s.slug, { ...s, status: 'published' }]))
  for (const cms of published) {
    if (!cms.nameAr?.trim()) continue
    const seed = bySlug.get(cms.slug)
    if (!seed) {
      bySlug.set(cms.slug, { ...cms, status: 'published' })
      continue
    }
    const cmsGallery = uniquePaths(cms.gallery)
    const seedGallery = uniquePaths(seed.gallery)
    const cmsBodyAr = cms.bodyAr?.trim() || ''
    const hasCmsSubstance = Boolean(
      cmsBodyAr ||
        (cms.bodyEn || '').trim() ||
        cmsGallery.length ||
        (cms.image || '').trim(),
    )
    let gallery
    if (cmsGallery.length > 0) gallery = cmsGallery
    else if (hasCmsSubstance) gallery = []
    else gallery = seedGallery
    const image = (cms.image || '').trim()
      ? cms.image
      : hasCmsSubstance
        ? cms.image || ''
        : seed.image
    bySlug.set(cms.slug, {
      ...seed,
      ...cms,
      status: 'published',
      bodyAr: cmsBodyAr ? cms.bodyAr : seed.bodyAr,
      gallery,
      image: image || seed.image,
    })
  }
  return [...bySlug.values()]
}

const seedContracting = {
  slug: 'general-contracting',
  nameAr: 'مقاولات عامة',
  status: 'published',
  bodyAr: 'SEED_PUBLIC_BODY',
  image: '/images/services/general-contracting-01-planning.jpg',
  gallery: [
    '/images/services/general-contracting-01-planning.jpg',
    '/images/services/general-contracting-02-coordination.jpg',
    '/images/services/general-contracting-03-handover.jpg',
  ],
}

const seeds = [
  seedContracting,
  ...Array.from({ length: 26 }, (_, i) => ({
    slug: `seed-trade-${i + 1}`,
    nameAr: `بذرة ${i + 1}`,
    status: 'published',
    bodyAr: 'seed',
    image: '/seed.jpg',
    gallery: ['/seed.jpg'],
  })),
]

// A) Draft over approved seed — NOT a withdrawal; public keeps seed text/images
const afterDraft = ensurePublic(seeds, [
  {
    slug: 'general-contracting',
    nameAr: 'مقاولات عامة',
    status: 'draft',
    bodyAr: 'UNPUBLISHED_DRAFT_TEXT_MUST_NOT_LEAK',
    image: '/secret-draft.jpg',
    gallery: ['/secret-draft-gallery.jpg'],
  },
])
const publicContracting = afterDraft.find((s) => s.slug === 'general-contracting')
assert.equal(publicContracting.bodyAr, 'SEED_PUBLIC_BODY', 'draft text must not leak')
assert.equal(
  publicContracting.image,
  '/images/services/general-contracting-01-planning.jpg',
  'draft image must not leak',
)
assert.deepEqual(publicContracting.gallery, seedContracting.gallery, 'draft gallery must not leak')
assert.equal(afterDraft.length, 27, 'draft must not remove a seed trade from the 27 floor')

// B) Published edit + intentional image delete — stick
const afterPublish = ensurePublic(seeds, [
  {
    slug: 'general-contracting',
    nameAr: 'مقاولات عامة',
    status: 'published',
    bodyAr: 'PUBLISHED_SHORT_EDIT',
    image: '/images/services/general-contracting-01-planning.jpg',
    gallery: ['/images/services/general-contracting-01-planning.jpg'],
  },
])
const edited = afterPublish.find((s) => s.slug === 'general-contracting')
assert.equal(edited.bodyAr, 'PUBLISHED_SHORT_EDIT', 'published body edit sticks')
assert.deepEqual(
  edited.gallery,
  ['/images/services/general-contracting-01-planning.jpg'],
  'intentional gallery trim sticks (no silent seed revive)',
)

const afterClearGallery = ensurePublic(seeds, [
  {
    slug: 'general-contracting',
    nameAr: 'مقاولات عامة',
    status: 'published',
    bodyAr: 'PUBLISHED_NO_GALLERY',
    image: '/images/services/general-contracting-01-planning.jpg',
    gallery: [],
  },
])
assert.deepEqual(
  afterClearGallery.find((s) => s.slug === 'general-contracting').gallery,
  [],
  'published empty gallery stays empty',
)

/**
 * Explicit withdrawal case (documented, no policy change):
 * A published CMS row that empties name/body with intent to hide a seed trade
 * still cannot drop it from ensurePublicServices — seeds re-floor all 27.
 * Treating draft as withdrawal would conflict with that floor; drafts are ignored, not withdrawals.
 */
const attemptedHide = ensurePublic(seeds, [
  {
    slug: 'general-contracting',
    nameAr: '',
    status: 'published',
    bodyAr: '',
    image: '',
    gallery: [],
  },
])
assert.ok(
  attemptedHide.some((s) => s.slug === 'general-contracting' && s.bodyAr === 'SEED_PUBLIC_BODY'),
  'empty published overwrite without nameAr is skipped; seed remains (not silent unpublish)',
)

console.log(
  JSON.stringify(
    {
      ok: true,
      seedFloor: 27,
      draftOverSeed: 'no leak of draft text/images; seed stays public; not treated as withdrawal',
      publishedEditAndImageDelete: 'body edit and trimmed/cleared gallery stick',
      explicitWithdrawalConflict:
        'Hiding a seed trade would break the 27 floor. Current code keeps seed visible. No policy change in this run.',
    },
    null,
    2,
  ),
)
