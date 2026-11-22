import { Link, useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useSiteSettings } from '@/context/SiteSettingsContext'
import { BrandLogo } from '@/components/BrandLogo'

const links = [
  { to: '/services', ar: 'المهن', en: 'Trades' },
  { to: '/blog', ar: 'المدونات', en: 'Blog' },
  { to: '/about', ar: 'عن ساعدني', en: 'About' },
  { to: '/contact', ar: 'تواصل', en: 'Contact' },
]

export function Footer() {
  const { t, lang } = useLanguage()
  const { settings } = useSiteSettings()
  const navigate = useNavigate()

  return (
    <footer className="border-t-4 border-accent bg-ink text-white">
      <div className="container-page flex flex-col items-center py-10 text-center sm:py-12">
        <Link
          to="/"
          className="inline-flex flex-col items-center gap-3 focus-ring"
        >
          <BrandLogo
            variant="mark-light"
            size="lg"
            className="size-20 rounded-full bg-brand object-cover ring-2 ring-white/20 sm:size-24"
          />
          <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
            {lang === 'ar' ? settings.siteNameAr : settings.siteNameEn}
          </span>
        </Link>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
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

          <div className="flex flex-col items-center gap-2">
            <p className="max-w-sm text-center text-[11px] leading-relaxed text-white/50">
              {t(
                'الفكرة · التصميم · التنفيذ · الإشراف — شركة Top1Markting',
                'Idea · design · build · supervision — Top1Markting',
              )}
            </p>
            <a
              href="https://top1markting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[#1a2744] shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] focus-ring"
              aria-label={t(
                'فكرة وتصميم وإشراف Top1Markting',
                'Idea, design & supervision by Top1Markting',
              )}
            >
              <img
                src="/top1markting-logo.png"
                alt="Top1Markting"
                className="h-6 w-auto shrink-0 object-contain"
              />
              <span className="text-xs font-bold">
                {t('فكرة وتصميم وإشراف', 'Idea, design & supervision')} Top
                <span className="text-[#f0a11a]">1</span>
                Markting
              </span>
              <ExternalLink className="size-3 shrink-0 opacity-70" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
