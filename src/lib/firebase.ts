import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

/** Cloud client config. Env vars override when present. */
const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    'AIzaSyBd2ShshTStDV73zRg1ou88-cJEg9mWy-A',
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    'khadmat-5c5be.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'khadmat-5c5be',
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    'khadmat-5c5be.firebasestorage.app',
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '550294781884',
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    '1:550294781884:web:24661e6d9d5fb57c66f5b9',
  measurementId:
    import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-QGJ8E14T81',
}

export function isFirebaseConfigured() {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.projectId &&
      firebaseConfig.appId &&
      firebaseConfig.authDomain,
  )
}

let app: FirebaseApp | undefined
let db: Firestore | undefined
let auth: Auth | undefined
let analytics: Analytics | undefined

export function getFirebaseApp() {
  if (!isFirebaseConfigured()) {
    throw new Error('Cloud sync is not configured')
  }
  if (!app) {
    app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig)
  }
  return app
}

export function getDb() {
  if (!db) db = getFirestore(getFirebaseApp())
  return db
}

export function getFirebaseAuth() {
  if (!auth) auth = getAuth(getFirebaseApp())
  return auth
}

/** Analytics is browser-only; safe no-op if unsupported. */
export async function initFirebaseAnalytics() {
  if (!isFirebaseConfigured() || typeof window === 'undefined') return null
  try {
    const ok = await isSupported()
    if (!ok) return null
    if (!analytics) analytics = getAnalytics(getFirebaseApp())
    return analytics
  } catch {
    return null
  }
}
