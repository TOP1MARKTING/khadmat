import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'ar' | 'en'

type LanguageContextValue = {
  lang: Lang
  isAr: boolean
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (ar: string, en: string) => string
  dir: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'saedni-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'en' ? 'en' : 'ar'
  })

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      isAr: lang === 'ar',
      setLang,
      toggleLang,
      t: (ar, en) => (lang === 'ar' ? ar : en),
      dir: lang === 'ar' ? 'rtl' : 'ltr',
    }),
    [lang],
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
