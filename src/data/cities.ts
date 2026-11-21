export type City = {
  slug: string
  nameAr: string
  nameEn: string
  regionSlug: string
  regionAr: string
  regionEn: string
  descriptionAr: string
  descriptionEn: string
  image: string
  featured?: boolean
}

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const cities: City[] = [
  // الرياض
  {
    slug: 'riyadh',
    nameAr: 'الرياض',
    nameEn: 'Riyadh',
    regionSlug: 'riyadh',
    regionAr: 'الرياض',
    regionEn: 'Riyadh',
    descriptionAr:
      'عاصمة المملكة العربية السعودية ومركزها الأكبر. صفحات خدمات الرياض تغطي التشطيب، الصيانة، النظافة والنقل داخل الأحياء والشمال والشرق والغرب.',
    descriptionEn:
      'Capital of Saudi Arabia. Riyadh service pages cover finishing, maintenance, cleaning, and moving across the city’s districts.',
    image: '/images/cities/riyadh.jpg',
    featured: true,
  },
  {
    slug: 'al-kharj',
    nameAr: 'الخرج',
    nameEn: 'Al Kharj',
    regionSlug: 'riyadh',
    regionAr: 'الرياض',
    regionEn: 'Riyadh',
    descriptionAr: 'تغطية محلية لخدمات المنازل والمنشآت في الخرج والمناطق القريبة جنوب الرياض.',
    descriptionEn: 'Local coverage for home and facility services in Al Kharj and nearby areas south of Riyadh.',
    image: img('photo-1600585154340-be6161a56a0c'),
  },

  // مكة المكرمة
  {
    slug: 'jeddah',
    nameAr: 'جدة',
    nameEn: 'Jeddah',
    regionSlug: 'makkah',
    regionAr: 'مكة المكرمة',
    regionEn: 'Makkah',
    descriptionAr:
      'بوابة البحر الأحمر ومدينة تجارية وسكنيّة كبيرة. صفحات جدة تستهدف السباكة، التكييف، التشطيب، النظافة ونقل العفش.',
    descriptionEn:
      'Red Sea gateway and a major commercial-residential city. Jeddah pages cover plumbing, AC, finishing, cleaning, and moving.',
    image: '/images/cities/jeddah.jpg',
    featured: true,
  },
  {
    slug: 'makkah',
    nameAr: 'مكة المكرمة',
    nameEn: 'Makkah',
    regionSlug: 'makkah',
    regionAr: 'مكة المكرمة',
    regionEn: 'Makkah',
    descriptionAr: 'صفحات محلية لخدمات المنازل والمنشآت في مكة المكرمة والأحياء المحيطة.',
    descriptionEn: 'Local pages for home and facility services in Makkah and surrounding districts.',
    image: '/images/cities/makkah.jpg',
    featured: true,
  },
  {
    slug: 'taif',
    nameAr: 'الطائف',
    nameEn: 'Taif',
    regionSlug: 'makkah',
    regionAr: 'مكة المكرمة',
    regionEn: 'Makkah',
    descriptionAr: 'تغطية لخدمات التشطيب والصيانة والنظافة في الطائف والمنتجعات والأحياء السكنية.',
    descriptionEn: 'Coverage for finishing, maintenance, and cleaning services in Taif and residential areas.',
    image: img('photo-1416879595882-3373a0480b5b'),
  },

  // المدينة المنورة
  {
    slug: 'madinah',
    nameAr: 'المدينة المنورة',
    nameEn: 'Madinah',
    regionSlug: 'madinah',
    regionAr: 'المدينة المنورة',
    regionEn: 'Madinah',
    descriptionAr: 'صفحات خدمات منزلية ومنشآت في المدينة المنورة: صيانة، تشطيب، نظافة ونقل.',
    descriptionEn: 'Home and facility service pages in Madinah: maintenance, finishing, cleaning, and moving.',
    image: '/images/cities/madinah.jpg',
    featured: true,
  },

  // الشرقية
  {
    slug: 'dammam',
    nameAr: 'الدمام',
    nameEn: 'Dammam',
    regionSlug: 'eastern',
    regionAr: 'الشرقية',
    regionEn: 'Eastern Province',
    descriptionAr:
      'مركز الشرقية التجاري. صفحات الدمام تغطي المقاولات، الصيانة، التكييف، النظافة ونقل العفش.',
    descriptionEn:
      'Commercial hub of the Eastern Province. Dammam pages cover contracting, maintenance, AC, cleaning, and moving.',
    image: '/images/cities/dammam.jpg',
    featured: true,
  },
  {
    slug: 'khobar',
    nameAr: 'الخبر',
    nameEn: 'Khobar',
    regionSlug: 'eastern',
    regionAr: 'الشرقية',
    regionEn: 'Eastern Province',
    descriptionAr: 'تغطية محلية لخدمات المنازل والمكاتب في الخبر والأحياء الساحلية.',
    descriptionEn: 'Local coverage for home and office services in Khobar and coastal districts.',
    image: img('photo-1600585154526-990dced4db0d'),
  },
  {
    slug: 'dhahran',
    nameAr: 'الظهران',
    nameEn: 'Dhahran',
    regionSlug: 'eastern',
    regionAr: 'الشرقية',
    regionEn: 'Eastern Province',
    descriptionAr: 'صفحات خدمات للصيانة والتشطيب والنظافة في الظهران والمناطق المجاورة.',
    descriptionEn: 'Service pages for maintenance, finishing, and cleaning in Dhahran and nearby areas.',
    image: img('photo-1600566753086-00f18fb6b3ea'),
  },
  {
    slug: 'jubail',
    nameAr: 'الجبيل',
    nameEn: 'Jubail',
    regionSlug: 'eastern',
    regionAr: 'الشرقية',
    regionEn: 'Eastern Province',
    descriptionAr: 'تغطية لخدمات المنازل والمنشآت في الجبيل السكنية والصناعية حسب النطاق المحلي.',
    descriptionEn: 'Coverage for home and facility services in residential and industrial Jubail within local scope.',
    image: img('photo-1541888946425-d81bb19240f5'),
  },
  {
    slug: 'ahsa',
    nameAr: 'الأحساء',
    nameEn: 'Al Ahsa',
    regionSlug: 'eastern',
    regionAr: 'الشرقية',
    regionEn: 'Eastern Province',
    descriptionAr: 'صفحات مهن محلية في الأحساء: سباكة، كهرباء، تشطيب، نظافة ونقل عفش.',
    descriptionEn: 'Local trade pages in Al Ahsa: plumbing, electrical, finishing, cleaning, and moving.',
    image: img('photo-1504307651254-35680f356dfd'),
  },

  // عسير
  {
    slug: 'abha',
    nameAr: 'أبها',
    nameEn: 'Abha',
    regionSlug: 'asir',
    regionAr: 'عسير',
    regionEn: 'Asir',
    descriptionAr: 'تغطية لخدمات التشطيب والصيانة والحدائق في أبها والأحياء الجبلية المحيطة.',
    descriptionEn: 'Coverage for finishing, maintenance, and landscaping in Abha and nearby highland districts.',
    image: '/images/cities/abha.jpg',
    featured: true,
  },
  {
    slug: 'khamis-mushait',
    nameAr: 'خميس مشيط',
    nameEn: 'Khamis Mushait',
    regionSlug: 'asir',
    regionAr: 'عسير',
    regionEn: 'Asir',
    descriptionAr: 'صفحات خدمات منزلية ومنشآت في خميس مشيط بنطاق محلي واضح.',
    descriptionEn: 'Home and facility service pages in Khamis Mushait with clear local scope.',
    image: img('photo-1600607687644-c7171b42498b'),
  },

  // القصيم
  {
    slug: 'buraydah',
    nameAr: 'بريدة',
    nameEn: 'Buraydah',
    regionSlug: 'al-qassim',
    regionAr: 'القصيم',
    regionEn: 'Al Qassim',
    descriptionAr:
      'عاصمة منطقة القصيم. صفحات خدمات بريدة تغطي التشطيب، الصيانة، النظافة والنقل داخل المدينة وأحيائها.',
    descriptionEn:
      'Capital of Al Qassim. Buraydah service pages cover finishing, maintenance, cleaning, and moving across the city.',
    image: '/images/cities/buraydah.jpg',
    featured: true,
  },
  {
    slug: 'unaizah',
    nameAr: 'عنيزة',
    nameEn: 'Unaizah',
    regionSlug: 'al-qassim',
    regionAr: 'القصيم',
    regionEn: 'Al Qassim',
    descriptionAr: 'مدينة تجارية وسكنيّة نشطة في القصيم مع صفحات محلية للخدمات المنزلية والمنشآت.',
    descriptionEn: 'A lively commercial and residential city in Al Qassim with local home and facility service pages.',
    image: img('photo-1600585154340-be6161a56a0c'),
  },
  {
    slug: 'ar-rass',
    nameAr: 'الرس',
    nameEn: 'Ar Rass',
    regionSlug: 'al-qassim',
    regionAr: 'القصيم',
    regionEn: 'Al Qassim',
    descriptionAr: 'صفحات محلية في الرس للتشطيب، السباكة، التكييف وخدمات النقل.',
    descriptionEn: 'Local pages in Ar Rass for finishing, plumbing, AC, and moving services.',
    image: img('photo-1448630360428-65456885c650'),
  },
  {
    slug: 'al-bukayriyah',
    nameAr: 'البكيرية',
    nameEn: 'Al Bukayriyah',
    regionSlug: 'al-qassim',
    regionAr: 'القصيم',
    regionEn: 'Al Qassim',
    descriptionAr: 'تغطية لخدمات الصيانة والتشطيب المنزلي في البكيرية.',
    descriptionEn: 'Coverage for home maintenance and finishing services in Al Bukayriyah.',
    image: img('photo-1600566753190-17f0baa2a6c3'),
  },

  // حائل وتبوك وجازان ونجران والباحة والجوف والحدود الشمالية
  {
    slug: 'hail',
    nameAr: 'حائل',
    nameEn: 'Hail',
    regionSlug: 'hail',
    regionAr: 'حائل',
    regionEn: 'Hail',
    descriptionAr: 'صفحات خدمات منزلية ومقاولات في حائل بنطاق محلي مرتب.',
    descriptionEn: 'Home and contracting service pages in Hail with clear local scope.',
    image: img('photo-1503387762-592deb58ef4e'),
  },
  {
    slug: 'tabuk',
    nameAr: 'تبوك',
    nameEn: 'Tabuk',
    regionSlug: 'tabuk',
    regionAr: 'تبوك',
    regionEn: 'Tabuk',
    descriptionAr: 'تغطية لخدمات التشطيب والصيانة والنظافة والنقل في تبوك.',
    descriptionEn: 'Coverage for finishing, maintenance, cleaning, and moving in Tabuk.',
    image: img('photo-1600518464441-9154a4dea21b'),
  },
  {
    slug: 'jazan',
    nameAr: 'جازان',
    nameEn: 'Jazan',
    regionSlug: 'jazan',
    regionAr: 'جازان',
    regionEn: 'Jazan',
    descriptionAr: 'صفحات مهن محلية في جازان: سباكة، كهرباء، تشطيب، نظافة ونقل.',
    descriptionEn: 'Local trade pages in Jazan: plumbing, electrical, finishing, cleaning, and moving.',
    image: img('photo-1581578731548-c64695cc6952'),
  },
  {
    slug: 'najran',
    nameAr: 'نجران',
    nameEn: 'Najran',
    regionSlug: 'najran',
    regionAr: 'نجران',
    regionEn: 'Najran',
    descriptionAr: 'تغطية محلية لخدمات المنازل والمنشآت في نجران.',
    descriptionEn: 'Local coverage for home and facility services in Najran.',
    image: img('photo-1562259949-e8e7689d7828'),
  },
  {
    slug: 'al-baha',
    nameAr: 'الباحة',
    nameEn: 'Al Baha',
    regionSlug: 'al-baha',
    regionAr: 'الباحة',
    regionEn: 'Al Baha',
    descriptionAr: 'صفحات خدمات التشطيب والصيانة والحدائق في الباحة.',
    descriptionEn: 'Finishing, maintenance, and landscaping service pages in Al Baha.',
    image: img('photo-1416879595882-3373a0480b5b'),
  },
  {
    slug: 'sakaka',
    nameAr: 'سكاكا',
    nameEn: 'Sakaka',
    regionSlug: 'al-jouf',
    regionAr: 'الجوف',
    regionEn: 'Al Jouf',
    descriptionAr: 'تغطية لخدمات المنازل والصيانة في سكاكا والجوف.',
    descriptionEn: 'Coverage for home and maintenance services in Sakaka and Al Jouf.',
    image: img('photo-1621905251189-08b45d6a269e'),
  },
  {
    slug: 'arar',
    nameAr: 'عرعر',
    nameEn: 'Arar',
    regionSlug: 'northern-borders',
    regionAr: 'الحدود الشمالية',
    regionEn: 'Northern Borders',
    descriptionAr: 'صفحات مهن محلية في عرعر والحدود الشمالية.',
    descriptionEn: 'Local trade pages in Arar and the Northern Borders region.',
    image: img('photo-1621905252507-b35492cc74b4'),
  },
]

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug)
}

export function getFeaturedCities() {
  return cities.filter((c) => c.featured)
}

export function getCitiesByRegion(regionSlug: string) {
  return cities.filter((c) => c.regionSlug === regionSlug)
}

export function getRegions() {
  const map = new Map<string, { slug: string; nameAr: string; nameEn: string }>()
  for (const city of cities) {
    if (!map.has(city.regionSlug)) {
      map.set(city.regionSlug, {
        slug: city.regionSlug,
        nameAr: city.regionAr,
        nameEn: city.regionEn,
      })
    }
  }
  return [...map.values()]
}
