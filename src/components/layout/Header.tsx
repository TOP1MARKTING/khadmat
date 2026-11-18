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

  // Home always keeps the floating glass pill — never reverts to the old solid bar
  const floating = isHome
  const overHero = isHome && !scrolled && !open

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
      'text-sm font-bold transition-colors',
      overHero
        ? isActive
          ? 'text-white'
          : 'text-white/80 hover:text-white'
        : isActive
          ? 'text-brand'
          : 'text-ink/80 hover:text-accent',
    )

  return (
    <>
      {!isHome && <div className="h-14 sm:h-16 lg:h-[4.25rem]" aria-hidden />}

      <header
        className={cn(
          'z-50 transition-[background-color,box-shadow,border-color] duration-300',
          floating
            ? cn(
                'fixed inset-x-3 top-3 rounded-2xl border backdrop-blur-xl sm:inset-x-5 sm:top-4 lg:inset-x-8',
                overHero
                  ? 'border-white/25 bg-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.22)]'
                  : 'border-line/80 bg-cream/90 shadow-[var(--shadow-soft)]',
              )
            : 'fixed inset-x-0 top-0 border-b-2 border-line bg-cream/95 backdrop-blur-md',
        )}
      >
        <div className={cn(floating ? 'px-3 sm:px-4' : 'container-page')}>
          <div
            className={cn(
              'flex items-center justify-between gap-2',
              floating ? 'h-12 sm:h-14' : 'h-14 sm:h-16 sm:gap-3 lg:h-[4.25rem]',
            )}
          >
            <Link
              to="/"
              className="group flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 lg:flex-none"
              onClick={closeMenu}
            >
              <BrandLogo
                variant="mark"
                size="md"
                className={cn(
                  '!block transition-transform duration-200 group-hover:scale-[1.02] sm:!hidden',
                  overHero && 'ring-1 ring-white/30',
                )}
              />
              <BrandLogo
                variant={overHero ? 'lockup-dark' : 'lockup'}
                size="md"
                className="!hidden h-10 max-h-10 transition-transform duration-200 group-hover:scale-[1.02] sm:!block lg:h-11 lg:max-h-11"
              />
              <span className="min-w-0 leading-tight sm:hidden">
                <span
                  className={cn(
                    'block truncate text-base font-extrabold tracking-tight',
                    overHero ? 'text-white' : 'text-brand',
                  )}
                >
                  {t('ساعدني', 'Saedni')}
                </span>
                <span
                  className={cn(
                    'block truncate text-[10px] font-bold',
                    overHero ? 'text-accent-soft' : 'text-accent',
                  )}
                >
                  {t('المملكة العربية السعودية', 'Kingdom of Saudi Arabia')}
                </span>
              </span>
              <span
                className={cn(
                  'ms-1 hidden max-w-[11rem] border-s ps-3 leading-tight lg:block xl:max-w-[14rem]',
                  overHero ? 'border-white/25' : 'border-line',
                )}
              >
                <span
                  className={cn(
                    'block text-[11px] font-extrabold',
                    overHero ? 'text-white' : 'text-brand',
                  )}
                >
                  {t('شغل وخدمات', 'Trades & services')}
                </span>
                <span
                  className={cn(
                    'mt-0.5 block text-[10px] font-bold',
                    overHero ? 'text-accent-soft' : 'text-accent',
                  )}
                >
                  {t('المملكة العربية السعودية', 'Kingdom of Saudi Arabia')}
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
              {nav.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass}>
                  {t(item.ar, item.en)}
                </NavLink>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <LangToggle tone={overHero ? 'glass' : 'default'} />
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
                  overHero
                    ? 'border-white/30 bg-white/15 text-white'
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
              className="fixed inset-0 top-[4.75rem] z-40 bg-ink/35 backdrop-blur-[2px] sm:top-[5.25rem]"
              aria-label={t('إغلاق القائمة', 'Close menu')}
              onClick={closeMenu}
            />

            <div className="mobile-nav-panel fixed inset-x-3 top-[4.75rem] z-50 flex max-h-[calc(100dvh-5.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-lift)] sm:inset-x-5 sm:top-[5.25rem] lg:inset-x-8">
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
