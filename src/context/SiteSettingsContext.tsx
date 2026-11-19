import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_SITE_SETTINGS,
  loadSiteSettings,
  resetSiteSettings,
  saveSiteSettings,
  type SiteSettings,
} from '@/lib/siteSettings'

type SiteSettingsContextValue = {
  settings: SiteSettings
  updateSettings: (next: Partial<SiteSettings>) => void
  replaceSettings: (next: SiteSettings) => void
  resetSettings: () => void
}

const SiteSettingsContext = createContext<SiteSettingsContextValue | null>(null)

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(() => loadSiteSettings())

  const updateSettings = useCallback((next: Partial<SiteSettings>) => {
    setSettings((prev) => {
      const merged = { ...prev, ...next }
      saveSiteSettings(merged)
      return merged
    })
  }, [])

  const replaceSettings = useCallback((next: SiteSettings) => {
    saveSiteSettings(next)
    setSettings(next)
  }, [])

  const resetSettings = useCallback(() => {
    const defaults = resetSiteSettings()
    setSettings(defaults)
  }, [])

  const value = useMemo(
    () => ({ settings, updateSettings, replaceSettings, resetSettings }),
    [settings, updateSettings, replaceSettings, resetSettings],
  )

  return (
    <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>
  )
}

export function useSiteSettings() {
  const ctx = useContext(SiteSettingsContext)
  if (!ctx) throw new Error('useSiteSettings must be used within SiteSettingsProvider')
  return ctx
}

export { DEFAULT_SITE_SETTINGS }
