import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, ShieldCheck } from 'lucide-react'
import { useAdminAuth } from '@/context/AdminAuthContext'
import { BrandLogo } from '@/components/BrandLogo'
import { Button } from '@/components/ui/Button'
import { Input, Label, FieldError } from '@/components/ui/Input'

export function AdminLoginPage() {
  const { isAuthenticated, login } = useAdminAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const from =
    (location.state as { from?: string } | null)?.from &&
    (location.state as { from?: string }).from !== '/admin/login'
      ? (location.state as { from: string }).from
      : '/admin'

  if (isAuthenticated) {
    return <Navigate to={from} replace />
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const ok = login(password)
    if (!ok) {
      setError('كلمة المرور غير صحيحة')
      return
    }
    navigate(from, { replace: true })
  }

  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      {/* Brand panel */}
      <section className="relative hidden overflow-hidden bg-gradient-to-br from-ink via-brand-dark to-ink lg:flex lg:flex-col lg:justify-between">
        <img
          src="/images/hero/hero-11-contracting-desktop.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-brand-dark/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgb(166_123_75_/_0.25),_transparent_50%)]" />

        <div className="relative px-10 pt-10">
          <div className="flex items-center gap-3">
            <BrandLogo variant="mark" size="md" className="size-12 rounded-2xl ring-1 ring-white/25" />
            <div>
              <p className="text-lg font-extrabold text-white">ساعدني</p>
              <p className="text-xs font-bold text-sand">Admin Board</p>
            </div>
          </div>
        </div>

        <div className="relative px-10 pb-12">
          <p className="text-[11px] font-bold tracking-[0.2em] text-sand uppercase">لوحة التحكم</p>
          <h1 className="mt-3 max-w-md text-3xl font-extrabold leading-snug text-white xl:text-4xl">
            أدِر المهن والمقالات والإعدادات من مكان واحد
          </h1>
          <ul className="mt-8 space-y-3">
            {['تعديل دليل المهن', 'كتابة ونشر المقالات', 'تحديث بيانات التواصل'].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-bold text-white/80">
                <span className="inline-flex size-7 items-center justify-center rounded-lg bg-accent/90 text-white">
                  <ShieldCheck className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form panel */}
      <section className="relative flex items-center justify-center bg-cream px-4 py-10 sm:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(23_25_22_/_0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(23_25_22_/_0.03)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative w-full max-w-md">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-bold text-muted transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4 rotate-180" />
            العودة للموقع
          </Link>

          <div className="overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow-lift)] sm:p-8">
            <div className="mb-7 flex flex-col items-center text-center lg:items-start lg:text-start">
              <BrandLogo variant="mark" size="lg" className="size-14 rounded-2xl lg:hidden" />
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-cream/70 px-3 py-1 text-[11px] font-bold text-accent lg:mt-0">
                <Lock className="size-3.5" />
                دخول آمن
              </div>
              <h2 className="mt-4 text-2xl font-extrabold text-ink">تسجيل دخول الأدمن</h2>
              <p className="mt-1.5 text-sm text-muted">أدخل كلمة المرور للوصول إلى لوحة التحكم</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <Label htmlFor="admin-password">كلمة المرور</Label>
                <div className="relative mt-1.5">
                  <Lock className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
                  <Input
                    id="admin-password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError('')
                    }}
                    className="h-12 rounded-xl ps-10"
                    placeholder="••••••••"
                  />
                </div>
                <FieldError>{error}</FieldError>
              </div>

              <Button type="submit" className="h-12 w-full rounded-xl" variant="primary">
                دخول إلى اللوحة
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
