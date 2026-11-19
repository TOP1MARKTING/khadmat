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
  whatsapp: '+966 5X XXX XXXX',
  email: 'hello@saedni.sa',
  coverageAr: 'التغطية: مدن المملكة العربية السعودية.',
  coverageEn: 'Coverage: cities across the Kingdom of Saudi Arabia.',
}

const STORAGE_KEY = 'saedni_site_settings_v1'

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
