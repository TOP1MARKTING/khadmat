import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string | undefined,
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
    throw new Error('Firebase is not configured. Set VITE_FIREBASE_* in .env')
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
