import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useAdminAuth } from '@/context/AdminAuthContext'
import { BrandLogo } from '@/components/BrandLogo'
import { Button } from '@/components/ui/Button'
import { Input, Label, FieldError } from '@/components/ui/Input'

const highlights = [
  'تعديل دليل المهن والخدمات',
  'كتابة ونشر المقالات',
  'إدارة معرض الصور',
]

export function AdminLoginPage() {
  const { isAuthenticated, authReady, login } = useAdminAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState(
    () => import.meta.env.VITE_FIREBASE_ADMIN_EMAIL || '',
  )
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [busy, setBusy] = useState(false)

  const from =
    (location.state as { from?: string } | null)?.from &&
    (location.state as { from?: string }).from !== '/admin/login'
      ? (location.state as { from: string }).from
      : '/admin'

  if (authReady && isAuthenticated) {
    return <Navigate to={from} replace />
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const result = await login(email, password)
      if (!result.ok) {
        setError(result.message)
        return
      }
      navigate(from, { replace: true })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <section className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between">
        <img
          src="/images/hero/hero-11-contracting-desktop.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/92 via-ink/85 to-ink/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgb(166_123_75_/_0.28),_transparent_55%)]" />

        <div className="relative px-10 pt-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-12 items-center justify-center overflow-hidden rounded-2xl bg-brand p-1 ring-1 ring-white/20">
              <BrandLogo
                variant="header"
                size="md"
                className="size-full rounded-xl object-cover shadow-none ring-0"
              />
            </span>
            <div>
              <p className="text-lg font-extrabold text-white">ساعدني</p>
              <p className="text-xs font-bold text-sand">لوحة التحكم</p>
            </div>
          </div>
        </div>

        <div className="relative px-10 pb-12">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-[0.18em] text-sand">
            <Sparkles className="size-3.5" />
            ADMIN BOARD
          </p>
          <h1 className="mt-3 max-w-md text-3xl font-extrabold leading-snug text-white xl:text-4xl">
            أدِر المهن والمقالات والإعدادات من مكان واحد
          </h1>
          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-bold text-white/85">
                <span className="inline-flex size-8 items-center justify-center rounded-xl bg-brand text-white shadow-[0_8px_18px_rgba(45,90,61,0.35)]">
                  <ShieldCheck className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative flex flex-col bg-cream">
        <div className="relative h-36 overflow-hidden sm:h-44 lg:hidden">
          <img
            src="/images/team/team-01-villas.png"
            alt=""
            className="absolute inset-0 size-full object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/55 to-cream" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm ring-1 ring-white/20"
            >
              <ArrowLeft className="size-3.5 rotate-180" />
              الموقع
            </Link>
            <span className="text-[10px] font-extrabold tracking-[0.16em] text-sand">
              ADMIN
            </span>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center px-4 pb-10 pt-0 sm:px-8 lg:py-10">
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgb(23_25_22_/_0.035)_1px,transparent_1px),linear-gradient(90deg,rgb(23_25_22_/_0.035)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative w-full max-w-md">
            <Link
              to="/"
              className="mb-6 hidden items-center gap-1.5 text-sm font-bold text-muted transition-colors hover:text-brand lg:inline-flex"
            >
              <ArrowLeft className="size-4 rotate-180" />
              العودة للموقع
            </Link>

            <div className="-mt-10 overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow-lift)] sm:p-8 lg:mt-0">
              <div className="mb-7 flex flex-col items-center text-center">
                <span className="inline-flex size-16 items-center justify-center overflow-hidden rounded-2xl bg-brand p-1.5 ring-1 ring-brand-dark/20 shadow-[0_10px_24px_rgba(45,90,61,0.28)]">
                  <BrandLogo
                    variant="header"
                    size="lg"
                    className="size-full rounded-xl object-cover shadow-none ring-0"
                  />
                </span>
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-brand/20 bg-brand/8 px-3 py-1 text-[11px] font-extrabold text-brand">
                  <Lock className="size-3.5" />
                  دخول Firebase
                </div>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink">
                  تسجيل دخول الأدمن
                </h2>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted">
                  سجّل الدخول بالبريد وكلمة المرور من Firebase Authentication
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="admin-email">البريد الإلكتروني</Label>
                  <div className="relative mt-1.5">
                    <Mail className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
                    <Input
                      id="admin-email"
                      type="email"
                      autoComplete="username"
                      dir="ltr"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError('')
                      }}
                      className="h-12 rounded-2xl ps-10 text-start"
                      placeholder="admin@saedniksa.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="admin-password">كلمة المرور</Label>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
                    <Input
                      id="admin-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError('')
                      }}
                      className="h-12 rounded-2xl pe-11 ps-10"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute end-2.5 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted transition-colors hover:bg-cream hover:text-brand"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                  <FieldError>{error}</FieldError>
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-2xl text-sm font-extrabold shadow-[0_10px_24px_rgba(45,90,61,0.28)]"
                  variant="primary"
                  disabled={busy || !authReady}
                >
                  {busy ? 'جاري الدخول…' : 'دخول إلى اللوحة'}
                </Button>
              </form>

              <p className="mt-6 text-center text-[11px] font-bold text-muted">
                فكرة وتصميم وإشراف{' '}
                <a
                  href="https://top1markting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  Top1Markting
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
