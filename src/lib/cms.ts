import { blogArticles, type BlogArticle } from '@/data/blog'
import { services as seedServices, type Service } from '@/data/services'

export type PublishStatus = 'draft' | 'published'

export type CmsService = Service & {
  id: string
  updatedAt: string
  status: PublishStatus
  bodyAr: string
  bodyEn: string
  gallery: string[]
  benefitsAr: string[]
  benefitsEn: string[]
  stepsAr: string[]
  stepsEn: string[]
  metaTitleAr?: string
  metaDescriptionAr?: string
  imageAltAr?: string
}

export type BlogStatus = PublishStatus
export type BlogCategory = 'web-design' | 'seo' | 'trades'

export type CmsArticle = {
  id: string
  slug: string
  serviceSlug: string
  citySlug?: string
  titleAr: string
  titleEn: string
  excerptAr: string
  excerptEn: string
  /** HTML body (preferred for CMS editor) */
  contentHtmlAr: string
  contentHtmlEn: string
  /** Legacy paragraph arrays for seeded articles */
  contentAr: string[]
  contentEn: string[]
  publishedAt: string
  readMinutes: number
  image: string
  imageAltAr: string
  imageAltEn: string
  coverUrlEn?: string
  category: BlogCategory
  author: string
  tags: string
  status: BlogStatus
  featured: boolean
  metaTitleAr: string
  metaDescriptionAr: string
  metaTitleEn: string
  metaDescriptionEn: string
  /** Optional company spotlight — only show publicly when name is set */
  companyName: string
  companyLogo: string
  companyAboutAr: string
  companyAboutEn: string
  updatedAt: string
}

