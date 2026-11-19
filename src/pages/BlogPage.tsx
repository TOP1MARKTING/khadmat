import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { useCms } from '@/context/CmsContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Select } from '@/components/ui/Input'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { cn } from '@/lib/cn'

export function BlogPage() {
  const { t } = useLanguage()
  const { services, publishedArticles } = useCms()
  const [params, setParams] = useSearchParams()
  const serviceFilter = params.get('service') || 'all'
  const articles = publishedArticles()

  usePageMeta({
    titleAr: 'المقالات | ساعدني',
    titleEn: 'Articles | Saedni',
    descriptionAr:
      'مقالات عملية عن البلاط والسباكة والمقاولات والنقل في المملكة العربية السعودية.',
    descriptionEn: 'Practical articles on trades across Saudi Arabia.',
    canonicalPath: '/blog',
  })

  const filtered = useMemo(() => {
    return articles.filter((a) => serviceFilter === 'all' || a.serviceSlug === serviceFilter)
  }, [articles, serviceFilter])

  const serviceOptions = services.filter((s) => articles.some((a) => a.serviceSlug === s.slug))

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow={t('مقالات', 'Articles')}
          title={t(
            'مقالات عملية عن الشغل في المملكة العربية السعودية',
            'Practical articles about trades across Saudi Arabia',
          )}
          description={t(
            'محتوى يفيد العميل أولًا عن المقاولات والبلاط والسباكة والنقل وغيرها — ولاحقًا يمكن إضافة اسم وشعار شركة عند الاتفاق.',
            'Customer-first content on contracting, tiling, plumbing, moving and more — a company name and logo can be added later under agreement.',
          )}
        />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setParams({})}
              className={cn(
                'whitespace-nowrap rounded-md border px-3 py-2 text-sm',
                serviceFilter === 'all'
                  ? 'border-brand bg-brand/10 text-brand'
                  : 'border-line text-muted hover:text-ink',
              )}
            >
              {t('الكل', 'All')}
            </button>
            {serviceOptions.slice(0, 8).map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setParams({ service: s.slug })}
                className={cn(
                  'whitespace-nowrap rounded-md border px-3 py-2 text-sm',
                  serviceFilter === s.slug
                    ? 'border-brand bg-brand/10 text-brand'
                    : 'border-line text-muted hover:text-ink',
                )}
              >
                {s.nameAr}
              </button>
            ))}
          </div>

          <Select
            value={serviceFilter}
            onChange={(e) =>
              setParams(e.target.value === 'all' ? {} : { service: e.target.value })
            }
            className="lg:max-w-xs"
          >
            <option value="all">{t('كل المهن', 'All trades')}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.nameAr}
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
