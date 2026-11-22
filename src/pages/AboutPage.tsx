import { Link } from 'react-router-dom'
import {
  BookOpen,
  CheckCircle2,
  HardHat,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  XCircle,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { BrandLogo } from '@/components/BrandLogo'
import { Button } from '@/components/ui/Button'

const aboutServiceShots = [
  { src: '/images/services/plumbing.jpg', titleAr: 'السباكة', to: '/services/plumbing' },
  { src: '/images/services/painting.jpg', titleAr: 'الدهانات', to: '/services/painting' },
  { src: '/images/services/home-cleaning.jpg', titleAr: 'النظافة', to: '/services/home-cleaning' },
  { src: '/images/services/furniture-moving.jpg', titleAr: 'نقل العفش', to: '/services/furniture-moving' },
  { src: '/images/services/air-conditioning.jpg', titleAr: 'التكييف', to: '/services/air-conditioning' },
  { src: '/images/services/landscaping.jpg', titleAr: 'تنسيق الحدائق', to: '/services/landscaping' },
]

const workerShots = [
  {
    src: '/images/team/team-01-villas.jpg',
    titleAr: 'تشطيب وترميم داخل الشقق',
    titleEn: 'Finishing and renovation inside apartments',
  },
  {
    src: '/images/team/team-02-apartment.jpg',
    titleAr: 'فني تكييف داخل الشقة',
    titleEn: 'AC technician inside an apartment',
  },
  {
    src: '/images/team/team-03-truck.jpg',
    titleAr: 'عمال نقل العفش أمام الفيلا',
    titleEn: 'Furniture movers at a villa',
  },
  {
    src: '/images/team/team-04-riyadh.jpg',
    titleAr: 'تركيب بلاط بإطلالة الرياض',
    titleEn: 'Tile installation with a Riyadh view',
  },
  {
    src: '/images/team/team-05-corniche.jpg',
    titleAr: 'تنسيق حدائق في فلل سعودية',
    titleEn: 'Landscaping at Saudi villas',
  },
  {
    src: '/images/team/team-08-makkah.jpg',
    titleAr: 'دهان واحتراف داخل المنزل',
    titleEn: 'Professional painting inside the home',
  },
]

const doItems = [
  {
    ar: 'نوضح نوع الشغل والمهنة بمعلومة عملية ومبسّطة.',
    en: 'We explain the trade and service type with practical, simple information.',
  },
  {
    ar: 'نبني أدلة مهن تفيد العميل قبل التنفيذ.',
    en: 'We build trade guides that help customers before work starts.',
  },
  {
    ar: 'المحتوى المحلي يظهر عبر المقالات عند إضافتها — مش قوائم مدن منفصلة.',
    en: 'Local context appears through articles when added — not separate city pickers.',
  },
  {
    ar: 'نبني صفحات مفيدة للبحث — للمستخدم أولًا.',
    en: 'We build useful search pages — people first.',
  },
]

const dontItems = [
  {
    ar: 'ما بنحطش أسماء شركات وهمية أو بيانات غير موثّقة.',
    en: 'We do not list fake company names or unverified details.',
  },
  {
    ar: 'ما بنوعدش بترتيب جوجل مضمون أو نتائج دعائية.',
    en: 'We do not promise guaranteed Google rankings or promotional results.',
  },
  {
    ar: 'ما بنعرضش تقييمات أو شراكات من غير أساس واضح.',
    en: 'We do not show reviews or partnerships without a clear basis.',
  },
]

export function AboutPage() {
  const { t, isAr } = useLanguage()

  usePageMeta({
    titleAr: 'عن ساعدني | منصة المهن من Top1Markting',
    titleEn: 'About Saedni | Trades platform by Top1Markting',
    descriptionAr:
      'ساعدني منصة سعودية لأدلة المهن والخدمات — فكرة وتصميم وإشراف Top1Markting. معلومة واضحة بدون أسماء شركات وهمية.',
    descriptionEn:
      'Saedni is a Saudi trades-guide platform — idea, design, and supervision by Top1Markting. Clear information without fake company names.',
    canonicalPath: '/about',
  })

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[340px] overflow-hidden border-b border-line sm:min-h-[440px]">
        <img
          src="/images/team/team-01-villas.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,25,22,0.4)_0%,rgba(23,25,22,0.55)_40%,rgba(23,25,22,0.9)_100%)]" />
        <div className="relative container-page flex min-h-[340px] flex-col justify-end pb-10 pt-24 sm:min-h-[440px] sm:pb-14 sm:pt-28">
          <div className="max-w-3xl text-white">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wide text-accent-soft backdrop-blur-md">
              <Sparkles className="size-3.5" />
              {t('عن المنصة', 'About the platform')}
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t('عن ساعدني', 'About Saedni')}
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white/85 sm:text-base">
              {t(
                'منصة سعودية للناس: لما تحتاج خدمة لبيتك أو شغلك — تلاقي معلومة واضحة عن المهنة ونطاق الشغل قبل التنفيذ.',
                'A Saudi people-first platform: when you need a home or work service, you get clear information about the trade and scope before execution.',
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                to="/services"
                className="inline-flex h-11 items-center gap-2 rounded-2xl bg-accent px-4 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(166,123,75,0.35)] hover:brightness-95"
              >
                <HardHat className="size-4" />
                {t('تصفّح المهن', 'Browse trades')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-4 text-sm font-extrabold text-white backdrop-blur-md hover:bg-white/18"
              >
                <MessageCircle className="size-4" />
                {t('تواصل', 'Contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-line bg-surface">
        <div className="container-page section-pad grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow mb-3">{t('ليه ساعدني؟', 'Why Saedni?')}</p>
            <h2 className="heading-section">
              {t(
                'عشان توصل للمعلومة الصح قبل ما تطلب',
                'So you get the right info before you ask',
              )}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {t(
                'كتير ناس بتدور على خدمة وتلاقي صفحات ملخبطة. ساعدني يساعدك تفهم نوع المهنة ونطاق الشغل بمحتوى عملي ومباشر — مش دليل شركات عشوائي، ومش إعلانات فاضية.',
                'Many people search for a service and find messy pages. Saedni helps you understand the trade and scope with practical content — not a random company directory, and not empty ads.',
              )}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(
                'المرحلة الحالية مرجع معرفي فقط: أدلة مهن وخدمات ومقالات عملية. بدون إعلانات أو دليل حجوزات لمقدمي الخدمات.',
                'This phase is knowledge-only: trade guides, services, and practical articles. No ads and no booking directory for providers.',
              )}
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-gradient-to-b from-cream to-surface p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <BrandLogo variant="mark" size="lg" className="size-14 bg-cream" />
              <div>
                <p className="text-lg font-extrabold text-ink">ساعدني</p>
                <p className="text-xs font-bold text-muted">
                  {t('أدلة مهن وخدمات — السعودية', 'Trade guides — Saudi Arabia')}
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-muted">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                {t('معلومة واضحة عن كل مهنة', 'Clear info for every trade')}
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                {t('تركيز على العميل أولًا', 'Customer-first focus')}
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                {t('بدون أسماء شركات وهمية', 'No fake company names')}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section className="border-b border-line bg-cream/50">
        <div className="container-page section-pad grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-brand">
              <CheckCircle2 className="size-5" />
              <h2 className="text-lg font-extrabold">{t('بنعمل إيه', 'What we do')}</h2>
            </div>
            <ul className="space-y-3">
              {doItems.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-[15px]"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>{isAr ? item.ar : item.en}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-accent">
              <ShieldCheck className="size-5" />
              <h2 className="text-lg font-extrabold">{t('ما بنعملوش', "What we don't do")}</h2>
            </div>
            <ul className="space-y-3">
              {dontItems.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-[15px]"
                >
                  <XCircle className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{isAr ? item.ar : item.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Workers gallery */}
      <section className="border-b border-line bg-surface">
        <div className="container-page section-pad">
          <p className="eyebrow mb-3">{t('من واقع الشغل', 'From the field')}</p>
          <h2 className="heading-section">
            {t(
              'عمال من جميع المهن واقفين جنب بعض',
              'Workers from every trade standing side by side',
            )}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {t(
              'صور تمثيلية لعمال وفنيين من مهن مختلفة — صيانة ونظافة ونقل وغيرها. مش فريق موظفين لساعدني.',
              'Representative photos of workers and technicians from different trades — maintenance, cleaning, moving and more. Not a Saedni staff team.',
            )}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {workerShots.map((shot) => (
              <figure
                key={shot.src}
                className="group relative overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-soft)]"
              >
                <img
                  src={shot.src}
                  alt={isAr ? shot.titleAr : shot.titleEn}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3.5 text-sm font-bold text-white sm:p-4 sm:text-base">
                  {isAr ? shot.titleAr : shot.titleEn}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Service examples */}
      <section className="border-b border-line">
        <div className="container-page section-pad">
          <p className="eyebrow mb-3">{t('المهن', 'Trades')}</p>
          <h2 className="heading-section">
            {t('نماذج من الخدمات اللي بنغطيها', 'Examples of services we cover')}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {t(
              'أدلة عملية لسباكة ودهانات ونظافة ونقل وتكييف وحدائق — وغيرها من المهن.',
              'Practical guides for plumbing, painting, cleaning, moving, AC, landscaping — and more trades.',
            )}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {aboutServiceShots.map((shot) => (
              <Link
                key={shot.src}
                to={shot.to}
                className="group relative overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-soft)]"
              >
                <img
                  src={shot.src}
                  alt={shot.titleAr}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                  <h3 className="text-base font-extrabold text-white sm:text-lg">
                    {shot.titleAr}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/services"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl bg-accent px-5 text-sm font-extrabold text-white hover:brightness-95"
          >
            {t('شوف كل المهن', 'See all trades')}
          </Link>
        </div>
      </section>

      {/* Content note */}
      <section className="border-b border-line bg-cream/40">
        <div className="container-page section-pad max-w-3xl">
          <div className="mb-3 flex items-center gap-2 text-brand">
            <BookOpen className="size-5" />
            <p className="text-xs font-bold tracking-wide uppercase">
              {t('المحتوى أولًا', 'Content first')}
            </p>
          </div>
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            {t(
              'أدلة مهن تفيد الناس قبل التنفيذ',
              'Trade guides that help people before execution',
            )}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t(
              'بنكتب عشان الباحث يفهم التجهيز والأخطاء الشائعة ونطاق الشغل. المقالات تُضاف عند الحاجة، والمحتوى المحلي يظهر من خلالها. أي منشأة أو مزوّد خدمة يُضاف فقط بعد اتفاق واضح.',
              'We write so searchers understand prep, common mistakes, and scope of work. Articles are added when needed, and local context appears through them. Any business or provider is added only after a clear agreement.',
            )}
          </p>
        </div>
      </section>

      {/* Top1Markting */}
      <section className="border-b border-line bg-ink text-white">
        <div className="container-page section-pad">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.18em] text-sand uppercase">
                Top1Markting
              </p>
              <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                {t(
                  'فكرة وتصميم وتنفيذ وإشراف الموقع',
                  'Idea, design, build & supervision of this site',
                )}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {t(
                  'منصة ساعدني من فكرة وتصميم وتنفيذ وإشراف شركة Top1Markting — وكالة رقمية تخدم السعودية والإمارات.',
                  'Saedni is the idea, design, build, and supervision of Top1Markting — a digital agency serving Saudi Arabia and the UAE.',
                )}
              </p>
              <p className="mt-3 text-sm font-bold text-sand" dir="ltr">
                +966 54 988 1368 · +971 50 766 2114
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <a
                href="https://top1markting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-4 text-sm font-extrabold text-[#1a2744] transition-transform hover:scale-[1.02]"
              >
                <img
                  src="/top1markting-logo.png"
                  alt="Top1Markting"
                  className="h-7 w-auto object-contain"
                />
                <span>
                  Top<span className="text-[#f0a11a]">1</span>Markting
                </span>
              </a>
              <a
                href="https://wa.me/966549881368"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-4 text-sm font-extrabold text-white backdrop-blur-md hover:bg-white/16"
              >
                <Phone className="size-4" />
                {t('واتساب', 'WhatsApp')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow-lift)] sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-xl font-extrabold text-ink">
              {t('حابب تعرف أكتر أو تتواصل؟', 'Want to learn more or get in touch?')}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              {t(
                'تصفّح المهن، أو راسل Top1Markting لأي استفسار عن المنصة.',
                'Browse trades, or message Top1Markting for any platform inquiry.',
              )}
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="accent" className="w-full rounded-2xl">
                <HardHat className="size-4" />
                {t('تصفّح المهن', 'Browse trades')}
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="whatsapp" className="w-full rounded-2xl">
                <MessageCircle className="size-4" />
                {t('تواصل معنا', 'Contact us')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
