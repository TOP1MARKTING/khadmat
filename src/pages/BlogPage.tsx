import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Briefcase } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useCms } from '@/context/CmsContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { categories } from '@/data/services'
import { getServiceIcon } from '@/lib/serviceIcons'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ModernSelect } from '@/components/ui/ModernSelect'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { cn } from '@/lib/cn'

export function BlogPage() {
  const { t, lang } = useLanguage()
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

  const serviceOptions = useMemo(
    () => services.filter((s) => articles.some((a) => a.serviceSlug === s.slug)),
    [articles, services],
  )

  const selectOptions = useMemo(
    () => [
      {
        value: 'all',
        label: t('كل المهن', 'All trades'),
        icon: <Briefcase className="size-4" />,
      },
      ...services.map((s) => {
        const category = categories.find((c) => c.slug === s.categorySlug)
        const Icon = getServiceIcon(s.slug, s.categorySlug)
        return {
          value: s.slug,
          label: lang === 'ar' ? s.nameAr : s.nameEn,
          group: category
            ? lang === 'ar'
              ? category.nameAr
              : category.nameEn
            : undefined,
          icon: <Icon className="size-4" />,
          keywords: [s.nameAr, s.nameEn, s.slug, s.slug.replace(/-/g, ' ')],
        }
      }),
    ],
    [lang, services, t],
  )

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
            'محتوى عملي عن المقاولات والبلاط والسباكة والنقل وغيرها في المملكة — يساعدك تفهم الشغل قبل التنفيذ.',
            'Practical content on contracting, tiling, plumbing, moving and more in Saudi Arabia — understand the work before you start.',
          )}
        />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setParams({})}
              className={cn(
                'whitespace-nowrap rounded-xl border px-3.5 py-2 text-sm font-bold transition-colors',
                serviceFilter === 'all'
                  ? 'border-brand bg-brand text-white shadow-soft'
                  : 'border-line bg-surface text-muted hover:border-brand/35 hover:text-brand',
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
                  'whitespace-nowrap rounded-xl border px-3.5 py-2 text-sm font-bold transition-colors',
                  serviceFilter === s.slug
                    ? 'border-brand bg-brand text-white shadow-soft'
                    : 'border-line bg-surface text-muted hover:border-brand/35 hover:text-brand',
                )}
              >
                {lang === 'ar' ? s.nameAr : s.nameEn}
              </button>
            ))}
          </div>

          <div className="w-full lg:max-w-xs">
            <ModernSelect
              value={serviceFilter}
              onChange={(value) => setParams(value === 'all' ? {} : { service: value })}
              options={selectOptions}
              placeholder={t('كل المهن', 'All trades')}
              searchPlaceholder={t('ابحث عن مهنة...', 'Search a trade...')}
              ariaLabel={t('تصفية حسب المهنة', 'Filter by trade')}
              triggerClassName="h-11 rounded-xl border-line bg-cream/50"
            />
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-line bg-cream/40 px-4 py-12 text-center">
            <p className="text-sm font-bold text-ink">
              {t('المدونة قيد التجهيز', 'Blog is being prepared')}
            </p>
            <p className="mt-2 text-sm text-muted">
              {t(
                'حاليًا الأدلة الأساسية داخل صفحات المهن. المقالات المنفصلة تُنشر بعد المراجعة.',
                'Core guides live on trade pages for now. Standalone articles will publish after review.',
              )}
            </p>
            <Link
              to="/services"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-brand px-4 text-sm font-bold text-white hover:bg-brand-dark"
            >
              {t('تصفّح المهن', 'Browse trades')}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
