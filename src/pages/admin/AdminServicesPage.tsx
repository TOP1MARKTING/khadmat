import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pencil, Plus, Search, Trash2 } from 'lucide-react'
import { useCms } from '@/context/CmsContext'
import { categories } from '@/data/services'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { AdminEmpty, AdminPageHeader, AdminPanel } from '@/components/admin/AdminUI'
import { cn } from '@/lib/cn'

export function AdminServicesPage() {
  const { services, deleteService } = useCms()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return services.filter((s) => {
      const matchCat = category === 'all' || s.categorySlug === category
      const matchQ =
        !q ||
        s.nameAr.includes(query.trim()) ||
        s.nameEn.toLowerCase().includes(q) ||
        s.slug.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [services, query, category])

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="المهن والخدمات"
        description="إضافة وتعديل ومسح أي مهنة تظهر في الموقع."
        action={
          <Link to="/admin/services/new">
            <Button variant="primary" className="rounded-xl">
              <Plus className="size-4" />
              مهنة جديدة
            </Button>
          </Link>
        }
      />

      <AdminPanel>
        <div className="space-y-4 p-4 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <Input
                className="h-11 rounded-xl bg-cream/50 ps-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث بالاسم أو الـ slug..."
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-0.5">
              <button
                type="button"
                onClick={() => setCategory('all')}
                className={cn(
                  'shrink-0 rounded-xl border px-3 py-2 text-xs font-bold transition-colors',
                  category === 'all'
                    ? 'border-brand bg-brand text-white'
                    : 'border-line bg-cream/50 text-ink/75 hover:border-brand/35',
                )}
              >
                الكل ({services.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setCategory(cat.slug)}
                  className={cn(
                    'shrink-0 rounded-xl border px-3 py-2 text-xs font-bold transition-colors',
                    category === cat.slug
                      ? 'border-brand bg-brand text-white'
                      : 'border-line bg-cream/50 text-ink/75 hover:border-brand/35',
                  )}
                >
                  {cat.nameAr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <AdminEmpty title="لا توجد نتائج" description="عدّل البحث أو اختر تصنيفًا آخر." />
        ) : (
          <div className="divide-y divide-line border-t border-line">
            {filtered.map((service) => {
              const cat = categories.find((c) => c.slug === service.categorySlug)
              return (
                <div
                  key={service.id}
                  className="flex flex-col gap-3 p-4 transition-colors hover:bg-cream/40 sm:flex-row sm:items-center sm:justify-between sm:px-5"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <img
                      src={service.image}
                      alt=""
                      className="size-14 shrink-0 rounded-xl object-cover ring-1 ring-line sm:size-16"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-extrabold text-ink">{service.nameAr}</p>
                        {service.popular ? (
                          <span className="rounded-md bg-accent/15 px-2 py-0.5 text-[10px] font-extrabold text-accent">
                            رائج
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-0.5 truncate text-xs text-muted">
                        {cat?.nameAr || service.categorySlug}
                        <span className="mx-1.5 text-line">·</span>
                        <span dir="ltr">{service.slug}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/admin/services/${service.id}`}>
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
                        if (confirm(`مسح مهنة «${service.nameAr}»؟`)) deleteService(service.id)
                      }}
                    >
                      <Trash2 className="size-4 text-red-700" />
                      مسح
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </AdminPanel>
    </div>
  )
}
