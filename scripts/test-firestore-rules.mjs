/**
 * Local Firestore rules tests via emulator (no production deploy).
 * Roles: visitor, signed-in non-admin, admin.
 * Cases: published / draft / missing-status — read & write.
 */
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from '@firebase/rules-unit-testing'
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const rules = readFileSync(resolve(root, 'firestore.rules'), 'utf8')

const PROJECT_ID = 'saedni-rules-test'
const ADMIN_EMAIL = 'top1@admin.com'
const NON_ADMIN_EMAIL = 'user@example.com'

let passed = 0
let failed = 0

function ok(label) {
  passed++
  console.log(`  PASS  ${label}`)
}
function bad(label, err) {
  failed++
  console.error(`  FAIL  ${label}`)
  if (err) console.error(`        ${err.message || err}`)
}

async function checkSucceeds(label, promise) {
  try {
    await assertSucceeds(promise)
    ok(label)
  } catch (e) {
    bad(label, e)
  }
}

async function checkFails(label, promise) {
  try {
    await assertFails(promise)
    ok(label)
  } catch (e) {
    bad(label, e)
  }
}

async function seedAsAdmin(testEnv) {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore()
    await setDoc(doc(db, 'services', 'svc_published'), {
      id: 'svc_published',
      slug: 'published-trade',
      status: 'published',
      nameAr: 'منشورة',
    })
    await setDoc(doc(db, 'services', 'svc_draft'), {
      id: 'svc_draft',
      slug: 'draft-trade',
      status: 'draft',
      nameAr: 'مسودة',
    })
    await setDoc(doc(db, 'services', 'svc_nostatus'), {
      id: 'svc_nostatus',
      slug: 'legacy-trade',
      nameAr: 'بدون حالة',
    })
    await setDoc(doc(db, 'articles', 'art_published'), {
      id: 'art_published',
      slug: 'pub-article',
      status: 'published',
      titleAr: 'مقال منشور',
    })
    await setDoc(doc(db, 'articles', 'art_draft'), {
      id: 'art_draft',
      slug: 'draft-article',
      status: 'draft',
      titleAr: 'مسودة مقال',
    })
    await setDoc(doc(db, 'backups', 'bak_1'), {
      id: 'bak_1',
      label: 'secret-backup',
    })
    await setDoc(doc(db, 'settings', 'site'), {
      siteNameAr: 'ساعدني',
      whatsapp: '+966',
    })
    await setDoc(doc(db, 'mediaLibrary', 'img1'), {
      id: 'img1',
      src: '/images/cities/riyadh.jpg',
      labelAr: 'الرياض',
    })
  })
}

function clientAllowlist(email, list) {
  if (!email) return false
  if (!list.length) return false
  return list.map((e) => e.toLowerCase()).includes(email.trim().toLowerCase())
}

async function main() {
  const testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: { rules, host: '127.0.0.1', port: 8080 },
  })

  await seedAsAdmin(testEnv)

  const visitor = testEnv.unauthenticatedContext().firestore()
  const nonAdmin = testEnv
    .authenticatedContext('uid-user', { email: NON_ADMIN_EMAIL })
    .firestore()
  const admin = testEnv
    .authenticatedContext('uid-admin', { email: ADMIN_EMAIL })
    .firestore()

  console.log('\n== Visitor (no auth) ==')
  await checkSucceeds(
    'read published service',
    getDoc(doc(visitor, 'services', 'svc_published')),
  )
  await checkFails('read draft service', getDoc(doc(visitor, 'services', 'svc_draft')))
  await checkFails(
    'read missing-status service',
    getDoc(doc(visitor, 'services', 'svc_nostatus')),
  )
  await checkSucceeds(
    'query published services only',
    getDocs(
      query(collection(visitor, 'services'), where('status', '==', 'published')),
    ),
  )
  await checkFails(
    'list all services (includes drafts)',
    getDocs(collection(visitor, 'services')),
  )
  await checkFails(
    'write service',
    setDoc(doc(visitor, 'services', 'svc_hack'), { status: 'published' }),
  )
  await checkFails('read backup', getDoc(doc(visitor, 'backups', 'bak_1')))
  await checkSucceeds(
    'read public settings',
    getDoc(doc(visitor, 'settings', 'site')),
  )
  await checkFails(
    'read mediaLibrary (admin-only)',
    getDoc(doc(visitor, 'mediaLibrary', 'img1')),
  )
  await checkSucceeds(
    'read published article',
    getDoc(doc(visitor, 'articles', 'art_published')),
  )
  await checkFails(
    'read draft article',
    getDoc(doc(visitor, 'articles', 'art_draft')),
  )

  console.log('\n== Signed-in non-admin ==')
  await checkSucceeds(
    'read published service',
    getDoc(doc(nonAdmin, 'services', 'svc_published')),
  )
  await checkFails(
    'read draft service',
    getDoc(doc(nonAdmin, 'services', 'svc_draft')),
  )
  await checkFails(
    'read missing-status service',
    getDoc(doc(nonAdmin, 'services', 'svc_nostatus')),
  )
  await checkFails(
    'write/update service',
    setDoc(doc(nonAdmin, 'services', 'svc_published'), {
      status: 'published',
      nameAr: 'hijack',
    }),
  )
  await checkFails(
    'create draft',
    setDoc(doc(nonAdmin, 'services', 'svc_new'), { status: 'draft' }),
  )
  await checkFails('read backup', getDoc(doc(nonAdmin, 'backups', 'bak_1')))
  await checkFails(
    'write settings',
    setDoc(doc(nonAdmin, 'settings', 'site'), { siteNameAr: 'x' }),
  )

  console.log('\n== Admin ==')
  await checkSucceeds(
    'read draft service',
    getDoc(doc(admin, 'services', 'svc_draft')),
  )
  await checkSucceeds(
    'read missing-status service',
    getDoc(doc(admin, 'services', 'svc_nostatus')),
  )
  await checkSucceeds('list all services', getDocs(collection(admin, 'services')))
  await checkSucceeds(
    'write service',
    setDoc(doc(admin, 'services', 'svc_draft'), {
      id: 'svc_draft',
      status: 'draft',
      nameAr: 'مسودة محدّثة',
    }),
  )
  await checkSucceeds('read backup', getDoc(doc(admin, 'backups', 'bak_1')))
  await checkSucceeds(
    'write mediaLibrary',
    setDoc(doc(admin, 'mediaLibrary', 'img1'), {
      id: 'img1',
      src: '/images/cities/riyadh.jpg',
    }),
  )
  await checkSucceeds(
    'set legacy doc status after review',
    setDoc(doc(admin, 'services', 'svc_nostatus'), {
      id: 'svc_nostatus',
      slug: 'legacy-trade',
      nameAr: 'بدون حالة',
      status: 'published',
    }),
  )

  console.log('\n== Client allowlist ==')
  const builtin = [ADMIN_EMAIL]
  if (clientAllowlist(ADMIN_EMAIL, builtin)) ok('builtin admin allowed')
  else bad('builtin admin allowed')
  if (!clientAllowlist(NON_ADMIN_EMAIL, builtin)) ok('non-admin denied')
  else bad('non-admin denied')
  if (!clientAllowlist('anyone@x.com', [])) ok('empty list denies all')
  else bad('empty list denies all')

  await testEnv.cleanup()

  console.log(`\nResult: ${passed} passed, ${failed} failed`)
  console.log('Collections under test match app code: services, articles (not professions).')
  if (failed) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
