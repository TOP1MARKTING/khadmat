import { Link } from 'react-router-dom'
import {
  BookOpen,
  CheckCircle2,
  HardHat,
  MapPin,
  MessageCircle,
  ShieldCheck,
  XCircle,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Button } from '@/components/ui/Button'

/** Selected wide service photos for About — not the full catalog */
const aboutServiceShots = [
  {
    src: '/images/hero/hero-01-plumbing-desktop.jpg',
    titleAr: 'السباكة',
    to: '/services?category=home-maintenance',
  },
  {
    src: '/images/hero/hero-03-tiling-desktop.jpg',
    titleAr: 'البلاط والسيراميك',
    to: '/services?category=construction-finishing',
  },
  {
    src: '/images/hero/hero-11-contracting-desktop.jpg',
    titleAr: 'المقاولات',
    to: '/services?category=construction-finishing',
  },
  {
    src: '/images/hero/hero-09-cleaning-desktop.jpg',
    titleAr: 'النظافة',
    to: '/services?category=cleaning',
  },
  {
    src: '/images/hero/hero-08-moving-desktop.jpg',
    titleAr: 'نقل العفش',
    to: '/services?category=moving-logistics',
  },
  {
    src: '/images/hero/hero-06-ac-desktop.jpg',
    titleAr: 'التكييف',
    to: '/services?category=home-maintenance',
  },
]

