import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Images, ListOrdered, BookOpen } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getCategory } from '@/data/services'
import { useCms } from '@/context/CmsContext'
import { Button } from '@/components/ui/Button'
import { RelatedArticles } from '@/components/blog/RelatedArticles'
import { NotFoundPage } from './NotFoundPage'

export function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const { t, lang } = useLanguage()
  const { getServiceBySlug, services, publishedArticles } = useCms()
  const service = getServiceBySlug(serviceSlug || '')
  const category = service ? getCategory(service.categorySlug) : undefined
  const related = service
    ? services.filter((s) => s.categorySlug === service.categorySlug && s.slug !== service.slug).slice(0, 4)
    : []
  const articles = service
    ? publishedArticles().filter((a) => a.serviceSlug === service.slug)
    : []
  const cityArticles = articles.filter((a) => a.citySlug)

  usePageMeta({
    titleAr: service ? `${service.nameAr} | دليل العميل | ساعدني` : 'خدمة غير موجودة | ساعدني',
    titleEn: service ? `${service.nameEn} | Customer guide | Saedni` : 'Service not found | Saedni',
    descriptionAr: service?.shortAr || '',
    descriptionEn: service?.shortEn || '',
    canonicalPath: service ? `/services/${service.slug}` : undefined,
  })

  if (!service) return <NotFoundPage />

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
    <div className="section-pad">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.9fr]">
          <div>
            {category && (
              <p className="eyebrow mb-3">
                {lang === 'ar' ? category.nameAr : category.nameEn}
              </p>
            )}
            <h1 className="heading-display">{name}</h1>
            <p className="body-lead mt-4">{intro}</p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <img
                src={service.image}
                alt={name}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            {bodyHtml ? (
              <section className="mt-10">
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
              <section className="mt-12">
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
                      className="overflow-hidden rounded-xl border border-line bg-cream"
                    >
                      <img
                        src={src}
                        alt={name}
                        className="aspect-[4/3] w-full object-cover"
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
                      className="rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-ink"
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
                      className="flex gap-3 rounded-xl border border-line bg-cream/50 px-4 py-3"
                    >
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
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
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {types.map((type) => (
                    <li
                      key={type}
                      className="rounded-xl border border-line bg-surface px-4 py-3 text-sm"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-cream p-5">
              <div className="mb-2 flex items-center gap-2 text-brand">
                <BookOpen className="size-4" />
                <h2 className="font-extrabold text-ink">
                  {t('مقالات هذه المهنة', 'Articles for this trade')}
                </h2>
              </div>
              <p className="text-sm text-muted">
                {t(
                  'مقالات تشرح الخدمة ومميزاتها وتربطها بالمدن — مفيدة للعميل أولًا.',
                  'Articles that explain the service, its benefits, and cities — useful for customers first.',
                )}
              </p>
              {articles.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {articles.slice(0, 5).map((a) => (
                    <li key={a.id}>
                      <Link
                        to={`/blog/${a.slug}`}
                        className="block rounded-xl border border-line bg-surface px-3 py-2.5 text-sm font-bold text-ink hover:border-brand/30 hover:text-brand"
                      >
                        {a.titleAr}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-muted">
                  {t(
                    'قريبًا مقالات إضافية لهذه المهنة.',
                    'More articles for this trade are coming soon.',
                  )}
                </p>
              )}
              <Link
                to={`/blog?service=${service.slug}`}
                className="mt-4 inline-block text-sm font-bold text-brand hover:underline"
              >
                {t('كل مقالات المهنة', 'All trade articles')}
              </Link>
            </div>

            {cityArticles.length > 0 ? (
              <div className="rounded-2xl border border-line bg-surface p-5">
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

            <div className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="font-extrabold text-ink">
                {t('للمنشآت لاحقًا', 'For businesses later')}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {t(
                  'الموقع مفيد للعملاء أولًا. عند الظهور يمكن إضافة اسم وشعار شركة داخل المقال باتفاق واضح.',
                  'The site helps customers first. When visibility grows, a company name and logo can be added inside an article under a clear agreement.',
                )}
              </p>
              <Link to="/rent-a-page" className="mt-4 block">
                <Button className="w-full rounded-xl" type="button">
                  {t('شوف فرص الصفحات', 'See page opportunities')}
                </Button>
              </Link>
            </div>
          </aside>
        </div>

        {faq.length > 0 && (
          <section className="mt-14">
            <h2 className="heading-section">{t('أسئلة شائعة', 'Frequently asked questions')}</h2>
            <div className="mt-6 divide-y divide-line rounded-2xl border border-line">
              {faq.map((item) => (
                <details key={item.q} className="group px-5 py-4">
                  <summary className="cursor-pointer list-none font-bold text-ink marker:content-none">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
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
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="rounded-2xl border border-line p-4 hover:border-brand/30"
                >
                  <h3 className="font-bold">{lang === 'ar' ? item.nameAr : item.nameEn}</h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {lang === 'ar' ? item.shortAr : item.shortEn}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
