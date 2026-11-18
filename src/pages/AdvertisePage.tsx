import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getRentableAssets } from '@/data/assets'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/forms/ContactForm'
import { Badge } from '@/components/ui/Badge'
import { AssetCard } from '@/components/rental/AssetCard'

export function AdvertisePage() {
  const { t } = useLanguage()
  const examples = getRentableAssets().slice(0, 3)

  usePageMeta({
    titleAr: 'كيف يعمل تأجير الصفحات | ساعدني',
    titleEn: 'How page rental works | Saedni',
    descriptionAr:
      'بدل ما تبني موقع كامل: أجّر صفحة مهنتك في مدينتك شهريًا، واستقبل العملاء من البحث المحلي.',
    descriptionEn:
      'Instead of building a full website: rent your trade page in your city monthly and receive local search customers.',
    canonicalPath: '/advertise-with-us',
  })

  return (
    <div className="section-pad">
      <div className="container-page">

        <div className="max-w-3xl">
          <p className="eyebrow mb-3">{t('لصاحب الورشة / الشركة', 'For trade owners')}</p>
          <h1 className="heading-display">
            {t(
              'مش محتاج موقع كامل. محتاج صفحة تجيب عملاء.',
              'You do not need a full website. You need a page that brings customers.',
            )}
          </h1>
          <p className="body-lead mt-4">
            {t(
              'ساعدني بيبني صفحة مستقلة لكل مهنة ومدينة — زي بلاط بريدة أو سباكة عنيزة أو نقل عفش الرس. بعد ما الصفحة تبقى جاهزة، ممكن تتعاون منشأة واحدة حصريًا على الظهور التجاري.',
              'Saedni builds a separate page for each trade and city — like tiling in Buraydah, plumbing in Unaizah, or moving in Ar Rass. When ready, one business can collaborate exclusively on commercial presence.',
            )}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              ar: 'إنت مش بتشتري موقع',
              en: 'You are not buying a website',
              dAr: 'بتأجّر ظهور تجاري على صفحة نملكها ونطوّرها.',
              dEn: 'You rent commercial presence on a page we own and develop.',
            },
            {
              ar: 'صفحة واحدة = مهنة + مدينة',
              en: 'One page = trade + city',
              dAr: 'تركيز واضح يجيب عميل بيدوّر على خدمتك محليًا.',
              dEn: 'Clear focus that attracts people searching for your trade locally.',
            },
            {
              ar: 'إيجار شهري',
              en: 'Monthly rent',
              dAr: 'باقات إرشادية من ٩٠٠ إلى ٤٬٠٠٠ ر.س حسب قيمة الصفحة.',
              dEn: 'Indicative tiers from 900 to 4,000 SAR based on page value.',
            },
          ].map((card) => (
            <div key={card.en} className="rounded-md border border-line bg-surface p-5">
              <h2 className="font-semibold text-ink">{t(card.ar, card.en)}</h2>
              <p className="mt-2 text-sm text-muted">{t(card.dAr, card.dEn)}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            {
              ar: 'نبني الصفحة',
              en: 'We build the page',
              dAr: 'محتوى مهنة × مدينة بروابط داخلية واضحة.',
              dEn: 'Trade × city content with clear internal links.',
            },
            {
              ar: 'نشتغل على الظهور',
              en: 'We improve visibility',
              dAr: 'تحسين تدريجي بدون وعود ترتيب مضمون.',
              dEn: 'Gradual optimization without guaranteed rankings.',
            },
            {
              ar: 'نتحقق',
              en: 'We verify',
              dAr: 'قبل التأجير نتأكد إن الصفحة جاهزة للقيمة التجارية.',
              dEn: 'Before rental we confirm the page is commercially ready.',
            },
            {
              ar: 'تأجير حصري',
              en: 'Exclusive rental',
              dAr: 'نشاط واحد لنفس المهنة في نفس المدينة.',
              dEn: 'One business for the same trade in the same city.',
            },
          ].map((step, i) => (
            <div key={step.en} className="rounded-md border border-line bg-surface p-5">
              <p className="text-xs text-muted">0{i + 1}</p>
              <h2 className="mt-2 font-semibold">{t(step.ar, step.en)}</h2>
              <p className="mt-2 text-sm text-muted">{t(step.dAr, step.dEn)}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title={t('إنت بتاخد إيه؟', 'What do you get?')}
            />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              {[
                t('ظهور تجاري حصري على الصفحة المؤجّرة.', 'Exclusive commercial presence on the rented page.'),
                t('استقبال استفسارات من ناس بتدور على مهنتك في مدينتك.', 'Inquiries from people searching for your trade in your city.'),
                t('توفير تكلفة ووقت بناء موقع كامل وإدارة SEO من الصفر.', 'Save the cost and time of building a full site and SEO from scratch.'),
                t('تقارير عند توفر قياس موثّق — بدون أرقام وهمية.', 'Reports when verified measurement exists — no fake numbers.'),
              ].map((item) => (
                <li key={item} className="border-s-2 border-sand ps-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title={t('شروط الأهلية', 'Eligibility')} />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              {[
                t('نشاط فعلي في نفس المهنة ونفس المدينة/النطاق.', 'Active operations in the same trade and city/scope.'),
                t('التزام بالرد على العملاء بجودة مناسبة.', 'Commitment to respond to customers properly.'),
                t('السعودية فقط — تغطية مدن المملكة العربية السعودية.', 'Saudi Arabia only — coverage across Saudi Arabia cities.'),
                t('ما بنعرضش شراكات أو نتائج غير موثّقة.', 'We do not show unverified partnerships or results.'),
              ].map((item) => (
                <li key={item} className="rounded-md border border-line px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            title={t('أمثلة صفحات قابلة للإيجار (تجريبي)', 'Example rentable pages (demo)')}
            description={t(
              'دي أمثلة توضيحية من المخزون — اضغط للتفاصيل أو تصفّح المخزون كامل.',
              'Illustrative inventory samples — open details or browse the full inventory.',
            )}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {examples.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
          <Link to="/rent-a-page" className="mt-4 inline-block text-sm font-medium text-brand hover:underline">
            {t('عرض كل الصفحات المتاحة للإيجار', 'View all pages available to rent')}
          </Link>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              title={t('باقات إيجار إرشادية', 'Indicative rental tiers')}
              description={t(
                'الأسعار النهائية تعتمد على ظهور الصفحة، الاستفسارات، وقيمة المهنة والمنافسة — مش رقم ثابت لكل الصفحات.',
                'Final pricing depends on visibility, inquiries, trade value, and competition — not one fixed number for every page.',
              )}
            />
            <div className="mt-6 space-y-3">
              {[
                { badge: 'Starter', ar: '٩٠٠–١٬٥٠٠ ر.س', en: '900–1,500 SAR' },
                { badge: 'Growth', ar: '١٬٥٠٠–٢٬٥٠٠ ر.س', en: '1,500–2,500 SAR' },
                { badge: 'Premium', ar: '٢٬٥٠٠–٤٬٠٠٠ ر.س', en: '2,500–4,000 SAR' },
              ].map((row) => (
                <div key={row.badge} className="flex items-center justify-between rounded-md border border-line px-4 py-3">
                  <Badge tone="brand">{row.badge}</Badge>
                  <span className="text-sm font-medium">{t(`${row.ar} / شهر`, `${row.en} / month`)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-line bg-surface p-6">
            <h2 className="text-lg font-semibold">
              {t('اطلب تأجير صفحة لمهنتك', 'Request a page rental for your trade')}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {t(
                'اكتب المهنة والمدينة — هنراجع المخزون ونرد عليك. النموذج واجهة فقط حاليًا.',
                'Tell us the trade and city — we will check inventory and reply. Frontend-only form for now.',
              )}
            </p>
            <div className="mt-4">
              <ContactForm intent="rental" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
