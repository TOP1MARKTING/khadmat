/**
 * Isolated emulator lifecycle: draft → preview fields → publish → unpublish → restore.
 * No production writes.
 */
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from '@firebase/rules-unit-testing'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const rules = readFileSync(resolve(root, 'firestore.rules'), 'utf8')
const ADMIN = 'top1@admin.com'
const OTHER = 'user@example.com'

let pass = 0
let fail = 0
const ok = (l) => {
  pass++
  console.log('  PASS', l)
}
const bad = (l, e) => {
  fail++
  console.error('  FAIL', l, e?.message || e || '')
}

async function main() {
  const env = await initializeTestEnvironment({
    projectId: 'saedni-lifecycle-test',
    firestore: { rules, host: '127.0.0.1', port: 8080 },
  })

  const admin = env.authenticatedContext('admin', { email: ADMIN }).firestore()
  const visitor = env.unauthenticatedContext().firestore()
  const nonAdmin = env.authenticatedContext('u2', { email: OTHER }).firestore()

  const id = 'art_lifecycle_test'
  const refAdmin = doc(admin, 'articles', id)
  const refVisitor = doc(visitor, 'articles', id)
  const refOther = doc(nonAdmin, 'articles', id)
  const revRef = doc(admin, 'revisions', `articles_${id}_1`)

  console.log('\n== CMS lifecycle (emulator) ==')

  // Draft create (admin)
  try {
    await assertSucceeds(
      setDoc(refAdmin, {
        id,
        slug: 'lifecycle-test',
        status: 'draft',
        titleAr: 'مسودة اختبار',
        excerptAr: 'خاص',
      }),
    )
    ok('admin create draft')
  } catch (e) {
    bad('admin create draft', e)
  }

  // Visitor cannot read draft
  try {
    await assertFails(getDoc(refVisitor))
    ok('visitor blocked from draft')
  } catch (e) {
    bad('visitor blocked from draft', e)
  }

  // Non-admin cannot read/write draft
  try {
    await assertFails(getDoc(refOther))
    ok('non-admin blocked from draft read')
  } catch (e) {
    bad('non-admin blocked from draft read', e)
  }
  try {
    await assertFails(setDoc(refOther, { status: 'published', titleAr: 'x' }))
    ok('non-admin blocked from write')
  } catch (e) {
    bad('non-admin blocked from write', e)
  }

  // Save revision snapshot then publish
  try {
    await assertSucceeds(
      setDoc(revRef, {
        id: `articles_${id}_1`,
        kind: 'articles',
        docId: id,
        snapshot: { id, status: 'draft', titleAr: 'مسودة اختبار' },
      }),
    )
    ok('admin save revision')
  } catch (e) {
    bad('admin save revision', e)
  }

  try {
    await assertSucceeds(
      setDoc(refAdmin, {
        id,
        slug: 'lifecycle-test',
        status: 'published',
        titleAr: 'منشور اختبار',
        excerptAr: 'عام',
      }),
    )
    ok('admin publish')
  } catch (e) {
    bad('admin publish', e)
  }

  try {
    const snap = await assertSucceeds(getDoc(refVisitor))
    if (snap.data()?.status === 'published') ok('visitor reads published')
    else bad('visitor reads published', 'unexpected data')
  } catch (e) {
    bad('visitor reads published', e)
  }

  // Unpublish
  try {
    await assertSucceeds(
      setDoc(refAdmin, {
        id,
        slug: 'lifecycle-test',
        status: 'draft',
        titleAr: 'منشور اختبار',
      }),
    )
    ok('admin unpublish → draft')
  } catch (e) {
    bad('admin unpublish → draft', e)
  }
  try {
    await assertFails(getDoc(refVisitor))
    ok('visitor blocked after unpublish')
  } catch (e) {
    bad('visitor blocked after unpublish', e)
  }

  // Restore previous revision content (admin write)
  try {
    await assertSucceeds(
      setDoc(refAdmin, {
        id,
        slug: 'lifecycle-test',
        status: 'draft',
        titleAr: 'مسودة اختبار',
      }),
    )
    ok('admin restore prior draft title')
  } catch (e) {
    bad('admin restore prior draft title', e)
  }

  // Missing status never public
  const legacy = doc(admin, 'articles', 'art_no_status')
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'articles', 'art_no_status'), {
      id: 'art_no_status',
      titleAr: 'قديم',
    })
  })
  try {
    await assertFails(getDoc(doc(visitor, 'articles', 'art_no_status')))
    ok('visitor blocked from missing-status')
  } catch (e) {
    bad('visitor blocked from missing-status', e)
  }
  try {
    await assertSucceeds(getDoc(doc(admin, 'articles', 'art_no_status')))
    ok('admin can read missing-status')
  } catch (e) {
    bad('admin can read missing-status', e)
  }

  await env.cleanup()
  console.log(`\nLifecycle result: ${pass} passed, ${fail} failed`)
  if (fail) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
