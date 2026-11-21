export type BlogArticle = {
  slug: string
  serviceSlug: string
  /** Optional: article focused on one city page */
  citySlug?: string
  titleAr: string
  titleEn: string
  excerptAr: string
  excerptEn: string
  contentAr: string[]
  contentEn: string[]
  publishedAt: string
  readMinutes: number
  image: string
  /** Optional later: partner / featured company on the article */
  companyName?: string
  companyLogo?: string
  companyAboutAr?: string
  companyAboutEn?: string
}

/** Seed articles — empty until new content is added from admin. */
export const blogArticles: BlogArticle[] = []

export function getArticle(slug: string) {
  return blogArticles.find((a) => a.slug === slug)
}

export function getArticlesByService(serviceSlug: string) {
  return blogArticles
    .filter((a) => a.serviceSlug === serviceSlug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getArticlesForLocation(serviceSlug: string, citySlug: string) {
  return blogArticles
    .filter(
      (a) =>
        a.serviceSlug === serviceSlug &&
        (!a.citySlug || a.citySlug === citySlug),
    )
    .sort((a, b) => {
      const cityBoost = (x: BlogArticle) => (x.citySlug === citySlug ? 1 : 0)
      const byCity = cityBoost(b) - cityBoost(a)
      if (byCity !== 0) return byCity
      return b.publishedAt.localeCompare(a.publishedAt)
    })
}

export function getRecentArticles(limit = 6) {
  return [...blogArticles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit)
}
