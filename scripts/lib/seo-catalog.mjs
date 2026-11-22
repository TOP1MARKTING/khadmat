/**
 * Shared SEO catalog builders for sitemap / share-preview / prerender.
 */
const SITE = 'https://www.saedniksa.com'
const DEFAULT_IMAGE = `${SITE}/images/hero/hero-11-contracting-desktop.jpg`

export { SITE, DEFAULT_IMAGE }

export function absoluteUrl(path = '/') {
  if (!path) return `${SITE}/`
  if (/^https?:\/\//i.test(path)) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE}${normalized === '/' ? '/' : normalized}`
}

export function absoluteImage(src) {
  if (!src || !String(src).trim()) return DEFAULT_IMAGE
  const s = String(src).trim()
  if (/^https?:\/\//i.test(s)) return s
  return absoluteUrl(s.startsWith('/') ? s : `/${s}`)
}

function field(block, key) {
  const m =
    block.match(new RegExp(`${key}:\\s*'((?:\\\\'|[^'])*)'`)) ||
    block.match(new RegExp(`${key}:\\s*"((?:\\\\"|[^"])*)"`)) ||
    block.match(new RegExp(`${key}:\\s*\`([\\s\\S]*?)\``))
  return m?.[1]?.replace(/\\'/g, "'").replace(/\\n/g, ' ').trim() || ''
}

export function extractServices(src, { minBody = 0 } = {}) {
  const out = []
  const blocks = src.split(/\n\s*\{\s*\n\s*slug:\s*'/)
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i]
    if (!block.includes('categorySlug:')) continue
    const slug = block.match(/^([^']+)'/)?.[1]
    if (!slug) continue
    const bodyAr = field(block, 'bodyAr')
    const bodyText = bodyAr.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    if (minBody > 0 && bodyText.length < minBody) continue
    out.push({
      slug,
      nameAr: field(block, 'nameAr') || slug,
      nameEn: field(block, 'nameEn') || slug,
      shortAr: field(block, 'shortAr'),
      shortEn: field(block, 'shortEn'),
      metaTitleAr: field(block, 'metaTitleAr'),
      metaDescriptionAr: field(block, 'metaDescriptionAr'),
      image: field(block, 'image') || DEFAULT_IMAGE.replace(SITE, ''),
      bodyLen: bodyText.length,
    })
  }
  return out
}

export function extractCities(src) {
  const out = []
  const parts = src.split(/\n\s*\{\s*\n/)
  for (const part of parts) {
    const slug = part.match(/^\s*slug:\s*'([^']+)'/)?.[1]
    const nameAr = field(part, 'nameAr')
    const nameEn = field(part, 'nameEn')
    const descriptionAr = field(part, 'descriptionAr')
    const descriptionEn = field(part, 'descriptionEn')
    const image = field(part, 'image')
    if (slug && nameAr && descriptionAr.length > 20) {
      out.push({ slug, nameAr, nameEn, descriptionAr, descriptionEn, image })
    }
  }
  return out
}

export function extractArticles(src) {
  if (/export const blogArticles:\s*BlogArticle\[\]\s*=\s*\[\s*\]/.test(src)) {
    return []
  }
  const arrayMatch = src.match(
    /export const blogArticles:\s*BlogArticle\[\]\s*=\s*\[([\s\S]*?)\]\s*\n/,
  )
  if (!arrayMatch) return []
  const body = arrayMatch[1]
  const chunks = body.split(/\n\s*\{\s*\n/)
  const out = []
  for (const chunk of chunks) {
    const slug = chunk.match(/slug:\s*'([^']+)'/)?.[1]
    if (!slug) continue
    out.push({
      slug,
      titleAr: field(chunk, 'titleAr') || slug,
      titleEn: field(chunk, 'titleEn') || slug,
      excerptAr: field(chunk, 'excerptAr'),
      excerptEn: field(chunk, 'excerptEn'),
      metaTitleAr: field(chunk, 'metaTitleAr'),
      metaDescriptionAr: field(chunk, 'metaDescriptionAr'),
      image: field(chunk, 'image'),
    })
  }
  return out
}

export function buildSeoCatalog({ services, cities, articles }) {
  /** @type {Record<string, object>} */
  const pages = {
    '/': {
      path: '/',
      title: 'ساعدني | منصة المعلومات عن المهن والخدمات المحلية في السعودية',
      description:
        'ساعدني مرجع معرفي للمهن والخدمات في المملكة العربية السعودية — أدلة عملية تساعدك تفهم طبيعة الشغل ونطاقه قبل التنفيذ.',
      image: DEFAULT_IMAGE,
      robots: 'index,follow',
      type: 'website',
    },
    '/services': {
      path: '/services',
      title: 'دليل المهن والخدمات | ساعدني',
      description: 'تصفح مهن وخدمات ساعدني في مدن المملكة العربية السعودية.',
      image: DEFAULT_IMAGE,
      robots: 'index,follow',
      type: 'website',
    },
    '/locations': {
      path: '/locations',
      title: 'اختر مدينتك | ساعدني',
      description:
        'استكشف معلومات المهن والخدمات المحلية في مدن المملكة العربية السعودية مع ساعدني.',
      image: DEFAULT_IMAGE,
      robots: 'index,follow',
      type: 'website',
    },
    '/about': {
      path: '/about',
      title: 'عن ساعدني | منصة المهن من Top1Markting',
      description:
        'ساعدني منصة سعودية لأدلة المهن والخدمات — فكرة وتصميم وإشراف Top1Markting. معلومة واضحة بدون أسماء شركات وهمية.',
      image: DEFAULT_IMAGE,
      robots: 'index,follow',
      type: 'website',
    },
    '/contact': {
      path: '/contact',
      title: 'تواصل ودعم | ساعدني',
      description:
        'تواصل مع ساعدني للدعم، اقتراح المحتوى، أو تصحيح معلومات الأدلة — عبر واتساب المعتمد.',
      image: DEFAULT_IMAGE,
      robots: 'index,follow',
      type: 'website',
    },
    '/blog': {
      path: '/blog',
      title: 'المقالات | ساعدني',
      description:
        'مقالات عملية عن البلاط والسباكة والمقاولات والنقل في المملكة العربية السعودية.',
      image: DEFAULT_IMAGE,
      robots: articles.length ? 'index,follow' : 'noindex,follow',
      type: 'website',
    },
    '/privacy': {
      path: '/privacy',
      title: 'سياسة الخصوصية | ساعدني',
      description:
        'كيف تتعامل منصة ساعدني مع البيانات في المرحلة الحالية: محتوى معرفي، تواصل عبر واتساب، وتخزين محلي محدود.',
      image: DEFAULT_IMAGE,
      robots: 'index,follow',
      type: 'website',
    },
    '/terms': {
      path: '/terms',
      title: 'شروط الاستخدام | ساعدني',
      description:
        'شروط استخدام منصة ساعدني كمرجع معرفي للمهن والخدمات في السعودية — دون تقديم خدمة تنفيذ أو وساطة حجوزات في المرحلة الحالية.',
      image: DEFAULT_IMAGE,
      robots: 'index,follow',
      type: 'website',
    },
  }

  for (const s of services) {
    const path = `/services/${s.slug}`
    pages[path] = {
      path,
      title: `${s.metaTitleAr || s.nameAr} | دليل العميل | ساعدني`,
      description: s.metaDescriptionAr || s.shortAr || s.nameAr,
      image: absoluteImage(s.image),
      robots: 'index,follow',
      type: 'website',
    }
  }

  for (const c of cities) {
    const path = `/locations/${c.slug}`
    pages[path] = {
      path,
      title: `خدمات في ${c.nameAr} | ساعدني`,
      description: c.descriptionAr || `خدمات ومهن في ${c.nameAr}`,
      image: absoluteImage(c.image),
      robots: 'index,follow',
      type: 'website',
    }
  }

  for (const a of articles) {
    const path = `/blog/${a.slug}`
    pages[path] = {
      path,
      title: `${a.metaTitleAr || a.titleAr} | ساعدني`,
      description: a.metaDescriptionAr || a.excerptAr || a.titleAr,
      image: absoluteImage(a.image),
      robots: 'index,follow',
      type: 'article',
    }
  }

  return pages
}

export function renderShareHtml(page) {
  const url = absoluteUrl(page.path)
  const image = absoluteImage(page.image)
  const robots = page.robots || 'index,follow'
  const type = page.type || 'website'
  const indexable = !robots.includes('noindex')
  const esc = (s) =>
    String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')

  return `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}" />
  <meta name="robots" content="${esc(robots)}" />
  ${indexable ? `<link rel="canonical" href="${esc(url)}" />` : ''}
  <meta property="og:site_name" content="ساعدني | Saedni" />
  <meta property="og:type" content="${esc(type)}" />
  <meta property="og:title" content="${esc(page.title)}" />
  <meta property="og:description" content="${esc(page.description)}" />
  <meta property="og:image" content="${esc(image)}" />
  ${indexable ? `<meta property="og:url" content="${esc(url)}" />` : ''}
  <meta property="og:locale" content="ar_SA" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(page.title)}" />
  <meta name="twitter:description" content="${esc(page.description)}" />
  <meta name="twitter:image" content="${esc(image)}" />
</head>
<body>
  <main>
    <h1>${esc(page.title)}</h1>
    <p>${esc(page.description)}</p>
    <p><a href="${esc(url)}">افتح الصفحة على ساعدني</a></p>
  </main>
</body>
</html>
`
}
