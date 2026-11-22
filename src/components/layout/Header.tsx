import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Briefcase,
  ChevronLeft,
  Info,
  Menu,
  MessageCircle,
  Newspaper,
  X,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { BrandLogo } from '@/components/BrandLogo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const nav = [
  { to: '/services', ar: 'المهن', en: 'Trades', icon: Briefcase },
  { to: '/blog', ar: 'المدونة', en: 'Blog', icon: Newspaper },
  { to: '/about', ar: 'عن ساعدني', en: 'About', icon: Info },
  { to: '/contact', ar: 'تواصل', en: 'Contact', icon: MessageCircle },
] as const

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const overlayNav = location.pathname === '/services'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'rounded-full px-3 py-2 text-sm font-bold text-ink/70 transition-colors hover:bg-cream hover:text-brand',
      isActive && 'bg-cream text-brand',
    )

  const bar = (
    <div className="pointer-events-auto border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3.5 py-2.5 sm:px-5 sm:py-3 lg:px-6">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2.5 focus-ring"
          onClick={closeMenu}
        >
          <span className="inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-brand p-1 ring-1 ring-brand-dark/20 sm:size-11">
            <BrandLogo
              variant="header"
              size="md"
              className="size-full rounded-xl object-cover shadow-none ring-0"
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold tracking-tight text-ink sm:text-base">
              {t('ساعدني', 'Saedni')}
            </span>
            <span className="hidden truncate text-[10px] font-bold text-muted sm:block">
              {t('شغل وخدمات — السعودية', 'Trades & services — KSA')}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {t(item.ar, item.en)}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <Button
            size="sm"
            variant="accent"
            className="!hidden h-9 rounded-full px-4 md:!inline-flex"
            onClick={() => navigate('/contact')}
          >
            <MessageCircle className="size-4" />
            {t('تواصل', 'Contact')}
          </Button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-cream text-ink transition-colors hover:border-brand/40 hover:text-brand focus-ring sm:size-10 lg:hidden"
            aria-expanded={open}
            aria-controls="site-mobile-nav"
            aria-label={open ? t('إغلاق القائمة', 'Close menu') : t('فتح القائمة', 'Open menu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="site-mobile-nav"
          className="border-t border-line bg-gradient-to-b from-surface to-cream/40 px-3.5 py-4 sm:px-5 lg:hidden"
        >
          <div className="mx-auto max-w-6xl space-y-2">
            {nav.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-2xl border px-3.5 py-3.5 transition-colors',
                      isActive
                        ? 'border-brand/25 bg-brand/8 text-brand shadow-[var(--shadow-soft)]'
                        : 'border-line/80 bg-surface text-ink hover:border-brand/20 hover:bg-cream/80',
                    )
                  }
                >
                  <span
                    className={cn(
                      'inline-flex size-10 items-center justify-center rounded-xl',
                      'bg-cream text-brand',
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="flex-1 text-sm font-extrabold">{t(item.ar, item.en)}</span>
                  <ChevronLeft className="size-4 opacity-50 rtl:rotate-180" />
                </NavLink>
              )
            })}

            <Button
              variant="accent"
              className="mt-2 h-12 w-full rounded-2xl text-sm font-extrabold shadow-[0_8px_20px_rgba(166,123,75,0.28)]"
              onClick={() => {
                closeMenu()
                navigate('/contact')
              }}
            >
              <MessageCircle className="size-4" />
              {t('دعم ساعدني', 'Saedni support')}
            </Button>

            <p className="pt-1 text-center text-[11px] font-bold text-muted">
              {t(
                'دعم المنصة · اقتراح محتوى · تصحيح معلومات',
                'Support · content ideas · corrections',
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  )

  if (overlayNav) {
    return (
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
        {bar}
      </header>
    )
  }

  return <header className="relative z-50 bg-surface">{bar}</header>
}
