import { useEffect, useMemo, useState } from 'react'
import { Images, Search, X } from 'lucide-react'
import {
  mediaGroups,
  mediaLibrary,
  type MediaAsset,
  type MediaGroupId,
} from '@/data/mediaLibrary'
import { cn } from '@/lib/cn'

type Filter = MediaGroupId | 'all'

type Props = {
  open: boolean
  onClose: () => void
  onSelect: (asset: MediaAsset) => void
  title?: string
}

export function MediaPickerModal({
  open,
  onClose,
  onSelect,
  title = 'اختر من المعرض',
}: Props) {
  const [filter, setFilter] = useState<Filter>('all')
  const [q, setQ] = useState('')

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const items = useMemo(() => {
    const query = q.trim().toLowerCase()
    return mediaLibrary.filter((m) => {
      if (filter !== 'all' && m.group !== filter) return false
      if (!query) return true
      return (
        m.labelAr.includes(q.trim()) ||
        m.labelEn.toLowerCase().includes(query) ||
        m.src.toLowerCase().includes(query) ||
        m.groupAr.includes(q.trim())
      )
    })
  }, [filter, q])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-ink/55 backdrop-blur-[2px]"
        aria-label="إغلاق"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-10 flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-line bg-surface shadow-[var(--shadow-lift)] sm:rounded-3xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Images className="size-4" />
            </span>
            <div>
              <h2 className="text-sm font-extrabold text-ink sm:text-base">{title}</h2>
              <p className="text-[11px] font-bold text-muted">{items.length} صورة</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-cream text-ink hover:border-brand/40 hover:text-brand focus-ring"
            aria-label="إغلاق المعرض"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="space-y-3 border-b border-line px-4 py-3 sm:px-5">
          <div className="relative">
            <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ابحث باسم الصورة أو المسار..."
              className="h-10 w-full rounded-xl border border-line bg-cream/60 pe-3 ps-10 text-sm font-medium text-ink outline-none focus:border-brand/40 focus:bg-surface"
            />
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-0.5">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={cn(
                'shrink-0 rounded-xl border px-3 py-1.5 text-xs font-extrabold transition-colors',
                filter === 'all'
                  ? 'border-brand bg-brand text-white'
                  : 'border-line bg-cream text-ink hover:border-brand/30',
              )}
            >
              الكل
            </button>
            {mediaGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setFilter(g.id)}
                className={cn(
                  'shrink-0 rounded-xl border px-3 py-1.5 text-xs font-extrabold transition-colors',
                  filter === g.id
                    ? 'border-brand bg-brand text-white'
                    : 'border-line bg-cream text-ink hover:border-brand/30',
                )}
              >
                {g.nameAr}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm font-bold text-muted">لا توجد صور مطابقة</p>
          ) : (
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
              {items.map((asset) => (
                <button
                  key={asset.id}
                  type="button"
                  onClick={() => {
                    onSelect(asset)
                    onClose()
                  }}
                  className="group overflow-hidden rounded-2xl border border-line bg-cream/40 text-start transition-all hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[var(--shadow-soft)] focus-ring"
                >
                  <div
                    className={cn(
                      'aspect-[4/3] overflow-hidden bg-cream',
                      asset.group === 'brand' && 'bg-ink',
                    )}
                  >
                    <img
                      src={asset.src}
                      alt={asset.labelAr}
                      loading="lazy"
                      className={cn(
                        'size-full object-cover transition-transform duration-300 group-hover:scale-105',
                        asset.group === 'brand' && 'object-contain p-4',
                      )}
                    />
                  </div>
                  <div className="p-2.5">
                    <p className="truncate text-xs font-extrabold text-ink">{asset.labelAr}</p>
                    <p className="mt-0.5 truncate text-[10px] font-bold text-muted">
                      {asset.groupAr}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
