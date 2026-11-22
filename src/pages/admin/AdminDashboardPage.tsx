import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Briefcase,
  CloudUpload,
  FileText,
  Images,
  Mail,
  Newspaper,
  Phone,
  RefreshCw,
  Sparkles,
} from 'lucide-react'
import { useSiteSettings } from '@/context/SiteSettingsContext'
import { useCms } from '@/context/CmsContext'
import { useAdminAuth } from '@/context/AdminAuthContext'
import { AdminPageHeader, AdminStatCard } from '@/components/admin/AdminUI'
import { Button } from '@/components/ui/Button'
import { isFirebaseConfigured } from '@/lib/firebase'
import {
  ensureFirestoreSeeded,
  exportAllDataToFirestore,
} from '@/lib/firestoreData'

const shortcuts = [
  {
    to: '/admin/services',
    icon: Briefcase,
    title: 'المهن',
    desc: 'إضافة وتعديل ومسح المهن',
    tone: 'bg-brand/10 text-brand',
  },
  {
    to: '/admin/blog',
    icon: Newspaper,
    title: 'المدونة',
    desc: 'مقال جديد ومحرر كامل',
    tone: 'bg-accent/15 text-accent',
  },
  {
    to: '/admin/media',
    icon: Images,
    title: 'معرض الصور',
    desc: 'كل صور الموقع للنسخ وإعادة الاستخدام',
    tone: 'bg-ink/8 text-ink',
  },
] as const

export function AdminDashboardPage() {
  const { settings } = useSiteSettings()
  const { isAuthenticated } = useAdminAuth()
  const { services, articles, cmsSource, cmsError, refreshFromFirebase } = useCms()
  const published = articles.filter((a) => a.status === 'published').length
  const drafts = articles.filter((a) => a.status === 'draft').length
  const popular = services.filter((s) => s.popular).length
  const [exporting, setExporting] = useState(false)
  const [exportMsg, setExportMsg] = useState('')
  const autoSeedTried = useRef(false)

  const onExport = async () => {
    setExporting(true)
    setExportMsg('')
    try {
      const result = await exportAllDataToFirestore({
        services,
        articles,
        settings,
      })
      setExportMsg(
        `تم الرفع بدون حذف: ${result.services} مهنة · ${result.articles} مقال · ${result.cities} مدينة · ${result.categories} تصنيف · ${result.media} صورة · ${result.assets} أصل`,
      )
      await refreshFromFirebase()
    } catch (err) {
      setExportMsg(
        err instanceof Error
          ? `فشل التصدير: ${err.message}`
          : 'فشل رفع البيانات إلى السحابة',
      )
    } finally {
      setExporting(false)
    }
  }

  // First admin visit: if remote store empty, push all site data automatically.
  useEffect(() => {
    if (!isAuthenticated || !isFirebaseConfigured() || autoSeedTried.current) return
    if (!services.length) return
    autoSeedTried.current = true
    void (async () => {
      setExporting(true)
      setExportMsg('جاري رفع بيانات الموقع لأول مرة…')
      try {
        const result = await ensureFirestoreSeeded({
          services,
          articles,
          settings,
        })
        if (result) {
          setExportMsg(
            `تم رفع البيانات: ${result.services} مهنة · ${result.articles} مقال · ${result.cities} مدينة · ${result.categories} تصنيف · ${result.media} صورة`,
          )
          await refreshFromFirebase()
        } else {
          setExportMsg('')
        }
      } catch (err) {
        setExportMsg(
          err instanceof Error
            ? `تعذر الرفع التلقائي: ${err.message} — استخدم زر الرفع`
            : 'تعذر الرفع التلقائي — استخدم زر الرفع',
        )
      } finally {
        setExporting(false)
      }
    })()
  }, [isAuthenticated, services, articles, settings, refreshFromFirebase])

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="لوحة التحكم"
        description="نظرة سريعة على المحتوى، مع اختصارات وإدارة المزامنة."
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard label="المهن" value={services.length} icon={Briefcase} tone="brand" hint={`${popular} رائجة`} />
        <AdminStatCard label="مقالات منشورة" value={published} icon={Newspaper} tone="accent" />
        <AdminStatCard label="مسودات" value={drafts} icon={FileText} tone="sand" />
        <AdminStatCard
          label="التواصل"
          value={<span className="text-lg" dir="ltr">{settings.whatsapp}</span>}
          icon={Phone}
          tone="ink"
          hint={settings.email}
        />
      </div>

      {isFirebaseConfigured() ? (
        <div className="rounded-2xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)]">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-extrabold text-ink">المزامنة</h2>
              <p className="mt-1 text-sm text-muted">
                المصدر الحالي:{' '}
                <span className="font-extrabold text-ink">
                  {cmsSource === 'firebase'
                    ? 'السحابة'
                    : cmsSource === 'hybrid'
                      ? 'محلي + سحابة'
                      : 'محلي (بانتظار الرفع)'}
                </span>
              </p>
              <p className="mt-1 text-xs text-muted">
                الرفع يحفظ كل البيانات (مهن، مقالات، مدن، تصنيفات، معرض، إعدادات) بدون مسح
                سجلات أخرى موجودة مسبقًا.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl"
                onClick={() => void refreshFromFirebase()}
              >
                <RefreshCw className="size-4" />
                تحديث من السحابة
              </Button>
              <Button
                type="button"
                variant="primary"
                className="rounded-xl"
                disabled={exporting}
                onClick={() => void onExport()}
              >
                <CloudUpload className="size-4" />
                {exporting ? 'جاري الرفع…' : 'رفع الكل إلى السحابة'}
              </Button>
            </div>
          </div>
          {exportMsg ? (
            <p className="mt-3 text-sm font-bold text-brand">{exportMsg}</p>
          ) : null}
          {cmsError ? (
            <p className="mt-2 text-sm font-bold text-red-700">{cmsError}</p>
          ) : null}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-cream/50 p-5 text-sm text-muted">
          المزامنة السحابية غير مفعّلة حاليًا. راجع إعدادات المشروع مع المطوّر.
        </div>
      )}

      <div>
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="size-4 text-accent" />
          <h2 className="text-sm font-extrabold text-ink">اختصارات سريعة</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {shortcuts.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]"
              >
                <span className={`inline-flex size-11 items-center justify-center rounded-xl ${item.tone}`}>
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-brand opacity-80 transition-opacity group-hover:opacity-100">
                  فتح
                  <ArrowLeft className="size-3.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-gradient-to-l from-brand to-brand-dark p-5 text-white shadow-[var(--shadow-soft)] sm:p-6">
        <p className="text-[11px] font-bold tracking-wide text-sand uppercase">بيانات الموقع</p>
        <h2 className="mt-1 text-lg font-extrabold">{settings.siteNameAr}</h2>
        <p className="mt-1 max-w-lg text-sm text-white/75">{settings.taglineAr}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs font-bold text-sand">
          <span className="inline-flex items-center gap-1.5">
            <Phone className="size-3.5" />
            <span dir="ltr">{settings.whatsapp}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail className="size-3.5" />
            {settings.email}
          </span>
        </div>
      </div>
    </div>
  )
}
