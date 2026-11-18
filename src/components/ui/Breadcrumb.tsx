import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export type Crumb = { label: string; to?: string }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const { isAr } = useLanguage()
  const Chevron = isAr ? ChevronLeft : ChevronRight

  return (
    <nav aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'} className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 && <Chevron className="size-3.5 opacity-50" aria-hidden />}
              {item.to && !last ? (
                <Link to={item.to} className="hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? 'text-ink' : undefined} aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
