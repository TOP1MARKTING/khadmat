import { useMemo, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  digitalAssets,
  isPublicInventoryStatus,
  statusLabel,
  tierLabel,
  type AssetStatus,
  type PricingTier,
} from '@/data/assets'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { AssetCard } from '@/components/rental/AssetCard'

const filterStatuses: AssetStatus[] = [
  'available_for_rental',
  'qualified_for_rental',
  'reserved',
  'rented',
  'under_development',
  'seo_optimization',
]

export function RentAPage() {
  const { t, lang } = useLanguage()
  const [status, setStatus] = useState<AssetStatus | 'all'>('all')
  const [city, setCity] = useState('all')
  const [service, setService] = useState('all')
  const [tier, setTier] = useState<PricingTier | 'all'>('all')

  usePageMeta({
    titleAr: 'أجر صفحة مهنة | ساعدني',
    titleEn: 'Rent a trade page | Saedni',
    descriptionAr:
      'مخزون صفحات SEO للتأجير الحصري: بلاط، سباكة، نقل عفش ومهن أخرى في مدن المملكة العربية السعودية — بدون بناء موقع كامل.',
    descriptionEn:
      'Inventory of SEO pages for exclusive rental: tiling, plumbing, moving and more across Saudi Arabia — without a full website.',
    canonicalPath: '/rent-a-page',
  })

  const filtered = useMemo(() => {
    return digitalAssets.filter((a) => {
      if (!isPublicInventoryStatus(a.status) && a.status !== 'draft') {
        // hide pure drafts from public unless explicitly filtered later
      }
      if (a.status === 'draft' || a.status === 'suspended') return false
      const okStatus = status === 'all' || a.status === status
      const okCity = city === 'all' || a.citySlug === city
      const okService = service === 'all' || a.serviceSlug === service
      const okTier = tier === 'all' || a.tier === tier
      return okStatus && okCity && okService && okTier
    })
  }, [status, city, service, tier])

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow={t('مخزون الأصول الرقمية', 'Digital asset inventory')}
          title={t('أجر صفحة مهنة جاهزة — مش موقع كامل', 'Rent a ready trade page — not a full website')}
          description={t(
            'كل صفحة = مهنة واحدة + مدينة واحدة. بتأجّر الظهور التجاري الشهري، والملكية تفضل عند المنصة. الأرقام والحالات هنا بيانات تجريبية للتوضيح.',
            'Each page = one trade + one city. You rent monthly commercial presence; ownership stays with the platform. Figures and statuses here are demo-only.',
          )}
        />

        <div className="mt-6 grid gap-3 rounded-md border border-line bg-cream p-4 sm:grid-cols-3">
          {[
            {
              ar: 'Starter',
              en: 'Starter',
              dAr: '٩٠٠–١٬٥٠٠ ر.س / شهر (إرشادي)',
              dEn: '900–1,500 SAR / month (indicative)',
            },
            {
              ar: 'Growth',
              en: 'Growth',
              dAr: '١٬٥٠٠–٢٬٥٠٠ ر.س / شهر (إرشادي)',
              dEn: '1,500–2,500 SAR / month (indicative)',
            },
            {
              ar: 'Premium',
              en: 'Premium',
              dAr: '٢٬٥٠٠–٤٬٠٠٠ ر.س / شهر (إرشادي)',
              dEn: '2,500–4,000 SAR / month (indicative)',
            },
          ].map((row) => (
            <div key={row.en} className="rounded-md border border-line bg-surface px-4 py-3">
              <p className="text-sm font-semibold text-ink">{t(row.ar, row.en)}</p>
              <p className="mt-1 text-xs text-muted">{t(row.dAr, row.dEn)}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Select value={status} onChange={(e) => setStatus(e.target.value as AssetStatus | 'all')}>
            <option value="all">{t('كل الحالات', 'All statuses')}</option>
            {filterStatuses.map((s) => (
              <option key={s} value={s}>
                {statusLabel[s][lang]}
              </option>
            ))}
          </Select>
          <Select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="all">{t('كل المدن', 'All cities')}</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {lang === 'ar' ? c.nameAr : c.nameEn}
              </option>
            ))}
          </Select>
          <Select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="all">{t('كل المهن', 'All trades')}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {lang === 'ar' ? s.nameAr : s.nameEn}
              </option>
            ))}
          </Select>
          <Select value={tier} onChange={(e) => setTier(e.target.value as PricingTier | 'all')}>
            <option value="all">{t('كل الباقات', 'All tiers')}</option>
            {(['starter', 'growth', 'premium'] as PricingTier[]).map((item) => (
              <option key={item} value={item}>
                {tierLabel[item][lang]}
              </option>
            ))}
          </Select>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-md border border-dashed border-line px-6 py-16 text-center">
            <p className="font-medium">
              {t('لا توجد صفحات ضمن التصفية الحالية', 'No pages match the current filters')}
            </p>
            <Button
              className="mt-4"
              variant="outline"
              onClick={() => {
                setStatus('all')
                setCity('all')
                setService('all')
                setTier('all')
              }}
            >
              {t('إعادة التعيين', 'Reset filters')}
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {filtered.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
