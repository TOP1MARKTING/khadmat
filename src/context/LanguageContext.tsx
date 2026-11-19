import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'

export type Lang = 'ar'

type LanguageContextValue = {
  lang: Lang
  isAr: boolean
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (ar: string, _en?: string) => string
  dir: 'rtl'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'saedni-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Arabic-only site
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, 'ar')
    document.documentElement.lang = 'ar'
    document.documentElement.dir = 'rtl'
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang: 'ar',
      isAr: true,
      setLang: () => undefined,
      toggleLang: () => undefined,
      t: (ar) => ar,
      dir: 'rtl',
    }),
    [],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
