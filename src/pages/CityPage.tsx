import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getCity, cities } from '@/data/cities'
import { categories, getPopularServices, services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { NotFoundPage } from './NotFoundPage'

export function CityPage() {
  const { citySlug } = useParams()
  const { t, lang } = useLanguage()
  const city = getCity(citySlug || '')
  const popular = getPopularServices()

  usePageMeta({
    titleAr: city ? `خدمات في ${city.nameAr} | ساعدني` : 'مدينة غير موجودة | ساعدني',
    titleEn: city ? `Services in ${city.nameEn} | Saedni` : 'City not found | Saedni',
    descriptionAr: city?.descriptionAr || '',
    descriptionEn: city?.descriptionEn || '',
    canonicalPath: city ? `/locations/${city.slug}` : undefined,
    image: city?.image,
  })

  if (!city) return <NotFoundPage />

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <img
          src={city.image}
          alt={lang === 'ar' ? city.nameAr : city.nameEn}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="container-page relative py-16 text-white sm:py-20">
          <p className="eyebrow mb-3 !text-sand">
            {lang === 'ar' ? city.regionAr : city.regionEn}
          </p>
          <h1 className="heading-display !text-white">
            {t(`خدمات في ${city.nameAr}`, `Services in ${city.nameEn}`)}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {lang === 'ar' ? city.descriptionAr : city.descriptionEn}
          </p>
        </div>
      </section>

      <div className="container-page section-pad space-y-14">
        <section>
          <SectionHeading
            title={t('فئات الخدمات في المدينة', 'Service categories in this city')}
            description={t(
              'انتقل إلى الصفحات المحلية المرتبطة بهذه المدينة.',
              'Open local pages linked to this city.',
            )}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const catServices = services.filter((s) => s.categorySlug === cat.slug).slice(0, 3)
              return (
                <div key={cat.slug} className="rounded-md border border-line bg-surface p-5">
                  <h2 className="text-lg font-semibold">
                    {lang === 'ar' ? cat.nameAr : cat.nameEn}
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    {lang === 'ar' ? cat.descriptionAr : cat.descriptionEn}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {catServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/sa/${city.regionSlug}/${city.slug}/${s.slug}`}
                          className="text-sm text-brand hover:underline"
                        >
                          {lang === 'ar' ? s.nameAr : s.nameEn}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section>
          <SectionHeading title={t('صفحات محلية مختارة', 'Selected local pages')} />
          <div className="mt-6 divide-y divide-line rounded-md border border-line">
            {popular.map((service) => (
              <Link
                key={service.slug}
                to={`/sa/${city.regionSlug}/${city.slug}/${service.slug}`}
                className="flex items-center justify-between gap-4 px-4 py-4 hover:bg-cream sm:px-5"
              >
                <div>
                  <h3 className="font-medium text-ink">
                    {t(
                      `${service.nameAr} في ${city.nameAr}`,
                      `${service.nameEn} in ${city.nameEn}`,
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {lang === 'ar' ? service.shortAr : service.shortEn}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-brand">{t('فتح', 'Open')}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading title={t('مدن أخرى', 'Other cities')} />
          <div className="mt-6 flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/locations/${c.slug}`}
                  className="rounded-md border border-line px-3 py-2 text-sm hover:border-brand/30"
                >
                  {lang === 'ar' ? c.nameAr : c.nameEn}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
