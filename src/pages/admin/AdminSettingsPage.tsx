import { useEffect, useState, type FormEvent } from 'react'
import { RotateCcw, Save } from 'lucide-react'
import { useSiteSettings } from '@/context/SiteSettingsContext'
import { Button } from '@/components/ui/Button'
import { FormSuccess, Input, Label, Textarea } from '@/components/ui/Input'
import { AdminPageHeader, AdminPanel } from '@/components/admin/AdminUI'

export function AdminSettingsPage() {
  const { settings, replaceSettings, resetSettings } = useSiteSettings()
  const [form, setForm] = useState(settings)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setForm(settings)
  }, [settings])

  const onChange = (key: keyof typeof form, value: string) => {
    setSaved(false)
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    replaceSettings(form)
    setSaved(true)
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="إعدادات الموقع"
        description="التغييرات تظهر مباشرة في الفوتر وصفحة التواصل."
      />

      <form onSubmit={onSubmit} className="space-y-5">
        {saved ? <FormSuccess>تم حفظ الإعدادات بنجاح.</FormSuccess> : null}

        <AdminPanel title="الهوية" description="اسم الموقع والشعار النصي">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="siteNameAr">اسم الموقع (عربي)</Label>
              <Input
                id="siteNameAr"
                className="mt-1.5 rounded-xl"
                value={form.siteNameAr}
                onChange={(e) => onChange('siteNameAr', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="siteNameEn">اسم الموقع (English)</Label>
              <Input
                id="siteNameEn"
                className="mt-1.5 rounded-xl"
                value={form.siteNameEn}
                onChange={(e) => onChange('siteNameEn', e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="taglineAr">الشعار النصي (عربي)</Label>
            <Textarea
              id="taglineAr"
              className="mt-1.5 rounded-xl"
              value={form.taglineAr}
              onChange={(e) => onChange('taglineAr', e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="taglineEn">Tagline (English)</Label>
            <Textarea
              id="taglineEn"
              className="mt-1.5 rounded-xl"
              value={form.taglineEn}
              onChange={(e) => onChange('taglineEn', e.target.value)}
            />
          </div>
        </AdminPanel>

        <AdminPanel title="التواصل" description="يظهر في الفوتر وصفحة تواصل معنا">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="whatsapp">واتساب</Label>
              <Input
                id="whatsapp"
                dir="ltr"
                className="mt-1.5 rounded-xl"
                value={form.whatsapp}
                onChange={(e) => onChange('whatsapp', e.target.value)}
                placeholder="+966 5X XXX XXXX"
              />
            </div>
            <div>
              <Label htmlFor="email">البريد</Label>
              <Input
                id="email"
                type="email"
                dir="ltr"
                className="mt-1.5 rounded-xl"
                value={form.email}
                onChange={(e) => onChange('email', e.target.value)}
              />
            </div>
          </div>
        </AdminPanel>

        <AdminPanel title="التغطية" description="نص يظهر في الفوتر">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="coverageAr">نص التغطية (عربي)</Label>
              <Input
                id="coverageAr"
                className="mt-1.5 rounded-xl"
                value={form.coverageAr}
                onChange={(e) => onChange('coverageAr', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="coverageEn">Coverage text (English)</Label>
              <Input
                id="coverageEn"
                className="mt-1.5 rounded-xl"
                value={form.coverageEn}
                onChange={(e) => onChange('coverageEn', e.target.value)}
              />
            </div>
          </div>
        </AdminPanel>

        <div className="flex flex-wrap gap-2.5 sticky bottom-4 z-10 rounded-2xl border border-line bg-surface/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-md">
          <Button type="submit" variant="primary" className="rounded-xl">
            <Save className="size-4" />
            حفظ التغييرات
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-xl"
            onClick={() => {
              resetSettings()
              setSaved(false)
            }}
          >
            <RotateCcw className="size-4" />
            استعادة الافتراضي
          </Button>
        </div>
      </form>
    </div>
  )
}
