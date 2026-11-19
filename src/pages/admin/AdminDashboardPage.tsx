import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Briefcase,
  FileText,
  Mail,
  Newspaper,
  Phone,
  Settings,
  Sparkles,
} from 'lucide-react'
import { useSiteSettings } from '@/context/SiteSettingsContext'
import { useCms } from '@/context/CmsContext'
import { AdminPageHeader, AdminStatCard } from '@/components/admin/AdminUI'

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
    to: '/admin/settings',
    icon: Settings,
    title: 'إعدادات الموقع',
    desc: 'تواصل وشعار نصي',
    tone: 'bg-ink/8 text-ink',
  },
] as const

export function AdminDashboardPage() {
  const { settings } = useSiteSettings()
  const { services, articles } = useCms()
  const published = articles.filter((a) => a.status === 'published').length
  const drafts = articles.filter((a) => a.status === 'draft').length
  const popular = services.filter((s) => s.popular).length

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="لوحة التحكم"
        description="نظرة سريعة على المحتوى، مع اختصارات لإدارة المهن والمقالات والإعدادات."
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
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
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
          <Link
            to="/admin/settings"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-extrabold text-brand transition-colors hover:bg-sand-light"
          >
            تعديل الإعدادات
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
