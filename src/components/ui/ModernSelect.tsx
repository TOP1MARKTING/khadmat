import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { Check, ChevronDown, Search } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/cn'

export type SelectOption = {
  value: string
  label: string
  group?: string
  icon?: ReactNode
}

type Props = {
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  placeholder: string
  searchable?: boolean
  searchPlaceholder?: string
  ariaLabel: string
  id?: string
  className?: string
  triggerClassName?: string
}

type PanelPos = {
  top?: number
  bottom?: number
  left: number
  width: number
  maxHeight: number
  placement: 'up' | 'down'
}

const GAP = 8
const SEARCH_BLOCK = 62
const EDGE = 12

export function ModernSelect({
  value,
  onChange,
  options,
  placeholder,
  searchable = true,
  searchPlaceholder,
  ariaLabel,
  id,
  className,
  triggerClassName,
}: Props) {
  const { t, isAr } = useLanguage()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [pos, setPos] = useState<PanelPos | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const selected = options.find((o) => o.value === value)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return options
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        (o.group && o.group.toLowerCase().includes(q)),
    )
  }, [options, query])

  const groups = useMemo(() => {
    const map = new Map<string, SelectOption[]>()
    for (const option of filtered) {
      const key = option.group || ''
      const list = map.get(key) || []
      list.push(option)
      map.set(key, list)
    }
    return [...map.entries()]
  }, [filtered])

  const updatePos = () => {
    const el = rootRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    const spaceBelow = vh - rect.bottom - GAP - EDGE
    const spaceAbove = rect.top - GAP - EDGE
    // Prefer opening upward on phones when the field sits low
    const preferUp = spaceBelow < 220 && spaceAbove > spaceBelow
    const placement: 'up' | 'down' = preferUp ? 'up' : 'down'
    const available = Math.max(placement === 'down' ? spaceBelow : spaceAbove, 160)
    const panelCap = Math.min(available, window.innerWidth < 640 ? 240 : 300)
    const maxHeight = Math.max(panelCap, 160)

    setPos({
      ...(placement === 'down'
        ? { top: rect.bottom + GAP, bottom: undefined }
        : { bottom: vh - rect.top + GAP, top: undefined }),
      left: rect.left,
      width: rect.width,
      maxHeight,
      placement,
    })
  }

  useLayoutEffect(() => {
    if (!open) return
    updatePos()
    const onScroll = () => updatePos()
    window.addEventListener('resize', onScroll)
    window.addEventListener('scroll', onScroll, true)
    return () => {
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [open])

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (rootRef.current?.contains(target) || panelRef.current?.contains(target)) {
        return
      }
      setOpen(false)
      setQuery('')
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const selectedIdx = filtered.findIndex((o) => o.value === value)
    setActiveIndex(selectedIdx >= 0 ? selectedIdx : 0)
    if (searchable) {
      window.setTimeout(() => searchRef.current?.focus(), 10)
    }
  }, [open, searchable, filtered, value])

  useEffect(() => {
    if (!open) return
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open])

  const pick = (next: string) => {
    onChange(next)
    setOpen(false)
    setQuery('')
  }

  const onListKeyDown = (event: ReactKeyboardEvent) => {
    if (!filtered.length) return
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((i) => (i + 1) % filtered.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const option = filtered[activeIndex]
      if (option) pick(option.value)
    }
  }

  let flatIndex = -1

  const listMaxHeight = pos
    ? Math.max(pos.maxHeight - (searchable ? SEARCH_BLOCK : 0), 120)
    : 180

  const panel =
    open && pos
      ? createPortal(
          <div
            ref={panelRef}
            style={{
              position: 'fixed',
              top: pos.top,
              bottom: pos.bottom,
              left: pos.left,
              width: pos.width,
              maxHeight: pos.maxHeight,
            }}
            className="z-[80] flex flex-col overflow-hidden rounded-2xl border border-line/90 bg-surface shadow-[var(--shadow-lift)] animate-[reveal-up_0.18s_ease-out]"
          >
            {searchable && (
              <div className="shrink-0 border-b border-line/80 bg-gradient-to-b from-cream to-surface p-2.5">
                <div className="relative">
                  <Search
                    className={cn(
                      'pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-accent',
                      isAr ? 'right-3' : 'left-3',
                    )}
                  />
                  <input
                    ref={searchRef}
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      setActiveIndex(0)
                    }}
                    onKeyDown={onListKeyDown}
                    placeholder={
                      searchPlaceholder || t('ابحث هنا...', 'Search here...')
                    }
                    className={cn(
                      'w-full rounded-xl border border-line bg-surface py-2.5 text-sm text-ink placeholder:text-muted-soft focus-ring',
                      isAr ? 'pr-10 pl-3' : 'pl-10 pr-3',
                    )}
                  />
                </div>
              </div>
            )}

            <div
              id={listId}
              ref={listRef}
              role="listbox"
              tabIndex={-1}
              onKeyDown={onListKeyDown}
              style={{ maxHeight: listMaxHeight }}
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2 [-webkit-overflow-scrolling:touch]"
            >
              {filtered.length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-muted">
                  {t('لا توجد نتائج', 'No results')}
                </p>
              ) : (
                groups.map(([group, items]) => (
                  <div key={group || 'all'} className="mb-1.5 last:mb-0">
                    {group ? (
                      <p className="sticky top-0 z-10 mx-1 mb-1 rounded-md bg-surface/95 px-2.5 py-1.5 text-[11px] font-extrabold tracking-wide text-accent backdrop-blur-sm">
                        {group}
                      </p>
                    ) : null}
                    {items.map((option) => {
                      flatIndex += 1
                      const index = flatIndex
                      const active = option.value === value
                      const highlighted = index === activeIndex
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="option"
                          data-index={index}
                          aria-selected={active}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => pick(option.value)}
                          className={cn(
                            'flex w-full items-center justify-between gap-3 rounded-xl px-2.5 py-2.5 text-sm transition-colors',
                            active
                              ? 'bg-brand text-white shadow-sm'
                              : highlighted
                                ? 'bg-cream text-ink'
                                : 'text-ink hover:bg-cream/80',
                          )}
                        >
                          <span className="flex min-w-0 items-center gap-2.5">
                            {option.icon ? (
                              <span
                                className={cn(
                                  'flex size-8 shrink-0 items-center justify-center rounded-lg',
                                  active
                                    ? 'bg-white/15 text-white'
                                    : 'bg-brand/8 text-brand',
                                )}
                              >
                                {option.icon}
                              </span>
                            ) : null}
                            <span className="truncate text-start font-medium">
                              {option.label}
                            </span>
                          </span>
                          {active && <Check className="size-4 shrink-0 opacity-90" />}
                        </button>
                      )
                    })}
                  </div>
                ))
              )}
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        id={id}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => {
          setOpen((v) => {
            const next = !v
            if (next) {
              // Position syncs in layout effect; seed immediately for first paint
              window.requestAnimationFrame(updatePos)
            }
            return next
          })
        }}
        className={cn(
          'group flex h-12 w-full items-center justify-between gap-3 rounded-xl border bg-surface px-3 py-2.5 text-sm transition-all duration-200 focus-ring sm:px-3.5',
          open
            ? 'border-brand shadow-[var(--shadow-soft)] ring-2 ring-brand/15'
            : 'border-line hover:border-sand hover:shadow-[var(--shadow-soft)]',
          triggerClassName,
        )}
      >
        <span className="flex min-w-0 items-center gap-2.5">
          {selected?.icon ? (
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/8 text-brand">
              {selected.icon}
            </span>
          ) : null}
          <span
            className={cn(
              'truncate text-start font-medium',
              selected ? 'text-ink' : 'text-muted-soft',
            )}
          >
            {selected ? selected.label : placeholder}
          </span>
        </span>
        <span
          className={cn(
            'flex size-8 shrink-0 items-center justify-center rounded-lg bg-cream text-muted transition-all duration-200',
            open && 'bg-brand text-white',
          )}
        >
          <ChevronDown
            className={cn('size-4 transition-transform duration-200', open && 'rotate-180')}
          />
        </span>
      </button>
      {panel}
    </div>
  )
}
