import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getCity, cities } from '@/data/cities'
import { getCategory, getRelatedServices, getService } from '@/data/services'
import { getArticlesForLocation } from '@/data/blog'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/forms/ContactForm'
import { RelatedArticles } from '@/components/blog/RelatedArticles'
import { NotFoundPage } from './NotFoundPage'

function locationIntro(
  serviceName: string,
  cityName: string,
  regionName: string,
  isAr: boolean,
) {
  if (isAr) {
    return `دليل معرفي عن ${serviceName} في ${cityName} ضمن ${regionName}. الصفحة تشرح نطاق المهنة والسياق المحلي لتساعدك تفهم الشغل قبل التنفيذ.`
  }
  return `A knowledge guide about ${serviceName} in ${cityName}, ${regionName}. This page explains the trade scope and local context so you understand the work before you start.`
}

export function ServiceLocationPage() {
  const { regionSlug, citySlug, serviceSlug } = useParams()
  const { t, lang, isAr } = useLanguage()
  const city = getCity(citySlug || '')
  const service = getService(serviceSlug || '')
  const category = service ? getCategory(service.categorySlug) : undefined
  const related = service ? getRelatedServices(service.slug, 3) : []
  const articles =
    service && city ? getArticlesForLocation(service.slug, city.slug) : []

  const valid =
    city && service && city.regionSlug === regionSlug

  usePageMeta({
    titleAr:
      valid && city && service
        ? `دليل ${service.nameAr} في ${city.nameAr} | ساعدني`
        : 'صفحة غير موجودة | ساعدني',
    titleEn:
      valid && city && service
        ? `${service.nameEn} guide in ${city.nameEn} | Saedni`
        : 'Page not found | Saedni',
    descriptionAr:
      valid && city && service
        ? `دليل ${service.nameAr} في ${city.nameAr}، ${city.regionAr}. تعرّف على نطاق المهنة والسياق المحلي قبل التنفيذ.`
        : '',
    descriptionEn:
      valid && city && service
        ? `${service.nameEn} guide in ${city.nameEn}, ${city.regionEn}. Learn the trade scope and local context before work starts.`
        : '',
    canonicalPath: undefined,
    robots: 'noindex,nofollow',
  })

  if (!valid || !city || !service) return <NotFoundPage />

  const serviceName = lang === 'ar' ? service.nameAr : service.nameEn
  const cityName = lang === 'ar' ? city.nameAr : city.nameEn
  const regionName = lang === 'ar' ? city.regionAr : city.regionEn

  return (
    <div>
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
            <div>
              {category && (
                <p className="eyebrow mb-3">
                  {lang === 'ar' ? category.nameAr : category.nameEn}
                </p>
              )}
              <h1 className="heading-display">
                {t(
                  `دليل ${service.nameAr} في ${city.nameAr}`,
                  `${service.nameEn} guide in ${city.nameEn}`,
                )}
              </h1>
              <p className="body-lead mt-4">
                {locationIntro(serviceName, cityName, regionName, isAr)}
              </p>
            </div>
            <div className="overflow-hidden rounded-md border border-line">
              <img
                src={service.image}
                alt={t(`${service.nameAr} في ${city.nameAr}`, `${service.nameEn} in ${city.nameEn}`)}
                className="aspect-[16/11] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-page section-pad">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-12">
            <section>
              <h2 className="heading-section">
                {t(`لماذا صفحة ${city.nameAr}؟`, `Why a ${city.nameEn} page?`)}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {lang === 'ar' ? city.descriptionAr : city.descriptionEn}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {lang === 'ar' ? service.introAr : service.introEn}
              </p>
            </section>

            <section>
              <h2 className="heading-section">{t('أنواع الخدمة', 'Service types')}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {(lang === 'ar' ? service.typesAr : service.typesEn).map((type) => (
                  <div key={type} className="rounded-md border border-line px-4 py-3 text-sm">
                    {type}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="heading-section">{t('نطاق التغطية', 'Coverage areas')}</h2>
              <p className="mt-3 text-sm text-muted">
                {t(
                  `التركيز الأساسي داخل ${city.nameAr}، مع ربط مفيد لمدن قريبة في ${city.regionAr}.`,
                  `Primary focus inside ${city.nameEn}, with useful links to nearby cities in ${city.regionEn}.`,
                )}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge tone="brand">{cityName}</Badge>
                {cities
                  .filter((c) => c.regionSlug === city.regionSlug && c.slug !== city.slug)
                  .slice(0, 4)
                  .map((c) => (
                    <Link key={c.slug} to={`/sa/${c.regionSlug}/${c.slug}/${service.slug}`}>
                      <Badge tone="neutral">{lang === 'ar' ? c.nameAr : c.nameEn}</Badge>
                    </Link>
                  ))}
              </div>
            </section>

            <section>
              <h2 className="heading-section">{t('أسئلة شائعة', 'FAQ')}</h2>
              <div className="mt-5 divide-y divide-line rounded-md border border-line">
                {(lang === 'ar' ? service.faqAr : service.faqEn).map((item) => (
                  <details key={item.q} className="px-5 py-4">
                    <summary className="cursor-pointer font-medium">{item.q}</summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
                  </details>
                ))}
                <details className="px-5 py-4">
                  <summary className="cursor-pointer font-medium">
                    {t(
                      `هل الصفحة خاصة بـ ${city.nameAr} فقط؟`,
                      `Is this page specific to ${city.nameEn}?`,
                    )}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(
                      'نعم. كل صفحة مدينة لها صياغة ونطاق مستقل لتبقى مفيدة للبحث المحلي.',
                      'Yes. Each city page has its own framing and scope to stay useful for local search.',
                    )}
                  </p>
                </details>
              </div>
            </section>

            <section>
              <h2 className="heading-section">{t('خدمات ذات صلة', 'Related services')}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/sa/${city.regionSlug}/${city.slug}/${item.slug}`}
                    className="rounded-md border border-line p-4 text-sm hover:border-brand/30"
                  >
                    <span className="font-medium text-ink">
                      {lang === 'ar' ? item.nameAr : item.nameEn}
                    </span>
                    <span className="mt-1 block text-muted">{cityName}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="heading-section">{t('مدن ذات صلة', 'Related cities')}</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {cities
                  .filter((c) => c.slug !== city.slug)
                  .slice(0, 5)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      to={`/locations/${c.slug}`}
                      className="rounded-md border border-line px-3 py-2 text-sm hover:border-brand/30"
                    >
                      {t(`خدمات في ${c.nameAr}`, `Services in ${c.nameEn}`)}
                    </Link>
                  ))}
              </div>
            </section>

            <RelatedArticles
              articles={articles}
              serviceSlug={service.slug}
              titleAr={`مقالات ${service.nameAr}${articles.some((a) => a.citySlug === city.slug) ? ` و${city.nameAr}` : ''}`}
              titleEn={`${service.nameEn} articles${articles.some((a) => a.citySlug === city.slug) ? ` & ${city.nameEn}` : ''}`}
            />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-md border border-line bg-surface p-5 shadow-[var(--shadow-soft)]">
              <Badge tone="sand">{t('مرجع معرفي', 'Knowledge guide')}</Badge>
              <h2 className="mt-3 text-lg font-semibold">
                {t('سؤال عن هذا الدليل؟', 'Question about this guide?')}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {t(
                  'تواصل مع منصة ساعدني بخصوص المحتوى أو استفسار عام — مش دليل حجوزات لمقدمي خدمات.',
                  'Contact the Saedni platform about the content or a general question — this is not a booking directory for providers.',
                )}
              </p>
              <div className="mt-4">
                <ContactForm
                  intent="general"
                  defaultCity={cityName}
                  defaultService={serviceName}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
