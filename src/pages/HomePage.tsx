import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HardHat,
  MapPin,
  Users,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getFeaturedCities } from '@/data/cities'
import { categories, getPopularServices } from '@/data/services'
import { getRecentArticles } from '@/data/blog'
import { HeroBackground, HeroSlideDots } from '@/components/home/HeroBackground'
import { ServiceSearch } from '@/components/home/ServiceSearch'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function HomePage() {
  const { t, lang, isAr } = useLanguage()
  const Arrow = isAr ? ArrowLeft : ArrowRight
  const featuredCities = getFeaturedCities()
  const popular = getPopularServices().slice(0, 6)
  const recentArticles = getRecentArticles(3)
  const [heroIndex, setHeroIndex] = useState(0)
  const onHeroIndex = useCallback((i: number) => setHeroIndex(i), [])

  usePageMeta({
    titleAr: 'ساعدني | نساعدك تلاقي الخدمة المناسبة في المملكة العربية السعودية',
    titleEn: 'Saedni | Find the right local trade info across Saudi Arabia',
    descriptionAr:
      'ساعدني يساعدك تلاقي الخدمة المناسبة في مدينتك داخل المملكة العربية السعودية — سباكة، بلاط، مقاولات، نقل عفش وغيرها بمعلومة واضحة ومفيدة.',
    descriptionEn:
      'Saedni helps you find the right service in your city across Saudi Arabia — plumbing, tiling, contracting, moving and more with clear, useful information.',
    canonicalPath: '/',
  })

  return (
    <>
      {/* Hero: full portrait on phone with per-image gradients; desktop uses center crop */}
      <section className="relative isolate overflow-x-hidden border-b-4 border-accent">
        <div className="relative min-h-[100dvh] w-full sm:min-h-0 sm:absolute sm:inset-0 md:min-h-[560px] lg:min-h-[640px]">
          <HeroBackground onIndexChange={onHeroIndex} />

          {/* Mobile UI over the photo — compact so the image shows more */}
          <div className="absolute inset-0 flex flex-col justify-end px-3.5 pb-4 pt-16 sm:hidden">
            <div className="mx-auto w-full max-w-md text-white">
              <p className="mb-1.5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/20 bg-ink/35 px-2.5 py-1 text-[9px] font-bold tracking-wide text-accent-soft backdrop-blur-md">
                <HardHat className="size-3 shrink-0" />
                <span className="leading-snug">{t('السعودية — شغل وخدمات حقيقية', 'Saudi Arabia — real trades')}</span>
              </p>
              <h1 className="text-[1.85rem] font-extrabold leading-[1.08] drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)]">
                {t('ساعدني', 'Saedni')}
              </h1>
              <p className="mt-1.5 max-w-sm text-[12px] font-semibold leading-snug text-white/92 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                {t(
                  'نساعدك تلاقي الخدمة المناسبة في مدينتك… بسهولة ووضوح.',
                  'We help you find the right service in your city… easily and clearly.',
                )}
              </p>
              <div className="mt-2.5">
                <ServiceSearch variant="hero" />
                <HeroSlideDots index={heroIndex} className="mt-2.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop / tablet content */}
        <div className="relative hidden sm:block sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-24">
          <div className="container-page">
            <div className="max-w-3xl text-white">
              <p className="reveal mb-4 inline-flex max-w-full items-center gap-2 border border-accent/50 bg-accent/15 px-3 py-1.5 text-[11px] font-bold tracking-[0.16em] text-accent-soft uppercase">
                <HardHat className="size-3.5 shrink-0" />
                <span className="leading-snug">
                  {t('المملكة العربية السعودية — شغل وخدمات حقيقية', 'Kingdom of Saudi Arabia — real local trades')}
                </span>
              </p>
              <h1 className="reveal reveal-delay-1 text-5xl font-extrabold leading-[1.05] drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] lg:text-6xl">
                {t('ساعدني', 'Saedni')}
              </h1>
              <p className="reveal reveal-delay-2 mt-5 max-w-xl text-2xl font-bold leading-snug text-white/95">
                {t(
                  'نساعدك تلاقي الخدمة المناسبة في مدينتك… بسهولة ووضوح.',
                  'We help you find the right service in your city… easily and clearly.',
                )}
              </p>
              <p className="reveal reveal-delay-3 mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                {t(
                  'صفحات وأدلة عملية عن السباكة والبلاط والمقاولات والنقل وغيرها في مدن المملكة العربية السعودية — عشان توصل لمعلومة تفيدك قبل ما تطلب.',
                  'Practical pages and guides about plumbing, tiling, contracting, moving and more across Saudi cities — so you get useful information before you ask.',
                )}
              </p>
            </div>
            <div className="reveal reveal-delay-3 mt-9 max-w-3xl">
              <ServiceSearch variant="hero" />
              <HeroSlideDots index={heroIndex} className="mt-5" />
            </div>
          </div>
        </div>
      </section>

      {/* People-first strip */}
      <section className="border-b border-line bg-surface">
        <div className="container-page grid md:grid-cols-2">
          <div className="border-b border-line py-7 md:border-b-0 md:border-e md:py-10 md:pe-10">
            <div className="mb-2.5 flex items-center gap-2 text-brand">
              <Users className="size-5 shrink-0" />
              <p className="text-xs font-bold tracking-wide uppercase">
                {t('لما تحتاج خدمة', 'When you need a service')}
              </p>
            </div>
            <h2 className="text-lg font-extrabold leading-snug text-ink sm:text-xl">
              {t('اعرف نوع الشغل قبل ما تطلب', 'Understand the work before you ask')}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t(
                'مقالات وصفحات توضحلك نطاق الخدمة في مدينتك — بوضوح ومن غير تشويش.',
                'Guides and pages that clarify the service scope in your city — clearly, without noise.',
              )}
            </p>
          </div>
          <div className="py-7 md:py-10 md:ps-10">
            <div className="mb-2.5 flex items-center gap-2 text-accent">
              <MapPin className="size-5 shrink-0" />
              <p className="text-xs font-bold tracking-wide uppercase">
                {t('في مدن المملكة', 'Across Saudi cities')}
              </p>
            </div>
            <h2 className="text-lg font-extrabold leading-snug text-ink sm:text-xl">
              {t('دور على الخدمة في مدينتك', 'Find the service in your city')}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t(
                'اختَر المهنة والمدينة، واقرأ اللي يفيدك عشان توصل للخدمة المناسبة عندك.',
                'Pick the trade and city, read what helps you, and reach the right local service.',
              )}
            </p>
            <Link
              to="/services"
              className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-bold text-accent hover:text-brand"
            >
              {t('تصفّح المهن والمدن', 'Browse trades & cities')}
              <Arrow className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Work categories */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mb-3 work-rule w-16" />
          <SectionHeading
            eyebrow={t('مجالات الشغل', 'Work fields')}
            title={t('اختَر نوع الشغل', 'Choose the type of work')}
            description={t(
              'كل قسم يفتح مهن ومقالات وصفحات مدن مرتبطة بنفس المجال.',
              'Each section opens related trades, articles, and city pages.',
            )}
          />
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.slug} to={`/services?category=${cat.slug}`} className="card-work group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={lang === 'ar' ? cat.nameAr : cat.nameEn}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                    <h3 className="text-base font-extrabold sm:text-lg">
                      {lang === 'ar' ? cat.nameAr : cat.nameEn}
                    </h3>
                  </div>
                </div>
                <div className="p-3.5 sm:p-4">
                  <p className="text-sm leading-relaxed text-muted line-clamp-3">
                    {lang === 'ar' ? cat.descriptionAr : cat.descriptionEn}
                  </p>
                  <span className="mt-2.5 inline-flex min-h-10 items-center gap-1 text-sm font-bold text-brand sm:mt-3">
                    {t('شوف المهن', 'See trades')}
                    <Arrow className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular trades list - workshop catalog feel */}
      <section className="border-y border-line bg-surface section-pad">
        <div className="container-page">
          <div className="mb-3 flex items-center gap-2 text-brand">
            <Wrench className="size-5" />
            <p className="text-xs font-bold tracking-wide uppercase">
              {t('الأكثر طلبًا', 'Most requested')}
            </p>
          </div>
          <SectionHeading
            title={t('شغل الناس بتدور عليه في المملكة العربية السعودية', 'Trades people search for in Saudi Arabia')}
          />
          <div className="mt-6 overflow-hidden rounded-xl border-2 border-line bg-cream sm:mt-8">
            {popular.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`flex items-start justify-between gap-3 px-3.5 py-3.5 transition-colors hover:bg-surface active:bg-surface sm:gap-4 sm:px-5 sm:py-4 ${
                  index !== 0 ? 'border-t border-line' : ''
                }`}
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center border border-accent/40 bg-accent-soft text-xs font-extrabold text-brand">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-ink">
                      {lang === 'ar' ? service.nameAr : service.nameEn}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {lang === 'ar' ? service.shortAr : service.shortEn}
                    </p>
                  </div>
                </div>
                <span className="hidden shrink-0 text-sm font-bold text-accent sm:inline">
                  {t('تفاصيل', 'Details')}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog = work guides */}
      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <BookOpen className="size-5 shrink-0" />
                <p className="text-xs font-bold tracking-wide uppercase">
                  {t('أدلة الشغل', 'Work guides')}
                </p>
              </div>
              <SectionHeading
                title={t('مقالات من واقع الشغل', 'Articles from real trade practice')}
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

      {/* Cities */}
      <section className="border-t border-line bg-surface section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow={t('التغطية', 'Coverage')}
            title={t('مدن الشغل في المملكة العربية السعودية', 'Work cities across Saudi Arabia')}
            description={t(
              'كل مدينة لها صفحات مهن مستقلة عشان البحث المحلي يكون أدق.',
              'Each city has separate trade pages so local search stays precise.',
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
        </div>
      </section>

      {/* Clarity / honesty */}
      <section className="section-pad">
        <div className="container-page grid gap-4 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="rounded-xl border-2 border-line bg-surface p-5 sm:p-8">
            <p className="eyebrow mb-3">{t('وضوح ساعدني', 'How Saedni works')}</p>
            <h2 className="heading-section">
              {t('هدفنا إنك تلاقي اللي تحتاجه في مدينتك', 'Our goal is helping you find what you need in your city')}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted sm:mt-6">
              {[
                t('صفحات وأدلة عن المهن في مدن المملكة العربية السعودية.', 'Pages and guides about trades across Saudi Arabia cities.'),
                t('معلومة واضحة تساعدك تفهم الشغل قبل ما تطلب.', 'Clear information that helps you understand the work before you ask.'),
                t('اختيار المهنة والمدينة يوصّلك للصفحة المناسبة لك.', 'Choosing the trade and city takes you to the page that fits you.'),
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-xl border-2 border-accent bg-accent-soft/50 p-5 sm:p-8">
            <div>
              <p className="text-xs font-bold tracking-wide text-brand uppercase">
                {t('رسالة قصيرة', 'Short note')}
              </p>
              <p className="mt-3 text-xl font-extrabold leading-snug text-ink sm:text-2xl">
                {t(
                  'نساعدك توصل… للخدمة المناسبة في مدينتك.',
                  'We help you reach… the right service in your city.',
                )}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-brand px-4 text-sm font-bold text-white hover:bg-brand-dark"
              >
                {t('دور على خدمة', 'Find a service')}
              </Link>
              <Link
                to="/blog"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-brand px-4 text-sm font-bold text-brand hover:bg-brand hover:text-white"
              >
                {t('اقرأ الأدلة', 'Read guides')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
