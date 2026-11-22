import { useMemo, useState } from 'react'
import { Check, Copy, Images, Search, Trash2 } from 'lucide-react'
import { mediaGroups, type MediaAsset, type MediaGroupId } from '@/data/mediaLibrary'
import { useMediaCatalog } from '@/lib/mediaCatalog'
import { AdminPageHeader, AdminPanel } from '@/components/admin/AdminUI'
import { cn } from '@/lib/cn'

type Filter = MediaGroupId | 'all'

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'fixed'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(el)
    return ok
  }
}

function MediaCard({
  asset,
  onCopied,
  copied,
  onDelete,
}: {
  asset: MediaAsset
  onCopied: (src: string) => void
  copied: boolean
  onDelete: (asset: MediaAsset) => void
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]">
      <div
        className={cn(
          'relative aspect-[4/3] overflow-hidden bg-cream',
          asset.group === 'brand' && 'bg-ink',
        )}
      >
        <img
          src={asset.src}
          alt={asset.labelAr}
          loading="lazy"
          className={cn(
            'h-full w-full object-cover',
            asset.group === 'brand' && 'object-contain p-6',
          )}
        />
        <span className="absolute start-2 top-2 rounded-lg bg-ink/70 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
          {asset.groupAr}
        </span>
        <button
          type="button"
          onClick={() => onDelete(asset)}
          className="absolute end-2 top-2 inline-flex size-8 items-center justify-center rounded-lg bg-white/95 text-red-600 shadow-sm opacity-100 transition-opacity hover:bg-red-50 focus-ring sm:opacity-0 sm:group-hover:opacity-100"
          aria-label={`حذف ${asset.labelAr}`}
          title="حذف من المعرض"
        >
          <Trash2 className="size-4" />
        </button>
      </div>
      <div className="space-y-2.5 p-3.5">
        <div>
          <h3 className="truncate text-sm font-extrabold text-ink">{asset.labelAr}</h3>
          <p className="mt-0.5 truncate font-mono text-[11px] text-muted" dir="ltr">
            {asset.src}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={async () => {
              const ok = await copyText(asset.src)
              if (ok) onCopied(asset.src)
            }}
            className={cn(
              'inline-flex h-9 items-center justify-center gap-1.5 rounded-xl text-xs font-extrabold transition-colors focus-ring',
              copied
                ? 'bg-brand text-white'
                : 'border border-line bg-cream text-ink hover:border-brand/40 hover:text-brand',
            )}
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? 'تم النسخ' : 'نسخ'}
          </button>
          <button
            type="button"
            onClick={() => onDelete(asset)}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border border-red-200 bg-red-50 text-xs font-extrabold text-red-700 transition-colors hover:bg-red-100 focus-ring"
          >
            <Trash2 className="size-3.5" />
            حذف
          </button>
        </div>
      </div>
    </article>
  )
}

export function AdminMediaPage() {
  const { items, remove } = useMediaCatalog()
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')
  const [copiedSrc, setCopiedSrc] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((m) => {
      if (filter !== 'all' && m.group !== filter) return false
      if (!q) return true
      return (
        m.labelAr.includes(query.trim()) ||
        m.labelEn.toLowerCase().includes(q) ||
        m.src.toLowerCase().includes(q) ||
        m.groupAr.includes(query.trim())
      )
    })
  }, [filter, query, items])

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: items.length }
    for (const g of mediaGroups) {
      map[g.id] = items.filter((m) => m.group === g.id).length
    }
    return map
  }, [items])

  const onDelete = (asset: MediaAsset) => {
    if (
      !confirm(
        `حذف «${asset.labelAr}» من معرض الأدمن؟\nلن تظهر في الاختيار بعد كده (الملف على السيرفر يفضل موجود).`,
      )
    ) {
      return
    }
    remove(asset.id)
    if (copiedSrc === asset.src) setCopiedSrc('')
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="معرض الصور"
        description="كل الصور المتاحة في الموقع. انسخ المسار أو احذف الصورة من المعرض."
        action={
          <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-cream/60 px-3 py-2 text-xs font-bold text-muted">
            <Images className="size-4 text-accent" />
            {items.length} صورة
          </span>
        }
      />

      <AdminPanel>
        <div className="flex flex-col gap-4 p-4 sm:p-5">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 end-3 size-4 -translate-y-1/2 text-accent" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث باسم الصورة أو المسار..."
              className="h-11 w-full rounded-xl border border-line bg-surface pe-10 ps-3 text-sm text-ink placeholder:text-muted-soft focus-ring"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={cn(
                'rounded-xl border px-3 py-1.5 text-xs font-extrabold transition-colors',
                filter === 'all'
                  ? 'border-brand bg-brand text-white'
                  : 'border-line bg-cream/50 text-muted hover:border-brand/35 hover:text-brand',
              )}
            >
              الكل ({counts.all})
            </button>
            {mediaGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setFilter(g.id)}
                className={cn(
                  'rounded-xl border px-3 py-1.5 text-xs font-extrabold transition-colors',
                  filter === g.id
                    ? 'border-brand bg-brand text-white'
                    : 'border-line bg-cream/50 text-muted hover:border-brand/35 hover:text-brand',
                )}
              >
                {g.nameAr} ({counts[g.id] || 0})
              </button>
            ))}
          </div>
        </div>
      </AdminPanel>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line bg-cream/40 px-4 py-10 text-center text-sm text-muted">
          لا توجد صور مطابقة للبحث.
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((asset) => (
            <MediaCard
              key={asset.id}
              asset={asset}
              copied={copiedSrc === asset.src}
              onDelete={onDelete}
              onCopied={(src) => {
                setCopiedSrc(src)
                window.setTimeout(() => {
                  setCopiedSrc((cur) => (cur === src ? '' : cur))
                }, 1800)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
