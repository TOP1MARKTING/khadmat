import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Images,
  ListOrdered,
  Sparkles,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getCategory } from '@/data/services'
import { getServiceIcon } from '@/lib/serviceIcons'
import { useCms } from '@/context/CmsContext'
import { RelatedArticles } from '@/components/blog/RelatedArticles'
import { JsonLd } from '@/components/seo/JsonLd'
import { absoluteUrl } from '@/lib/siteConfig'
import { NotFoundPage } from './NotFoundPage'

export function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const { t, lang, isAr } = useLanguage()
  const Arrow = isAr ? ArrowLeft : ArrowRight
  const { getServiceBySlug, publishedServices, publishedArticles, cmsReady } = useCms()
  const service = getServiceBySlug(serviceSlug || '')
  const isPublic = Boolean(service && service.status !== 'draft')
  const category = service ? getCategory(service.categorySlug) : undefined
  const Icon = service
    ? getServiceIcon(service.slug, service.categorySlug)
    : Sparkles
  const related = service
    ? publishedServices()
        .filter((s) => s.categorySlug === service.categorySlug && s.slug !== service.slug)
        .slice(0, 4)
    : []
  const articles = service
    ? publishedArticles().filter((a) => a.serviceSlug === service.slug)
    : []
  const cityArticles = articles.filter((a) => a.citySlug)

  usePageMeta({
    titleAr: isPublic
      ? `${service!.metaTitleAr || service!.nameAr} | دليل العميل | ساعدني`
      : cmsReady
        ? 'خدمة غير موجودة | ساعدني'
        : 'جارٍ التحميل | ساعدني',
    titleEn: isPublic
      ? `${service!.nameEn} | Customer guide | Saedni`
      : cmsReady
        ? 'Service not found | Saedni'
        : 'Loading | Saedni',
    descriptionAr: isPublic
      ? service!.metaDescriptionAr || service!.shortAr || ''
      : '',
    descriptionEn: isPublic ? service!.shortEn || '' : '',
    canonicalPath: isPublic ? `/services/${service!.slug}` : undefined,
    image: isPublic ? service!.image : undefined,
    robots: isPublic ? 'index,follow' : 'noindex,nofollow',
  })

  if (!cmsReady) {
    return (
      <div className="container-page flex min-h-[50vh] items-center justify-center py-20">
        <p className="text-sm font-bold text-muted">{t('جارٍ التحميل…', 'Loading…')}</p>
      </div>
    )
  }

  if (!isPublic || !service) return <NotFoundPage />

  const name = lang === 'ar' ? service.nameAr : service.nameEn
  const intro = lang === 'ar' ? service.introAr : service.introEn
  const bodyHtml =
    (lang === 'ar' ? service.bodyAr : service.bodyEn) ||
    (lang === 'ar' ? service.bodyEn : service.bodyAr) ||
    ''
  const benefits =
    (lang === 'ar' ? service.benefitsAr : service.benefitsEn)?.length
      ? lang === 'ar'
        ? service.benefitsAr
        : service.benefitsEn
      : lang === 'ar'
        ? service.benefitsEn
        : service.benefitsAr
  const steps =
    (lang === 'ar' ? service.stepsAr : service.stepsEn)?.length
      ? lang === 'ar'
        ? service.stepsAr
        : service.stepsEn
      : lang === 'ar'
        ? service.stepsEn
        : service.stepsAr
  const types = lang === 'ar' ? service.typesAr : service.typesEn
  const faq = lang === 'ar' ? service.faqAr : service.faqEn
  const gallery = [service.image, ...(service.gallery || [])].filter(
    (src, i, arr) => src && arr.indexOf(src) === i,
  )

  return (
    <div>
      <JsonLd
        id={`service-${service.slug}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: service.nameAr,
          description: service.metaDescriptionAr || service.shortAr,
          url: absoluteUrl(`/services/${service.slug}`),
          inLanguage: 'ar-SA',
          isPartOf: { '@type': 'WebSite', name: 'ساعدني', url: absoluteUrl('/') },
        }}
      />
      {/* Modern photo hero */}
      <section className="relative isolate min-h-[320px] overflow-hidden border-b border-line sm:min-h-[420px]">
        <img
          src={service.image}
          alt={name}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,25,22,0.35)_0%,rgba(23,25,22,0.55)_45%,rgba(23,25,22,0.88)_100%)]" />
        <div className="relative container-page flex min-h-[320px] flex-col justify-end pb-10 pt-24 sm:min-h-[420px] sm:pb-14 sm:pt-28">
          <div className="max-w-3xl text-white">
            {category ? (
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wide text-accent-soft backdrop-blur-md">
                <Icon className="size-3.5" />
                {lang === 'ar' ? category.nameAr : category.nameEn}
              </p>
            ) : null}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {name}
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white/85 sm:text-base">
              {intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                to={`/blog?service=${service.slug}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-accent px-4 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(166,123,75,0.35)] hover:brightness-95"
              >
                <BookOpen className="size-4" />
                {t('مقالات المهنة', 'Trade articles')}
              </Link>
              <Link
                to="/services"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-4 text-sm font-extrabold text-white backdrop-blur-md hover:bg-white/18"
              >
                {t('كل المهن', 'All trades')}
                <Arrow className="size-3.5 opacity-80" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-pad">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.9fr]">
            <div>
              {bodyHtml ? (
                <section className="rounded-3xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-7">
                  <h2 className="heading-section">
                    {t('شرح وافٍ للشغل', 'Clear explanation of the work')}
                  </h2>
                  <div
                    className="prose-article mt-5 space-y-4 text-base leading-relaxed text-ink/90 [&_p]:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: bodyHtml }}
                  />
                </section>
              ) : null}

              {gallery.length > 1 ? (
                <section className="mt-10">
                  <div className="mb-5 flex items-center gap-2 text-brand">
                    <Images className="size-5" />
                    <h2 className="text-xl font-extrabold text-ink">
                      {t('صور تفيد العميل', 'Photos that help the customer')}
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {gallery.slice(0, 6).map((src) => (
                      <div
                        key={src}
                        className="overflow-hidden rounded-2xl border border-line bg-cream shadow-[var(--shadow-soft)]"
                      >
                        <img
                          src={src}
                          alt={name}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {benefits && benefits.length > 0 ? (
                <section className="mt-12">
                  <div className="mb-5 flex items-center gap-2 text-brand">
                    <CheckCircle2 className="size-5" />
                    <h2 className="text-xl font-extrabold text-ink">
                      {t('مميزات تهمك كعميل', 'Benefits that matter to you')}
                    </h2>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {benefits.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-line bg-gradient-to-b from-cream to-surface px-4 py-3.5 text-sm leading-relaxed text-ink shadow-[var(--shadow-soft)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {steps && steps.length > 0 ? (
                <section className="mt-12">
                  <div className="mb-5 flex items-center gap-2 text-brand">
                    <ListOrdered className="size-5" />
                    <h2 className="text-xl font-extrabold text-ink">
                      {t('مراحل الشغل باختصار', 'Work stages in brief')}
                    </h2>
                  </div>
                  <ol className="space-y-3">
                    {steps.map((step, i) => (
                      <li
                        key={step}
                        className="flex gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5 shadow-[var(--shadow-soft)]"
                      >
                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-white">
                          {i + 1}
                        </span>
                        <span className="pt-1 text-sm font-medium leading-relaxed text-ink">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}

              {types.length > 0 ? (
                <section className="mt-12">
                  <h2 className="text-xl font-extrabold text-ink">
                    {t('أنواع الأعمال ضمن هذه المهنة', 'Work types within this trade')}
                  </h2>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {types.map((type) => (
                      <li
                        key={type}
                        className="rounded-2xl border border-line bg-surface px-3 py-3 text-[13px] font-medium leading-snug sm:px-4 sm:text-sm"
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-[var(--shadow-lift)]">
                <div className="border-b border-line bg-gradient-to-l from-brand to-brand-dark px-5 py-4 text-white">
                  <div className="flex items-center gap-2">
                    <BookOpen className="size-4 text-sand" />
                    <h2 className="font-extrabold">
                      {t('مقالات هذه المهنة', 'Articles for this trade')}
                    </h2>
                  </div>
                  <p className="mt-1.5 text-xs text-white/70">
                    {t(
                      'مقالات تشرح الخدمة وتربطها بالمدن — مفيدة للعميل أولًا.',
                      'Articles that explain the service and cities — useful first.',
                    )}
                  </p>
                </div>
                <div className="p-4">
                  {articles.length > 0 ? (
                    <ul className="space-y-2">
                      {articles.slice(0, 5).map((a) => (
                        <li key={a.id}>
                          <Link
                            to={`/blog/${a.slug}`}
                            className="block rounded-xl border border-line bg-cream/40 px-3 py-2.5 text-sm font-bold text-ink transition-colors hover:border-brand/30 hover:bg-cream hover:text-brand"
                          >
                            {a.titleAr}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted">
                      {t(
                        'قريبًا مقالات إضافية لهذه المهنة.',
                        'More articles for this trade are coming soon.',
                      )}
                    </p>
                  )}
                  <Link
                    to={`/blog?service=${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-accent hover:underline"
                  >
                    {t('كل مقالات المهنة', 'All trade articles')}
                    <Arrow className="size-3.5" />
                  </Link>
                </div>
              </div>

              {cityArticles.length > 0 ? (
                <div className="rounded-3xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)]">
                  <h2 className="font-extrabold text-ink">
                    {t('مقالات مرتبطة بمدن', 'City-focused articles')}
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    {t(
                      'المدينة تظهر من خلال المقالات فقط — مش قائمة تغطية منفصلة.',
                      'Cities appear through articles only — not a separate coverage list.',
                    )}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {cityArticles.slice(0, 5).map((a) => (
                      <li key={a.id}>
                        <Link
                          to={`/blog/${a.slug}`}
                          className="block rounded-xl border border-line bg-cream/40 px-3 py-2.5 text-sm font-bold text-ink hover:border-brand/30 hover:text-brand"
                        >
                          {a.titleAr}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>

          {faq.length > 0 && (
            <section className="mt-14">
              <h2 className="heading-section">{t('أسئلة شائعة', 'Frequently asked questions')}</h2>
              <div className="mt-6 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface shadow-[var(--shadow-soft)]">
                {faq.map((item) => (
                  <details key={item.q} className="group open:bg-cream/50">
                    <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-4 marker:content-none sm:px-5 [&::-webkit-details-marker]:hidden">
                      <span className="flex-1 text-start text-sm font-extrabold leading-snug text-ink sm:text-base">
                        {item.q}
                      </span>
                      <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-xl border border-line bg-cream text-brand transition-transform duration-200 group-open:rotate-180 group-open:border-brand/30 group-open:bg-brand group-open:text-white">
                        <ChevronDown className="size-4" />
                      </span>
                    </summary>
                    <p className="border-t border-line/70 px-4 pb-4 pt-3 text-sm leading-relaxed text-muted sm:px-5">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <RelatedArticles
            articles={articles}
            serviceSlug={service.slug}
            titleAr={`مقالات تساعدك تفهم ${service.nameAr}`}
            titleEn={`Articles that help you understand ${service.nameEn}`}
          />

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="heading-section">{t('مهن ذات صلة', 'Related trades')}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((item) => {
                  const RelIcon = getServiceIcon(item.slug, item.categorySlug)
                  return (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-cream">
                        <img
                          src={item.image}
                          alt=""
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <span className="mb-2 inline-flex size-8 items-center justify-center rounded-lg bg-brand/8 text-brand">
                          <RelIcon className="size-4" />
                        </span>
                        <h3 className="font-extrabold text-ink">
                          {lang === 'ar' ? item.nameAr : item.nameEn}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-sm text-muted">
                          {lang === 'ar' ? item.shortAr : item.shortEn}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
