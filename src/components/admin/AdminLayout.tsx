import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  Briefcase,
  ExternalLink,
  Images,
  LayoutDashboard,
  LogOut,
  Menu,
  Newspaper,
  X,
} from 'lucide-react'
import { useAdminAuth } from '@/context/AdminAuthContext'
import { BrandLogo } from '@/components/BrandLogo'
import { cn } from '@/lib/cn'

const links = [
  { to: '/admin', end: true, ar: 'لوحة التحكم', icon: LayoutDashboard },
  { to: '/admin/services', end: false, ar: 'المهن', icon: Briefcase },
  { to: '/admin/blog', end: false, ar: 'المدونة', icon: Newspaper },
  { to: '/admin/media', end: false, ar: 'معرض الصور', icon: Images },
]

export function AdminLayout() {
  const { logout } = useAdminAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const onLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const nav = (
    <nav className="space-y-1 p-2">
      {links.map((item) => {
        const Icon = item.icon
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all duration-200',
                isActive
                  ? 'bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                  : 'text-white/65 hover:bg-white/8 hover:text-white',
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={cn(
                    'inline-flex size-9 items-center justify-center rounded-lg transition-colors',
                    isActive ? 'bg-accent text-white' : 'bg-white/8 text-white/80 group-hover:bg-white/12',
                  )}
                >
                  <Icon className="size-4" />
                </span>
                {item.ar}
              </>
            )}
          </NavLink>
        )
      })}
    </nav>
  )

  return (
    <div className="min-h-dvh bg-cream lg:grid lg:grid-cols-[260px_1fr]">
      {/* Desktop sidebar */}
      <aside className="relative hidden overflow-hidden bg-gradient-to-b from-ink via-ink to-brand-dark lg:flex lg:flex-col">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgb(166_123_75_/_0.22),_transparent_55%)]" />
        <div className="relative border-b border-white/10 px-5 py-5">
          <div className="flex items-center gap-3">
            <BrandLogo variant="mark" size="md" className="size-11 ring-white/20" />
            <div>
              <p className="text-sm font-extrabold text-white">Admin Board</p>
              <p className="text-[11px] font-bold text-sand">ساعدني — لوحة التحكم</p>
            </div>
          </div>
        </div>
        <div className="relative flex-1 py-3">{nav}</div>
        <div className="relative space-y-2 border-t border-white/10 p-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-white/70 transition-colors hover:bg-white/8 hover:text-white"
          >
            <ExternalLink className="size-4" />
            عرض الموقع
          </Link>
          <button
            type="button"
            onClick={onLogout}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-white/70 transition-colors hover:bg-white/8 hover:text-white"
          >
            <LogOut className="size-4" />
            خروج
          </button>
        </div>
      </aside>

      {/* Main column */}
      <div className="min-w-0">
        <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/85 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-cream/60 text-ink"
                aria-label="فتح القائمة"
              >
                <Menu className="size-5" />
              </button>
              <div>
                <p className="text-sm font-extrabold text-ink">Admin Board</p>
                <p className="text-[11px] font-bold text-muted">ساعدني</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-extrabold text-ink">مرحباً بك في لوحة التحكم</p>
              <p className="text-xs text-muted">أدر المحتوى والإعدادات من مكان واحد</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-line bg-cream/50 px-3 text-sm font-bold text-ink transition-colors hover:border-brand/40 hover:text-brand lg:hidden"
              >
                <ExternalLink className="size-4" />
              </Link>
              <button
                type="button"
                onClick={onLogout}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-line bg-cream/50 px-3 text-sm font-bold text-ink transition-colors hover:border-brand/40 hover:text-brand lg:hidden"
              >
                <LogOut className="size-4" />
                خروج
              </button>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            aria-label="إغلاق"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 start-0 flex w-[min(100%,300px)] flex-col bg-gradient-to-b from-ink via-ink to-brand-dark shadow-[var(--shadow-lift)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div className="flex items-center gap-3">
                <BrandLogo variant="mark" size="md" className="size-10 rounded-xl ring-1 ring-white/20" />
                <div>
                  <p className="text-sm font-extrabold text-white">Admin Board</p>
                  <p className="text-[11px] font-bold text-sand">ساعدني</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-white"
                aria-label="إغلاق القائمة"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-3">{nav}</div>
            <div className="space-y-1 border-t border-white/10 p-3">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-white/70"
              >
                <ExternalLink className="size-4" />
                عرض الموقع
              </Link>
              <button
                type="button"
                onClick={onLogout}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-white/70"
              >
                <LogOut className="size-4" />
                خروج
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
