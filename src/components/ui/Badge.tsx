import { cn } from '@/lib/cn'

export function Badge({
  children,
  tone = 'neutral',
  className,
}: {
  children: string
  tone?: 'neutral' | 'brand' | 'sand' | 'success' | 'warn'
  className?: string
}) {
  const tones = {
    neutral: 'bg-cream text-muted border-line',
    brand: 'bg-brand/10 text-brand border-brand/15',
    sand: 'bg-sand-light text-ink border-sand/50',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    warn: 'bg-amber-50 text-amber-900 border-amber-100',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
