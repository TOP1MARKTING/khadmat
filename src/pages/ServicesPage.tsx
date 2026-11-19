import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  Building2,
  Hammer,
  MapPin,
  Search,
  Sparkles,
  Truck,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { categories } from '@/data/services'
import { cities } from '@/data/cities'
import { useCms } from '@/context/CmsContext'
import { Input, Select } from '@/components/ui/Input'
import { cn } from '@/lib/cn'

const categoryIcons: Record<string, typeof Hammer> = {
  'construction-finishing': Hammer,
  'home-maintenance': Wrench,
  cleaning: Sparkles,
  'moving-logistics': Truck,
  'other-services': Building2,
}

const HERO_IMAGE = '/images/hero/hero-11-contracting-desktop.jpg'

export function ServicesPage() {
  const { t } = useLanguage()
  const { services } = useCms()
  const [params, setParams] = useSearchParams()
  const activeCategory = params.get('category') || 'all'
  const [query, setQuery] = useState('')
  const [cityFilter, setCityFilter] = useState('all')

  usePageMeta({
    titleAr: 'دليل المهن والخدمات | ساعدني',
    titleEn: 'Trades & services directory | Saedni',
    descriptionAr: 'تصفح مهن وخدمات ساعدني في مدن المملكة العربية السعودية.',
    descriptionEn: 'Browse Saedni trades and services across Saudi Arabia.',
    canonicalPath: '/services',
  })

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = { all: services.length }
    for (const s of services) {
      map[s.categorySlug] = (map[s.categorySlug] || 0) + 1
    }
    return map
  }, [services])

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
  }, [activeCategory, query, services])

  const activeCat = categories.find((c) => c.slug === activeCategory)
  const city = cities.find((c) => c.slug === cityFilter)

  return (
    <>
      {/* Full-bleed visual intro */}
      <section className="relative isolate overflow-hidden border-b border-line">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover hero-shift"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/88 via-brand-dark/78 to-brand-dark/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgb(166_123_75_/_0.18),_transparent_55%)]" />

        <div className="container-page relative pt-28 pb-24 sm:pt-32 sm:pb-28">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-sand uppercase">
            {t('دليل المهن', 'Trades directory')}
          </p>
          <h1 className="reveal reveal-delay-1 mt-3 max-w-2xl text-[2rem] font-extrabold leading-[1.15] text-white sm:text-5xl">
            {t('استكشف المهن والخدمات', 'Explore trades & services')}
          </h1>
          <p className="reveal reveal-delay-2 mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            {t(
              'اختَر المجال، دور على المهنة، ولو حابب اربطها بمدينتك داخل المملكة.',
              'Pick a field, find the trade, and optionally link it to your city in Saudi Arabia.',
            )}
          </p>
          <p className="reveal reveal-delay-3 mt-5 text-xs font-bold text-sand">
            {services.length} {t('مهنة متاحة للتصفح', 'trades ready to browse')}
          </p>
        </div>
      </section>

      {/* Floating search + categories */}
      <section className="relative z-10 -mt-14 sm:-mt-16">
        <div className="container-page">
          <div className="reveal overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-[var(--shadow-lift)] backdrop-blur-md">
            <div className="border-b border-line p-3 sm:p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
                  <Input
                    className="h-12 rounded-xl border-line bg-cream/60 ps-10 focus:bg-surface"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('ابحث: سباكة، بلاط، نقل عفش...', 'Search: plumbing, tiling, moving...')}
                  />
                </div>
                <div className="relative lg:w-56">
                  <MapPin className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
                  <Select
                    className="h-12 rounded-xl border-line bg-cream/60 ps-10 focus:bg-surface"
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    aria-label={t('تصفية حسب المدينة', 'Filter by city')}
                  >
                    <option value="all">{t('كل المدن', 'All cities')}</option>
                    {cities.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.nameAr}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto p-3 sm:p-4">
              <button
                type="button"
                onClick={() => setParams({})}
                className={cn(
                  'inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-bold transition-all duration-200',
                  activeCategory === 'all'
                    ? 'border-brand bg-brand text-white shadow-soft'
                    : 'border-line bg-cream/70 text-ink/75 hover:border-brand/35 hover:text-brand',
                )}
              >
                الكل
                <span
                  className={cn(
                    'rounded-md px-1.5 py-0.5 text-[10px] font-extrabold',
                    activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-surface text-muted',
                  )}
                >
                  {categoryCounts.all}
                </span>
              </button>
              {categories.map((cat) => {
                const Icon = categoryIcons[cat.slug] || Wrench
                const active = activeCategory === cat.slug
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setParams({ category: cat.slug })}
                    className={cn(
                      'inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-bold transition-all duration-200',
                      active
                        ? 'border-brand bg-brand text-white shadow-soft'
                        : 'border-line bg-cream/70 text-ink/75 hover:border-brand/35 hover:text-brand',
                    )}
                  >
                    <Icon className="size-3.5 opacity-80" />
                    {cat.nameAr}
                    <span
                      className={cn(
                        'rounded-md px-1.5 py-0.5 text-[10px] font-extrabold',
                        active ? 'bg-white/20 text-white' : 'bg-surface text-muted',
                      )}
                    >
                      {categoryCounts[cat.slug] || 0}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {activeCat ? (
            <p className="mt-4 text-sm text-muted">{activeCat.descriptionAr}</p>
          ) : null}
        </div>
      </section>

      {/* Results */}
      <section className="section-pad pt-8 sm:pt-10">
        <div className="container-page">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold tracking-wide text-accent uppercase">
                {activeCat ? activeCat.nameAr : t('كل المهن', 'All trades')}
              </p>
              <h2 className="mt-1 text-lg font-extrabold text-ink sm:text-xl">
                {filtered.length}{' '}
                {t('نتيجة', 'results')}
                {city ? (
                  <span className="ms-2 text-sm font-bold text-muted">· {city.nameAr}</span>
                ) : null}
              </h2>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
              <p className="font-extrabold text-ink">{t('لا توجد نتائج', 'No results')}</p>
              <p className="mt-2 text-sm text-muted">
                {t('جرّب فئة أخرى أو عدّل كلمات البحث.', 'Try another category or adjust your search.')}
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setParams({})
                }}
                className="mt-5 inline-flex h-10 items-center rounded-full bg-brand px-4 text-xs font-extrabold text-white hover:bg-brand-dark"
              >
                عرض كل المهن
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {filtered.map((service, i) => {
                const category = categories.find((c) => c.slug === service.categorySlug)
                return (
                  <article
                    key={service.slug}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]"
                    style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="relative block overflow-hidden"
                    >
                      <img
                        src={service.image}
                        alt={service.nameAr}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5">
                        {category ? (
                          <span className="rounded-lg bg-white/90 px-2.5 py-1 text-[10px] font-bold text-brand backdrop-blur-sm">
                            {category.nameAr}
                          </span>
                        ) : (
                          <span />
                        )}
                        {service.popular ? (
                          <span className="rounded-lg bg-accent px-2.5 py-1 text-[10px] font-extrabold text-white">
                            رائج
                          </span>
                        ) : null}
                      </div>
                    </Link>

                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <h2 className="text-base font-extrabold leading-snug text-ink sm:text-lg">
                        <Link
                          to={`/services/${service.slug}`}
                          className="transition-colors hover:text-brand"
                        >
                          {service.nameAr}
                        </Link>
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
                        {service.shortAr}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line/80 pt-4">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand px-3.5 text-xs font-extrabold text-white transition-colors hover:bg-brand-dark sm:flex-none"
                        >
                          تفاصيل المهنة
                          <ArrowLeft className="size-3.5" />
                        </Link>
                        {city ? (
                          <Link
                            to={`/sa/${city.regionSlug}/${city.slug}/${service.slug}`}
                            className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-line bg-cream/50 px-3.5 text-xs font-bold text-ink transition-colors hover:border-accent hover:text-accent"
                          >
                            <MapPin className="size-3.5" />
                            في {city.nameAr}
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
