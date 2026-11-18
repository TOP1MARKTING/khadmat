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
import { LangToggle } from '@/components/ui/LangToggle'
import { cn } from '@/lib/cn'

const nav = [
  { to: '/services', ar: 'المهن', en: 'Trades', icon: Briefcase },
  { to: '/blog', ar: 'أدلة الشغل', en: 'Guides', icon: BookOpen },
  { to: '/about', ar: 'عن ساعدني', en: 'About', icon: Info },
  { to: '/contact', ar: 'تواصل', en: 'Contact', icon: MessageCircle },
]

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Glass floating bar only on phone home; laptop always solid cream above the hero
  const glassMobile = isHome && !scrolled && !open

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isHome) {
      setScrolled(false)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

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
      'text-sm font-bold transition-colors hover:text-accent',
      // glass only matters on mobile; on sm+ always dark ink links
      glassMobile
        ? 'max-sm:text-white/85 max-sm:hover:text-white sm:text-ink/80'
        : 'text-ink/80',
      isActive && (glassMobile ? 'max-sm:text-white text-brand' : 'text-brand'),
    )

  return (
    <>
      {/* Reserve header height so hero (and pages) start below the bar on laptop */}
      <div
        className={cn(
          'h-14 sm:h-[4.25rem] lg:h-[4.5rem]',
          isHome && 'max-sm:hidden',
        )}
        aria-hidden
      />

      <header
        className={cn(
          'z-50 transition-[background-color,box-shadow,border-radius,inset] duration-300',
          // Phone home: floating glass
          isHome
            ? cn(
                'fixed max-sm:inset-x-3 max-sm:top-3 max-sm:rounded-2xl max-sm:border max-sm:backdrop-blur-xl',
                glassMobile
                  ? 'max-sm:border-white/25 max-sm:bg-white/12 max-sm:shadow-[0_12px_40px_rgba(0,0,0,0.22)]'
                  : 'max-sm:border-line/80 max-sm:bg-cream/90 max-sm:shadow-[var(--shadow-soft)]',
              )
            : 'fixed inset-x-0 top-0 border-b-2 border-line bg-cream/95 backdrop-blur-md',
          // Laptop+: solid cream bar sitting above the hero (never overlaid)
          'sm:fixed sm:inset-x-0 sm:top-0 sm:rounded-none sm:border sm:border-x-0 sm:border-t-0 sm:border-b-2 sm:border-line sm:bg-cream sm:shadow-none sm:backdrop-blur-none',
        )}
      >
        <div
          className={cn(
            'container-page',
            isHome && 'max-sm:px-3',
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between gap-3',
              isHome
                ? 'h-12 max-sm:h-12 sm:h-[4.25rem] lg:h-[4.5rem]'
                : 'h-14 sm:h-[4.25rem] lg:h-[4.5rem]',
            )}
          >
            <Link
              to="/"
              className="group flex min-w-0 flex-1 items-center gap-2 sm:flex-none sm:gap-3.5"
              onClick={closeMenu}
            >
              {/* Phone mark */}
              <BrandLogo
                variant="mark"
                size="md"
                className={cn(
                  '!block shrink-0 transition-transform duration-200 group-hover:scale-[1.02] sm:!hidden',
                  glassMobile && 'ring-1 ring-white/30',
                )}
              />
              {/* Laptop lockup — dark on cream bar, vertically centered */}
              <BrandLogo
                variant="lockup-dark"
                size="md"
                className="!hidden h-10 max-h-10 w-auto object-contain object-right transition-transform duration-200 group-hover:scale-[1.02] sm:!block lg:h-11 lg:max-h-11"
              />
              {/* Phone name */}
              <span className="min-w-0 leading-tight sm:hidden">
                <span
                  className={cn(
                    'block truncate text-base font-extrabold tracking-tight',
                    glassMobile ? 'text-white' : 'text-brand',
                  )}
                >
                  {t('ساعدني', 'Saedni')}
                </span>
                <span
                  className={cn(
                    'block truncate text-[10px] font-bold',
                    glassMobile ? 'text-accent-soft' : 'text-accent',
                  )}
                >
                  {t('المملكة العربية السعودية', 'Kingdom of Saudi Arabia')}
                </span>
              </span>
              {/* Laptop tagline beside lockup */}
              <span className="hidden border-s-2 border-line/80 ps-3.5 leading-tight sm:block">
                <span className="block text-[11px] font-extrabold tracking-tight text-brand xl:text-xs">
                  {t('شغل وخدمات', 'Trades & services')}
                </span>
                <span className="mt-0.5 block text-[10px] font-bold text-accent xl:text-[11px]">
                  {t('المملكة العربية السعودية', 'Kingdom of Saudi Arabia')}
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
              {nav.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass}>
                  {t(item.ar, item.en)}
                </NavLink>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
              <LangToggle tone={glassMobile ? 'glass' : 'default'} className="sm:!opacity-100" />
              <Button
                size="sm"
                variant="whatsapp"
                className="!hidden h-10 md:!inline-flex"
                onClick={() => navigate('/contact')}
              >
                <MessageCircle className="size-4" />
                {t('تواصل', 'Contact')}
              </Button>
              <button
                type="button"
                className={cn(
                  'inline-flex size-10 items-center justify-center rounded-xl border transition-colors sm:size-11 lg:hidden focus-ring',
                  glassMobile
                    ? 'border-white/30 bg-white/15 text-white sm:border-line sm:bg-surface sm:text-ink'
                    : open
                      ? 'border-brand/30 bg-brand/5 text-brand'
                      : 'border-line bg-surface text-ink',
                )}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? t('إغلاق القائمة', 'Close menu') : t('فتح القائمة', 'Open menu')}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden" id="mobile-nav">
            <button
              type="button"
              className="fixed inset-0 top-[4.75rem] z-40 bg-ink/35 backdrop-blur-[2px] sm:top-16"
              aria-label={t('إغلاق القائمة', 'Close menu')}
              onClick={closeMenu}
            />

            <div className="mobile-nav-panel fixed inset-x-3 top-[4.75rem] z-50 flex max-h-[calc(100dvh-5.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-lift)] sm:inset-x-0 sm:top-16 sm:max-h-[calc(100dvh-4rem)] sm:rounded-none lg:inset-x-0">
              <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-3">
                <div className="space-y-1.5">
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
                              ? 'border-brand/25 bg-brand/[0.07] text-brand'
                              : 'border-transparent bg-transparent text-ink hover:border-line hover:bg-cream/70',
                          )
                        }
                      >
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                          <Icon className="size-4" />
                        </span>
                        <span className="flex-1 text-base font-extrabold">{t(item.ar, item.en)}</span>
                        <ChevronLeft className="size-4 text-muted/70 rtl:rotate-180" />
                      </NavLink>
                    )
                  })}
                </div>
              </div>

              <div className="shrink-0 border-t border-line bg-cream/90 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm">
                <Button
                  variant="whatsapp"
                  className="h-12 w-full rounded-2xl shadow-[var(--shadow-soft)]"
                  onClick={() => {
                    closeMenu()
                    navigate('/contact')
                  }}
                >
                  <MessageCircle className="size-4" />
                  {t('تواصل', 'Contact')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
