import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/cn'

type Props = {
  className?: string
  tone?: 'default' | 'glass'
}

export function LangToggle({ className, tone = 'default' }: Props) {
  const { lang, toggleLang, t } = useLanguage()
  const isAr = lang === 'ar'

  return (
    <button
      type="button"
      onClick={toggleLang}
      dir="ltr"
      aria-label={t('تبديل اللغة', 'Switch language')}
      className={cn(
        'relative inline-flex h-9 w-[4.85rem] shrink-0 items-center rounded-full border transition-colors focus-ring',
        tone === 'glass'
          ? 'border-white/35 bg-white/18'
          : 'border-line/90 bg-[#eceae4]',
        className,
      )}
    >
      {/* Track labels */}
      <span
        className={cn(
          'pointer-events-none absolute left-2.5 text-[11px] font-bold transition-opacity',
          tone === 'glass' ? 'text-white/75' : 'text-muted',
          isAr ? 'opacity-100' : 'opacity-0',
        )}
      >
        EN
      </span>
      <span
        className={cn(
          'pointer-events-none absolute right-2.5 text-[12px] font-bold transition-opacity',
          tone === 'glass' ? 'text-white/75' : 'text-muted',
          isAr ? 'opacity-0' : 'opacity-100',
        )}
      >
        ع
      </span>

      {/* Active thumb */}
      <span
        className={cn(
          'absolute top-0.5 flex size-8 items-center justify-center rounded-full bg-ink text-[12px] font-extrabold text-white shadow-sm transition-all duration-200',
          isAr ? 'right-0.5 left-auto' : 'left-0.5 right-auto',
        )}
      >
        {isAr ? 'ع' : 'EN'}
      </span>
    </button>
  )
}
