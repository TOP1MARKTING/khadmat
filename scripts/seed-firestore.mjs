/**
 * One-shot seed: sign in with Firebase Auth, then upload all site seed data.
 * Usage:
 *   node scripts/seed-firestore.mjs email@example.com 'password'
 */
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

function loadEnv() {
  try {
    const raw = readFileSync(resolve(root, '.env'), 'utf8')
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^([^#=]+)=(.*)$/)
      if (!m) continue
      const key = m[1].trim()
      const val = m[2].trim()
      if (!process.env[key]) process.env[key] = val
    }
  } catch {
    /* optional */
  }
}

loadEnv()

const email = process.argv[2] || process.env.VITE_FIREBASE_ADMIN_EMAIL
const password = process.argv[3] || process.env.VITE_ADMIN_PASSWORD

if (!email || !password) {
  console.error('Usage: node scripts/seed-firestore.mjs <email> <password>')
  process.exit(1)
}

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

async function batchSet(collectionName, rows) {
  const CHUNK = 400
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK)
    const batch = writeBatch(db)
    for (const row of chunk) {
      batch.set(doc(db, collectionName, row.id), {
        ...row.data,
        syncedAt: serverTimestamp(),
      })
    }
    await batch.commit()
    console.log(`  ${collectionName}: ${Math.min(i + CHUNK, rows.length)}/${rows.length}`)
  }
}

async function main() {
  console.log(`Signing in as ${email}…`)
  await signInWithEmailAndPassword(auth, email, password)
  console.log('Signed in. Loading seed payload…')

  // Built by: npx vite-node scripts/build-seed-payload.ts
  const payloadPath = resolve(root, 'scripts/.seed-payload.json')
  let payload
  try {
    payload = JSON.parse(readFileSync(payloadPath, 'utf8'))
  } catch {
    console.error('Missing scripts/.seed-payload.json — run build-seed-payload first.')
    process.exit(1)
  }

  console.log('Uploading…')
  await batchSet('services', payload.services)
  await batchSet('articles', payload.articles)
  await batchSet('categories', payload.categories)
  await batchSet('cities', payload.cities)
  await batchSet('digitalAssets', payload.assets)
  await batchSet('mediaLibrary', payload.media)
  await setDoc(doc(db, 'settings', 'site'), {
    ...payload.settings,
    syncedAt: serverTimestamp(),
  })
  await setDoc(doc(db, 'meta', 'export'), {
    lastExportAt: serverTimestamp(),
    counts: payload.counts,
    source: 'saedni-cli-seed',
  })

  console.log('Done.', payload.counts)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
