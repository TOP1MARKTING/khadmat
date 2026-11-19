import { useMemo, useRef, useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useCms } from '@/context/CmsContext'
import { cities } from '@/data/cities'
import {
  fileToDataUrl,
  slugify,
  type BlogCategory,
  type BlogStatus,
  type CmsArticle,
} from '@/lib/cms'
import { Button } from '@/components/ui/Button'
import { FormSuccess, Input, Label, Select, Textarea } from '@/components/ui/Input'
import { AdminPageHeader, AdminPanel } from '@/components/admin/AdminUI'

function extractHeadings(html: string) {
  const matches = [...html.matchAll(/<h([23])[^>]*>(.*?)<\/h\1>/gi)]
  return matches.map((m, i) => {
    const text = m[2].replace(/<[^>]+>/g, '').trim()
    const id = slugify(text) || `section-${i + 1}`
    return { level: m[1], text, id }
  })
}

export function AdminBlogEditPage() {
  const { articleId } = useParams()
  const isNew = articleId === 'new'
  const navigate = useNavigate()
  const { articles, services, upsertArticle, createBlankArticle, getArticleBySlug } = useCms()
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const existing = useMemo(
    () => (isNew ? null : articles.find((a) => a.id === articleId) || null),
    [isNew, articleId, articles],
  )

  const [form, setForm] = useState<CmsArticle>(() => existing || createBlankArticle())
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
  const [linkText, setLinkText] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [internalTarget, setInternalTarget] = useState('')
  const [imgAlt, setImgAlt] = useState('')
  const [imgCaption, setImgCaption] = useState('')

  if (!isNew && !existing) return <Navigate to="/admin/blog" replace />

  const set = <K extends keyof CmsArticle>(key: K, value: CmsArticle[K]) => {
    setSaved(false)
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const headings = extractHeadings(form.contentHtmlAr)

  const insertAtCursor = (snippet: string) => {
    const el = contentRef.current
    if (!el) {
      set('contentHtmlAr', `${form.contentHtmlAr}\n${snippet}`)
      return
    }
    const start = el.selectionStart
    const end = el.selectionEnd
    const next = form.contentHtmlAr.slice(0, start) + snippet + form.contentHtmlAr.slice(end)
    set('contentHtmlAr', next)
    requestAnimationFrame(() => {
      el.focus()
      const pos = start + snippet.length
      el.setSelectionRange(pos, pos)
    })
  }

  const insertExternalLink = () => {
    if (!linkUrl.trim()) return
    const el = contentRef.current
    const selected = el
      ? form.contentHtmlAr.slice(el.selectionStart, el.selectionEnd)
      : ''
    const text = linkText.trim() || selected || 'رابط'
    const html = `<a href="${linkUrl.trim()}" target="_blank" rel="noopener noreferrer" class="text-accent underline">${text}</a>`
    if (el && selected) {
      const start = el.selectionStart
      const end = el.selectionEnd
      const next = form.contentHtmlAr.slice(0, start) + html + form.contentHtmlAr.slice(end)
      set('contentHtmlAr', next)
    } else {
      insertAtCursor(html)
    }
    setLinkText('')
    setLinkUrl('')
  }

  const insertInternalLink = () => {
    if (!internalTarget) return
    const el = contentRef.current
    const selected = el
      ? form.contentHtmlAr.slice(el.selectionStart, el.selectionEnd)
      : ''
    const text = linkText.trim() || selected || 'قسم'
    insertAtCursor(`<a href="#${internalTarget}" class="text-brand underline">${text}</a>`)
  }

  const insertImage = async (file: File | null, atEnd: boolean) => {
    if (!file) return
    const url = await fileToDataUrl(file)
    const alt = imgAlt || 'صورة المقال'
    const caption = imgCaption
      ? `<figcaption class="mt-2 text-sm text-muted">${imgCaption}</figcaption>`
      : ''
    const html = `<figure class="my-6"><img src="${url}" alt="${alt}" class="w-full rounded-xl" />${caption}</figure>`
    if (atEnd) set('contentHtmlAr', `${form.contentHtmlAr}\n${html}`)
    else insertAtCursor(html)
    setImgAlt('')
    setImgCaption('')
  }

  const onSubmit = (e: FormEvent, status?: BlogStatus) => {
    e.preventDefault()
    setError('')
    if (!form.titleAr.trim()) {
      setError('عنوان المقال بالعربي مطلوب')
      return
    }
    const nextSlug = form.slug.trim() || slugify(form.titleEn || form.titleAr) || `article-${Date.now()}`
    const clash = getArticleBySlug(nextSlug)
    if (clash && clash.id !== form.id) {
      setError('الـ slug مستخدم لمقال آخر')
      return
    }

    const payload: CmsArticle = {
      ...form,
      slug: nextSlug,
      titleEn: form.titleEn || form.titleAr,
      excerptEn: form.excerptEn || form.excerptAr,
      contentHtmlEn: form.contentHtmlEn || form.contentHtmlAr,
      status: status || form.status,
      serviceSlug: form.serviceSlug || services[0]?.slug || '',
      contentAr: [],
      contentEn: [],
      readMinutes: Math.max(2, Math.ceil(form.contentHtmlAr.replace(/<[^>]+>/g, '').length / 700)),
    }

    upsertArticle(payload)
    setForm(payload)
    setSaved(true)
    if (isNew) navigate(`/admin/blog/${payload.id}`, { replace: true })
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={isNew ? 'مقال جديد' : 'تعديل مقال'}
        description="اكتب محتوى مفيد للعميل أولًا. اربط المقال بمهنة ومدينة، وأضف اسم/شعار شركة لاحقًا عند الاتفاق."
        backTo="/admin/blog"
        action={
          <Link to="/admin/blog/new">
            <Button variant="outline" size="sm" className="rounded-xl">
              مقال جديد
            </Button>
          </Link>
        }
      />

      <form className="space-y-5" onSubmit={(e) => onSubmit(e)}>
        {saved ? <FormSuccess>تم حفظ المقال.</FormSuccess> : null}
        {error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
            {error}
          </p>
        ) : null}

        <AdminPanel
          title="أساسيات المقال"
          description="العنوان والرابط والمقتطف يظهرون في قائمة المدونة ونتائج البحث."
        >
          <div>
            <Label htmlFor="titleAr">العنوان (عربي)</Label>
            <Input
              id="titleAr"
              className="mt-1.5 rounded-xl"
              value={form.titleAr}
              onChange={(e) => set('titleAr', e.target.value)}
              placeholder="مثال: دليل تحسين محركات البحث للمتاجر"
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                dir="ltr"
                className="mt-1.5 rounded-xl"
                value={form.slug}
                onChange={(e) => set('slug', e.target.value)}
                placeholder="gypsum-ceiling-tips-riyadh"
              />
              <p className="mt-1 text-xs text-muted">بالإنجليزية — جزء من رابط المقال.</p>
            </div>
            <div>
              <Label htmlFor="serviceSlug">مرتبط بمهنة</Label>
              <Select
                id="serviceSlug"
                className="mt-1.5 rounded-xl"
                value={form.serviceSlug}
                onChange={(e) => set('serviceSlug', e.target.value)}
              >
                <option value="">— اختياري —</option>
                {services.map((s) => (
                  <option key={s.id} value={s.slug}>
                    {s.nameAr}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="citySlug">مرتبط بمدينة</Label>
              <Select
                id="citySlug"
                className="mt-1.5 rounded-xl"
                value={form.citySlug || ''}
                onChange={(e) => set('citySlug', e.target.value || undefined)}
              >
                <option value="">— عام للمملكة —</option>
                {cities.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.nameAr}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="excerptAr">المقتطف (عربي)</Label>
            <Textarea
              id="excerptAr"
              className="mt-1.5 rounded-xl"
              value={form.excerptAr}
              onChange={(e) => set('excerptAr', e.target.value)}
              placeholder="ملخص قصير يظهر تحت العنوان في قائمة المدونة"
            />
          </div>
        </AdminPanel>

        <AdminPanel
          title="المحتوى"
          description="اكتب المحتوى بصيغة HTML، ويمكنك إدراج صور وروابط داخل النص. استخدم عناوين h2/h3 لأقسام المقال."
        >
          <div>
            <Label htmlFor="contentHtmlAr">المحتوى (HTML)</Label>
            <Textarea
              id="contentHtmlAr"
              ref={contentRef}
              value={form.contentHtmlAr}
              onChange={(e) => set('contentHtmlAr', e.target.value)}
              className="mt-1.5 min-h-56 rounded-xl font-mono text-[13px]"
            />
          </div>

          <div className="mt-4 rounded-xl border border-line bg-cream/50 p-4">
            <h3 className="text-sm font-extrabold text-ink">روابط خارجية</h3>
            <p className="mt-1 text-xs text-muted">
              حدّد كلمة في النص، الصق الرابط، ثم اضغط إدراج.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <Label htmlFor="linkText">نص الرابط</Label>
                <Input
                  id="linkText"
                  className="mt-1.5 rounded-xl"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="اتركه فارغًا لاستخدام النص المحدد"
                />
              </div>
              <div>
                <Label htmlFor="linkUrl">الرابط (URL)</Label>
                <Input
                  id="linkUrl"
                  dir="ltr"
                  className="mt-1.5 rounded-xl"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://www.example.com"
                />
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-3 rounded-xl"
              onClick={insertExternalLink}
            >
              إدراج رابط خارجي
            </Button>
          </div>

          <div className="mt-4 rounded-xl border border-line bg-cream/50 p-4">
            <h3 className="text-sm font-extrabold text-ink">روابط داخل المقال</h3>
            <p className="mt-1 text-xs text-muted">
              اربط جملة أو كلمة بقسم معيّن (عنوان h2 أو h3).
            </p>
            <div className="mt-3">
              <Label htmlFor="internalTarget">القسم</Label>
              <Select
                id="internalTarget"
                className="mt-1.5 rounded-xl"
                value={internalTarget}
                onChange={(e) => setInternalTarget(e.target.value)}
              >
                <option value="">— اختر قسمًا —</option>
                {headings.map((h) => (
                  <option key={h.id} value={h.id}>
                    {`H${h.level}: ${h.text}`}
                  </option>
                ))}
              </Select>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-3 rounded-xl"
              onClick={insertInternalLink}
            >
              إدراج رابط داخلي
            </Button>
          </div>

          <div className="mt-4 rounded-xl border border-line bg-cream/50 p-4">
            <h3 className="text-sm font-extrabold text-ink">صور داخل المقال</h3>
            <p className="mt-1 text-xs text-muted">ارفع صورة وحدد مكانها: عند المؤشر أو في نهاية المقال.</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <Label htmlFor="imgAlt">وصف الصورة (Alt)</Label>
                <Input
                  id="imgAlt"
                  className="mt-1.5 rounded-xl"
                  value={imgAlt}
                  onChange={(e) => setImgAlt(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="imgCaption">تعليق تحت الصورة (اختياري)</Label>
                <Input
                  id="imgCaption"
                  className="mt-1.5 rounded-xl"
                  value={imgCaption}
                  onChange={(e) => setImgCaption(e.target.value)}
                />
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              className="mt-3 block w-full text-sm text-muted file:me-3 file:rounded-lg file:border-0 file:bg-brand file:px-3 file:py-2 file:text-xs file:font-bold file:text-white"
              id="inline-image"
              onChange={async (e) => {
                const file = e.target.files?.[0] || null
                ;(e.target as HTMLInputElement).dataset.ready = file ? '1' : ''
              }}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-xl"
                onClick={async () => {
                  const input = document.getElementById('inline-image') as HTMLInputElement | null
                  const file = input?.files?.[0] || null
                  await insertImage(file, false)
                }}
              >
                إدراج عند المؤشر
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-xl"
                onClick={async () => {
                  const input = document.getElementById('inline-image') as HTMLInputElement | null
                  const file = input?.files?.[0] || null
                  await insertImage(file, true)
                }}
              >
                إدراج في نهاية المقال
              </Button>
            </div>
          </div>
        </AdminPanel>

        <AdminPanel title="التصنيف والنشر">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="category">التصنيف</Label>
              <Select
                id="category"
                className="mt-1.5 rounded-xl"
                value={form.category}
                onChange={(e) => set('category', e.target.value as BlogCategory)}
              >
                <option value="trades">مهن وخدمات</option>
                <option value="web-design">تصميم مواقع</option>
                <option value="seo">SEO</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="author">الكاتب</Label>
              <Input
                id="author"
                className="mt-1.5 rounded-xl"
                value={form.author}
                onChange={(e) => set('author', e.target.value)}
                placeholder="بدون كاتب محدد"
              />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="tags">الوسوم (مفصولة بفاصلة)</Label>
            <Input
              id="tags"
              dir="ltr"
              className="mt-1.5 rounded-xl"
              value={form.tags}
              onChange={(e) => set('tags', e.target.value)}
              placeholder="seo, plumbing, saudi"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="status">الحالة</Label>
              <Select
                id="status"
                className="mt-1.5 rounded-xl"
                value={form.status}
                onChange={(e) => set('status', e.target.value as BlogStatus)}
              >
                <option value="draft">مسودة</option>
                <option value="published">منشور</option>
              </Select>
            </div>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-cream/40 px-4 py-3 sm:mt-6">
              <input
                type="checkbox"
                className="size-4 rounded border-line accent-brand"
                checked={form.featured}
                onChange={(e) => set('featured', e.target.checked)}
              />
              <span className="text-sm font-bold text-ink">مقال رائج (يظهر في الأعلى)</span>
            </label>
          </div>
        </AdminPanel>

        <AdminPanel
          title="شركة في المقال (اختياري)"
          description="اتركه فاضي والمقال يبقى مفيد للعميل فقط. لما يبقى اتفاق، أضف الاسم والشعار ونبذة قصيرة."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="companyName">اسم الشركة</Label>
              <Input
                id="companyName"
                className="mt-1.5 rounded-xl"
                value={form.companyName}
                onChange={(e) => set('companyName', e.target.value)}
                placeholder="مثال: مؤسسة تشطيب حدائق..."
              />
            </div>
            <div>
              <Label htmlFor="companyLogo">شعار الشركة (رابط أو رفع)</Label>
              <Input
                id="companyLogo"
                dir="ltr"
                className="mt-1.5 rounded-xl"
                value={form.companyLogo}
                onChange={(e) => set('companyLogo', e.target.value)}
                placeholder="https://... أو ارفع من الزر"
              />
              <input
                type="file"
                accept="image/*"
                className="mt-2 block w-full text-sm text-muted file:me-3 file:rounded-lg file:border-0 file:bg-brand file:px-3 file:py-2 file:text-xs file:font-bold file:text-white"
                onChange={async (e) => {
                  const file = e.target.files?.[0]
                  if (!file) return
                  set('companyLogo', await fileToDataUrl(file))
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="companyAboutAr">نبذة عن الشركة (عربي)</Label>
            <Textarea
              id="companyAboutAr"
              className="mt-1.5 rounded-xl"
              value={form.companyAboutAr}
              onChange={(e) => set('companyAboutAr', e.target.value)}
              placeholder="فقرة قصيرة عن الشركة تظهر أسفل المقال فقط عند تعبئة الاسم."
            />
          </div>
          {form.companyName || form.companyLogo ? (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-line bg-cream/50 p-3">
              {form.companyLogo ? (
                <img
                  src={form.companyLogo}
                  alt=""
                  className="size-12 rounded-lg object-contain ring-1 ring-line"
                />
              ) : null}
              <div>
                <p className="text-sm font-extrabold text-ink">
                  {form.companyName || 'بدون اسم بعد'}
                </p>
                <p className="text-xs text-muted">معاينة سريعة — تظهر للعامة عند وجود اسم.</p>
              </div>
            </div>
          ) : null}
        </AdminPanel>

        <AdminPanel title="صورة الغلاف" description="تظهر أعلى المقال وفي بطاقات المدونة ومشاركة الروابط.">
          <Input
            dir="ltr"
            className="rounded-xl"
            value={form.image}
            onChange={(e) => set('image', e.target.value)}
            placeholder="رابط الصورة أو ارفع من الزر"
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
          <div className="mt-4">
            <Label htmlFor="imageAltAr">وصف صورة الغلاف (Alt)</Label>
            <Input
              id="imageAltAr"
              className="mt-1.5 rounded-xl"
              value={form.imageAltAr}
              onChange={(e) => set('imageAltAr', e.target.value)}
            />
          </div>
          {form.image ? (
            <img
              src={form.image}
              alt=""
              className="mt-4 aspect-[16/9] w-full max-w-xl rounded-2xl object-cover ring-1 ring-line"
            />
          ) : null}
        </AdminPanel>

        <AdminPanel title="SEO" description="العناوين والوصف تظهر في Google ومشاركات السوشيال ميديا.">
          <div>
            <Label htmlFor="metaTitleAr">Meta Title</Label>
            <Input
              id="metaTitleAr"
              className="mt-1.5 rounded-xl"
              value={form.metaTitleAr}
              onChange={(e) => set('metaTitleAr', e.target.value)}
              placeholder="عنوان يظهر في نتائج البحث"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="metaDescriptionAr">Meta Description</Label>
            <Textarea
              id="metaDescriptionAr"
              className="mt-1.5 rounded-xl"
              value={form.metaDescriptionAr}
              onChange={(e) => set('metaDescriptionAr', e.target.value)}
              placeholder="وصف مختصر يشجّع على النقر"
            />
          </div>
        </AdminPanel>

        <div className="sticky bottom-4 z-10 flex flex-wrap gap-2.5 rounded-2xl border border-line bg-surface/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-md">
          <Button
            type="submit"
            variant="primary"
            className="rounded-xl"
            onClick={(e) => onSubmit(e, form.status)}
          >
            حفظ
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-xl"
            onClick={(e) => onSubmit(e as unknown as FormEvent, 'draft')}
          >
            حفظ كمسودة
          </Button>
          <Button
            type="button"
            variant="accent"
            className="rounded-xl"
            onClick={(e) => onSubmit(e as unknown as FormEvent, 'published')}
          >
            نشر
          </Button>
        </div>
      </form>
    </div>
  )
}
