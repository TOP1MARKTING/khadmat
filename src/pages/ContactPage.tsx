import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ContactForm } from '@/components/forms/ContactForm'
import { Button } from '@/components/ui/Button'

export function ContactPage() {
  const { t } = useLanguage()

  usePageMeta({
    titleAr: 'تواصل معنا | ساعدني',
    titleEn: 'Contact | Saedni',
    descriptionAr: 'تواصل مع فريق ساعدني للاستفسارات العامة أو طلبات الخدمات في مدن المملكة العربية السعودية.',
    descriptionEn: 'Contact the Saedni team for general inquiries or service requests across Saudi Arabia.',
    canonicalPath: '/contact',
  })

  return (
    <div className="section-pad">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="heading-display">{t('تواصل معنا', 'Contact us')}</h1>
            <p className="body-lead mt-4">
              {t(
                'للاستفسارات العامة، طلبات الخدمات، أو فرص التأجير التجاري للصفحات الرقمية.',
                'For general inquiries, service requests, or commercial rental opportunities for digital pages.',
              )}
            </p>
            <div className="mt-8 space-y-4 rounded-md border border-line bg-cream p-5 text-sm">
              <p>
                <span className="font-medium text-ink">{t('واتساب:', 'WhatsApp:')}</span>{' '}
                <span dir="ltr" className="text-muted">+966 5X XXX XXXX</span>
              </p>
              <p>
                <span className="font-medium text-ink">{t('البريد:', 'Email:')}</span>{' '}
                <span className="text-muted">hello@saedni.sa</span>
              </p>
              <p>
                <span className="font-medium text-ink">{t('النطاق:', 'Coverage:')}</span>{' '}
                <span className="text-muted">{t('المملكة العربية السعودية', 'Kingdom of Saudi Arabia')}</span>
              </p>
              <p className="text-xs text-muted">
                {t('بيانات تواصل تجريبية للواجهة فقط.', 'Placeholder contact details for the frontend only.')}
              </p>
              <Button variant="whatsapp" type="button">
                <MessageCircle className="size-4" />
                {t('فتح واتساب (تجريبي)', 'Open WhatsApp (demo)')}
              </Button>
            </div>
          </div>
          <div className="rounded-md border border-line bg-surface p-5 sm:p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-lg font-semibold">{t('نموذج التواصل', 'Contact form')}</h2>
            <div className="mt-4">
              <ContactForm intent="general" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
