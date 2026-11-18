import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

export type HeroTone = 'bright' | 'mid' | 'dark'

type HeroSlide = {
  mobile: string
  desktop: string
  /** Mobile overlay strength — based on photo brightness */
  tone: HeroTone
  /** Mobile-only: lift subject up above the search card */
  mobileLift?: boolean
}

/** Brand trade photos — mobile = full 9:16, desktop = center crop */
export const HERO_SLIDES: HeroSlide[] = [
  // First 6 only: raise subject on phone above the search card
  { mobile: '/images/hero/hero-01-plumbing.jpg', desktop: '/images/hero/hero-01-plumbing-desktop.jpg', tone: 'bright', mobileLift: true },
  { mobile: '/images/hero/hero-02-finishing.jpg', desktop: '/images/hero/hero-02-finishing-desktop.jpg', tone: 'bright', mobileLift: true },
  { mobile: '/images/hero/hero-03-tiling.jpg', desktop: '/images/hero/hero-03-tiling-desktop.jpg', tone: 'bright', mobileLift: true },
  { mobile: '/images/hero/hero-04-waterproofing.jpg', desktop: '/images/hero/hero-04-waterproofing-desktop.jpg', tone: 'bright', mobileLift: true },
  { mobile: '/images/hero/hero-05-electrical.jpg', desktop: '/images/hero/hero-05-electrical-desktop.jpg', tone: 'bright', mobileLift: true },
  { mobile: '/images/hero/hero-06-ac.jpg', desktop: '/images/hero/hero-06-ac-desktop.jpg', tone: 'bright', mobileLift: true },
  { mobile: '/images/hero/hero-07-painting.jpg', desktop: '/images/hero/hero-07-painting-desktop.jpg', tone: 'bright' },
  { mobile: '/images/hero/hero-08-moving.jpg', desktop: '/images/hero/hero-08-moving-desktop.jpg', tone: 'bright' },
  { mobile: '/images/hero/hero-09-cleaning.jpg', desktop: '/images/hero/hero-09-cleaning-desktop.jpg', tone: 'mid' },
  { mobile: '/images/hero/hero-10-gypsum.jpg', desktop: '/images/hero/hero-10-gypsum-desktop.jpg', tone: 'mid' },
  { mobile: '/images/hero/hero-11-contracting.jpg', desktop: '/images/hero/hero-11-contracting-desktop.jpg', tone: 'mid' },
  { mobile: '/images/hero/hero-12-marble.jpg', desktop: '/images/hero/hero-12-marble-desktop.jpg', tone: 'bright' },
  { mobile: '/images/hero/hero-13-landscaping.jpg', desktop: '/images/hero/hero-13-landscaping-desktop.jpg', tone: 'mid' },
  { mobile: '/images/hero/hero-14-leak.jpg', desktop: '/images/hero/hero-14-leak-desktop.jpg', tone: 'mid' },
  { mobile: '/images/hero/hero-15-renovation.jpg', desktop: '/images/hero/hero-15-renovation-desktop.jpg', tone: 'mid' },
]

const INTERVAL_MS = 2000

const mobileOverlay: Record<HeroTone, string> = {
  // Brighter photos need stronger bottom fade so white text stays readable
  bright:
    'bg-[linear-gradient(180deg,rgba(23,25,22,0.55)_0%,rgba(23,25,22,0.12)_28%,rgba(23,25,22,0.08)_48%,rgba(23,25,22,0.72)_72%,rgba(23,25,22,0.96)_100%)]',
  mid: 'bg-[linear-gradient(180deg,rgba(23,25,22,0.42)_0%,rgba(23,25,22,0.08)_30%,rgba(23,25,22,0.1)_50%,rgba(23,25,22,0.62)_74%,rgba(23,25,22,0.94)_100%)]',
  dark: 'bg-[linear-gradient(180deg,rgba(23,25,22,0.35)_0%,rgba(23,25,22,0.05)_32%,rgba(23,25,22,0.12)_52%,rgba(23,25,22,0.55)_76%,rgba(23,25,22,0.92)_100%)]',
}

const desktopOverlay =
  'bg-[linear-gradient(180deg,rgba(23,25,22,0.45)_0%,rgba(23,25,22,0.2)_35%,rgba(23,25,22,0.55)_70%,rgba(23,25,22,0.88)_100%)]'

export function HeroBackground({
  onIndexChange,
}: {
  onIndexChange?: (index: number) => void
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    onIndexChange?.(index)
  }, [index, onIndexChange])

  useEffect(() => {
    for (const offset of [1, 2]) {
      const slide = HERO_SLIDES[(index + offset) % HERO_SLIDES.length]
      const m = new Image()
      m.src = slide.mobile
      const d = new Image()
      d.src = slide.desktop
    }
  }, [index])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.mobile}
          className={cn(
            'absolute inset-0 overflow-hidden transition-opacity duration-[900ms] ease-out',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div
            className={cn(
              'absolute inset-0 bg-cover bg-center sm:hidden',
              slide.mobileLift && 'origin-bottom scale-[1.22] -translate-y-[9%]',
            )}
            style={{ backgroundImage: `url('${slide.mobile}')` }}
          />
          <div
            className="absolute inset-0 hidden bg-cover bg-center sm:block"
            style={{ backgroundImage: `url('${slide.desktop}')` }}
          />
          {/* Per-slide mobile gradient */}
          <div className={cn('absolute inset-0 sm:hidden', mobileOverlay[slide.tone])} />
          {/* Shared desktop gradient */}
          <div className={cn('absolute inset-0 hidden sm:block', desktopOverlay)} />
        </div>
      ))}
    </div>
  )
}

export function HeroSlideDots({
  index,
  className,
}: {
  index: number
  className?: string
}) {
  return (
    <div className={cn('flex justify-center gap-1.5', className)} aria-hidden>
      {HERO_SLIDES.map((slide, i) => (
        <span
          key={slide.mobile}
          className={cn(
            'h-1 rounded-full transition-all duration-500',
            i === index ? 'w-5 bg-accent' : 'w-1.5 bg-white/45',
          )}
        />
      ))}
    </div>
  )
}
