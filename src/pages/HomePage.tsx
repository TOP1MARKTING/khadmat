import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  Hammer,
  HardHat,
  FileText,
  MapPin,
  Search,
  Sparkles,
  Truck,
  Users,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { JsonLd } from '@/components/seo/JsonLd'
import { absoluteUrl } from '@/lib/siteConfig'
import { getFeaturedCities } from '@/data/cities'
import { categories } from '@/data/services'
import { useCms } from '@/context/CmsContext'
import {
  HeroBackground,
  HeroSlideDots,
  MobileWideHero,
  useHeroSlider,
} from '@/components/home/HeroBackground'
import { ServiceSearch } from '@/components/home/ServiceSearch'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getServiceIcon } from '@/lib/serviceIcons'

const categoryIcons: Record<string, typeof Hammer> = {
  'construction-finishing': Hammer,
  'home-maintenance': Wrench,
  cleaning: Sparkles,
  'moving-logistics': Truck,
  'other-services': Building2,
}

const helpPoints = [
  {
    icon: HardHat,
    arTitle: 'اكتشف المهن',
    enTitle: 'Discover trades',
    ar: 'تعرّف على طبيعة عمل كل مهنة والخدمات التي تقدمها.',
    en: 'Learn what each trade does and the services it covers.',
  },
  {
    icon: FileText,
    arTitle: 'افهم نطاق الشغل',
    enTitle: 'Understand the scope',
    ar: 'كل دليل يوضح طبيعة المهنة وأنواع الأعمال وما يهم قبل الاتفاق.',
    en: 'Each guide explains the trade, work types, and what matters before you agree.',
  },
  {
    icon: BookOpen,
    arTitle: 'اعرف قبل أن تبدأ',
    enTitle: 'Know before you start',
    ar: 'اقرأ النصائح والأخطاء الشائعة داخل دليل المهنة قبل التنفيذ.',
    en: 'Read tips and common mistakes inside each trade guide before work begins.',
  },
  {
    icon: Search,
    arTitle: 'قارن احتياجاتك',
    enTitle: 'Compare your needs',
    ar: 'افهم نطاق العمل وما ينبغي الاتفاق عليه قبل التنفيذ.',
    en: 'Understand scope of work and what to agree on before execution.',
  },
]

