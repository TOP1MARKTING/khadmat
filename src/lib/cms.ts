import { blogArticles, type BlogArticle } from '@/data/blog'
import { services as seedServices, type Service } from '@/data/services'

export type CmsService = Service & {
  id: string
  updatedAt: string
}

export type BlogStatus = 'draft' | 'published'
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
  updatedAt: string
}

const SERVICES_KEY = 'saedni_cms_services_v1'
const ARTICLES_KEY = 'saedni_cms_articles_v1'

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`
}

function seedCmsServices(): CmsService[] {
  const now = new Date().toISOString()
  return seedServices.map((s) => ({
    ...s,
    id: uid('svc'),
    updatedAt: now,
  }))
}

function paragraphsToHtml(paragraphs: string[]) {
  return paragraphs.map((p) => `<p>${p}</p>`).join('\n')
}

function seedCmsArticles(): CmsArticle[] {
  const now = new Date().toISOString()
  return blogArticles.map((a: BlogArticle) => ({
    id: uid('art'),
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
    category: 'trades' as BlogCategory,
    author: '',
    tags: a.serviceSlug,
    status: 'published' as BlogStatus,
    featured: false,
    metaTitleAr: '',
    metaDescriptionAr: '',
    metaTitleEn: '',
    metaDescriptionEn: '',
    updatedAt: now,
  }))
}

export function loadCmsServices(): CmsService[] {
  try {
    const raw = localStorage.getItem(SERVICES_KEY)
    if (!raw) {
      const seeded = seedCmsServices()
      localStorage.setItem(SERVICES_KEY, JSON.stringify(seeded))
      return seeded
    }
    return JSON.parse(raw) as CmsService[]
  } catch {
    return seedCmsServices()
  }
}

export function saveCmsServices(list: CmsService[]) {
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
    return JSON.parse(raw) as CmsArticle[]
  } catch {
    return seedCmsArticles()
  }
}

export function saveCmsArticles(list: CmsArticle[]) {
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(list))
}

export function emptyArticle(): CmsArticle {
  const now = new Date().toISOString().slice(0, 10)
  return {
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
    updatedAt: new Date().toISOString(),
  }
}

export function emptyService(categorySlug = 'home-maintenance'): CmsService {
  return {
    id: uid('svc'),
    slug: '',
    categorySlug,
    nameAr: '',
    nameEn: '',
    shortAr: '',
    shortEn: '',
    introAr: '',
    introEn: '',
    typesAr: [],
    typesEn: [],
    faqAr: [],
    faqEn: [],
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
    popular: false,
    updatedAt: new Date().toISOString(),
  }
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
