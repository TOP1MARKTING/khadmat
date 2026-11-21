import { cn } from '@/lib/cn'

type Variant = 'mark' | 'mark-light' | 'header' | 'lockup' | 'lockup-dark'

type Props = {
  className?: string
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
}

const markSizes = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
}

const lockupHeights = {
  sm: 'h-9 max-h-9',
  md: 'h-11 max-h-11 sm:h-12 sm:max-h-12',
  lg: 'h-12 max-h-12 sm:h-14 sm:max-h-14',
}

const sources: Record<Variant, string> = {
  mark: '/logo.png',
  'mark-light': '/logo-light.png',
  header: '/logo-header.png',
  lockup: '/logo-lockup-light.png',
  'lockup-dark': '/logo-lockup-dark.png',
}

export function BrandLogo({ className, variant = 'mark', size = 'md' }: Props) {
  const isMark =
    variant === 'mark' || variant === 'mark-light' || variant === 'header'

  return (
    <img
      src={sources[variant]}
      alt="ساعدني | Saedni"
      className={cn(
        'shrink-0',
        isMark
          ? cn(
              markSizes[size],
              variant === 'header'
                ? 'rounded-2xl object-cover shadow-sm ring-1 ring-black/10'
                : 'rounded-full object-cover shadow-sm ring-1 ring-black/10',
            )
          : cn(lockupHeights[size], 'w-auto object-contain'),
        className,
      )}
    />
  )
}
