import { useMemo, useState, type FormEvent } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Save, Trash2 } from 'lucide-react'
import { useCms } from '@/context/CmsContext'
import { categories } from '@/data/services'
import { fileToDataUrl, slugify, type CmsService } from '@/lib/cms'
import { Button } from '@/components/ui/Button'
import { FormSuccess, Input, Label, Select, Textarea } from '@/components/ui/Input'
import { AdminPageHeader, AdminPanel } from '@/components/admin/AdminUI'

function linesToList(text: string) {
  return text
    .split('\n')
    .map((x) => x.trim())
    .filter(Boolean)
}

export function AdminServiceEditPage() {
  const { serviceId } = useParams()
  const isNew = serviceId === 'new'
  const navigate = useNavigate()
  const { services, upsertService, createBlankService, getServiceBySlug } = useCms()

  const existing = useMemo(
    () => (isNew ? null : services.find((s) => s.id === serviceId) || null),
    [isNew, serviceId, services],
  )

  const [form, setForm] = useState<CmsService>(() => existing || createBlankService())
  const [typesText, setTypesText] = useState(() => (existing?.typesAr || []).join('\n'))
  const [benefitsText, setBenefitsText] = useState(() => (existing?.benefitsAr || []).join('\n'))
  const [stepsText, setStepsText] = useState(() => (existing?.stepsAr || []).join('\n'))
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  if (!isNew && !existing) return <Navigate to="/admin/services" replace />

  const set = <K extends keyof CmsService>(key: K, value: CmsService[K]) => {
    setSaved(false)
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!form.nameAr.trim()) {
      setError('اسم المهنة بالعربي مطلوب')
      return
    }
    const nextSlug =
      form.slug.trim() || slugify(form.nameEn || form.nameAr) || `service-${Date.now()}`
    const clash = getServiceBySlug(nextSlug)
    if (clash && clash.id !== form.id) {
      setError('الـ slug مستخدم لمهنة أخرى')
      return
    }

    const typesAr = linesToList(typesText)
    const benefitsAr = linesToList(benefitsText)
    const stepsAr = linesToList(stepsText)

    const payload: CmsService = {
      ...form,
      slug: nextSlug,
      nameEn: form.nameEn || form.nameAr,
      shortEn: form.shortEn || form.shortAr,
      introEn: form.introEn || form.introAr,
      bodyEn: form.bodyEn || form.bodyAr,
      typesAr,
      typesEn: typesAr,
      benefitsAr,
      benefitsEn: benefitsAr,
      stepsAr,
      stepsEn: stepsAr,
      gallery: (form.gallery || []).filter(Boolean),
    }

    upsertService(payload)
    setForm(payload)
    setSaved(true)
    if (isNew) navigate(`/admin/services/${payload.id}`, { replace: true })
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={isNew ? 'مهنة جديدة' : 'تعديل مهنة'}
        description="ابنِ دليلًا مفيدًا للعميل: شرح وافٍ، صور، مميزات، مراحل، ومقالات مرتبطة."
        backTo="/admin/services"
      />

      <form onSubmit={onSubmit} className="space-y-5">
        {saved ? <FormSuccess>تم حفظ المهنة.</FormSuccess> : null}
        {error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
            {error}
          </p>
        ) : null}

        <AdminPanel title="البيانات الأساسية">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="nameAr">اسم المهنة (عربي)</Label>
              <Input
                id="nameAr"
                className="mt-1.5 rounded-xl"
                value={form.nameAr}
                onChange={(e) => set('nameAr', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="slug">Slug (رابط)</Label>
              <Input
                id="slug"
                dir="ltr"
                className="mt-1.5 rounded-xl"
                value={form.slug}
                onChange={(e) => set('slug', e.target.value)}
                placeholder="gypsum-board"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="category">التصنيف</Label>
            <Select
              id="category"
              className="mt-1.5 rounded-xl"
              value={form.categorySlug}
              onChange={(e) => set('categorySlug', e.target.value)}
            >
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.nameAr}
                </option>
              ))}
            </Select>
          </div>

          <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-cream/40 px-4 py-3">
            <input
              id="popular"
              type="checkbox"
              className="size-4 rounded border-line accent-brand"
              checked={!!form.popular}
              onChange={(e) => set('popular', e.target.checked)}
            />
            <span className="text-sm font-bold text-ink">مهنة رائجة (تظهر في الأكثر طلبًا)</span>
          </label>
        </AdminPanel>

        <AdminPanel
          title="دليل العميل"
          description="الوصف القصير والمقدمة يظهران أعلى الصفحة. الشرح الوافي هو محتوى الصفحة الأساسي."
        >
          <div>
            <Label htmlFor="shortAr">وصف مختصر</Label>
            <Textarea
              id="shortAr"
              className="mt-1.5 rounded-xl"
              value={form.shortAr}
              onChange={(e) => set('shortAr', e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="introAr">مقدمة الصفحة</Label>
            <Textarea
              id="introAr"
              className="mt-1.5 rounded-xl"
              value={form.introAr}
              onChange={(e) => set('introAr', e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="bodyAr">شرح وافٍ (HTML بسيط مثل &lt;p&gt;...&lt;/p&gt;)</Label>
            <Textarea
              id="bodyAr"
              className="mt-1.5 min-h-40 rounded-xl font-mono text-[13px]"
              value={form.bodyAr}
              onChange={(e) => set('bodyAr', e.target.value)}
              placeholder="<p>اشرح الشغل للعميل بوضوح...</p>"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="typesAr">أنواع الشغل (سطر لكل نوع)</Label>
            <Textarea
              id="typesAr"
              className="mt-1.5 rounded-xl"
              value={typesText}
              onChange={(e) => {
                setSaved(false)
                setTypesText(e.target.value)
              }}
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="benefitsAr">مميزات تهم العميل (سطر لكل ميزة)</Label>
            <Textarea
              id="benefitsAr"
              className="mt-1.5 rounded-xl"
              value={benefitsText}
              onChange={(e) => {
                setSaved(false)
                setBenefitsText(e.target.value)
              }}
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="stepsAr">مراحل الشغل (سطر لكل مرحلة)</Label>
            <Textarea
              id="stepsAr"
              className="mt-1.5 rounded-xl"
              value={stepsText}
              onChange={(e) => {
                setSaved(false)
                setStepsText(e.target.value)
              }}
            />
          </div>
        </AdminPanel>

        <AdminPanel title="الصورة الرئيسية" description="تظهر أعلى دليل المهنة.">
          <Input
            id="image"
            dir="ltr"
            className="rounded-xl"
            value={form.image}
            onChange={(e) => set('image', e.target.value)}
            placeholder="/images/hero/... أو رابط"
          />
          <input
            type="file"
            accept="image/*"
            className="mt-3 block w-full text-sm text-muted file:me-3 file:rounded-lg file:border-0 file:bg-brand file:px-3 file:py-2 file:text-xs file:font-bold file:text-white"
            onChange={async (e) => {
              const file = e.target.files?.[0]
              if (!file) return
              set('image', await fileToDataUrl(file))
            }}
          />
          {form.image ? (
            <img
              src={form.image}
              alt=""
              className="mt-4 aspect-[16/10] w-full max-w-md rounded-2xl object-cover ring-1 ring-line"
            />
          ) : null}
        </AdminPanel>

        <AdminPanel
          title="معرض صور للعميل"
          description="صور إضافية تساعد الزائر يفهم الشغل. ارفع صورة أو الصق رابطًا."
        >
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-muted file:me-3 file:rounded-lg file:border-0 file:bg-brand file:px-3 file:py-2 file:text-xs file:font-bold file:text-white"
            onChange={async (e) => {
              const file = e.target.files?.[0]
              if (!file) return
              const url = await fileToDataUrl(file)
              set('gallery', [...(form.gallery || []), url])
              e.target.value = ''
            }}
          />
          <div className="mt-3 flex gap-2">
            <Input
              dir="ltr"
              className="rounded-xl"
              id="gallery-url"
              placeholder="https://... أو /images/..."
            />
            <Button
              type="button"
              variant="outline"
              className="shrink-0 rounded-xl"
              onClick={() => {
                const el = document.getElementById('gallery-url') as HTMLInputElement | null
                const url = el?.value.trim()
                if (!url) return
                set('gallery', [...(form.gallery || []), url])
                if (el) el.value = ''
              }}
            >
              إضافة
            </Button>
          </div>
          {(form.gallery || []).length > 0 ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {form.gallery.map((src, idx) => (
                <div key={`${src}-${idx}`} className="relative overflow-hidden rounded-xl border border-line">
                  <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                  <button
                    type="button"
                    className="absolute end-2 top-2 inline-flex size-8 items-center justify-center rounded-lg bg-white/95 text-red-600 shadow-sm"
                    aria-label="حذف الصورة"
                    onClick={() =>
                      set(
                        'gallery',
                        form.gallery.filter((_, i) => i !== idx),
                      )
                    }
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted">لا توجد صور إضافية بعد.</p>
          )}
        </AdminPanel>

        <div className="sticky bottom-4 z-10 flex flex-wrap gap-2.5 rounded-2xl border border-line bg-surface/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-md">
          <Button type="submit" variant="primary" className="rounded-xl">
            <Save className="size-4" />
            حفظ المهنة
          </Button>
        </div>
      </form>
    </div>
  )
}