const SERVICES_KEY = 'saedni_cms_services_v31'
const ARTICLES_KEY = 'saedni_cms_articles_v31'

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`
}

function normalizeService(s: CmsService): CmsService {
  return {
    ...s,
    status: s.status === 'draft' ? 'draft' : 'published',
    bodyAr: s.bodyAr || '',
    bodyEn: s.bodyEn || '',
    gallery: Array.isArray(s.gallery) ? s.gallery.filter(Boolean) : [],
    benefitsAr: Array.isArray(s.benefitsAr) ? s.benefitsAr : [],
    benefitsEn: Array.isArray(s.benefitsEn) ? s.benefitsEn : [],
    stepsAr: Array.isArray(s.stepsAr) ? s.stepsAr : [],
    stepsEn: Array.isArray(s.stepsEn) ? s.stepsEn : [],
    typesAr: Array.isArray(s.typesAr) ? s.typesAr : [],
    typesEn: Array.isArray(s.typesEn) ? s.typesEn : [],
    faqAr: Array.isArray(s.faqAr) ? s.faqAr : [],
    faqEn: Array.isArray(s.faqEn) ? s.faqEn : [],
    metaTitleAr: s.metaTitleAr || '',
    metaDescriptionAr: s.metaDescriptionAr || '',
    imageAltAr: s.imageAltAr || s.nameAr || '',
  }
}

function normalizeArticle(a: CmsArticle): CmsArticle {
  return {
    ...a,
    citySlug: a.citySlug || undefined,
    contentHtmlAr: a.contentHtmlAr || '',
    contentHtmlEn: a.contentHtmlEn || '',
    contentAr: Array.isArray(a.contentAr) ? a.contentAr : [],
    contentEn: Array.isArray(a.contentEn) ? a.contentEn : [],
    imageAltAr: a.imageAltAr || a.titleAr || '',
    imageAltEn: a.imageAltEn || a.titleEn || '',
    author: a.author || '',
    tags: a.tags || '',
    metaTitleAr: a.metaTitleAr || '',
    metaDescriptionAr: a.metaDescriptionAr || '',
    metaTitleEn: a.metaTitleEn || '',
    metaDescriptionEn: a.metaDescriptionEn || '',
    companyName: a.companyName || '',
    companyLogo: a.companyLogo || '',
    companyAboutAr: a.companyAboutAr || '',
    companyAboutEn: a.companyAboutEn || '',
  }
}

/** Stable seed ids so cloud docs stay consistent across browsers/exports. */
export function getSeedCmsServices(): CmsService[] {
  const now = new Date().toISOString()
  return seedServices.map((s) =>
    normalizeService({
      ...s,
      bodyAr: s.bodyAr || '',
      bodyEn: s.bodyEn || '',
      gallery: s.gallery || [],
      benefitsAr: s.benefitsAr || [],
      benefitsEn: s.benefitsEn || [],
      stepsAr: s.stepsAr || [],
      stepsEn: s.stepsEn || [],
      id: `svc_${s.slug}`,
      status: 'published',
      updatedAt: now,
    }),
  )
}

function seedCmsServices(): CmsService[] {
  return getSeedCmsServices()
}

function paragraphsToHtml(paragraphs: string[]) {
  return paragraphs.map((p) => `<p>${p}</p>`).join('\n')
}

export function getSeedCmsArticles(): CmsArticle[] {
  const now = new Date().toISOString()
  return blogArticles.map((a: BlogArticle) =>
    normalizeArticle({
      id: `art_${a.slug}`,
      slug: a.slug,
      serviceSlug: a.serviceSlug,
      citySlug: a.citySlug,
      titleAr: a.titleAr,
      titleEn: a.titleEn,
      excerptAr: a.excerptAr,
      excerptEn: a.excerptEn,
      contentHtmlAr: paragraphsToHtml(a.contentAr),
      contentHtmlEn: paragraphsToHtml(a.contentEn),
      contentAr: a.contentAr,
      contentEn: a.contentEn,
      publishedAt: a.publishedAt,
      readMinutes: a.readMinutes,
      image: a.image,
      imageAltAr: a.titleAr,
      imageAltEn: a.titleEn,
      category: 'trades',
      author: '',
      tags: a.serviceSlug,
      status: 'published',
      featured: false,
      metaTitleAr: '',
      metaDescriptionAr: '',
      metaTitleEn: '',
      metaDescriptionEn: '',
      companyName: a.companyName || '',
      companyLogo: a.companyLogo || '',
      companyAboutAr: a.companyAboutAr || '',
      companyAboutEn: a.companyAboutEn || '',
      updatedAt: now,
    }),
  )
}

function seedCmsArticles(): CmsArticle[] {
  return getSeedCmsArticles()
}

export function loadCmsServices(): CmsService[] {
  try {
    const raw = localStorage.getItem(SERVICES_KEY)
    if (!raw) {
      const seeded = seedCmsServices()
      localStorage.setItem(SERVICES_KEY, JSON.stringify(seeded))
      return seeded
    }
    const parsed = (JSON.parse(raw) as CmsService[]).map(normalizeService)
    // Empty cache (e.g. wiped by a bad sync) must re-seed — "[]" is truthy JSON.
    if (parsed.length === 0) {
      const seeded = seedCmsServices()
      localStorage.setItem(SERVICES_KEY, JSON.stringify(seeded))
      return seeded
    }
    return parsed
  } catch {
    return seedCmsServices()
  }
}

export function saveCmsServices(list: CmsService[]) {
  // Never persist an empty wipe over seeded/public guides.
  if (!list.length) return
  localStorage.setItem(SERVICES_KEY, JSON.stringify(list))
}

export function loadCmsArticles(): CmsArticle[] {
  try {
    const raw = localStorage.getItem(ARTICLES_KEY)
    if (!raw) {
      const seeded = seedCmsArticles()
      localStorage.setItem(ARTICLES_KEY, JSON.stringify(seeded))
      return seeded
    }
    return (JSON.parse(raw) as CmsArticle[]).map(normalizeArticle)
  } catch {
    return seedCmsArticles()
  }
}

export function saveCmsArticles(list: CmsArticle[]) {
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(list))
}

export function emptyArticle(): CmsArticle {
  const now = new Date().toISOString().slice(0, 10)
  return normalizeArticle({
    id: uid('art'),
    slug: '',
    serviceSlug: '',
    titleAr: '',
    titleEn: '',
    excerptAr: '',
    excerptEn: '',
    contentHtmlAr: '<p></p>',
    contentHtmlEn: '<p></p>',
    contentAr: [],
    contentEn: [],
    publishedAt: now,
    readMinutes: 4,
    image: '',
    imageAltAr: '',
    imageAltEn: '',
    category: 'trades',
    author: '',
    tags: '',
    status: 'draft',
    featured: false,
    metaTitleAr: '',
    metaDescriptionAr: '',
    metaTitleEn: '',
    metaDescriptionEn: '',
    companyName: '',
    companyLogo: '',
    companyAboutAr: '',
    companyAboutEn: '',
    updatedAt: new Date().toISOString(),
  })
}

export function emptyService(categorySlug = 'home-maintenance'): CmsService {
  return normalizeService({
    id: uid('svc'),
    slug: '',
    categorySlug,
    nameAr: '',
    nameEn: '',
    shortAr: '',
    shortEn: '',
    introAr: '',
    introEn: '',
    bodyAr: '',
    bodyEn: '',
    gallery: [],
    benefitsAr: [],
    benefitsEn: [],
    stepsAr: [],
    stepsEn: [],
    typesAr: [],
    typesEn: [],
    faqAr: [],
    faqEn: [],
    image: '/images/hero/hero-01-plumbing.jpg',
    imageAltAr: '',
    metaTitleAr: '',
    metaDescriptionAr: '',
    popular: false,
    status: 'draft',
    updatedAt: new Date().toISOString(),
  })
}

export function slugify(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(new Error('فشل قراءة الملف'))
    reader.readAsDataURL(file)
  })
}

export function articleHasCompany(article: Pick<CmsArticle, 'companyName'>) {
  return Boolean(article.companyName?.trim())
}

/** One public guide per slug — keeps counts aligned with openable /services/:slug links. */
export function dedupeBySlug<T extends { slug: string; updatedAt?: string }>(list: T[]): T[] {
  const map = new Map<string, T>()
  for (const item of list) {
    const slug = item.slug?.trim()
    if (!slug) continue
    const prev = map.get(slug)
    if (!prev || (item.updatedAt || '') >= (prev.updatedAt || '')) {
      map.set(slug, item)
    }
  }
  return [...map.values()]
}

/** Remove undefined fields so cloud writes accept the payload. */
export function normalizeForFirestore<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) =>
      item && typeof item === 'object'
        ? normalizeForFirestore(item)
        : item,
    ) as T
  }
  if (!value || typeof value !== 'object') return value
  const out: Record<string, unknown> = {}
  for (const [key, v] of Object.entries(value as Record<string, unknown>)) {
    if (v === undefined) continue
    if (Array.isArray(v)) {
      out[key] = v.map((item) =>
        item && typeof item === 'object' ? normalizeForFirestore(item) : item,
      )
    } else if (v && typeof v === 'object' && !(v instanceof Date)) {
      out[key] = normalizeForFirestore(v)
    } else {
      out[key] = v
    }
  }
  return out as T
}
