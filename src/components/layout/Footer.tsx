import { Link, useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useSiteSettings } from '@/context/SiteSettingsContext'
import { BrandLogo } from '@/components/BrandLogo'

export function Footer() {
  const { t, lang } = useLanguage()
  const { settings } = useSiteSettings()
  const navigate = useNavigate()

  const links = [
    { to: '/services', ar: 'المهن', en: 'Trades' },
    { to: '/blog', ar: 'المدونات', en: 'Blog' },
    { to: '/about', ar: 'عن ساعدني', en: 'About' },
    { to: '/contact', ar: 'تواصل', en: 'Contact' },
  ]

  const legalLinks = [
    { to: '/privacy', ar: 'الخصوصية', en: 'Privacy' },
    { to: '/terms', ar: 'شروط الاستخدام', en: 'Terms' },
  ]

  return (
    <footer className="border-t-4 border-accent bg-ink text-white">
      <div className="container-page flex flex-col items-center py-10 text-center sm:py-12">
        <Link to="/" className="inline-flex flex-col items-center gap-3 focus-ring">
          <BrandLogo
            variant="mark-light"
            size="lg"
            className="size-20 rounded-full bg-brand object-cover ring-2 ring-white/20 sm:size-24"
          />
          <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
            {lang === 'ar' ? settings.siteNameAr : settings.siteNameEn}
          </span>
        </Link>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65">
          {lang === 'ar' ? settings.taglineAr : settings.taglineEn}
        </p>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex h-9 items-center text-sm font-bold text-white/75 transition-colors hover:text-white"
            >
              {t(item.ar, item.en)}
            </Link>
          ))}
        </nav>

        <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {legalLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex h-8 items-center text-xs font-bold text-white/50 transition-colors hover:text-white/85"
            >
              {t(item.ar, item.en)}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-white/45">
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
            {lang === 'ar' ? settings.siteNameAr : settings.siteNameEn}
          </p>

          <a
            href="https://top1markting.com"
            target="_blank"
            rel="noopener noreferrer"
            dir="rtl"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white py-1.5 pe-3 ps-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition hover:bg-white/95 focus-ring"
            aria-label={t('تنفيذ Top1Markting', 'Built by Top1Markting')}
          >
            <svg viewBox="0 0 44 40" className="h-7 w-8 shrink-0" aria-hidden>
              <path fill="#0b1f3a" d="M2 5h26v6.5H18.5V35h-7V11.5H2V5z" />
              <path
                fill="#f0a11a"
                d="M30.5 35V16.5h-4L34 5l7.5 11.5H37.5V35H30.5z"
              />
            </svg>
            <span className="text-[11px] font-bold text-[#5b6b82]">
              {t('تنفيذ', 'Built by')}
            </span>
            <span className="text-[12px] font-extrabold tracking-tight text-[#0b1f3a]">
              Top<span className="text-[#f0a11a]">1</span>Markting
            </span>
            <ExternalLink className="size-3.5 shrink-0 text-[#94a3b8]" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
