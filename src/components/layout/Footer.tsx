import { Link, useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useSiteSettings } from '@/context/SiteSettingsContext'
import { cities } from '@/data/cities'
import { categories } from '@/data/services'
import { BrandLogo } from '@/components/BrandLogo'

export function Footer() {
  const { t, lang } = useLanguage()
  const { settings } = useSiteSettings()
  const navigate = useNavigate()

  return (
    <footer className="border-t-4 border-accent bg-ink text-white">
      <div className="container-page section-pad">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <BrandLogo variant="lockup-dark" size="md" className="rounded-xl sm:h-14" />
              <p className="mt-3 text-xs text-accent-soft">
                {lang === 'ar' ? settings.taglineAr : settings.taglineEn}
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              {t(
                'صفحات وأدلة شغل لمدن المملكة العربية السعودية — عشان الباحث يلاقي معلومة مفيدة ويوصل للخدمة المناسبة عنده.',
                'Trade pages and guides for cities across Saudi Arabia — so people get useful info and reach the right local service.',
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:contents">
            <div>
              <h3 className="mb-3 text-sm font-extrabold text-accent-soft sm:mb-4">{t('استكشف', 'Explore')}</h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li><Link className="inline-flex min-h-10 items-center hover:text-white" to="/services">{t('كل المهن', 'All trades')}</Link></li>
                <li><Link className="inline-flex min-h-10 items-center hover:text-white" to="/blog">{t('مقالات', 'Articles')}</Link></li>
                <li><Link className="inline-flex min-h-10 items-center hover:text-white" to="/about">{t('عن ساعدني', 'About')}</Link></li>
                <li><Link className="inline-flex min-h-10 items-center hover:text-white" to="/contact">{t('تواصل', 'Contact')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-extrabold text-accent-soft sm:mb-4">{t('مدن رئيسية', 'Main cities')}</h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                {cities.filter((c) => c.featured).map((city) => (
                  <li key={city.slug}>
                    <Link className="inline-flex min-h-10 items-center hover:text-white" to={`/locations/${city.slug}`}>
                      {lang === 'ar' ? city.nameAr : city.nameEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-extrabold text-accent-soft sm:mb-4">{t('مجالات الشغل', 'Work fields')}</h3>
            <ul className="space-y-2.5 text-sm text-white/65">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link className="inline-flex min-h-10 items-center hover:text-white" to={`/services?category=${cat.slug}`}>
                    {lang === 'ar' ? cat.nameAr : cat.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-3.5 text-sm text-white/70 sm:mt-6">
              <p>
                {t('واتساب:', 'WhatsApp:')}{' '}
                <span dir="ltr">{settings.whatsapp}</span>
              </p>
              <p className="mt-1">
                {t('البريد:', 'Email:')} {settings.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
          <div className="flex flex-col gap-2 text-xs leading-relaxed text-white/45 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <p>
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="cursor-pointer rounded-sm transition-colors hover:text-white/80 focus-ring"
                title="Admin"
                aria-label="Open admin"
              >
                ©
              </button>{' '}
              {new Date().getFullYear()}{' '}
              {lang === 'ar'
                ? `${settings.siteNameAr} — المملكة العربية السعودية`
                : `${settings.siteNameEn} — Kingdom of Saudi Arabia`}
            </p>
            <p>{lang === 'ar' ? settings.coverageAr : settings.coverageEn}</p>
          </div>

          <a
            href="https://top1markting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit max-w-full items-center gap-2.5 rounded-full bg-white px-3.5 py-2 text-[#1a2744] shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] focus-ring"
            aria-label={t('إشراف وتصميم Top1Markting', 'Designed & built by Top1Markting')}
          >
            <img
              src="/top1markting-logo.png"
              alt="Top1Markting"
              className="h-7 w-auto shrink-0 object-contain"
            />
            <span className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[13px] font-bold leading-none">
              <span>{t('إشراف وتصميم', 'Designed by')}</span>
              <span className="inline-flex items-baseline tracking-tight">
                <span>Top</span>
                <span className="text-[#f0a11a]">1</span>
                <span>Markting</span>
              </span>
            </span>
            <ExternalLink className="size-3.5 shrink-0 text-[#1a2744]/70" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
