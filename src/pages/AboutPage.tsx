import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'

export function AboutPage() {
  const { t } = useLanguage()

  usePageMeta({
    titleAr: 'عن المنصة | ساعدني',
    titleEn: 'About | Saedni',
    descriptionAr:
      'ساعدني موقع سعودي لصفحات ومقالات المهن في مدن المملكة العربية السعودية — محتوى مفيد من غير أسماء شركات وهمية.',
    descriptionEn:
      'Saedni is a Saudi site for trade pages and articles across the Kingdom — useful content without fake company names.',
    canonicalPath: '/about',
  })

  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">
        <h1 className="heading-display">{t('عن ساعدني', 'About Saedni')}</h1>
        <p className="body-lead mt-4">
          {t(
            'ساعدني موقع سعودي يغطي مدن المملكة العربية السعودية: صفحات ومقالات عن المهن المحلية — بلاط، سباكة، مقاولات، نقل عفش وغيرها. الهدف إن الباحث يلاقي معلومة مفيدة وواضحة، من غير أسماء شركات وهمية.',
            'Saedni is a Saudi site covering cities across the Kingdom: pages and articles about local trades — tiling, plumbing, contracting, moving and more. The goal is useful, clear information for searchers, without fake company names.',
          )}
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          <h2 className="text-xl font-semibold text-ink">{t('المحتوى أولًا', 'Content first')}</h2>
          <p>
            {t(
              'لكل مهنة مقالات عملية وصفحات مدن. بنبني المحتوى عشان يفيد الناس ويظهر في البحث. بيانات أي منشأة بتتحط فقط عند وجود اتفاق واضح لاحقًا.',
              'Each trade gets practical articles and city pages. We build content to help people and appear in search. Any business details are added only later when there is a clear agreement.',
            )}
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          <h2 className="text-xl font-semibold text-ink">{t('شفافية للجمهور', 'Transparency for the public')}</h2>
          <p>
            {t(
              'ما بنعرضش ترتيب جوجل مضمون، ولا تقييمات أو شراكات غير موثّقة. أي بيانات تجريبية في الواجهة تُوسم بوضوح.',
              'We do not claim guaranteed Google rankings, or unverified reviews or partnerships. Any demo data in the interface is clearly labeled.',
            )}
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          <h2 className="text-xl font-semibold text-ink">{t('أين نعمل؟', 'Where do we operate?')}</h2>
          <p>
            {t(
              'نغطي مدن المملكة العربية السعودية: الرياض، جدة، مكة، المدينة، الدمام، الخبر، القصيم، حائل، تبوك، عسير، جازان وغيرها — السعودية فقط.',
              'We cover cities across the Kingdom: Riyadh, Jeddah, Makkah, Madinah, Dammam, Khobar, Qassim, Hail, Tabuk, Asir, Jazan and more — Saudi Arabia only.',
            )}
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          <h2 className="text-xl font-semibold text-ink">{t('الشفافية', 'Transparency')}</h2>
          <p>
            {t(
              'لا نعرض ترتيب جوجل أو أرقام زيارات أو شراكات غير موثّقة. أي بيانات تجريبية في الواجهة تُوسم بوضوح.',
              'We do not present unverified Google rankings, traffic figures, or partnerships. Any demo data in the interface is clearly labeled.',
            )}
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/blog" className="text-sm font-medium text-brand hover:underline">
            {t('اقرأ المدونة', 'Read the blog')}
          </Link>
          <Link to="/services" className="text-sm font-medium text-brand hover:underline">
            {t('تصفّح المهن', 'Browse trades')}
          </Link>
          <Link to="/contact" className="text-sm font-medium text-brand hover:underline">
            {t('تواصل معنا', 'Contact us')}
          </Link>
        </div>
      </div>
    </div>
  )
}
