import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { blogArticles } from '@/data/blog'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Select } from '@/components/ui/Input'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { cn } from '@/lib/cn'

export function BlogPage() {
  const { t, lang } = useLanguage()
  const [params, setParams] = useSearchParams()
  const serviceFilter = params.get('service') || 'all'

  usePageMeta({
    titleAr: 'مدونة المهن | ساعدني',
    titleEn: 'Trade blog | Saedni',
    descriptionAr:
      'مقالات عملية عن البلاط والسباكة والمقاولات والنقل في المملكة العربية السعودية — محتوى يفيد الزائر ويبني ظهور صفحات المهن.',
    descriptionEn:
      'Practical articles on tiling, plumbing, contracting, and moving across Saudi Arabia — useful content that also supports trade page visibility.',
    canonicalPath: '/blog',
  })

  const filtered = useMemo(() => {
    return blogArticles
      .filter((a) => serviceFilter === 'all' || a.serviceSlug === serviceFilter)
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  }, [serviceFilter])

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow={t('محتوى المهن', 'Trade content')}
          title={t(
            'مقالات عملية عن الشغل في المملكة العربية السعودية',
            'Practical articles about trades across Saudi Arabia',
          )}
          description={t(
            'محتوى عن المقاولات والبلاط والسباكة والنقل وغيرها — عشان الباحث يلاقي معلومة مفيدة. من غير أسماء شركات وهمية.',
            'Content about contracting, tiling, plumbing, moving and more — so searchers find useful information. No fake company names.',
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
            {services
              .filter((s) => blogArticles.some((a) => a.serviceSlug === s.slug))
              .map((s) => (
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
                  {lang === 'ar' ? s.nameAr : s.nameEn}
                </button>
              ))}
          </div>
          <Select
            className="lg:max-w-64"
            value={serviceFilter}
            onChange={(e) =>
              e.target.value === 'all'
                ? setParams({})
                : setParams({ service: e.target.value })
            }
          >
            <option value="all">{t('كل المهن', 'All trades')}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {lang === 'ar' ? s.nameAr : s.nameEn}
              </option>
            ))}
          </Select>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-md border border-dashed border-line px-6 py-16 text-center">
            <p className="font-medium">{t('لا مقالات ضمن التصفية', 'No articles in this filter')}</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