export function HomePage() {
  const { t, lang, isAr } = useLanguage()
  const Arrow = isAr ? ArrowLeft : ArrowRight
  const featuredCities = getFeaturedCities()
  const { publishedServices, publishedArticles, cmsReady } = useCms()
  const services = publishedServices()
  const popular = services.filter((s) => s.popular).slice(0, 6)
  const recentArticles = publishedArticles().slice(0, 3)
  const heroIndex = useHeroSlider()

  usePageMeta({
    titleAr: 'ساعدني | منصة المعلومات عن المهن والخدمات المحلية في السعودية',
    titleEn: 'Saedni | Local trades & services information platform in Saudi Arabia',
    descriptionAr:
      'ساعدني مرجع معرفي للمهن والخدمات في المملكة العربية السعودية — أدلة عملية تساعدك تفهم طبيعة الشغل ونطاقه قبل التنفيذ.',
    descriptionEn:
      'Saedni is a knowledge reference for trades and services in Saudi Arabia — practical guides to understand the work and scope before you start.',
    canonicalPath: '/',
  })

  return (
    <>
      <JsonLd
        id="website"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'ساعدني',
          alternateName: 'Saedni',
          url: absoluteUrl('/'),
          inLanguage: 'ar-SA',
          description:
            'مرجع معرفي للمهن والخدمات في المملكة العربية السعودية',
        }}
      />
      {/* ===== Mobile first fold: photo + overlapping modern sheet ===== */}
      <section className="flex h-svh flex-col overflow-hidden border-b border-line sm:hidden">
        <div className="relative shrink-0">
          <MobileWideHero
            index={heroIndex}
            showDots={false}
            className="aspect-[5/3] w-full"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
          <div className="absolute inset-x-0 bottom-4">
            <HeroSlideDots index={heroIndex} />
          </div>
        </div>

        <div className="relative z-10 -mt-5 flex min-h-0 flex-1 flex-col rounded-t-[1.75rem] bg-surface px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-5 shadow-[0_-12px_40px_rgba(23,25,22,0.12)]">
          <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center text-center">
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-accent">
              {t('ساعدني', 'SAEDNI')}
            </p>
            <h1 className="mt-1.5 text-[1.45rem] font-extrabold leading-[1.25] tracking-tight text-ink">
              {t(
                'تحتاج خدمة لمنزلك؟ ابدأ بفهمها قبل التنفيذ.',
                'Need a home service? Understand it before you start.',
              )}
            </h1>
            <p className="mt-2 text-[13px] font-medium leading-relaxed text-muted">
              {t(
                'دليلك للمهن والخدمات المحلية في المملكة — اختَر المهنة وابدأ.',
                'Your guide to local trades in the Kingdom — pick a trade and start.',
              )}
            </p>

            <div className="mt-4 w-full">
              <ServiceSearch compact />
            </div>

            <Link
              to="/services"
              className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-accent text-[13px] font-extrabold text-white shadow-[0_8px_20px_rgba(166,123,75,0.28)] transition-colors hover:brightness-95"
            >
              <Compass className="size-4" />
              {t('استكشف كل المهن', 'Explore all trades')}
              <Arrow className="size-3.5 opacity-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Laptop: full-bleed photo hero ===== */}
      <section className="relative isolate hidden min-h-[560px] overflow-x-hidden border-b-4 border-accent sm:block lg:min-h-[640px]">
        <div className="absolute inset-0">
          <HeroBackground index={heroIndex} />
        </div>
        <div className="relative flex h-full min-h-[560px] items-end lg:min-h-[640px]">
          <div className="container-page w-full pb-14 pt-10 lg:pb-16 lg:pt-14">
            <div className="max-w-3xl text-white">
              <p className="reveal mb-4 inline-flex max-w-full items-center gap-2 border border-accent/50 bg-accent/15 px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] text-accent-soft uppercase">
                <HardHat className="size-3.5 shrink-0" />
                <span className="leading-snug">
                  {t(
                    'منصة المعلومات عن المهن والخدمات المحلية في السعودية',
                    'Local trades & services information platform in Saudi Arabia',
                  )}
                </span>
              </p>
              <h1 className="reveal reveal-delay-1 text-4xl font-extrabold leading-[1.12] drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] lg:text-5xl">
                {t(
                  'تحتاج خدمة لمنزلك؟ ابدأ بفهم الخدمة قبل التنفيذ.',
                  'Need a home service? Understand it before execution.',
                )}
              </h1>
              <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-white/92 lg:text-xl">
                {t(
                  'ساعدني دليلك للتعرف على المهن والخدمات المحلية في المملكة العربية السعودية. اكتشف طبيعة الأعمال، وتعرّف على نطاق الخدمات، واعرف أهم التفاصيل التي تحتاجها قبل اختيار مقدم الخدمة.',
                  'Saedni is your guide to local trades and services in Saudi Arabia. Discover how the work is done, understand service scope, and learn the key details you need before choosing a provider.',
                )}
              </p>
              <div className="reveal reveal-delay-3 mt-7 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-extrabold text-white hover:brightness-95"
                >
                  <Compass className="size-4" />
                  {t('استكشف الخدمات', 'Explore services')}
                </Link>
              </div>
            </div>
            <div className="reveal reveal-delay-3 mt-9 max-w-3xl">
              <ServiceSearch variant="hero" />
              <HeroSlideDots index={heroIndex} className="mt-5" />
            </div>
          </div>
        </div>
      </section>

      {/* How Saedni helps */}
      <section className="border-b border-line bg-surface section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow={t('وضوح عملي', 'Practical clarity')}
            title={t('كيف يساعدك ساعدني؟', 'How does Saedni help you?')}
            description={t(
              'نساعدك في الوصول إلى معلومات واضحة وعملية عن مختلف الخدمات التي قد تحتاجها لمنزلك أو منشأتك.',
              'We help you reach clear, practical information about the services you may need for your home or premises.',
            )}
          />
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {helpPoints.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.enTitle} className="rounded-xl border border-line bg-cream/50 p-3 sm:p-5">
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand sm:size-10">
                    <Icon className="size-4 sm:size-5" />
                  </span>
                  <h3 className="mt-2.5 text-sm font-extrabold leading-snug text-ink sm:mt-3 sm:text-base">
                    {lang === 'ar' ? item.arTitle : item.enTitle}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted sm:mt-1.5 sm:text-sm">
                    {lang === 'ar' ? item.ar : item.en}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow={t('مجالات الشغل', 'Work fields')}
            title={t('استكشف الخدمات حسب المجال', 'Explore services by field')}
            description={t(
              'كل قسم يفتح مهن ومقالات وصفحات مدن مرتبطة بنفس المجال.',
              'Each section opens related trades, articles, and city pages.',
            )}
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.slug] || Wrench
              const count = services.filter((s) => s.categorySlug === cat.slug).length
              return (
                <Link
                  key={cat.slug}
                  to={`/services?category=${cat.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                    <img
                      src={cat.image}
                      alt={lang === 'ar' ? cat.nameAr : cat.nameEn}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <span className="absolute start-3 top-3 inline-flex size-10 items-center justify-center rounded-xl bg-white/95 text-brand shadow-soft backdrop-blur-sm">
                      <Icon className="size-4" />
                    </span>
                    {!cmsReady ? (
                      <span className="absolute end-3 top-3 rounded-lg bg-ink/75 px-2.5 py-1 text-[10px] font-extrabold text-white backdrop-blur-sm">
                        {t('جارٍ التحميل…', 'Loading…')}
                      </span>
                    ) : count > 0 ? (
                      <span className="absolute end-3 top-3 rounded-lg bg-ink/75 px-2.5 py-1 text-[10px] font-extrabold text-white backdrop-blur-sm">
                        {count} {t('مهنة', 'trades')}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="text-base font-extrabold leading-snug text-ink transition-colors group-hover:text-brand sm:text-lg">
                      {lang === 'ar' ? cat.nameAr : cat.nameEn}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
                      {lang === 'ar' ? cat.descriptionAr : cat.descriptionEn}
                    </p>
                    <span className="mt-4 inline-flex h-10 items-center gap-1.5 self-start rounded-xl bg-brand px-3.5 text-xs font-extrabold text-white transition-colors group-hover:bg-brand-dark">
                      {t('استكشف الخدمات', 'Explore services')}
                      <Arrow className="size-3.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="relative overflow-hidden border-y border-line bg-surface section-pad">
        <div
          aria-hidden
          className="pointer-events-none absolute -start-24 top-0 size-72 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -end-16 bottom-0 size-56 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="container-page relative">
          <div className="mb-3 flex items-center gap-2 text-accent">
            <Wrench className="size-5" />
            <p className="text-xs font-extrabold tracking-[0.16em]">
              {t('الأكثر طلبًا', 'Most requested')}
            </p>
          </div>
          <SectionHeading
            title={t(
              'خدمات الناس بتدور عليها في المملكة',
              'Services people look for in Saudi Arabia',
            )}
            description={t(
              'أدلة عملية للمهن الأكثر بحثًا — افهم نطاق العمل قبل ما تبدأ.',
              'Practical guides for the most searched trades — understand the scope before you start.',
            )}
          />

          <div className="mt-7 grid gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {popular.map((service, index) => {
              const Icon = getServiceIcon(service.slug, service.categorySlug)
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-cream/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-cream hover:shadow-[0_16px_40px_rgba(23,25,22,0.08)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={lang === 'ar' ? service.nameAr : service.nameEn}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                    <span className="absolute start-3 top-3 inline-flex size-9 items-center justify-center rounded-xl bg-white/95 text-brand shadow-sm ring-1 ring-black/5">
                      <Icon className="size-5" />
                    </span>
                    <span className="absolute end-3 top-3 rounded-lg bg-ink/70 px-2 py-1 text-[10px] font-extrabold tracking-wide text-white backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                    <h3 className="text-base font-extrabold leading-snug text-ink transition-colors group-hover:text-brand sm:text-lg">
                      {lang === 'ar' ? service.nameAr : service.nameEn}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted line-clamp-2">
                      {lang === 'ar' ? service.shortAr : service.shortEn}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-extrabold text-accent">
                      {t('اقرأ الدليل', 'Read the guide')}
                      <Arrow className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-7 flex justify-center sm:mt-8">
            <Link
              to="/services"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(45,90,61,0.25)] transition-transform hover:scale-[1.02] hover:bg-brand-dark"
            >
              {t('استكشف كل المهن', 'Explore all trades')}
              <Arrow className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow={t('التغطية المحلية', 'Local coverage')}
            title={t('ساعدني في مدينتك', 'Saedni in your city')}
            description={t(
              'اكتشف المعلومات المتعلقة بالخدمات والمهن في الرياض، جدة، مكة المكرمة، المدينة المنورة، الدمام، الخبر، القصيم، حائل، تبوك، عسير، جازان وغيرها من مدن المملكة.',
              'Discover service and trade information in Riyadh, Jeddah, Makkah, Madinah, Dammam, Khobar, Qassim, Hail, Tabuk, Asir, Jazan and more Saudi cities.',
            )}
          />
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                to={`/locations/${city.slug}`}
                className="group relative overflow-hidden rounded-xl border-2 border-line"
              >
                <img
                  src={city.image}
                  alt={lang === 'ar' ? city.nameAr : city.nameEn}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:aspect-[5/6]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 border-t-2 border-accent p-2.5 text-white sm:p-4">
                  <div className="mb-0.5 inline-flex items-center gap-1 text-[10px] text-white/70 sm:mb-1 sm:text-xs">
                    <MapPin className="size-3 sm:size-3.5" />
                    <span className="truncate">{lang === 'ar' ? city.regionAr : city.regionEn}</span>
                  </div>
                  <h3 className="text-base font-extrabold sm:text-xl">
                    {lang === 'ar' ? city.nameAr : city.nameEn}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/locations"
              className="inline-flex h-11 items-center gap-1 text-sm font-bold text-accent hover:text-brand"
            >
              {t('اختر مدينتك', 'Choose your city')}
              <Arrow className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before you start */}
      <section className="border-y border-line bg-surface section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-brand">
              <Users className="size-5" />
              <p className="text-xs font-bold tracking-wide uppercase">
                {t('قبل التنفيذ', 'Before execution')}
              </p>
            </div>
            <h2 className="heading-section">
              {t('قبل ما تبدأ أي خدمة', 'Before you start any service')}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {t(
                'اختيار مقدم الخدمة قرار مهم. لذلك نوفر لك محتوى يساعدك على فهم طبيعة العمل، والأسئلة التي ينبغي طرحها، والنقاط التي يجب الاتفاق عليها قبل بدء التنفيذ.',
                'Choosing a provider is an important decision. That is why we give you content that helps you understand the nature of the work, the questions to ask, and the points to agree on before execution starts.',
              )}
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted">
              {[
                t('فهم طبيعة العمل ونطاق الخدمة.', 'Understand the nature of work and service scope.'),
                t('معرفة الأسئلة المهمة قبل الاتفاق.', 'Know the key questions before agreeing.'),
                t('تجنب الأخطاء الشائعة في التنفيذ.', 'Avoid common execution mistakes.'),
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-2 border-accent bg-accent-soft/45 p-5 sm:p-7">
            <p className="text-xs font-bold tracking-wide text-brand uppercase">
              {t('ابدأ من هنا', 'Start here')}
            </p>
            <p className="mt-3 text-xl font-extrabold leading-snug text-ink">
              {t(
                'استكشف الخدمات أو اقرأ الأدلة قبل ما تقرر.',
                'Explore services or read the guides before you decide.',
              )}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-brand px-4 text-sm font-bold text-white hover:bg-brand-dark"
              >
                {t('استكشف الخدمات', 'Explore services')}
              </Link>
              <Link
                to="/about"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-brand px-4 text-sm font-bold text-brand hover:bg-brand hover:text-white"
              >
                {t('عن ساعدني', 'About Saedni')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guides — only when articles exist */}
      {recentArticles.length > 0 ? (
        <section className="section-pad">
          <div className="container-page">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <div className="mb-3 flex items-center gap-2 text-accent">
                  <BookOpen className="size-5 shrink-0" />
                  <p className="text-xs font-bold tracking-wide uppercase">
                    {t('مقالات', 'Articles')}
                  </p>
                </div>
                <SectionHeading
                  title={t('مقالات تساعدك قبل التنفيذ', 'Articles that help before execution')}
                  description={t(
                    'نكتب عن الأخطاء الشائعة والتجهيز قبل التنفيذ — عشان الباحث يفهم، والصفحة تبقى مفيدة.',
                    'We write about common mistakes and prep before work — so searchers understand and pages stay useful.',
                  )}
                />
              </div>
              <Link
                to="/blog"
                className="inline-flex h-11 w-full items-center justify-center gap-1 rounded-lg border-2 border-brand bg-brand px-4 text-sm font-bold text-white hover:bg-brand-dark sm:w-auto"
              >
                {t('كل الأدلة', 'All guides')}
                <Arrow className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {recentArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
