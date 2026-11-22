import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'

export function TermsPage() {
  const { t } = useLanguage()

  usePageMeta({
    titleAr: 'شروط الاستخدام | ساعدني',
    titleEn: 'Terms of Use | Saedni',
    descriptionAr:
      'شروط استخدام منصة ساعدني كمرجع معرفي للمهن والخدمات في السعودية — دون تقديم خدمة تنفيذ أو وساطة حجوزات في المرحلة الحالية.',
    descriptionEn:
      'Terms for using Saedni as a knowledge reference for trades in Saudi Arabia — without execution services or booking brokerage in the current phase.',
    canonicalPath: '/terms',
  })

  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">{t('قانوني', 'Legal')}</p>
        <h1 className="heading-display">{t('شروط الاستخدام', 'Terms of Use')}</h1>
        <p className="mt-3 text-sm text-muted">
          {t('آخر تحديث: نوفمبر 2026', 'Last updated: November 2026')}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/90 sm:text-[15px]">
          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('قبول الشروط', 'Acceptance')}
            </h2>
            <p>
              {t(
                'باستخدامك موقع ساعدني فأنت توافق على هذه الشروط. إذا لم توافق، يُفضَّل عدم استخدام الموقع.',
                'By using Saedni you agree to these terms. If you do not agree, please do not use the site.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('طبيعة المنصة', 'Nature of the platform')}
            </h2>
            <p>
              {t(
                'ساعدني منصة معلومات تقدّم أدلة وشروحًا عن المهن والخدمات المحلية في المملكة. المحتوى للتثقيف والمساعدة على الفهم قبل التنفيذ — وليست وسيط حجز، ولا دليل شركات معتمد، ولا ضمان لجودة أي مقدّم خدمة خارج المنصة.',
                'Saedni is an information platform with guides about local trades in Saudi Arabia. Content is educational to help understanding before work starts — it is not a booking broker, not a certified company directory, and not a guarantee of any off-platform provider’s quality.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('المرحلة الحالية', 'Current phase')}
            </h2>
            <ul className="list-disc space-y-2 ps-5 text-muted">
              <li>
                {t(
                  'لا تتوفّر للجمهور خدمات إعلان مدفوعة أو تأجير صفحات داخل المنصة في هذه المرحلة.',
                  'Paid advertising and page rental are not available to the public in this phase.',
                )}
              </li>
              <li>
                {t(
                  'دعم المنصة واقتراح المحتوى وتصحيح المعلومات يتم عبر صفحة التواصل وقناة واتساب المعتمدة. نسبة التصميم والإشراف لـ Top1Markting مذكورة في تذييل الموقع.',
                  'Platform support, content suggestions, and corrections go through the Contact page and approved WhatsApp channel. Design credit for Top1Markting remains in the site footer.',
                )}
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('دقة المحتوى', 'Content accuracy')}
            </h2>
            <p>
              {t(
                'نبذل جهدًا لجعل الأدلة عملية وواضحة، لكن المعلومات عامة وقد تختلف حسب المدينة والموقع والمقاول والخامات. القرار النهائي والمسؤولية التعاقدية بينك وبين أي مقدّم خدمة تتعامل معه خارج ساعدني.',
                'We aim for practical, clear guides, but information is general and may vary by city, site, contractor, and materials. Final decisions and contracts are between you and any provider you engage outside Saedni.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('الملكية الفكرية', 'Intellectual property')}
            </h2>
            <p>
              {t(
                'اسم ساعدني والشعار والمحتوى الأصلي للمنصة محميان. لا يُنسخ المحتوى لإعادة نشره كمنتج منافس دون إذن. الصور التوضيحية للمهن تمثيلية وليست إعلانًا عن فريق موظفين للمنصة.',
                'The Saedni name, logo, and original content are protected. Do not republish content as a competing product without permission. Trade illustrations are representational and are not a staff team advertisement.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('الاستخدام المقبول', 'Acceptable use')}
            </h2>
            <p>
              {t(
                'يُمنع إساءة استخدام الموقع، محاولة اختراق لوحة التحكم، أو نشر محتوى مضلل عبر أي واجهة متاحة لك. المخالفات قد تؤدي لحجب الوصول واتخاذ إجراء مناسب.',
                'Do not abuse the site, attempt to breach the admin panel, or publish misleading content through any available interface. Violations may lead to access blocks and appropriate action.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('إخلاء المسؤولية', 'Disclaimer')}
            </h2>
            <p>
              {t(
                'المنصة تُقدَّم كما هي. لا نتحمل مسؤولية أضرار ناتجة عن الاعتماد على المحتوى دون تحقق ميداني، أو عن تعامل مع أطراف ثالثة خارج ساعدني.',
                'The platform is provided as is. We are not liable for damages from relying on content without on-site verification, or from dealings with third parties outside Saedni.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('التواصل', 'Contact')}
            </h2>
            <p>
              {t(
                'لأسئلة عن الشروط أو المنصة:',
                'For questions about these terms or the platform:',
              )}{' '}
              <Link to="/contact" className="font-bold text-accent hover:underline">
                {t('تواصل معنا', 'Contact us')}
              </Link>
              .
            </p>
          </section>

          <p className="border-t border-line pt-6 text-muted">
            {t('راجع أيضًا', 'Also see')}{' '}
            <Link to="/privacy" className="font-bold text-accent hover:underline">
              {t('سياسة الخصوصية', 'Privacy Policy')}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
