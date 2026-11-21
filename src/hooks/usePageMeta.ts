import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { absoluteUrl } from '@/lib/siteConfig'

type PageMeta = {
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  canonicalPath?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function usePageMeta({
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn,
  canonicalPath,
}: PageMeta) {
  const { lang } = useLanguage()

  useEffect(() => {
    const title = lang === 'ar' ? titleAr : titleEn
    const description = lang === 'ar' ? descriptionAr : descriptionEn
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:site_name', 'ساعدني | Saedni')
    upsertMeta('property', 'og:locale', lang === 'ar' ? 'ar_SA' : 'en_US')
    if (canonicalPath) {
      const url = absoluteUrl(canonicalPath)
      upsertLink('canonical', url)
      upsertMeta('property', 'og:url', url)
    }
  }, [lang, titleAr, titleEn, descriptionAr, descriptionEn, canonicalPath])
}
