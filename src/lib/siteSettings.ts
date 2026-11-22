export type SiteSettings = {
  siteNameAr: string
  siteNameEn: string
  taglineAr: string
  taglineEn: string
  whatsapp: string
  email: string
  coverageAr: string
  coverageEn: string
}

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  siteNameAr: 'ساعدني',
  siteNameEn: 'Saedni',
  taglineAr:
    'مرجع معرفي لفهم المهن ونطاق الشغل في السعودية — مش دليل شركات ولا حجز خدمات.',
  taglineEn:
    'A knowledge guide to trades and scope of work in Saudi Arabia — not a company directory or booking service.',
  whatsapp: '+966 54 988 1368',
  email: 'top1markting.com',
  coverageAr: 'الرياض · جدة · مكة · الدمام · دبي · أبوظبي · الشارقة',
  coverageEn: 'Riyadh · Jeddah · Makkah · Dammam · Dubai · Abu Dhabi · Sharjah',
}

/** Older public copy that implied finding/booking providers — replace on load. */
const LEGACY_TAGLINES_AR = new Set([
  'نساعد الناس تلاقي خدمتها في مدينتها',
  'نساعد الناس تلقى خدمتها في مدينتها',
])
const LEGACY_TAGLINES_EN = new Set(['Helping people find services in their city'])

export function normalizeSiteSettings(settings: SiteSettings): SiteSettings {
  const next = { ...settings }
  if (!next.taglineAr?.trim() || LEGACY_TAGLINES_AR.has(next.taglineAr.trim())) {
    next.taglineAr = DEFAULT_SITE_SETTINGS.taglineAr
  }
  if (!next.taglineEn?.trim() || LEGACY_TAGLINES_EN.has(next.taglineEn.trim())) {
    next.taglineEn = DEFAULT_SITE_SETTINGS.taglineEn
  }
  return next
}

const STORAGE_KEY = 'saedni_site_settings_v3'

export function loadSiteSettings(): SiteSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_SITE_SETTINGS }
    return normalizeSiteSettings({ ...DEFAULT_SITE_SETTINGS, ...JSON.parse(raw) })
  } catch {
    return { ...DEFAULT_SITE_SETTINGS }
  }
}

export function saveSiteSettings(settings: SiteSettings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}

export function resetSiteSettings() {
  localStorage.removeItem(STORAGE_KEY)
  return { ...DEFAULT_SITE_SETTINGS }
}
