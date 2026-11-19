import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

export function AdminPageHeader({
  title,
  description,
  action,
  backTo,
  backLabel = 'رجوع',
}: {
  title: string
  description?: string
  action?: ReactNode
  backTo?: string
  backLabel?: string
}) {
  return (
    <div className="space-y-4">
      {backTo ? (
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
        >
          <ArrowRight className="size-4" />
          {backLabel}
        </Link>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">{title}</h1>
          {description ? <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  )
}

export function AdminPanel({
  children,
  className,
  title,
  description,
  action,
}: {
  children: ReactNode
  className?: string
  title?: string
  description?: string
  action?: ReactNode
}) {
  return (
    <section
      className={cn(
        'overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-soft)]',
        className,
      )}
    >
      {title ? (
        <div className="flex flex-col gap-2 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-base font-extrabold text-ink sm:text-lg">{title}</h2>
            {description ? <p className="mt-0.5 text-sm text-muted">{description}</p> : null}
          </div>
          {action}
        </div>
      ) : null}
      <div className={cn(title ? 'p-5 sm:p-6' : '')}>{children}</div>
    </section>
  )
}

export function AdminStatCard({
  label,
  value,
  icon: Icon,
  hint,
  tone = 'brand',
}: {
  label: string
  value: ReactNode
  icon: LucideIcon
  hint?: string
  tone?: 'brand' | 'accent' | 'ink' | 'sand'
}) {
  const tones = {
    brand: 'from-brand/15 to-brand/5 text-brand',
    accent: 'from-accent/20 to-accent/5 text-accent',
    ink: 'from-ink/10 to-ink/5 text-ink',
    sand: 'from-sand/40 to-sand-light text-brand-dark',
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] sm:p-5">
      <div
        className={cn(
          'mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br',
          tones[tone],
        )}
      >
        <Icon className="size-5" />
      </div>
      <p className="text-[11px] font-bold tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 text-2xl font-extrabold tracking-tight text-ink">{value}</p>
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
    </div>
  )
}

export function AdminEmpty({ title, description }: { title: string; description?: string }) {
  return (
    <div className="px-6 py-14 text-center">
      <p className="font-extrabold text-ink">{title}</p>
      {description ? <p className="mt-1 text-sm text-muted">{description}</p> : null}
    </div>
  )
}
