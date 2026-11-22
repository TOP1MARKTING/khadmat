import { BookOpen, CheckCircle2, LifeBuoy, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useSiteSettings } from '@/context/SiteSettingsContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ContactForm } from '@/components/forms/ContactForm'
import { Button } from '@/components/ui/Button'
import { openWhatsApp } from '@/lib/whatsapp'

const PURPOSES = [
  {
    id: 'support' as const,
    icon: LifeBuoy,
    ar: 'دعم استخدام المنصة',
    en: 'Platform support',
    arHint: 'سؤال عن التصفح، الأدلة، أو مشكلة في الصفحة.',
    enHint: 'Browsing, guides, or a page issue.',
    wa: 'مرحباً ساعدني — أحتاج دعمًا في استخدام المنصة.',
  },
  {
    id: 'content' as const,
    icon: BookOpen,
    ar: 'اقتراح محتوى أو مهنة',
    en: 'Suggest content or a trade',
    arHint: 'اقترح دليلًا جديدًا أو موضوعًا يفيد الزوّار.',
    enHint: 'Suggest a new guide or topic that helps visitors.',
    wa: 'مرحباً ساعدني — لدي اقتراح محتوى / مهنة جديدة.',
  },
  {
    id: 'correction' as const,
    icon: CheckCircle2,
    ar: 'تصحيح معلومة',
    en: 'Correct information',
    arHint: 'لاحظت خطأ أو معلومة تحتاج تحديثًا في دليل.',
    enHint: 'You spotted an error or outdated detail in a guide.',
    wa: 'مرحباً ساعدني — أود تصحيح معلومة في أحد الأدلة.',
  },
]

export function ContactPage() {
  const { t } = useLanguage()
  const { settings } = useSiteSettings()

  usePageMeta({
    titleAr: 'تواصل ودعم | ساعدني',
    titleEn: 'Support & contact | Saedni',
    descriptionAr:
      'تواصل مع ساعدني للدعم، اقتراح المحتوى، أو تصحيح معلومات الأدلة — عبر واتساب المعتمد.',
    descriptionEn:
      'Contact Saedni for support, content suggestions, or guide corrections — via the approved WhatsApp channel.',
    canonicalPath: '/contact',
  })

  return (
    <div className="section-pad">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">{t('دعم ساعدني', 'Saedni support')}</p>
            <h1 className="heading-display">{t('تواصل معنا', 'Contact us')}</h1>
            <p className="body-lead mt-4">
              {t(
                'هذي الصفحة لدعم منصة ساعدني: أسئلة عن الاستخدام، اقتراح محتوى أو مهن، وتصحيح معلومات في الأدلة. مش صفحة طلب مواقع أو حجز خدمات.',
                'This page is for Saedni support: usage questions, content or trade suggestions, and correcting guide information. It is not for website requests or service booking.',
              )}
            </p>

            <div className="mt-8 space-y-3">
              {PURPOSES.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openWhatsApp(settings.whatsapp, item.wa)}
                    className="flex w-full items-start gap-3 rounded-2xl border border-line bg-surface p-4 text-start shadow-[var(--shadow-soft)] transition-colors hover:border-brand/30 hover:bg-cream/60 focus-ring"
                  >
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-extrabold text-ink">
                        {t(item.ar, item.en)}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                        {t(item.arHint, item.enHint)}
                      </span>
                    </span>
                    <MessageCircle className="mt-1 size-4 shrink-0 text-[#25D366]" />
                  </button>
                )
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-cream/50 p-4 sm:p-5">
              <p className="text-sm font-extrabold text-ink">
                {t('قناة الدعم المعتمدة', 'Approved support channel')}
              </p>
              <p className="mt-1 text-sm text-muted" dir="ltr">
                WhatsApp · {settings.whatsapp}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {t(
                  'عادةً نرد خلال يوم عمل. نسبة التصميم والإشراف لـ Top1Markting مذكورة في تذييل الموقع — الغرض هنا دعم ساعدني المعرفي.',
                  'We usually reply within one business day. Design credit for Top1Markting stays in the site footer — this page is for Saedni knowledge support.',
                )}
              </p>
              <Button
                variant="whatsapp"
                type="button"
                className="mt-4 w-full rounded-2xl sm:w-auto"
                onClick={() =>
                  openWhatsApp(
                    settings.whatsapp,
                    'مرحباً ساعدني — أحتاج مساعدة بخصوص المنصة.',
                  )
                }
              >
                <MessageCircle className="size-4" />
                {t('فتح واتساب الدعم', 'Open support WhatsApp')}
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <h2 className="text-lg font-extrabold text-ink">
              {t('اكتب رسالتك', 'Write your message')}
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              {t(
                'املأ التفاصيل باختصار، ثم نكمّل عبر واتساب برسالة جاهزة — بدون نموذج وهمي على الخادم.',
                'Add a short note, then continue on WhatsApp with a ready message — no fake on-site inbox.',
              )}
            </p>
            <div className="mt-4">
              <ContactForm intent="general" defaultTopic="support" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
