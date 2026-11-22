import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from 'firebase/firestore'
import { getDb, isFirebaseConfigured } from '@/lib/firebase'
import { getFirebaseAuth } from '@/lib/firebase'
import { normalizeForFirestore } from '@/lib/cms'

export type RevisionKind = 'services' | 'articles'

export type ContentRevision = {
  id: string
  kind: RevisionKind
  docId: string
  snapshot: Record<string, unknown>
  createdAt?: string
  byEmail?: string
}

function revisionId(kind: RevisionKind, docId: string) {
  return `${kind}_${docId}_${Date.now()}`
}

/** Save a previous version before overwrite (admin auth required). */
export async function saveRevision(
  kind: RevisionKind,
  docId: string,
  snapshot: Record<string, unknown>,
) {
  if (!isFirebaseConfigured() || !docId) return
  const auth = getFirebaseAuth()
  if (!auth.currentUser) return
  const id = revisionId(kind, docId)
  const clean = normalizeForFirestore(snapshot) as Record<string, unknown>
  await setDoc(doc(getDb(), 'revisions', id), {
    id,
    kind,
    docId,
    snapshot: clean,
    byEmail: auth.currentUser.email || '',
    createdAt: new Date().toISOString(),
    syncedAt: serverTimestamp(),
  })
}

export async function listRevisions(
  kind: RevisionKind,
  docId: string,
  max = 20,
): Promise<ContentRevision[]> {
  if (!isFirebaseConfigured()) return []
  try {
    const q = query(
      collection(getDb(), 'revisions'),
      where('kind', '==', kind),
      where('docId', '==', docId),
      orderBy('createdAt', 'desc'),
      limit(max),
    )
    const snap = await getDocs(q)
    return snap.docs.map((d) => d.data() as ContentRevision)
  } catch {
    // Fallback without composite index: filter client-side
    const snap = await getDocs(collection(getDb(), 'revisions'))
    return snap.docs
      .map((d) => d.data() as ContentRevision)
      .filter((r) => r.kind === kind && r.docId === docId)
      .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
      .slice(0, max)
  }
}
