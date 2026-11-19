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
  {
    slug: 'marble-vs-porcelain-home-choice',
    serviceSlug: 'marble-porcelain',
    titleAr: 'الفرق بين الرخام الطبيعي والبورسلان وأيهما يناسب منزلك؟',
    titleEn: 'Marble vs porcelain: which suits your home?',
    excerptAr:
      'مقارنة عملية بين الحجر الطبيعي والبورسلان من حيث الشكل والاستخدام والصيانة والميزانيات — عشان تختار بوضوح قبل التركيب.',
    excerptEn:
      'A practical comparison of natural marble and porcelain on look, use, care, and budget before you install.',
    contentAr: [
      'الرخام حجر طبيعي؛ كل لوح له عروق واختلافات ما تتكرر بنفس الشكل. البورسلان مادة مصنّعة تتوفر بتصميمات ثابتة وتحاكي الرخام أو الخشب أو الحجر.',
      'لو عايز مظهر طبيعي فريد ومستعد لصيانة أدق، الرخام خيار قوي للمجالس والمداخل. لو عايز ثبات في الشكل ومقاومة عملية للاستخدام اليومي، البورسلان غالبًا أسهل في كثير من الغرف.',
      'في الحمامات والمطابخ راعِ الانزلاق والرطوبة. وفي المساحات عالية الحركة ركّز على المتانة وسهولة التنظيف أكثر من اللمعان فقط.',
      'الاختيار الصح يبدأ من مكان الاستخدام والميزانية والعناية — مش من الصورة في المعرض وحدها. راجع دليل الرخام والبورسلان على ساعدني قبل الاتفاق.',
    ],
    contentEn: [
      'Marble is natural stone with unique veining. Porcelain is manufactured with consistent designs that can mimic marble, wood, or stone.',
      'If you want a unique natural look and can handle careful care, marble suits majlis and entrances. For everyday practicality and consistent looks, porcelain is often easier.',
      'In bathrooms and kitchens, consider slip and moisture. In high-traffic areas, prioritize durability and cleaning over shine alone.',
      'The right choice starts with room use, budget, and care — not gallery photos alone. Review Saedni’s marble and porcelain guide before you agree.',
    ],
    publishedAt: '2026-11-10',
    readMinutes: 6,
    image: '/images/hero/hero-12-marble-desktop.jpg',
  },
  {
    slug: 'choose-porcelain-for-home-floors',
    serviceSlug: 'marble-porcelain',
    titleAr: 'كيف تختار بورسلان مناسب لأرضيات المنزل؟',
    titleEn: 'How to choose porcelain for home floors',
    excerptAr:
      'خطوات واضحة لاختيار المقاس والتشطيب ومقاومة الانزلاق حسب الغرفة — قبل ما تشتري الكمية الكاملة.',
    excerptEn:
      'Clear steps to choose size, finish, and slip resistance by room — before you buy the full quantity.',
    contentAr: [
      'ابدأ بالغرفة: غرفة نوم غير ممر أو حمام. الحركة والمياه والإضاءة بتغيّر اختيار التشطيب اللامع أو المطفي.',
      'المقاس الكبير يعطي مظهرًا واسعًا لكنه يحتاج سطح مستوٍ وتركيب أدق. المقاس الأصغر أسهل في بعض التفاصيل والميول.',
      'في الأماكن الرطبة لا تعتمد على الشكل اللامع فقط؛ اسأل عن مقاومة الانزلاق وملاءمة الاستخدام.',
      'احسب الكمية مع هالك القص، وجرب توزيع بلاطات قبل اللصق. الاتفاق الواضح على اللاصق والفواصل بيحمي النتيجة النهائية.',
    ],
    contentEn: [
      'Start with the room: a bedroom differs from a corridor or bathroom. Traffic, water, and light change whether glossy or matte finishes fit.',
      'Large formats look spacious but need a flat substrate and careful install. Smaller formats can be easier around details and slopes.',
      'In wet areas, do not rely on glossy looks alone — ask about slip resistance and suitability.',
      'Calculate quantity with cut waste, and dry-lay before fixing. Clear agreement on adhesive and joints protects the final result.',
    ],
    publishedAt: '2026-11-12',
    readMinutes: 5,
    image: '/images/hero/hero-03-tiling-desktop.jpg',
  },
  {
    slug: 'porcelain-installation-mistakes',
    serviceSlug: 'marble-porcelain',
    titleAr: 'أهم الأخطاء التي يجب تجنبها عند تركيب البورسلان',
    titleEn: 'Common porcelain installation mistakes to avoid',
    excerptAr:
      'من استواء الأرضية لحد اللاصق والفواصل والتحميل المبكر: أخطاء شائعة تسبب تطبيل أو تفاوت بعد التسليم.',
    excerptEn:
      'From substrate leveling to adhesive, joints, and early loading: common mistakes that cause hollow tiles or uneven floors.',
    contentAr: [
      'إهمال استواء السطح قبل التركيب من أكبر أسباب اختلاف المناسيب والأصوات الجوفاء لاحقًا.',
      'اختيار لاصق غير مناسب لمقاس البلاط — خصوصًا الكبير — يضعف التغطية والثبات.',
      'تركيب بدون توزيع مسبق يزيد الهالك ويخلي اتجاه العروق أو النقوش غير مرتب.',
      'تحميل الأرضية أو غسلها بمواد قاسية قبل اكتمال التصلب يفسد شغل كان ممكن يكون ممتاز. راجع قائمة الأخطاء في دليل الرخام والبورسلان قبل ما تبدأ.',
    ],
    contentEn: [
      'Skipping substrate leveling is a top cause of uneven levels and hollow sounds later.',
      'The wrong adhesive for tile size — especially large formats — weakens coverage and fixing.',
      'Installing without a dry layout increases waste and can misalign patterns.',
      'Loading or harsh cleaning before curing can ruin otherwise good work. Review the mistakes list in the marble and porcelain guide before you start.',
    ],
    publishedAt: '2026-11-14',
    readMinutes: 5,
    image: '/images/hero/hero-03-tiling.jpg',
  },
  {
    slug: 'questions-before-marble-installer',
    serviceSlug: 'marble-porcelain',
    titleAr: 'أهم الأسئلة قبل الاتفاق مع فني تركيب الرخام والبورسلان',
    titleEn: 'Key questions before hiring a marble or porcelain installer',
    excerptAr:
      'قائمة أسئلة عملية عن السعر والهالك واللاصق والتسوية والضمان — عشان الاتفاق يكون واضح قبل التنفيذ.',
    excerptEn:
      'A practical checklist on price, waste, adhesive, leveling, and warranty — so the agreement is clear before work.',
    contentAr: [
      'اسأل هل السعر يشمل التوريد والتركيب أم التركيب فقط، وهل الهالك والقص محسوب ضمن الكمية.',
      'وضّح نوع مادة التثبيت، وهل تسوية الأرضية ضمن الشغل، وهل الوزرات والزوايا مشمولة.',
      'اطلب شرح اتجاه التوزيع، واختبار الميول في الحمامات، وآلية التعامل مع القطع المعيبة.',
      'الاتفاق المكتوب على المدة والضمان ونطاق العمل بيحمي الطرفين. لو محتاج تفاصيل أوسع، افتح دليل المهنة على ساعدني.',
    ],
    contentEn: [
      'Ask whether price includes supply and install or install only, and whether cut waste is included in quantity.',
      'Clarify adhesive type, whether leveling is included, and whether skirting and corners are covered.',
      'Ask about layout direction, bathroom slope testing, and how defective pieces are handled.',
      'A written scope on duration, warranty, and work items protects both sides. For a fuller guide, open the trade page on Saedni.',
    ],
    publishedAt: '2026-11-15',
    readMinutes: 4,
    image: '/images/hero/hero-12-marble.jpg',
  },
  {
    slug: 'marble-porcelain-riyadh-homeowner-guide',
    serviceSlug: 'marble-porcelain',
    citySlug: 'riyadh',
    titleAr: 'تركيب الرخام والبورسلان في الرياض: أهم الأمور التي يجب معرفتها',
    titleEn: 'Marble and porcelain in Riyadh: what homeowners should know',
    excerptAr:
      'نصائح لأصحاب المنازل في الرياض حول اختيار الخامة، فحص الاستواء، والأسئلة المهمة قبل بدء تشطيب الأرضيات.',
    excerptEn:
      'Tips for Riyadh homeowners on material choice, leveling checks, and key questions before floor finishing starts.',
    contentAr: [
      'في الرياض طلب تشطيب الأرضيات مرتفع بين الشقق الجديدة والتجديد. وضوح نوع الخامة والمقاس من الأول بيوفر وقت وتعديلات.',
      'افحص استواء السطح قبل التركيب، خصوصًا مع البورسلان كبير المقاس. واسأل عن اللاصق المناسب للحرارة والاستخدام اليومي.',
      'لو الشغل في حمامات أو مداخل، راعِ الميول ومقاومة الانزلاق مش الشكل فقط.',
      'اقرأ مقالات الرخام والبورسلان على ساعدني، واتفق على النطاق والمدة قبل التنفيذ في الرياض.',
    ],
    contentEn: [
      'In Riyadh, floor finishing demand is high across new apartments and renovations. Clear material and size choices upfront save rework.',
      'Check substrate leveling before install, especially with large-format porcelain. Ask for adhesive suited to use and conditions.',
      'For bathrooms and entrances, prioritize slopes and slip resistance — not look alone.',
      'Read Saedni’s marble and porcelain articles, and agree scope and timing before work starts in Riyadh.',
    ],
    publishedAt: '2026-11-16',
    readMinutes: 5,
    image: '/images/hero/hero-12-marble-desktop.jpg',
  },
  {
    slug: 'villa-flooring-jeddah-material-choice',
    serviceSlug: 'marble-porcelain',
    citySlug: 'jeddah',
    titleAr: 'تشطيب أرضيات الفلل في جدة: كيف تختار الخامة المناسبة؟',
    titleEn: 'Villa flooring in Jeddah: choosing the right material',
    excerptAr:
      'دليل مختصر لاختيار رخام أو بورسلان لمداخل ومجالس وممرات الفلل في جدة مع مراعاة الرطوبة والاستخدام.',
    excerptEn:
      'A short guide to choosing marble or porcelain for villa entrances, majlis, and corridors in Jeddah with humidity and use in mind.',
    contentAr: [
      'في فلل جدة، المداخل والمجالس غالبًا واجهة التصميم — لكن الرطوبة والاستخدام اليومي لازم يدخلوا في الاختيار.',
      'الرخام يعطي حضور قوي مع عناية مناسبة. البورسلان يمنح خيارات عملية بأشكال قريبة من الحجر أو الخشب.',
      'حدد أولًا المساحات الرطبة والعالية الحركة، بعدين الألوان والمقاسات. واتفق على التسوية والفواصل قبل التركيب.',
      'راجع دليل الرخام والبورسلان ومقالات المدن على ساعدني عشان تسأل الأسئلة الصح قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah villas, entrances and majlis often carry the design — but humidity and daily use must shape the choice.',
      'Marble gives a strong presence with proper care. Porcelain offers practical options with stone- or wood-like looks.',
      'Map wet and high-traffic zones first, then colors and sizes. Agree leveling and joints before installation.',
      'Use Saedni’s marble and porcelain guide and city articles so you ask the right questions before work in Jeddah.',
    ],
    publishedAt: '2026-11-17',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'full-vs-semi-apartment-finishing',
    serviceSlug: 'apartment-finishing',
    titleAr: 'ما الفرق بين التشطيب الكامل ونصف التشطيب؟',
    titleEn: 'Full finishing vs semi-finished apartments',
    excerptAr:
      'شرح عملي للفرق بين الشقة نصف التشطيب والتشطيب الكامل، وما الذي عادةً يكون منتهيًا وما الذي يتبقى عليك.',
    excerptEn:
      'A practical explanation of semi-finished versus full finishing — what is usually done and what still remains.',
    contentAr: [
      'الشقة نصف التشطيب غالبًا تكون انتهت فيها أعمال إنشائية أو تجهيز جزئي، وتحتاج استكمال أعمال داخلية مثل الأرضيات والدهانات والتركيبات حسب حالة الوحدة.',
      'التشطيب الكامل يعني تجهيز الشقة لتكون جاهزة للاستخدام وفق نطاق الاتفاق: تأسيس، عزل، أرضيات، أسقف، دهان، وأبواب وتجهيزات.',
      'قبل الشراء أو الاتفاق، اطلب قائمة واضحة بما هو منفَّذ وما هو خارج السعر. الغموض هنا من أكبر مصادر الخلاف والتكلفة الزائدة.',
      'راجع دليل تشطيب الشقق على ساعدني عشان ترتب المراحل والأسئلة قبل ما تبدأ.',
    ],
    contentEn: [
      'A semi-finished apartment usually has some structural or prep work done, with interior works still needed — floors, paint, and fittings depending on the unit.',
      'Full finishing means preparing the unit for use per agreed scope: rough-in, waterproofing, floors, ceilings, paint, doors, and fittings.',
      'Before buying or contracting, ask for a clear list of what is included and excluded. Ambiguity here drives disputes and extra cost.',
      'Use Saedni’s apartment finishing guide to order stages and questions before you start.',
    ],
    publishedAt: '2026-11-18',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'apartment-finishing-stages-order',
    serviceSlug: 'apartment-finishing',
    titleAr: 'ترتيب مراحل تشطيب الشقة من البداية حتى التسليم',
    titleEn: 'Apartment finishing stages from start to handover',
    excerptAr:
      'تسلسل عملي للمراحل: تأسيس، عزل، أرضيات، أسقف، دهان، وتركيبات — عشان تقلل التكسير وإعادة الشغل.',
    excerptEn:
      'A practical stage order: rough-in, waterproofing, floors, ceilings, paint, and fittings — to reduce demolition and rework.',
    contentAr: [
      'الترتيب الصح يبدأ بالمعاينة والتخطيط، ثم تأسيس الكهرباء والسباكة مع الاختبار قبل إغلاق الحوائط والأرضيات.',
      'بعدها المحارة والتسوية، ثم العزل في الحمامات والمناطق الرطبة مع اختباره قبل التغطية.',
      'ثم الأرضيات والحوائط، فالأسقف والجبس، ثم الدهانات بعد انتهاء الأعمال التي قد توسّخها، وأخيرًا الأبواب والأدوات الصحية والإضاءة.',
      'أي قفزة على مرحلة ناقصة غالبًا تعني تكسيرًا لاحقًا. لو محتاج تفاصيل أوسع، افتح دليل تشطيب الشقق على ساعدني.',
    ],
    contentEn: [
      'The right order starts with survey and planning, then electrical and plumbing rough-in with testing before closing walls and floors.',
      'Next come plaster and leveling, then waterproofing in wet areas with testing before covering.',
      'Then floors and walls, ceilings and gypsum, paint after dirty trades are done, and finally doors, sanitary ware, and lights.',
      'Skipping an incomplete stage usually means later demolition. For a fuller guide, open Saedni’s apartment finishing page.',
    ],
    publishedAt: '2026-11-18',
    readMinutes: 6,
    image: '/images/hero/hero-15-renovation-desktop.jpg',
  },
  {
    slug: 'questions-before-finishing-contractor',
    serviceSlug: 'apartment-finishing',
    titleAr: 'أهم الأسئلة قبل التعاقد مع مقاول تشطيب',
    titleEn: 'Key questions before hiring a finishing contractor',
    excerptAr:
      'قائمة أسئلة عن النطاق والمقايسة والخامات والجدول والدفعات والاختبارات قبل ما توقّع على تشطيب شقتك.',
    excerptEn:
      'A checklist on scope, BOQ, materials, schedule, payments, and tests before you sign for apartment finishing.',
    contentAr: [
      'اسأل هل الاتفاق تشطيب كامل أم بنود محددة، وهل السعر يشمل الخامات والمصنعية، وما مستوى التشطيب المتفق عليه.',
      'اطلب مقايسة بالكميات والخامات، ووضّح من يشتري ويورّد، وكيف تُحسب الأعمال الإضافية وتقسيم الدفعات.',
      'أكد اختبار السباكة والكهرباء والعزل قبل الإغلاق، وبنود التسليم النهائي وطريقة معالجة العيوب.',
      'الاتفاق الواضح يوفّر فلوس وأعصاب. استخدم دليل تشطيب الشقق على ساعدني كمرجع قبل التفاوض.',
    ],
    contentEn: [
      'Ask whether the deal is full finishing or selected items, whether price includes materials and labor, and what finish level is agreed.',
      'Request a quantity/material schedule, clarify who buys and supplies, and how extras and payment stages work.',
      'Confirm plumbing, electrical, and waterproofing tests before closing, plus handover items and snag handling.',
      'A clear agreement saves money and stress. Use Saedni’s apartment finishing guide before you negotiate.',
    ],
    publishedAt: '2026-11-19',
    readMinutes: 5,
    image: '/images/hero/hero-11-contracting-desktop.jpg',
  },
  {
    slug: 'apartment-finishing-costly-mistakes',
    serviceSlug: 'apartment-finishing',
    titleAr: 'أخطاء شائعة تزيد تكلفة تشطيب الشقق',
    titleEn: 'Common mistakes that raise apartment finishing costs',
    excerptAr:
      'من تغيير التصميم أثناء التنفيذ لتأخير التوريد وإهمال الاختبارات: أخطاء ترفع التكلفة وتعيد الشغل.',
    excerptEn:
      'From mid-project design changes to late materials and skipped tests: mistakes that raise cost and cause rework.',
    contentAr: [
      'البدء بلا خطة واضحة أو بدون تحديد مستوى التشطيب يفتح باب تغييرات مكلفة أثناء التنفيذ.',
      'تغيير أماكن الكهرباء والسباكة بعد التأسيس، أو تغطية العزل قبل اختباره، من أكثر الأسباب لإعادة العمل.',
      'الدهان قبل انتهاء الأعمال المتسخة، وشراء خامات بالشكل فقط، وعدم توثيق الإضافات — كلها ترفع الفاتورة.',
      'اترك جزءًا من الميزانية للطوارئ، وراجع قائمة الأخطاء في دليل تشطيب الشقق قبل ما تبدأ.',
    ],
    contentEn: [
      'Starting without a clear plan or finish level opens the door to expensive mid-project changes.',
      'Moving electrical/plumbing after rough-in, or covering waterproofing before testing, often forces rework.',
      'Painting before dirty trades finish, buying materials on looks alone, and undocumented extras all raise the bill.',
      'Keep a contingency in the budget, and review the mistakes list in Saedni’s finishing guide before you start.',
    ],
    publishedAt: '2026-11-19',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing.jpg',
  },
  {
    slug: 'apartment-finishing-riyadh-checklist',
    serviceSlug: 'apartment-finishing',
    citySlug: 'riyadh',
    titleAr: 'تشطيب الشقق في الرياض: المراحل والأمور التي يجب مراعاتها',
    titleEn: 'Apartment finishing in Riyadh: stages and what to watch',
    excerptAr:
      'نقاط عملية لأصحاب الشقق في الرياض حول التخطيط والترتيب والاختبارات قبل إغلاق التمديدات والأرضيات.',
    excerptEn:
      'Practical points for Riyadh apartment owners on planning, sequencing, and tests before closing services and floors.',
    contentAr: [
      'في الرياض الطلب على تشطيب الشقق مرتفع بين الوحدات الجديدة والتجديد. وضوح النطاق ومستوى التشطيب من الأول بيوفر وقت ومال.',
      'رتّب التأسيس والاختبارات قبل السيراميك والدهان، واتفق على الخامات والجدول والدفعات مكتوبًا.',
      'راجع استواء الأسطح وجودة العزل في الحمامات قبل التغطية، خصوصًا في الشقق الجديدة.',
      'استخدم مقالات ودليل تشطيب الشقق على ساعدني عشان تسأل الأسئلة الصح قبل التنفيذ في الرياض.',
    ],
    contentEn: [
      'In Riyadh, finishing demand is high across new units and renovations. Clear scope and finish level upfront saves time and money.',
      'Sequence rough-in and testing before ceramic and paint, and put materials, schedule, and payments in writing.',
      'Check surface leveling and bathroom waterproofing before covering, especially in new apartments.',
      'Use Saedni’s finishing articles and guide so you ask the right questions before work in Riyadh.',
    ],
    publishedAt: '2026-11-19',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'apartment-finishing-prep-jeddah',
    serviceSlug: 'apartment-finishing',
    citySlug: 'jeddah',
    titleAr: 'تجهيز الشقق للتشطيب في جدة: أهم النقاط قبل التنفيذ',
    titleEn: 'Preparing apartments for finishing in Jeddah',
    excerptAr:
      'قائمة تجهيز قبل بدء تشطيب شقتك في جدة: معاينة، ميزانية، خامات، وترتيب المراحل لتجنب إعادة العمل.',
    excerptEn:
      'A prep checklist before apartment finishing in Jeddah: survey, budget, materials, and stage order to avoid rework.',
    contentAr: [
      'قبل التنفيذ في جدة، عاين الشقة وحدد هل تحتاج تشطيبًا كاملًا أم جزئيًا، واكتب الميزانية المبدئية مع هامش للطوارئ.',
      'ثبّت أماكن الإضاءة والأفياش ونقاط المياه قبل التأسيس، عشان ما تتغير بعد ما تتسكر الحوائط.',
      'اتفق على من يشتري الخامات، ومقايسة البنود، وجدول المراحل — خصوصًا مع الرطوبة في الحمامات والمطابخ.',
      'راجع دليل تشطيب الشقق على ساعدني قبل ما تبدأ شغلك في جدة.',
    ],
    contentEn: [
      'Before work in Jeddah, survey the unit, decide full vs partial finishing, and set a budget with contingency.',
      'Lock light and outlet locations and water points before rough-in so walls are not reopened later.',
      'Agree who buys materials, itemized scope, and stage schedule — especially for wet areas.',
      'Review Saedni’s apartment finishing guide before you start in Jeddah.',
    ],
    publishedAt: '2026-11-19',
    readMinutes: 4,
    image: '/images/hero/hero-15-renovation.jpg',
  },
  {
    slug: 'choose-general-contractor-saudi',
    serviceSlug: 'general-contracting',
    titleAr: 'كيف تختار شركة مقاولات مناسبة لمشروعك؟',
    titleEn: 'How to choose a suitable contracting company',
    excerptAr:
      'معايير عملية قبل التعاقد: الخبرة المشابهة، وضوح النطاق، المخططات، الدفعات، ومتابعة الجودة — مش السعر وحده.',
    excerptEn:
      'Practical criteria before signing: similar experience, clear scope, drawings, payments, and quality follow-up — not price alone.',
    contentAr: [
      'ابدأ بتحديد نوع مشروعك: بناء جديد، تشطيب، ترميم، أو تجهيز تجاري. خبرة المقاول لازم تكون قريبة من نفس النوع.',
      'اطلب أمثلة أعمال موثقة، ووضّح إن كان التنفيذ كاملًا أم بنودًا محددة، وهل في مقايسة ومواصفات خامات مكتوبة.',
      'المقاول الجيد يرتب المراحل، ينسق التخصصات، ويوثق الدفعات والتعديلات. السعر الأرخص بلا تفاصيل غالبًا أغلى لاحقًا.',
      'راجع دليل المقاولات العامة على ساعدني قبل ما تختار وتوقّع.',
    ],
    contentEn: [
      'Start by defining your project type: new build, finishing, renovation, or commercial fit-out. Contractor experience should match that type.',
      'Ask for documented past work, clarify full project vs selected items, and insist on a written BOQ and material specs.',
      'A good contractor sequences stages, coordinates trades, and documents payments and changes. The cheapest vague offer often costs more later.',
      'Review Saedni’s general contracting guide before you choose and sign.',
    ],
    publishedAt: '2026-11-20',
    readMinutes: 5,
    image: '/images/hero/hero-11-contracting-desktop.jpg',
  },
  {
    slug: 'general-vs-specialized-contractor',
    serviceSlug: 'general-contracting',
    titleAr: 'الفرق بين المقاول العام والمقاول المتخصص',
    titleEn: 'General contractor vs specialized contractor',
    excerptAr:
      'متى تحتاج مقاولًا عامًا ينسّق المشروع كاملًا، ومتى يكفي متخصص في الكهرباء أو السباكة أو العزل؟',
    excerptEn:
      'When you need a general contractor to coordinate the whole project, and when a specialist trade is enough.',
    contentAr: [
      'المقاول العام غالبًا يدير وينفّذ أو ينسّق عدة تخصصات تحت عقد واحد أو مسؤولية أوسع.',
      'المقاول المتخصص يركز على مجال واحد: كهرباء، سباكة، عزل، دهان… وهذا مناسب لو عندك تنسيق ومتابعة قوية بنفسك.',
      'لو المشروع كبير أو متعدد المراحل، غياب جهة تنسيق واضحة يزيد التعارض بين الأعمال وإعادة الشغل.',
      'حدد نطاق المسؤولية في العقد بوضوح. التفاصيل الأوسع في دليل المقاولات العامة على ساعدني.',
    ],
    contentEn: [
      'A general contractor usually manages, delivers, or coordinates multiple trades under one broader responsibility.',
      'A specialist focuses on one trade — electrical, plumbing, waterproofing, paint — which works if you can coordinate well yourself.',
      'On larger multi-stage projects, no clear coordinator often means clashes and rework.',
      'Write responsibility clearly in the contract. More detail is in Saedni’s general contracting guide.',
    ],
    publishedAt: '2026-11-20',
    readMinutes: 4,
    image: '/images/hero/hero-11-contracting.jpg',
  },
  {
    slug: 'must-have-clauses-in-contracting-agreement',
    serviceSlug: 'general-contracting',
    titleAr: 'أهم البنود التي يجب أن يتضمنها عقد المقاولات',
    titleEn: 'Must-have clauses in a contracting agreement',
    excerptAr:
      'نطاق العمل، المواصفات، المدة، الدفعات، الإضافات، الفحص والتسليم — بنود تحمي الطرفين قبل بدء التنفيذ.',
    excerptEn:
      'Scope, specs, duration, payments, extras, inspection, and handover — clauses that protect both sides before work starts.',
    contentAr: [
      'اكتب الأعمال المشمولة والمستثناة، ومواصفات الخامات، وجداول الكميات إن وجدت، بدل الاتفاق الشفهي.',
      'حدد المدة المتوقعة لكل مرحلة رئيسية، وتقسيم الدفعات مربوطًا بإنجاز واضح، وآلية حساب الأعمال الإضافية.',
      'وضّح الإشراف الهندسي إن لزم، وإجراءات الفحص والاختبارات، وكيف تُعالج عيوب التنفيذ قبل التسليم النهائي.',
      'عقد واضح يقلل الخلاف. راجع أسئلة ما قبل التعاقد في دليل المقاولات العامة على ساعدني.',
    ],
    contentEn: [
      'Write included and excluded works, material specs, and quantities where available — not verbal agreements only.',
      'Define expected duration by major stage, payments tied to clear progress, and how extras are priced.',
      'Clarify engineering supervision if needed, inspection and testing steps, and how defects are fixed before final handover.',
      'A clear contract reduces disputes. Review pre-contract questions in Saedni’s general contracting guide.',
    ],
    publishedAt: '2026-11-20',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'checklist-before-contracting-handover',
    serviceSlug: 'general-contracting',
    titleAr: 'ما الذي يجب مراجعته قبل استلام مشروع المقاولات؟',
    titleEn: 'What to review before accepting a contracting project',
    excerptAr:
      'قائمة مراجعة عملية قبل التسليم النهائي: مواصفات، أنظمة، تشطيبات، ملاحظات، ومستندات المشروع.',
    excerptEn:
      'A practical handover checklist: specs, systems, finishes, snags, and project documents.',
    contentAr: [
      'راجع مطابقة الأعمال للمخططات والمواصفات المتفق عليها، وسجّل أي فرق ظاهر قبل التوقيع على الاستلام.',
      'اختبر الكهرباء والسباكة والصرف والعزل والأنظمة المتفق عليها، ولا تعتمد على الشكل النهائي فقط.',
      'افحص الأرضيات والدهانات والأبواب والنوافذ والتفاصيل الظاهرة، واطلب معالجة الملاحظات ضمن مهلة واضحة.',
      'احتفظ بالمستندات المتفق عليها. تفاصيل أكثر في دليل المقاولات العامة على ساعدني.',
    ],
    contentEn: [
      'Check works against agreed drawings and specs, and record visible gaps before signing acceptance.',
      'Test electrical, plumbing, drainage, waterproofing, and agreed systems — do not rely on final looks alone.',
      'Inspect floors, paint, doors, windows, and visible details, and set a clear snag fix window.',
      'Keep agreed documents. More detail is in Saedni’s general contracting guide.',
    ],
    publishedAt: '2026-11-21',
    readMinutes: 4,
    image: '/images/hero/hero-15-renovation-desktop.jpg',
  },
  {
    slug: 'choose-contractor-riyadh-checklist',
    serviceSlug: 'general-contracting',
    citySlug: 'riyadh',
    titleAr: 'اختيار شركة مقاولات في الرياض: ما الذي يجب مراجعته؟',
    titleEn: 'Choosing a contracting company in Riyadh: what to review',
    excerptAr:
      'نقاط لأصحاب المشاريع في الرياض قبل التعاقد: نوع الخبرة، العقد، المقايسة، التصاريح، ومتابعة التنفيذ.',
    excerptEn:
      'Points for Riyadh project owners before signing: experience fit, contract, BOQ, permits, and site follow-up.',
    contentAr: [
      'في الرياض تنوع المشاريع كبير بين فلل وتشطيب ومشاريع تجارية. اختر مقاولًا له خبرة قريبة من نوع مشروعك.',
      'اطلب مقايسة واضحة، ومواصفات خامات، وجدول مراحل ودفعات مربوط بالإنجاز — خصوصًا قبل دفع مبالغ كبيرة.',
      'راجع إن كانت هناك تصاريح أو اشتراطات مطلوبة، ومن يتابع الإشراف أثناء التنفيذ.',
      'استخدم دليل ومقالات المقاولات العامة على ساعدني قبل ما تبدأ مشروعك في الرياض.',
    ],
    contentEn: [
      'Riyadh projects vary across villas, finishing, and commercial work. Pick a contractor experienced in your project type.',
      'Ask for a clear BOQ, material specs, and a stage/payment plan tied to progress — especially before large advances.',
      'Check required permits and who provides supervision during execution.',
      'Use Saedni’s general contracting guide and articles before you start in Riyadh.',
    ],
    publishedAt: '2026-11-21',
    readMinutes: 5,
    image: '/images/hero/hero-11-contracting-desktop.jpg',
  },
  {
    slug: 'contracting-build-guide-jeddah',
    serviceSlug: 'general-contracting',
    citySlug: 'jeddah',
    titleAr: 'أعمال المقاولات والبناء في جدة: دليل قبل بدء المشروع',
    titleEn: 'Contracting and building in Jeddah: a pre-start guide',
    excerptAr:
      'قبل ما تبدأ بناء أو ترميم في جدة: حدّد النطاق، راجع المخططات، واتفق على المدة والدفعات وآلية التغييرات.',
    excerptEn:
      'Before building or renovating in Jeddah: define scope, review drawings, and agree duration, payments, and change handling.',
    contentAr: [
      'قبل التنفيذ في جدة، عاين الموقع وحدد إن كان المشروع بناءً أو ترميمًا أو تشطيبًا، واكتب النتيجة المطلوبة بوضوح.',
      'لا تبدأ بسعر إجمالي فقط: اربط الاتفاق بمخططات ومواصفات ومدة متوقعة لكل مرحلة رئيسية.',
      'اتفق مبكرًا على من يوفّر الخامات، وكيف تُحسب الإضافات، وما إجراءات الفحص قبل التسليم.',
      'راجع دليل المقاولات العامة على ساعدني عشان تجهّز أسئلتك قبل التعاقد في جدة.',
    ],
    contentEn: [
      'Before work in Jeddah, survey the site, define build vs renovation vs finishing, and write the desired outcome clearly.',
      'Do not start from a lump sum alone: tie the deal to drawings, specs, and expected duration by major stage.',
      'Agree early who supplies materials, how extras are priced, and what inspection steps come before handover.',
      'Review Saedni’s general contracting guide so your questions are ready before signing in Jeddah.',
    ],
    publishedAt: '2026-11-21',
    readMinutes: 5,
    image: '/images/hero/hero-11-contracting.jpg',
  },
  {
    slug: 'ceramic-vs-porcelain-for-homes',
    serviceSlug: 'ceramic-installation',
    titleAr: 'الفرق بين السيراميك والبورسلان وأيهما يناسب منزلك؟',
    titleEn: 'Ceramic vs porcelain: which suits your home?',
    excerptAr:
      'مقارنة عملية بين السيراميك والبورسلان من حيث الامتصاص والاستخدام والصيانة — مع التأكيد على مراجعة مواصفات المنتج الفعلي.',
    excerptEn:
      'A practical ceramic vs porcelain comparison on absorption, use, and care — always check the real product specs.',
    contentAr: [
      'السيراميك والبورسلان كلاهما بلاط مصنّع، لكن البورسلان غالبًا أعلى كثافة وأقل امتصاصًا للماء حسب طريقة التصنيع والمنتج.',
      'في الحمامات والمطابخ والمناطق المعرضة للمياه، راجع مقاومة الانزلاق وملاءمة التشطيب — مش الشكل فقط.',
      'المقاس الكبير يحتاج سطحًا مستويًا وتركيبًا أدق. والمقاس الأصغر قد يكون أسهل حول التفاصيل والميول.',
      'الاختيار النهائي من مواصفات المنتج ومكان الاستخدام. راجع دليل تركيب السيراميك والبلاط على ساعدني قبل الشراء.',
    ],
    contentEn: [
      'Ceramic and porcelain are both manufactured tiles; porcelain is often denser and lower in water absorption depending on the product.',
      'In bathrooms, kitchens, and wet areas, check slip resistance and finish suitability — not look alone.',
      'Large formats need a flatter substrate and careful install. Smaller formats can be easier around details and slopes.',
      'Final choice comes from product specs and room use. Review Saedni’s ceramic and tile guide before you buy.',
    ],
    publishedAt: '2026-11-22',
    readMinutes: 5,
    image: '/images/hero/hero-03-tiling-desktop.jpg',
  },
  {
    slug: 'ceramic-hollow-sound-causes',
    serviceSlug: 'ceramic-installation',
    titleAr: 'أسباب تطبيل السيراميك وكيف يمكن اكتشافه؟',
    titleEn: 'Why ceramic tiles sound hollow and how to spot it',
    excerptAr:
      'التطبيل غالبًا من ضعف تغطية اللاصق أو سطح غير جاهز. علامات مبكرة تساعدك تطلب الفحص قبل الاستلام.',
    excerptEn:
      'Hollow sounds often come from poor adhesive coverage or a weak substrate. Early signs help you ask for checks before handover.',
    contentAr: [
      'الصوت الأجوف عند الطرق على البلاطة قد يشير إلى فراغات تحتها بسبب تغطية ضعيفة بمادة التثبيت أو طريقة تركيب غير مناسبة.',
      'سطح غير مستوٍ أو غير نظيف، أو لاصق غير ملائم للمقاس — خصوصًا الكبير — يزيد احتمال المشكلة.',
      'افحص أثناء وبعد التركيب، واطلب معالجة القطع المشكوك فيها قبل التحميل الكامل على الأرضية.',
      'قائمة الأخطاء وعلامات الجودة موجودة في دليل تركيب السيراميك والبلاط على ساعدني.',
    ],
    contentEn: [
      'A hollow sound when tapping a tile can mean voids underneath from poor adhesive coverage or unsuitable installation method.',
      'Uneven or dirty substrate, or adhesive not suited to tile size — especially large formats — raises the risk.',
      'Check during and after install, and ask to fix suspect tiles before fully loading the floor.',
      'Mistakes and quality signs are listed in Saedni’s ceramic and tile guide.',
    ],
    publishedAt: '2026-11-22',
    readMinutes: 4,
    image: '/images/hero/hero-03-tiling.jpg',
  },
  {
    slug: 'ceramic-floor-install-steps',
    serviceSlug: 'ceramic-installation',
    titleAr: 'مراحل تركيب السيراميك للأرضيات خطوة بخطوة',
    titleEn: 'Ceramic floor installation steps, stage by stage',
    excerptAr:
      'من المعاينة والتسوية حتى الترويبة والفحص: تسلسل عملي يقلل الهالك وأخطاء الاستواء والميول.',
    excerptEn:
      'From survey and leveling to grout and inspection: a practical sequence that reduces waste and leveling mistakes.',
    contentAr: [
      'ابدأ بالقياس وفحص السطح، ثم نظّف وسوِّ وعالج العيوب قبل أي لصق.',
      'حدد اتجاه التركيب ووزّع البلاطات لتقليل القصاصات الظاهرة، واختر لاصقًا مناسبًا للنوع والمقاس والمكان.',
      'ثبّت مع ضبط الاستواء والفواصل، ثم القص حول المواسير والزوايا وتركيب الوزرات.',
      'أكمل بالترويبة والتنظيف والفحص قبل الاستلام. التفاصيل الأوسع في دليل المهنة على ساعدني.',
    ],
    contentEn: [
      'Start with measuring and substrate checks, then clean, level, and fix defects before any adhesive.',
      'Set layout direction, dry-lay to reduce visible waste, and choose adhesive suited to type, size, and location.',
      'Install with level and joint control, then cut around pipes and corners and fit skirting.',
      'Finish with grout, cleaning, and inspection before handover. More detail is on Saedni’s trade guide.',
    ],
    publishedAt: '2026-11-22',
    readMinutes: 5,
    image: '/images/hero/hero-03-tiling-desktop.jpg',
  },
  {
    slug: 'bathroom-tile-mistakes',
    serviceSlug: 'ceramic-installation',
    titleAr: 'أخطاء شائعة عند تركيب بلاط الحمامات',
    titleEn: 'Common bathroom tiling mistakes',
    excerptAr:
      'من إهمال العزل والميول لاستخدام بلاط زلق أو فواصل ضعيفة: أخطاء تكلف إصلاحًا لاحقًا في الحمام.',
    excerptEn:
      'From skipping waterproofing and slopes to slippery tiles or weak joints: mistakes that lead to later bathroom repairs.',
    contentAr: [
      'إهمال العزل المائي أو تغطيته قبل الاختبار من أخطر الأخطاء في الحمامات.',
      'الميول الخاطئة باتجاه الصرف تسبب تجمع مياه حتى لو البلاط شكله مرتب.',
      'البلاط اللامع شديد الانزلاق غير مناسب لكثير من أرضيات الحمامات، والفواصل غير المنتظمة تضعف الشكل والصيانة.',
      'اسأل عن العزل والميول واللاصق قبل البدء، وراجع دليل السيراميك والبلاط على ساعدني.',
    ],
    contentEn: [
      'Skipping waterproofing or covering it before testing is one of the riskiest bathroom mistakes.',
      'Wrong slopes toward drains cause water pooling even when tiles look neat.',
      'High-gloss slippery tiles are often a poor floor choice, and uneven joints hurt both looks and maintenance.',
      'Ask about waterproofing, slopes, and adhesive before work, and review Saedni’s ceramic and tile guide.',
    ],
    publishedAt: '2026-11-23',
    readMinutes: 4,
    image: '/images/hero/hero-04-waterproofing-desktop.jpg',
  },
  {
    slug: 'ceramic-tiling-riyadh-guide',
    serviceSlug: 'ceramic-installation',
    citySlug: 'riyadh',
    titleAr: 'تركيب السيراميك والبلاط في الرياض: ما الذي يجب معرفته؟',
    titleEn: 'Ceramic and tile installation in Riyadh: what to know',
    excerptAr:
      'نصائح لأصحاب المنازل في الرياض حول تجهيز السطح، اختيار البلاط، والأسئلة المهمة قبل بدء التركيب.',
    excerptEn:
      'Tips for Riyadh homeowners on substrate prep, tile choice, and key questions before installation starts.',
    contentAr: [
      'في الرياض أعمال تشطيب الأرضيات كثيرة بين الشقق الجديدة والتجديد. وضوح نوع البلاط والمقاس من الأول يوفر وقت وهالك.',
      'افحص استواء السطح قبل التركيب، خصوصًا مع المقاسات الكبيرة، واتفق على اللاصق والفواصل والميول في الحمامات.',
      'اسأل هل السعر يشمل التسوية والقص والوزرات، ومتى يُسمح بالمشي على الأرضية.',
      'راجع دليل ومقالات السيراميك على ساعدني قبل التنفيذ في الرياض.',
    ],
    contentEn: [
      'In Riyadh, floor finishing is common across new apartments and renovations. Clear tile type and size upfront saves time and waste.',
      'Check substrate flatness before install, especially with large formats, and agree adhesive, joints, and bathroom slopes.',
      'Ask whether price includes leveling, cutting, and skirting, and when walking on the floor is allowed.',
      'Review Saedni’s ceramic guide and articles before work in Riyadh.',
    ],
    publishedAt: '2026-11-23',
    readMinutes: 5,
    image: '/images/hero/hero-03-tiling-desktop.jpg',
  },
  {
    slug: 'choose-home-tiles-jeddah',
    serviceSlug: 'ceramic-installation',
    citySlug: 'jeddah',
    titleAr: 'اختيار بلاط مناسب للمنازل في جدة',
    titleEn: 'Choosing suitable home tiles in Jeddah',
    excerptAr:
      'كيف تختار بلاط داخلي وخارجي لمنازل جدة مع مراعاة الرطوبة والاستخدام ومقاومة الانزلاق.',
    excerptEn:
      'How to choose indoor and outdoor tiles for Jeddah homes with humidity, use, and slip resistance in mind.',
    contentAr: [
      'في جدة، راعِ الرطوبة والاستخدام اليومي عند اختيار بلاط المطابخ والحمامات والمداخل — مش اللون فقط.',
      'للمساحات الخارجية اختر أنواعًا مناسبة للشمس والمياه مع مقاومة انزلاق أوضح.',
      'حدد المقاس حسب مساحة الغرفة واستواء السطح، واتفق على تجهيز السطح قبل اللصق.',
      'استخدم دليل تركيب السيراميك والبلاط على ساعدني قبل ما تشتري وتبدأ في جدة.',
    ],
    contentEn: [
      'In Jeddah, weigh humidity and daily use when choosing kitchen, bathroom, and entrance tiles — not color alone.',
      'For outdoor areas, pick tiles suited to sun and water with clearer slip resistance.',
      'Match size to room area and substrate flatness, and agree surface prep before adhesive.',
      'Use Saedni’s ceramic and tile guide before you buy and start in Jeddah.',
    ],
    publishedAt: '2026-11-23',
    readMinutes: 4,
    image: '/images/hero/hero-03-tiling.jpg',
  },
  {
    slug: 'interior-paint-types-differences',
    serviceSlug: 'painting',
    titleAr: 'أنواع الدهانات الداخلية والفرق بينها',
    titleEn: 'Interior paint types and how they differ',
    excerptAr:
      'شرح عملي لأنواع التشطيب الداخلي ومستويات اللمعان وملاءمة كل نوع للغرف — قبل ما تختار اللون فقط.',
    excerptEn:
      'A practical look at interior finishes and sheen levels — and which rooms they suit — before you pick color alone.',
    contentAr: [
      'الدهانات الداخلية تختلف في التشطيب وسهولة التنظيف ومستوى اللمعان. غرفة نوم غير مطبخ أو ممر عالي الحركة.',
      'اللمعان الأعلى غالبًا أسهل في المسح لكنه يُظهر العيوب أكثر. المطفي يخفي العيوب أكثر وقد يحتاج عناية مختلفة.',
      'راجع مواصفات المنتج للسطح والرطوبة، وجرب عينة في إضاءة الغرفة قبل المساحة الكاملة.',
      'التفاصيل الأوسع في دليل أعمال الدهانات على ساعدني.',
    ],
    contentEn: [
      'Interior paints differ in finish, cleanability, and sheen. A bedroom is not a kitchen or high-traffic corridor.',
      'Higher sheen is often easier to wipe but shows defects more. Matte hides more and may need different care.',
      'Check product specs for substrate and humidity, and test a sample in the room’s light before full walls.',
      'More detail is in Saedni’s painting guide.',
    ],
    publishedAt: '2026-11-24',
    readMinutes: 5,
    image: '/images/hero/hero-07-painting-desktop.jpg',
  },
  {
    slug: 'putty-primer-paint-difference',
    serviceSlug: 'painting',
    titleAr: 'الفرق بين المعجون والبرايمر والدهان',
    titleEn: 'Putty vs primer vs paint',
    excerptAr:
      'كل طبقة لها دور: تسوية، تأسيس، ثم لون نهائي. تخطي واحدة منها في الوقت الخطأ يبوّظ الشكل والمتانة.',
    excerptEn:
      'Each layer has a job: leveling, priming, then finish color. Skipping one at the wrong time hurts look and durability.',
    contentAr: [
      'المعجون يسوي السطح ويغطي عيوبًا بسيطة بعد معالجة الشروخ الكبيرة وأسباب الرطوبة.',
      'البرايمر يجهّز السطح ويساعد على تماسك وتجانس الدهان النهائي حسب نظام المنتج.',
      'الدهان يعطي اللون والتشطيب. تطبيقه على سطح غير جاهز يظهر تموجات وتقشير وعدم انتظام.',
      'اسأل فني الدهانات عن عدد طبقات كل مرحلة قبل الاتفاق، وراجع الدليل على ساعدني.',
    ],
    contentEn: [
      'Putty levels the surface and covers minor defects after major cracks and moisture causes are fixed.',
      'Primer prepares the surface and helps adhesion and even finish coats per the product system.',
      'Paint provides color and finish. Applying it on a poorly prepared surface shows waves, peeling, and uneven coverage.',
      'Ask your painter how many coats each stage needs before you agree, and review Saedni’s guide.',
    ],
    publishedAt: '2026-11-24',
    readMinutes: 4,
    image: '/images/hero/hero-07-painting.jpg',
  },
  {
    slug: 'apartment-painting-steps',
    serviceSlug: 'painting',
    titleAr: 'خطوات دهان الشقة من البداية حتى النهاية',
    titleEn: 'Apartment painting steps from start to finish',
    excerptAr:
      'تسلسل عملي: معاينة، حماية المكان، معالجة عيوب، معجون، صنفرة، برايمر، دهان، ثم مراجعة قبل التسليم.',
    excerptEn:
      'A practical sequence: survey, protect the space, fix defects, putty, sand, prime, paint, then review before handover.',
    contentAr: [
      'ابدأ بمعاينة الرطوبة والتقشير والشروخ، ولا تغطِّ أثر الرطوبة قبل معالجة السبب.',
      'احمِ الأرضيات والأبواب، ثم عالج العيوب ونفّذ المعجون والصنفرة والتنظيف قبل أي لون.',
      'طبّق التأسيس والطبقات النهائية مع احترام زمن الجفاف، وراجع التجانس والحواف قبل الاستلام.',
      'المزيد من التفاصيل في دليل أعمال الدهانات على ساعدني.',
    ],
    contentEn: [
      'Start by surveying moisture, peeling, and cracks — do not cover moisture stains before fixing the cause.',
      'Protect floors and doors, then fix defects and complete putty, sanding, and cleaning before color.',
      'Apply primer and finish coats with proper drying time, and check evenness and edges before handover.',
      'More detail is in Saedni’s painting guide.',
    ],
    publishedAt: '2026-11-24',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'paint-peeling-causes',
    serviceSlug: 'painting',
    titleAr: 'أسباب تقشير الدهان وكيفية تجنبها',
    titleEn: 'Why paint peels and how to avoid it',
    excerptAr:
      'التقشير غالبًا من رطوبة أو سطح ضعيف أو طبقات بلا جفاف كافٍ. علامات وخطوات عملية قبل ما تعيد الدهان.',
    excerptEn:
      'Peeling often comes from moisture, weak substrate, or coats without enough drying. Practical signs and steps before you repaint.',
    contentAr: [
      'دهان فوق سطح رطب أو غير ثابت من أشهر أسباب التقشير بعد فترة قصيرة.',
      'تجاهل طبقة التأسيس عند الحاجة، أو عدم إزالة الطبقات الضعيفة القديمة، يضعف التصاق الدهان الجديد.',
      'الاستعجال بين الطبقات بلا زمن جفاف كافٍ يخلي النتيجة هشة حتى لو اللون حلو في البداية.',
      'عالج السبب أولًا ثم جهّز السطح. راجع قائمة الأخطاء في دليل الدهانات على ساعدني.',
    ],
    contentEn: [
      'Painting over damp or unstable surfaces is a top cause of early peeling.',
      'Skipping primer when needed, or leaving weak old coats, weakens adhesion of the new system.',
      'Rushing between coats without enough drying makes the finish fragile even if the color looks good at first.',
      'Fix the cause first, then prep. Review the mistakes list in Saedni’s painting guide.',
    ],
    publishedAt: '2026-11-25',
    readMinutes: 4,
    image: '/images/hero/hero-15-renovation-desktop.jpg',
  },
  {
    slug: 'painting-tips-riyadh',
    serviceSlug: 'painting',
    citySlug: 'riyadh',
    titleAr: 'أعمال الدهانات في الرياض: أنواع التشطيبات وأهم النصائح',
    titleEn: 'Painting in Riyadh: finishes and key tips',
    excerptAr:
      'نصائح لأصحاب المنازل في الرياض حول اختيار التشطيب، تجربة اللون، ومعالجة الحوائط قبل الدهان.',
    excerptEn:
      'Tips for Riyadh homeowners on finish choice, color sampling, and wall prep before painting.',
    contentAr: [
      'في الرياض تجديد الدهانات شائع بين الشقق والفلل. حدد داخلي أم واجهات، وجرب اللون في إضاءة الغرفة قبل التنفيذ الكامل.',
      'افحص الرطوبة والشروخ قبل المعجون، واتفق إن كان السعر يشمل التأسيس وعدد الطبقات.',
      'للمناطق عالية الاستخدام اختر تشطيبًا أسهل في التنظيف حسب مواصفات المنتج.',
      'راجع دليل أعمال الدهانات على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, paint refreshes are common across apartments and villas. Decide interior vs facade, and sample color in the room’s light before full work.',
      'Check moisture and cracks before putty, and agree whether price includes primer and coat counts.',
      'For high-use areas, pick a more wipeable finish per product specs.',
      'Review Saedni’s painting guide before you agree in Riyadh.',
    ],
    publishedAt: '2026-11-25',
    readMinutes: 5,
    image: '/images/hero/hero-07-painting-desktop.jpg',
  },
  {
    slug: 'home-paint-choice-jeddah',
    serviceSlug: 'painting',
    citySlug: 'jeddah',
    titleAr: 'اختيار دهانات مناسبة للمنازل في جدة',
    titleEn: 'Choosing suitable home paints in Jeddah',
    excerptAr:
      'كيف تختار دهان داخلي وخارجي في جدة مع مراعاة الرطوبة والشمس والاستخدام اليومي.',
    excerptEn:
      'How to choose interior and exterior paints in Jeddah with humidity, sun, and daily use in mind.',
    contentAr: [
      'في جدة، الرطوبة والشمس عاملان مهمان — خصوصًا للواجهات والمناطق القريبة من المطابخ والحمامات.',
      'لا تغطِّ آثار الرطوبة باللون فقط؛ عالج السبب وجفّف السطح، واختر منتجًا مناسبًا حسب المواصفات.',
      'اتفق على المعجون والبرايمر وعدد الطبقات وحماية الأرضيات قبل البدء.',
      'استخدم دليل أعمال الدهانات على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, humidity and sun matter — especially for facades and areas near kitchens and bathrooms.',
      'Do not cover moisture stains with color alone; fix the cause, dry the surface, and choose a product by specs.',
      'Agree putty, primer, coat counts, and floor protection before work starts.',
      'Use Saedni’s painting guide before execution in Jeddah.',
    ],
    publishedAt: '2026-11-25',
    readMinutes: 4,
    image: '/images/hero/hero-07-painting.jpg',
  },
  {
    slug: 'gypsum-board-types-and-uses',
    serviceSlug: 'gypsum-board',
    titleAr: 'أنواع الجبس بورد واستخدامات كل نوع',
    titleEn: 'Gypsum board types and where each is used',
    excerptAr:
      'من الألواح العادية إلى المقاومة للرطوبة والحريق: متى تستخدم كل نوع في الأسقف والقواطع والمطابخ.',
    excerptEn:
      'From standard boards to moisture- and fire-rated types: when to use each for ceilings, partitions, and kitchens.',
    contentAr: [
      'مش كل لوح جبس بورد مناسب لكل مكان. الغرفة الجافة غير المطبخ أو الحمام من ناحية الرطوبة والبخار.',
      'ألواح معالجة الرطوبة تساعد في الأماكن ذات الرطوبة الأعلى، لكنها ليست بديلًا عن العزل المائي أو الحماية من المياه المباشرة.',
      'حدد أولًا الاستخدام: سقف مستوٍ، مستويات، قاطع، أو بيت نور — بعدين نوع اللوح ومواصفات الهيكل.',
      'راجع دليل الجبس بورد على ساعدني قبل الاتفاق على الخامات.',
    ],
    contentEn: [
      'Not every gypsum board suits every room. A dry room differs from a kitchen or bathroom on humidity and steam.',
      'Moisture-treated boards help in wetter rooms, but they are not a substitute for waterproofing or direct water protection.',
      'Define use first: flat ceiling, levels, partition, or cove lighting — then board type and framing specs.',
      'Review Saedni’s gypsum board guide before agreeing materials.',
    ],
    publishedAt: '2026-11-26',
    readMinutes: 5,
    image: '/images/hero/hero-10-gypsum-desktop.jpg',
  },
  {
    slug: 'gypsum-board-vs-traditional-plaster',
    serviceSlug: 'gypsum-board',
    titleAr: 'الفرق بين الجبس بورد والجبس البلدي',
    titleEn: 'Gypsum board vs traditional plaster',
    excerptAr:
      'مقارنة عملية بين النظام الحديث على هيكل معدني والجبس التقليدي: سرعة، مرونة تصميم، وإخفاء تمديدات.',
    excerptEn:
      'A practical comparison of modern metal-framed board systems and traditional plaster: speed, design flexibility, and hiding services.',
    contentAr: [
      'الجبس بورد يعتمد على ألواح وهيكل معدني، ويناسب الأسقف المعلقة والقواطع والإضاءة المخفية بسرعة نسبية.',
      'الجبس البلدي أو التقليدي مختلف في طريقة التنفيذ والمرونة وسرعة التعديل حسب المشروع والفني.',
      'لو هدفك مستويات وإضاءة مخفية وتقسيم خفيف، الجبس بورد غالبًا أوضح كحل تشطيب حديث.',
      'الاختيار النهائي حسب التصميم والمكان والميزانية — راجع الدليل على ساعدني.',
    ],
    contentEn: [
      'Gypsum board uses panels on metal framing and suits suspended ceilings, partitions, and hidden lighting with relative speed.',
      'Traditional plaster differs in method, flexibility, and how easily changes are made depending on the project and crew.',
      'If you want levels, cove lighting, and light partitions, gypsum board is often the clearer modern finishing option.',
      'Final choice depends on design, room, and budget — review Saedni’s guide.',
    ],
    publishedAt: '2026-11-26',
    readMinutes: 4,
    image: '/images/hero/hero-10-gypsum.jpg',
  },
  {
    slug: 'choose-gypsum-board-installer',
    serviceSlug: 'gypsum-board',
    titleAr: 'كيفية اختيار فني جبس بورد مناسب',
    titleEn: 'How to choose a suitable gypsum board installer',
    excerptAr:
      'أسئلة عن نوع الألواح والهيكل والفتحات والتدعيم والضمان — قبل ما تعتمد على السعر فقط.',
    excerptEn:
      'Questions on board type, framing, openings, support, and warranty — before you decide on price alone.',
    contentAr: [
      'اسأل عن نوع الألواح والسماكة ومواصفات الهيكل المعدني، وهل السعر يشمل المعجون والفواصل.',
      'وضّح فتحات الإضاءة وتدعيم الوحدات الثقيلة، والتنسيق مع الكهربائي قبل إغلاق السقف.',
      'اطلب توضيح ما يشمله الاتفاق وما لا يشمله، ويفضّل ضمان مكتوب على التنفيذ.',
      'قائمة الأسئلة الكاملة في دليل الجبس بورد على ساعدني.',
    ],
    contentEn: [
      'Ask about board type, thickness, and metal framing specs, and whether price includes putty and joint treatment.',
      'Clarify light openings, support for heavier fittings, and coordination with the electrician before closing the ceiling.',
      'Get included and excluded items in writing, preferably with a written workmanship warranty.',
      'The full question list is in Saedni’s gypsum board guide.',
    ],
    publishedAt: '2026-11-26',
    readMinutes: 4,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'small-apartment-gypsum-ceiling-ideas',
    serviceSlug: 'gypsum-board',
    titleAr: 'تصميمات أسقف جبس بورد للشقق الصغيرة',
    titleEn: 'Gypsum ceiling ideas for small apartments',
    excerptAr:
      'نصائح لأسقف بسيطة أو بمستوى خفيف وبيت نور بدون تقليل ارتفاع الغرفة أكثر من اللازم.',
    excerptEn:
      'Tips for simple or lightly layered ceilings with cove lighting without dropping room height more than needed.',
    contentAr: [
      'في الشقق الصغيرة، التصميم البسيط أو المستوى الخفيف مع إضاءة مخفية غالبًا أنظف من التفاصيل الكثيرة.',
      'كل انخفاض في السقف يخصم من الإحساس بالمساحة — فاتفق على المناسيب قبل التركيب.',
      'وزّع فتحات الإضاءة مع الكهربائي مبكرًا، واختر لوحًا مناسبًا لو الغرفة قريبة من رطوبة.',
      'راجع مراحل التنفيذ في دليل الجبس بورد على ساعدني قبل ما تبدأ.',
    ],
    contentEn: [
      'In small apartments, a simple or lightly layered ceiling with cove lighting often looks cleaner than heavy detail.',
      'Every ceiling drop reduces the sense of space — agree levels before install.',
      'Plan light openings with the electrician early, and pick a suitable board if the room has humidity risk.',
      'Review stages in Saedni’s gypsum board guide before you start.',
    ],
    publishedAt: '2026-11-27',
    readMinutes: 4,
    image: '/images/hero/hero-10-gypsum-desktop.jpg',
  },
  {
    slug: 'gypsum-board-riyadh-guide',
    serviceSlug: 'gypsum-board',
    citySlug: 'riyadh',
    titleAr: 'تركيب الجبس بورد في الرياض: ما الذي يجب معرفته؟',
    titleEn: 'Gypsum board in Riyadh: what you should know',
    excerptAr:
      'نقاط لأصحاب المنازل في الرياض حول نوع الألواح، المناسيب، التنسيق مع الكهرباء، والأسئلة قبل الاتفاق.',
    excerptEn:
      'Points for Riyadh homeowners on board type, levels, electrical coordination, and questions before agreeing.',
    contentAr: [
      'في الرياض طلب الأسقف والقواطع مرتفع في التشطيب والتجديد. ثبّت التصميم والمناسيب وفتحات الإضاءة قبل الهيكل.',
      'اسأل عن نوع اللوح — خصوصًا قرب المطابخ — ومواصفات الهيكل والتدعيم لوحدات الإضاءة.',
      'لا تغلق السقف قبل التأكد من سلامة التمديدات داخله والتنسيق مع الكهربائي.',
      'استخدم دليل الجبس بورد على ساعدني قبل التنفيذ في الرياض.',
    ],
    contentEn: [
      'In Riyadh, ceilings and partitions are common in finishing and renovation. Lock design, levels, and light openings before framing.',
      'Ask about board type — especially near kitchens — framing specs, and support for light fittings.',
      'Do not close the ceiling before services inside are verified and coordinated with the electrician.',
      'Use Saedni’s gypsum board guide before work in Riyadh.',
    ],
    publishedAt: '2026-11-27',
    readMinutes: 5,
    image: '/images/hero/hero-10-gypsum-desktop.jpg',
  },
  {
    slug: 'gypsum-board-jeddah-dammam',
    serviceSlug: 'gypsum-board',
    citySlug: 'jeddah',
    titleAr: 'الجبس بورد في جدة: نصائح قبل تركيب الأسقف والقواطع',
    titleEn: 'Gypsum board in Jeddah: tips before ceilings and partitions',
    excerptAr:
      'مراعاة الرطوبة واختيار الألواح المناسبة والتنسيق مع الإضاءة قبل بدء شغل الجبس بورد في جدة.',
    excerptEn:
      'Humidity, suitable boards, and lighting coordination before gypsum board work starts in Jeddah.',
    contentAr: [
      'في جدة، الرطوبة عامل مهم — خصوصًا المطابخ والحمامات والمناطق قليلة التهوية. اختر نوع اللوح حسب المواصفات وليس الوصف العام.',
      'اتفق على المناسيب وفتحات الإضاءة والتدعيم، وهل السعر يشمل المعجون والفواصل.',
      'ألواح معالجة الرطوبة تساعد، لكنها ليست بديلًا عن العزل أو الحماية من المياه المباشرة.',
      'راجع دليل الجبس بورد على ساعدني قبل الاتفاق في جدة.',
    ],
    contentEn: [
      'In Jeddah, humidity matters — especially kitchens, bathrooms, and poorly ventilated rooms. Choose board type by specs, not vague marketing.',
      'Agree levels, light openings, support, and whether price includes putty and joint treatment.',
      'Moisture-treated boards help, but they are not a substitute for waterproofing or direct water protection.',
      'Review Saedni’s gypsum board guide before agreeing in Jeddah.',
    ],
    publishedAt: '2026-11-27',
    readMinutes: 4,
    image: '/images/hero/hero-10-gypsum.jpg',
  },
  {
    slug: 'best-roof-waterproofing-types',
    serviceSlug: 'waterproofing',
    titleAr: 'أفضل أنواع العزل المائي للأسطح',
    titleEn: 'Common roof waterproofing types explained',
    excerptAr:
      'شرح عملي لأنظمة عزل الأسطح الشائعة، ولماذا اختيار المادة يعتمد على حالة السطح وظروف الاستخدام مش الاسم التسويقي.',
    excerptEn:
      'A practical look at common roof waterproofing systems — and why material choice depends on substrate and use, not marketing names.',
    contentAr: [
      'عزل الأسطح يتنوع بين لفائف بيتومينية ومواد سائلة وأغشية وأنظمة أسمنتية — والاختيار بعد فحص السطح ومصدر المياه.',
      'الجودة مش في اسم المادة فقط: تجهيز السطح ومعالجة الشروخ والالتزام بالسماكة والطبقات أهم.',
      'بعد التطبيق، الاختبار المناسب وحماية الطبقة أثناء التشطيب يقللان فشل النظام لاحقًا.',
      'راجع دليل العزل على ساعدني قبل الاتفاق على أي نظام.',
    ],
    contentEn: [
      'Roof waterproofing ranges from bituminous membranes to liquid systems, sheets, and cementitious systems — choose after inspecting the substrate and water source.',
      'Quality is not the brand name alone: prep, crack treatment, and correct thickness/layers matter more.',
      'After application, suitable testing and protecting the layer during finishing reduce later failure.',
      'Review Saedni’s waterproofing guide before agreeing any system.',
    ],
    publishedAt: '2026-11-28',
    readMinutes: 5,
    image: '/images/hero/hero-04-waterproofing-desktop.jpg',
  },
  {
    slug: 'bituminous-vs-cementitious-waterproofing',
    serviceSlug: 'waterproofing',
    titleAr: 'الفرق بين العزل البيتوميني والعزل الأسمنتي',
    titleEn: 'Bituminous vs cementitious waterproofing',
    excerptAr:
      'متى يناسب كل نظام؟ مقارنة مبسطة تساعدك تسأل عن المادة المناسبة لمكان الاستخدام قبل التعاقد.',
    excerptEn:
      'When does each system fit? A simple comparison so you can ask for the right material for the location before contracting.',
    contentAr: [
      'العزل البيتوميني شائع في كثير من أعمال الأسطح بلفائف أو أنظمة مرتبطة، بينما العزل الأسمنتي يُستخدم في تطبيقات تناسب طبيعته وخصائص التصاقه بالخرسانة.',
      'لا يوجد نظام أفضل في كل الحالات: السطح، التعرض للشمس والمياه، والحركة والفواصل تغيّر الاختيار.',
      'اسأل عن اسم المادة والمواصفات وعدد الطبقات والسماكة وطريقة الاختبار بعد التنفيذ.',
      'التفاصيل الأوسع في دليل العزل والعزل المائي على ساعدني.',
    ],
    contentEn: [
      'Bituminous systems are common on many roofs as membranes or related systems, while cementitious systems suit applications where their bond to concrete fits the job.',
      'No system is best everywhere: substrate, sun and water exposure, movement, and joints change the choice.',
      'Ask for product name, specs, coat count, thickness, and post-install test method.',
      'More detail is in Saedni’s waterproofing guide.',
    ],
    publishedAt: '2026-11-28',
    readMinutes: 4,
    image: '/images/hero/hero-04-waterproofing.jpg',
  },
  {
    slug: 'bathroom-waterproofing-before-tiles',
    serviceSlug: 'waterproofing',
    titleAr: 'خطوات عزل الحمامات قبل تركيب السيراميك',
    titleEn: 'Bathroom waterproofing steps before tiling',
    excerptAr:
      'من تنظيف السطح ومعالجة الزوايا حتى الاختبار قبل البلاط: تسلسل يقلل تسرب الحمامات لاحقًا.',
    excerptEn:
      'From cleaning and corner treatment to testing before tiles: a sequence that reduces later bathroom leaks.',
    contentAr: [
      'قبل السيراميك، نظّف السطح وعالج الشروخ والفواصل والزوايا — أكثر نقاط التسرب تبدأ من هنا.',
      'طبّق نظام العزل المناسب للحمام، والتزم بعدد الطبقات والجفاف حسب تعليمات المنتج.',
      'اختبر العزل بطريقة مناسبة قبل تركيب البلاط، واحمِ الطبقة أثناء التركيب حتى لا تتلف.',
      'راجع دليل العزل وربط السيراميك على ساعدني قبل ما تبدأ.',
    ],
    contentEn: [
      'Before ceramic, clean the substrate and treat cracks, joints, and corners — many leaks start there.',
      'Apply a bathroom-suitable system and follow coat count and curing per product guidance.',
      'Test waterproofing suitably before tiling, and protect the layer during install so it is not damaged.',
      'Review Saedni’s waterproofing and tiling guides before you start.',
    ],
    publishedAt: '2026-11-28',
    readMinutes: 5,
    image: '/images/hero/hero-03-tiling-desktop.jpg',
  },
  {
    slug: 'why-roof-waterproofing-fails',
    serviceSlug: 'waterproofing',
    titleAr: 'أسباب فشل عزل الأسطح',
    titleEn: 'Why roof waterproofing fails',
    excerptAr:
      'سطح غير نظيف، طبقات ناقصة، شروخ مهملة، أو إتلاف الطبقة أثناء التشطيب — أسباب شائعة لفشل العزل.',
    excerptEn:
      'Dirty substrate, incomplete layers, ignored cracks, or damaging the membrane during finishing — common waterproofing failure causes.',
    contentAr: [
      'العزل فوق سطح متسخ أو به شروخ غير معالجة من أكثر أسباب الفشل المبكر.',
      'عدم الالتزام بالسماكة والطبقات، أو التشطيب قبل اكتمال الجفاف، يضعف النظام حتى لو المادة جيدة.',
      'إتلاف طبقة العزل أثناء أعمال لاحقة بدون حماية كافية يعيد التسرب بسرعة.',
      'حدد مصدر المياه واختبر بعد التنفيذ. قائمة الأخطاء في دليل العزل على ساعدني.',
    ],
    contentEn: [
      'Waterproofing over a dirty substrate or untreated cracks is a top cause of early failure.',
      'Skipping thickness and coats, or finishing before curing ends, weakens even a good product.',
      'Damaging the membrane during later works without protection brings leaks back quickly.',
      'Identify the water source and test after install. The mistakes list is in Saedni’s waterproofing guide.',
    ],
    publishedAt: '2026-11-29',
    readMinutes: 4,
    image: '/images/hero/hero-14-leak-desktop.jpg',
  },
  {
    slug: 'waterproofing-riyadh-roofs',
    serviceSlug: 'waterproofing',
    citySlug: 'riyadh',
    titleAr: 'عزل الأسطح في الرياض: ما الذي يجب معرفته؟',
    titleEn: 'Roof waterproofing in Riyadh: what to know',
    excerptAr:
      'نصائح لأصحاب المنازل في الرياض حول معاينة السطح، اختيار المادة، الاختبار، وحماية العزل قبل التشطيب.',
    excerptEn:
      'Tips for Riyadh homeowners on roof survey, material choice, testing, and protecting waterproofing before finishing.',
    contentAr: [
      'في الرياض، أسطح الفلل والعمائر تحتاج عزلًا واضح المصدر والمادة. ابدأ بمعاينة وتحديد إن كانت المشكلة تسربًا أو تلف طبقة قديمة.',
      'اسأل عن مواصفات المادة وعدد الطبقات والاختبار بعد التنفيذ ومدة الضمان المكتوبة.',
      'احمِ طبقة العزل أثناء أي أعمال لاحقة حتى لا تُتلف بالخطأ.',
      'راجع دليل العزل على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, villa and building roofs need a clear diagnosis and material plan. Start with a survey and whether the issue is a leak or failed old layers.',
      'Ask for material specs, coat count, post-install testing, and written warranty terms.',
      'Protect the waterproofing layer during later works so it is not damaged by accident.',
      'Review Saedni’s waterproofing guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-11-29',
    readMinutes: 5,
    image: '/images/hero/hero-04-waterproofing-desktop.jpg',
  },
  {
    slug: 'waterproofing-jeddah-dammam',
    serviceSlug: 'waterproofing',
    citySlug: 'jeddah',
    titleAr: 'العزل المائي في جدة: نصائح قبل عزل الأسطح والحمامات',
    titleEn: 'Waterproofing in Jeddah: tips before roofs and bathrooms',
    excerptAr:
      'الرطوبة والأمطار عاملان مهمان في جدة — كيف تختار النظام وتختبره قبل البلاط أو تشطيب السطح.',
    excerptEn:
      'Humidity and rain matter in Jeddah — how to choose and test a system before tiling or roof finishing.',
    contentAr: [
      'في جدة، الرطوبة تزيد أهمية تجهيز السطح واختيار مادة مناسبة وعدم الاكتفاء بالدهان كحل للرطوبة.',
      'في الحمامات لا تركّب البلاط قبل اختبار العزل ومعالجة الزوايا والفواصل.',
      'اتفق على التجهيز وعدد الطبقات والاختبار والضمان قبل التنفيذ.',
      'استخدم دليل العزل والعزل المائي على ساعدني قبل ما تبدأ في جدة.',
    ],
    contentEn: [
      'In Jeddah, humidity makes substrate prep and suitable material choice more important — paint alone is not a damp solution.',
      'In bathrooms, do not tile before testing waterproofing and treating corners and joints.',
      'Agree prep, coat count, testing, and warranty before work starts.',
      'Use Saedni’s waterproofing guide before you start in Jeddah.',
    ],
    publishedAt: '2026-11-29',
    readMinutes: 4,
    image: '/images/hero/hero-04-waterproofing.jpg',
  },
  {
    slug: 'signs-your-home-needs-renovation',
    serviceSlug: 'renovation',
    titleAr: 'علامات تدل على حاجة المنزل إلى الترميم',
    titleEn: 'Signs your home needs renovation or repair',
    excerptAr:
      'شروخ، رطوبة، تلف أرضيات، أو تمديدات قديمة: علامات تساعدك تقرر إن كان البيت يحتاج ترميمًا قبل ما يتفاقم الضرر.',
    excerptEn:
      'Cracks, damp, damaged floors, or old services: signs that help you decide if the home needs repair before damage grows.',
    contentAr: [
      'ظهور شروخ متزايدة، تقشير دهان مع رطوبة، أو تلف متكرر في الأرضيات والحمامات مؤشرات تستدعي معاينة.',
      'تكرار أعطال السباكة والكهرباء، أو رائحة رطوبة مستمرة، غالبًا تعني مشكلة أعمق من تشطيب سطحي.',
      'لا تبدأ بالدهان أو التغطية قبل معرفة السبب — خصوصًا الرطوبة والشروخ.',
      'راجع دليل الترميم والتجديد على ساعدني قبل ما ترتب الأولويات.',
    ],
    contentEn: [
      'Growing cracks, peeling paint with damp, or repeated floor and bathroom damage are signs you need a survey.',
      'Recurring plumbing/electrical faults or persistent damp smell often mean a deeper issue than surface finishing.',
      'Do not start with paint or cover-ups before finding the cause — especially damp and cracks.',
      'Review Saedni’s renovation guide before you set priorities.',
    ],
    publishedAt: '2026-11-30',
    readMinutes: 4,
    image: '/images/hero/hero-15-renovation-desktop.jpg',
  },
  {
    slug: 'repair-vs-full-refinish-apartment',
    serviceSlug: 'renovation',
    titleAr: 'الفرق بين ترميم الشقة وإعادة التشطيب',
    titleEn: 'Apartment repair vs full re-finishing',
    excerptAr:
      'متى يكفي إصلاح التلفيات، ومتى يكون التجديد الشامل أوضح من ناحية التكلفة والنتيجة؟',
    excerptEn:
      'When targeted repair is enough, and when a fuller refresh is clearer for cost and outcome.',
    contentAr: [
      'الترميم يركز على إصلاح المتضرر. إعادة التشطيب تحدّث الشكل والتمديدات بشكل أوسع حسب النطاق.',
      'لو التشطيبات والتمديدات ضعيفة في أكثر من منطقة، التجديد المرحّل أو الأشمل قد يكون أوفر من إصلاحات متكررة.',
      'لو الضرر محدود في حمام أو غرفة، ابدأ بنطاق واضح بدل فتح المشروع كله.',
      'قارن الخيارات عبر دليل الترميم ودليل تشطيب الشقق على ساعدني.',
    ],
    contentEn: [
      'Repair focuses on damaged parts. Full re-finishing updates look and services more broadly depending on scope.',
      'If finishes and services are weak across several areas, staged or fuller refresh may cost less than repeated patching.',
      'If damage is limited to one bathroom or room, start with a clear narrow scope instead of opening the whole project.',
      'Compare options via Saedni’s renovation and apartment finishing guides.',
    ],
    publishedAt: '2026-11-30',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'wall-cracks-causes-before-repair',
    serviceSlug: 'renovation',
    titleAr: 'أسباب ظهور الشروخ في الجدران',
    titleEn: 'Why wall cracks appear before you repair them',
    excerptAr:
      'قبل ما تعالج الشرخ بالمعجون: افهم إن كان سطحيًا أو يحتاج تقييمًا — عشان ما تخفي المشكلة.',
    excerptEn:
      'Before filling a crack with putty: understand if it is surface-level or needs assessment — so you do not hide the problem.',
    contentAr: [
      'بعض الشروخ سطحية بسبب الجفاف أو حركة تشطيب، وبعضها يحتاج تقييمًا إذا كانت متزايدة أو مرتبطة بأبواب ونوافذ أو عناصر إنشائية.',
      'إخفاء الشرخ بلا معرفة السبب قد يعيده بعد الدهان بفترة قصيرة.',
      'عند الشك، استشر مختصًا قبل إزالة حوائط أو تعديل عناصر إنشائية.',
      'خطوات الترميم الصحيحة في دليل الترميم والتجديد على ساعدني.',
    ],
    contentEn: [
      'Some cracks are surface-level from drying or finish movement; others need assessment if they grow or relate to doors, windows, or structural elements.',
      'Hiding a crack without knowing the cause often brings it back soon after paint.',
      'When unsure, consult a specialist before removing walls or changing structural elements.',
      'Correct renovation steps are in Saedni’s renovation guide.',
    ],
    publishedAt: '2026-11-30',
    readMinutes: 4,
    image: '/images/hero/hero-15-renovation.jpg',
  },
  {
    slug: 'renovation-work-order',
    serviceSlug: 'renovation',
    titleAr: 'ترتيب أعمال الترميم والتجديد',
    titleEn: 'The right order for renovation works',
    excerptAr:
      'من المعاينة ومعالجة الأسباب إلى التأسيس ثم التشطيب: ترتيب يقلل التكسير وإعادة الشغل.',
    excerptEn:
      'From survey and cause treatment to rough-in then finishes: an order that reduces demolition and rework.',
    contentAr: [
      'ابدأ بالمعاينة وتحديد السبب — خصوصًا الرطوبة — قبل أي دهان أو تغطية.',
      'بعد الإصلاحات الأساسية تأتي السباكة والكهرباء والاختبارات، ثم المحارة والعزل، وبعدها الأرضيات والدهانات والتركيبات.',
      'حماية الأثاث وإزالة المخلفات جزء من الاتفاق، مش تفصيل جانبي.',
      'راجع مراحل التنفيذ في دليل الترميم على ساعدني.',
    ],
    contentEn: [
      'Start with survey and cause — especially damp — before any paint or cover-up.',
      'After core repairs come plumbing/electrical and testing, then plaster and waterproofing, then floors, paint, and fittings.',
      'Furniture protection and debris removal belong in the agreement, not as side notes.',
      'Review stages in Saedni’s renovation guide.',
    ],
    publishedAt: '2026-12-01',
    readMinutes: 5,
    image: '/images/hero/hero-11-contracting-desktop.jpg',
  },
  {
    slug: 'home-renovation-riyadh',
    serviceSlug: 'renovation',
    citySlug: 'riyadh',
    titleAr: 'ترميم المنازل والشقق في الرياض: من أين تبدأ؟',
    titleEn: 'Home and apartment renovation in Riyadh: where to start',
    excerptAr:
      'خطوات لأصحاب العقارات في الرياض: معاينة، أولويات، نطاق وتكلفة، وترتيب المراحل قبل التنفيذ.',
    excerptEn:
      'Steps for Riyadh property owners: survey, priorities, scope and cost, and stage order before work starts.',
    contentAr: [
      'في الرياض كثير من الطلبات تكون تجهيز قبل السكن أو التأجير. ابدأ بمعاينة واضحة للتلفيات والرطوبة والتمديدات.',
      'فرّق بين ما يحتاج ترميمًا وما يحتاج تجديدًا، واكتب نطاقًا وتكلفة قبل الدفعات الكبيرة.',
      'لو في شروخ أو تعديل مساحات، راجع السلامة مع مختص قبل التنفيذ.',
      'استخدم دليل الترميم والتجديد على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh many requests are prep before living or renting. Start with a clear survey of damage, damp, and services.',
      'Separate repair from refresh work, and write scope and cost before large payments.',
      'If there are cracks or layout changes, review safety with a specialist before execution.',
      'Use Saedni’s renovation guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-01',
    readMinutes: 5,
    image: '/images/hero/hero-15-renovation-desktop.jpg',
  },
  {
    slug: 'renovation-jeddah-homes',
    serviceSlug: 'renovation',
    citySlug: 'jeddah',
    titleAr: 'تجديد المنازل في جدة: نصائح قبل بدء الترميم',
    titleEn: 'Home renovation in Jeddah: tips before repair starts',
    excerptAr:
      'الرطوبة والتسربات عامل مهم في جدة — كيف ترتب الترميم بدون ما تغطي المشكلة بالدهان فقط.',
    excerptEn:
      'Humidity and leaks matter in Jeddah — how to sequence renovation without covering problems with paint alone.',
    contentAr: [
      'في جدة، عالج مصدر الرطوبة والتسرب قبل الدهانات والتشطيبات السطحية.',
      'افحص السباكة والكهرباء القديمة لو العقار قديم، واتفق على إزالة المخلفات ضمن السعر.',
      'حدد إن كان المشروع ترميمًا محدودًا أو تجديدًا أوسع، مع جدول واقعي.',
      'راجع دليل الترميم والتجديد على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, treat damp and leak sources before paint and surface finishes.',
      'Inspect old plumbing and electrical if the property is aged, and include debris removal in the price.',
      'Decide whether the project is limited repair or a wider refresh, with a realistic schedule.',
      'Review Saedni’s renovation guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-01',
    readMinutes: 4,
    image: '/images/hero/hero-15-renovation.jpg',
  },
  {
    slug: 'causes-of-wall-water-leaks',
    serviceSlug: 'plumbing',
    titleAr: 'أسباب تسرب المياه داخل الجدران',
    titleEn: 'Causes of water leaks inside walls',
    excerptAr:
      'وصلات ضعيفة، مواسير تالفة، أو ضغط غير مضبوط: أسباب شائعة لتسرب مخفي — وعلامات تساعدك تطلب فحصًا مبكرًا.',
    excerptEn:
      'Weak joints, damaged pipes, or pressure issues: common hidden-leak causes — and signs that help you ask for an early check.',
    contentAr: [
      'التسرب داخل الجدران قد يبدأ من وصلة غير محكمة أو ماسورة تالفة أو ضغط غير مناسب على الشبكة.',
      'علامات مبكرة: بقع رطوبة، ارتفاع فاتورة المياه، أو صوت تدفق دون استخدام.',
      'لا تؤجل الإصلاح الصغير؛ التسرب المخفي يكلف تشطيبًا أكثر لاحقًا.',
      'راجع دليل السباكة على ساعدني، واربط مع كشف التسربات عند الحاجة.',
    ],
    contentEn: [
      'In-wall leaks can start from a loose joint, damaged pipe, or unsuitable pressure on the network.',
      'Early signs: damp patches, higher water bills, or flow noise without use.',
      'Do not delay small repairs; hidden leaks cost more finishing later.',
      'Review Saedni’s plumbing guide, and link leak detection when needed.',
    ],
    publishedAt: '2026-12-02',
    readMinutes: 4,
    image: '/images/hero/hero-14-leak-desktop.jpg',
  },
  {
    slug: 'signs-of-failing-plumbing-pipes',
    serviceSlug: 'plumbing',
    titleAr: 'علامات تلف مواسير السباكة',
    titleEn: 'Signs plumbing pipes are failing',
    excerptAr:
      'تكرار التسرب، تغير لون المياه، ضعف ضغط، أو تلف ظاهر: مؤشرات قد تعني أن الشبكة تحتاج صيانة أو استبدال.',
    excerptEn:
      'Repeat leaks, water discoloration, low pressure, or visible damage: signs the network may need repair or replacement.',
    contentAr: [
      'تكرار الأعطال في نفس المسار، أو تآكل ظاهر، أو ضعف ضغط مستمر بعد تنظيف الفلاتر، مؤشرات تستحق فحص الشبكة.',
      'تأجيل الاستبدال عند التلف الواضح يزيد التكسير والتشطيب لاحقًا.',
      'اسأل عن نوع المواسير ونتائج الاختبار قبل إغلاق الحوائط في التأسيس الجديد.',
      'التفاصيل في دليل السباكة على ساعدني.',
    ],
    contentEn: [
      'Repeat faults on the same run, visible corrosion, or ongoing low pressure after filter cleaning are reasons to inspect the network.',
      'Delaying replacement when damage is clear often means more demolition and finishing later.',
      'Ask about pipe type and test results before closing walls on new rough-in.',
      'More detail is in Saedni’s plumbing guide.',
    ],
    publishedAt: '2026-12-02',
    readMinutes: 4,
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'water-pipe-types-and-uses',
    serviceSlug: 'plumbing',
    titleAr: 'أنواع مواسير المياه واستخداماتها',
    titleEn: 'Water pipe types and common uses',
    excerptAr:
      'اختيار الماسورة المناسبة يعتمد على الاستخدام والمواصفات — مش على اسم عام. أسئلة تسألها قبل التأسيس.',
    excerptEn:
      'Choosing the right pipe depends on use and specs — not a generic name. Questions to ask before rough-in.',
    contentAr: [
      'مواسير المياه تختلف في المادة والمقاس وملاءمة الضغط والاستخدام الساخن/البارد حسب المنتج والمواصفات.',
      'قبل التأسيس اسأل عن النوع والوصلات وأماكن المحابس ونقاط الصيانة.',
      'الاختبار قبل إغلاق التشطيبات خطوة أساسية مهما كان نوع الماسورة.',
      'راجع دليل السباكة على ساعدني قبل الاتفاق على الخامات.',
    ],
    contentEn: [
      'Water pipes differ by material, size, and suitability for pressure and hot/cold use depending on product specs.',
      'Before rough-in, ask about type, fittings, valve locations, and maintenance access.',
      'Testing before closing finishes is essential whatever the pipe type.',
      'Review Saedni’s plumbing guide before agreeing materials.',
    ],
    publishedAt: '2026-12-02',
    readMinutes: 5,
    image: '/images/hero/hero-01-plumbing.jpg',
  },
  {
    slug: 'drain-blockage-causes',
    serviceSlug: 'plumbing',
    titleAr: 'أسباب انسداد مواسير الصرف',
    titleEn: 'Common causes of drain blockages',
    excerptAr:
      'تراكم، ميول خاطئة، أو استخدام خاطئ: أسباب شائعة للانسداد — ومتى تحتاج تسليكًا أو فحصًا أعمق.',
    excerptEn:
      'Build-up, wrong slopes, or misuse: common blockage causes — and when you need clearing or a deeper check.',
    contentAr: [
      'الانسداد قد ينتج عن تراكم الدهون والبقايا، أو ميول صرف غير صحيحة، أو تلف في المسار.',
      'مواد التسليك القاسية قد تضر بعض المواسير؛ اسأل عن الطريقة المناسبة قبل الاستخدام المتكرر.',
      'لو الانسداد يتكرر، افحص السبب بدل التسليك السطحي فقط.',
      'خطوات الجودة في دليل السباكة على ساعدني.',
    ],
    contentEn: [
      'Blockages can come from grease and debris build-up, wrong drainage slopes, or damage along the run.',
      'Harsh clearing chemicals can harm some pipes; ask for a suitable method before repeated use.',
      'If blockages repeat, inspect the cause instead of surface clearing only.',
      'Quality steps are in Saedni’s plumbing guide.',
    ],
    publishedAt: '2026-12-03',
    readMinutes: 4,
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'plumbing-services-riyadh',
    serviceSlug: 'plumbing',
    citySlug: 'riyadh',
    titleAr: 'خدمات السباكة في الرياض: ما الذي يجب معرفته قبل الصيانة؟',
    titleEn: 'Plumbing in Riyadh: what to know before maintenance',
    excerptAr:
      'نصائح لأصحاب المنازل في الرياض حول التسربات، الاختبار قبل التشطيب، والأسئلة قبل الاتفاق مع السباك.',
    excerptEn:
      'Tips for Riyadh homeowners on leaks, testing before finishing, and questions before hiring a plumber.',
    contentAr: [
      'في الرياض، كثير من الطلبات إصلاح تسرب أو تأسيس أثناء التشطيب. اسأل عن نوع المواسير وهل سيتم اختبار الشبكة قبل الإغلاق.',
      'حدّد إن كان السعر يشمل الخامات والتركيب وإصلاح التشطيب بعد التكسير إن لزم.',
      'لا تؤجل التسرب الصغير؛ الرطوبة تنتشر في الجدران بسرعة.',
      'راجع دليل السباكة على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, many requests are leak repair or rough-in during finishing. Ask about pipe type and whether the network will be tested before closing.',
      'Clarify whether price includes materials, install, and finish repair after demolition if needed.',
      'Do not delay a small leak; damp spreads through walls quickly.',
      'Review Saedni’s plumbing guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-03',
    readMinutes: 5,
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'plumbing-jeddah-guide',
    serviceSlug: 'plumbing',
    citySlug: 'jeddah',
    titleAr: 'السباكة في جدة: نصائح قبل إصلاح التسربات والصرف',
    titleEn: 'Plumbing in Jeddah: tips before leak and drain repairs',
    excerptAr:
      'كيف تتعامل مع التسرب والانسداد وضعف الضغط في جدة، وما الذي تسأله قبل فتح الحوائط.',
    excerptEn:
      'How to handle leaks, blockages, and low pressure in Jeddah — and what to ask before opening walls.',
    contentAr: [
      'في جدة، التسرب والرطوبة يظهران بسرعة على التشطيبات. اطلب تحديد السبب قبل التكسير الواسع إن أمكن.',
      'اسأل عن الاختبار بعد الإصلاح، وأماكن المحابس، وهل إصلاح التشطيب مشمول.',
      'للانسداد المتكرر لا تعتمد على تسليك مؤقت فقط — راجع الميول والمسار.',
      'استخدم دليل السباكة على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, leaks and damp show quickly on finishes. Ask to identify the cause before wide demolition when possible.',
      'Ask about post-repair testing, valve locations, and whether finish repair is included.',
      'For repeat blockages, do not rely on temporary clearing alone — check slopes and the run.',
      'Use Saedni’s plumbing guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-03',
    readMinutes: 4,
    image: '/images/hero/hero-01-plumbing.jpg',
  },
  {
    slug: 'why-breaker-keeps-tripping',
    serviceSlug: 'electrical',
    titleAr: 'أسباب فصل القاطع الكهربائي باستمرار',
    titleEn: 'Why a circuit breaker keeps tripping',
    excerptAr:
      'حمل زائد، قصر، جهاز معطل، أو قاطع تالف: أسباب شائعة — ولماذا الفحص المؤهل أهم من إعادة التشغيل المتكرر.',
    excerptEn:
      'Overload, short, faulty appliance, or a bad breaker: common causes — and why a qualified check beats repeated resets.',
    contentAr: [
      'فصل القاطع المتكرر إشارة حماية، مش مجرد إزعاج. إعادة التشغيل بدون فحص قد تخفي مشكلة أخطر.',
      'الأسباب الشائعة تشمل حملًا زائدًا على الدائرة، قصرًا، عطل جهاز، أو قاطع غير مناسب أو تالف.',
      'اطلب فنيًا مؤهلًا يحدد السبب قبل تغيير القاطع عشوائيًا أو زيادة الأحمال.',
      'راجع دليل الصيانة الكهربائية على ساعدني قبل الاتفاق.',
    ],
    contentEn: [
      'Repeated tripping is a protection signal, not just a nuisance. Resetting without diagnosis can hide a bigger risk.',
      'Common causes include circuit overload, a short, a faulty appliance, or an unsuitable or damaged breaker.',
      'Ask a qualified technician to identify the cause before randomly replacing the breaker or adding loads.',
      'Review Saedni’s electrical maintenance guide before you agree.',
    ],
    publishedAt: '2026-12-04',
    readMinutes: 4,
    image: '/images/hero/hero-05-electrical-desktop.jpg',
  },
  {
    slug: 'signs-of-damaged-electrical-wiring',
    serviceSlug: 'electrical',
    titleAr: 'علامات تلف الأسلاك الكهربائية',
    titleEn: 'Signs of damaged electrical wiring',
    excerptAr:
      'سخونة، احتراق، انقطاع متكرر، أو ومضات: علامات تستدعي فحصًا — بدون لمس أجزاء مكشوفة.',
    excerptEn:
      'Heat, burning smell, repeat outages, or flickering: signs that need inspection — without touching exposed parts.',
    contentAr: [
      'سخونة المقابس، رائحة احتراق، ومض إنارة، أو انقطاع متكرر قد تشير إلى توصيلات أو أسلاك تالفة.',
      'توقف عن استخدام الجزء المشكوك فيه وافصل الدائرة إن أمكن بأمان، ثم اطلب فنيًا مؤهلًا.',
      'لا تعتمد على وصلات عشوائية أو تمديدات مؤقتة كحل دائم.',
      'علامات الجودة والأسئلة قبل الاتفاق في دليل الكهرباء على ساعدني.',
    ],
    contentEn: [
      'Hot outlets, burning smell, flickering lights, or repeat outages can point to damaged wiring or connections.',
      'Stop using the suspect part and isolate the circuit if safely possible, then call a qualified technician.',
      'Do not treat improvised joints or temporary extensions as a permanent fix.',
      'Quality signs and pre-hire questions are in Saedni’s electrical guide.',
    ],
    publishedAt: '2026-12-04',
    readMinutes: 4,
    image: '/images/hero/hero-05-electrical.jpg',
  },
  {
    slug: 'importance-of-home-earthing',
    serviceSlug: 'electrical',
    titleAr: 'أهمية التأريض في المنازل',
    titleEn: 'Why home earthing matters',
    excerptAr:
      'التأريض جزء من الحماية المنزلية. ماذا تسأل الفني عند الفحص، ومتى تستدعي الأعطال مراجعة النظام.',
    excerptEn:
      'Earthing is part of home protection. What to ask a technician during inspection, and when faults call for a system review.',
    contentAr: [
      'التأريض ووسائل الحماية تساعد على تقليل مخاطر الأعطال عند تنفيذها وفحصها بشكل صحيح.',
      'عند الصيانة أو التأسيس، اسأل إن كان الفحص يشمل التأريض وملاءمة القواطع للأحمال.',
      'العقارات القديمة أو بعد تعديلات عشوائية أولى بالفحص المؤهل.',
      'راجع دليل الصيانة الكهربائية على ساعدني.',
    ],
    contentEn: [
      'Earthing and protection devices help reduce fault risks when installed and checked correctly.',
      'During maintenance or rough-in, ask whether inspection includes earthing and breaker suitability for loads.',
      'Older properties or homes with improvised changes especially need a qualified check.',
      'Review Saedni’s electrical maintenance guide.',
    ],
    publishedAt: '2026-12-04',
    readMinutes: 4,
    image: '/images/hero/hero-05-electrical-desktop.jpg',
  },
  {
    slug: 'when-to-replace-distribution-board',
    serviceSlug: 'electrical',
    titleAr: 'متى تحتاج إلى تغيير لوحة الكهرباء؟',
    titleEn: 'When to replace a distribution board',
    excerptAr:
      'تلف، مكونات غير مناسبة للأحمال، أو حماية ضعيفة: مؤشرات لمراجعة اللوحة مع فني مؤهل قبل التوسع في الأحمال.',
    excerptEn:
      'Damage, components that no longer match loads, or weak protection: signs to review the panel with a qualified technician before adding loads.',
    contentAr: [
      'لوحة التوزيع قد تحتاج تغييرًا أو تحديثًا عند التلف، أو عدم ملاءمة القواطع والمكونات للأحمال والحماية الحالية.',
      'لا توسّع الأحمال أو تضيف دوائر عشوائيًا قبل فحص قدرة اللوحة.',
      'اسأل عن تنظيم الدوائر والتسميات والاختبارات بعد أي عمل على اللوحة.',
      'التفاصيل في دليل الصيانة الكهربائية على ساعدني.',
    ],
    contentEn: [
      'A distribution board may need replacement or upgrade when damaged, or when breakers and components no longer match current loads and protection needs.',
      'Do not expand loads or add circuits randomly before checking panel capacity.',
      'Ask about circuit organization, labeling, and testing after any panel work.',
      'More detail is in Saedni’s electrical maintenance guide.',
    ],
    publishedAt: '2026-12-05',
    readMinutes: 5,
    image: '/images/hero/hero-05-electrical.jpg',
  },
  {
    slug: 'electrical-maintenance-riyadh',
    serviceSlug: 'electrical',
    citySlug: 'riyadh',
    titleAr: 'صيانة كهرباء في الرياض: ما الذي يجب معرفته قبل طلب فني؟',
    titleEn: 'Electrical maintenance in Riyadh: what to know before calling a technician',
    excerptAr:
      'نصائح لأصحاب المنازل في الرياض حول فصل القواطع المتكرر، فحص اللوحة، والأسئلة قبل الاتفاق.',
    excerptEn:
      'Tips for Riyadh homeowners on repeat breaker trips, panel checks, and questions before agreeing work.',
    contentAr: [
      'في الرياض الطلب مرتفع على إصلاح الأعطال وفحص اللوحات — خصوصًا مع زيادة الأحمال والأجهزة.',
      'اسأل عن سبب العطل، مواصفات القواطع والأسلاك، وهل يشمل العمل اختبارًا بعد الإصلاح.',
      'عند رائحة احتراق أو سخونة، أوقف الاستخدام واطلب فنيًا مؤهلًا فورًا.',
      'راجع دليل الصيانة الكهربائية على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, demand is high for fault repair and panel checks — especially as loads and appliances grow.',
      'Ask about the fault cause, breaker and wiring specs, and whether work includes post-repair testing.',
      'If there is a burning smell or heat, stop use and call a qualified technician promptly.',
      'Review Saedni’s electrical guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-05',
    readMinutes: 5,
    image: '/images/hero/hero-05-electrical-desktop.jpg',
  },
  {
    slug: 'electrical-technician-jeddah',
    serviceSlug: 'electrical',
    citySlug: 'jeddah',
    titleAr: 'فني كهربائي في جدة: أسئلة مهمة قبل الصيانة',
    titleEn: 'Electrical technician in Jeddah: key questions before maintenance',
    excerptAr:
      'كيف تختار نطاق عمل واضح في جدة: فحص اللوحة، التأريض، قطع الغيار، والاختبار بعد الإصلاح.',
    excerptEn:
      'How to set a clear scope in Jeddah: panel check, earthing, spare parts, and testing after repair.',
    contentAr: [
      'قبل الاتفاق في جدة، اسأل هل الفني مؤهل للعمل المطلوب، وهل سيفحص اللوحة والتأريض مع العطل الظاهر.',
      'وضّح إن كان السعر يشمل قطع الغيار والاختبار بعد الإصلاح.',
      'تجنب التعديلات العشوائية أو تحميل مقابس فوق طاقتها.',
      'استخدم دليل الصيانة الكهربائية على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'Before agreeing in Jeddah, ask whether the technician is qualified for the job and will check the panel and earthing with the visible fault.',
      'Clarify whether price includes spare parts and post-repair testing.',
      'Avoid improvised changes or overloading outlets beyond capacity.',
      'Use Saedni’s electrical maintenance guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-05',
    readMinutes: 4,
    image: '/images/hero/hero-05-electrical.jpg',
  },
  {
    slug: 'choose-ac-capacity-for-room',
    serviceSlug: 'air-conditioning',
    titleAr: 'كيفية اختيار قدرة المكيف المناسبة للغرفة',
    titleEn: 'How to choose the right AC capacity for a room',
    excerptAr:
      'المساحة وحدها مش كافية: ارتفاع السقف والعزل والواجهات وعدد الأشخاص يغيّرون القدرة المطلوبة.',
    excerptEn:
      'Floor area alone is not enough: ceiling height, insulation, facades, and occupancy change the capacity you need.',
    contentAr: [
      'اختيار قدرة أصغر من اللازم يخلي التبريد ضعيفًا، والأكبر من اللازم قد يسبب تشغيلًا غير مريح واستهلاكًا أعلى بدون حاجة.',
      'راعِ مساحة الغرفة وارتفاع السقف والعزل ودخول الشمس وعدد الأشخاص ومصادر الحرارة.',
      'اطلب معاينة قبل الشراء والتركيب، واتفق على نوع الجهاز ومكان الوحدتين.',
      'التفاصيل في دليل التكييف على ساعدني.',
    ],
    contentEn: [
      'Too small a capacity means weak cooling; oversized units can feel uncomfortable and use more energy than needed.',
      'Weigh room area, ceiling height, insulation, sun exposure, occupancy, and heat sources.',
      'Ask for a survey before buying and installing, and agree unit type and indoor/outdoor locations.',
      'More detail is in Saedni’s AC guide.',
    ],
    publishedAt: '2026-12-06',
    readMinutes: 5,
    image: '/images/hero/hero-06-ac-desktop.jpg',
  },
  {
    slug: 'causes-of-weak-ac-cooling',
    serviceSlug: 'air-conditioning',
    titleAr: 'أسباب ضعف تبريد المكيف',
    titleEn: 'Why air conditioner cooling gets weak',
    excerptAr:
      'فلاتر متسخة، تدفق هواء ضعيف، تصريف، أو دائرة تبريد: أسباب شائعة قبل ما تفترض أن الحل تعبئة فقط.',
    excerptEn:
      'Dirty filters, weak airflow, drainage, or the refrigeration circuit: common causes before assuming a refill alone will fix it.',
    contentAr: [
      'ضعف التبريد قد يبدأ من فلاتر متسخة أو تدفق هواء ضعيف أو مشكلة في المروحة قبل أي حديث عن وسيط التبريد.',
      'نقص وسيط التبريد المستمر مش طبيعي في نظام سليم — لازم فحص احتمال التسرب.',
      'لا تشغّل الجهاز مع أصوات أو روائح غير طبيعية؛ اطلب فحصًا.',
      'راجع دليل التكييف على ساعدني قبل الاتفاق على الصيانة.',
    ],
    contentEn: [
      'Weak cooling often starts with dirty filters, poor airflow, or a fan issue before refrigerant is the main topic.',
      'Ongoing refrigerant loss is not normal in a sound system — a leak check is needed.',
      'Do not keep running the unit with unusual noise or smells; ask for inspection.',
      'Review Saedni’s AC guide before agreeing maintenance.',
    ],
    publishedAt: '2026-12-06',
    readMinutes: 4,
    image: '/images/hero/hero-06-ac.jpg',
  },
  {
    slug: 'split-vs-central-ac',
    serviceSlug: 'air-conditioning',
    titleAr: 'الفرق بين المكيف السبليت والمركزي',
    titleEn: 'Split AC vs central AC',
    excerptAr:
      'متى يناسب السبليت الغرف المنفصلة، ومتى يكون النظام المركزي أوضح للمساحات الأكبر؟',
    excerptEn:
      'When split units suit separate rooms, and when a central system is clearer for larger spaces.',
    contentAr: [
      'السبليت مناسب لغرف محددة بتركيب أسرع نسبيًا وصيانة لكل وحدة على حدة.',
      'المركزي يناسب توزيع تبريد أوسع، ويحتاج تصميمًا وصيانة مختلفة وتمديدات أكثر.',
      'الاختيار يعتمد على المساحة والاستخدام والميزانية وإمكانية التركيب في الموقع.',
      'اسأل عن القدرة والتصريف والعزل قبل الاتفاق — الدليل على ساعدني.',
    ],
    contentEn: [
      'Split units suit specific rooms with relatively faster install and per-unit maintenance.',
      'Central systems suit broader cooling distribution and need different design, maintenance, and more distribution work.',
      'Choice depends on space, use, budget, and what the site can support.',
      'Ask about capacity, drainage, and insulation before agreeing — see Saedni’s guide.',
    ],
    publishedAt: '2026-12-06',
    readMinutes: 4,
    image: '/images/hero/hero-06-ac-desktop.jpg',
  },
  {
    slug: 'refrigerant-leak-warning-signs',
    serviceSlug: 'air-conditioning',
    titleAr: 'علامات تسرب وسيط التبريد',
    titleEn: 'Signs of refrigerant leak',
    excerptAr:
      'ضعف تبريد متكرر مع حاجة لتعبئة مستمرة مؤشر لفحص التسرب — مش لتعبئة بلا تشخيص.',
    excerptEn:
      'Repeated weak cooling with ongoing top-ups is a reason for leak diagnosis — not refill without inspection.',
    contentAr: [
      'لو الجهاز يحتاج تعبئة متكررة، غالبًا في تسرب يحتاج فحصًا قبل إعادة الشحن.',
      'ضعف التبريد مع صيانة حديثة أو أصوات/أداء غير طبيعي يستدعي مراجعة دائرة التبريد بواسطة فني.',
      'التعامل مع وسيط التبريد لازم وفق تعليمات الشركة المصنعة وممارسات آمنة.',
      'أسئلة ما قبل الاتفاق في دليل التكييف على ساعدني.',
    ],
    contentEn: [
      'If a unit needs repeated top-ups, there is often a leak that needs checking before recharge.',
      'Weak cooling after recent service, or unusual noise/performance, calls for a technician review of the refrigeration circuit.',
      'Refrigerant handling must follow manufacturer guidance and safe practice.',
      'Pre-hire questions are in Saedni’s AC guide.',
    ],
    publishedAt: '2026-12-07',
    readMinutes: 4,
    image: '/images/hero/hero-06-ac.jpg',
  },
  {
    slug: 'ac-maintenance-riyadh',
    serviceSlug: 'air-conditioning',
    citySlug: 'riyadh',
    titleAr: 'صيانة وتركيب المكيفات في الرياض: نصائح قبل الموسم',
    titleEn: 'AC maintenance and install in Riyadh: tips before peak season',
    excerptAr:
      'تنظيف، تصريف، وقدرة مناسبة: نقاط لأصحاب المنازل في الرياض قبل ذروة الاستخدام.',
    excerptEn:
      'Cleaning, drainage, and suitable capacity: points for Riyadh homeowners before peak use.',
    contentAr: [
      'في الرياض الصيف يرفع ضغط الاستخدام. نظّف الفلاتر دوريًا وافحص التصريف قبل اشتداد الحرارة.',
      'عند التركيب الجديد، لا تعتمد على المساحة وحدها لاختيار القدرة، واترك مساحة صيانة حول الوحدة الخارجية.',
      'اسأل هل السعر يشمل الخامات والاختبار بعد التركيب أو الصيانة.',
      'راجع دليل التكييف على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, summer raises load. Clean filters regularly and check drainage before peak heat.',
      'For new installs, do not size by floor area alone, and leave service space around the outdoor unit.',
      'Ask whether price includes materials and testing after install or maintenance.',
      'Review Saedni’s AC guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-07',
    readMinutes: 5,
    image: '/images/hero/hero-06-ac-desktop.jpg',
  },
  {
    slug: 'ac-service-jeddah',
    serviceSlug: 'air-conditioning',
    citySlug: 'jeddah',
    titleAr: 'صيانة المكيفات في جدة: ضعف التبريد وتسرب المياه',
    titleEn: 'AC service in Jeddah: weak cooling and water leaks',
    excerptAr:
      'الرطوبة والغبار يؤثران على الأداء في جدة — ماذا تسأل قبل التنظيف أو الإصلاح.',
    excerptEn:
      'Humidity and dust affect performance in Jeddah — what to ask before cleaning or repair.',
    contentAr: [
      'في جدة، اتساخ الفلاتر وانسداد التصريف من الأسباب الشائعة لضعف التبريد وتسرب المياه من الوحدة الداخلية.',
      'قبل التعبئة، اسأل عن فحص سبب نقص وسيط التبريد إن كان الجهاز يحتاج شحنًا متكررًا.',
      'اتفق على نطاق التنظيف: فلاتر فقط أم وحدات داخلية وخارجية.',
      'استخدم دليل التكييف على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, dirty filters and clogged drains commonly cause weak cooling and indoor unit water leaks.',
      'Before recharge, ask for a leak/cause check if the unit needs repeated refrigerant top-ups.',
      'Agree cleaning scope: filters only or indoor and outdoor units.',
      'Use Saedni’s AC guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-07',
    readMinutes: 4,
    image: '/images/hero/hero-06-ac.jpg',
  },
  {
    slug: 'common-washing-machine-faults',
    serviceSlug: 'appliance-repair',
    titleAr: 'أشهر أعطال الغسالات وأسبابها',
    titleEn: 'Common washing machine faults and causes',
    excerptAr:
      'صوت مرتفع، عدم تصريف، أو توقف أثناء الدورة: أعطال شائعة — ولماذا التشخيص قبل تغيير القطع أهم.',
    excerptEn:
      'Loud noise, no drain, or mid-cycle stop: common faults — and why diagnosis before part changes matters.',
    contentAr: [
      'الصوت المرتفع قد يكون من عدم اتزان الحمولة أو تثبيت أو أجزاء داخلية تحتاج فحصًا.',
      'مشاكل التصريف أو التوقف أثناء الدورة لها أسباب متعددة — تغيير قطعة بلا تشخيص غالبًا يضيع فلوس.',
      'اطلب توضيح السبب والتكلفة قبل الإصلاح، واختبار التشغيل بعد الانتهاء.',
      'راجع دليل صيانة الأجهزة على ساعدني.',
    ],
    contentEn: [
      'Loud noise may come from unbalanced load, fixing issues, or internal parts that need inspection.',
      'Drain problems or mid-cycle stops have multiple causes — changing a part without diagnosis often wastes money.',
      'Ask for cause and cost before repair, and operation testing after the job.',
      'Review Saedni’s appliance maintenance guide.',
    ],
    publishedAt: '2026-12-08',
    readMinutes: 4,
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'fridge-weak-cooling-causes',
    serviceSlug: 'appliance-repair',
    titleAr: 'أسباب ضعف تبريد الثلاجة',
    titleEn: 'Why a fridge cools poorly',
    excerptAr:
      'تدفق هواء، نظام تبريد، أو حساس حرارة: أسباب شائعة لضعف تبريد الثلاجة قبل استبدال الجهاز.',
    excerptEn:
      'Airflow, cooling system, or temperature sensor: common fridge cooling issues before replacing the appliance.',
    contentAr: [
      'ضعف تبريد الثلاجة مش دائمًا يعني نهاية الجهاز؛ قد يكون تدفق هواء أو حساس أو جزء في نظام التبريد.',
      'لا تغيّر قطعًا متتالية بلا تشخيص واضح وقطع متوافقة مع الموديل.',
      'اسأل عن اختبار التشغيل بعد الصيانة، وهل القطعة أصلية أو بديلة.',
      'التفاصيل في دليل صيانة الأجهزة على ساعدني.',
    ],
    contentEn: [
      'Weak fridge cooling does not always mean end of life; it may be airflow, a sensor, or a cooling-system part.',
      'Do not replace parts one after another without clear diagnosis and model-compatible spares.',
      'Ask for post-service testing and whether the part is original or compatible.',
      'More detail is in Saedni’s appliance maintenance guide.',
    ],
    publishedAt: '2026-12-08',
    readMinutes: 4,
    image: '/images/hero/hero-06-ac-desktop.jpg',
  },
  {
    slug: 'repair-vs-replace-appliance',
    serviceSlug: 'appliance-repair',
    titleAr: 'متى يكون إصلاح الجهاز أفضل من استبداله؟',
    titleEn: 'When repair is better than replacing an appliance',
    excerptAr:
      'قارن تكلفة الإصلاح وعمر الجهاز وحالته وسعر البديل — قبل ما تقرر بسرعة تحت ضغط العطل.',
    excerptEn:
      'Compare repair cost, appliance age and condition, and replacement price — before deciding under fault pressure.',
    contentAr: [
      'الإصلاح أوضح لما تكون التكلفة معقولة والجهاز بحالة عامة جيدة والقطع متوفرة.',
      'الاستبدال قد يكون أنسب لو تكررت الأعطال أو ارتفعت تكلفة الإصلاح قرب سعر جهاز جديد.',
      'اطلب تشخيصًا مكتوبًا أو واضحًا قبل الدفع الكبير، واحتفظ بالفاتورة والضمان.',
      'راجع دليل صيانة الأجهزة على ساعدني قبل القرار.',
    ],
    contentEn: [
      'Repair makes more sense when cost is reasonable, the unit is generally sound, and parts are available.',
      'Replacement may be better if faults repeat or repair cost approaches a new unit.',
      'Ask for a clear diagnosis before large payment, and keep the invoice and warranty.',
      'Review Saedni’s appliance guide before deciding.',
    ],
    publishedAt: '2026-12-08',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'home-appliance-care-tips',
    serviceSlug: 'appliance-repair',
    titleAr: 'كيفية العناية بالأجهزة المنزلية',
    titleEn: 'How to care for home appliances',
    excerptAr:
      'تنظيف فلاتر، عدم تجاهل الأصوات والروائح، وفصل الجهاز عند اللزوم: عادات تقلل الأعطال المتكررة.',
    excerptEn:
      'Clean filters, do not ignore unusual sounds or smells, and unplug when needed: habits that reduce repeat faults.',
    contentAr: [
      'الصيانة الدورية البسيطة مثل تنظيف الفلاتر والأجزاء المخصصة تقلل كثير من الأعطال.',
      'لا تشغّل جهازًا مع تسرب مياه أو علامات كهرباء غير طبيعية؛ افصله إن أمكن بأمان واطلب فنيًا.',
      'احتفظ بموديل الجهاز وفاتورة الصيانة لتسهيل القطع والضمان لاحقًا.',
      'علامات الحاجة لفني في دليل صيانة الأجهزة على ساعدني.',
    ],
    contentEn: [
      'Simple periodic care like cleaning filters and serviceable parts prevents many faults.',
      'Do not run an appliance with water leaks or unusual electrical signs; unplug if safely possible and call a technician.',
      'Keep the model number and service invoice to make parts and warranty easier later.',
      'Signs you need a technician are in Saedni’s appliance guide.',
    ],
    publishedAt: '2026-12-09',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'appliance-repair-riyadh',
    serviceSlug: 'appliance-repair',
    citySlug: 'riyadh',
    titleAr: 'صيانة الأجهزة المنزلية في الرياض: ماذا تسأل قبل الإصلاح؟',
    titleEn: 'Appliance repair in Riyadh: what to ask before service',
    excerptAr:
      'تشخيص، قطع غيار، ضمان، واختبار بعد الإصلاح: أسئلة لأصحاب المنازل في الرياض قبل الاتفاق.',
    excerptEn:
      'Diagnosis, spare parts, warranty, and post-repair testing: questions for Riyadh homeowners before agreeing.',
    contentAr: [
      'في الرياض أعطال الغسالات والثلاجات شائعة. اسأل أولًا: هل سبب العطل محدد قبل تغيير أي قطعة؟',
      'وضّح إن كانت القطعة أصلية أو بديلة، وهل السعر يشمل الزيارة والفحص والتركيب.',
      'اطلب اختبار تشغيل بعد الانتهاء واحتفظ بالفاتورة.',
      'راجع دليل صيانة الأجهزة على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, washer and fridge faults are common. Ask first: is the fault cause identified before any part change?',
      'Clarify original vs compatible parts, and whether price includes visit, diagnosis, and install.',
      'Ask for an operation test after the job and keep the invoice.',
      'Review Saedni’s appliance guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-09',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'appliance-repair-jeddah',
    serviceSlug: 'appliance-repair',
    citySlug: 'jeddah',
    titleAr: 'صيانة الأجهزة في جدة: غسالات وثلاجات وأعطال متكررة',
    titleEn: 'Appliance repair in Jeddah: washers, fridges, and repeat faults',
    excerptAr:
      'متى تصلح ومتى تستبدل، وكيف تتأكد من توافر القطع للموديل قبل ما يبدأ الفني في جدة.',
    excerptEn:
      'When to repair vs replace, and how to confirm parts for your model before a technician starts in Jeddah.',
    contentAr: [
      'في جدة، ابدأ بتأكيد الموديل وتوافر القطع قبل الإصلاح الكبير.',
      'لو الأعطال متكررة، قارن تكلفة الإصلاح مع حالة الجهاز وسعر البديل.',
      'لا تترك الجهاز يعمل مع تسرب أو صوت/رائحة غير طبيعية.',
      'استخدم دليل صيانة الأجهزة على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, start by confirming model and parts availability before major repair.',
      'If faults repeat, compare repair cost with unit condition and replacement price.',
      'Do not keep running an appliance with leaks or unusual noise/smell.',
      'Use Saedni’s appliance guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-09',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning.jpg',
  },
  {
    slug: 'signs-of-hidden-water-leak',
    serviceSlug: 'leak-detection',
    titleAr: 'علامات وجود تسرب مياه مخفي في المنزل',
    titleEn: 'Signs of a hidden water leak at home',
    excerptAr:
      'رطوبة، تقشر دهان، ارتفاع فاتورة، أو صوت تدفق: علامات تستدعي فحصًا قبل الدهان أو التكسير العشوائي.',
    excerptEn:
      'Damp, peeling paint, a rising bill, or flow noise: signs that need inspection before paint or random demolition.',
    contentAr: [
      'بقع الرطوبة وتقشر الدهان وارتفاع الاستهلاك غير المعتاد من أشهر مؤشرات التسرب المخفي.',
      'لا تغطِّ الأثر بالدهان قبل معرفة المصدر؛ والرطوبة ليست دائمًا تسربًا — قد تكون تكاثفًا.',
      'اطلب تحديد المكان قدر الإمكان قبل فتح مساحات كبيرة.',
      'راجع دليل كشف التسربات على ساعدني.',
    ],
    contentEn: [
      'Damp patches, peeling paint, and unusual water use are common hidden-leak indicators.',
      'Do not cover the mark with paint before finding the source; damp is not always a leak — it can be condensation.',
      'Ask to locate the area as much as possible before opening large spaces.',
      'Review Saedni’s leak detection guide.',
    ],
    publishedAt: '2026-12-10',
    readMinutes: 4,
    image: '/images/hero/hero-14-leak-desktop.jpg',
  },
  {
    slug: 'high-water-bill-causes',
    serviceSlug: 'leak-detection',
    titleAr: 'أسباب ارتفاع فاتورة المياه',
    titleEn: 'Why your water bill goes up',
    excerptAr:
      'تسرب مخفي أحد الاحتمالات — راجع الاستهلاك والأجهزة والشبكة قبل افتراض السبب الوحيد.',
    excerptEn:
      'A hidden leak is one possibility — review consumption, fixtures, and the network before assuming a single cause.',
    contentAr: [
      'ارتفاع الفاتورة مؤشر يستحق مراجعة، لكنه ليس دليلًا قاطعًا على تسرب.',
      'راجع الاستهلاك والأجهزة المتصلة، ثم افحص الشبكة عند استمرار الارتفاع بلا تفسير.',
      'لو في رطوبة ظاهرة مع ارتفاع الاستهلاك، اربط الفحص مع كشف التسربات والسباكة.',
      'الأسئلة قبل الاتفاق في دليل كشف التسربات على ساعدني.',
    ],
    contentEn: [
      'A rising bill deserves review, but it is not conclusive proof of a leak.',
      'Check consumption and connected fixtures, then inspect the network if the rise continues without explanation.',
      'If visible damp comes with higher use, link inspection to leak detection and plumbing.',
      'Pre-hire questions are in Saedni’s leak detection guide.',
    ],
    publishedAt: '2026-12-10',
    readMinutes: 4,
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'pipe-leak-vs-waterproofing-leak',
    serviceSlug: 'leak-detection',
    titleAr: 'الفرق بين تسرب المواسير وتسرب العزل',
    titleEn: 'Pipe leak vs waterproofing failure',
    excerptAr:
      'في الحمامات والأسطح مهم تمييز مصدر المياه: ماسورة أم عزل أم فواصل — قبل ما تختار الإصلاح.',
    excerptEn:
      'In bathrooms and roofs it matters whether water comes from a pipe, failed waterproofing, or joints — before you choose repair.',
    contentAr: [
      'تسرب المواسير يختلف عن فشل العزل أو مشاكل الفواصل والصرف، والعلاج مختلف لكل حالة.',
      'دهان الرطوبة أو إصلاح جزء بلا تشخيص قد يعيد المشكلة بسرعة.',
      'اطلب توضيح نوع التسرب المحتمل ودرجة تأكد الفحص قبل التكسير الواسع.',
      'اربط مع دليل العزل والسباكة على ساعدني عند الحاجة.',
    ],
    contentEn: [
      'A pipe leak differs from waterproofing failure or joint/drainage issues, and each needs a different fix.',
      'Painting over damp or repairing one part without diagnosis often brings the problem back quickly.',
      'Ask for the likely leak type and inspection confidence before wide demolition.',
      'Link to Saedni’s waterproofing and plumbing guides when needed.',
    ],
    publishedAt: '2026-12-10',
    readMinutes: 5,
    image: '/images/hero/hero-04-waterproofing-desktop.jpg',
  },
  {
    slug: 'leak-detection-without-demolition',
    serviceSlug: 'leak-detection',
    titleAr: 'طرق كشف تسربات المياه دون تكسير',
    titleEn: 'Water leak detection with less demolition',
    excerptAr:
      'أجهزة الفحص تساعد على تضييق الموقع وتقليل التكسير — مع فهم حدود كل طريقة حسب مكان التسرب.',
    excerptEn:
      'Detection tools help narrow the location and reduce demolition — while understanding each method’s limits by leak location.',
    contentAr: [
      'الهدف تقليل التكسير العشوائي عبر تحديد أدق للموقع قبل الفتح.',
      'لا توجد أداة واحدة لكل الحالات؛ الاختيار يعتمد على نوع التسرب ومكانه وطبيعة المبنى.',
      'بعض الحالات ما زالت تحتاج فتحًا محدودًا للتأكد أو الإصلاح بعد التحديد.',
      'اسأل عن الجهاز المستخدم والتوثيق بالصور أو التقرير قبل الاتفاق — الدليل على ساعدني.',
    ],
    contentEn: [
      'The goal is less random demolition by locating the area more accurately before opening.',
      'No single tool fits every case; choice depends on leak type, location, and building conditions.',
      'Some cases still need limited opening to confirm or repair after locating.',
      'Ask about the tool used and photo/report documentation before agreeing — see Saedni’s guide.',
    ],
    publishedAt: '2026-12-11',
    readMinutes: 4,
    image: '/images/hero/hero-14-leak.jpg',
  },
  {
    slug: 'leak-detection-riyadh',
    serviceSlug: 'leak-detection',
    citySlug: 'riyadh',
    titleAr: 'كشف تسربات المياه في الرياض: من أين تبدأ؟',
    titleEn: 'Water leak detection in Riyadh: where to start',
    excerptAr:
      'رطوبة أو فاتورة مرتفعة في الرياض: ابدأ بالفحص قبل الدهان أو التكسير، واسأل عن الاختبار بعد الإصلاح.',
    excerptEn:
      'Damp or a high bill in Riyadh: start with inspection before paint or demolition, and ask about post-repair testing.',
    contentAr: [
      'في الرياض كثير من الحالات تبدأ ببقع رطوبة أو ارتفاع استهلاك. اطلب تحديد نوع التسرب ومكانه قبل الفتح الواسع.',
      'وضّح إن كان السعر فحصًا فقط أم يشمل الإصلاح وإعادة التشطيب.',
      'بعد الإصلاح، الاختبار خطوة أساسية قبل إعادة الدهان.',
      'راجع دليل كشف التسربات على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh many cases start with damp patches or higher consumption. Ask to identify leak type and location before wide opening.',
      'Clarify whether price is inspection only or includes repair and refinishing.',
      'After repair, testing is essential before repainting.',
      'Review Saedni’s leak detection guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-11',
    readMinutes: 5,
    image: '/images/hero/hero-14-leak-desktop.jpg',
  },
  {
    slug: 'leak-detection-jeddah',
    serviceSlug: 'leak-detection',
    citySlug: 'jeddah',
    titleAr: 'كشف التسربات في جدة: حمامات وأسطح ورطوبة',
    titleEn: 'Leak detection in Jeddah: bathrooms, roofs, and damp',
    excerptAr:
      'الرطوبة في جدة تزيد أهمية التمييز بين التسرب والتكاثف — ماذا تسأل قبل فحص الحمام أو السطح.',
    excerptEn:
      'Humidity in Jeddah makes distinguishing leaks from condensation more important — what to ask before bathroom or roof inspection.',
    contentAr: [
      'في جدة، لا تفترض أن كل رطوبة تسرب مواسير؛ قد تكون عزلًا أو فواصل أو تكاثفًا.',
      'اسأل عن طريقة الكشف، وهل يمكن تقليل التكسير، وهل في اختبار بعد الإصلاح.',
      'للحمامات اربط الفحص مع العزل والسباكة حسب النتيجة.',
      'استخدم دليل كشف التسربات على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, do not assume every damp mark is a pipe leak; it may be waterproofing, joints, or condensation.',
      'Ask about detection method, whether demolition can be reduced, and whether post-repair testing is included.',
      'For bathrooms, link inspection to waterproofing and plumbing based on findings.',
      'Use Saedni’s leak detection guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-11',
    readMinutes: 4,
    image: '/images/hero/hero-14-leak.jpg',
  },
  {
    slug: 'organized-home-cleaning-steps',
    serviceSlug: 'home-cleaning',
    titleAr: 'خطوات تنظيف المنزل بطريقة منظمة',
    titleEn: 'Organized steps to clean a home',
    excerptAr:
      'من إزالة المخلفات إلى المطابخ والحمامات ثم المراجعة: ترتيب يقلل نقل الأوساخ ويعطي نتيجة أوضح.',
    excerptEn:
      'From trash removal to kitchens and bathrooms then review: an order that reduces spreading dirt and gives clearer results.',
    contentAr: [
      'ابدأ بإزالة المخلفات والأتربة الظاهرة، ثم انتقل للأسطح والأثاث قبل الأرضيات في كثير من الحالات.',
      'المطابخ والدهون والحمامات تحتاج تركيزًا منفصلًا ومواد مناسبة لكل سطح.',
      'راجع الزوايا والنوافذ حسب الاتفاق قبل التسليم.',
      'التفاصيل في دليل تنظيف المنازل على ساعدني.',
    ],
    contentEn: [
      'Start by removing trash and visible dust, then often move to surfaces and furniture before floors.',
      'Kitchens, grease, and bathrooms need focused work and products suited to each surface.',
      'Review corners and windows per agreement before handover.',
      'More detail is in Saedni’s home cleaning guide.',
    ],
    publishedAt: '2026-12-12',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'regular-vs-deep-home-cleaning',
    serviceSlug: 'home-cleaning',
    titleAr: 'الفرق بين التنظيف العادي والتنظيف العميق',
    titleEn: 'Regular cleaning vs deep cleaning',
    excerptAr:
      'متى يكفي التنظيف الدوري، ومتى تحتاج تنظيفًا عميقًا للمطابخ والحمامات والأماكن المخفية؟',
    excerptEn:
      'When recurring cleaning is enough, and when you need a deep clean for kitchens, bathrooms, and hidden areas.',
    contentAr: [
      'التنظيف الدوري يحافظ على المستوى اليومي أو الأسبوعي للمساحات الظاهرة.',
      'التنظيف العميق يركز أكثر على الزوايا والدهون والأماكن التي لا تُغطى في الجولة السريعة.',
      'قبل الاتفاق وضّح النوع المطلوب والمساحات المشمولة حتى لا يحدث سوء فهم على السعر.',
      'راجع دليل تنظيف المنازل على ساعدني.',
    ],
    contentEn: [
      'Recurring cleaning keeps day-to-day or weekly visible areas in shape.',
      'Deep cleaning focuses more on corners, grease, and areas skipped in a quick pass.',
      'Before agreeing, clarify the type and covered areas so price expectations stay clear.',
      'Review Saedni’s home cleaning guide.',
    ],
    publishedAt: '2026-12-12',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning.jpg',
  },
  {
    slug: 'kitchen-grease-cleaning-tips',
    serviceSlug: 'home-cleaning',
    titleAr: 'كيفية تنظيف المطابخ وإزالة الدهون',
    titleEn: 'How to clean kitchens and remove grease',
    excerptAr:
      'الدهون تحتاج موادًا مناسبة وأدوات نظيفة — وتجنب خلط المنظفات الكيميائية.',
    excerptEn:
      'Grease needs suitable products and clean tools — and avoid mixing chemical cleaners.',
    contentAr: [
      'إزالة دهون المطبخ تختلف عن مسح الأسطح العامة؛ استخدم منتجًا مناسبًا واتبع تعليماته.',
      'لا تخلط مواد تنظيف كيميائية مختلفة، واهتم بالتهوية أثناء العمل.',
      'نظّف الأجهزة من الخارج حسب الاتفاق، وراجع الزوايا خلف الأسطح.',
      'الأسئلة قبل الاتفاق في دليل تنظيف المنازل على ساعدني.',
    ],
    contentEn: [
      'Kitchen grease removal differs from wiping general surfaces; use a suitable product and follow its guidance.',
      'Do not mix different chemical cleaners, and ventilate while working.',
      'Clean appliance exteriors if agreed, and check corners behind surfaces.',
      'Pre-hire questions are in Saedni’s home cleaning guide.',
    ],
    publishedAt: '2026-12-12',
    readMinutes: 4,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'move-in-apartment-cleaning',
    serviceSlug: 'home-cleaning',
    titleAr: 'نصائح تنظيف الشقق قبل السكن',
    titleEn: 'Tips for cleaning an apartment before move-in',
    excerptAr:
      'قبل نقل الأثاث: مطبخ وحمامات وأرضيات ونوافذ — نطاق واضح يعطي بداية أنظف للسكن.',
    excerptEn:
      'Before furniture arrives: kitchen, bathrooms, floors, and windows — a clear scope for a cleaner move-in.',
    contentAr: [
      'تنظيف ما قبل السكن أهميته في المطابخ والحمامات والأرضيات والنوافذ قبل وصول الأثاث.',
      'اتفق إن كانت المواد مشمولة وكم عدد العمال والوقت المتوقع.',
      'اطلب مراجعة نهائية للزوايا قبل التسليم.',
      'راجع دليل تنظيف المنازل على ساعدني قبل الاتفاق.',
    ],
    contentEn: [
      'Move-in cleaning matters most for kitchens, bathrooms, floors, and windows before furniture arrives.',
      'Agree whether products are included, crew size, and expected timing.',
      'Ask for a final corner check before handover.',
      'Review Saedni’s home cleaning guide before agreeing.',
    ],
    publishedAt: '2026-12-13',
    readMinutes: 4,
    image: '/images/hero/hero-02-finishing.jpg',
  },
  {
    slug: 'home-cleaning-riyadh',
    serviceSlug: 'home-cleaning',
    citySlug: 'riyadh',
    titleAr: 'خدمات تنظيف المنازل في الرياض: دوري أم عميق؟',
    titleEn: 'Home cleaning in Riyadh: recurring or deep?',
    excerptAr:
      'نصائح لأصحاب الشقق والفلل في الرياض حول نطاق الخدمة والمواد والأسئلة قبل الاتفاق.',
    excerptEn:
      'Tips for Riyadh apartment and villa owners on scope, products, and questions before agreeing.',
    contentAr: [
      'في الرياض، حدد أولًا إن كنت تحتاج تنظيفًا دوريًا أو عميقًا أو تجهيزًا قبل السكن/التأجير.',
      'اسأل عن النوافذ والأثاث والمواد وعدد العمال قبل تثبيت السعر.',
      'للمساحات الكبيرة تأكد إن كان هناك سعر إضافي أو وقت أطول.',
      'استخدم دليل تنظيف المنازل على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, first decide whether you need recurring, deep, or move-in/rent prep cleaning.',
      'Ask about windows, furniture, products, and crew size before locking price.',
      'For larger homes, confirm whether extra price or longer time applies.',
      'Use Saedni’s home cleaning guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-13',
    readMinutes: 5,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'home-cleaning-jeddah',
    serviceSlug: 'home-cleaning',
    citySlug: 'jeddah',
    titleAr: 'تنظيف المنازل في جدة: مطابخ وحمامات ونوافذ',
    titleEn: 'Home cleaning in Jeddah: kitchens, bathrooms, and windows',
    excerptAr:
      'ماذا تطلب في جدة قبل الخدمة: نطاق المطابخ والدهون والحمامات، وهل النوافذ مشمولة.',
    excerptEn:
      'What to request in Jeddah before service: kitchen grease and bathrooms scope, and whether windows are included.',
    contentAr: [
      'في جدة، الغبار والرطوبة يجعلان تنظيف المطابخ والحمامات والنوافذ أهم في كثير من الطلبات.',
      'اتفق على المواد المناسبة لكل سطح، ولا تخلط المنظفات الكيميائية.',
      'وضّح المساحات غير المشمولة حتى تكون النتيجة متوقعة.',
      'راجع دليل تنظيف المنازل على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, dust and humidity make kitchen, bathroom, and window cleaning especially important in many requests.',
      'Agree products suited to each surface, and do not mix chemical cleaners.',
      'Clarify excluded areas so results match expectations.',
      'Review Saedni’s home cleaning guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-13',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning.jpg',
  },
  {
    slug: 'when-to-clean-water-tank',
    serviceSlug: 'water-tank-cleaning',
    titleAr: 'متى يحتاج خزان المياه إلى التنظيف؟',
    titleEn: 'When does a water tank need cleaning?',
    excerptAr:
      'رواسب ظاهرة، تغير في المياه، أو جدول دوري حسب الاستخدام: مؤشرات تساعدك تقرر موعد التنظيف.',
    excerptEn:
      'Visible sediment, water changes, or a recurring schedule by use: signs that help you decide when to clean.',
    contentAr: [
      'تنظيف الخزان ليس مرة واحدة للأبد؛ يعتمد على حالته وجودة المياه وظروف التخزين وظهور رواسب أو تلوث.',
      'افحص الغطاء والتوصيلات مع التنظيف — نظافة الداخل لا تكفي لو مصادر التلوث مستمرة.',
      'اطلب مواد مناسبة لخزانات مياه الشرب عند الحاجة، مع شطف كامل.',
      'راجع دليل تنظيف خزانات المياه على ساعدني.',
    ],
    contentEn: [
      'Tank cleaning is not once forever; it depends on condition, water quality, storage, and visible sediment or contamination.',
      'Check the cover and connections with cleaning — a clean interior is not enough if contamination sources remain.',
      'Ask for drinking-water-suitable products when needed, with a full rinse.',
      'Review Saedni’s water tank cleaning guide.',
    ],
    publishedAt: '2026-12-14',
    readMinutes: 4,
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'signs-of-tank-water-contamination',
    serviceSlug: 'water-tank-cleaning',
    titleAr: 'علامات تلوث مياه الخزان',
    titleEn: 'Signs of tank water contamination',
    excerptAr:
      'تغير لون أو رائحة أو رواسب: علامات تستدعي فحص الخزان قبل الاعتماد على حلول عشوائية.',
    excerptEn:
      'Color change, odor, or sediment: signs that call for tank inspection before random fixes.',
    contentAr: [
      'تغير لون المياه أو رائحتها أو ظهور رواسب مؤشرات لفحص الخزان والغطاء والتوصيلات.',
      'تنظيف الخزان قد يساعد إذا كان السبب رواسب داخلية، وإذا استمرت المشكلة يلزم تحديد المصدر.',
      'لا تستخدم منظفات منزلية غير مناسبة داخل خزانات مياه الشرب.',
      'الأسئلة قبل الاتفاق في دليل تنظيف الخزانات على ساعدني.',
    ],
    contentEn: [
      'Water color or odor changes, or visible sediment, are reasons to inspect the tank, cover, and connections.',
      'Cleaning may help if the cause is internal sediment; if the issue continues, find the source.',
      'Do not use unsuitable household cleaners inside drinking-water tanks.',
      'Pre-hire questions are in Saedni’s tank cleaning guide.',
    ],
    publishedAt: '2026-12-14',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'tank-cleaning-vs-disinfection',
    serviceSlug: 'water-tank-cleaning',
    titleAr: 'الفرق بين تنظيف الخزان وتطهيره',
    titleEn: 'Tank cleaning vs disinfection',
    excerptAr:
      'التنظيف يزيل الرواسب، والتطهير خطوة منفصلة بمواد وإجراءات معتمدة — مع شطف ضروري بعد ذلك.',
    excerptEn:
      'Cleaning removes sediment; disinfection is a separate step with approved products and procedures — and rinsing is essential after.',
    contentAr: [
      'إزالة الرواسب وتنظيف الأسطح خطوة، والتطهير خطوة أخرى عند الحاجة بمواد معتمدة وتركيزات صحيحة.',
      'الشطف بعد المواد مهم حتى لا تبقى بقايا داخل الخزان.',
      'اسأل قبل الاتفاق: هل الخدمة تشمل التنظيف فقط أم التطهير أيضًا؟',
      'راجع دليل تنظيف خزانات المياه على ساعدني.',
    ],
    contentEn: [
      'Removing sediment and cleaning surfaces is one step; disinfection is another when needed with approved products and correct concentrations.',
      'Rinsing after products matters so residues are not left in the tank.',
      'Ask before agreeing: is the service cleaning only, or disinfection too?',
      'Review Saedni’s water tank cleaning guide.',
    ],
    publishedAt: '2026-12-14',
    readMinutes: 4,
    image: '/images/hero/hero-01-plumbing.jpg',
  },
  {
    slug: 'keep-water-tank-clean',
    serviceSlug: 'water-tank-cleaning',
    titleAr: 'كيفية المحافظة على نظافة خزان المياه',
    titleEn: 'How to keep a water tank cleaner longer',
    excerptAr:
      'غطاء محكم، فحص دوري، وعدم مصادر تلوث حول الخزان: عادات تقلل الحاجة لتنظيف طارئ.',
    excerptEn:
      'A secure cover, periodic checks, and no contamination sources around the tank: habits that reduce emergency cleaning.',
    contentAr: [
      'إحكام الغطاء يمنع دخول الأتربة والحشرات، وفحصه جزء أساسي مع كل تنظيف.',
      'تجاهل الشروخ أو التسرب لا يُحل بالتنظيف — اربط مع فحص وإصلاح منفصل.',
      'جدول فحص دوري حسب الاستخدام وظروف التخزين أفضل من الانتظار حتى تتغير المياه.',
      'التفاصيل في دليل تنظيف الخزانات على ساعدني.',
    ],
    contentEn: [
      'A secure cover keeps out dust and insects, and checking it is part of every clean.',
      'Ignoring cracks or leaks is not fixed by cleaning — link to separate inspection and repair.',
      'A periodic check schedule by use and storage beats waiting until water changes.',
      'More detail is in Saedni’s tank cleaning guide.',
    ],
    publishedAt: '2026-12-15',
    readMinutes: 4,
    image: '/images/hero/hero-14-leak-desktop.jpg',
  },
  {
    slug: 'water-tank-cleaning-riyadh',
    serviceSlug: 'water-tank-cleaning',
    citySlug: 'riyadh',
    titleAr: 'تنظيف خزانات المياه في الرياض: ماذا تسأل قبل الخدمة؟',
    titleEn: 'Water tank cleaning in Riyadh: what to ask before service',
    excerptAr:
      'مواد مناسبة، شطف، فحص الغطاء، وإجراءات سلامة: أسئلة لأصحاب المنازل في الرياض قبل الاتفاق.',
    excerptEn:
      'Suitable products, rinsing, cover checks, and safety steps: questions for Riyadh homeowners before agreeing.',
    contentAr: [
      'في الرياض، اسأل عن خبرة نوع الخزان (أرضي/علوي) والمواد وهل مناسبة لمياه الشرب عند الحاجة.',
      'تأكد أن الخدمة تشمل إزالة الرواسب والشطف وفحص الغطاء والعوامة.',
      'اطلب توضيح إجراءات السلامة — خصوصًا للخزانات التي تتطلب دخولًا أو عملًا في أماكن مغلقة.',
      'راجع دليل تنظيف خزانات المياه على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, ask about experience with your tank type (ground/rooftop) and whether products are drinking-water suitable when needed.',
      'Confirm sediment removal, rinsing, and cover/float checks are included.',
      'Ask about safety procedures — especially for tanks that need entry or confined-space work.',
      'Review Saedni’s tank cleaning guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-15',
    readMinutes: 5,
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'water-tank-cleaning-jeddah',
    serviceSlug: 'water-tank-cleaning',
    citySlug: 'jeddah',
    titleAr: 'تنظيف خزانات المياه في جدة: رواسب وروائح وجودة المياه',
    titleEn: 'Water tank cleaning in Jeddah: sediment, odor, and water quality',
    excerptAr:
      'ماذا تفعل عند تغير رائحة أو لون المياه في جدة، وكيف تفرق بين حاجة التنظيف وحاجة فحص التسرب.',
    excerptEn:
      'What to do when water odor or color changes in Jeddah, and how to tell cleaning needs from leak inspection needs.',
    contentAr: [
      'في جدة، تغير الرائحة أو اللون يستدعي فحص الخزان والغطاء أولًا قبل أي حل عشوائي.',
      'التنظيف يزيل رواسب، لكنه لا يعالج التسرب — لو في تسرب اربط مع كشف/إصلاح منفصل.',
      'اتفق على التطهير عند الحاجة مع شطف كامل ومواد معتمدة.',
      'استخدم دليل تنظيف خزانات المياه على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, odor or color changes call for inspecting the tank and cover first before random fixes.',
      'Cleaning removes sediment but does not fix leaks — link leak detection/repair separately if needed.',
      'Agree disinfection when needed with a full rinse and approved products.',
      'Use Saedni’s tank cleaning guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-15',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning.jpg',
  },
  {
    slug: 'post-finishing-apartment-cleaning-steps',
    serviceSlug: 'post-construction-cleaning',
    titleAr: 'خطوات تنظيف الشقة بعد التشطيب',
    titleEn: 'Steps to clean an apartment after finishing',
    excerptAr:
      'من إزالة الأتربة إلى الزجاج والأرضيات والمراجعة: ترتيب يقلل الخدوش ويعطي تسليمًا أنظف قبل فرش الأثاث.',
    excerptEn:
      'From dust removal to glass, floors, and review: an order that reduces scratches and gives a cleaner handover before furniture.',
    contentAr: [
      'ابدأ بإزالة الأتربة والمخلفات الظاهرة قبل مسح الأرضيات حتى لا تُسحَب الخدوش على السيراميك والزجاج.',
      'نظّف النوافذ والأبواب والخزائن والمطابخ والحمامات، ثم ركّز على الأرضيات وبقايا المواد المناسبة للإزالة.',
      'راجع الزوايا والفواصل قبل التسليم، ووضّح نوع الأرضيات قبل اختيار المواد.',
      'التفاصيل في دليل نظافة ما بعد التشطيب على ساعدني.',
    ],
    contentEn: [
      'Start by removing dust and visible debris before mopping floors so grit does not scratch ceramic and glass.',
      'Clean windows, doors, cabinets, kitchens, and bathrooms, then focus on floors and residues suitable for removal.',
      'Review corners and joints before handover, and clarify floor types before choosing products.',
      'More detail is in Saedni’s post-construction cleaning guide.',
    ],
    publishedAt: '2026-12-16',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'remove-cement-from-ceramic-safely',
    serviceSlug: 'post-construction-cleaning',
    titleAr: 'إزالة بقايا الأسمنت من السيراميك بأمان',
    titleEn: 'Removing cement residue from ceramic safely',
    excerptAr:
      'حدد نوع البقايا والخامة قبل أي مادة — وتجنب الأدوات المعدنية القاسية التي تخدش السطح.',
    excerptEn:
      'Identify residue and finish type before any product — and avoid harsh metal tools that scratch the surface.',
    contentAr: [
      'بقايا الأسمنت على السيراميك تحتاج طريقة مناسبة للخامة؛ الأدوات المعدنية القاسية غالبًا تخدش.',
      'لا تستخدم أحماضًا عشوائية على كل الأسطح — خصوصًا الرخام والحجر الطبيعي.',
      'اتفق قبل البدء إن كانت إزالة الأسمنت ضمن النطاق، وما المواد المستخدمة.',
      'راجع دليل نظافة ما بعد التشطيب على ساعدني.',
    ],
    contentEn: [
      'Cement residue on ceramic needs a method suited to the finish; harsh metal tools often scratch.',
      'Do not use random acids on every surface — especially marble and natural stone.',
      'Agree upfront whether cement removal is in scope and which products will be used.',
      'Review Saedni’s post-construction cleaning guide.',
    ],
    publishedAt: '2026-12-16',
    readMinutes: 4,
    image: '/images/hero/hero-03-tiling-desktop.jpg',
  },
  {
    slug: 'clean-marble-after-construction',
    serviceSlug: 'post-construction-cleaning',
    titleAr: 'تنظيف الرخام بعد أعمال البناء',
    titleEn: 'Cleaning marble after construction work',
    excerptAr:
      'الرخام حساس للأحماض والمنظفات الخاطئة — أسئلة مهمة قبل تنظيفه من بقايا التشطيب.',
    excerptEn:
      'Marble is sensitive to acids and wrong cleaners — key questions before cleaning finishing residues from it.',
    contentAr: [
      'الرخام يحتاج مواد وطرق مناسبة لطبيعته؛ الأحماض والمنظفات غير المخصصة قد تضر السطح أو اللون.',
      'وضّح نوع الرخام والبقايا الموجودة قبل بدء التنظيف.',
      'اطلب حماية التركيبات الجديدة وعدم ترك بقايا مواد على السطح.',
      'اربط مع دليل الرخام والبورسلان ودليل نظافة ما بعد التشطيب على ساعدني.',
    ],
    contentEn: [
      'Marble needs methods and products suited to its nature; acids and unsuitable cleaners can damage the surface or color.',
      'Clarify marble type and residue type before cleaning starts.',
      'Ask for protection of new fittings and no leftover product residue on the surface.',
      'Link to Saedni’s marble and post-construction cleaning guides.',
    ],
    publishedAt: '2026-12-16',
    readMinutes: 4,
    image: '/images/hero/hero-12-marble-desktop.jpg',
  },
  {
    slug: 'regular-vs-post-construction-cleaning',
    serviceSlug: 'post-construction-cleaning',
    titleAr: 'الفرق بين التنظيف العادي ونظافة ما بعد التشطيب',
    titleEn: 'Regular cleaning vs post-construction cleaning',
    excerptAr:
      'التنظيف العادي يحافظ على الاستخدام اليومي، وما بعد التشطيب يزيل مخلفات البناء قبل السكن أو التسليم.',
    excerptEn:
      'Regular cleaning maintains daily use; post-construction cleaning removes building residues before move-in or handover.',
    contentAr: [
      'تنظيف المنازل الدوري مختلف عن إزالة أتربة البناء وبقايا المعجون والدهان والأسمنت.',
      'لو طلبت تنظيفًا عاديًا بعد تشطيب جديد، غالبًا النتيجة تكون ناقصة.',
      'اتفق على النطاق: زجاج، خزائن، أرضيات، وإزالة مخلفات إن لزم.',
      'راجع دليل نظافة ما بعد التشطيب ودليل تنظيف المنازل على ساعدني.',
    ],
    contentEn: [
      'Recurring home cleaning differs from removing construction dust and putty, paint, and cement residues.',
      'If you request a regular clean after new finishing, results are often incomplete.',
      'Agree scope: glass, cabinets, floors, and debris removal if needed.',
      'Review Saedni’s post-construction and home cleaning guides.',
    ],
    publishedAt: '2026-12-17',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'post-construction-cleaning-riyadh',
    serviceSlug: 'post-construction-cleaning',
    citySlug: 'riyadh',
    titleAr: 'نظافة ما بعد التشطيب في الرياض: قبل فرش الأثاث',
    titleEn: 'Post-construction cleaning in Riyadh: before furniture arrives',
    excerptAr:
      'نصائح لأصحاب الشقق والفلل في الرياض حول النطاق والمواد وفحص التسليم قبل الانتقال.',
    excerptEn:
      'Tips for Riyadh apartment and villa owners on scope, products, and handover checks before move-in.',
    contentAr: [
      'في الرياض، حدد نوع الأرضيات والزجاج قبل الاتفاق حتى تُختار مواد مناسبة بلا خدوش.',
      'اسأل هل السعر يشمل إزالة المخلفات وتنظيف الزجاج والخزائن من الداخل.',
      'اطلب مراجعة نهائية للزوايا قبل فرش الأثاث.',
      'راجع دليل نظافة ما بعد التشطيب على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, state floor and glass types before agreeing so suitable products are chosen without scratches.',
      'Ask whether price includes debris removal and cleaning glass and cabinet interiors.',
      'Request a final corner review before furniture arrives.',
      'Review Saedni’s post-construction cleaning guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-17',
    readMinutes: 5,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'post-construction-cleaning-jeddah',
    serviceSlug: 'post-construction-cleaning',
    citySlug: 'jeddah',
    titleAr: 'خدمات نظافة ما بعد التشطيب في جدة',
    titleEn: 'Post-construction cleaning services in Jeddah',
    excerptAr:
      'ماذا تسأل في جدة قبل تنظيف شقة أو فيلا بعد التشطيب: الأسمنت، الرخام، والزجاج.',
    excerptEn:
      'What to ask in Jeddah before cleaning an apartment or villa after finishing: cement, marble, and glass.',
    contentAr: [
      'في جدة، وضّح إن كان هناك رخام أو بورسلان أو سيراميك، وما بقايا الأسمنت أو الدهان الموجودة.',
      'تجنب الأحماض العشوائية على الرخام، واسأل عن طريقة إزالة البقايا بأمان.',
      'اتفق على المدة وعدد العمال والفحص النهائي قبل التسليم.',
      'استخدم دليل نظافة ما بعد التشطيب على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, clarify whether there is marble, porcelain, or ceramic, and what cement or paint residues remain.',
      'Avoid random acids on marble, and ask how residues will be removed safely.',
      'Agree duration, crew size, and final inspection before handover.',
      'Use Saedni’s post-construction cleaning guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-17',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning.jpg',
  },
  {
    slug: 'best-furniture-packing-materials',
    serviceSlug: 'packing',
    titleAr: 'أفضل مواد تغليف الأثاث قبل النقل',
    titleEn: 'Best furniture packing materials before a move',
    excerptAr:
      'كراتين مقواة، فقاعي، استرتش، بطاطين وواقيات زوايا: متى تستخدم كل خامة حسب نوع القطعة.',
    excerptEn:
      'Strong boxes, bubble wrap, stretch film, blankets, and corner guards: when to use each material by item type.',
    contentAr: [
      'مش كل قطعة تحتاج نفس التغليف: الزجاج غير الكنب، والأجهزة غير المراتب.',
      'اختر كراتين مقواة للأغراض الصغيرة، وحماية زوايا للأثاث، ومواد لا تلصق ضررًا على الأسطح الحساسة.',
      'اسأل قبل الاتفاق هل المواد مشمولة في السعر.',
      'راجع دليل التغليف وفك التغليف على ساعدني.',
    ],
    contentEn: [
      'Not every item needs the same wrap: glass differs from sofas, and appliances differ from mattresses.',
      'Choose strong boxes for small items, corner protection for furniture, and tape that will not damage sensitive finishes.',
      'Ask before agreeing whether materials are included in the price.',
      'Review Saedni’s packing and unpacking guide.',
    ],
    publishedAt: '2026-12-18',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'how-to-pack-appliances-for-moving',
    serviceSlug: 'packing',
    titleAr: 'كيفية تغليف الأجهزة الكهربائية',
    titleEn: 'How to pack electrical appliances for moving',
    excerptAr:
      'جهز الجهاز للنقل قبل التغليف، واحمِ الزوايا والأسطح، ووضّح إن كان الفك والتركيب ضمن الاتفاق.',
    excerptEn:
      'Prep the appliance for transit before wrapping, protect corners and surfaces, and clarify whether disconnect and reconnect are included.',
    contentAr: [
      'تغليف الأجهزة وهي غير مجهزة للنقل يزيد خطر التلف — اتفق على التجهيز والفك إن لزم.',
      'استخدم مواد حماية مناسبة ولا تخلط الجهاز مع أوزان ثقيلة في صندوق واحد.',
      'سجّل القطع الحساسة وافحصها بعد فك التغليف.',
      'التفاصيل في دليل التغليف على ساعدني.',
    ],
    contentEn: [
      'Wrapping appliances that are not prepared for transit raises damage risk — agree prep and disconnect if needed.',
      'Use suitable protection and do not mix the appliance with heavy weights in one box.',
      'Log fragile items and inspect them after unpacking.',
      'More detail is in Saedni’s packing guide.',
    ],
    publishedAt: '2026-12-18',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving.jpg',
  },
  {
    slug: 'protect-glass-and-mirrors-during-move',
    serviceSlug: 'packing',
    titleAr: 'طرق حماية الزجاج والمرايا أثناء النقل',
    titleEn: 'How to protect glass and mirrors during a move',
    excerptAr:
      'تغليف منفصل، تثبيت داخل صندوق ملائم، وعلامات واضحة: أساسيات تقلل الكسر أثناء التحميل والنقل.',
    excerptEn:
      'Separate wrapping, secure boxing, and clear labels: basics that reduce breakage during loading and transit.',
    contentAr: [
      'الزجاج والمرايا تحتاج تغليفًا منفصلًا وحماية زوايا وتثبيتًا جيدًا داخل صندوق مناسب.',
      'ضع علامات قابلة للكسر، ولا تضع أوزانًا ثقيلة فوقها.',
      'صوّر القطع الثمينة قبل التغليف وافحصها بعد الوصول.',
      'اسأل عن طريقة التعامل مع الزجاج قبل الاتفاق — الدليل على ساعدني.',
    ],
    contentEn: [
      'Glass and mirrors need separate wrapping, corner protection, and secure placement in a suitable box.',
      'Use fragile labels and do not place heavy weights on top.',
      'Photograph valuable pieces before packing and inspect them on arrival.',
      'Ask how glass will be handled before agreeing — see Saedni’s guide.',
    ],
    publishedAt: '2026-12-18',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'prep-home-before-moving-day',
    serviceSlug: 'packing',
    titleAr: 'تجهيز المنزل قبل يوم نقل العفش',
    titleEn: 'Preparing your home before moving day',
    excerptAr:
      'قائمة مقتنيات، فرز حسب الحساسية، وتصوير الثمين: تجهيز يقلل الضغط يوم النقل.',
    excerptEn:
      'An item list, sorting by fragility, and photos of valuables: prep that reduces stress on moving day.',
    contentAr: [
      'قبل يوم النقل جهّز قائمة بالمقتنيات المهمة وصور القطع الثمينة.',
      'افرز حسب النوع والحساسية، واتفق مكتوبًا على التغليف وفك التغليف والفك والتركيب.',
      'لا تخلط أغراضًا ثقيلة مع خفيفة في صناديق تضعف أو تتكسر.',
      'راجع دليل التغليف وفك التغليف على ساعدني.',
    ],
    contentEn: [
      'Before moving day, prepare a list of important belongings and photos of valuables.',
      'Sort by type and fragility, and agree in writing on packing, unpacking, and disassembly/reassembly.',
      'Do not mix heavy and light items in boxes that can weaken or break.',
      'Review Saedni’s packing and unpacking guide.',
    ],
    publishedAt: '2026-12-19',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving.jpg',
  },
  {
    slug: 'packing-services-riyadh',
    serviceSlug: 'packing',
    citySlug: 'riyadh',
    titleAr: 'خدمات التغليف وفك التغليف في الرياض',
    titleEn: 'Packing and unpacking services in Riyadh',
    excerptAr:
      'ماذا تسأل في الرياض قبل التغليف: المواد، الزجاج، القائمة، وهل فك التغليف مشمول في المكان الجديد.',
    excerptEn:
      'What to ask in Riyadh before packing: materials, glass, inventory, and whether unpacking at the new place is included.',
    contentAr: [
      'في الرياض، وضّح إن كانت مواد التغليف مشمولة، وكيف تُحمى المرايا والزجاج.',
      'اطلب قائمة بالمقتنيات أو علامات على الصناديق، واتفق على فك التغليف بعد الوصول إن احتجته.',
      'اسأل عن أي تعويض أو تأمين مكتوب عند التلف ضمن الاتفاق.',
      'راجع دليل التغليف على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, clarify whether packing materials are included and how mirrors and glass are protected.',
      'Ask for an item list or labeled boxes, and agree unpacking on arrival if you need it.',
      'Ask about any written compensation or insurance terms for damage in the agreement.',
      'Review Saedni’s packing guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-19',
    readMinutes: 5,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'packing-services-jeddah',
    serviceSlug: 'packing',
    citySlug: 'jeddah',
    titleAr: 'التغليف قبل النقل في جدة: أثاث وأجهزة ومقتنيات حساسة',
    titleEn: 'Pre-move packing in Jeddah: furniture, appliances, and fragile items',
    excerptAr:
      'نصائح لأصحاب المنازل في جدة حول فرز القطع الحساسة، مواد التغليف، وفك التغليف بعد الوصول.',
    excerptEn:
      'Tips for Jeddah homeowners on sorting fragile items, packing materials, and unpacking after arrival.',
    contentAr: [
      'في جدة، ابدأ بفرز الزجاج والتحف والأجهزة قبل باقي الأثاث.',
      'اتفق على المواد وهل تشمل فك الأثاث أو الأجهزة إن لزم، ومدة العمل المتوقعة.',
      'افحص المقتنيات بعد فك التغليف وقارنها بالقائمة.',
      'استخدم دليل التغليف وفك التغليف على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, start by sorting glass, collectibles, and appliances before the rest of the furniture.',
      'Agree materials and whether furniture or appliance disconnect is included if needed, plus expected duration.',
      'Inspect belongings after unpacking and compare them to your list.',
      'Use Saedni’s packing guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-19',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving.jpg',
  },
  {
    slug: 'why-cockroaches-appear-at-home',
    serviceSlug: 'pest-control',
    titleAr: 'أسباب ظهور الصراصير في المنزل',
    titleEn: 'Why cockroaches appear at home',
    excerptAr:
      'مصادر طعام ومياه وشقوق للدخول: أسباب شائعة — ولماذا الرش العشوائي لا يكفي بدون معالجة المصدر.',
    excerptEn:
      'Food, water, and entry gaps: common causes — and why random spraying is not enough without treating the source.',
    contentAr: [
      'الصراصير تنجذب لمصادر الطعام والمياه والأماكن الرطبة والشقوق التي تدخل منها.',
      'الرش العشوائي أو المنتجات المجهولة قد لا تحل المشكلة وقد تزيد الخطر.',
      'اطلب تحديد نوع الآفة ومصدرها، ومنتجات مسجلة، وتعليمات سلامة واضحة.',
      'راجع دليل مكافحة الحشرات على ساعدني.',
    ],
    contentEn: [
      'Cockroaches are drawn to food, water, damp areas, and gaps they can enter through.',
      'Random spraying or unknown products may not solve the problem and can increase risk.',
      'Ask for pest identification and source, registered products, and clear safety instructions.',
      'Review Saedni’s pest control guide.',
    ],
    publishedAt: '2026-12-20',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'prevent-ants-in-the-kitchen',
    serviceSlug: 'pest-control',
    titleAr: 'كيفية الوقاية من النمل داخل المطبخ',
    titleEn: 'How to prevent ants in the kitchen',
    excerptAr:
      'إغلاق الطعام، تنظيف بقايا السوائل، وسد الفتحات: وقاية تقلل عودة النمل بعد المكافحة.',
    excerptEn:
      'Seal food, clean liquid residues, and close gaps: prevention that reduces ants returning after treatment.',
    contentAr: [
      'الوقاية تكمل المكافحة: نظّف بقايا الطعام والسوائل وأغلق مصادر الجذب.',
      'سد الشقوق والفتحات يقلل مسارات الدخول الجديدة.',
      'بعد المعالجة التزم بفترة العودة وتعليمات المختص وملصق المنتج.',
      'الأسئلة قبل الاتفاق في دليل مكافحة الحشرات على ساعدني.',
    ],
    contentEn: [
      'Prevention complements treatment: clean food and liquid residues and remove attractants.',
      'Sealing cracks and openings reduces new entry paths.',
      'After treatment, follow re-entry timing and specialist/label guidance.',
      'Pre-hire questions are in Saedni’s pest control guide.',
    ],
    publishedAt: '2026-12-20',
    readMinutes: 4,
    image: '/images/hero/hero-02-finishing-desktop.jpg',
  },
  {
    slug: 'bed-bug-warning-signs',
    serviceSlug: 'pest-control',
    titleAr: 'علامات وجود بق الفراش',
    titleEn: 'Signs of bed bugs',
    excerptAr:
      'آثار على الأفرشة أو لدغات متكررة: مؤشرات تستدعي فحصًا متخصصًا — لأن زيارة واحدة قد لا تكفي.',
    excerptEn:
      'Marks on bedding or repeat bites: signs that need specialist inspection — because one visit may not be enough.',
    contentAr: [
      'بق الفراش يحتاج فحصًا وتحديدًا دقيقًا؛ لا تعتمد على رش عام بلا تشخيص.',
      'بعض الآفات تحتاج متابعة أو أكثر من زيارة حسب درجة الانتشار.',
      'اسأل عن طريقة المكافحة والمنتجات المسجلة وتعليمات السلامة قبل الاتفاق.',
      'راجع دليل مكافحة الحشرات على ساعدني.',
    ],
    contentEn: [
      'Bed bugs need accurate inspection and identification; do not rely on generic spraying without diagnosis.',
      'Some pests need follow-up or more than one visit depending on spread.',
      'Ask about method, registered products, and safety instructions before agreeing.',
      'Review Saedni’s pest control guide.',
    ],
    publishedAt: '2026-12-20',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning.jpg',
  },
  {
    slug: 'pest-control-vs-prevention',
    serviceSlug: 'pest-control',
    titleAr: 'الفرق بين مكافحة الحشرات والوقاية منها',
    titleEn: 'Pest control vs pest prevention',
    excerptAr:
      'المكافحة تعالج الانتشار الحالي، والوقاية تقلل العودة عبر سد المصادر والفتحات ومتابعة النظافة.',
    excerptEn:
      'Control treats current infestation; prevention reduces return by sealing sources and openings and keeping hygiene up.',
    contentAr: [
      'المكافحة وحدها قد لا تكفي لو بقيت مصادر الطعام والمياه والدخول مفتوحة.',
      'اطلب إرشادات وقاية بعد التنفيذ، واسأل إن كانت المتابعة مشمولة.',
      'النمل الأبيض يختلف تمامًا عن الصراصير في الفحص والمعالجة.',
      'التفاصيل في دليل مكافحة الحشرات على ساعدني.',
    ],
    contentEn: [
      'Treatment alone may fail if food, water, and entry sources remain open.',
      'Ask for prevention tips after treatment, and whether follow-up is included.',
      'Termites differ completely from cockroaches in inspection and treatment.',
      'More detail is in Saedni’s pest control guide.',
    ],
    publishedAt: '2026-12-21',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'pest-control-riyadh',
    serviceSlug: 'pest-control',
    citySlug: 'riyadh',
    titleAr: 'مكافحة الحشرات في الرياض: ماذا تسأل قبل الخدمة؟',
    titleEn: 'Pest control in Riyadh: what to ask before service',
    excerptAr:
      'نوع الآفة، المنتجات المسجلة، السلامة، والمتابعة: أسئلة لأصحاب المنازل في الرياض قبل الاتفاق.',
    excerptEn:
      'Pest type, registered products, safety, and follow-up: questions for Riyadh homeowners before agreeing.',
    contentAr: [
      'في الرياض، ابدأ بتأكيد نوع الحشرة وطريقة المكافحة قبل السعر.',
      'اسأل هل المنتجات مسجلة ومناسبة للاستخدام المنزلي، ومتى يمكن العودة للمكان.',
      'وضّح إن كان هناك ضمان مكتوب ومتابعة ضمن الاتفاق.',
      'راجع دليل مكافحة الحشرات على ساعدني قبل الاتفاق في الرياض.',
    ],
    contentEn: [
      'In Riyadh, start by confirming pest type and method before focusing on price.',
      'Ask whether products are registered and suitable for home use, and when re-entry is allowed.',
      'Clarify whether a written warranty and follow-up are in the agreement.',
      'Review Saedni’s pest control guide before agreeing in Riyadh.',
    ],
    publishedAt: '2026-12-21',
    readMinutes: 5,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'pest-control-jeddah',
    serviceSlug: 'pest-control',
    citySlug: 'jeddah',
    titleAr: 'مكافحة الحشرات في جدة: مطابخ ورطوبة وأماكن التكاثر',
    titleEn: 'Pest control in Jeddah: kitchens, humidity, and breeding sites',
    excerptAr:
      'الرطوبة ومصادر المياه في جدة تزيد أهمية فحص أماكن التكاثر — ماذا تطلب قبل المعالجة.',
    excerptEn:
      'Humidity and water sources in Jeddah make breeding-site checks more important — what to request before treatment.',
    contentAr: [
      'في جدة، افحص مصادر الرطوبة والطعام مع نوع الآفة — خصوصًا المطابخ والحمامات.',
      'لا تخلط المبيدات بنفسك، واطلب منتجات مسجلة وتعليمات سلامة واضحة.',
      'اسأل عن سد الفتحات والمتابعة إن لزم بعد الزيارة الأولى.',
      'استخدم دليل مكافحة الحشرات على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, check humidity and food sources with the pest type — especially kitchens and bathrooms.',
      'Do not mix pesticides yourself; ask for registered products and clear safety instructions.',
      'Ask about sealing openings and follow-up if needed after the first visit.',
      'Use Saedni’s pest control guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-21',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning.jpg',
  },
  {
    slug: 'move-furniture-without-damage',
    serviceSlug: 'furniture-moving',
    titleAr: 'خطوات نقل العفش دون تلف',
    titleEn: 'Steps to move furniture without damage',
    excerptAr:
      'معاينة، تغليف، تثبيت داخل السيارة، وفحص عند التسليم: مراحل تقلل التلف أثناء نقل الأثاث.',
    excerptEn:
      'Survey, packing, securing the load, and delivery checks: stages that reduce damage during a furniture move.',
    contentAr: [
      'ابدأ بمعاينة وتقدير الحمولة قبل اختيار السيارة والطاقم.',
      'التغليف والتثبيت داخل السيارة أهم من السرعة في التحميل.',
      'وثّق القطع الثمينة وافحصها عند التسليم وفق الاتفاق.',
      'راجع دليل نقل الأثاث على ساعدني قبل الموعد.',
    ],
    contentEn: [
      'Start with a survey and load estimate before choosing the truck and crew.',
      'Packing and securing the load matter more than rushing the loading.',
      'Document valuable pieces and inspect them on delivery as agreed.',
      'Review Saedni’s furniture moving guide before the move date.',
    ],
    publishedAt: '2026-12-22',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'prepare-apartment-before-moving',
    serviceSlug: 'furniture-moving',
    titleAr: 'كيفية تجهيز الشقة قبل النقل',
    titleEn: 'How to prepare an apartment before moving',
    excerptAr:
      'تفريغ الخزائن، قياس الممرات، والاتفاق على الأدوار والمصاعد: تجهيز يقلل المفاجآت يوم النقل.',
    excerptEn:
      'Empty cabinets, measure corridors, and agree on floors and elevators: prep that reduces surprises on moving day.',
    contentAr: [
      'فرّغ الأدراج والخزائن من الأغراض القابلة للكسر قبل التحميل.',
      'قِس الأبواب والممرات واتفق على الأدوار والمصاعد مسبقًا.',
      'حدّد موقع الاستلام والتسليم ونطاق الفك والتغليف بوضوح.',
      'الأسئلة قبل الاتفاق في دليل نقل الأثاث على ساعدني.',
    ],
    contentEn: [
      'Empty drawers and cabinets of breakables before loading.',
      'Measure doors and corridors and agree on floors and elevators in advance.',
      'Confirm pickup and delivery locations and the packing/disassembly scope clearly.',
      'Pre-hire questions are in Saedni’s furniture moving guide.',
    ],
    publishedAt: '2026-12-22',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving.jpg',
  },
  {
    slug: 'intercity-furniture-moving-tips',
    serviceSlug: 'furniture-moving',
    titleAr: 'نصائح نقل الأثاث بين المدن',
    titleEn: 'Tips for intercity furniture moves',
    excerptAr:
      'المسافة والحمولة والتأمين ومواعيد الاستلام والتسليم: نقاط مهمة قبل النقل بين المدن السعودية.',
    excerptEn:
      'Distance, load, insurance, and pickup/delivery timing: key points before an intercity move in Saudi Arabia.',
    contentAr: [
      'النقل بين المدن يعتمد على المسافة وطبيعة الحمولة وتوفر الخدمة.',
      'اسأل عن التأمين أو التعويض المكتوب وعن تثبيت الحمولة في السيارة المغلقة.',
      'وضّح موعد الاستلام والتسليم وما يشمله السعر من فك وتركيب.',
      'التفاصيل في دليل نقل الأثاث على ساعدني.',
    ],
    contentEn: [
      'Intercity moves depend on distance, load type, and service availability.',
      'Ask about written insurance or compensation and securing the load in a closed truck.',
      'Clarify pickup and delivery times and whether disassembly and reassembly are included.',
      'More detail is in Saedni’s furniture moving guide.',
    ],
    publishedAt: '2026-12-22',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'furniture-moving-cost-factors',
    serviceSlug: 'furniture-moving',
    titleAr: 'تكلفة نقل الأثاث والعوامل المؤثرة فيها',
    titleEn: 'Furniture moving cost and what affects it',
    excerptAr:
      'حجم الحمولة والمسافة والعمال والفك والتغليف: عوامل تغيّر السعر — فلا تقارن الرقم وحده.',
    excerptEn:
      'Load size, distance, crew, disassembly, and packing: factors that change the price — so do not compare the number alone.',
    contentAr: [
      'السعر يتأثر بحجم الحمولة والمسافة وعدد العمال وخدمات الفك والتغليف والتحميل.',
      'اسأل إن كانت مواد التغليف والأدوار المرتفعة مشمولة في العرض.',
      'قارن ما يشمله السعر لا الرقم فقط، ووثّق حالة الأثاث قبل النقل.',
      'راجع دليل نقل الأثاث على ساعدني قبل الاتفاق.',
    ],
    contentEn: [
      'Price depends on load size, distance, crew size, and packing, disassembly, and loading services.',
      'Ask whether packing materials and higher floors are included in the quote.',
      'Compare what the price covers, not the number alone, and document furniture condition before the move.',
      'Review Saedni’s furniture moving guide before agreeing.',
    ],
    publishedAt: '2026-12-23',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving.jpg',
  },
  {
    slug: 'furniture-moving-riyadh',
    serviceSlug: 'furniture-moving',
    citySlug: 'riyadh',
    titleAr: 'نقل الأثاث في الرياض: ماذا تسأل قبل الحجز؟',
    titleEn: 'Furniture moving in Riyadh: what to ask before booking',
    excerptAr:
      'حجم السيارة، الفك والتركيب، والتأمين: أسئلة لأصحاب الشقق والفلل في الرياض قبل الاتفاق.',
    excerptEn:
      'Truck size, disassembly and reassembly, and insurance: questions for Riyadh apartment and villa owners before agreeing.',
    contentAr: [
      'في الرياض، ابدأ بتقدير الحمولة وحجم السيارة قبل مقارنة الأسعار.',
      'اسأل هل السعر يشمل الفك والتركيب والتحميل والتنزيل ومواد التغليف.',
      'وضّح مسؤولية التلفيات وهل يوجد تعويض مكتوب.',
      'راجع دليل نقل الأثاث على ساعدني قبل الحجز في الرياض.',
    ],
    contentEn: [
      'In Riyadh, start with load estimate and truck size before comparing prices.',
      'Ask whether the price includes disassembly, reassembly, loading, unloading, and packing materials.',
      'Clarify damage responsibility and whether written compensation exists.',
      'Review Saedni’s furniture moving guide before booking in Riyadh.',
    ],
    publishedAt: '2026-12-23',
    readMinutes: 5,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'furniture-moving-jeddah',
    serviceSlug: 'furniture-moving',
    citySlug: 'jeddah',
    titleAr: 'نقل الأثاث في جدة: أدوار وممرات وتثبيت الحمولة',
    titleEn: 'Furniture moving in Jeddah: floors, corridors, and securing the load',
    excerptAr:
      'قياس الممرات والأدوار وتثبيت الأثاث داخل السيارة: نقاط مهمة قبل النقل في جدة.',
    excerptEn:
      'Measuring corridors and floors and securing furniture in the truck: key points before a Jeddah move.',
    contentAr: [
      'في جدة، اتفق على الأدوار والمصاعد وقيس الممرات والأبواب مبكرًا.',
      'اطلب تغليفًا مناسبًا وتثبيتًا داخل السيارة — خصوصًا للأجهزة والقطع الثقيلة.',
      'أعد قائمة بالمقتنيات وافحص عند التسليم.',
      'استخدم دليل نقل الأثاث على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, agree on floors and elevators and measure corridors and doors early.',
      'Request suitable packing and securing in the truck — especially for appliances and heavy pieces.',
      'Prepare an inventory list and inspect on delivery.',
      'Use Saedni’s furniture moving guide before the move in Jeddah.',
    ],
    publishedAt: '2026-12-23',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving.jpg',
  },
  {
    slug: 'preventive-maintenance-commercial-buildings',
    serviceSlug: 'commercial-maintenance',
    titleAr: 'أهمية الصيانة الوقائية للمباني التجارية',
    titleEn: 'Why preventive maintenance matters for commercial buildings',
    excerptAr:
      'اكتشاف مبكر للأعطال وتقليل التوقف المفاجئ: لماذا الوقاية أهم من الانتظار حتى العطل الكبير.',
    excerptEn:
      'Earlier fault detection and less sudden downtime: why prevention beats waiting for a major failure.',
    contentAr: [
      'تأجيل الصيانة حتى عطل كبير يرفع التكلفة ويعطّل النشاط التجاري.',
      'الوقائية تساعد على اكتشاف المشكلات مبكرًا قبل أن تتفاقم.',
      'اطلب جدول زيارات واضح وتوثيقًا للأعمال قبل التعاقد.',
      'راجع دليل صيانة العقارات التجارية على ساعدني.',
    ],
    contentEn: [
      'Delaying maintenance until a major failure raises cost and disrupts business.',
      'Preventive work helps find issues earlier before they escalate.',
      'Ask for a clear visit schedule and documented work before contracting.',
      'Review Saedni’s commercial property maintenance guide.',
    ],
    publishedAt: '2026-12-24',
    readMinutes: 4,
    image: '/images/hero/hero-11-contracting-desktop.jpg',
  },
  {
    slug: 'periodic-vs-corrective-maintenance',
    serviceSlug: 'commercial-maintenance',
    titleAr: 'الفرق بين الصيانة الدورية والتصحيحية',
    titleEn: 'Periodic vs corrective maintenance',
    excerptAr:
      'دورية وفق جدول، وتصحيحية عند العطل: متى تحتاج كل نوع وكيف تجمع بينهما في عقد واضح.',
    excerptEn:
      'Periodic on a schedule, corrective when something fails: when you need each and how to combine them in a clear contract.',
    contentAr: [
      'الدورية تتبع جدولًا ثابتًا، والتصحيحية تستجيب لأعطال طارئة.',
      'العقد الجيد يوضّح الأنظمة المشمولة وجدول الزيارات وفريق الطوارئ إن وُجد.',
      'سجلات الصيانة تربط بين النوعين وتكشف الأعطال المتكررة.',
      'التفاصيل في دليل صيانة العقارات التجارية على ساعدني.',
    ],
    contentEn: [
      'Periodic work follows a fixed schedule; corrective work responds to urgent faults.',
      'A good contract clarifies covered systems, visit schedule, and emergency response if included.',
      'Maintenance logs connect both types and reveal recurring faults.',
      'More detail is in Saedni’s commercial property maintenance guide.',
    ],
    publishedAt: '2026-12-24',
    readMinutes: 4,
    image: '/images/hero/hero-05-electrical-desktop.jpg',
  },
  {
    slug: 'commercial-property-maintenance-schedule',
    serviceSlug: 'commercial-maintenance',
    titleAr: 'جدول صيانة العقارات التجارية',
    titleEn: 'A commercial property maintenance schedule',
    excerptAr:
      'أولويات، زيارات دورية، وتقارير: عناصر جدول صيانة يقلل المفاجآت في المحلات والمكاتب.',
    excerptEn:
      'Priorities, periodic visits, and reports: schedule elements that reduce surprises in shops and offices.',
    contentAr: [
      'ابدأ بمعاينة الأنظمة ثم رتّب الأولويات قبل وضع الجدول الزمني.',
      'اسأل عن تقارير الصيانة وأوقات العمل المتاحة لتقليل تعطيل النشاط.',
      'المرافق المشتركة والواجهات تحتاج متابعة ضمن الجدول لا بعد العطل فقط.',
      'الأسئلة قبل الاتفاق في دليل صيانة العقارات التجارية على ساعدني.',
    ],
    contentEn: [
      'Start by surveying systems, then set priorities before building the timeline.',
      'Ask about maintenance reports and available work hours to reduce business disruption.',
      'Common areas and facades need schedule follow-up, not only after failure.',
      'Pre-hire questions are in Saedni’s commercial property maintenance guide.',
    ],
    publishedAt: '2026-12-24',
    readMinutes: 4,
    image: '/images/hero/hero-06-ac-desktop.jpg',
  },
  {
    slug: 'managing-commercial-building-faults',
    serviceSlug: 'commercial-maintenance',
    titleAr: 'كيفية إدارة أعطال المباني التجارية',
    titleEn: 'How to manage commercial building faults',
    excerptAr:
      'تسجيل العطل، تحديد المسؤول، ومتابعة السبب: أسلوب يقلل تكرار الأعطال في المنشآت.',
    excerptEn:
      'Log the fault, assign responsibility, and follow the root cause: a approach that reduces repeat failures in facilities.',
    contentAr: [
      'سجّل الأعطال والإصلاحات وقطع الغيار المستخدمة لمتابعة أفضل.',
      'حدّد مسؤوليات المقاولين والفنيين قبل التنفيذ — خصوصًا الأعمال الخطرة.',
      'المصاعد وأنظمة الحريق تحتاج جهات مؤهلة ومتخصصة لا اجتهادًا عامًا.',
      'راجع دليل صيانة العقارات التجارية على ساعدني.',
    ],
    contentEn: [
      'Log faults, repairs, and parts used for better follow-up.',
      'Define contractor and technician responsibilities before work — especially for hazardous tasks.',
      'Elevators and fire systems need qualified specialized parties, not general improvisation.',
      'Review Saedni’s commercial property maintenance guide.',
    ],
    publishedAt: '2026-12-25',
    readMinutes: 4,
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'commercial-maintenance-riyadh',
    serviceSlug: 'commercial-maintenance',
    citySlug: 'riyadh',
    titleAr: 'صيانة المباني التجارية في الرياض: ماذا تطلب في العقد؟',
    titleEn: 'Commercial building maintenance in Riyadh: what to ask in the contract',
    excerptAr:
      'الأنظمة المشمولة، جدول الزيارات، والتقارير: نقاط لأصحاب المحلات والمكاتب في الرياض.',
    excerptEn:
      'Covered systems, visit schedule, and reports: points for Riyadh shop and office owners.',
    contentAr: [
      'في الرياض، حدّد الأنظمة المطلوب متابعتها قبل مقارنة الأسعار.',
      'اطلب جدول زيارات واضحًا وهل قطع الغيار وفريق الطوارئ مشمولان.',
      'تأكد من الالتزام بمتطلبات السلامة والأنظمة المحلية في نطاق العمل.',
      'راجع دليل صيانة العقارات التجارية على ساعدني قبل التعاقد في الرياض.',
    ],
    contentEn: [
      'In Riyadh, define the systems that need follow-up before comparing prices.',
      'Ask for a clear visit schedule and whether parts and emergency response are included.',
      'Confirm safety requirements and local regulations are covered in the scope.',
      'Review Saedni’s commercial property maintenance guide before contracting in Riyadh.',
    ],
    publishedAt: '2026-12-25',
    readMinutes: 5,
    image: '/images/hero/hero-11-contracting-desktop.jpg',
  },
  {
    slug: 'commercial-maintenance-jeddah',
    serviceSlug: 'commercial-maintenance',
    citySlug: 'jeddah',
    titleAr: 'صيانة المنشآت التجارية في جدة: تشغيل بلا تعطيل',
    titleEn: 'Commercial facility maintenance in Jeddah: keep operations running',
    excerptAr:
      'أوقات العمل خارج الذروة ومتابعة التكييف والمرافق المشتركة: نقاط مهمة قبل الصيانة في جدة.',
    excerptEn:
      'Off-peak work hours and HVAC/common-area follow-up: key points before maintenance in Jeddah.',
    contentAr: [
      'في جدة، نظّم بعض الأعمال خارج أوقات الذروة لتقليل تعطيل النشاط.',
      'التكييف والتهوية والمرافق المشتركة تستحق متابعة دورية واضحة في العقد.',
      'اطلب تقارير صيانة وسجلاً للأعطال المتكررة.',
      'استخدم دليل صيانة العقارات التجارية على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, schedule some work off-peak to reduce business disruption.',
      'HVAC and common areas deserve clear periodic follow-up in the contract.',
      'Ask for maintenance reports and a log of recurring faults.',
      'Use Saedni’s commercial property maintenance guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-25',
    readMinutes: 4,
    image: '/images/hero/hero-06-ac.jpg',
  },
  {
    slug: 'small-home-garden-ideas',
    serviceSlug: 'landscaping',
    titleAr: 'أفكار تنسيق حدائق منزلية صغيرة',
    titleEn: 'Ideas for small home garden landscaping',
    excerptAr:
      'أحواض زراعة ونباتات مناسبة وممرات صغيرة: كيف تستغل مساحة خارجية محدودة بوضوح.',
    excerptEn:
      'Planters, suitable plants, and small paths: how to use limited outdoor space clearly.',
    contentAr: [
      'الحديقة الصغيرة تحتاج اختيار نباتات بأحجام مناسبة وتنظيم ممرات بسيط.',
      'أحواض الزراعة تساعد على استغلال المساحة دون ازدحام.',
      'حدّد الشمس والمساحة واحتياجات الري قبل التصميم.',
      'راجع دليل تنسيق الحدائق على ساعدني.',
    ],
    contentEn: [
      'A small garden needs plant sizes that fit and simple path layout.',
      'Planters help use space without crowding.',
      'Define sun, area, and irrigation needs before design.',
      'Review Saedni’s landscaping guide.',
    ],
    publishedAt: '2026-12-26',
    readMinutes: 4,
    image: '/images/hero/hero-13-landscaping-desktop.jpg',
  },
  {
    slug: 'natural-vs-artificial-turf',
    serviceSlug: 'landscaping',
    titleAr: 'الفرق بين العشب الطبيعي والصناعي',
    titleEn: 'Natural vs artificial turf',
    excerptAr:
      'ري وعناية مقابل تنظيف وصيانة: قارن النوعين حسب المساحة والمياه قبل الاختيار.',
    excerptEn:
      'Watering and care versus cleaning and upkeep: compare both by space and water before choosing.',
    contentAr: [
      'العشب الطبيعي يحتاج تربة وريًا وعناية مستمرة.',
      'العشب الصناعي لا يحتاج ريًا زراعيًا لكنه يحتاج تنظيفًا وصيانة.',
      'اسأل عن نوع العشب وهل خطة توفير المياه ضمن العرض.',
      'التفاصيل في دليل تنسيق الحدائق على ساعدني.',
    ],
    contentEn: [
      'Natural turf needs soil, watering, and ongoing care.',
      'Artificial turf needs no agricultural irrigation but still needs cleaning and upkeep.',
      'Ask about turf type and whether a water-saving plan is in the quote.',
      'More detail is in Saedni’s landscaping guide.',
    ],
    publishedAt: '2026-12-26',
    readMinutes: 4,
    image: '/images/hero/hero-13-landscaping.jpg',
  },
  {
    slug: 'plants-for-saudi-climate',
    serviceSlug: 'landscaping',
    titleAr: 'اختيار النباتات المناسبة للمناخ السعودي',
    titleEn: 'Choosing plants suited to the Saudi climate',
    excerptAr:
      'مدينة وحرارة وتربة وشمس ومياه: عوامل تحدد النباتات المناسبة قبل الزراعة.',
    excerptEn:
      'City, heat, soil, sun, and water: factors that decide suitable plants before planting.',
    contentAr: [
      'اختيار نباتات لا تناسب المناخ يرفع الصيانة واستهلاك المياه.',
      'وزّع النباتات حسب احتياجها للشمس وادرس التربة قبل الزراعة.',
      'اطلب أنواعًا مناسبة لمناخ مدينتك ضمن العرض.',
      'الأسئلة قبل الاتفاق في دليل تنسيق الحدائق على ساعدني.',
    ],
    contentEn: [
      'Plants that do not suit the climate raise maintenance and water use.',
      'Place plants by sun needs and study the soil before planting.',
      'Ask for types suited to your city’s climate in the quote.',
      'Pre-hire questions are in Saedni’s landscaping guide.',
    ],
    publishedAt: '2026-12-26',
    readMinutes: 4,
    image: '/images/hero/hero-13-landscaping-desktop.jpg',
  },
  {
    slug: 'drip-irrigation-importance',
    serviceSlug: 'landscaping',
    titleAr: 'أهمية أنظمة الري بالتنقيط',
    titleEn: 'Why drip irrigation systems matter',
    excerptAr:
      'ري أدق وتصريف أوضح وتوفير مياه: لماذا شبكة الري جزء أساسي من تنسيق الحديقة.',
    excerptEn:
      'More precise watering, clearer drainage, and water savings: why irrigation is a core part of landscaping.',
    contentAr: [
      'الإفراط في الري وإهمال التصريف من الأخطاء الشائعة بعد الزراعة.',
      'الري بالتنقيط أو التحكم الأوتوماتيكي يُصمَّم حسب النباتات والمساحة.',
      'اسأل هل شبكة الري وتجهيز التربة مشمولان في السعر.',
      'راجع دليل تنسيق الحدائق على ساعدني.',
    ],
    contentEn: [
      'Overwatering and poor drainage are common mistakes after planting.',
      'Drip or automatic irrigation should be designed for plant types and area.',
      'Ask whether the irrigation network and soil prep are included in the price.',
      'Review Saedni’s landscaping guide.',
    ],
    publishedAt: '2026-12-27',
    readMinutes: 4,
    image: '/images/hero/hero-13-landscaping.jpg',
  },
  {
    slug: 'landscaping-riyadh',
    serviceSlug: 'landscaping',
    citySlug: 'riyadh',
    titleAr: 'تنسيق الحدائق في الرياض: شمس وري ونباتات مناسبة',
    titleEn: 'Landscaping in Riyadh: sun, irrigation, and suitable plants',
    excerptAr:
      'تعرض الشمس واحتياج الري: نقاط لأصحاب الفلل والمنازل في الرياض قبل التصميم.',
    excerptEn:
      'Sun exposure and irrigation needs: points for Riyadh villa and home owners before design.',
    contentAr: [
      'في الرياض، ابدأ بدراسة الشمس والمساحة قبل اختيار النباتات والعشب.',
      'اطلب نباتات مناسبة للمناخ وخطة ري تقلل الهدر.',
      'وضّح إن كانت الصيانة بعد التنفيذ مشمولة في الاتفاق.',
      'راجع دليل تنسيق الحدائق على ساعدني قبل التعاقد في الرياض.',
    ],
    contentEn: [
      'In Riyadh, start with sun and space before choosing plants and turf.',
      'Ask for climate-suited plants and an irrigation plan that reduces waste.',
      'Clarify whether post-install maintenance is included in the agreement.',
      'Review Saedni’s landscaping guide before contracting in Riyadh.',
    ],
    publishedAt: '2026-12-27',
    readMinutes: 5,
    image: '/images/hero/hero-13-landscaping-desktop.jpg',
  },
  {
    slug: 'landscaping-jeddah',
    serviceSlug: 'landscaping',
    citySlug: 'jeddah',
    titleAr: 'تنسيق الحدائق في جدة: تربة وتصريف وممرات',
    titleEn: 'Landscaping in Jeddah: soil, drainage, and paths',
    excerptAr:
      'تجهيز التربة والتصريف وتنظيم الممرات: نقاط مهمة قبل تنسيق المساحات الخارجية في جدة.',
    excerptEn:
      'Soil prep, drainage, and path layout: key points before outdoor landscaping in Jeddah.',
    contentAr: [
      'في جدة، اهتم بتجهيز التربة وتصريف المياه قبل الزراعة.',
      'نظم الممرات ومناطق الجلوس بحيث يسهل الوصول للصيانة.',
      'اسأل عن نوع العشب وهل التصميم والزراعة مشمولان معًا.',
      'استخدم دليل تنسيق الحدائق على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'In Jeddah, focus on soil prep and drainage before planting.',
      'Lay out paths and seating so maintenance access stays easy.',
      'Ask about turf type and whether design and planting are bundled.',
      'Use Saedni’s landscaping guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-27',
    readMinutes: 4,
    image: '/images/hero/hero-13-landscaping.jpg',
  },
  {
    slug: 'prepare-furniture-for-long-term-storage',
    serviceSlug: 'storage',
    titleAr: 'كيفية تجهيز الأثاث للتخزين طويل الأجل',
    titleEn: 'How to prepare furniture for long-term storage',
    excerptAr:
      'تغليف مناسب وتوثيق المقتنيات وتجنب التخزين وهو رطب: خطوات تحمي الأثاث قبل المدة الطويلة.',
    excerptEn:
      'Suitable packing, inventory documentation, and avoiding damp storage: steps that protect furniture before a long period.',
    contentAr: [
      'لا تخزّن الأثاث وهو رطب، واستخدم مواد تغليف مناسبة لكل قطعة.',
      'أعد قائمة بالمقتنيات ولا تضع أثقالًا فوق القطع الحساسة.',
      'اختر مكانًا نظيفًا ومؤمنًا مع حماية من الرطوبة قدر الإمكان.',
      'راجع دليل خدمات التخزين على ساعدني.',
    ],
    contentEn: [
      'Do not store furniture while damp, and use packing materials suited to each piece.',
      'Prepare an inventory list and do not place heavy items on sensitive pieces.',
      'Choose a clean, secure place with humidity protection when possible.',
      'Review Saedni’s storage services guide.',
    ],
    publishedAt: '2026-12-28',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'short-vs-long-term-storage',
    serviceSlug: 'storage',
    titleAr: 'الفرق بين التخزين قصير وطويل الأجل',
    titleEn: 'Short-term vs long-term storage',
    excerptAr:
      'أيام وأسابيع مقابل أشهر: كيف تختلف التكلفة والاشتراطات ومستوى الحماية حسب المدة.',
    excerptEn:
      'Days and weeks versus months: how cost, terms, and protection level change with duration.',
    contentAr: [
      'التخزين القصير يناسب الانتقال المؤقت، والطويل يحتاج تجهيزًا أقوى ضد الرطوبة والغبار.',
      'اسأل إن كان السعر يوميًا أم شهريًا وما الرسوم الإضافية.',
      'راجع شروط الوصول والاستلام عند انتهاء المدة قبل الاتفاق.',
      'التفاصيل في دليل خدمات التخزين على ساعدني.',
    ],
    contentEn: [
      'Short-term storage suits temporary moves; long-term needs stronger prep against humidity and dust.',
      'Ask whether pricing is daily or monthly and what extra fees apply.',
      'Review access and collection terms for when the period ends before agreeing.',
      'More detail is in Saedni’s storage services guide.',
    ],
    publishedAt: '2026-12-28',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving.jpg',
  },
  {
    slug: 'choose-suitable-storage-warehouse',
    serviceSlug: 'storage',
    titleAr: 'كيف تختار مستودع تخزين مناسبًا؟',
    titleEn: 'How to choose a suitable storage warehouse',
    excerptAr:
      'نظافة وأمان ورطوبة وعقد واضح: معايير أهم من المساحة والسعر وحدهما.',
    excerptEn:
      'Cleanliness, security, humidity, and a clear contract: criteria that matter more than size and price alone.',
    contentAr: [
      'افحص النظافة والأمان والرطوبة قبل اختيار المساحة.',
      'اسأل عن المراقبة والحراسة وشروط زيارة المخزن.',
      'راجع العقد للمسؤولية عن التلف والمواد غير المسموح بتخزينها.',
      'الأسئلة قبل الاتفاق في دليل خدمات التخزين على ساعدني.',
    ],
    contentEn: [
      'Check cleanliness, security, and humidity before choosing a unit size.',
      'Ask about monitoring, security staff, and warehouse visit terms.',
      'Review the contract for damage responsibility and prohibited items.',
      'Pre-hire questions are in Saedni’s storage services guide.',
    ],
    publishedAt: '2026-12-28',
    readMinutes: 4,
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'protect-furniture-from-humidity-in-storage',
    serviceSlug: 'storage',
    titleAr: 'طرق حماية الأثاث من الرطوبة أثناء التخزين',
    titleEn: 'Ways to protect furniture from humidity in storage',
    excerptAr:
      'تهوية وتغليف ومكان بلا تسرب: نقاط تقلل تلف الأثاث بسبب الرطوبة.',
    excerptEn:
      'Ventilation, packing, and a leak-free site: points that reduce humidity damage to furniture.',
    contentAr: [
      'تجاهل الرطوبة والحرارة من أكثر أسباب تلف الأثاث المخزّن.',
      'اسأل عن التهوية والحماية من تسرب المياه والتحكم في الرطوبة إن لزم.',
      'التغليف الجيد وقائمة المقتنيات يكملان حماية المكان.',
      'راجع دليل خدمات التخزين على ساعدني.',
    ],
    contentEn: [
      'Ignoring humidity and heat is a common cause of stored furniture damage.',
      'Ask about ventilation, leak protection, and humidity control when needed.',
      'Good packing and an inventory list complement site protection.',
      'Review Saedni’s storage services guide.',
    ],
    publishedAt: '2026-12-29',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'storage-riyadh',
    serviceSlug: 'storage',
    citySlug: 'riyadh',
    titleAr: 'تخزين الأثاث في الرياض: ماذا تسأل قبل الحجز؟',
    titleEn: 'Furniture storage in Riyadh: what to ask before booking',
    excerptAr:
      'المساحة والأمان والرطوبة والعقد: أسئلة لأصحاب المنازل والمكاتب في الرياض.',
    excerptEn:
      'Space, security, humidity, and the contract: questions for Riyadh homeowners and offices.',
    contentAr: [
      'في الرياض، لا تقارن السعر والمساحة فقط — افحص النظافة والأمان والرطوبة.',
      'اسأل هل النقل والتغليف مشمولان ومتى وكيف يتم الاستلام.',
      'راجع شروط التأمين والتعويض عن التلف قبل الاتفاق.',
      'راجع دليل خدمات التخزين على ساعدني قبل الحجز في الرياض.',
    ],
    contentEn: [
      'In Riyadh, do not compare price and size alone — check cleanliness, security, and humidity.',
      'Ask whether transport and packing are included and how collection works.',
      'Review insurance and damage compensation terms before agreeing.',
      'Review Saedni’s storage services guide before booking in Riyadh.',
    ],
    publishedAt: '2026-12-29',
    readMinutes: 5,
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'storage-during-home-renovation-jeddah',
    serviceSlug: 'storage',
    citySlug: 'jeddah',
    titleAr: 'تخزين الأثاث أثناء ترميم المنزل في جدة',
    titleEn: 'Furniture storage during home renovation in Jeddah',
    excerptAr:
      'مساحة مؤقتة أثناء التجديد: كيف تختار تخزينًا مناسبًا وتحمي المقتنيات في جدة.',
    excerptEn:
      'Temporary space during renovation: how to choose suitable storage and protect belongings in Jeddah.',
    contentAr: [
      'أثناء الترميم في جدة، قد تحتاج تخزينًا قصير الأجل مع تغليف جيد.',
      'وثّق المقتنيات واتفق على شروط الوصول إن احتجت قطعة أثناء العمل.',
      'تأكد من نظافة المكان والحماية من الرطوبة قبل النقل إلى المخزن.',
      'استخدم دليل خدمات التخزين على ساعدني قبل التنفيذ في جدة.',
    ],
    contentEn: [
      'During renovation in Jeddah, you may need short-term storage with good packing.',
      'Document belongings and agree on access terms if you need an item during the work.',
      'Confirm site cleanliness and humidity protection before moving to storage.',
      'Use Saedni’s storage services guide before work in Jeddah.',
    ],
    publishedAt: '2026-12-29',
    readMinutes: 4,
    image: '/images/hero/hero-08-moving.jpg',
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
