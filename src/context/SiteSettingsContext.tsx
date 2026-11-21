import {
  createContext,
  useCallback,
  useContext,
  useEffect,
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
import { isFirebaseConfigured } from '@/lib/firebase'
import {
  fetchSiteSettingsFromFirestore,
  saveSiteSettingsToFirestore,
} from '@/lib/firestoreData'

type SiteSettingsContextValue = {
  settings: SiteSettings
  updateSettings: (next: Partial<SiteSettings>) => Promise<void>
  replaceSettings: (next: SiteSettings) => Promise<void>
  resetSettings: () => Promise<void>
}

const SiteSettingsContext = createContext<SiteSettingsContextValue | null>(null)

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(() => loadSiteSettings())

  useEffect(() => {
    if (!isFirebaseConfigured()) return
    void (async () => {
      try {
        const remote = await fetchSiteSettingsFromFirestore()
        if (remote) {
          saveSiteSettings(remote)
          setSettings(remote)
        }
      } catch (err) {
        console.warn(err)
      }
    })()
  }, [])

  const updateSettings = useCallback(async (next: Partial<SiteSettings>) => {
    setSettings((prev) => {
      const merged = { ...prev, ...next }
      saveSiteSettings(merged)
      if (isFirebaseConfigured()) {
        void saveSiteSettingsToFirestore(merged).catch(console.error)
      }
      return merged
    })
  }, [])

  const replaceSettings = useCallback(async (next: SiteSettings) => {
    saveSiteSettings(next)
    setSettings(next)
    if (isFirebaseConfigured()) {
      try {
        await saveSiteSettingsToFirestore(next)
      } catch (err) {
        console.error(err)
      }
    }
  }, [])

  const resetSettings = useCallback(async () => {
    const defaults = resetSiteSettings()
    setSettings(defaults)
    if (isFirebaseConfigured()) {
      try {
        await saveSiteSettingsToFirestore(defaults)
      } catch (err) {
        console.error(err)
      }
    }
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
