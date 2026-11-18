import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'whatsapp' | 'accent'
type Size = 'sm' | 'md' | 'lg'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white hover:bg-brand-dark border border-transparent',
  secondary:
    'bg-ink text-white hover:bg-ink/90 border border-transparent',
  accent:
    'bg-accent text-white hover:brightness-95 border border-transparent',
  ghost: 'bg-transparent text-ink hover:bg-sand-light/80 border border-transparent',
  outline:
    'bg-surface text-ink border border-line hover:border-brand/50 hover:text-brand',
  whatsapp:
    'bg-[#1b5c3a] text-white hover:bg-[#154a2f] border border-transparent',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 min-h-10 px-3.5 text-sm rounded-lg',
  md: 'h-11 min-h-11 px-5 text-sm rounded-lg',
  lg: 'h-12 min-h-12 px-5 text-base rounded-xl sm:px-6',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-bold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 focus-ring',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
