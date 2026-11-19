export type ServiceCategory = {
  slug: string
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  image: string
}

export type Service = {
  slug: string
  categorySlug: string
  nameAr: string
  nameEn: string
  shortAr: string
  shortEn: string
  introAr: string
  introEn: string
  typesAr: string[]
  typesEn: string[]
  faqAr: { q: string; a: string }[]
  faqEn: { q: string; a: string }[]
  image: string
  popular?: boolean
}

export const categories: ServiceCategory[] = [
  {
    slug: 'construction-finishing',
    nameAr: 'التشييد والتشطيب',
    nameEn: 'Construction & Finishing',
    descriptionAr:
      'مقاولات عامة، تشطيب شقق، سيراميك، دهانات، رخام، جبس بورد، عزل وترميم.',
    descriptionEn:
      'General contracting, apartment finishing, ceramic, painting, marble, gypsum, waterproofing, and renovation.',
    image: '/images/hero/hero-11-contracting-desktop.jpg',
  },
  {
    slug: 'home-maintenance',
    nameAr: 'صيانة المنازل',
    nameEn: 'Home Maintenance',
    descriptionAr: 'سباكة، كهرباء، تكييف، صيانة أجهزة، وكشف تسربات.',
    descriptionEn:
      'Plumbing, electrical, air conditioning, appliance repair, and leak detection.',
    image: '/images/hero/hero-01-plumbing-desktop.jpg',
  },
  {
    slug: 'cleaning',
    nameAr: 'خدمات النظافة',
    nameEn: 'Cleaning Services',
    descriptionAr:
      'تنظيف منازل ومكاتب، مفروشات، خزانات مياه، نظافة ما بعد التشطيب ومكافحة حشرات.',
    descriptionEn:
      'Home and office cleaning, upholstery, water tanks, post-construction cleaning, and pest control.',
    image: '/images/hero/hero-09-cleaning-desktop.jpg',
  },
  {
    slug: 'moving-logistics',
    nameAr: 'النقل والخدمات اللوجستية',
    nameEn: 'Moving & Logistics',
    descriptionAr: 'نقل أثاث، تغليف، فك وتركيب، نقل مكاتب وتخزين.',
    descriptionEn:
      'Furniture moving, packing, assembly, office relocation, and storage.',
    image: '/images/hero/hero-08-moving-desktop.jpg',
  },
  {
    slug: 'other-services',
    nameAr: 'خدمات أخرى',
    nameEn: 'Other Services',
    descriptionAr: 'تنسيق حدائق، إدارة مرافق، وصيانة عقارات تجارية.',
    descriptionEn:
      'Landscaping, facility management, and commercial property maintenance.',
    image: '/images/hero/hero-13-landscaping-desktop.jpg',
  },
]

