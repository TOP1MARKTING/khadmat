import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { cities } from '@/data/cities'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function LocationsPage() {
  const { t, lang } = useLanguage()

  usePageMeta({
    titleAr: 'اختر مدينتك | ساعدني',
    titleEn: 'Choose your city | Saedni',
    descriptionAr:
      'استكشف معلومات المهن والخدمات المحلية في مدن المملكة العربية السعودية مع ساعدني.',
    descriptionEn:
      'Explore local trades and services information across Saudi Arabia cities with Saedni.',
    canonicalPath: '/locations',
  })

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          as="h1"
          eyebrow={t('التغطية المحلية', 'Local coverage')}
          title={t('اختر مدينتك', 'Choose your city')}
          description={t(
            'اكتشف المعلومات المتعلقة بالخدمات والمهن في مدن المملكة العربية السعودية.',
            'Discover service and trade information across Saudi Arabia cities.',
          )}
        />

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/locations/${city.slug}`}
              className="group relative overflow-hidden rounded-xl border-2 border-line"
            >
              <img
                src={city.image}
                alt={lang === 'ar' ? city.nameAr : city.nameEn}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 border-t-2 border-accent p-2.5 text-white sm:p-3.5">
                <div className="mb-0.5 inline-flex items-center gap-1 text-[10px] text-white/70 sm:text-xs">
                  <MapPin className="size-3" />
                  <span className="truncate">{lang === 'ar' ? city.regionAr : city.regionEn}</span>
                </div>
                <h2 className="text-base font-extrabold sm:text-lg">
                  {lang === 'ar' ? city.nameAr : city.nameEn}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
