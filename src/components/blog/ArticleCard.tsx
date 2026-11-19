import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useCms } from '@/context/CmsContext'
import { getCity } from '@/data/cities'

type ArticleCardData = {
  slug: string
  serviceSlug: string
  citySlug?: string
  titleAr: string
  excerptAr: string
  readMinutes: number
  image: string
}

export function ArticleCard({ article }: { article: ArticleCardData }) {
  const { t } = useLanguage()
  const { getServiceBySlug } = useCms()
  const service = getServiceBySlug(article.serviceSlug)
  const city = article.citySlug ? getCity(article.citySlug) : undefined

  return (
    <article className="card-work group">
      <Link to={`/blog/${article.slug}`} className="block overflow-hidden border-b-2 border-accent/40">
        <img
          src={article.image || '/images/hero/hero-01-plumbing-desktop.jpg'}
          alt={article.titleAr}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>
      <div className="p-4 sm:p-5">
        <p className="text-[11px] font-bold tracking-wide text-accent">
          {service?.nameAr || null}
          {city ? ` · ${city.nameAr}` : ''}
          {' · '}
          {t(`${article.readMinutes} دقائق`, `${article.readMinutes} min`)}
        </p>
        <h3 className="mt-2 text-base font-extrabold leading-snug text-ink sm:text-lg">
          <Link to={`/blog/${article.slug}`} className="hover:text-brand">
            {article.titleAr}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{article.excerptAr}</p>
        <Link
          to={`/blog/${article.slug}`}
          className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-bold text-brand sm:mt-4"
        >
          {t('اقرأ المقال', 'Read article')}
          <ArrowLeft className="size-4" />
        </Link>
      </div>
    </article>
  )
}
