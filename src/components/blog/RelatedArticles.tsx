import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { ArticleCard } from './ArticleCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

type RelatedArticle = {
  slug: string
  serviceSlug: string
  citySlug?: string
  titleAr: string
  excerptAr: string
  readMinutes: number
  image: string
  id?: string
}

export function RelatedArticles({
  articles,
  serviceSlug,
  titleAr,
  titleEn,
}: {
  articles: RelatedArticle[]
  serviceSlug?: string
  titleAr?: string
  titleEn?: string
}) {
  const { t } = useLanguage()
  if (!articles.length) return null

  return (
    <section className="mt-14">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={t('مقالات المهنة', 'Trade articles')}
          title={t(
            titleAr || 'مقالات تساعد الصفحة تظهر وتفيد الزائر',
            titleEn || 'Articles that help the page rank and help visitors',
          )}
          description={t(
            'مقالات عن المهنة نفسها تفيد الزائر وتدعم ظهور الصفحة في البحث.',
            'Articles about the trade itself help visitors and support the page in search.',
          )}
        />
        <Link
          to={serviceSlug ? `/blog?service=${serviceSlug}` : '/blog'}
          className="text-sm font-medium text-brand hover:underline"
        >
          {t('كل مقالات المهنة', 'All trade articles')}
        </Link>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id || article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