export const services: Service[] = [
  {
    slug: 'general-contracting',
    categorySlug: 'construction-finishing',
    nameAr: 'المقاولات العامة',
    nameEn: 'General Contracting',
    shortAr: 'تنفيذ مشاريع البناء والتشطيب بإشراف منظم ومتابعة واضحة.',
    shortEn: 'Structured construction and finishing project delivery.',
    introAr:
      'صفحات المقاولات العامة في المملكة العربية السعودية تستهدف الباحثين عن تنفيذ أعمال البناء والتشطيب بوضوح في النطاق والمراحل والتواصل.',
    introEn:
      'General contracting pages in Saudi Arabia target people seeking clear project scope, stages, and local communication.',
    typesAr: ['بناء وتشييد', 'إدارة تنفيذ', 'تشطيب متكامل', 'ترميم منشآت'],
    typesEn: ['Construction', 'Execution management', 'Turnkey finishing', 'Facility renovation'],
    faqAr: [
      {
        q: 'هل تغطي الصفحة مدينة واحدة فقط؟',
        a: 'كل صفحة تستهدف مدينة أو نطاقًا جغرافيًا محددًا داخل المملكة العربية السعودية لتكون أكثر صلة بالبحث المحلي.',
      },
      {
        q: 'كيف أتواصل لطلب الخدمة؟',
        a: 'عند توفر مزوّد موثّق للصفحة تظهر قنوات التواصل مباشرة. وإلا يمكن ترك طلب استفسار عام.',
      },
    ],
    faqEn: [
      {
        q: 'Does each page cover one city only?',
        a: 'Each page targets a specific city or local area in Saudi Arabia for stronger local search relevance.',
      },
      {
        q: 'How do I contact a provider?',
        a: 'When a verified provider is assigned, contact options appear on the page. Otherwise you can submit a general inquiry.',
      },
    ],
    image:
      '/images/hero/hero-11-contracting-desktop.jpg',
    popular: true,
  },
  {
    slug: 'apartment-finishing',
    categorySlug: 'construction-finishing',
    nameAr: 'تشطيب الشقق',
    nameEn: 'Apartment Finishing',
    shortAr: 'تشطيب داخلي مرتب للشقق والفلل مع خيارات مواد واضحة.',
    shortEn: 'Organized interior finishing for apartments and villas.',
    introAr:
      'تركّز صفحات تشطيب الشقق على الباحثين في المملكة العربية السعودية عن أعمال أرضيات، دهان، أبواب، أسقف وخدمات التشطيب المتسلسلة.',
    introEn:
      'Apartment finishing pages focus on Saudi searches for flooring, paint, doors, ceilings, and staged finishing work.',
    typesAr: ['تشطيب كامل', 'تشطيب جزئي', 'تحديث داخلي', 'اختيار مواد'],
    typesEn: ['Full finishing', 'Partial finishing', 'Interior refresh', 'Material selection'],
    faqAr: [
      {
        q: 'هل يمكن طلب معاينة؟',
        a: 'عند ربط الصفحة بمزوّد، يمكن طلب معاينة عبر نموذج التواصل الظاهر في الصفحة.',
      },
    ],
    faqEn: [
      {
        q: 'Can I request a site visit?',
        a: 'When a provider is linked to the page, you can request a visit through the on-page inquiry form.',
      },
    ],
    image:
      '/images/hero/hero-02-finishing-desktop.jpg',
    popular: true,
  },
  {
    slug: 'ceramic-installation',
    categorySlug: 'construction-finishing',
    nameAr: 'تركيب السيراميك والبلاط',
    nameEn: 'Ceramic & Tile Installation',
    shortAr: 'تركيب سيراميك وبلاط للمنازل والمنشآت بدقة في المحاذاة والتشطيب.',
    shortEn: 'Precise ceramic and tile installation for homes and facilities.',
    introAr:
      'صفحة تركيب السيراميك والبلاط موجّهة لمن يبحث عن خدمة محلية موثوقة في المملكة العربية السعودية، مع توضيح أنواع الأعمال ونطاق التغطية داخل المدينة.',
    introEn:
      'Ceramic and tile pages target local searchers in Saudi Arabia with clear work types and city coverage.',
    typesAr: ['سيراميك أرضيات', 'بلاط جدران', 'بورسلان', 'إصلاح واستبدال'],
    typesEn: ['Floor ceramic', 'Wall tiles', 'Porcelain', 'Repair & replacement'],
    faqAr: [
      {
        q: 'ما المدن المتوفرة حاليًا؟',
        a: 'نبدأ بالمدن الرئيسية في المملكة العربية السعودية، مع توسّع تدريجي حسب الطلب المحلي.',
      },
      {
        q: 'هل الصفحة مرتبطة بمقاول محدد؟',
        a: 'الصفحة أصل رقمي للمنصة. عند تأجيرها حصريًا يظهر مزوّد الخدمة المعتمد عليها.',
      },
    ],
    faqEn: [
      {
        q: 'Which cities are available now?',
        a: 'We start with Buraydah, Unaizah, Ar Rass, and Al Bukayriyah, then expand gradually across Saudi Arabia.',
      },
      {
        q: 'Is the page tied to one contractor?',
        a: 'The page is a platform digital asset. When rented exclusively, the approved provider appears on it.',
      },
    ],
    image:
      '/images/hero/hero-03-tiling-desktop.jpg',
    popular: true,
  },
  {
    slug: 'painting',
    categorySlug: 'construction-finishing',
    nameAr: 'أعمال الدهانات',
    nameEn: 'Painting',
    shortAr: 'دهانات داخلية وخارجية بتشطيب نظيف واختيار ألوان مناسب.',
    shortEn: 'Interior and exterior painting with clean finishes.',
    introAr:
      'صفحات الدهانات تغطي البحث المحلي عن تجديد الجدران والأسقف في مدن المملكة العربية السعودية بأساليب عرض واضحة ومباشرة.',
    introEn:
      'Painting pages cover local searches for wall and ceiling refresh work across Saudi cities.',
    typesAr: ['دهان داخلي', 'دهان خارجي', 'معجون وتأسيس', 'طلاء ديكوري'],
    typesEn: ['Interior paint', 'Exterior paint', 'Prep & putty', 'Decorative finishes'],
    faqAr: [
      {
        q: 'هل تشمل الخدمة التأسيس؟',
        a: 'تفاصيل نطاق العمل تظهر حسب المزوّد المرتبط بالصفحة عند توفره.',
      },
    ],
    faqEn: [
      {
        q: 'Does the service include surface prep?',
        a: 'Scope details appear based on the provider assigned to the page when available.',
      },
    ],
    image:
      '/images/hero/hero-07-painting-desktop.jpg',
    popular: true,
  },
  {
    slug: 'marble-porcelain',
    categorySlug: 'construction-finishing',
    nameAr: 'الرخام والبورسلان',
    nameEn: 'Marble & Porcelain',
    shortAr: 'تركيب رخام وبورسلان للأرضيات والواجهات والمساحات الداخلية.',
    shortEn: 'Marble and porcelain installation for floors and interiors.',
    introAr:
      'محتوى متخصص لمن يبحث في المملكة العربية السعودية عن تركيب رخام وبورسلان بجودة تشطيب عالية ونطاق جغرافي محدد.',
    introEn:
      'Specialized content for Saudi searches related to marble and porcelain installation.',
    typesAr: ['أرضيات رخام', 'بورسلان كبير', 'سلالم', 'صيانة تلميع'],
    typesEn: ['Marble floors', 'Large porcelain', 'Stairs', 'Polishing care'],
    faqAr: [
      {
        q: 'هل تتوفر أمثلة أعمال؟',
        a: 'نعرض صورًا توضيحية عامة للخدمة. أمثلة المزوّد تظهر بعد ربط الصفحة.',
      },
    ],
    faqEn: [
      {
        q: 'Are project examples available?',
        a: 'We show general service photography. Provider examples appear after the page is assigned.',
      },
    ],
    image:
      '/images/hero/hero-12-marble-desktop.jpg',
  },
  {
    slug: 'gypsum-board',
    categorySlug: 'construction-finishing',
    nameAr: 'الجبس بورد',
    nameEn: 'Gypsum Board',
    shortAr: 'أسقف وقواطع جبس بورد بتصاميم عملية للمنازل والمكاتب.',
    shortEn: 'Practical gypsum ceilings and partitions for homes and offices.',
    introAr:
      'صفحات الجبس بورد موجّهة لطلبات الأسقف المعلقة والقواطع الداخلية في مدن المملكة العربية السعودية.',
    introEn:
      'Gypsum board pages target suspended ceilings and interior partitions in Saudi cities.',
    typesAr: ['أسقف معلقة', 'قواطع', 'إضاءة مخفية', 'صيانة وإصلاح'],
    typesEn: ['Suspended ceilings', 'Partitions', 'Hidden lighting', 'Repair'],
    faqAr: [
      {
        q: 'هل الخدمة للمنازل فقط؟',
        a: 'تشمل المنازل والمكاتب والمحلات حسب المدينة المستهدفة في الصفحة.',
      },
    ],
    faqEn: [
      {
        q: 'Is this homes only?',
        a: 'Coverage includes homes, offices, and shops depending on the page city.',
      },
    ],
    image:
      '/images/hero/hero-10-gypsum-desktop.jpg',
  },
  {
    slug: 'waterproofing',
    categorySlug: 'construction-finishing',
    nameAr: 'العزل والعزل المائي',
    nameEn: 'Waterproofing & Insulation',
    shortAr: 'عزل أسطح وخزانات وحمامات لحماية المباني من التسرب والرطوبة.',
    shortEn: 'Roof, tank, and bathroom waterproofing against leaks and moisture.',
    introAr:
      'تركّز صفحات العزل على البحث المحلي في المملكة العربية السعودية عن حلول عملية للأسطح والحمامات والخزانات.',
    introEn:
      'Waterproofing pages focus on practical local searches for roofs, bathrooms, and tanks in Saudi Arabia.',
    typesAr: ['عزل أسطح', 'عزل حمامات', 'عزل خزانات', 'عزل حراري'],
    typesEn: ['Roof sealing', 'Bathroom waterproofing', 'Tank coating', 'Thermal insulation'],
    faqAr: [
      {
        q: 'هل يشمل كشف التسرب؟',
        a: 'كشف التسرب خدمة مستقلة، ويمكن ربطها من صفحات ذات صلة حسب المدينة.',
      },
    ],
    faqEn: [
      {
        q: 'Does this include leak detection?',
        a: 'Leak detection is a separate service and can be linked from related city pages.',
      },
    ],
    image:
      '/images/hero/hero-04-waterproofing-desktop.jpg',
  },
  {
    slug: 'renovation',
    categorySlug: 'construction-finishing',
    nameAr: 'الترميم والتجديد',
    nameEn: 'Renovation & Restoration',
    shortAr: 'تجديد وترميم المساحات السكنية والتجارية بخطط تنفيذ واضحة.',
    shortEn: 'Residential and commercial renovation with clear execution plans.',
    introAr:
      'صفحات الترميم تخاطب من يبحث عن تجديد منزل أو محل في المملكة العربية السعودية دون تعقيد في العرض والمحتوى.',
    introEn:
      'Renovation pages address people seeking home or shop refresh projects in Saudi Arabia.',
    typesAr: ['تجديد منازل', 'ترميم محلات', 'تحديث واجهات', 'إعادة تقسيم'],
    typesEn: ['Home refresh', 'Shop restoration', 'Facade update', 'Re-layout'],
    faqAr: [
      {
        q: 'هل يمكن البدء بمرحلة واحدة؟',
        a: 'نعم، كثير من الطلبات تبدأ بجزء محدد مثل المطبخ أو الحمام أو الواجهة.',
      },
    ],
    faqEn: [
      {
        q: 'Can work start with one stage?',
        a: 'Yes. Many requests begin with a single area such as a kitchen, bathroom, or facade.',
      },
    ],
    image:
      '/images/hero/hero-15-renovation-desktop.jpg',
  },
  {
    slug: 'plumbing',
    categorySlug: 'home-maintenance',
    nameAr: 'السباكة',
    nameEn: 'Plumbing',
    shortAr: 'صيانة سباكة، إصلاح تسربات، وتركيب أدوات صحية.',
    shortEn: 'Plumbing maintenance, leak repair, and fixture installation.',
    introAr:
      'صفحات السباكة في المملكة العربية السعودية مخصّصة للبحث العاجل والمحلي عن أعطال المياه والصرف والتركيبات.',
    introEn:
      'Plumbing pages in Saudi Arabia serve urgent local searches for water, drainage, and fixture issues.',
    typesAr: ['إصلاح تسرب', 'تركيب أدوات', 'صيانة دورات مياه', 'فتح مجاري'],
    typesEn: ['Leak repair', 'Fixture install', 'Bathroom maintenance', 'Drain clearing'],
    faqAr: [
      {
        q: 'هل الخدمة متاحة في المساء؟',
        a: 'أوقات الاستجابة تعتمد على المزوّد المرتبط بالصفحة عند توفره.',
      },
    ],
    faqEn: [
      {
        q: 'Is evening service available?',
        a: 'Response hours depend on the provider linked to the page when available.',
      },
    ],
    image:
      '/images/hero/hero-01-plumbing-desktop.jpg',
    popular: true,
  },
  {
    slug: 'electrical',
    categorySlug: 'home-maintenance',
    nameAr: 'الصيانة الكهربائية',
    nameEn: 'Electrical Maintenance',
    shortAr: 'صيانة كهرباء منزلية ومنشآت مع فحص آمن للأعطال.',
    shortEn: 'Safe electrical maintenance for homes and facilities.',
    introAr:
      'تغطي صفحات الكهرباء الطلب المحلي على أعطال الإنارة، القواطع، والتمديدات في مدن المملكة العربية السعودية.',
    introEn:
      'Electrical pages cover local demand for lighting, breakers, and wiring issues in Saudi cities.',
    typesAr: ['أعطال إنارة', 'قواطع وأفياش', 'تمديدات', 'فحص سلامة'],
    typesEn: ['Lighting faults', 'Breakers & outlets', 'Wiring', 'Safety checks'],
    faqAr: [
      {
        q: 'هل يتم فحص السلامة؟',
        a: 'يمكن طلب فحص سلامة كهربائية ضمن نطاق الخدمة عند توفر المزوّد.',
      },
    ],
    faqEn: [
      {
        q: 'Are safety checks offered?',
        a: 'Electrical safety checks can be requested within the provider scope when available.',
      },
    ],
    image:
      '/images/hero/hero-05-electrical-desktop.jpg',
    popular: true,
  },
  {
    slug: 'air-conditioning',
    categorySlug: 'home-maintenance',
    nameAr: 'التكييف',
    nameEn: 'Air Conditioning',
    shortAr: 'صيانة وتنظيف وتركيب مكيفات سبليت ومركزية.',
    shortEn: 'AC maintenance, cleaning, and split/central installation.',
    introAr:
      'صفحات التكييف تستهدف موسم الذروة والبحث المستمر عن صيانة وتنظيف المكيفات في المملكة العربية السعودية.',
    introEn:
      'AC pages target peak-season and ongoing searches for maintenance and cleaning in Saudi Arabia.',
    typesAr: ['تنظيف مكيفات', 'تعبئة فريون', 'تركيب سبليت', 'صيانة دورية'],
    typesEn: ['AC cleaning', 'Gas refill', 'Split install', 'Scheduled maintenance'],
    faqAr: [
      {
        q: 'هل تشمل الخدمة التنظيف العميق؟',
        a: 'نعم، كثير من الطلبات تشمل غسيل الوحدات الداخلية والخارجية حسب الاتفاق.',
      },
    ],
    faqEn: [
      {
        q: 'Is deep cleaning included?',
        a: 'Many requests include indoor and outdoor unit washing, based on the agreed scope.',
      },
    ],
    image:
      '/images/hero/hero-06-ac-desktop.jpg',
    popular: true,
  },
  {
    slug: 'appliance-repair',
    categorySlug: 'home-maintenance',
    nameAr: 'صيانة الأجهزة',
    nameEn: 'Appliance Maintenance',
    shortAr: 'صيانة غسالات، ثلاجات، وأجهزة منزلية شائعة.',
    shortEn: 'Repair for washers, fridges, and common home appliances.',
    introAr:
      'صفحات صيانة الأجهزة تركّز على الأعطال المنزلية اليومية في مدن المملكة العربية السعودية.',
    introEn:
      'Appliance pages focus on everyday household faults across Saudi cities.',
    typesAr: ['غسالات', 'ثلاجات', 'أفران', 'سخانات'],
    typesEn: ['Washers', 'Fridges', 'Ovens', 'Water heaters'],
    faqAr: [
      {
        q: 'هل تتوفر قطع غيار؟',
        a: 'توافر القطع يعتمد على نوع الجهاز والمزوّد المرتبط بالصفحة.',
      },
    ],
    faqEn: [
      {
        q: 'Are spare parts available?',
        a: 'Parts availability depends on the appliance type and the assigned provider.',
      },
    ],
    image:
      '/images/services/appliance-repair.jpg',
  },
  {
    slug: 'leak-detection',
    categorySlug: 'home-maintenance',
    nameAr: 'كشف التسربات',
    nameEn: 'Leak Detection',
    shortAr: 'كشف تسربات مياه بدون تكسير عشوائي قدر الإمكان.',
    shortEn: 'Water leak detection with minimal unnecessary demolition.',
    introAr:
      'صفحات كشف التسربات موجّهة للحالات العاجلة في المملكة العربية السعودية مع تركيز على التشخيص قبل الإصلاح.',
    introEn:
      'Leak detection pages target urgent Saudi cases with diagnosis before repair.',
    typesAr: ['كشف إلكتروني', 'فحص شبكات', 'تحديد موضع التسرب', 'تقرير فني'],
    typesEn: ['Electronic detection', 'Network checks', 'Leak pinpointing', 'Technical report'],
    faqAr: [
      {
        q: 'هل يلزم تكسير؟',
        a: 'الهدف تقليل التكسير عبر التشخيص الدقيق أولًا، ثم الإصلاح عند الحاجة.',
      },
    ],
    faqEn: [
      {
        q: 'Is demolition required?',
        a: 'The goal is to minimize demolition through accurate diagnosis first, then repair if needed.',
      },
    ],
    image:
      '/images/hero/hero-14-leak-desktop.jpg',
  },
  {
    slug: 'home-cleaning',
    categorySlug: 'cleaning',
    nameAr: 'تنظيف المنازل',
    nameEn: 'Home Cleaning',
    shortAr: 'تنظيف منازل دوري وعميق بمستوى ترتيب واضح.',
    shortEn: 'Recurring and deep home cleaning with clear standards.',
    introAr:
      'صفحات تنظيف المنازل في المملكة العربية السعودية تخاطب العائلات والساكنين الباحثين عن خدمة مرتبة محليًا.',
    introEn:
      'Home cleaning pages in Saudi Arabia address residents seeking organized local service.',
    typesAr: ['تنظيف دوري', 'تنظيف عميق', 'بعد المناسبات', 'تعقيم أساسي'],
    typesEn: ['Recurring clean', 'Deep clean', 'Post-event', 'Basic sanitizing'],
    faqAr: [
      {
        q: 'هل أحضر مواد التنظيف؟',
        a: 'عادةً يحضر المزوّد المواد، ويمكن الاتفاق على تفاصيل ذلك عبر التواصل.',
      },
    ],
    faqEn: [
      {
        q: 'Do I provide cleaning supplies?',
        a: 'Providers usually bring supplies; details can be confirmed through contact.',
      },
    ],
    image:
      '/images/hero/hero-09-cleaning-desktop.jpg',
    popular: true,
  },
  {
    slug: 'office-cleaning',
    categorySlug: 'cleaning',
    nameAr: 'تنظيف المكاتب',
    nameEn: 'Office Cleaning',
    shortAr: 'تنظيف مكاتب ومنشآت تجارية بجداول مرنة.',
    shortEn: 'Office and commercial cleaning on flexible schedules.',
    introAr:
      'تركّز صفحات تنظيف المكاتب على الشركات والمحلات في مدن المملكة العربية السعودية التي تحتاج حضورًا منتظمًا.',
    introEn:
      'Office cleaning pages focus on Saudi businesses that need regular presence.',
    typesAr: ['يومي', 'أسبوعي', 'بعد الدوام', 'تعقيم أسطح'],
    typesEn: ['Daily', 'Weekly', 'After hours', 'Surface sanitizing'],
    faqAr: [
      {
        q: 'هل تتوفر عقود شهرية؟',
        a: 'نعم، يمكن الاتفاق على عقود منتظمة عند ربط الصفحة بمزوّد.',
      },
    ],
    faqEn: [
      {
        q: 'Are monthly contracts available?',
        a: 'Yes. Recurring contracts can be arranged when a provider is assigned.',
      },
    ],
    image:
      '/images/services/office-cleaning.jpg',
  },
  {
    slug: 'upholstery-cleaning',
    categorySlug: 'cleaning',
    nameAr: 'تنظيف المفروشات',
    nameEn: 'Furniture & Upholstery Cleaning',
    shortAr: 'تنظيف كنب وسجاد ومفروشات بمواد مناسبة للأقمشة.',
    shortEn: 'Sofa, carpet, and upholstery cleaning with fabric-safe methods.',
    introAr:
      'صفحات تنظيف المفروشات تستهدف البحث المحلي عن تنظيف الكنب والسجاد داخل المملكة العربية السعودية.',
    introEn:
      'Upholstery pages target local searches for sofa and carpet cleaning in Saudi Arabia.',
    typesAr: ['كنب', 'سجاد', 'ستائر', 'مراتب'],
    typesEn: ['Sofas', 'Carpets', 'Curtains', 'Mattresses'],
    faqAr: [
      {
        q: 'كم يستغرق الجفاف؟',
        a: 'يختلف حسب نوع القماش والطقس، وغالبًا خلال ساعات إلى يوم.',
      },
    ],
    faqEn: [
      {
        q: 'How long does drying take?',
        a: 'It depends on fabric and weather, often from a few hours up to a day.',
      },
    ],
    image:
      '/images/services/upholstery-cleaning.jpg',
  },
  {
    slug: 'water-tank-cleaning',
    categorySlug: 'cleaning',
    nameAr: 'تنظيف خزانات المياه',
    nameEn: 'Water Tank Cleaning',
    shortAr: 'تنظيف وتعقيم خزانات المياه الأرضية والعلوية.',
    shortEn: 'Cleaning and sanitizing ground and rooftop water tanks.',
    introAr:
      'صفحات تنظيف الخزانات موجّهة للطلبات الموسمية والدورية في مدن المملكة العربية السعودية.',
    introEn:
      'Tank cleaning pages address seasonal and recurring demand in Saudi cities.',
    typesAr: ['خزانات علوية', 'خزانات أرضية', 'تعقيم', 'فحص حالة'],
    typesEn: ['Rooftop tanks', 'Ground tanks', 'Sanitizing', 'Condition check'],
    faqAr: [
      {
        q: 'هل يتوقف الماء أثناء العمل؟',
        a: 'قد يتوقف مؤقتًا حسب حجم الخزان وخطوات التنظيف.',
      },
    ],
    faqEn: [
      {
        q: 'Will water stop during service?',
        a: 'It may pause temporarily depending on tank size and cleaning steps.',
      },
    ],
    image:
      '/images/services/water-tank-cleaning.jpg',
  },
  {
    slug: 'post-construction-cleaning',
    categorySlug: 'cleaning',
    nameAr: 'نظافة ما بعد التشطيب',
    nameEn: 'Post-Construction Cleaning',
    shortAr: 'إزالة مخلفات التشطيب وتجهيز المساحة للسكن أو التشغيل.',
    shortEn: 'Removing construction residue and preparing spaces for use.',
    introAr:
      'صفحات نظافة ما بعد التشطيب تكمل رحلة التشييد في المملكة العربية السعودية بخطوة تسليم نظيفة.',
    introEn:
      'Post-construction cleaning pages complete the finishing journey with a clean handover.',
    typesAr: ['إزالة أتربة', 'تنظيف زجاج', 'تلميع أرضيات', 'تسليم نهائي'],
    typesEn: ['Dust removal', 'Glass cleaning', 'Floor polishing', 'Final handover'],
    faqAr: [
      {
        q: 'هل تناسب الفلل والشقق؟',
        a: 'نعم، وكذلك المحلات والمكاتب بعد أعمال التشطيب.',
      },
    ],
    faqEn: [
      {
        q: 'Does it cover villas and apartments?',
        a: 'Yes, as well as shops and offices after finishing work.',
      },
    ],
    image:
      '/images/services/post-construction-cleaning.jpg',
  },
  {
    slug: 'pest-control',
    categorySlug: 'cleaning',
    nameAr: 'مكافحة الحشرات',
    nameEn: 'Pest Control',
    shortAr: 'مكافحة حشرات منزلية ومنشآت بخطط زيارة واضحة.',
    shortEn: 'Home and facility pest control with clear visit plans.',
    introAr:
      'صفحات مكافحة الحشرات تغطي الطلب المحلي في المملكة العربية السعودية على حلول عملية وآمنة قدر الإمكان.',
    introEn:
      'Pest control pages cover local Saudi demand for practical treatment plans.',
    typesAr: ['منازل', 'مطابخ', 'مستودعات', 'عقود دورية'],
    typesEn: ['Homes', 'Kitchens', 'Warehouses', 'Recurring contracts'],
    faqAr: [
      {
        q: 'هل المواد آمنة للأطفال؟',
        a: 'يُراعى استخدام مواد مناسبة مع إرشادات السلامة من المزوّد.',
      },
    ],
    faqEn: [
      {
        q: 'Are materials safe around children?',
        a: 'Suitable materials are used with safety guidance from the provider.',
      },
    ],
    image:
      '/images/services/pest-control.jpg',
  },
  {
    slug: 'furniture-moving',
    categorySlug: 'moving-logistics',
    nameAr: 'نقل الأثاث',
    nameEn: 'Furniture Moving',
    shortAr: 'نقل أثاث داخل المدينة وبين مدن المملكة العربية السعودية بعناية في الفك والتركيب.',
    shortEn: 'Careful furniture moving within and between Saudi cities.',
    introAr:
      'صفحات نقل الأثاث تستهدف انتقالات المنازل والمكاتب داخل المملكة العربية السعودية بنطاق جغرافي واضح.',
    introEn:
      'Furniture moving pages target home and office moves across Saudi Arabia with clear coverage.',
    typesAr: ['نقل داخل المدينة', 'نقل بين المدن', 'فك وتركيب', 'تغليف'],
    typesEn: ['In-city moves', 'Intercity moves', 'Disassembly', 'Packing'],
    faqAr: [
      {
        q: 'هل يشمل التغليف؟',
        a: 'يمكن إضافة التغليف حسب الطلب ونوع المنقولات.',
      },
    ],
    faqEn: [
      {
        q: 'Is packing included?',
        a: 'Packing can be added based on request and item types.',
      },
    ],
    image:
      '/images/hero/hero-08-moving-desktop.jpg',
    popular: true,
  },
  {
    slug: 'packing',
    categorySlug: 'moving-logistics',
    nameAr: 'التغليف وفك التغليف',
    nameEn: 'Packing & Unpacking',
    shortAr: 'تغليف منظم للمقتنيات الحساسة قبل النقل وبعده.',
    shortEn: 'Organized packing for sensitive items before and after moves.',
    introAr:
      'صفحات التغليف تكمل خدمات النقل لمن يبحث عن حماية أفضل للمقتنيات في المملكة العربية السعودية.',
    introEn:
      'Packing pages complement moving services for better item protection in Saudi Arabia.',
    typesAr: ['تغليف أثاث', 'كراتين', 'مقتنيات حساسة', 'فك بعد النقل'],
    typesEn: ['Furniture wrap', 'Boxes', 'Fragile items', 'Post-move unpack'],
    faqAr: [
      {
        q: 'هل توفرون مواد التغليف؟',
        a: 'عادةً نعم، ويتم توضيحها ضمن تفاصيل الطلب.',
      },
    ],
    faqEn: [
      {
        q: 'Do you provide packing materials?',
        a: 'Usually yes, and details are confirmed with the request.',
      },
    ],
    image:
      '/images/services/packing.jpg',
  },
  {
    slug: 'furniture-assembly',
    categorySlug: 'moving-logistics',
    nameAr: 'فك وتركيب الأثاث',
    nameEn: 'Furniture Assembly & Disassembly',
    shortAr: 'فك وتركيب غرف نوم ومكاتب ومطابخ جاهزة.',
    shortEn: 'Disassembly and assembly of bedrooms, offices, and ready kitchens.',
    introAr:
      'صفحات الفك والتركيب تخدم من يحتاج ترتيب الأثاث دون نقل كامل داخل مدن المملكة العربية السعودية.',
    introEn:
      'Assembly pages serve people who need furniture setup without a full move in Saudi cities.',
    typesAr: ['غرف نوم', 'مكاتب', 'مطابخ', 'خزائن'],
    typesEn: ['Bedrooms', 'Offices', 'Kitchens', 'Cabinets'],
    faqAr: [
      {
        q: 'هل تحتاج أدوات خاصة؟',
        a: 'المزوّد يحضر الأدوات المعتادة، ويُبلَّغ مسبقًا إن لزم أمر خاص.',
      },
    ],
    faqEn: [
      {
        q: 'Are special tools needed?',
        a: 'Providers bring standard tools and will notify you if something special is required.',
      },
    ],
    image:
      '/images/services/furniture-assembly.jpg',
  },
  {
    slug: 'office-relocation',
    categorySlug: 'moving-logistics',
    nameAr: 'نقل المكاتب',
    nameEn: 'Office Relocation',
    shortAr: 'نقل مكاتب وشركات بجدولة تقلل توقف العمل.',
    shortEn: 'Office moves scheduled to minimize downtime.',
    introAr:
      'صفحات نقل المكاتب موجّهة للمنشآت في المملكة العربية السعودية التي تحتاج انتقالًا منظمًا.',
    introEn:
      'Office relocation pages serve Saudi businesses needing an organized move.',
    typesAr: ['تخطيط النقل', 'نقل أجهزة', 'إعادة ترتيب', 'نقل خارج الدوام'],
    typesEn: ['Move planning', 'Equipment transfer', 'Re-setup', 'After-hours moves'],
    faqAr: [
      {
        q: 'هل يمكن النقل في نهاية الأسبوع؟',
        a: 'غالبًا نعم حسب توفر المزوّد وجدول المنشأة.',
      },
    ],
    faqEn: [
      {
        q: 'Are weekend moves possible?',
        a: 'Often yes, depending on provider availability and business schedule.',
      },
    ],
    image:
      '/images/services/office-relocation.jpg',
  },
  {
    slug: 'storage',
    categorySlug: 'moving-logistics',
    nameAr: 'خدمات التخزين',
    nameEn: 'Storage Services',
    shortAr: 'تخزين أثاث ومقتنيات لفترات قصيرة أو متوسطة.',
    shortEn: 'Short and mid-term storage for furniture and belongings.',
    introAr:
      'صفحات التخزين تدعم حالات الانتقال المؤقت والتجديد داخل المملكة العربية السعودية.',
    introEn:
      'Storage pages support temporary moves and renovation cases in Saudi Arabia.',
    typesAr: ['تخزين شهري', 'تخزين مؤقت', 'أثاث منزلي', 'مستلزمات مكتبية'],
    typesEn: ['Monthly storage', 'Temporary storage', 'Home furniture', 'Office items'],
    faqAr: [
      {
        q: 'هل التخزين مؤمّن؟',
        a: 'تفاصيل التأمين والحماية تعتمد على المزوّد المرتبط بالصفحة.',
      },
    ],
    faqEn: [
      {
        q: 'Is storage insured?',
        a: 'Insurance and protection details depend on the assigned provider.',
      },
    ],
    image:
      '/images/services/storage.jpg',
  },
  {
    slug: 'landscaping',
    categorySlug: 'other-services',
    nameAr: 'تنسيق الحدائق',
    nameEn: 'Landscaping & Gardening',
    shortAr: 'تنسيق حدائق منزلية وصيانة مساحات خارجية.',
    shortEn: 'Home landscaping and outdoor space maintenance.',
    introAr:
      'صفحات تنسيق الحدائق تغطي البحث المحلي عن تجميل وصيانة المساحات الخارجية في المملكة العربية السعودية.',
    introEn:
      'Landscaping pages cover local searches for outdoor styling and upkeep in Saudi Arabia.',
    typesAr: ['تصميم حدائق', ' زراعة', 'صيانة دورية', 'شبكات ري'],
    typesEn: ['Garden design', 'Planting', 'Recurring care', 'Irrigation'],
    faqAr: [
      {
        q: 'هل تناسب المناخ المحلي؟',
        a: 'يُراعى اختيار نباتات وحلول مناسبة لبيئة المملكة العربية السعودية قدر الإمكان.',
      },
    ],
    faqEn: [
      {
        q: 'Is it suited to the local climate?',
        a: 'Plant and system choices aim to fit local Saudi conditions whenever possible.',
      },
    ],
    image:
      '/images/hero/hero-13-landscaping-desktop.jpg',
  },
  {
    slug: 'facility-management',
    categorySlug: 'other-services',
    nameAr: 'إدارة المرافق',
    nameEn: 'Facility Management',
    shortAr: 'إدارة تشغيل وصيانة للمرافق السكنية والتجارية.',
    shortEn: 'Operations and maintenance for residential and commercial facilities.',
    introAr:
      'صفحات إدارة المرافق موجّهة للمجمعات والمنشآت التي تحتاج تنسيق صيانة مستمر في المملكة العربية السعودية.',
    introEn:
      'Facility management pages serve compounds and sites needing ongoing maintenance coordination in Saudi Arabia.',
    typesAr: ['صيانة تشغيلية', 'إشراف فني', 'جداول زيارات', 'تقارير دورية'],
    typesEn: ['Operations care', 'Technical oversight', 'Visit schedules', 'Periodic reports'],
    faqAr: [
      {
        q: 'هل الخدمة شهرية فقط؟',
        a: 'يمكن الاتفاق على نطاق شهري أو حسب الاحتياج التشغيلي.',
      },
    ],
    faqEn: [
      {
        q: 'Is this monthly only?',
        a: 'Scope can be monthly or matched to operational needs.',
      },
    ],
    image:
      '/images/services/facility-management.jpg',
  },
  {
    slug: 'commercial-maintenance',
    categorySlug: 'other-services',
    nameAr: 'صيانة العقارات التجارية',
    nameEn: 'Commercial Property Maintenance',
    shortAr: 'صيانة محلات ومكاتب ومنشآت تجارية بشكل دوري أو طارئ.',
    shortEn: 'Recurring or urgent maintenance for shops, offices, and commercial sites.',
    introAr:
      'صفحات صيانة العقارات التجارية تركّز على استمرارية التشغيل للمحلات والمكاتب في المملكة العربية السعودية.',
    introEn:
      'Commercial maintenance pages focus on keeping shops and offices running in Saudi Arabia.',
    typesAr: ['صيانة طارئة', 'عقود دورية', 'تشطيبات بسيطة', 'متابعة أعطال'],
    typesEn: ['Emergency care', 'Recurring contracts', 'Light finishing', 'Issue follow-up'],
    faqAr: [
      {
        q: 'هل تشمل أكثر من تخصص؟',
        a: 'حسب الاتفاق، يمكن تنسيق أكثر من تخصص عبر المزوّد أو الشركاء.',
      },
    ],
    faqEn: [
      {
        q: 'Can multiple trades be included?',
        a: 'By agreement, multiple trades can be coordinated through the provider or partners.',
      },
    ],
    image:
      '/images/services/commercial-maintenance.jpg',
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getServicesByCategory(categorySlug: string) {
  return services.filter((s) => s.categorySlug === categorySlug)
}

export function getPopularServices() {
  return services.filter((s) => s.popular)
}

export function getRelatedServices(slug: string, limit = 4) {
  const current = getService(slug)
  if (!current) return []
  return services
    .filter((s) => s.slug !== slug && s.categorySlug === current.categorySlug)
    .slice(0, limit)
}
