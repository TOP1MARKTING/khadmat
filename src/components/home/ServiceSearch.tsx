import { useMemo, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useCms } from '@/context/CmsContext'
import { categories } from '@/data/services'
import { getServiceIcon } from '@/lib/serviceIcons'
import { Button } from '@/components/ui/Button'
import { Label } from '@/components/ui/Input'
import { ModernSelect } from '@/components/ui/ModernSelect'
import { cn } from '@/lib/cn'

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
  const [empty, setEmpty] = useState(false)
  const isHero = variant === 'hero'

  const serviceOptions = useMemo(
    () =>
      services.map((s) => {
        const category = categories.find((c) => c.slug === s.categorySlug)
        const Icon = getServiceIcon(s.slug, s.categorySlug)
        return {
          value: s.slug,
          label: lang === 'ar' ? s.nameAr : s.nameEn,
          group: category
            ? lang === 'ar'
              ? category.nameAr
              : category.nameEn
            : undefined,
          icon: <Icon className="size-4" />,
          keywords: [
            s.nameAr,
            s.nameEn,
            s.slug,
            s.slug.replace(/-/g, ' '),
            ...(s.shortAr ? [s.shortAr] : []),
            ...(s.shortEn ? [s.shortEn] : []),
          ],
        }
      }),
    [lang, services],
  )

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!service) {
      setEmpty(true)
      return
    }
    setEmpty(false)
    navigate(`/services/${service}`)
  }

  if (compact) {
    return (
      <form
        onSubmit={onSubmit}
        className="rounded-[1.35rem] border border-line/90 bg-gradient-to-b from-cream to-surface p-3 shadow-[var(--shadow-soft)]"
      >
        <div className="mb-2.5 flex flex-col items-center gap-1.5 text-center">
          <p className="text-[11px] font-extrabold tracking-wide text-accent">
            {t('اختَر المهنة', 'Choose a trade')}
          </p>
          <span className="rounded-full bg-brand/8 px-2.5 py-0.5 text-[10px] font-bold text-brand">
            {t(`${services.length}+ مهنة`, `${services.length}+ trades`)}
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-stretch gap-2">
          <ModernSelect
            id="search-service"
            value={service}
            onChange={(value) => {
              setService(value)
              setEmpty(false)
            }}
            options={serviceOptions}
            placeholder={t('سباكة، بلاط، نقل...', 'Plumbing, tiling, moving...')}
            searchPlaceholder={t('ابحث عن مهنة...', 'Search a trade...')}
            ariaLabel={t('اختر المهنة', 'Select trade')}
            triggerClassName="h-12 rounded-2xl border-line bg-surface px-3 text-[13px]"
          />
          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="h-12 min-w-12 rounded-2xl px-3.5 shadow-[0_8px_20px_rgba(166,123,75,0.28)]"
            aria-label={t('ابحث', 'Search')}
          >
            <Search className="size-5" />
          </Button>
        </div>

        {empty ? (
          <p className="mt-2 text-center text-xs font-semibold text-red-700">
            {t('اختَر المهنة أولًا.', 'Please select a trade first.')}
          </p>
        ) : null}
      </form>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        isHero
          ? 'rounded-2xl border border-white/18 bg-ink/45 p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:rounded-2xl sm:border-accent/20 sm:bg-surface/95 sm:p-5 sm:shadow-[var(--shadow-lift)] sm:backdrop-blur-md'
          : 'rounded-2xl border border-accent/20 bg-surface p-3.5 shadow-[var(--shadow-lift)] sm:p-5'
      }
    >
      <p
        className={
          isHero
            ? 'mb-1.5 text-[10px] font-bold tracking-wide text-accent-soft sm:mb-3 sm:text-xs sm:text-accent'
            : 'mb-2.5 text-xs font-bold tracking-wide text-accent sm:mb-3'
        }
      >
        {t('دور على الشغل اللي محتاجه', 'Find the trade you need')}
      </p>
      <div className="grid gap-1.5 sm:gap-3 lg:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <Label
            htmlFor="search-service"
            className={
              isHero
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
              isHero ? 'h-10 text-[13px] sm:h-12 sm:text-sm' : undefined
            }
          />
        </div>
        <div className="flex items-end pt-0.5">
          <Button
            type="submit"
            variant="accent"
            size="lg"
            className={
              isHero
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
        <p className={cn('mt-2 text-xs', isHero ? 'text-red-200 sm:text-red-700' : 'text-red-700')}>
          {t('اختَر المهنة أولًا.', 'Please select a trade first.')}
        </p>
      )}
    </form>
  )
}
