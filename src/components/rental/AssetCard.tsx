import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import {
  statusLabel,
  tierLabel,
  type DigitalAsset,
} from '@/data/assets'
import { getCity } from '@/data/cities'
import { getService } from '@/data/services'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

function toneFor(status: DigitalAsset['status']) {
  if (status === 'available_for_rental' || status === 'qualified_for_rental') return 'success' as const
  if (status === 'reserved') return 'warn' as const
  if (status === 'rented') return 'brand' as const
  return 'sand' as const
}

export function AssetCard({ asset }: { asset: DigitalAsset }) {
  const { t, lang } = useLanguage()
  const service = getService(asset.serviceSlug)
  const city = getCity(asset.citySlug)
  if (!service || !city) return null

  return (
    <article className="flex h-full flex-col rounded-md border border-line bg-surface p-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={toneFor(asset.status)}>{statusLabel[asset.status][lang]}</Badge>
        <Badge tone="neutral">{tierLabel[asset.tier][lang]}</Badge>
        <Badge tone="sand">{t('بيانات تجريبية', 'Demo data')}</Badge>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">
        {lang === 'ar' ? service.nameAr : service.nameEn}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {lang === 'ar' ? city.nameAr : city.nameEn}
        {' · '}
        {lang === 'ar' ? city.regionAr : city.regionEn}
      </p>
      <p className="mt-3 text-sm text-muted">
        {t(
          'صفحة مهنة جاهزة للإيجار — مش موقع كامل.',
          'A ready trade page for rent — not a full website.',
        )}
      </p>
      {asset.performance && (
        <p className="mt-2 text-sm text-muted">
          {lang === 'ar'
            ? asset.performance.visibilityLabelAr
            : asset.performance.visibilityLabelEn}
        </p>
      )}
      <p className="mt-3 text-sm font-medium text-ink">
        {asset.monthlyRentSar.toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-US')}{' '}
        {t('ر.س / شهريًا', 'SAR / month')}
      </p>
      <p className="mt-2 text-xs text-muted">
        {lang === 'ar' ? asset.demoNoteAr : asset.demoNoteEn}
      </p>
      <div className="mt-auto flex flex-wrap gap-3 pt-4">
        <Link to={`/rent-a-page/${asset.id}`}>
          <Button size="sm">{t('تفاصيل الإيجار', 'Rental details')}</Button>
        </Link>
        <Link
          to={`/sa/${city.regionSlug}/${city.slug}/${service.slug}`}
          className="inline-flex h-9 items-center text-sm text-brand hover:underline"
        >
          {t('معاينة الصفحة', 'Preview page')}
        </Link>
      </div>
    </article>
  )
}
