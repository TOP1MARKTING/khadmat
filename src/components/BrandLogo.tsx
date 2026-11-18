import { cn } from '@/lib/cn'

type Variant = 'mark' | 'lockup' | 'lockup-dark'

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
  lockup: '/logo-lockup-light.png',
  'lockup-dark': '/logo-lockup-dark.png',
}

export function BrandLogo({ className, variant = 'mark', size = 'md' }: Props) {
  const isLockup = variant !== 'mark'

  return (
    <img
      src={sources[variant]}
      alt="ساعدني | Saedni"
      className={cn(
        'shrink-0 object-contain',
        isLockup
          ? cn(lockupHeights[size], 'w-auto')
          : cn(markSizes[size], 'rounded-xl shadow-sm'),
        className,
      )}
    />
  )
}
