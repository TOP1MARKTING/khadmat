import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore'
import { getDb, isFirebaseConfigured } from '@/lib/firebase'
import {
  loadCmsArticles,
  loadCmsServices,
  normalizeForFirestore,
  type CmsArticle,
  type CmsService,
} from '@/lib/cms'
import { categories } from '@/data/services'
import { cities } from '@/data/cities'
import { digitalAssets } from '@/data/assets'
import { mediaLibrary } from '@/data/mediaLibrary'
import {
  DEFAULT_SITE_SETTINGS,
  loadSiteSettings,
  type SiteSettings,
} from '@/lib/siteSettings'

export const COL = {
  services: 'services',
  articles: 'articles',
  categories: 'categories',
  cities: 'cities',
  assets: 'digitalAssets',
  media: 'mediaLibrary',
  settings: 'settings',
  meta: 'meta',
} as const

const SETTINGS_DOC = 'site'
const META_DOC = 'export'

function stripUndefined<T extends Record<string, unknown>>(obj: T): T {
  const out = { ...obj }
  for (const key of Object.keys(out)) {
    if (out[key] === undefined) delete out[key]
  }
  return out
}

export async function fetchServicesFromFirestore(): Promise<CmsService[]> {
  if (!isFirebaseConfigured()) return []
  const snap = await getDocs(collection(getDb(), COL.services))
  return snap.docs.map((d) => {
    const data = d.data() as CmsService
    return { ...data, id: data.id || d.id }
  })
}

export async function fetchArticlesFromFirestore(): Promise<CmsArticle[]> {
  if (!isFirebaseConfigured()) return []
  const snap = await getDocs(collection(getDb(), COL.articles))
  return snap.docs.map((d) => {
    const data = d.data() as CmsArticle
    return { ...data, id: data.id || d.id }
  })
}

export async function fetchSiteSettingsFromFirestore(): Promise<SiteSettings | null> {
  if (!isFirebaseConfigured()) return null
  const snap = await getDoc(doc(getDb(), COL.settings, SETTINGS_DOC))
  if (!snap.exists()) return null
  return snap.data() as SiteSettings
}

export async function saveServiceToFirestore(service: CmsService) {
  const payload = stripUndefined(
    normalizeForFirestore(service) as unknown as Record<string, unknown>,
  )
  await setDoc(doc(getDb(), COL.services, service.id), {
    ...payload,
    syncedAt: serverTimestamp(),
  })
}

export async function deleteServiceFromFirestore(id: string) {
  await deleteDoc(doc(getDb(), COL.services, id))
}

export async function saveArticleToFirestore(article: CmsArticle) {
  const payload = stripUndefined(
    normalizeForFirestore(article) as unknown as Record<string, unknown>,
  )
  await setDoc(doc(getDb(), COL.articles, article.id), {
    ...payload,
    syncedAt: serverTimestamp(),
  })
}

export async function deleteArticleFromFirestore(id: string) {
  await deleteDoc(doc(getDb(), COL.articles, id))
}

export async function saveSiteSettingsToFirestore(settings: SiteSettings) {
  await setDoc(doc(getDb(), COL.settings, SETTINGS_DOC), {
    ...settings,
    syncedAt: serverTimestamp(),
  })
}

async function batchSet(
  collectionName: string,
  rows: Array<{ id: string; data: Record<string, unknown> }>,
) {
  const db = getDb()
  const CHUNK = 400
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK)
    const batch = writeBatch(db)
    for (const row of chunk) {
      batch.set(doc(db, collectionName, row.id), {
        ...stripUndefined(row.data),
        syncedAt: serverTimestamp(),
      })
    }
    await batch.commit()
  }
}

export type ExportResult = {
  services: number
  articles: number
  categories: number
  cities: number
  assets: number
  media: number
  settings: boolean
}

/**
 * Export ALL local seed + localStorage CMS data to Firestore.
 * Never deletes Firestore docs that aren't in the export set.
 * Uses merge/set by id so existing remote data for same ids is updated, not wiped globally.
 */
export async function exportAllDataToFirestore(options?: {
  services?: CmsService[]
  articles?: CmsArticle[]
  settings?: SiteSettings
}): Promise<ExportResult> {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase غير مُعدّ. راجع ملف .env')
  }

  const services = options?.services ?? loadCmsServices()
  const articles = options?.articles ?? loadCmsArticles()
  const settings = options?.settings ?? loadSiteSettings()

  await batchSet(
    COL.services,
    services.map((s) => ({
      id: s.id,
      data: normalizeForFirestore(s) as unknown as Record<string, unknown>,
    })),
  )

  await batchSet(
    COL.articles,
    articles.map((a) => ({
      id: a.id,
      data: normalizeForFirestore(a) as unknown as Record<string, unknown>,
    })),
  )

  await batchSet(
    COL.categories,
    categories.map((c) => ({
      id: c.slug,
      data: { ...c } as unknown as Record<string, unknown>,
    })),
  )

  await batchSet(
    COL.cities,
    cities.map((c) => ({
      id: c.slug,
      data: { ...c, featured: c.featured ?? false } as unknown as Record<
        string,
        unknown
      >,
    })),
  )

  await batchSet(
    COL.assets,
    digitalAssets.map((a) => ({
      id: a.id,
      data: { ...a } as unknown as Record<string, unknown>,
    })),
  )

  await batchSet(
    COL.media,
    mediaLibrary.map((m) => ({
      id: m.id,
      data: { ...m } as unknown as Record<string, unknown>,
    })),
  )

  await saveSiteSettingsToFirestore(settings || DEFAULT_SITE_SETTINGS)

  await setDoc(doc(getDb(), COL.meta, META_DOC), {
    lastExportAt: serverTimestamp(),
    counts: {
      services: services.length,
      articles: articles.length,
      categories: categories.length,
      cities: cities.length,
      assets: digitalAssets.length,
      media: mediaLibrary.length,
    },
    source: 'saedni-web-export',
  })

  return {
    services: services.length,
    articles: articles.length,
    categories: categories.length,
    cities: cities.length,
    assets: digitalAssets.length,
    media: mediaLibrary.length,
    settings: true,
  }
}

/** Prefer Firestore rows; fill missing ids from local so nothing is lost in memory. */
export function mergeByIdPreferRemote<T extends { id: string; updatedAt?: string }>(
  remote: T[],
  local: T[],
): T[] {
  const map = new Map<string, T>()
  for (const item of local) map.set(item.id, item)
  for (const item of remote) {
    const prev = map.get(item.id)
    if (!prev) {
      map.set(item.id, item)
      continue
    }
    const remoteTime = item.updatedAt || ''
    const localTime = prev.updatedAt || ''
    map.set(item.id, remoteTime >= localTime ? item : prev)
  }
  // Also keep remote-only already handled; local-only stay from first loop
  return [...map.values()]
}

export async function firestoreHasServices() {
  if (!isFirebaseConfigured()) return false
  const snap = await getDocs(collection(getDb(), COL.services))
  return !snap.empty
}

/**
 * If Firestore is empty, push local/seed CMS data once.
 * Requires signed-in admin (Firestore write rules).
 */
export async function ensureFirestoreSeeded(options?: {
  services?: CmsService[]
  articles?: CmsArticle[]
  settings?: SiteSettings
}): Promise<ExportResult | null> {
  if (!isFirebaseConfigured()) return null
  const has = await firestoreHasServices()
  if (has) return null
  return exportAllDataToFirestore(options)
}
