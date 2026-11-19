import { Link, useParams } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getCity, cities } from '@/data/cities'
import { getCategory, getRelatedServices, getService } from '@/data/services'
import { digitalAssets } from '@/data/assets'
import { getArticlesForLocation } from '@/data/blog'
import { Button } from '@/components/ui/Button'
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
    return `صفحة محلية عن ${serviceName} في ${cityName} ضمن ${regionName}. نبني محتوى ومقالات مفيدة للمهنة أولًا — من غير اسم شركة وهمي. بيانات أي منشأة تُضاف فقط بعد تأجير حصري موثّق.`
  }
  return `A local page about ${serviceName} in ${cityName}, ${regionName}. We build useful trade content and articles first — with no fake company name. Any business details are added only after a verified exclusive rental.`
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
  const asset = digitalAssets.find(
    (a) => a.serviceSlug === service?.slug && a.citySlug === city?.slug,
  )
  /** Company details only when the page is actually rented — not while still for rent. */
  const hasRentedPartner = asset?.status === 'rented'

  const valid =
    city && service && city.regionSlug === regionSlug

  usePageMeta({
    titleAr:
      valid && city && service
        ? `${service.nameAr} في ${city.nameAr} | ساعدني`
        : 'صفحة غير موجودة | ساعدني',
    titleEn:
      valid && city && service
        ? `${service.nameEn} in ${city.nameEn} | Saedni`
        : 'Page not found | Saedni',
    descriptionAr:
      valid && city && service
        ? `خدمات ${service.nameAr} في ${city.nameAr}، ${city.regionAr}. تعرّف على نطاق التغطية واطلب الاستفسار.`
        : '',
    descriptionEn:
      valid && city && service
        ? `${service.nameEn} services in ${city.nameEn}, ${city.regionEn}. Review coverage and send an inquiry.`
        : '',
    canonicalPath:
      valid && city && service
        ? `/sa/${city.regionSlug}/${city.slug}/${service.slug}`
        : undefined,
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
                  `خدمات ${service.nameAr} الاحترافية في ${city.nameAr}`,
                  `Professional ${service.nameEn} Services in ${city.nameEn}`,
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
              {hasRentedPartner ? (
                <>
                  <Badge tone="success">{t('شريك مؤجّر على الصفحة', 'Rented partner on this page')}</Badge>
                  <h2 className="mt-3 text-lg font-semibold">
                    {t('تواصل بشأن الخدمة', 'Contact about this service')}
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    {t(
                      'تم ربط منشأة مؤهلة بهذه الصفحة بعد اتفاق تأجير. النموذج واجهة فقط حاليًا.',
                      'A qualified business is linked after a rental agreement. Frontend-only form for now.',
                    )}
                  </p>
                  <div className="mt-4">
                    <ContactForm
                      intent="service"
                      defaultCity={cityName}
                      defaultService={serviceName}
                    />
                  </div>
                  <Button variant="whatsapp" className="mt-3 w-full" type="button">
                    <MessageCircle className="size-4" />
                    {t('واتساب الشريك (تجريبي)', 'Partner WhatsApp (demo)')}
                  </Button>
                </>
              ) : (
                <>
                  <Badge tone="sand">{t('محتوى للعميل أولًا', 'Customer content first')}</Badge>
                  <h2 className="mt-3 text-lg font-semibold">
                    {t('محتوى المهنة أولًا', 'Trade content first')}
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    {t(
                      'الصفحة والمقالات بتتبني عشان تفيد الباحث. اسم وشعار أي شركة يظهران لاحقًا عند اتفاق واضح — مش أسماء فاضية.',
                      'The page and articles help searchers first. A company name and logo appear later under a clear agreement — never empty placeholder brands.',
                    )}
                  </p>
                  <div className="mt-4">
                    <ContactForm
                      intent="general"
                      defaultCity={cityName}
                      defaultService={serviceName}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="rounded-md border border-dashed border-sand bg-cream p-5">
              <p className="text-xs font-medium tracking-wide text-brand">
                {t('للمنشآت', 'For businesses')}
              </p>
              <h2 className="mt-2 font-semibold text-ink">
                {t(
                  'عندك نشاط في نفس المهنة داخل هذه المدينة؟',
                  'Do you operate in this trade in this city?',
                )}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {t(
                  'الصفحة والمقالات للجمهور أولًا. فرص التعاون مع المنشآت تُناقش بشكل منفصل.',
                  'The page and articles serve the public first. Business collaboration is discussed separately.',
                )}
              </p>
              <Link
                to="/advertise-with-us"
                className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
              >
                {t('تواصل للشركات', 'Business contact')}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
