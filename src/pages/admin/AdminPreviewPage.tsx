import { Link, Navigate, useParams } from 'react-router-dom'
import { useCms } from '@/context/CmsContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

/** Admin-only preview of draft or published content (noindex). */
export function AdminPreviewPage({ kind }: { kind: 'service' | 'article' }) {
  const { id } = useParams()
  const { getArticleById, services, articles } = useCms()

  const service =
    kind === 'service' ? services.find((s) => s.id === id) : undefined
  const article =
    kind === 'article'
      ? getArticleById(id || '') || articles.find((a) => a.id === id)
      : undefined

  usePageMeta({
    titleAr: 'معاينة داخلية | ساعدني',
    titleEn: 'Internal preview | Saedni',
    descriptionAr: 'معاينة غير عامة',
    descriptionEn: 'Private preview',
    robots: 'noindex,nofollow,noarchive',
  })

  if (kind === 'service' && !service) return <Navigate to="/admin/services" replace />
  if (kind === 'article' && !article) return <Navigate to="/admin/blog" replace />

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
        <div>
          <Badge tone="sand">معاينة داخلية — ليست صفحة عامة</Badge>
          <p className="mt-1 text-xs text-muted">
            الحالة:{' '}
            {kind === 'service'
              ? service?.status === 'published'
                ? 'منشورة'
                : 'مسودة'
              : article?.status === 'published'
                ? 'منشورة'
                : 'مسودة'}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to={kind === 'service' ? `/admin/services/${id}` : `/admin/blog/${id}`}>
            <Button variant="outline" size="sm" className="rounded-xl">
              العودة للتحرير
            </Button>
          </Link>
          {kind === 'service' && service?.status === 'published' ? (
            <Link to={`/services/${service.slug}`}>
              <Button size="sm" className="rounded-xl">
                الصفحة العامة
              </Button>
            </Link>
          ) : null}
          {kind === 'article' && article?.status === 'published' ? (
            <Link to={`/blog/${article.slug}`}>
              <Button size="sm" className="rounded-xl">
                الصفحة العامة
              </Button>
            </Link>
          ) : null}
        </div>
      </div>

      {service ? (
        <article className="space-y-4">
          <h1 className="text-3xl font-extrabold text-ink">{service.nameAr}</h1>
          <p className="text-muted">{service.shortAr}</p>
          {service.image ? (
            <img
              src={service.image}
              alt={service.imageAltAr || service.nameAr}
              className="w-full rounded-2xl border border-line"
            />
          ) : null}
          <div
            className="prose-article space-y-3 text-ink/90"
            dangerouslySetInnerHTML={{ __html: service.bodyAr || service.introAr }}
          />
        </article>
      ) : null}

      {article ? (
        <article className="space-y-4">
          <h1 className="text-3xl font-extrabold text-ink">{article.titleAr}</h1>
          <p className="text-muted">{article.excerptAr}</p>
          {article.image ? (
            <img
              src={article.image}
              alt={article.imageAltAr || article.titleAr}
              className="w-full rounded-2xl border border-line"
            />
          ) : null}
          <div
            className="prose-article space-y-3 text-ink/90"
            dangerouslySetInnerHTML={{
              __html:
                article.contentHtmlAr ||
                article.contentAr.map((p) => `<p>${p}</p>`).join(''),
            }}
          />
        </article>
      ) : null}
    </div>
  )
}
