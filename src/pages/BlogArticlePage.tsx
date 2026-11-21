import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { useCms } from '@/context/CmsContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getCity } from '@/data/cities'
import { Badge } from '@/components/ui/Badge'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { CompanySpotlight } from '@/components/blog/CompanySpotlight'
import { NotFoundPage } from './NotFoundPage'

export function BlogArticlePage() {
  const { articleSlug } = useParams()
  const { t } = useLanguage()
  const { getArticleBySlug, getServiceBySlug, publishedArticles } = useCms()
  const article = getArticleBySlug(articleSlug || '')
  const service = article?.serviceSlug ? getServiceBySlug(article.serviceSlug) : undefined
  const city = article?.citySlug ? getCity(article.citySlug) : undefined
  const related = article
    ? publishedArticles()
        .filter((a) => a.serviceSlug === article.serviceSlug && a.slug !== article.slug)
        .slice(0, 2)
    : []

  usePageMeta({
    titleAr: article
      ? `${article.metaTitleAr || article.titleAr} | ساعدني`
      : 'مقال غير موجود | ساعدني',
    titleEn: article ? `${article.titleEn || article.titleAr} | Saedni` : 'Article not found',
    descriptionAr: article?.metaDescriptionAr || article?.excerptAr || '',
    descriptionEn: article?.excerptEn || article?.excerptAr || '',
    canonicalPath: article ? `/blog/${article.slug}` : undefined,
  })

  if (!article || article.status !== 'published') return <NotFoundPage />

  const html = article.contentHtmlAr || article.contentAr.map((p) => `<p>${p}</p>`).join('')

  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">
        <div className="flex flex-wrap gap-2">
          {service ? <Badge tone="brand">{service.nameAr}</Badge> : null}
          {city ? <Badge tone="sand">{city.nameAr}</Badge> : null}
        </div>

        <h1 className="heading-display mt-4">{article.titleAr}</h1>
        <p className="mt-3 text-sm text-muted">
          {t('نُشر في', 'Published')} {article.publishedAt}
        </p>
        <p className="body-lead mt-4">{article.excerptAr}</p>

        {article.image ? (
          <div className="mt-8 overflow-hidden rounded-md border border-line">
            <img
              src={article.image}
              alt={article.imageAltAr || article.titleAr}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        ) : null}

        <div
          className="prose-article mt-8 space-y-5 text-base leading-relaxed text-ink/90 [&_a]:font-bold [&_a]:text-accent [&_a]:underline [&_figure]:my-6 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-extrabold [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-extrabold [&_img]:rounded-xl [&_p]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <CompanySpotlight
          companyName={article.companyName}
          companyLogo={article.companyLogo}
          companyAboutAr={article.companyAboutAr}
          companyAboutEn={article.companyAboutEn}
        />

        {service ? (
          <div className="mt-10 rounded-2xl border border-line bg-cream p-5">
            <p className="text-sm font-bold text-ink">{t('الخطوة الجاية', 'Next step')}</p>
            <p className="mt-2 text-sm text-muted">
              {t(
                'راجع دليل المهنة: الشرح والصور والمقالات المرتبطة قبل ما تطلب.',
                'Review the trade guide: explanation, photos, and related articles before you ask.',
              )}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link to={`/services/${service.slug}`} className="font-bold text-brand hover:underline">
                {service.nameAr}
              </Link>
            </div>
          </div>
        ) : null}

        {related.length > 0 ? (
          <div className="mt-12">
            <h2 className="text-xl font-extrabold text-ink">{t('مقالات ذات صلة', 'Related articles')}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
