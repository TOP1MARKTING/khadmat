import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, Briefcase, MapPin } from 'lucide-react'
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
  const { t, lang, isAr } = useLanguage()
  const { services, publishedArticles } = useCms()
  const [params, setParams] = useSearchParams()
  const serviceFilter = params.get('service') || 'all'
  const articles = publishedArticles()
  const Arrow = isAr ? ArrowLeft : ArrowRight

  usePageMeta({
    titleAr: 'المدونة | مقالات المهن والخدمات | ساعدني',
    titleEn: 'Blog | Trade articles | Saedni',
    descriptionAr:
      'مدونة ساعدني لمقالات المهن والخدمات في السعودية. المقالات تُضاف عند النشر — ويمكنك الآن تصفّح أدلة المهن وصفحات المدن.',
    descriptionEn:
      'Saedni blog for trade and service articles in Saudi Arabia. Articles appear when published — browse trade guides and city pages in the meantime.',
    canonicalPath: articles.length ? '/blog' : undefined,
    robots: articles.length === 0 ? 'noindex,follow' : 'index,follow',
  })

  const filtered = useMemo(() => {
    return articles.filter((a) => serviceFilter === 'all' || a.serviceSlug === serviceFilter)
  }, [articles, serviceFilter])

  const serviceOptions = useMemo(
    () => services.filter((s) => articles.some((a) => a.serviceSlug === s.slug)),
    [articles, services],
  )

  const guidePicks = useMemo(
    () =>
      services
        .filter((s) => s.status !== 'draft' && (s.popular || Boolean(s.bodyAr?.trim())))
        .slice(0, 6),
    [services],
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
          as="h1"
          eyebrow={t('المدونة', 'Blog')}
          title={t(
            'مقالات المهن والخدمات في السعودية',
            'Trade and service articles in Saudi Arabia',
          )}
          description={t(
            'هنا تُنشر مقالات عملية عن الشغل والتنفيذ. المرحلة الحالية معرفية — إن لم تظهر مقالات بعد، أدلة المهن وصفحات المدن جاهزة للقراءة.',
            'Practical articles about trades and execution are published here. This phase is knowledge-first — if no articles are up yet, trade guides and city pages are ready to read.',
          )}
        />

        {articles.length > 0 ? (
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
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-10 space-y-8">
            <div className="rounded-2xl border border-dashed border-line bg-cream/40 px-4 py-10 text-center sm:px-6">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <BookOpen className="size-6" />
              </div>
              <p className="text-base font-extrabold text-ink sm:text-lg">
                {articles.length === 0
                  ? t('لا توجد مقالات منشورة حاليًا', 'No published articles yet')
                  : t('لا توجد مقالات في هذا التصنيف', 'No articles in this filter')}
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {articles.length === 0
                  ? t(
                      'المدونة جاهزة للنشر من لوحة التحكم. إلى أن تُضاف مقالات، استخدم أدلة المهن وصفحات المدن لفهم نطاق الشغل قبل التنفيذ.',
                      'The blog is ready for publishing from admin. Until articles are added, use trade guides and city pages to understand work scope before execution.',
                    )
                  : null}
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
                <Link
                  to="/services"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 text-sm font-bold text-white hover:bg-brand-dark sm:w-auto"
                >
                  <Briefcase className="size-4" />
                  {t('تصفّح المهن', 'Browse trades')}
                </Link>
                <Link
                  to="/locations"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 text-sm font-bold text-ink hover:border-brand/35 sm:w-auto"
                >
                  <MapPin className="size-4" />
                  {t('صفحات المدن', 'City pages')}
                </Link>
              </div>
            </div>

            {articles.length === 0 && guidePicks.length > 0 ? (
              <section>
                <div className="mb-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="eyebrow mb-1">{t('بدل الانتظار', 'While you wait')}</p>
                    <h2 className="text-xl font-extrabold text-ink">
                      {t('أدلة مهن مختارة للقراءة الآن', 'Selected trade guides to read now')}
                    </h2>
                  </div>
                  <Link
                    to="/services"
                    className="hidden items-center gap-1 text-sm font-bold text-brand hover:underline sm:inline-flex"
                  >
                    {t('كل المهن', 'All trades')}
                    <Arrow className="size-4" />
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {guidePicks.map((service) => {
                    const Icon = getServiceIcon(service.slug, service.categorySlug)
                    return (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={service.image}
                            alt={lang === 'ar' ? service.nameAr : service.nameEn}
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3.5 text-white">
                            <Icon className="size-4 shrink-0 opacity-90" />
                            <h3 className="text-sm font-extrabold sm:text-base">
                              {lang === 'ar' ? service.nameAr : service.nameEn}
                            </h3>
                          </div>
                        </div>
                        <p className="line-clamp-2 px-3.5 py-3 text-xs leading-relaxed text-muted sm:text-sm">
                          {lang === 'ar' ? service.shortAr : service.shortEn}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </section>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
