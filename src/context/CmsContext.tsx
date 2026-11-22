import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {
  collection,
  onSnapshot,
  query,
  where,
  type QueryDocumentSnapshot,
  type Unsubscribe,
} from 'firebase/firestore'
import {
  emptyArticle,
  emptyService,
  loadCmsArticles,
  loadCmsServices,
  dedupeBySlug,
  saveCmsArticles,
  saveCmsServices,
  type CmsArticle,
  type CmsService,
} from '@/lib/cms'
import { getDb, getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase'
import { isEmailAllowedAdmin } from '@/lib/adminAllowlist'
import {
  COL,
  deleteArticleFromFirestore,
  deleteServiceFromFirestore,
  saveArticleToFirestore,
  saveServiceToFirestore,
} from '@/lib/firestoreData'

export type SaveState = 'idle' | 'saving' | 'saved' | 'error'

type CmsContextValue = {
  services: CmsService[]
  articles: CmsArticle[]
  cmsReady: boolean
  cmsSource: 'local' | 'firebase' | 'hybrid'
  cmsError: string
  saveState: SaveState
  saveError: string
  isAdminSession: boolean
  refreshFromFirebase: () => Promise<void>
  upsertService: (service: CmsService) => Promise<void>
  deleteService: (id: string) => Promise<void>
  getServiceBySlug: (slug: string) => CmsService | undefined
  upsertArticle: (article: CmsArticle) => Promise<void>
  deleteArticle: (id: string) => Promise<void>
  getArticleBySlug: (slug: string) => CmsArticle | undefined
  getArticleById: (id: string) => CmsArticle | undefined
  createBlankService: () => CmsService
  createBlankArticle: () => CmsArticle
  publishedArticles: () => CmsArticle[]
  publishedServices: () => CmsService[]
}

const CmsContext = createContext<CmsContextValue | null>(null)

function mapServices(docs: QueryDocumentSnapshot[]): CmsService[] {
  return docs.map((d) => {
    const data = d.data() as CmsService
    return {
      ...data,
      id: data.id || d.id,
      // Only explicit draft stays draft — missing/legacy status must remain public.
      status: data.status === 'draft' ? 'draft' : 'published',
    }
  })
}

/** Cloud wins per slug; local seeds fill any gaps so a thin Firestore set cannot 404 guides. */
function mergePublicServices(cloud: CmsService[]): CmsService[] {
  const local = publicOnlyServices(loadCmsServices())
  const fromCloud = publicOnlyServices(cloud)
  if (!fromCloud.length) return local
  const bySlug = new Map<string, CmsService>()
  for (const s of local) bySlug.set(s.slug, s)
  for (const s of fromCloud) bySlug.set(s.slug, s)
  return [...bySlug.values()]
}

function mapArticles(docs: QueryDocumentSnapshot[]): CmsArticle[] {
  return docs.map((d) => {
    const data = d.data() as CmsArticle
    return { ...data, id: data.id || d.id }
  })
}

function publicOnlyServices(list: CmsService[]) {
  return dedupeBySlug(list.filter((s) => s.status === 'published' && s.slug))
}

function publicOnlyArticles(list: CmsArticle[]) {
  return dedupeBySlug(list.filter((a) => a.status === 'published' && a.slug))
}

export function CmsProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<CmsService[]>(() =>
    publicOnlyServices(loadCmsServices()),
  )
  const [articles, setArticles] = useState<CmsArticle[]>(() =>
    publicOnlyArticles(loadCmsArticles()),
  )
  const [servicesReady, setServicesReady] = useState(!isFirebaseConfigured())
  const [articlesReady, setArticlesReady] = useState(!isFirebaseConfigured())
  const cmsReady = servicesReady && articlesReady
  const [cmsSource, setCmsSource] = useState<'local' | 'firebase' | 'hybrid'>('local')
  const [cmsError, setCmsError] = useState('')
  const [saveState, setSaveState] = useState<SaveState>('idle')
  const [saveError, setSaveError] = useState('')
  const [isAdminSession, setIsAdminSession] = useState(false)
  const unsubs = useRef<Unsubscribe[]>([])

  const clearListeners = () => {
    for (const u of unsubs.current) u()
    unsubs.current = []
  }

  const attachListeners = useCallback((admin: boolean) => {
    if (!isFirebaseConfigured()) {
      setServicesReady(true)
      setArticlesReady(true)
      setCmsSource('local')
      return
    }
    clearListeners()
    setIsAdminSession(admin)
    setServicesReady(false)
    setArticlesReady(false)
    const db = getDb()

    const servicesRef = admin
      ? collection(db, COL.services)
      : query(collection(db, COL.services), where('status', '==', 'published'))

    const articlesRef = admin
      ? collection(db, COL.articles)
      : query(collection(db, COL.articles), where('status', '==', 'published'))

    unsubs.current.push(
      onSnapshot(
        servicesRef,
        (snap) => {
          const list = mapServices(snap.docs)
          if (!admin) {
            const next = mergePublicServices(list)
            setServices(next)
            saveCmsServices(next)
            setCmsSource(list.length ? (next.length > list.length ? 'hybrid' : 'firebase') : 'local')
          } else if (list.length === 0) {
            // Do not wipe local cache with an empty admin snapshot
            setServices(loadCmsServices())
            setCmsSource('local')
          } else {
            setServices(list)
            saveCmsServices(list)
            setCmsSource('firebase')
          }
          setCmsError('')
          setServicesReady(true)
        },
        (err) => {
          console.error(err)
          setCmsError(err.message)
          setServices(publicOnlyServices(loadCmsServices()))
          setCmsSource('local')
          setServicesReady(true)
        },
      ),
    )

    unsubs.current.push(
      onSnapshot(
        articlesRef,
        (snap) => {
          const list = mapArticles(snap.docs)
          if (list.length === 0 && !admin) {
            setArticles(publicOnlyArticles(loadCmsArticles()))
          } else {
            const next = admin ? list : publicOnlyArticles(list)
            setArticles(next)
            if (next.length) saveCmsArticles(next)
            setCmsSource('firebase')
          }
          setCmsError('')
          setArticlesReady(true)
        },
        (err) => {
          console.error(err)
          setCmsError(err.message)
          setArticles(publicOnlyArticles(loadCmsArticles()))
          setCmsSource('local')
          setArticlesReady(true)
        },
      ),
    )
  }, [])

  const refreshFromFirebase = useCallback(async () => {
    const admin = isEmailAllowedAdmin(getFirebaseAuth().currentUser?.email)
    attachListeners(admin)
  }, [attachListeners])

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setServicesReady(true)
      setArticlesReady(true)
      return
    }
    const unsubAuth = onAuthStateChanged(getFirebaseAuth(), (user) => {
      attachListeners(isEmailAllowedAdmin(user?.email))
    })
    return () => {
      unsubAuth()
      clearListeners()
    }
  }, [attachListeners])

  const requireAdminCloud = () => {
    const email = getFirebaseAuth().currentUser?.email
    return Boolean(
      isFirebaseConfigured() &&
        getFirebaseAuth().currentUser &&
        isEmailAllowedAdmin(email),
    )
  }

  const upsertService = useCallback(async (service: CmsService) => {
    const item = {
      ...service,
      status: service.status === 'draft' ? ('draft' as const) : ('published' as const),
      updatedAt: new Date().toISOString(),
    }
    setServices((prev) => {
      const next = [...prev]
      const idx = next.findIndex((s) => s.id === item.id)
      if (idx >= 0) next[idx] = item
      else next.unshift(item)
      saveCmsServices(next)
      return next
    })
    if (!requireAdminCloud()) {
      setSaveState('error')
      setSaveError('يلزم دخول الأدمن لحفظ التعديل في السحابة')
      return
    }
    setSaveState('saving')
    setSaveError('')
    try {
      await saveServiceToFirestore(item)
      setSaveState('saved')
      setCmsError('')
    } catch (err) {
      console.error(err)
      const msg =
        err instanceof Error ? `تعذر الحفظ في السحابة: ${err.message}` : 'تعذر الحفظ في السحابة'
      setSaveState('error')
      setSaveError(msg)
      setCmsError(msg)
    }
  }, [])

  const deleteService = useCallback(async (id: string) => {
    setServices((prev) => {
      const next = prev.filter((s) => s.id !== id)
      saveCmsServices(next)
      return next
    })
    if (!requireAdminCloud()) return
    try {
      await deleteServiceFromFirestore(id)
      setCmsError('')
    } catch (err) {
      console.error(err)
      setCmsError(
        err instanceof Error ? `تعذر الحذف من السحابة: ${err.message}` : 'تعذر الحذف من السحابة',
      )
    }
  }, [])

  const upsertArticle = useCallback(async (article: CmsArticle) => {
    const item = { ...article, updatedAt: new Date().toISOString() }
    setArticles((prev) => {
      const next = [...prev]
      const idx = next.findIndex((a) => a.id === item.id)
      if (idx >= 0) next[idx] = item
      else next.unshift(item)
      saveCmsArticles(next)
      return next
    })
    if (!requireAdminCloud()) {
      setSaveState('error')
      setSaveError('يلزم دخول الأدمن لحفظ التعديل في السحابة')
      return
    }
    setSaveState('saving')
    setSaveError('')
    try {
      await saveArticleToFirestore(item)
      setSaveState('saved')
      setCmsError('')
    } catch (err) {
      console.error(err)
      const msg =
        err instanceof Error ? `تعذر الحفظ في السحابة: ${err.message}` : 'تعذر الحفظ في السحابة'
      setSaveState('error')
      setSaveError(msg)
      setCmsError(msg)
    }
  }, [])

  const deleteArticle = useCallback(async (id: string) => {
    setArticles((prev) => {
      const next = prev.filter((a) => a.id !== id)
      saveCmsArticles(next)
      return next
    })
    if (!requireAdminCloud()) return
    try {
      await deleteArticleFromFirestore(id)
      setCmsError('')
    } catch (err) {
      console.error(err)
      setCmsError(
        err instanceof Error ? `تعذر الحذف من السحابة: ${err.message}` : 'تعذر الحذف من السحابة',
      )
    }
  }, [])

  const value = useMemo<CmsContextValue>(
    () => ({
      services,
      articles,
      cmsReady,
      cmsSource,
      cmsError,
      saveState,
      saveError,
      isAdminSession,
      refreshFromFirebase,
      upsertService,
      deleteService,
      getServiceBySlug: (slug) => services.find((s) => s.slug === slug),
      upsertArticle,
      deleteArticle,
      getArticleBySlug: (slug) => articles.find((a) => a.slug === slug),
      getArticleById: (id) => articles.find((a) => a.id === id),
      createBlankService: () => emptyService(),
      createBlankArticle: () => emptyArticle(),
      publishedArticles: () =>
        publicOnlyArticles(articles).sort((a, b) => {
          if (a.featured !== b.featured) return a.featured ? -1 : 1
          return b.publishedAt.localeCompare(a.publishedAt)
        }),
      publishedServices: () => publicOnlyServices(services),
    }),
    [
      services,
      articles,
      cmsReady,
      cmsSource,
      cmsError,
      saveState,
      saveError,
      isAdminSession,
      refreshFromFirebase,
      upsertService,
      deleteService,
      upsertArticle,
      deleteArticle,
    ],
  )

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>
}

export function useCms() {
  const ctx = useContext(CmsContext)
  if (!ctx) throw new Error('useCms must be used within CmsProvider')
  return ctx
}
