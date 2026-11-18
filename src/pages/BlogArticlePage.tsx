import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getArticle, getArticlesByService } from '@/data/blog'
import { getCity } from '@/data/cities'
import { getService } from '@/data/services'
import { Badge } from '@/components/ui/Badge'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { NotFoundPage } from './NotFoundPage'

export function BlogArticlePage() {
  const { articleSlug } = useParams()
  const { t, lang } = useLanguage()
  const article = getArticle(articleSlug || '')
  const service = article ? getService(article.serviceSlug) : undefined
  const city = article?.citySlug ? getCity(article.citySlug) : undefined
  const related = article
    ? getArticlesByService(article.serviceSlug).filter((a) => a.slug !== article.slug).slice(0, 2)
    : []

  usePageMeta({
    titleAr: article ? `${article.titleAr} | ساعدني` : 'مقال غير موجود | ساعدني',
    titleEn: article ? `${article.titleEn} | Saedni` : 'Article not found | Saedni',
    descriptionAr: article?.excerptAr || '',
    descriptionEn: article?.excerptEn || '',
    canonicalPath: article ? `/blog/${article.slug}` : undefined,
  })

  if (!article || !service) return <NotFoundPage />

  const paragraphs = lang === 'ar' ? article.contentAr : article.contentEn

  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">

        <div className="flex flex-wrap gap-2">
          <Badge tone="brand">{lang === 'ar' ? service.nameAr : service.nameEn}</Badge>
          {city && <Badge tone="sand">{lang === 'ar' ? city.nameAr : city.nameEn}</Badge>}
          <Badge tone="neutral">
            {t(`${article.readMinutes} دقائق`, `${article.readMinutes} min`)}
          </Badge>
        </div>

        <h1 className="heading-display mt-4">
          {lang === 'ar' ? article.titleAr : article.titleEn}
        </h1>
        <p className="mt-3 text-sm text-muted">
          {t('نُشر في', 'Published')} {article.publishedAt}
        </p>
        <p className="body-lead mt-4">
          {lang === 'ar' ? article.excerptAr : article.excerptEn}
        </p>

        <div className="mt-8 overflow-hidden rounded-md border border-line">
          <img
            src={article.image}
            alt={lang === 'ar' ? article.titleAr : article.titleEn}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/90">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-line bg-cream p-5">
          <p className="text-sm font-medium text-ink">
            {t('الخطوة الجاية للزائر', 'Next step for visitors')}
          </p>
          <p className="mt-2 text-sm text-muted">
            {t(
              'راجع صفحة المهنة أو صفحة المدينة المرتبطة. بيانات شركة معيّنة تظهر فقط بعد تأجير حصري موثّق — مش من أول يوم.',
              'Review the related trade or city page. A specific company appears only after a verified exclusive rental — not from day one.',
            )}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link to={`/services/${service.slug}`} className="font-medium text-brand hover:underline">
              {t(`صفحة ${service.nameAr}`, `${service.nameEn} page`)}
            </Link>
            {city && (
              <Link
                to={`/sa/${city.regionSlug}/${city.slug}/${service.slug}`}
                className="font-medium text-brand hover:underline"
              >
                {t(`${service.nameAr} في ${city.nameAr}`, `${service.nameEn} in ${city.nameEn}`)}
              </Link>
            )}
            <Link to={`/blog?service=${service.slug}`} className="text-muted hover:text-brand">
              {t('المزيد من مقالات المهنة', 'More articles in this trade')}
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="heading-section">{t('مقالات أخرى في نفس المهنة', 'More articles in this trade')}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
