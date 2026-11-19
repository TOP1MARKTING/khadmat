import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

export type HeroTone = 'bright' | 'mid' | 'dark'

type HeroSlide = {
  mobile: string
  desktop: string
  tone: HeroTone
}

/** Brand trade photos — landscape desktop images used on phone stacked hero + laptop */
export const HERO_SLIDES: HeroSlide[] = [
  { mobile: '/images/hero/hero-01-plumbing.jpg', desktop: '/images/hero/hero-01-plumbing-desktop.jpg', tone: 'bright' },
  { mobile: '/images/hero/hero-02-finishing.jpg', desktop: '/images/hero/hero-02-finishing-desktop.jpg', tone: 'bright' },
  { mobile: '/images/hero/hero-03-tiling.jpg', desktop: '/images/hero/hero-03-tiling-desktop.jpg', tone: 'bright' },
  { mobile: '/images/hero/hero-04-waterproofing.jpg', desktop: '/images/hero/hero-04-waterproofing-desktop.jpg', tone: 'bright' },
  { mobile: '/images/hero/hero-05-electrical.jpg', desktop: '/images/hero/hero-05-electrical-desktop.jpg', tone: 'bright' },
  { mobile: '/images/hero/hero-06-ac.jpg', desktop: '/images/hero/hero-06-ac-desktop.jpg', tone: 'bright' },
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

const desktopOverlay =
  'bg-[linear-gradient(180deg,rgba(23,25,22,0.45)_0%,rgba(23,25,22,0.2)_35%,rgba(23,25,22,0.55)_70%,rgba(23,25,22,0.88)_100%)]'

/** Single shared slider clock for mobile + laptop heroes */
export function useHeroSlider(onIndexChange?: (index: number) => void) {
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
      const d = new Image()
      d.src = slide.desktop
    }
  }, [index])

  return index
}

/** Full-bleed laptop hero background */
export function HeroBackground({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.desktop}
          className={cn(
            'absolute inset-0 overflow-hidden transition-opacity duration-[900ms] ease-out',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.desktop}')` }}
          />
          <div className={cn('absolute inset-0', desktopOverlay)} />
        </div>
      ))}
    </div>
  )
}

/** Mobile landscape image strip — copy/CTAs/search sit below */
export function MobileWideHero({
  index,
  className,
}: {
  index: number
  className?: string
}) {
  return (
    <div
      className={cn('relative w-full overflow-hidden bg-ink aspect-[16/10]', className)}
      aria-hidden
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.desktop}
          className={cn(
            'absolute inset-0 transition-opacity duration-[900ms] ease-out',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={slide.desktop}
            alt=""
            className="size-full object-contain object-center"
          />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-2">
        <HeroSlideDots index={index} />
      </div>
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
          key={slide.desktop}
          className={cn(
            'h-1 rounded-full transition-all duration-500',
            i === index ? 'w-5 bg-accent' : 'w-1.5 bg-white/45',
          )}
        />
      ))}
    </div>
  )
}
