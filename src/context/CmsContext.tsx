import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {
  emptyArticle,
  emptyService,
  loadCmsArticles,
  loadCmsServices,
  saveCmsArticles,
  saveCmsServices,
  type CmsArticle,
  type CmsService,
} from '@/lib/cms'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase'
import {
  deleteArticleFromFirestore,
  deleteServiceFromFirestore,
  fetchAllArticlesFromFirestore,
  fetchAllServicesFromFirestore,
  fetchPublishedArticlesFromFirestore,
  fetchPublishedServicesFromFirestore,
  mergeByIdPreferRemote,
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

function publicOnlyServices(list: CmsService[]) {
  return list.filter((s) => s.status !== 'draft')
}

function publicOnlyArticles(list: CmsArticle[]) {
  return list.filter((a) => a.status === 'published')
}

export function CmsProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<CmsService[]>(() =>
    publicOnlyServices(loadCmsServices()),
  )
  const [articles, setArticles] = useState<CmsArticle[]>(() =>
    publicOnlyArticles(loadCmsArticles()),
  )
  const [cmsReady, setCmsReady] = useState(!isFirebaseConfigured())
  const [cmsSource, setCmsSource] = useState<'local' | 'firebase' | 'hybrid'>('local')
  const [cmsError, setCmsError] = useState('')
  const [saveState, setSaveState] = useState<SaveState>('idle')
  const [saveError, setSaveError] = useState('')
  const [isAdminSession, setIsAdminSession] = useState(false)

  const refreshFromFirebase = useCallback(async () => {
    if (!isFirebaseConfigured()) {
      setCmsReady(true)
      setCmsSource('local')
      return
    }
    try {
      setCmsError('')
      const admin = Boolean(getFirebaseAuth().currentUser)
      setIsAdminSession(admin)

      const localServices = loadCmsServices()
      const localArticles = loadCmsArticles()

      const [remoteServices, remoteArticles] = admin
        ? await Promise.all([
            fetchAllServicesFromFirestore(),
            fetchAllArticlesFromFirestore(),
          ])
        : await Promise.all([
            fetchPublishedServicesFromFirestore(),
            fetchPublishedArticlesFromFirestore(),
          ])

      if (remoteServices.length === 0 && remoteArticles.length === 0) {
        const localViewServices = admin
          ? localServices
          : publicOnlyServices(localServices)
        const localViewArticles = admin
          ? localArticles
          : publicOnlyArticles(localArticles)
        setServices(localViewServices)
        setArticles(localViewArticles)
        if (!admin) {
          saveCmsServices(publicOnlyServices(localServices))
          saveCmsArticles(publicOnlyArticles(localArticles))
        }
        setCmsSource('local')
        setCmsReady(true)
        return
      }

      const mergedServices = mergeByIdPreferRemote(remoteServices, localServices)
      const mergedArticles = mergeByIdPreferRemote(remoteArticles, localArticles)

      if (admin) {
        setServices(mergedServices)
        setArticles(mergedArticles)
        saveCmsServices(mergedServices)
        saveCmsArticles(mergedArticles)
      } else {
        const pubS = publicOnlyServices(mergedServices)
        const pubA = publicOnlyArticles(mergedArticles)
        setServices(pubS)
        setArticles(pubA)
        saveCmsServices(pubS)
        saveCmsArticles(pubA)
      }

      setCmsSource(
        localServices.length || localArticles.length ? 'hybrid' : 'firebase',
      )
      setCmsReady(true)
    } catch (err) {
      console.error(err)
      setCmsError(
        err instanceof Error
          ? err.message
          : 'تعذر الاتصال بالسحابة — نعرض النسخة المحلية',
      )
      setCmsSource('local')
      setCmsReady(true)
    }
  }, [])

  useEffect(() => {
    void refreshFromFirebase()
  }, [refreshFromFirebase])

  useEffect(() => {
    if (!isFirebaseConfigured()) return
    return onAuthStateChanged(getFirebaseAuth(), () => {
      void refreshFromFirebase()
    })
  }, [refreshFromFirebase])

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
    if (isFirebaseConfigured() && getFirebaseAuth().currentUser) {
      setSaveState('saving')
      setSaveError('')
      try {
        await saveServiceToFirestore(item)
        setSaveState('saved')
      } catch (err) {
        console.error(err)
        const msg =
          err instanceof Error
            ? `حُفظ محليًا، لكن الرفع للسحابة فشل: ${err.message}`
            : 'حُفظ محليًا، لكن الرفع للسحابة فشل'
        setSaveState('error')
        setSaveError(msg)
        setCmsError(msg)
      }
    } else {
      setSaveState('saved')
    }
  }, [])

  const deleteService = useCallback(async (id: string) => {
    setServices((prev) => {
      const next = prev.filter((s) => s.id !== id)
      saveCmsServices(next)
      return next
    })
    if (isFirebaseConfigured() && getFirebaseAuth().currentUser) {
      try {
        await deleteServiceFromFirestore(id)
      } catch (err) {
        console.error(err)
        setCmsError(
          err instanceof Error
            ? `حُذف محليًا، لكن الحذف من السحابة فشل: ${err.message}`
            : 'حُذف محليًا، لكن الحذف من السحابة فشل',
        )
      }
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
    if (isFirebaseConfigured() && getFirebaseAuth().currentUser) {
      setSaveState('saving')
      setSaveError('')
      try {
        await saveArticleToFirestore(item)
        setSaveState('saved')
      } catch (err) {
        console.error(err)
        const msg =
          err instanceof Error
            ? `حُفظ محليًا، لكن الرفع للسحابة فشل: ${err.message}`
            : 'حُفظ محليًا، لكن الرفع للسحابة فشل'
        setSaveState('error')
        setSaveError(msg)
        setCmsError(msg)
      }
    } else {
      setSaveState('saved')
    }
  }, [])

  const deleteArticle = useCallback(async (id: string) => {
    setArticles((prev) => {
      const next = prev.filter((a) => a.id !== id)
      saveCmsArticles(next)
      return next
    })
    if (isFirebaseConfigured() && getFirebaseAuth().currentUser) {
      try {
        await deleteArticleFromFirestore(id)
      } catch (err) {
        console.error(err)
        setCmsError(
          err instanceof Error
            ? `حُذف محليًا، لكن الحذف من السحابة فشل: ${err.message}`
            : 'حُذف محليًا، لكن الحذف من السحابة فشل',
        )
      }
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
        articles
          .filter((a) => a.status === 'published')
          .sort((a, b) => {
            if (a.featured !== b.featured) return a.featured ? -1 : 1
            return b.publishedAt.localeCompare(a.publishedAt)
          }),
      publishedServices: () => services.filter((s) => s.status !== 'draft'),
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
