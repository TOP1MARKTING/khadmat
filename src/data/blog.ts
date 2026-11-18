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
}

/**
 * Demo editorial content per trade.
 * Strategy: publish useful articles on each trade page until visibility grows,
 * then attach one verified business when the page is rented.
 */
export const blogArticles: BlogArticle[] = [
  {
    slug: 'ceramic-tiling-mistakes-qassim',
    serviceSlug: 'ceramic-installation',
    titleAr: 'أخطاء شائعة في تركيب السيراميك وكيف تتجنبها',
    titleEn: 'Common ceramic installation mistakes and how to avoid them',
    excerptAr:
      'دليل عملي لصاحب المنزل في المملكة العربية السعودية: محاذاة، فواصل، تأسيس الأرضية، واختيار نوع البلاط المناسب.',
    excerptEn:
      'A practical guide for homeowners in Saudi Arabia: alignment, joints, substrate prep, and choosing the right tile.',
    contentAr: [
      'تركيب السيراميك مش مجرد لصق بلاطة فوق بلاطة. أغلب المشاكل اللي بتظهر بعد شهور — تقشر، فراغات صوت، أو تفاوت منسوب — بتكون بسبب تأسيس ضعيف أو استعجال في المحاذاة.',
      'قبل التركيب، تأكد إن السطح مستوٍ ونظيف، وإن الميل في الحمامات والمطابخ صحيح باتجاه الصرف. اختيار لاصق مناسب لنوع البلاط (خصوصًا البورسلان كبير المقاس) فرق كبير في الثبات.',
      'الفواصل المنتظمة والتوسعات عند الحواف مهمة في مناخ المملكة العربية السعودية، لأن التمدد الحراري وارد. وبعد التركيب، نظافة بقايا اللاصق قبل الجفاف بتوفّر شكل نهائي أنظف بكثير.',
      'لو بتدور على خدمة تركيب سيراميك في مدينتك داخل المملكة العربية السعودية، راجع صفحة المدينة المناسبة واقرأ تفاصيل النطاق قبل طلب التواصل.',
    ],
    contentEn: [
      'Ceramic installation is more than sticking tiles down. Most issues that appear months later — hollow sounds, peeling, uneven levels — come from weak prep or rushed alignment.',
      'Before installation, confirm the surface is clean and level, and that wet areas slope correctly toward drains. The right adhesive for the tile type (especially large porcelain) matters for stability.',
      'Consistent joints and edge expansion gaps matter in Saudi Arabia’s climate because thermal movement is real. Cleaning adhesive residue before it hardens also improves the final look.',
      'If you are looking for ceramic installation in your Saudi city, open the matching city page and review coverage before sending an inquiry.',
    ],
    publishedAt: '2026-10-12',
    readMinutes: 5,
    image:
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'ceramic-buraydah-homeowner-checklist',
    serviceSlug: 'ceramic-installation',
    citySlug: 'buraydah',
    titleAr: 'قائمة تجهيز قبل تركيب بلاط في بريدة',
    titleEn: 'Homeowner checklist before tiling in Buraydah',
    excerptAr:
      'خطوات قصيرة تجهّز بها شقتك أو فيلتك في بريدة قبل ما يبدأ تركيب السيراميك أو البورسلان.',
    excerptEn:
      'A short checklist to prepare your Buraydah apartment or villa before ceramic or porcelain installation starts.',
    contentAr: [
      'في بريدة، طلبات التشطيب كثيرة بين الشقق الجديدة والتجديد. تجهيز المكان قبل الفريق بيوفر وقت ويقلل التعديلات.',
      'حدد الغرف المطلوبة، نوع البلاط، واتجاه التركيب. صوّر المكان وأبعد الأثاث الحساس. لو في سباكة أو كهرباء لسه مفتوحة في الأرض، خلّصها قبل البلاط.',
      'اسأل عن مدة الجفاف المتوقعة قبل استخدام الغرفة، خصوصًا المطابخ والحمامات. الاتفاق الواضح على النطاق من الأول بيمنع سوء الفهم.',
    ],
    contentEn: [
      'In Buraydah, finishing demand is high across new apartments and renovations. Preparing the space before the crew arrives saves time and rework.',
      'Confirm rooms, tile type, and layout direction. Photograph the space and clear sensitive furniture. Finish open flooring plumbing or electrical work before tiling.',
      'Ask about curing time before using the room, especially kitchens and bathrooms. Clear scope agreement upfront prevents misunderstandings.',
    ],
    publishedAt: '2026-11-02',
    readMinutes: 4,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'general-contracting-scope-clarity',
    serviceSlug: 'general-contracting',
    titleAr: 'ازاي تحدد نطاق عمل المقاولات بوضوح قبل ما تبدأ',
    titleEn: 'How to define contracting scope clearly before work starts',
    excerptAr:
      'وضوح البنود، المراحل، والخامات بيحمي صاحب العقار والمقاول من النزاعات أثناء التنفيذ في المملكة العربية السعودية.',
    excerptEn:
      'Clear items, stages, and materials protect property owners and contractors from disputes during execution in Saudi Arabia.',
    contentAr: [
      'أكبر سبب للخلاف في المقاولات مش الشغل نفسه، لكنه غموض النطاق: إيه داخل الاتفاق وإيه خارج عنه.',
      'اكتب المراحل: تأسيس، مباني، تشطيب، وتسليم. حدد الخامات البديلة إن اتعذّر توفر صنف معيّن. واتفق على آلية اعتماد التغييرات قبل التنفيذ.',
      'الصور قبل/بعد لكل مرحلة، وجدول زمني واقعي، بيخلّوا المتابعة أسهل. الصفحة المحلية للمقاولات في مدينتك مفيدة كنقطة بداية للبحث والتواصل لاحقًا عند توفر شريك موثّق.',
    ],
    contentEn: [
      'Most contracting disputes are not about craft — they are about unclear scope: what is included and what is not.',
      'Write stages: structure, building works, finishing, and handover. Define alternate materials if an item is unavailable. Agree how change orders are approved before execution.',
      'Stage photos and a realistic timeline make follow-up easier. Your city contracting page is a useful starting point for research and later contact when a verified partner is available.',
    ],
    publishedAt: '2026-09-28',
    readMinutes: 6,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'plumbing-leak-signs-home',
    serviceSlug: 'plumbing',
    titleAr: 'علامات مبكرة لتسريب المياه داخل المنزل',
    titleEn: 'Early signs of water leaks inside the home',
    excerptAr:
      'ارتفاع فاتورة المياه، رطوبة في الجدران، أو صوت سريان مستمر — مؤشرات تستاهل فحص سباكة سريع.',
    excerptEn:
      'A rising water bill, wall dampness, or a constant flow sound — signs that deserve a quick plumbing check.',
    contentAr: [
      'التسريب البسيط لو اتساب ممكن يحوّل لمشكلة عزل وتشطيب مكلفة. راقب العداد والفاتورة، وافحص تحت الأحواض خلف الخزائن.',
      'بقع الرطوبة أو تقشر الدهان قرب الحمامات والمطابخ علامة كلاسيكية. لو الشك في شبكة مخفية، كشف التسرب قبل التكسير العشوائي أوفر غالبًا.',
      'مقالات السباكة على المنصة هدفها تثقيف صاحب المنزل في المملكة العربية السعودية. بيانات شركة معيّنة بتظهر على الصفحة فقط بعد اتفاق تأجير حصري موثّق.',
    ],
    contentEn: [
      'A small leak left alone can become an expensive insulation and finishing problem. Watch the meter and bill, and check under sinks behind cabinets.',
      'Damp patches or peeling paint near bathrooms and kitchens are classic signs. If a hidden line is suspected, leak detection before random demolition is usually cheaper.',
      'Plumbing articles on this platform aim to educate homeowners in Saudi Arabia. A specific company appears on a page only after a verified exclusive rental agreement.',
    ],
    publishedAt: '2026-10-20',
    readMinutes: 4,
    image:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'furniture-moving-packing-tips',
    serviceSlug: 'furniture-moving',
    titleAr: 'نصائح تغليف الأثاث قبل النقل داخل المملكة العربية السعودية',
    titleEn: 'Furniture packing tips before moving within Saudi Arabia',
    excerptAr:
      'تغليف مرتب بيقلل الخدوش أثناء النقل بين أحياء بريدة أو من مدينة لمدينة داخل المنطقة.',
    excerptEn:
      'Organized packing reduces scratches during moves between Buraydah districts or across the region.',
    contentAr: [
      'ابدأ بفصل المقتنيات الهشة: زجاج، شاشات، تحف. استخدم فقاعات هوائية وكراتين متينة، ورقم كل كرتونة حسب الغرفة.',
      'فكّ الغرف الكبيرة (سراير وخزائن) بحذر واحفظ المسامير في أكياس معلّمة. الأبواب والممرات قيسها قبل يوم النقل.',
      'لو النقل بين مدن المملكة العربية السعودية، خطط وقت الذروة وتأمين المصعد إن وجد. صفحة نقل العفش في مدينتك بتتجمع حولها مقالات ونصائح إلى أن يُربط بها مزوّد حصري لاحقًا.',
    ],
    contentEn: [
      'Start by separating fragile items: glass, screens, decor. Use bubble wrap and sturdy boxes, and label each box by room.',
      'Disassemble large bedrooms and cabinets carefully and bag screws with labels. Measure doors and corridors the day before the move.',
      'For intercity moves in Saudi Arabia, plan peak hours and elevator booking if needed. Your city moving page gathers tips until an exclusive provider is linked later.',
    ],
    publishedAt: '2026-11-05',
    readMinutes: 5,
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'ac-maintenance-before-summer',
    serviceSlug: 'air-conditioning',
    titleAr: 'صيانة المكيف قبل موسم الحر: ماذا تفحص؟',
    titleEn: 'AC maintenance before peak heat: what to check',
    excerptAr:
      'تنظيف الفلاتر، فحص التبريد، والتأكد من تصريف الماء خطوات بسيطة بتفرق في أداء السبليت خلال الصيف.',
    excerptEn:
      'Filter cleaning, cooling checks, and drain inspection are simple steps that improve split AC performance in summer.',
    contentAr: [
      'قبل ذروة الحر في المملكة العربية السعودية، صيانة وقائية أوفر من عطل مفاجئ. نظّف أو غيّر الفلاتر، وتأكد إن الوحدة الخارجية مش محاصرة أتربة.',
      'ضعف التبريد ممكن يكون فريون أو انسداد أو مشكلة كهرباء. الفحص المبكر بيحدد السبب قبل ما الغرفة تبقى غير قابلة للاستخدام.',
      'محتوى التكييف هنا تثقيفي ومحلي. لما صفحة مدينة معيّنة تبقى جاهزة تجاريًا، ممكن تُؤجَّر حصريًا لشركة صيانة واحدة في نفس النطاق.',
    ],
    contentEn: [
      'Before peak heat in Saudi Arabia, preventive maintenance is cheaper than sudden failure. Clean or replace filters and keep outdoor units free of dust blockage.',
      'Weak cooling can be gas, blockage, or electrical. Early inspection finds the cause before the room becomes unusable.',
      'AC content here is educational and local. When a city page is commercially ready, it can be rented exclusively to one maintenance company in that scope.',
    ],
    publishedAt: '2026-08-18',
    readMinutes: 4,
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'home-cleaning-deep-vs-regular',
    serviceSlug: 'home-cleaning',
    titleAr: 'الفرق بين التنظيف الدوري والتنظيف العميق',
    titleEn: 'Difference between regular cleaning and deep cleaning',
    excerptAr:
      'التنظيف الدوري للمحافظة اليومية، والعميق للمطابخ والحمامات والأركان بعد فترة طويلة أو بعد تشطيب.',
    excerptEn:
      'Regular cleaning keeps day-to-day order; deep cleaning targets kitchens, bathrooms, and corners after long periods or finishing work.',
    contentAr: [
      'التنظيف الدوري يركز على الأسطح الظاهرة والترتيب. العميق يدخل في الزوايا، خلف الأجهزة، والمفاصل اللي بتتراكم فيها الأتربة.',
      'بعد التشطيب أو قبل السكن، التنظيف العميق غالبًا أنسب. حدّد هل المواد من طرفك ولا مع فريق التنظيف.',
      'زي باقي المهن على المنصة: المقالات تبني فهم وثقة، وبيانات الشركة تظهر لاحقًا فقط مع تأجير حصري للصفحة.',
    ],
    contentEn: [
      'Regular cleaning focuses on visible surfaces and order. Deep cleaning reaches corners, behind appliances, and joints where dust builds up.',
      'After finishing work or before move-in, deep cleaning is usually better. Confirm whether supplies are yours or provided by the team.',
      'Like other trades on the platform: articles build understanding and trust; company details appear later only with exclusive page rental.',
    ],
    publishedAt: '2026-09-10',
    readMinutes: 3,
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'painting-prepare-walls-qassim',
    serviceSlug: 'painting',
    titleAr: 'تجهيز الجدران قبل الدهان في منازل المملكة العربية السعودية',
    titleEn: 'Preparing walls before painting in Saudi homes',
    excerptAr:
      'معجون، صنفرة، ومعالجة التشققات خطوات أساسية عشان الدهان يثبت ويطلع منتظم.',
    excerptEn:
      'Putty, sanding, and crack treatment are essential so paint adheres and finishes evenly.',
    contentAr: [
      'دهان مرتب يبدأ بتأسيس نظيف: إزالة القشور، سد الشقوق، وتسوية الأسطح. الاستعجال هنا بيظهر فورًا في الإضاءة الجانبية.',
      'اختار نوع الدهان حسب الغرفة — رطوبة المطابخ غير غرف النوم. جرّب لون صغير قبل المساحة الكاملة.',
      'مقالات الدهانات مرتبطة بصفحات المدن عشان الباحث يلاقي معلومة مفيدة أولًا، ثم تواصل عند توفر شريك على الصفحة.',
    ],
    contentEn: [
      'A clean finish starts with prep: remove flakes, fill cracks, and level surfaces. Rushing here shows immediately in side lighting.',
      'Choose paint type by room — kitchen humidity differs from bedrooms. Test a small color patch before full walls.',
      'Painting articles link to city pages so searchers find useful information first, then contact options when a partner is on the page.',
    ],
    publishedAt: '2026-10-01',
    readMinutes: 4,
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=80',
  },
]

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
