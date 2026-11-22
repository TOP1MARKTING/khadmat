import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'

export function PrivacyPage() {
  const { t, isAr } = useLanguage()

  usePageMeta({
    titleAr: 'سياسة الخصوصية | ساعدني',
    titleEn: 'Privacy Policy | Saedni',
    descriptionAr:
      'كيف تتعامل منصة ساعدني مع البيانات في المرحلة الحالية: محتوى معرفي، تواصل عبر واتساب، وتخزين محلي محدود.',
    descriptionEn:
      'How Saedni handles data in the current phase: knowledge content, WhatsApp contact, and limited local storage.',
    canonicalPath: '/privacy',
  })

  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">{t('قانوني', 'Legal')}</p>
        <h1 className="heading-display">{t('سياسة الخصوصية', 'Privacy Policy')}</h1>
        <p className="mt-3 text-sm text-muted">
          {t('آخر تحديث: نوفمبر 2026', 'Last updated: November 2026')}
        </p>

        <div className="prose-about mt-8 space-y-6 text-sm leading-relaxed text-ink/90 sm:text-[15px]">
          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('ما هي ساعدني؟', 'What is Saedni?')}
            </h2>
            <p>
              {t(
                'ساعدني منصة سعودية معرفية تقدّم أدلة عن المهن والخدمات المحلية. المرحلة الحالية مرجع معلومات فقط — بدون حجوزات أو دليل شركات أو إعلانات مدفوعة للجمهور.',
                'Saedni is a Saudi knowledge platform with guides about local trades and services. The current phase is informational only — no public bookings, company directory, or paid ads.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('الجهة المسؤولة', 'Operator')}
            </h2>
            <p>
              {t(
                'الفكرة والتصميم والإشراف على المنصة من شركة Top1Markting. للاستفسارات:',
                'Idea, design, and supervision are by Top1Markting. For inquiries:',
              )}{' '}
              <Link to="/contact" className="font-bold text-accent hover:underline">
                {t('صفحة التواصل', 'Contact page')}
              </Link>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('ما البيانات التي نتعامل معها؟', 'What data do we handle?')}
            </h2>
            <ul className="list-disc space-y-2 ps-5 text-muted">
              <li>
                {t(
                  'محتوى المنصة (أدلة المهن والمقالات والإعدادات) يُدار عبر لوحة تحكم محمية ويُخزَّن في Firebase عند تفعيل الربط السحابي.',
                  'Platform content (trade guides, articles, settings) is managed in a protected admin panel and stored in Firebase when cloud sync is enabled.',
                )}
              </li>
              <li>
                {t(
                  'نموذج التواصل في الموقع يعمل حاليًا على الواجهة فقط ولا يُرسل بياناتك إلى خادم في هذه المرحلة. للتواصل الفعلي نستخدم واتساب/قنوات Top1Markting الظاهرة في صفحة التواصل.',
                  'The on-site contact form currently stays on the frontend and does not send your data to a server in this phase. Real contact happens via WhatsApp / Top1Markting channels shown on the Contact page.',
                )}
              </li>
              <li>
                {t(
                  'قد يُحفظ محليًا في متصفحك (localStorage) تفضيل اللغة ونسخة مؤقتة من المحتوى للعرض السريع — وليس حساب مستخدم عام.',
                  'Your browser may store language preference and a temporary content cache in localStorage for faster display — not a public user account.',
                )}
              </li>
              <li>
                {t(
                  'دخول لوحة التحكم متاح لمسؤولين محددين فقط عبر Firebase Authentication (بريد/كلمة مرور).',
                  'Admin access is limited to specific operators via Firebase Authentication (email/password).',
                )}
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('الكوكيز والتحليلات', 'Cookies & analytics')}
            </h2>
            <p>
              {t(
                'لا نشغّل حاليًا أدوات إعلان طرف ثالث لتتبع الزوار داخل صفحات المحتوى. قد يستخدم مزوّد الاستضافة (مثل Vercel) سجلات تقنية أساسية لتشغيل الموقع وحمايته.',
                'We do not currently run third-party advertising trackers on content pages. The hosting provider (e.g. Vercel) may keep basic technical logs needed to run and protect the site.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('المشاركة مع أطراف أخرى', 'Sharing with others')}
            </h2>
            <p>
              {t(
                'لا نبيع بيانات الزوار. الخدمات التقنية المستخدمة لتشغيل الموقع (استضافة، Firebase للمحتوى ولوحة التحكم) قد تعالج بيانات تقنية ضمن عقودها التشغيلية.',
                'We do not sell visitor data. Technical providers used to run the site (hosting, Firebase for content/admin) may process technical data under their operational terms.',
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-extrabold text-ink sm:text-lg">
              {t('التحديثات', 'Updates')}
            </h2>
            <p>
              {t(
                'عند إضافة ميزات جديدة (مثل إرسال نماذج إلى خادم أو تحليلات)، سنحدّث هذه الصفحة لتعكس طريقة التشغيل الفعلية.',
                'If we add features (such as server-side forms or analytics), we will update this page to match actual operations.',
              )}
            </p>
          </section>

          <p className="border-t border-line pt-6 text-muted">
            {t('راجع أيضًا', 'Also see')}{' '}
            <Link to="/terms" className="font-bold text-accent hover:underline">
              {t('شروط الاستخدام', 'Terms of Use')}
            </Link>
            {isAr ? '.' : '.'}
          </p>
        </div>
      </div>
    </div>
  )
}