const doItems = [
  {
    ar: 'نوضح نوع الشغل والمهنة بمعلومة عملية ومبسّطة.',
    en: 'We explain the trade and service type with practical, simple information.',
  },
  {
    ar: 'نربط المحتوى بالمدن داخل المملكة العربية السعودية.',
    en: 'We connect content to cities across Saudi Arabia.',
  },
  {
    ar: 'نكتب أدلة تساعد الشخص يفهم قبل ما يطلب خدمة.',
    en: 'We write guides that help people understand before they ask for a service.',
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

const citiesAr =
  'الرياض، جدة، مكة، المدينة، الدمام، الخبر، القصيم، حائل، تبوك، عسير، جازان وغيرها'
const citiesEn =
  'Riyadh, Jeddah, Makkah, Madinah, Dammam, Khobar, Qassim, Hail, Tabuk, Asir, Jazan and more'

export function AboutPage() {
  const { t, isAr } = useLanguage()

  usePageMeta({
    titleAr: 'عن ساعدني | نساعدك تلاقي الخدمة المناسبة في السعودية',
    titleEn: 'About Saedni | Find the right local trade info in Saudi Arabia',
    descriptionAr:
      'ساعدني موقع سعودي للناس: صفحات وأدلة عن المهن والخدمات في مدن المملكة — معلومة واضحة من غير أسماء شركات وهمية.',
    descriptionEn:
      'Saedni is a Saudi people-first site: pages and guides about local trades across the Kingdom — clear information without fake company names.',
    canonicalPath: '/about',
  })

  return (
    <>
      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page section-pad max-w-4xl">
          <p className="eyebrow mb-3">{t('عن المنصة', 'About the platform')}</p>
          <h1 className="heading-display">{t('عن ساعدني', 'About Saedni')}</h1>
          <p className="body-lead mt-5 max-w-2xl">
            {t(
              'ساعدني موقع سعودي للناس. الهدف بسيط: لما تحتاج خدمة في بيتك أو شغلك — سباكة، بلاط، مقاولات، نقل عفش أو غيرها — تلاقي معلومة واضحة عن نوع الشغل في مدينتك، بسهولة ومن غير لخبطة.',
              'Saedni is a Saudi people-first site. The goal is simple: when you need a home or work service — plumbing, tiling, contracting, moving or more — you find clear information about the right trade in your city, without confusion.',
            )}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {t(
              'مش دليل شركات عشوائي، ومش إعلانات فاضية. بنبني أدلة مهن ومقالات عملية تفيد العميل أولًا — وأي شركة تظهر لاحقًا باسم وشعار واضح عند الاتفاق.',
              'Not a random company directory, and not empty ads. We build trade guides and practical articles for customers first — any company appears later with a clear name and logo under agreement.',
            )}
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="border-b border-line">
        <div className="container-page section-pad grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <div className="mb-3 flex items-center gap-2 text-brand">
              <HardHat className="size-5 shrink-0" />
              <p className="text-xs font-bold tracking-wide uppercase">
                {t('ليه عملنا ساعدني؟', 'Why Saedni exists')}
              </p>
            </div>
            <h2 className="text-xl font-extrabold leading-snug text-ink sm:text-2xl">
              {t('عشان توصل للمعلومة الصح قبل ما تطلب', 'So you get the right info before you ask')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(
                'كتير ناس بتدور على خدمة وتلاقي صفحات ملخبطة أو أسماء مش واضحة. ساعدني يساعدك تفهم نوع المهنة ونطاق الشغل في مدينتك — بمحتوى عملي ومباشر.',
                'Many people search for a service and find messy pages or unclear names. Saedni helps you understand the trade and scope of work in your city — with practical, direct content.',
              )}
            </p>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2 text-accent">
              <MapPin className="size-5 shrink-0" />
              <p className="text-xs font-bold tracking-wide uppercase">
                {t('فين نغطي؟', 'Where we cover')}
              </p>
            </div>
            <h2 className="text-xl font-extrabold leading-snug text-ink sm:text-2xl">
              {t('مدن المملكة العربية السعودية فقط', 'Saudi Arabia cities only')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(
                `${citiesAr} — تركيزنا على خدمات ومحتوى داخل السعودية.`,
                `${citiesEn} — we focus on services and content inside Saudi Arabia.`,
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section className="border-b border-line bg-cream/60">
        <div className="container-page section-pad grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-brand">
              <CheckCircle2 className="size-5" />
              <h2 className="text-lg font-extrabold">{t('بنعمل إيه', 'What we do')}</h2>
            </div>
            <ul className="space-y-3">
              {doItems.map((item) => (
                <li key={item.en} className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>{isAr ? item.ar : item.en}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-accent">
              <ShieldCheck className="size-5" />
              <h2 className="text-lg font-extrabold">{t('ما بنعملوش', "What we don't do")}</h2>
            </div>
            <ul className="space-y-3">
              {dontItems.map((item) => (
                <li key={item.en} className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{isAr ? item.ar : item.en}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-soft">
              {t(
                'أي بيانات تجريبية في الواجهة تُوسم بوضوح لحد ما تتأكد.',
                'Any demo data in the interface is clearly labeled until verified.',
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Selected wide service photos */}
      <section className="border-b border-line bg-surface">
        <div className="container-page section-pad">
          <div className="mb-3 flex items-center gap-2 text-brand">
            <HardHat className="size-5" />
            <p className="text-xs font-bold tracking-wide uppercase">
              {t('من واقع الشغل', 'From real work')}
            </p>
          </div>
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            {t('نماذج من الخدمات اللي بنغطيها', 'Examples of services we cover')}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {t(
              'صور عريضة من شغل حقيقي — سباكة، بلاط، مقاولات، نظافة، نقل وتكييف. مش كل الخدمات، نماذج توضّح الفكرة.',
              'Wide photos from real work — plumbing, tiling, contracting, cleaning, moving and AC. Not every service, just clear examples.',
            )}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {aboutServiceShots.map((shot) => (
              <Link
                key={shot.src}
                to={shot.to}
                className="group relative overflow-hidden rounded-2xl border border-line"
              >
                <img
                  src={shot.src}
                  alt={shot.titleAr}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                  <h3 className="text-base font-extrabold text-white sm:text-lg">{shot.titleAr}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/services"
              className="inline-flex h-11 items-center gap-1 text-sm font-bold text-accent hover:text-brand"
            >
              {t('شوف كل المهن', 'See all trades')}
            </Link>
          </div>
        </div>
      </section>

      {/* Content first */}
      <section className="border-b border-line">
        <div className="container-page section-pad max-w-3xl">
          <div className="mb-3 flex items-center gap-2 text-brand">
            <BookOpen className="size-5" />
            <p className="text-xs font-bold tracking-wide uppercase">
              {t('المحتوى أولًا', 'Content first')}
            </p>
          </div>
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            {t('صفحات وأدلة تفيد الناس وتظهر في البحث', 'Pages and guides that help people and show up in search')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t(
              'لكل مهنة مقالات عملية وصفحات مدن. بنكتب عشان الباحث يفهم التجهيز والأخطاء الشائعة ونطاق الشغل. لو في منشأة أو مزوّد خدمة هيتضاف لاحقًا، بيتحط فقط بعد اتفاق واضح وبيانات صحيحة.',
              'Each trade gets practical articles and city pages. We write so searchers understand prep, common mistakes, and scope of work. If a business or provider is added later, it only happens after a clear agreement and accurate details.',
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-xl font-extrabold text-ink">
              {t('حابب تعرف أكتر أو تتواصل؟', 'Want to learn more or get in touch?')}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              {t(
                'تصفّح المهن والأدلة، أو راسلنا لأي استفسار عام.',
                'Browse trades and guides, or message us for any general inquiry.',
              )}
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full">
                <HardHat className="size-4" />
                {t('تصفّح المهن', 'Browse trades')}
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="whatsapp" className="w-full">
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
