import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  BookOpen,
  Briefcase,
  ChevronLeft,
  Info,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { BrandLogo } from '@/components/BrandLogo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const nav = [
  { to: '/services', ar: 'المهن', en: 'Trades', icon: Briefcase },
  { to: '/blog', ar: 'مقالات', en: 'Articles', icon: BookOpen },
  { to: '/about', ar: 'عن ساعدني', en: 'About', icon: Info },
  { to: '/contact', ar: 'تواصل', en: 'Contact', icon: MessageCircle },
]

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
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
      'rounded-full px-3 py-2 text-sm font-bold text-white/85 transition-colors hover:bg-white/12 hover:text-white',
      isActive && 'bg-white/15 text-white',
    )

  const pill = (
    <div
      className={cn(
        'pointer-events-auto sm:px-5 lg:px-6',
        isHome ? 'px-0 pt-0 pb-0 sm:pt-2.5' : 'px-0 pt-0 sm:px-5 sm:pt-4',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-3',
          // Phone: solid brand bar, soft bottom corners
          'rounded-none bg-brand px-3.5 py-2.5 shadow-soft',
          // Tablet/desktop: glass pill
          'sm:rounded-full sm:border sm:border-white/25 sm:bg-white/12 sm:px-4 sm:py-2.5 sm:shadow-[0_12px_40px_rgba(0,0,0,0.22)] sm:backdrop-blur-xl',
        )}
      >
        <Link to="/" className="group flex min-w-0 items-center gap-2.5" onClick={closeMenu}>
          <BrandLogo
            variant="mark"
            size="md"
            className="size-9 shrink-0 rounded-xl ring-1 ring-white/30 sm:size-10"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold tracking-tight text-white sm:text-base">
              {t('ساعدني', 'Saedni')}
            </span>
            <span className="hidden truncate text-[10px] font-bold text-accent-soft sm:block">
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
            variant="whatsapp"
            className="!hidden h-9 rounded-full px-4 md:!inline-flex"
            onClick={() => navigate('/contact')}
          >
            <MessageCircle className="size-4" />
            {t('تواصل', 'Contact')}
          </Button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white transition-colors lg:hidden focus-ring sm:size-10 sm:rounded-full"
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
          className="mx-3 mt-2 max-w-6xl overflow-hidden rounded-2xl border border-brand/30 bg-brand-dark p-3 shadow-[var(--shadow-lift)] sm:mx-auto lg:hidden"
        >
          <div className="space-y-1">
            {nav.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-xl px-3 py-3 text-white transition-colors',
                      isActive ? 'bg-white/15' : 'hover:bg-white/10',
                    )
                  }
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="size-4" />
                  </span>
                  <span className="flex-1 text-sm font-extrabold">{t(item.ar, item.en)}</span>
                  <ChevronLeft className="size-4 opacity-60 rtl:rotate-180" />
                </NavLink>
              )
            })}
          </div>
          <Button
            variant="whatsapp"
            className="mt-2 h-11 w-full rounded-xl md:hidden"
            onClick={() => {
              closeMenu()
              navigate('/contact')
            }}
          >
            <MessageCircle className="size-4" />
            {t('تواصل', 'Contact')}
          </Button>
        </div>
      )}
    </div>
  )

  // Home: bar in normal flow so the hero image starts flush under it.
  // Services: glass floats over the dark hero. Elsewhere: dark band.
  if (isHome) {
    return <header className="relative z-50 bg-brand sm:bg-ink">{pill}</header>
  }

  if (overlayNav) {
    return (
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
        {pill}
      </header>
    )
  }

  return (
    <header className="relative z-50 bg-brand sm:bg-gradient-to-b sm:from-ink sm:via-ink sm:to-brand-dark sm:pb-3">
      {pill}
    </header>
  )
}
