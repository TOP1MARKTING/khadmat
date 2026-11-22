import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import {
  DEFAULT_SITE_SETTINGS,
  loadSiteSettings,
  resetSiteSettings,
  saveSiteSettings,
  type SiteSettings,
} from '@/lib/siteSettings'
import { getDb, getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase'
import { isEmailAllowedAdmin } from '@/lib/adminAllowlist'
import { COL, saveSiteSettingsToFirestore } from '@/lib/firestoreData'

type SiteSettingsContextValue = {
  settings: SiteSettings
  updateSettings: (next: Partial<SiteSettings>) => Promise<void>
  replaceSettings: (next: SiteSettings) => Promise<void>
  resetSettings: () => Promise<void>
}

const SiteSettingsContext = createContext<SiteSettingsContextValue | null>(null)

function asSiteSettings(raw: Record<string, unknown> | undefined): SiteSettings | null {
  if (!raw) return null
  return { ...DEFAULT_SITE_SETTINGS, ...(raw as Partial<SiteSettings>) }
}

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(() => loadSiteSettings())

  useEffect(() => {
    if (!isFirebaseConfigured()) return
    const ref = doc(getDb(), COL.settings, 'site')
    const unsub = onSnapshot(
      ref,
      (snap) => {
        if (!snap.exists()) return
        const remote = asSiteSettings(snap.data())
        if (!remote) return
        saveSiteSettings(remote)
        setSettings(remote)
      },
      (err) => {
        console.warn(err)
      },
    )
    return () => unsub()
  }, [])

  const canWriteCloud = () => {
    const email = getFirebaseAuth().currentUser?.email
    return Boolean(
      isFirebaseConfigured() &&
        getFirebaseAuth().currentUser &&
        isEmailAllowedAdmin(email),
    )
  }

  const updateSettings = useCallback(async (next: Partial<SiteSettings>) => {
    const merged = { ...loadSiteSettings(), ...next }
    saveSiteSettings(merged)
    setSettings(merged)
    if (canWriteCloud()) {
      try {
        await saveSiteSettingsToFirestore(merged)
      } catch (err) {
        console.error(err)
      }
    }
  }, [])

  const replaceSettings = useCallback(async (next: SiteSettings) => {
    saveSiteSettings(next)
    setSettings(next)
    if (canWriteCloud()) {
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
    if (canWriteCloud()) {
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
