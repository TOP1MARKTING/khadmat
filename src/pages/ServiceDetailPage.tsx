import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getCategory, getRelatedServices, getService } from '@/data/services'
import { cities } from '@/data/cities'
import { getArticlesByService } from '@/data/blog'
import { Button } from '@/components/ui/Button'
import { RelatedArticles } from '@/components/blog/RelatedArticles'
import { NotFoundPage } from './NotFoundPage'

export function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const { t, lang, isAr } = useLanguage()
  const service = getService(serviceSlug || '')
  const category = service ? getCategory(service.categorySlug) : undefined
  const related = service ? getRelatedServices(service.slug) : []
  const articles = service ? getArticlesByService(service.slug) : []

  usePageMeta({
    titleAr: service ? `${service.nameAr} | ساعدني` : 'خدمة غير موجودة | ساعدني',
    titleEn: service ? `${service.nameEn} | Saedni` : 'Service not found | Saedni',
    descriptionAr: service?.shortAr || '',
    descriptionEn: service?.shortEn || '',
    canonicalPath: service ? `/services/${service.slug}` : undefined,
  })

  if (!service) return <NotFoundPage />

  return (
    <div className="section-pad">
      <div className="container-page">

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {category && (
              <p className="eyebrow mb-3">
                {lang === 'ar' ? category.nameAr : category.nameEn}
              </p>
            )}
            <h1 className="heading-display">
              {lang === 'ar' ? service.nameAr : service.nameEn}
            </h1>
            <p className="body-lead mt-4">
              {lang === 'ar' ? service.introAr : service.introEn}
            </p>
            <div className="mt-8 overflow-hidden rounded-md border border-line">
              <img
                src={service.image}
                alt={lang === 'ar' ? service.nameAr : service.nameEn}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <h2 className="mt-10 text-xl font-semibold">
              {t('أنواع الأعمال ضمن هذه الخدمة', 'Work types within this service')}
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {(lang === 'ar' ? service.typesAr : service.typesEn).map((type) => (
                <li key={type} className="rounded-md border border-line bg-surface px-4 py-3 text-sm">
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-md border border-line bg-cream p-5">
              <h2 className="font-semibold text-ink">
                {t('اختر مدينة للتغطية المحلية', 'Choose a city for local coverage')}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {t(
                  'كل رابط يفتح صفحة SEO قابلة لإعادة الاستخدام لنفس الخدمة داخل المدينة.',
                  'Each link opens a reusable SEO page for this service inside the city.',
                )}
              </p>
              <div className="mt-4 space-y-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/sa/${city.regionSlug}/${city.slug}/${service.slug}`}
                    className="flex items-center justify-between rounded-md border border-line bg-surface px-3 py-2.5 text-sm hover:border-brand/30"
                  >
                    <span>{lang === 'ar' ? city.nameAr : city.nameEn}</span>
                    <span className="text-brand">{isAr ? '←' : '→'}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-line bg-surface p-5">
              <h2 className="font-semibold">
                {t('أجر صفحة هذه المهنة', 'Rent a page for this trade')}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {t(
                  'بدل موقع كامل: أجّر صفحة المهنة في مدينتك شهريًا واستقبل الاستفسارات.',
                  'Instead of a full website: rent this trade page in your city monthly and receive inquiries.',
                )}
              </p>
              <Link to="/rent-a-page" className="mt-4 block">
                <Button className="w-full" type="button">
                  {t('شوف الصفحات المتاحة', 'See available pages')}
                </Button>
              </Link>
            </div>
          </aside>
        </div>

        {(lang === 'ar' ? service.faqAr : service.faqEn).length > 0 && (
          <section className="mt-14">
            <h2 className="heading-section">{t('أسئلة شائعة', 'Frequently asked questions')}</h2>
            <div className="mt-6 divide-y divide-line rounded-md border border-line">
              {(lang === 'ar' ? service.faqAr : service.faqEn).map((item) => (
                <details key={item.q} className="group px-5 py-4">
                  <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
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
          titleAr={`مدونة ${service.nameAr}`}
          titleEn={`${service.nameEn} blog`}
        />

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="heading-section">{t('مهن ذات صلة', 'Related trades')}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="rounded-md border border-line p-4 hover:border-brand/30"
                >
                  <h3 className="font-medium">{lang === 'ar' ? item.nameAr : item.nameEn}</h3>
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
