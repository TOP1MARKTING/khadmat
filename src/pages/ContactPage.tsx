import { ExternalLink, Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ContactForm } from '@/components/forms/ContactForm'
import { Button } from '@/components/ui/Button'

const TOP1 = {
  name: 'Top1Markting',
  site: 'https://top1markting.com',
  whatsappSa: '+966 54 988 1368',
  whatsappSaDigits: '966549881368',
  whatsappAe: '+971 50 766 2114',
  whatsappAeDigits: '971507662114',
  coverageAr: 'الرياض · جدة · مكة · الدمام · دبي · أبوظبي · الشارقة',
  coverageEn: 'Riyadh · Jeddah · Makkah · Dammam · Dubai · Abu Dhabi · Sharjah',
}

export function ContactPage() {
  const { t } = useLanguage()

  usePageMeta({
    titleAr: 'تواصل معنا | ساعدني — Top1Markting',
    titleEn: 'Contact | Saedni — Top1Markting',
    descriptionAr:
      'تواصل مع شركة Top1Markting — الفكرة والتصميم والإشراف على منصة ساعدني. واتساب السعودية والإمارات.',
    descriptionEn:
      'Contact Top1Markting — idea, design, and supervision of Saedni. WhatsApp Saudi Arabia & UAE.',
    canonicalPath: '/contact',
  })

  return (
    <div className="section-pad">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Top1Markting</p>
            <h1 className="heading-display">{t('تواصل معنا', 'Contact us')}</h1>
            <p className="body-lead mt-4">
              {t(
                'منصة ساعدني من فكرة وتصميم وإشراف شركة Top1Markting. تواصل معنا للاستفسارات، طلبات المواقع، أو أي سؤال عن المنصة.',
                'Saedni is the idea, design, and supervision of Top1Markting. Contact us for inquiries, website requests, or any question about the platform.',
              )}
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-surface shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3 border-b border-line bg-cream/70 px-5 py-4">
                <img
                  src="/top1markting-logo.png"
                  alt="Top1Markting"
                  className="h-9 w-auto object-contain"
                />
                <div>
                  <p className="text-sm font-extrabold text-ink">
                    Top<span className="text-[#f0a11a]">1</span>Markting
                  </p>
                  <p className="text-[11px] font-bold text-muted">
                    {t(
                      'فكرة · تصميم · تنفيذ · إشراف',
                      'Idea · design · build · supervision',
                    )}
                  </p>
                </div>
              </div>

              <div className="space-y-4 p-5 text-sm">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className="font-extrabold text-ink">
                      {t('واتساب السعودية', 'Saudi WhatsApp')}
                    </p>
                    <p className="mt-0.5 text-muted" dir="ltr">
                      {TOP1.whatsappSa}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                    <MessageCircle className="size-4" />
                  </span>
                  <div>
                    <p className="font-extrabold text-ink">
                      {t('واتساب الإمارات', 'UAE WhatsApp')}
                    </p>
                    <p className="mt-0.5 text-muted" dir="ltr">
                      {TOP1.whatsappAe}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                    <Globe className="size-4" />
                  </span>
                  <div>
                    <p className="font-extrabold text-ink">{t('الموقع', 'Website')}</p>
                    <a
                      href={TOP1.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1 font-bold text-accent hover:underline"
                      dir="ltr"
                    >
                      top1markting.com
                      <ExternalLink className="size-3 opacity-70" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="font-extrabold text-ink">
                      {t('التغطية', 'Coverage')}
                    </p>
                    <p className="mt-0.5 text-muted">
                      {t(TOP1.coverageAr, TOP1.coverageEn)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <p className="font-extrabold text-ink">
                      {t('الرد', 'Response')}
                    </p>
                    <p className="mt-0.5 text-muted">
                      {t(
                        'عادةً نرد خلال 24 ساعة في أيام العمل.',
                        'We usually reply within 24 hours on business days.',
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                  <Button
                    variant="whatsapp"
                    type="button"
                    className="w-full rounded-2xl sm:flex-1"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${TOP1.whatsappSaDigits}`,
                        '_blank',
                        'noopener,noreferrer',
                      )
                    }
                  >
                    <MessageCircle className="size-4" />
                    {t('واتساب السعودية', 'Saudi WhatsApp')}
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full rounded-2xl sm:flex-1"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${TOP1.whatsappAeDigits}`,
                        '_blank',
                        'noopener,noreferrer',
                      )
                    }
                  >
                    <Phone className="size-4" />
                    {t('واتساب الإمارات', 'UAE WhatsApp')}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <h2 className="text-lg font-extrabold text-ink">
              {t('نموذج التواصل', 'Contact form')}
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              {t(
                'اترك رسالتك — فريق Top1Markting يرد عليك في أقرب وقت.',
                'Leave a message — the Top1Markting team will get back to you soon.',
              )}
            </p>
            <div className="mt-4">
              <ContactForm intent="general" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
