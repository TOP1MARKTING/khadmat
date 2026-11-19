import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Building2,
  Hammer,
  MapPin,
  Search,
  Sparkles,
  Truck,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useCms } from '@/context/CmsContext'
import { cities } from '@/data/cities'
import { categories } from '@/data/services'
import { Button } from '@/components/ui/Button'
import { Label } from '@/components/ui/Input'
import { ModernSelect } from '@/components/ui/ModernSelect'

const categoryIcons: Record<string, ReactNode> = {
  'construction-finishing': <Hammer className="size-4" />,
  'home-maintenance': <Wrench className="size-4" />,
  cleaning: <Sparkles className="size-4" />,
  'moving-logistics': <Truck className="size-4" />,
  'other-services': <Building2 className="size-4" />,
}

export function ServiceSearch({
  compact = false,
  variant = 'default',
}: {
  compact?: boolean
  variant?: 'default' | 'hero'
}) {
  const { t, lang } = useLanguage()
  const { services } = useCms()
  const navigate = useNavigate()
  const [service, setService] = useState('')
  const [city, setCity] = useState('')
  const [empty, setEmpty] = useState(false)
  const isHero = variant === 'hero'

  const serviceOptions = useMemo(
    () =>
      services.map((s) => {
        const category = categories.find((c) => c.slug === s.categorySlug)
        return {
          value: s.slug,
          label: lang === 'ar' ? s.nameAr : s.nameEn,
          group: category
            ? lang === 'ar'
              ? category.nameAr
              : category.nameEn
            : undefined,
          icon: categoryIcons[s.categorySlug] ?? <Wrench className="size-4" />,
        }
      }),
    [lang, services],
  )

  const cityOptions = useMemo(
    () =>
      cities.map((c) => ({
        value: c.slug,
        label: lang === 'ar' ? c.nameAr : c.nameEn,
        group: lang === 'ar' ? c.regionAr : c.regionEn,
        icon: <MapPin className="size-4" />,
      })),
    [lang],
  )

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!service || !city) {
      setEmpty(true)
      return
    }
    setEmpty(false)
    const cityData = cities.find((c) => c.slug === city)
    if (!cityData) return
    navigate(`/sa/${cityData.regionSlug}/${city}/${service}`)
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        compact
          ? 'rounded-xl border border-accent/25 bg-surface p-2.5 shadow-[var(--shadow-lift)]'
          : isHero
            ? 'rounded-2xl border border-white/18 bg-ink/45 p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:rounded-2xl sm:border-accent/20 sm:bg-surface/95 sm:p-5 sm:shadow-[var(--shadow-lift)] sm:backdrop-blur-md'
            : 'rounded-2xl border border-accent/20 bg-surface p-3.5 shadow-[var(--shadow-lift)] sm:p-5'
      }
    >
      <p
        className={
          compact
            ? 'mb-1.5 text-[10px] font-bold tracking-wide text-accent'
            : isHero
              ? 'mb-1.5 text-[10px] font-bold tracking-wide text-accent-soft sm:mb-3 sm:text-xs sm:text-accent'
              : 'mb-2.5 text-xs font-bold tracking-wide text-accent sm:mb-3'
        }
      >
        {t('دور على الشغل اللي محتاجه', 'Find the trade you need')}
      </p>
      <div
        className={
          compact
            ? 'grid grid-cols-2 gap-1.5'
            : `grid gap-1.5 sm:gap-3 lg:grid-cols-[1.2fr_1fr_auto]`
        }
      >
        <div className="min-w-0">
          <Label
            htmlFor="search-service"
            className={
              compact
                ? 'mb-0.5 text-[10px]'
                : isHero
                  ? 'mb-1 text-[11px] text-white/80 sm:mb-1.5 sm:text-sm sm:text-ink'
                  : 'mb-1.5'
            }
          >
            {t('نوع الشغل / المهنة', 'Trade / service')}
          </Label>
          <ModernSelect
            id="search-service"
            value={service}
            onChange={(value) => {
              setService(value)
              setEmpty(false)
            }}
            options={serviceOptions}
            placeholder={t('اختَر المهنة...', 'Choose a trade...')}
            searchPlaceholder={t('ابحث عن سباكة، بلاط، نقل...', 'Search plumbing, tiling, moving...')}
            ariaLabel={t('اختر المهنة', 'Select trade')}
            triggerClassName={
              compact
                ? 'h-9 px-2.5 text-[12px]'
                : isHero
                  ? 'h-10 text-[13px] sm:h-12 sm:text-sm'
                  : undefined
            }
          />
        </div>
        <div className="min-w-0">
          <Label
            htmlFor="search-city"
            className={
              compact
                ? 'mb-0.5 text-[10px]'
                : isHero
                  ? 'mb-1 text-[11px] text-white/80 sm:mb-1.5 sm:text-sm sm:text-ink'
                  : 'mb-1.5'
            }
          >
            {t('المدينة', 'City')}
          </Label>
          <ModernSelect
            id="search-city"
            value={city}
            onChange={(value) => {
              setCity(value)
              setEmpty(false)
            }}
            options={cityOptions}
            placeholder={t('اختَر المدينة...', 'Choose a city...')}
            searchPlaceholder={t('ابحث عن الرياض، جدة، الدمام...', 'Search Riyadh, Jeddah, Dammam...')}
            ariaLabel={t('اختر المدينة', 'Select city')}
            triggerClassName={
              compact
                ? 'h-9 px-2.5 text-[12px]'
                : isHero
                  ? 'h-10 text-[13px] sm:h-12 sm:text-sm'
                  : undefined
            }
          />
        </div>
        <div className={compact ? 'col-span-2' : 'flex items-end pt-0.5'}>
          <Button
            type="submit"
            variant="accent"
            size="lg"
            className={
              compact
                ? 'h-9 w-full rounded-xl text-sm'
                : isHero
                  ? 'h-10 w-full rounded-full bg-gradient-to-l from-accent to-[#c4925a] text-sm shadow-[0_8px_22px_rgba(166,123,75,0.4)] sm:h-12 sm:rounded-xl sm:bg-none sm:text-base sm:shadow-none lg:min-w-40'
                  : 'h-12 w-full rounded-xl lg:min-w-40'
            }
          >
            <Search className="size-4" />
            {t('ابحث', 'Search')}
          </Button>
        </div>
      </div>
      {empty && (
        <p className={`mt-2 text-xs ${isHero ? 'text-red-200 sm:text-red-700' : 'text-red-700'}`}>
          {t('اختَر المهنة والمدينة معًا.', 'Please select both trade and city.')}
        </p>
      )}
    </form>
  )
}
