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
  taglineAr: 'نساعد الناس تلاقي خدمتها في مدينتها',
  taglineEn: 'Helping people find services in their city',
  whatsapp: '+966 54 988 1368',
  email: 'top1markting.com',
  coverageAr: 'الرياض · جدة · مكة · الدمام · دبي · أبوظبي · الشارقة',
  coverageEn: 'Riyadh · Jeddah · Makkah · Dammam · Dubai · Abu Dhabi · Sharjah',
}

const STORAGE_KEY = 'saedni_site_settings_v2'

export function loadSiteSettings(): SiteSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_SITE_SETTINGS }
    return { ...DEFAULT_SITE_SETTINGS, ...JSON.parse(raw) }
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
