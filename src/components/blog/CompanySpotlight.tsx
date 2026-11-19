import { Building2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { articleHasCompany } from '@/lib/cms'

type CompanySpotlightProps = {
  companyName: string
  companyLogo?: string
  companyAboutAr?: string
  companyAboutEn?: string
}

export function CompanySpotlight({
  companyName,
  companyLogo,
  companyAboutAr,
  companyAboutEn,
}: CompanySpotlightProps) {
  const { t, lang } = useLanguage()
  if (!articleHasCompany({ companyName })) return null

  const about =
    lang === 'ar'
      ? companyAboutAr || companyAboutEn || ''
      : companyAboutEn || companyAboutAr || ''

  return (
    <aside className="mt-10 overflow-hidden rounded-2xl border border-line bg-cream/70 p-5 sm:p-6">
      <p className="text-[11px] font-bold tracking-wide text-brand uppercase">
        {t('شركة مذكورة في المقال', 'Featured company')}
      </p>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface">
          {companyLogo ? (
            <img
              src={companyLogo}
              alt={companyName}
              className="size-full object-contain p-2"
            />
          ) : (
            <Building2 className="size-7 text-brand/70" />
          )}
        </div>
        <div className="min-w-0">
          <h2 className="text-lg font-extrabold text-ink">{companyName}</h2>
          {about ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">{about}</p>
          ) : (
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t(
                'معلومات الشركة تظهر هنا عند إضافتها — المحتوى الأساسي للمقال يظل مفيدًا للعميل أولًا.',
                'Company details appear here when added — the article itself stays useful for customers first.',
              )}
            </p>
          )}
        </div>
      </div>
    </aside>
  )
}
