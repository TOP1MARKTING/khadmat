import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  Building2,
  Hammer,
  LayoutGrid,
  Search,
  Sparkles,
  Truck,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { categories } from '@/data/services'
import { useCms } from '@/context/CmsContext'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/cn'

const categoryIcons: Record<string, typeof Hammer> = {
  'construction-finishing': Hammer,
  'home-maintenance': Wrench,
  cleaning: Sparkles,
  'moving-logistics': Truck,
  'other-services': Building2,
}

const HERO_IMAGE = '/images/team/team-01-villas.png'

export function ServicesPage() {
  const { t } = useLanguage()
  const { services } = useCms()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const activeCategory = params.get('category') || 'all'
  const [query, setQuery] = useState('')
  const [suggestOpen, setSuggestOpen] = useState(false)
  const [activeSuggest, setActiveSuggest] = useState(0)
  const searchWrapRef = useRef<HTMLDivElement>(null)

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

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return services
      .filter((s) => {
        if (activeCategory !== 'all' && s.categorySlug !== activeCategory) return false
        return (
          s.nameAr.includes(query.trim()) ||
          s.nameEn.toLowerCase().includes(q) ||
          s.shortAr.includes(query.trim()) ||
          s.slug.toLowerCase().includes(q)
        )
      })
      .slice(0, 8)
  }, [query, services, activeCategory])

  useEffect(() => {
    setActiveSuggest(0)
  }, [query])

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!searchWrapRef.current?.contains(e.target as Node)) setSuggestOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    return () => document.removeEventListener('mousedown', onPointer)
  }, [])

  const pickSuggestion = (slug: string, nameAr: string) => {
    setQuery(nameAr)
    setSuggestOpen(false)
    navigate(`/services/${slug}`)
  }

  const activeCat = categories.find((c) => c.slug === activeCategory)
  const showSuggestions = suggestOpen && query.trim().length > 0

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
              'اختَر المجال ودور على المهنة اللي محتاجها.',
              'Pick a field and find the trade you need.',
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
          <div className="reveal rounded-2xl border border-line bg-surface/95 shadow-[var(--shadow-lift)] backdrop-blur-md">
            <div className="border-b border-line p-3 sm:p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative z-20 flex-1" ref={searchWrapRef}>
                  <Search className="pointer-events-none absolute start-3.5 top-1/2 z-10 size-4 -translate-y-1/2 text-muted" />
                  <Input
                    className="h-12 rounded-xl border-line bg-cream/60 ps-10 focus:bg-surface"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      setSuggestOpen(true)
                    }}
                    onFocus={() => setSuggestOpen(true)}
                    onKeyDown={(e) => {
                      if (!showSuggestions || suggestions.length === 0) return
                      if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        setActiveSuggest((i) => (i + 1) % suggestions.length)
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        setActiveSuggest((i) => (i - 1 + suggestions.length) % suggestions.length)
                      } else if (e.key === 'Enter') {
                        const pick = suggestions[activeSuggest]
                        if (pick) {
                          e.preventDefault()
                          pickSuggestion(pick.slug, pick.nameAr)
                        }
                      } else if (e.key === 'Escape') {
                        setSuggestOpen(false)
                      }
                    }}
                    placeholder={t('ابحث: سباكة، بلاط، نقل عفش...', 'Search: plumbing, tiling, moving...')}
                    role="combobox"
                    aria-expanded={showSuggestions && suggestions.length > 0}
                    aria-autocomplete="list"
                    autoComplete="off"
                  />
                  {showSuggestions ? (
                    <div className="absolute inset-x-0 top-[calc(100%+6px)] z-30 overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-lift)]">
                      {suggestions.length === 0 ? (
                        <p className="px-4 py-3 text-sm text-muted">
                          {t('لا توجد اقتراحات مطابقة', 'No matching suggestions')}
                        </p>
                      ) : (
                        <ul className="max-h-64 overflow-y-auto py-1" role="listbox">
                          {suggestions.map((s, i) => {
                            const cat = categories.find((c) => c.slug === s.categorySlug)
                            return (
                              <li key={s.slug} role="option" aria-selected={i === activeSuggest}>
                                <button
                                  type="button"
                                  className={cn(
                                    'flex w-full items-center gap-3 px-3.5 py-2.5 text-start transition-colors',
                                    i === activeSuggest ? 'bg-brand/10 text-brand' : 'hover:bg-cream/80',
                                  )}
                                  onMouseEnter={() => setActiveSuggest(i)}
                                  onClick={() => pickSuggestion(s.slug, s.nameAr)}
                                >
                                  <img
                                    src={s.image}
                                    alt=""
                                    className="size-9 shrink-0 rounded-lg object-cover"
                                  />
                                  <span className="min-w-0 flex-1">
                                    <span className="block truncate text-sm font-extrabold text-ink">
                                      {s.nameAr}
                                    </span>
                                    {cat ? (
                                      <span className="block truncate text-[11px] font-bold text-muted">
                                        {cat.nameAr}
                                      </span>
                                    ) : null}
                                  </span>
                                  <Search className="size-3.5 shrink-0 text-muted" />
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="relative p-3 sm:p-4">
              <p className="mb-2.5 text-[11px] font-extrabold tracking-[0.14em] text-muted">
                {t('التصنيفات', 'Categories')}
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                <button
                  type="button"
                  onClick={() => setParams({})}
                  className={cn(
                    'flex items-center gap-2.5 rounded-2xl border px-3 py-2.5 text-start transition-all duration-200',
                    activeCategory === 'all'
                      ? 'border-accent/50 bg-accent text-white shadow-[0_10px_22px_rgba(166,123,75,0.28)]'
                      : 'border-line bg-cream/50 text-ink hover:border-accent/35 hover:bg-cream',
                  )}
                >
                  <span
                    className={cn(
                      'inline-flex size-9 shrink-0 items-center justify-center rounded-xl',
                      activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-surface text-accent',
                    )}
                  >
                    <LayoutGrid className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-extrabold leading-snug sm:text-sm">
                      {t('الكل', 'All')}
                    </span>
                    <span
                      className={cn(
                        'mt-0.5 block text-[11px] font-bold',
                        activeCategory === 'all' ? 'text-white/80' : 'text-muted',
                      )}
                    >
                      {categoryCounts.all} {t('مهنة', 'trades')}
                    </span>
                  </span>
                </button>

                {categories.map((cat) => {
                  const Icon = categoryIcons[cat.slug] || Wrench
                  const active = activeCategory === cat.slug
                  const count = categoryCounts[cat.slug] || 0
                  return (
                    <button
                      key={cat.slug}
                      type="button"
                      onClick={() => setParams({ category: cat.slug })}
                      className={cn(
                        'flex items-start gap-2.5 rounded-2xl border px-3 py-2.5 text-start transition-all duration-200',
                        active
                          ? 'border-accent/50 bg-accent text-white shadow-[0_10px_22px_rgba(166,123,75,0.28)]'
                          : 'border-line bg-cream/50 text-ink hover:border-accent/35 hover:bg-cream',
                      )}
                    >
                      <span
                        className={cn(
                          'mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl',
                          active ? 'bg-white/20 text-white' : 'bg-surface text-accent',
                        )}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-extrabold leading-snug sm:text-sm">
                          {cat.nameAr}
                        </span>
                        <span
                          className={cn(
                            'mt-0.5 block text-[11px] font-bold',
                            active ? 'text-white/80' : 'text-muted',
                          )}
                        >
                          {count} {t('مهنة', 'trades')}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {activeCat ? (
            <p className="mt-4 text-sm leading-relaxed text-muted">{activeCat.descriptionAr}</p>
          ) : null}
        </div>
      </section>

      {/* Results */}
      <section className="section-pad pt-8 sm:pt-10">
        <div className="container-page">
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
