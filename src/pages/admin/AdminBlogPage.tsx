import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pencil, Plus, Search, Trash2 } from 'lucide-react'
import { useCms } from '@/context/CmsContext'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { AdminEmpty, AdminPageHeader, AdminPanel } from '@/components/admin/AdminUI'
import { cn } from '@/lib/cn'

export function AdminBlogPage() {
  const { articles, deleteArticle } = useCms()
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<'all' | 'published' | 'draft'>('all')

  const sorted = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...articles]
      .filter((a) => {
        const matchStatus = status === 'all' || a.status === status
        const matchQ =
          !q ||
          a.titleAr.includes(query.trim()) ||
          a.titleEn.toLowerCase().includes(q) ||
          a.slug.toLowerCase().includes(q)
        return matchStatus && matchQ
      })
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  }, [articles, query, status])

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="المدونة"
        description="أضف عنوانًا واضحًا، محتوى المقال، غلاف، وتصنيف — ثم احفظ كمسودة أو انشر."
        action={
          <Link to="/admin/blog/new">
            <Button variant="primary" className="rounded-xl">
              <Plus className="size-4" />
              مقال جديد
            </Button>
          </Link>
        }
      />

      <AdminPanel>
        <div className="space-y-4 p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <Input
                className="h-11 rounded-xl bg-cream/50 ps-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث في العناوين أو الـ slug..."
              />
            </div>
            <div className="flex gap-2">
              {(
                [
                  ['all', 'الكل'],
                  ['published', 'منشور'],
                  ['draft', 'مسودة'],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setStatus(value)}
                  className={cn(
                    'rounded-xl border px-3 py-2 text-xs font-bold transition-colors',
                    status === value
                      ? 'border-brand bg-brand text-white'
                      : 'border-line bg-cream/50 text-ink/75 hover:border-brand/35',
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {sorted.length === 0 ? (
          <AdminEmpty title="لا توجد مقالات" description="ابدأ بمقال جديد أو عدّل عوامل التصفية." />
        ) : (
          <div className="divide-y divide-line border-t border-line">
            {sorted.map((article) => (
              <div
                key={article.id}
                className="flex flex-col gap-3 p-4 transition-colors hover:bg-cream/40 sm:flex-row sm:items-center sm:justify-between sm:px-5"
              >
                <div className="flex min-w-0 items-start gap-3">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt=""
                      className="size-14 shrink-0 rounded-xl object-cover ring-1 ring-line"
                    />
                  ) : (
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-cream text-[10px] font-bold text-muted ring-1 ring-line">
                      بدون صورة
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-extrabold text-ink">{article.titleAr || 'بدون عنوان'}</p>
                      <span
                        className={cn(
                          'rounded-md px-2 py-0.5 text-[10px] font-extrabold',
                          article.status === 'published'
                            ? 'bg-brand/10 text-brand'
                            : 'bg-sand-light text-muted',
                        )}
                      >
                        {article.status === 'published' ? 'منشور' : 'مسودة'}
                      </span>
                      {article.featured ? (
                        <span className="rounded-md bg-accent/15 px-2 py-0.5 text-[10px] font-extrabold text-accent">
                          رائج
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 truncate text-xs text-muted" dir="ltr">
                      /blog/{article.slug || '—'} · {article.publishedAt}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link to={`/admin/blog/${article.id}`}>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      <Pencil className="size-4" />
                      تعديل
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl"
                    onClick={() => {
                      if (confirm(`مسح مقال «${article.titleAr || article.slug}»؟`)) {
                        deleteArticle(article.id)
                      }
                    }}
                  >
                    <Trash2 className="size-4 text-red-700" />
                    مسح
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </AdminPanel>
    </div>
  )
}
