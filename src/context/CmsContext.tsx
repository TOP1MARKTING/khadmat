import {
  createContext,
  useCallback,
  useContext,
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

type CmsContextValue = {
  services: CmsService[]
  articles: CmsArticle[]
  upsertService: (service: CmsService) => void
  deleteService: (id: string) => void
  getServiceBySlug: (slug: string) => CmsService | undefined
  upsertArticle: (article: CmsArticle) => void
  deleteArticle: (id: string) => void
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

  const upsertService = useCallback((service: CmsService) => {
    setServices((prev) => {
      const next = [...prev]
      const idx = next.findIndex((s) => s.id === service.id)
      const item = { ...service, updatedAt: new Date().toISOString() }
      if (idx >= 0) next[idx] = item
      else next.unshift(item)
      saveCmsServices(next)
      return next
    })
  }, [])

  const deleteService = useCallback((id: string) => {
    setServices((prev) => {
      const next = prev.filter((s) => s.id !== id)
      saveCmsServices(next)
      return next
    })
  }, [])

  const upsertArticle = useCallback((article: CmsArticle) => {
    setArticles((prev) => {
      const next = [...prev]
      const idx = next.findIndex((a) => a.id === article.id)
      const item = { ...article, updatedAt: new Date().toISOString() }
      if (idx >= 0) next[idx] = item
      else next.unshift(item)
      saveCmsArticles(next)
      return next
    })
  }, [])

  const deleteArticle = useCallback((id: string) => {
    setArticles((prev) => {
      const next = prev.filter((a) => a.id !== id)
      saveCmsArticles(next)
      return next
    })
  }, [])

  const value = useMemo<CmsContextValue>(
    () => ({
      services,
      articles,
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
    [services, articles, upsertService, deleteService, upsertArticle, deleteArticle],
  )

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>
}

export function useCms() {
  const ctx = useContext(CmsContext)
  if (!ctx) throw new Error('useCms must be used within CmsProvider')
  return ctx
}
