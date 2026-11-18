export type AssetStatus =
  | 'draft'
  | 'under_development'
  | 'seo_optimization'
  | 'ranking'
  | 'performance_verification'
  | 'qualified_for_rental'
  | 'available_for_rental'
  | 'reserved'
  | 'rented'
  | 'suspended'

export type PricingTier = 'starter' | 'growth' | 'premium'

export type DigitalAsset = {
  id: string
  serviceSlug: string
  citySlug: string
  status: AssetStatus
  tier: PricingTier
  monthlyRentSar: number
  demoNoteAr: string
  demoNoteEn: string
  performance?: {
    organicVisitsLabelAr: string
    organicVisitsLabelEn: string
    inquiriesLabelAr: string
    inquiriesLabelEn: string
    visibilityLabelAr: string
    visibilityLabelEn: string
    isDemo: true
  }
  termsAr: string[]
  termsEn: string[]
}

/** Sample/demo inventory only — not real Google rankings or partnerships. */
export const digitalAssets: DigitalAsset[] = [
  {
    id: 'asset-ceramic-buraydah',
    serviceSlug: 'ceramic-installation',
    citySlug: 'buraydah',
    status: 'available_for_rental',
    tier: 'premium',
    monthlyRentSar: 2800,
    demoNoteAr: 'بيانات تجريبية للتوضيح فقط — ليست نتائج بحث حقيقية.',
    demoNoteEn: 'Sample demo data only — not real search results.',
    performance: {
      organicVisitsLabelAr: 'زيارات عضوية قابلة للقياس (تجريبي)',
      organicVisitsLabelEn: 'Measurable organic visits (demo)',
      inquiriesLabelAr: 'استفسارات مؤهلة مُتتبَّعة (تجريبي)',
      inquiriesLabelEn: 'Tracked qualified inquiries (demo)',
      visibilityLabelAr: 'ظهور بحث محلي قيد المتابعة (تجريبي)',
      visibilityLabelEn: 'Local search visibility under review (demo)',
      isDemo: true,
    },
    termsAr: [
      'تأجير حصري شهري لخدمة البلاط/السيراميك داخل بريدة فقط.',
      'أنت تستأجر الظهور التجاري — ملكية الصفحة والدومين والمحتوى تبقى للمنصة.',
      'لا يشمل بناء موقع كامل لمنشأتك.',
      'تقارير أداء دورية عند توفر قياس موثّق.',
    ],
    termsEn: [
      'Exclusive monthly rental for ceramic/tile services inside Buraydah only.',
      'You rent commercial presence — page, domain, and content stay with the platform.',
      'Does not include building a full website for your business.',
      'Periodic performance reports when verified measurement is available.',
    ],
  },
  {
    id: 'asset-plumbing-unaizah',
    serviceSlug: 'plumbing',
    citySlug: 'unaizah',
    status: 'available_for_rental',
    tier: 'growth',
    monthlyRentSar: 1900,
    demoNoteAr: 'بيانات تجريبية للتوضيح فقط — ليست نتائج بحث حقيقية.',
    demoNoteEn: 'Sample demo data only — not real search results.',
    performance: {
      organicVisitsLabelAr: 'حركة عضوية أولية (تجريبي)',
      organicVisitsLabelEn: 'Early organic activity (demo)',
      inquiriesLabelAr: 'طلبات تواصل قيد القياس (تجريبي)',
      inquiriesLabelEn: 'Contact requests under measurement (demo)',
      visibilityLabelAr: 'صفحة منشورة ومتابعة (تجريبي)',
      visibilityLabelEn: 'Published page under monitoring (demo)',
      isDemo: true,
    },
    termsAr: [
      'حق ظهور تجاري حصري على صفحة السباكة في عنيزة.',
      'بديل عملي عن بناء موقع كامل من الصفر.',
      'الاستفسارات تُوجَّه لك وفق الموافقة وآلية التسليم المتفق عليها.',
    ],
    termsEn: [
      'Exclusive commercial presence on the Unaizah plumbing page.',
      'A practical alternative to building a full website from scratch.',
      'Inquiries are routed to you per consent and the agreed delivery method.',
    ],
  },
  {
    id: 'asset-moving-buraydah',
    serviceSlug: 'furniture-moving',
    citySlug: 'buraydah',
    status: 'available_for_rental',
    tier: 'growth',
    monthlyRentSar: 2200,
    demoNoteAr: 'بيانات تجريبية للتوضيح فقط.',
    demoNoteEn: 'Sample demo data only.',
    performance: {
      organicVisitsLabelAr: 'طلبات نقل محلية قيد الرصد (تجريبي)',
      organicVisitsLabelEn: 'Local moving demand monitored (demo)',
      inquiriesLabelAr: 'نماذج تواصل مفعّلة (تجريبي)',
      inquiriesLabelEn: 'Inquiry forms enabled (demo)',
      visibilityLabelAr: 'صفحة جاهزة للعرض التجاري (تجريبي)',
      visibilityLabelEn: 'Page ready for commercial listing (demo)',
      isDemo: true,
    },
    termsAr: [
      'تأجير شهري لصفحة نقل العفش في بريدة.',
      'الحصرية لنفس المهنة داخل المدينة المتفق عليها.',
    ],
    termsEn: [
      'Monthly rental for the furniture moving page in Buraydah.',
      'Exclusivity for the same trade inside the agreed city.',
    ],
  },
  {
    id: 'asset-cleaning-buraydah',
    serviceSlug: 'home-cleaning',
    citySlug: 'buraydah',
    status: 'reserved',
    tier: 'starter',
    monthlyRentSar: 1400,
    demoNoteAr: 'محجوزة مؤقتًا — بيانات تجريبية.',
    demoNoteEn: 'Temporarily reserved — demo data.',
    termsAr: ['الحجز لا يعني إتمام التأجير حتى توقيع الاتفاق والسداد.'],
    termsEn: ['Reservation does not complete rental until agreement and payment.'],
  },
  {
    id: 'asset-ac-ar-rass',
    serviceSlug: 'air-conditioning',
    citySlug: 'ar-rass',
    status: 'qualified_for_rental',
    tier: 'growth',
    monthlyRentSar: 2100,
    demoNoteAr: 'مؤهلة للتأجير بعد التحقق الداخلي — بيانات تجريبية.',
    demoNoteEn: 'Qualified for rental after internal verification — demo data.',
    performance: {
      organicVisitsLabelAr: 'أداء موسمي قيد التوثيق (تجريبي)',
      organicVisitsLabelEn: 'Seasonal performance being documented (demo)',
      inquiriesLabelAr: 'استفسارات خدمة قيد المراجعة (تجريبي)',
      inquiriesLabelEn: 'Service inquiries under review (demo)',
      visibilityLabelAr: 'جاهزية تجارية قريبة (تجريبي)',
      visibilityLabelEn: 'Near commercial readiness (demo)',
      isDemo: true,
    },
    termsAr: [
      'تُفتح للعامة كـ «متاحة» بعد اعتماد العرض التجاري النهائي.',
      'التسعير قابل للتعديل حسب الأداء والمنافسة.',
    ],
    termsEn: [
      'Opens publicly as Available after final commercial approval.',
      'Pricing may adjust based on performance and competition.',
    ],
  },
  {
    id: 'asset-painting-unaizah',
    serviceSlug: 'painting',
    citySlug: 'unaizah',
    status: 'available_for_rental',
    tier: 'starter',
    monthlyRentSar: 1500,
    demoNoteAr: 'بيانات تجريبية للتوضيح فقط — ليست نتائج بحث حقيقية.',
    demoNoteEn: 'Sample demo data only — not real search results.',
    performance: {
      organicVisitsLabelAr: 'حركة بحث محلي قيد الرصد (تجريبي)',
      organicVisitsLabelEn: 'Local search activity monitored (demo)',
      inquiriesLabelAr: 'نماذج تواصل مفعّلة (تجريبي)',
      inquiriesLabelEn: 'Inquiry forms enabled (demo)',
      visibilityLabelAr: 'صفحة جاهزة للعرض التجاري (تجريبي)',
      visibilityLabelEn: 'Page ready for commercial listing (demo)',
      isDemo: true,
    },
    termsAr: [
      'حصريّة جغرافية لنفس الخدمة في المدينة.',
      'بديل عن موقع كامل: صفحة واحدة موجّهة لعملاء يبحثون عنك.',
    ],
    termsEn: [
      'Geographic exclusivity for the same service in the city.',
      'Alternative to a full website: one page aimed at people searching for you.',
    ],
  },
  {
    id: 'asset-electrical-riyadh-al-khabra',
    serviceSlug: 'electrical',
    citySlug: 'riyadh-al-khabra',
    status: 'seo_optimization',
    tier: 'starter',
    monthlyRentSar: 1200,
    demoNoteAr: 'قيد تحسين الظهور — غير متاحة للتأجير بعد.',
    demoNoteEn: 'Under SEO optimization — not available for rental yet.',
    termsAr: ['تُعرض للتأجير بعد مرحلة التحقق من الأداء.'],
    termsEn: ['Listed for rental after the performance verification stage.'],
  },
  {
    id: 'asset-moving-bukayriyah',
    serviceSlug: 'furniture-moving',
    citySlug: 'al-bukayriyah',
    status: 'under_development',
    tier: 'starter',
    monthlyRentSar: 1300,
    demoNoteAr: 'الصفحة قيد البناء — غير متاحة للتأجير بعد.',
    demoNoteEn: 'Page under development — not available for rental yet.',
    termsAr: ['تُفتح للتأجير بعد جاهزية المحتوى والأداء الأولي.'],
    termsEn: ['Opens for rental after content readiness and early performance checks.'],
  },
  {
    id: 'asset-leak-uyun',
    serviceSlug: 'leak-detection',
    citySlug: 'uyun-al-jiwa',
    status: 'draft',
    tier: 'starter',
    monthlyRentSar: 1100,
    demoNoteAr: 'مسودة داخلية — ليست معروضة للجمهور كتأجير.',
    demoNoteEn: 'Internal draft — not publicly listed for rental.',
    termsAr: ['تظهر في المخزون العام بعد اكتمال المحتوى والنشر.'],
    termsEn: ['Appears in public inventory after content completion and publishing.'],
  },
  {
    id: 'asset-pest-buraydah',
    serviceSlug: 'pest-control',
    citySlug: 'buraydah',
    status: 'rented',
    tier: 'growth',
    monthlyRentSar: 1800,
    demoNoteAr: 'مؤجّرة حاليًا — مثال تجريبي لعقد نشط.',
    demoNoteEn: 'Currently rented — demo example of an active contract.',
    termsAr: ['غير متاحة لمنشأة أخرى أثناء سريان العقد.'],
    termsEn: ['Not available to another business while the contract is active.'],
  },
]

