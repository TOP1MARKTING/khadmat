import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import type { BlogArticle } from '@/data/blog'
import { getService } from '@/data/services'
import { getCity } from '@/data/cities'

export function ArticleCard({ article }: { article: BlogArticle }) {
  const { t, lang, isAr } = useLanguage()
  const Arrow = isAr ? ArrowLeft : ArrowRight
  const service = getService(article.serviceSlug)
  const city = article.citySlug ? getCity(article.citySlug) : undefined

  return (
    <article className="card-work group">
      <Link to={`/blog/${article.slug}`} className="block overflow-hidden border-b-2 border-accent/40">
        <img
          src={article.image}
          alt={lang === 'ar' ? article.titleAr : article.titleEn}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>
      <div className="p-4 sm:p-5">
        <p className="text-[11px] font-bold tracking-wide text-accent">
          {service ? (lang === 'ar' ? service.nameAr : service.nameEn) : null}
          {city ? ` · ${lang === 'ar' ? city.nameAr : city.nameEn}` : ''}
          {' · '}
          {t(`${article.readMinutes} دقائق`, `${article.readMinutes} min`)}
        </p>
        <h3 className="mt-2 text-base font-extrabold leading-snug text-ink sm:text-lg">
          <Link to={`/blog/${article.slug}`} className="hover:text-brand">
            {lang === 'ar' ? article.titleAr : article.titleEn}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
          {lang === 'ar' ? article.excerptAr : article.excerptEn}
        </p>
        <Link
          to={`/blog/${article.slug}`}
          className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-bold text-brand sm:mt-4"
        >
          {t('اقرأ الدليل', 'Read guide')}
          <Arrow className="size-4" />
        </Link>
      </div>
    </article>
  )
}
