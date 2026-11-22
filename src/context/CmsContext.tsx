import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
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
import { isFirebaseConfigured } from '@/lib/firebase'
import {
  deleteArticleFromFirestore,
  deleteServiceFromFirestore,
  fetchArticlesFromFirestore,
  fetchServicesFromFirestore,
  mergeByIdPreferRemote,
  saveArticleToFirestore,
  saveServiceToFirestore,
} from '@/lib/firestoreData'

type CmsContextValue = {
  services: CmsService[]
  articles: CmsArticle[]
  cmsReady: boolean
  cmsSource: 'local' | 'firebase' | 'hybrid'
  cmsError: string
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
}

const CmsContext = createContext<CmsContextValue | null>(null)

export function CmsProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<CmsService[]>(() => loadCmsServices())
  const [articles, setArticles] = useState<CmsArticle[]>(() => loadCmsArticles())
  const [cmsReady, setCmsReady] = useState(!isFirebaseConfigured())
  const [cmsSource, setCmsSource] = useState<'local' | 'firebase' | 'hybrid'>('local')
  const [cmsError, setCmsError] = useState('')

  const refreshFromFirebase = useCallback(async () => {
    if (!isFirebaseConfigured()) {
      setCmsReady(true)
      setCmsSource('local')
      return
    }
    try {
      setCmsError('')
      const localServices = loadCmsServices()
      const localArticles = loadCmsArticles()
      const [remoteServices, remoteArticles] = await Promise.all([
        fetchServicesFromFirestore(),
        fetchArticlesFromFirestore(),
      ])

      if (remoteServices.length === 0 && remoteArticles.length === 0) {
        // Keep all local data; nothing deleted. Wait for admin export.
        setServices(localServices)
        setArticles(localArticles)
        setCmsSource('local')
        setCmsReady(true)
        return
      }

      const mergedServices = mergeByIdPreferRemote(remoteServices, localServices)
      const mergedArticles = mergeByIdPreferRemote(remoteArticles, localArticles)
      setServices(mergedServices)
      setArticles(mergedArticles)
      saveCmsServices(mergedServices)
      saveCmsArticles(mergedArticles)
      setCmsSource(
        localServices.length || localArticles.length ? 'hybrid' : 'firebase',
      )
      setCmsReady(true)
    } catch (err) {
      console.error(err)
      setCmsError(
        err instanceof Error ? err.message : 'تعذر الاتصال بالسحابة — نعرض النسخة المحلية',
      )
      setCmsSource('local')
      setCmsReady(true)
    }
  }, [])

  useEffect(() => {
    void refreshFromFirebase()
  }, [refreshFromFirebase])

  const upsertService = useCallback(async (service: CmsService) => {
    const item = { ...service, updatedAt: new Date().toISOString() }
    setServices((prev) => {
      const next = [...prev]
      const idx = next.findIndex((s) => s.id === item.id)
      if (idx >= 0) next[idx] = item
      else next.unshift(item)
      saveCmsServices(next)
      return next
    })
    if (isFirebaseConfigured()) {
      try {
        await saveServiceToFirestore(item)
      } catch (err) {
        console.error(err)
        setCmsError(
          err instanceof Error
            ? `حُفظ محليًا، لكن الرفع للسحابة فشل: ${err.message}`
            : 'حُفظ محليًا، لكن الرفع للسحابة فشل',
        )
      }
    }
  }, [])

  const deleteService = useCallback(async (id: string) => {
    setServices((prev) => {
      const next = prev.filter((s) => s.id !== id)
      saveCmsServices(next)
      return next
    })
    if (isFirebaseConfigured()) {
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
    if (isFirebaseConfigured()) {
      try {
        await saveArticleToFirestore(item)
      } catch (err) {
        console.error(err)
        setCmsError(
          err instanceof Error
            ? `حُفظ محليًا، لكن الرفع للسحابة فشل: ${err.message}`
            : 'حُفظ محليًا، لكن الرفع للسحابة فشل',
        )
      }
    }
  }, [])

  const deleteArticle = useCallback(async (id: string) => {
    setArticles((prev) => {
      const next = prev.filter((a) => a.id !== id)
      saveCmsArticles(next)
      return next
    })
    if (isFirebaseConfigured()) {
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
    }),
    [
      services,
      articles,
      cmsReady,
      cmsSource,
      cmsError,
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
