import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { categories, services } from '@/data/services'
import { cities } from '@/data/cities'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Input, Select } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'

export function ServicesPage() {
  const { t, lang } = useLanguage()
  const [params, setParams] = useSearchParams()
  const activeCategory = params.get('category') || 'all'
  const [query, setQuery] = useState('')
  const [cityFilter, setCityFilter] = useState('all')

  usePageMeta({
    titleAr: 'دليل الخدمات | ساعدني',
    titleEn: 'Services Directory | Saedni',
    descriptionAr: 'تصفح فئات وخدمات ساعدني في مدن المملكة العربية السعودية مع روابط للصفحات المحلية.',
    descriptionEn: 'Browse Saedni service categories across Saudi Arabia with links to local pages.',
    canonicalPath: '/services',
  })

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory = activeCategory === 'all' || s.categorySlug === activeCategory
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        s.nameAr.includes(query.trim()) ||
        s.nameEn.toLowerCase().includes(q) ||
        s.shortAr.includes(query.trim()) ||
        s.shortEn.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow={t('الدليل', 'Directory')}
          title={t('خدمات محلية حسب الفئة', 'Local services by category')}
          description={t(
            'اختر الفئة ثم انتقل إلى صفحة الخدمة أو صفحة مدينة محددة داخل المملكة العربية السعودية.',
            'Pick a category, then open a service page or a city-specific page in Saudi Arabia.',
          )}
        />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 text-muted" />
            <Input
              className="ps-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('ابحث عن خدمة...', 'Search a service...')}
            />
          </div>
          <Select
            className="lg:max-w-56"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            aria-label={t('تصفية حسب المدينة', 'Filter by city')}
          >
            <option value="all">{t('كل المدن (للربط)', 'All cities (for linking)')}</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {lang === 'ar' ? c.nameAr : c.nameEn}
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setParams({})}
            className={cn(
              'whitespace-nowrap rounded-md border px-3 py-2 text-sm',
              activeCategory === 'all'
                ? 'border-brand bg-brand/10 text-brand'
                : 'border-line text-muted hover:text-ink',
            )}
          >
            {t('الكل', 'All')}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setParams({ category: cat.slug })}
              className={cn(
                'whitespace-nowrap rounded-md border px-3 py-2 text-sm',
                activeCategory === cat.slug
                  ? 'border-brand bg-brand/10 text-brand'
                  : 'border-line text-muted hover:text-ink',
              )}
            >
              {lang === 'ar' ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-md border border-dashed border-line px-6 py-16 text-center">
            <p className="text-ink font-medium">{t('لا توجد نتائج', 'No results')}</p>
            <p className="mt-2 text-sm text-muted">
              {t('جرّب فئة أخرى أو عدّل كلمات البحث.', 'Try another category or adjust your search.')}
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => {
              const category = categories.find((c) => c.slug === service.categorySlug)
              const city = cities.find((c) => c.slug === cityFilter)
              return (
                <article key={service.slug} className="overflow-hidden rounded-md border border-line bg-surface">
                  <img
                    src={service.image}
                    alt={lang === 'ar' ? service.nameAr : service.nameEn}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    {category && (
                      <Badge tone="neutral">
                        {lang === 'ar' ? category.nameAr : category.nameEn}
                      </Badge>
                    )}
                    <h2 className="mt-3 text-lg font-semibold text-ink">
                      <Link to={`/services/${service.slug}`} className="hover:text-brand">
                        {lang === 'ar' ? service.nameAr : service.nameEn}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {lang === 'ar' ? service.shortAr : service.shortEn}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm">
                      <Link to={`/services/${service.slug}`} className="font-medium text-brand hover:underline">
                        {t('صفحة الخدمة', 'Service page')}
                      </Link>
                      {city && (
                        <>
                          <span className="text-line">|</span>
                          <Link
                            to={`/sa/${city.regionSlug}/${city.slug}/${service.slug}`}
                            className="text-muted hover:text-brand"
                          >
                            {t(`في ${city.nameAr}`, `In ${city.nameEn}`)}
                          </Link>
                        </>
                      )}
                    </div>
                    {cityFilter === 'all' && (
                      <p className="mt-3 text-xs text-muted">
                        {t('متاحة للربط مع مدن المملكة العربية السعودية', 'Available to link with Saudi Arabia cities')}
                      </p>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
