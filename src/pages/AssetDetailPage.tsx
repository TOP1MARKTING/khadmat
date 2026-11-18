import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getAsset, statusLabel, tierLabel, tierRangeAr, tierRangeEn } from '@/data/assets'
import { getCity } from '@/data/cities'
import { getService } from '@/data/services'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/forms/ContactForm'
import { NotFoundPage } from './NotFoundPage'

export function AssetDetailPage() {
  const { assetId } = useParams()
  const { t, lang } = useLanguage()
  const asset = getAsset(assetId || '')
  const service = asset ? getService(asset.serviceSlug) : undefined
  const city = asset ? getCity(asset.citySlug) : undefined

  usePageMeta({
    titleAr:
      asset && service && city
        ? `إيجار صفحة ${service.nameAr} في ${city.nameAr} | ساعدني`
        : 'صفحة غير موجودة | ساعدني',
    titleEn:
      asset && service && city
        ? `Rent ${service.nameEn} page in ${city.nameEn} | Saedni`
        : 'Page not found | Saedni',
    descriptionAr: asset?.demoNoteAr || '',
    descriptionEn: asset?.demoNoteEn || '',
    canonicalPath: asset ? `/rent-a-page/${asset.id}` : undefined,
  })

  if (!asset || !service || !city) return <NotFoundPage />

  const canRequest =
    asset.status === 'available_for_rental' || asset.status === 'qualified_for_rental'

  return (
    <div className="section-pad">
      <div className="container-page">

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="brand">{statusLabel[asset.status][lang]}</Badge>
              <Badge tone="neutral">{tierLabel[asset.tier][lang]}</Badge>
              <Badge tone="sand">{t('بيانات تجريبية', 'Demo data')}</Badge>
            </div>
            <h1 className="heading-display mt-4">
              {t(
                `أجر صفحة ${service.nameAr} في ${city.nameAr}`,
                `Rent the ${service.nameEn} page in ${city.nameEn}`,
              )}
            </h1>
            <p className="body-lead mt-4">
              {t(
                'دي صفحة مهنة جاهزة — مش موقع كامل. بتأجّر الظهور التجاري الحصري شهريًا، وملكية الصفحة والدومين والمحتوى تفضل عند المنصة.',
                'This is a ready trade page — not a full website. You rent exclusive commercial presence monthly; page, domain, and content ownership stay with the platform.',
              )}
            </p>
            <p className="mt-3 text-sm text-muted">
              {lang === 'ar' ? asset.demoNoteAr : asset.demoNoteEn}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-line p-4">
                <p className="text-xs text-muted">{t('المهنة', 'Trade')}</p>
                <p className="mt-1 font-medium">{lang === 'ar' ? service.nameAr : service.nameEn}</p>
              </div>
              <div className="rounded-md border border-line p-4">
                <p className="text-xs text-muted">{t('المدينة', 'City')}</p>
                <p className="mt-1 font-medium">
                  {lang === 'ar' ? `${city.nameAr} — ${city.regionAr}` : `${city.nameEn} — ${city.regionEn}`}
                </p>
              </div>
              <div className="rounded-md border border-line p-4">
                <p className="text-xs text-muted">{t('الإيجار الشهري (تجريبي)', 'Monthly rent (demo)')}</p>
                <p className="mt-1 font-medium">
                  {asset.monthlyRentSar.toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-US')} {t('ر.س', 'SAR')}
                </p>
                <p className="mt-1 text-xs text-muted">
                  {lang === 'ar' ? tierRangeAr[asset.tier] : tierRangeEn[asset.tier]}
                </p>
              </div>
              <div className="rounded-md border border-line p-4">
                <p className="text-xs text-muted">{t('معاينة الصفحة العامة', 'Public page preview')}</p>
                <Link
                  to={`/sa/${city.regionSlug}/${city.slug}/${service.slug}`}
                  className="mt-1 inline-block text-sm font-medium text-brand hover:underline"
                >
                  {t('افتح صفحة المهنة × المدينة', 'Open trade × city page')}
                </Link>
              </div>
            </div>

            {asset.performance && (
              <section className="mt-10">
                <h2 className="heading-section">{t('نظرة على الأداء (تجريبي)', 'Performance overview (demo)')}</h2>
                <div className="mt-5 space-y-3">
                  {[
                    lang === 'ar' ? asset.performance.organicVisitsLabelAr : asset.performance.organicVisitsLabelEn,
                    lang === 'ar' ? asset.performance.inquiriesLabelAr : asset.performance.inquiriesLabelEn,
                    lang === 'ar' ? asset.performance.visibilityLabelAr : asset.performance.visibilityLabelEn,
                  ].map((label) => (
                    <div key={label} className="rounded-md border border-dashed border-line bg-cream px-4 py-3 text-sm text-muted">
                      {label}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-10">
              <h2 className="heading-section">{t('شروط التأجير', 'Rental terms')}</h2>
              <ul className="mt-5 space-y-3">
                {(lang === 'ar' ? asset.termsAr : asset.termsEn).map((term) => (
                  <li key={term} className="border-s-2 border-brand/40 ps-3 text-sm text-muted">
                    {term}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="rounded-md border border-line bg-surface p-5 shadow-[var(--shadow-soft)] lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-lg font-semibold">
              {canRequest
                ? t('اطلب تأجير هذه الصفحة', 'Request rental for this page')
                : t('استفسار عن هذه الصفحة', 'Inquire about this page')}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {canRequest
                ? t(
                    'ابعت بيانات منشأتك. الربط الخلفي والدفع هيتموا لاحقًا — دلوقتي واجهة فقط.',
                    'Send your business details. Backend and payment come later — frontend only for now.',
                  )
                : t(
                    'الصفحة مش متاحة للتأجير الفوري حاليًا، لكن ممكن تسجّل اهتمامك.',
                    'This page is not immediately available to rent, but you can register interest.',
                  )}
            </p>
            <div className="mt-4">
              <ContactForm
                intent="rental"
                defaultCity={lang === 'ar' ? city.nameAr : city.nameEn}
                defaultService={lang === 'ar' ? service.nameAr : service.nameEn}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