export function getAsset(id: string) {
  return digitalAssets.find((a) => a.id === id)
}

export function getAssetsByStatus(status?: AssetStatus) {
  if (!status) return digitalAssets
  return digitalAssets.filter((a) => a.status === status)
}

export function getRentableAssets() {
  return digitalAssets.filter((a) =>
    a.status === 'available_for_rental' || a.status === 'qualified_for_rental',
  )
}

export function isPublicInventoryStatus(status: AssetStatus) {
  return (
    status === 'available_for_rental' ||
    status === 'qualified_for_rental' ||
    status === 'reserved' ||
    status === 'rented' ||
    status === 'under_development' ||
    status === 'seo_optimization' ||
    status === 'ranking' ||
    status === 'performance_verification'
  )
}

export const statusLabel: Record<AssetStatus, { ar: string; en: string }> = {
  draft: { ar: 'مسودة', en: 'Draft' },
  under_development: { ar: 'قيد البناء', en: 'Under development' },
  seo_optimization: { ar: 'تحسين SEO', en: 'SEO optimization' },
  ranking: { ar: 'مرحلة الظهور', en: 'Ranking' },
  performance_verification: { ar: 'تحقق من الأداء', en: 'Performance verification' },
  qualified_for_rental: { ar: 'مؤهلة للتأجير', en: 'Qualified for rental' },
  available_for_rental: { ar: 'متاحة للتأجير', en: 'Available for rental' },
  reserved: { ar: 'محجوزة', en: 'Reserved' },
  rented: { ar: 'مؤجّرة', en: 'Rented' },
  suspended: { ar: 'معلّقة', en: 'Suspended' },
}

export const tierLabel: Record<PricingTier, { ar: string; en: string }> = {
  starter: { ar: 'Starter', en: 'Starter' },
  growth: { ar: 'Growth', en: 'Growth' },
  premium: { ar: 'Premium', en: 'Premium' },
}

export const tierRangeAr: Record<PricingTier, string> = {
  starter: '٩٠٠–١٬٥٠٠ ر.س / شهر (إرشادي)',
  growth: '١٬٥٠٠–٢٬٥٠٠ ر.س / شهر (إرشادي)',
  premium: '٢٬٥٠٠–٤٬٠٠٠ ر.س / شهر (إرشادي)',
}

export const tierRangeEn: Record<PricingTier, string> = {
  starter: '900–1,500 SAR / month (indicative)',
  growth: '1,500–2,500 SAR / month (indicative)',
  premium: '2,500–4,000 SAR / month (indicative)',
}
