import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { absoluteUrl } from '@/lib/siteConfig'

const DEFAULT_OG_IMAGE = '/images/hero/hero-11-contracting-desktop.jpg'

type PageMeta = {
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  canonicalPath?: string
  /** Absolute URL or site path. Defaults to brand share image. */
  image?: string
  /** Default index,follow. Use noindex for 404 / thin / private preview pages. */
  robots?: string
  ogType?: 'website' | 'article'
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

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head
    .querySelectorAll(`meta[${attr}="${key}"]`)
    .forEach((el) => el.remove())
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

function removeCanonical() {
  document.head.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove())
}

function toAbsoluteImage(src?: string) {
  const path = (src || DEFAULT_OG_IMAGE).trim()
  if (!path) return absoluteUrl(DEFAULT_OG_IMAGE)
  if (/^https?:\/\//i.test(path)) return path
  return absoluteUrl(path.startsWith('/') ? path : `/${path}`)
}

export function usePageMeta({
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn,
  canonicalPath,
  image,
  robots = 'index,follow',
  ogType = 'website',
}: PageMeta) {
  const { lang } = useLanguage()

  useEffect(() => {
    const title = lang === 'ar' ? titleAr : titleEn
    const description = lang === 'ar' ? descriptionAr : descriptionEn
    const imageUrl = toAbsoluteImage(image)
    const indexable = Boolean(canonicalPath) && !robots.includes('noindex')

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', robots)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:site_name', 'ساعدني | Saedni')
    upsertMeta('property', 'og:locale', lang === 'ar' ? 'ar_SA' : 'en_US')
    upsertMeta('property', 'og:type', ogType)
    upsertMeta('property', 'og:image', imageUrl)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)

    if (indexable) {
      const url = absoluteUrl(canonicalPath!)
      upsertLink('canonical', url)
      upsertMeta('property', 'og:url', url)
    } else {
      removeCanonical()
      removeMeta('property', 'og:url')
    }
  }, [
    lang,
    titleAr,
    titleEn,
    descriptionAr,
    descriptionEn,
    canonicalPath,
    image,
    robots,
    ogType,
  ])
}
