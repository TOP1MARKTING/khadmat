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
  /** Long customer guide (HTML paragraphs preferred) */
  bodyAr?: string
  bodyEn?: string
  /** Extra photos that help the customer understand the work */
  gallery?: string[]
  /** Clear benefits / what the customer gains */
  benefitsAr?: string[]
  benefitsEn?: string[]
  /** Simple work stages for the customer */
  stepsAr?: string[]
  stepsEn?: string[]
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
    image: '/images/services/plumbing.jpg',
  },
  {
    slug: 'cleaning',
    nameAr: 'خدمات النظافة',
    nameEn: 'Cleaning Services',
    descriptionAr:
      'تنظيف منازل ومكاتب، مفروشات، خزانات مياه، نظافة ما بعد التشطيب ومكافحة حشرات.',
    descriptionEn:
      'Home and office cleaning, upholstery, water tanks, post-construction cleaning, and pest control.',
    image: '/images/services/home-cleaning.jpg',
  },
  {
    slug: 'moving-logistics',
    nameAr: 'النقل والخدمات اللوجستية',
    nameEn: 'Moving & Logistics',
    descriptionAr: 'نقل أثاث، تغليف، فك وتركيب، نقل مكاتب وتخزين.',
    descriptionEn:
      'Furniture moving, packing, assembly, office relocation, and storage.',
    image: '/images/services/furniture-moving.jpg',
  },
  {
    slug: 'other-services',
    nameAr: 'خدمات أخرى',
    nameEn: 'Other Services',
    descriptionAr: 'تنسيق حدائق، إدارة مرافق، وصيانة عقارات تجارية.',
    descriptionEn:
      'Landscaping, facility management, and commercial property maintenance.',
    image: '/images/services/landscaping.jpg',
  },
]

export const services: Service[] = [
  {
    slug: 'general-contracting',
    categorySlug: 'construction-finishing',
    nameAr: 'المقاولات العامة',
    nameEn: 'General Contracting',
    shortAr: 'دليل عملي لأنواع أعمال المقاولات العامة، مراحل التنفيذ، وكيف تختار المقاول المناسب قبل التعاقد.',
    shortEn: 'A practical guide to general contracting work types, execution stages, and how to choose the right contractor.',
    introAr:
      'مشروع بناء أو ترميم أو تشطيب يحتاج تخطيطًا وتنسيقًا بين تخصصات كثيرة. في ساعدني هتلاقي معنى المقاولات العامة، أنواع المشاريع، مراحل التنفيذ، وعلامات المقاول الجيد قبل ما تتعاقد.',
    introEn:
      'Building, renovation, or finishing needs planning and coordination across trades. On Saedni you get what general contracting covers, project types, stages, and how to spot a solid contractor before you sign.',
    bodyAr: `<p>تنفيذ مشروع بناء أو ترميم أو تشطيب يحتاج إلى تخطيط جيد وتنسيق بين مجموعة من الأعمال والفنيين. وهنا يأتي دور المقاولات العامة: إدارة وتنفيذ الأعمال المختلفة وفق متطلبات المشروع والاتفاق مع صاحب العقار.</p>
<p>المقاولات العامة تشمل أعمال تنفيذ وإدارة المشروعات الإنشائية والتجهيزية، من التخطيط وتجهيز الموقع حتى التنفيذ والتسليم وفق نطاق العقد والمواصفات. قد تشمل البناء والتوسعة والترميم والتشطيب، والتنسيق بين الكهرباء والسباكة والعزل والدهانات والأرضيات. ونطاق مسؤولية المقاول يختلف: مشروع كامل أو بنود محددة فقط.</p>
<p>تناسب الخدمة أصحاب الأراضي لبناء منازل وفلل، وأصحاب الشقق للتشطيب الشامل، وملاك العقارات للترميم، والمحلات والمنشآت والمكاتب، والمستثمرين الذين يجهزون وحدات للبيع أو التأجير.</p>
<p><strong>أنواع الأعمال:</strong> بناء وإنشاء (تجهيز موقع، أساسات، خرسانة، حوائط وتوسعات وفق التراخيص)، تشطيب (محارة، سيراميك وبورسلان ورخام، دهانات، جبس، أبواب)، كهرباء وميكانيكا (إنارة، سباكة، تكييف)، ترميم وتجديد، وتجهيز منشآت تجارية ومكاتب ومستودعات.</p>
<p>المقاول الجيد يوضح نطاق العمل والمستثنى، يعمل بمخططات ومواصفات مكتوبة، يرتب المراحل وينسق التخصصات، يحدد مواصفات الخامات، يتابع الموقع مبكرًا، يلتزم بالسلامة، ويوثق الدفعات والمستخلصات والتعديلات.</p>
<p>المراحل عادة: تحديد الاحتياجات ← معاينة ودراسة ← مخططات ومواصفات ← تسعير وتعاقد ← تجهيز الموقع ← التنفيذ ← فحص ومراجعة ← معالجة ملاحظات وتسليم.</p>
<p>تجنّب الاتفاق على سعر بلا تفاصيل، غياب عقد مكتوب، دفعات كبيرة بلا مراحل إنجاز، خامات بلا مواصفات، تجاهل التراخيص، تغيير تصميم بلا توثيق تكلفة ومدة، ضعف تنسيق الكهرباء والسباكة والتشطيب، وإهمال المتابعة قبل التغطية أو استلام بلا اختبارات.</p>
<p>قبل التعاقد اسأل: مسؤولية كاملة أم بنود؟ تصاريح مطلوبة؟ خبرة مشابهة وأعمال موثقة؟ السعر يشمل خامات ومصنعية ومعدات؟ مقايسة وكميات؟ مواصفات الخامات؟ مدة كل مرحلة؟ الدفعات والإضافات؟ الإشراف الهندسي؟ الفحص والتسليم ومعالجة العيوب؟</p>
<p>المدة غير ثابتة: تجديد محدود قد يأخذ أسابيع، تشطيب وحدة أشهرًا، بناء منزل أو فيلا أشهرًا إلى أكثر من عام، والمشاريع التجارية تختلف حسب المساحة والتجهيزات. التأخير شائع مع التعديلات وتأخر التوريد وظروف الموقع.</p>`,
    bodyEn: `<p>Building, renovation, or finishing needs planning and coordination across trades. General contracting manages and executes that work under the agreed project scope with the property owner.</p>
<p>It covers construction and fit-out delivery from planning and site prep through execution and handover per contract and specs. Scope may include build, expansion, renovation, finishing, and coordinating electrical, plumbing, waterproofing, paint, and floors. The contractor may take the full project or selected items only.</p>
<p>It suits landowners building homes or villas, apartment owners needing full finishing, property owners renovating, shops and offices, and investors preparing units for sale or rent.</p>
<p>Work types include structural build, finishing trades, electrical and mechanical systems, renovation, and commercial fit-outs.</p>
<p>A good contractor clarifies included and excluded scope, works from drawings and written specs, sequences trades, defines materials, supervises early, follows safety, and documents payments, valuations, and changes.</p>
<p>Typical stages: define needs → survey → drawings and specs → pricing and contract → site prep → execution → inspection → snagging and handover.</p>`,
    gallery: [
      '/images/hero/hero-11-contracting-desktop.jpg',
      '/images/hero/hero-11-contracting.jpg',
      '/images/hero/hero-02-finishing-desktop.jpg',
      '/images/hero/hero-15-renovation-desktop.jpg',
      '/images/hero/hero-05-electrical-desktop.jpg',
      '/images/hero/hero-01-plumbing-desktop.jpg',
    ],
    benefitsAr: [
      'تنسيق عدة تخصصات تحت مسؤولية واضحة حسب العقد',
      'مسار تنفيذ مرتب من التخطيط حتى التسليم',
      'توثيق أفضل للنطاق والخامات والدفعات يقلل الخلاف',
      'متابعة مبكرة للجودة قبل تغطية الأعمال',
    ],
    benefitsEn: [
      'Coordinate multiple trades under a clear contractual responsibility',
      'Ordered delivery path from planning to handover',
      'Better documentation of scope, materials, and payments reduces disputes',
      'Earlier quality checks before work is covered up',
    ],
    stepsAr: [
      'تحديد احتياجات المشروع والنتيجة المطلوبة',
      'معاينة الموقع والدراسة الفنية',
      'المخططات والمواصفات وجداول الكميات',
      'التسعير والتعاقد: نطاق ومدة ودفعات وآلية التغييرات',
      'تجهيز الموقع والعمالة والمعدات والخامات',
      'التنفيذ مع متابعة الجودة والتنسيق بين التخصصات',
      'الفحص والمراجعة واختبار الأنظمة',
      'معالجة الملاحظات والتسليم مع المستندات المتفق عليها',
    ],
    stepsEn: [
      'Define project needs and desired outcome',
      'Site survey and technical review',
      'Drawings, specs, and quantities',
      'Pricing and contract: scope, duration, payments, change process',
      'Site prep, labor, equipment, and materials',
      'Execute with quality control and trade coordination',
      'Inspect systems and compare to specs',
      'Snag, hand over, and deliver agreed documents',
    ],
    typesAr: [
      'بناء وإنشاء',
      'تشطيب متكامل',
      'كهرباء وميكانيكا',
      'ترميم وتجديد',
      'تجهيز محلات ومكاتب',
      'إدارة وتنسيق التنفيذ',
    ],
    typesEn: [
      'Building and structure',
      'Full finishing',
      'Electrical and mechanical',
      'Renovation and refresh',
      'Shop and office fit-out',
      'Execution management and coordination',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين المقاولات العامة والمقاولات المتخصصة؟',
        a: 'المقاولات العامة قد تدير وتنفّذ عدة تخصصات في المشروع، بينما المتخصصة تركز على مجال واحد مثل الكهرباء أو السباكة أو العزل.',
      },
      {
        q: 'هل المقاول العام مسؤول عن جميع الأعمال؟',
        a: 'ليس بالضرورة. يعتمد على العقد؛ قد يتولى المشروع بالكامل أو بنودًا محددة فقط.',
      },
      {
        q: 'كيف أحسب تكلفة مشروع المقاولات؟',
        a: 'حسب المساحة ونوع الأعمال والكميات والخامات والمعدات والعمالة والمدة. يُفضّل مقايسة تفصيلية.',
      },
      {
        q: 'هل أحتاج إلى مهندس مشرف؟',
        a: 'في المشروعات التي تتطلب إشرافًا هندسيًا، من المهم الاستعانة بمهندس مؤهل لمتابعة التنفيذ حسب الاشتراطات.',
      },
      {
        q: 'ما أهمية عقد المقاولات؟',
        a: 'يوضح النطاق والتكلفة والمدة والدفعات والمواصفات والمسؤوليات وآلية التعديلات والخلافات.',
      },
      {
        q: 'كيف أستلم مشروع المقاولات؟',
        a: 'افحص الأعمال وراجع المواصفات واختبر الأنظمة وسجّل الملاحظات، ثم أكمل المعالجة قبل التسليم النهائي.',
      },
    ],
    faqEn: [
      {
        q: 'What is the difference between general and specialized contracting?',
        a: 'General contracting may manage and deliver multiple trades; specialized contracting focuses on one trade such as electrical, plumbing, or waterproofing.',
      },
      {
        q: 'Is the general contractor responsible for everything?',
        a: 'Not always. It depends on the contract — full project or selected items only.',
      },
      {
        q: 'How is project cost calculated?',
        a: 'By area, work types, quantities, materials, equipment, labor, and duration. A detailed BOQ is preferred.',
      },
      {
        q: 'Do I need a supervising engineer?',
        a: 'For projects that require engineering supervision, hire a qualified engineer to follow execution per requirements.',
      },
      {
        q: 'Why does the contract matter?',
        a: 'It defines scope, cost, duration, payments, specs, responsibilities, and how changes and disputes are handled.',
      },
      {
        q: 'How do I hand over a contracting project?',
        a: 'Inspect works, check specs, test systems, list snags, and complete fixes before final acceptance.',
      },
    ],
    image: '/images/hero/hero-11-contracting-desktop.jpg',
    popular: true,
  },
  {
    slug: 'apartment-finishing',
    categorySlug: 'construction-finishing',
    nameAr: 'تشطيب الشقق',
    nameEn: 'Apartment Finishing',
    shortAr: 'دليل عملي لمراحل تشطيب الشقق، أنواع الأعمال، التكاليف التخطيطية، وأهم الأسئلة قبل الاتفاق مع المقاول.',
    shortEn: 'A practical guide to apartment finishing stages, work types, planning costs, and key questions before hiring a contractor.',
    introAr:
      'تشطيب الشقة يحدد الراحة والجودة لسنوات — مش مجرد ألوان وديكور. في ساعدني هتلاقي المراحل، علامات الجودة، الأخطاء الشائعة، والأسئلة اللي تسألها قبل ما تبدأ.',
    introEn:
      'Apartment finishing shapes comfort and quality for years — not just colors and décor. On Saedni you get stages, quality signs, common mistakes, and questions to ask before you start.',
    bodyAr: `<p>تشطيب الشقة من أهم المراحل التي تحدد شكل المنزل وراحته وجودة استخدامه لسنوات طويلة. والموضوع مش مجرد اختيار ألوان وديكورات، لكنه أعمال مترابطة تبدأ بتجهيز المكان وتمديدات الكهرباء والسباكة، وتنتهي بالأرضيات والدهانات والأبواب والتجهيزات النهائية.</p>
<p>تشطيب الشقق يعني تنفيذ أعمال إنشائية وتجهيزية وداخلية لتحويل الشقة من مرحلة البناء أو المحارة إلى مساحة سكنية جاهزة للاستخدام. التفاصيل تختلف حسب حالة الشقة ومستوى التشطيب والتصميم والميزانية والخامات.</p>
<p>الخدمة مناسبة لأصحاب الشقق الجديدة، ونصف التشطيب، والتجديد، والمستثمرين الذين يجهزون وحدات للتأجير أو البيع، ومن يريدون تغيير تصميم بعض المساحات. بعض الوحدات تحتاج تشطيبًا كاملًا، وأخرى تجديدًا جزئيًا فقط.</p>
<p><strong>أنواع الأعمال:</strong> تأسيس كهرباء وسباكة ومسارات تكييف، محارة وتسوية، أرضيات وحوائط (سيراميك وبورسلان ورخام)، أسقف وجبس وإضاءة مخفية، دهانات، ثم تركيبات نهائية للأبواب والأدوات الصحية والمفاتيح والإضاءة والمطبخ عند إدراجه في النطاق.</p>
<p>جودة التشطيب تظهر في استواء الحوائط والأسقف، انتظام الأرضيات والفواصل، اختبار السباكة قبل الإغلاق، سلامة الكهرباء والتأريض، تجانس الدهان، سهولة فتح الأبواب والنوافذ، واختبار العزل في الحمامات والمناطق الرطبة.</p>
<p>ترتيب المراحل مهم: معاينة وتخطيط ← تأسيس واختبار ← محارة وتجهيز ← عزل واختبار ← أرضيات وحوائط ← أسقف ← دهانات ← تركيبات نهائية ← فحص وتسليم. تنفيذ مرحلة قبل اكتمال السابقة قد يعني تكسيرًا وتكاليف إضافية.</p>
<p>تجنّب أخطاء شائعة مثل البدء بلا خطة، عدم تحديد مستوى التشطيب، شراء خامات بلا مواصفات، تغيير أماكن الكهرباء بعد التأسيس، إهمال اختبار المياه والعزل، الدهان قبل انتهاء الأعمال المتسخة، واختيار الشكل فقط دون الاستخدام، وعدم توثيق التعديلات أو ترك جزء من الميزانية للطوارئ.</p>
<p>قبل الاتفاق اسأل: هل الاتفاق كامل أم بنود محددة؟ هل السعر يشمل خامات ومصنعية؟ ما مستوى التشطيب؟ هل في مقايسة بالكميات؟ من يورّد الخامات؟ الجدول الزمني؟ حساب الإضافات؟ تقسيم الدفعات؟ اختبار السباكة والكهرباء والعزل؟ متابعة هندسية؟ بنود التسليم ومعالجة العيوب؟</p>
<p>المدد تقريبية: تجديد جزئي من أسبوعين إلى شهر، شقة متوسطة تشطيبًا كاملًا من شهرين إلى 4 أشهر، شقة كبيرة أو بتفاصيل كثيرة قد تصل 4–6 أشهر أو أكثر. التأخير شائع مع تغيير التصميم أثناء التنفيذ أو تأخر التوريد أو ضعف التنسيق بين الفنيين.</p>`,
    bodyEn: `<p>Apartment finishing shapes how a home looks, feels, and performs for years. It is not only colors and décor — it is linked work from prep and electrical/plumbing rough-ins through floors, paint, doors, and final fittings.</p>
<p>The service turns a shell or plastered unit into a livable space. Scope depends on unit condition, finish level, design, budget, and materials.</p>
<p>It suits new apartments, semi-finished units, renovations, investors preparing rentals or sales, and owners changing some spaces. Some units need full finishing; others only partial refresh.</p>
<p>Work types include electrical and plumbing rough-in, plaster and leveling, floors and walls, ceilings and gypsum, painting, then final doors, sanitary ware, switches, lights, and kitchen units when included.</p>
<p>Quality shows in flat walls and ceilings, even floors and joints, plumbing tests before closing, safe electrical work, even paint, smooth doors and windows, and waterproofing checks in wet areas.</p>
<p>Stage order matters: survey and plan → rough-in and test → plaster → waterproof and test → floors/walls → ceilings → paint → finals → inspection and handover. Skipping order often means rework and extra cost.</p>`,
    gallery: ['/images/services/apartment-finishing.jpg'],
    benefitsAr: [
      'تحويل الشقة إلى مساحة جاهزة للسكن بترتيب مراحل واضح',
      'تنسيق الكهرباء والسباكة والأرضيات والدهانات في مسار واحد',
      'إمكانية تشطيب كامل أو جزئي حسب حالة الشقة والميزانية',
      'متابعة بجودة أوضح عبر اختبارات التمديدات والعزل قبل الإغلاق',
    ],
    benefitsEn: [
      'Turn the unit into a livable space with a clear stage order',
      'Coordinate electrical, plumbing, floors, and paint in one flow',
      'Full or partial finishing based on unit condition and budget',
      'Clearer quality control via rough-in and waterproofing tests before closing',
    ],
    stepsAr: [
      'المعاينة والتخطيط وتحديد مستوى التشطيب والميزانية',
      'التأسيس: كهرباء وسباكة ومسارات تكييف مع الاختبار قبل الإغلاق',
      'المحارة وتجهيز وتسوية الأسطح',
      'العزل المائي في الحمامات والمناطق المطلوبة مع الاختبار',
      'تركيب الأرضيات والحوائط والوزرات',
      'الأسقف والجبس والإضاءة المخفية',
      'الدهانات: معجون وصنفرة وبرايمر وتشطيب نهائي',
      'التركيبات النهائية: أبواب وأدوات صحية وإضاءة وإكسسوارات',
      'الفحص والتسليم ومعالجة الملاحظات',
    ],
    stepsEn: [
      'Survey, plan, finish level, and budget',
      'Rough-in electrical, plumbing, and AC paths — test before closing',
      'Plaster, prep, and level surfaces',
      'Waterproof wet areas and test',
      'Install floors, walls, and skirting',
      'Ceilings, gypsum, and hidden lighting',
      'Paint: putty, sand, primer, final coats',
      'Final fittings: doors, sanitary ware, lights, accessories',
      'Inspection, snagging, and handover',
    ],
    typesAr: [
      'تشطيب كامل',
      'تشطيب جزئي / تجديد',
      'تأسيس كهرباء وسباكة',
      'محارة وتسوية',
      'أرضيات وحوائط',
      'أسقف وجبس بورد',
      'دهانات داخلية',
      'تركيبات نهائية',
    ],
    typesEn: [
      'Full finishing',
      'Partial finishing / refresh',
      'Electrical and plumbing rough-in',
      'Plaster and leveling',
      'Floors and walls',
      'Ceilings and gypsum',
      'Interior painting',
      'Final fittings',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين الشقة نصف التشطيب والتشطيب الكامل؟',
        a: 'نصف التشطيب يعني أن بعض أعمال البناء والتجهيز انتهت وتحتاج استكمال أعمال داخلية. التشطيب الكامل يجهّز الشقة للاستخدام وفق نطاق الاتفاق.',
      },
      {
        q: 'ما أول خطوة في تشطيب الشقة؟',
        a: 'معاينة الشقة ومراجعة حالتها والتقسيمات والتمديدات، ثم إعداد خطة واضحة للأعمال والخامات والميزانية.',
      },
      {
        q: 'هل يجب تنفيذ الكهرباء والسباكة قبل تركيب السيراميك؟',
        a: 'نعم في المعتاد: التمديدات الأساسية تُنفَّذ وتُختبر قبل تركيب الأرضيات والحوائط التي ستغطيها.',
      },
      {
        q: 'هل يمكن تشطيب الشقة على مراحل؟',
        a: 'نعم حسب الميزانية والأولوية، مع التخطيط لتسلسل الأعمال حتى لا يحدث تكسير أو إعادة مراحل سابقة.',
      },
      {
        q: 'ما الأفضل: مقاول شامل أم فنيين منفصلين؟',
        a: 'يعتمد على خبرتك في المتابعة. المقاول الشامل يسهّل التنسيق، والفنيون المنفصلون يحتاجون إدارة دقيقة لكل مرحلة.',
      },
      {
        q: 'كيف أتأكد أن الشقة جاهزة للاستلام؟',
        a: 'راجع الكهرباء والسباكة والصرف والأرضيات والدهانات والأبواب والنوافذ والأدوات الصحية، وسجّل الملاحظات واطلب معالجتها قبل الاستلام النهائي.',
      },
    ],
    faqEn: [
      {
        q: 'What is the difference between semi-finished and full finishing?',
        a: 'Semi-finished means some build/prep work is done and interior work remains. Full finishing prepares the unit for use per the agreed scope.',
      },
      {
        q: 'What is the first step?',
        a: 'Survey the unit, review layout and services needed, then set a clear plan for works, materials, and budget.',
      },
      {
        q: 'Should electrical and plumbing come before ceramic?',
        a: 'Usually yes — rough-in and testing happen before floors and walls that will cover those services.',
      },
      {
        q: 'Can finishing be done in phases?',
        a: 'Yes by budget and priority, but sequence must be planned to avoid demolition or rework.',
      },
      {
        q: 'One main contractor or separate trades?',
        a: 'Depends on your ability to coordinate. A main contractor simplifies sequencing; separate trades need careful management.',
      },
      {
        q: 'How do I know the unit is ready for handover?',
        a: 'Check electrical, plumbing, drainage, floors, paint, doors, windows, and sanitary fittings; list snags and fix them before final acceptance.',
      },
    ],
    image: '/images/services/apartment-finishing.jpg',
    popular: true,
  },
  {
    slug: 'ceramic-installation',
    categorySlug: 'construction-finishing',
    nameAr: 'تركيب السيراميك والبلاط',
    nameEn: 'Ceramic & Tile Installation',
    shortAr: 'دليل عملي لأنواع السيراميك والبلاط، مراحل التركيب، وعلامات الجودة قبل التنفيذ والاستلام.',
    shortEn: 'A practical guide to ceramic and tile types, installation stages, and quality checks before handover.',
    introAr:
      'تركيب السيراميك والبلاط يؤثر على شكل الأرضيات والحوائط وتحملها للاستخدام اليومي. في ساعدني هتلاقي الأنواع والمراحل وعلامات الجودة — لأن النتيجة مش نوع البلاط لوحده.',
    introEn:
      'Ceramic and tile work shapes how floors and walls look and hold up daily. On Saedni you get types, stages, and quality signs — because the result is not the tile choice alone.',
    bodyAr: `<p>تركيب السيراميك والبلاط من الأعمال الأساسية في تشطيب المنازل، لأنه يؤثر على شكل الأرضيات والحوائط وسهولة تنظيفها وتحملها للاستخدام اليومي. جودة النتيجة لا تعتمد على نوع البلاط فقط؛ بل تتأثر بتجهيز السطح، واختيار مواد التثبيت، ودقة القص، وانتظام الفواصل، وطريقة التنفيذ.</p>
<p>الخدمة تشمل تجهيز وتركيب وتثبيت وحدات البلاط على الأرضيات والحوائط بمواد تثبيت مناسبة، مع تنفيذ الفواصل والقص والتشطيبات. وتختلف الطريقة حسب نوع البلاط ومقاسه وسمكه وطبيعة السطح ومكان الاستخدام.</p>
<p>تناسب أصحاب الشقق الجديدة والفلل وتجديد المطابخ والحمامات والمحلات والمكاتب وتغيير الأرضيات القديمة والمساحات الخارجية التي تحتاج بلاطًا مناسبًا للطقس والاستخدام.</p>
<p><strong>أنواع الأعمال:</strong> بلاط أرضيات (غرف، ممرات، مطابخ، حمامات، مداخل)، بلاط حوائط (مطابخ وحمامات وكسوات وديكور)، بلاط خارجي (أحواش وأسطح ومداخل وممرات وحدائق مع مقاومة انزلاق)، وأعمال قص وتشطيب (حول أعمدة ومواسير، وزرات، فواصل، مستويات بين الغرف).</p>
<p>التركيب الجيد يظهر في استواء الأسطح، انتظام الفواصل، دقة القص، ثبات القطع بدون أصوات جوفاء، توزيع متوازن بلا قصاصات ظاهرة غير ضرورية، ميول صحيحة باتجاه الصرف في المناطق الرطبة، وترويبة نظيفة متجانسة.</p>
<p>المراحل: معاينة وقياسات ← تجهيز السطح ← تحديد اتجاه التركيب والتوزيع ← تجهيز مواد التثبيت ← التركيب والضبط ← القص والتفاصيل والوزرات ← الترويبة والتنظيف ← الفحص والتسليم.</p>
<p>تجنّب التركيب على سطح غير مستوٍ أو غير نظيف، لاصق غير مناسب، غياب التوزيع المسبق، فواصل غير منتظمة، إهمال الميول أو العزل في المناطق الرطبة، قطع معيبة، تغطية ضعيفة باللاصق، تحميل مبكر، قص بأدوات سيئة، أو تنظيف بمواد تضر السطح أو الفواصل.</p>
<p>قبل البدء اسأل: السعر يشمل تركيبًا فقط أم خامات؟ هل التسوية ضمن الشغل؟ ما مادة التثبيت؟ هل القص والوزرات مشمولة؟ عرض الفواصل؟ اختبار الميول؟ التعامل مع البلاط المعيب؟ تكلفة القصات الخاصة؟ المدة؟ متى يُسمح بالاستخدام؟ وهل التنظيف بعد العمل مشمول؟</p>
<p>المدد تقريبية: حمام يوم إلى 3 أيام، غرفة يوم إلى يومين، شقة متوسطة 3–7 أيام، فيلا أو مساحة كبيرة أسبوع أو أكثر — وقد تزيد مع التسوية أو العزل أو القص المعقد أو تأخر التوريد.</p>`,
    bodyEn: `<p>Ceramic and tile installation is a core finishing trade that affects how floors and walls look, clean, and hold up. Results depend on substrate prep, adhesive choice, cutting accuracy, joint consistency, and workmanship — not tile choice alone.</p>
<p>The service covers preparing, installing, and fixing tiles on floors and walls with suitable adhesives, plus joints, cutting, and finishing details. Method varies by tile type, size, thickness, substrate, and location.</p>
<p>It suits new apartments, villas, kitchen and bathroom refreshes, shops and offices, replacing old floors, and outdoor areas that need weather- and slip-suitable tiles.</p>
<p>Quality shows in level surfaces, even joints, clean cuts, solid fixing without hollow sounds, balanced layouts, correct slopes to drains in wet areas, and clean grout.</p>
<p>Stages: survey → prep substrate → set layout direction → prepare adhesive → install → cut details and skirting → grout and clean → inspect and hand over.</p>`,
    gallery: [
      '/images/hero/hero-03-tiling-desktop.jpg',
      '/images/hero/hero-03-tiling.jpg',
      '/images/hero/hero-12-marble-desktop.jpg',
      '/images/hero/hero-02-finishing-desktop.jpg',
      '/images/hero/hero-04-waterproofing-desktop.jpg',
    ],
    benefitsAr: [
      'أرضيات وحوائط أسهل في التنظيف وأكثر تحملًا للاستخدام اليومي عند التركيب الصحيح',
      'إمكانية اختيار بلاط مناسب لكل غرفة أو مساحة خارجية',
      'نتيجة مرتبة عند الالتزام بالتسوية واللاصق والفواصل والميول',
      'اكتشاف الأخطاء مبكرًا عبر فحص الاستواء والثبات قبل الاستلام',
    ],
    benefitsEn: [
      'Floors and walls that clean easier and hold up better when installed correctly',
      'Tile choices suited to each room or outdoor area',
      'Cleaner results with proper leveling, adhesive, joints, and slopes',
      'Earlier issue spotting by checking level and fixing before handover',
    ],
    stepsAr: [
      'المعاينة والقياسات وفحص حالة السطح',
      'تجهيز السطح: تنظيف واستواء ومعالجة العيوب',
      'تحديد اتجاه التركيب وتوزيع البلاطات لتقليل الهالك',
      'اختيار وتجهيز مادة التثبيت المناسبة',
      'تركيب البلاط مع ضبط الاستواء والفواصل',
      'القص والتفاصيل وتركيب الوزرات',
      'الترويبة والتنظيف وفق تعليمات المواد',
      'الفحص والتسليم: استواء وثبات وميول وقص',
    ],
    stepsEn: [
      'Survey, measure, and check the substrate',
      'Prep: clean, level, and fix defects',
      'Set layout direction and dry-lay to reduce waste',
      'Choose and prepare the right adhesive',
      'Install with level and joint control',
      'Cut details and fit skirting',
      'Grout and clean per product guidance',
      'Inspect level, fixing, slopes, and cuts before handover',
    ],
    typesAr: [
      'بلاط أرضيات داخلية',
      'بلاط حوائط مطابخ وحمامات',
      'بلاط خارجي ومقاوم للانزلاق',
      'قص وتشطيب ووزرات',
      'ضبط مستويات بين الغرف',
      'إصلاح واستبدال بلاط',
    ],
    typesEn: [
      'Interior floor tiles',
      'Kitchen and bathroom wall tiles',
      'Exterior and slip-resistant tiles',
      'Cutting, finishing, and skirting',
      'Level matching between rooms',
      'Tile repair and replacement',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين السيراميك والبورسلان؟',
        a: 'كلاهما بلاط مصنّع، والبورسلان غالبًا أقل امتصاصًا للماء وأعلى كثافة حسب التصنيع. راجع مواصفات المنتج الفعلية قبل الاختيار.',
      },
      {
        q: 'هل يمكن تركيب السيراميك فوق السيراميك القديم؟',
        a: 'قد يكون ممكنًا إذا كان القديم ثابتًا وسليمًا والسطح مناسبًا للاصق، مع التأكد أن الارتفاع الإضافي لا يضر الأبواب أو المناسيب.',
      },
      {
        q: 'ما سبب تطبيل السيراميك؟',
        a: 'غالبًا ضعف تغطية اللاصق، أو مادة غير مناسبة، أو مشكلة في السطح أو طريقة التنفيذ.',
      },
      {
        q: 'هل يمكن تركيب البلاط في الحمام بدون عزل؟',
        a: 'لا ينبغي إهمال العزل حيث يُطلب. جهّز العزل واختبره قبل تغطيته بالبلاط.',
      },
      {
        q: 'ما أفضل مقاس بلاط للشقق؟',
        a: 'لا يوجد مقاس مثالي للجميع. يعتمد على مساحة الغرفة والتصميم واستواء السطح وطريقة التوزيع.',
      },
      {
        q: 'متى يمكن المشي على السيراميك بعد تركيبه؟',
        a: 'حسب مادة التثبيت وظروف الموقع وتعليمات الشركة المصنعة. لا تحمّل الأرضية قبل اكتمال زمن التصلب.',
      },
    ],
    faqEn: [
      {
        q: 'What is the difference between ceramic and porcelain?',
        a: 'Both are manufactured tiles; porcelain is often denser and lower in water absorption depending on product specs. Always check the actual product sheet.',
      },
      {
        q: 'Can ceramic be installed over existing ceramic?',
        a: 'Sometimes, if the old tile is sound and fixed and the substrate suits the adhesive, and extra height will not affect doors or levels.',
      },
      {
        q: 'What causes hollow-sounding tiles?',
        a: 'Often poor adhesive coverage, unsuitable adhesive, substrate issues, or installation method problems.',
      },
      {
        q: 'Can bathroom tiles be installed without waterproofing?',
        a: 'Do not skip waterproofing where required. Install and test waterproofing before covering with tile.',
      },
      {
        q: 'What is the best tile size for apartments?',
        a: 'There is no universal size. It depends on room area, design, substrate flatness, and layout.',
      },
      {
        q: 'When can I walk on newly installed ceramic?',
        a: 'It depends on adhesive, site conditions, and manufacturer guidance. Do not load the floor before curing time.',
      },
    ],
    image: '/images/hero/hero-03-tiling-desktop.jpg',
    popular: true,
  },
  {
    slug: 'painting',
    categorySlug: 'construction-finishing',
    nameAr: 'أعمال الدهانات',
    nameEn: 'Painting',
    shortAr: 'دليل عملي لأنواع الدهانات، مراحل التنفيذ، وكيف تختار الدهان المناسب لمنزلك قبل الاتفاق مع الفني.',
    shortEn: 'A practical guide to paint types, execution stages, and how to choose the right paint for your home.',
    introAr:
      'الدهانات تحدد الشكل النهائي للمكان وحماية بعض الأسطح — لكن النتيجة مش لون جميل بس. في ساعدني هتلاقي الأنواع والمراحل وعلامات الجودة والأخطاء الشائعة قبل ما تبدأ.',
    introEn:
      'Paint shapes the final look and protects some surfaces — but results are not color alone. On Saedni you get types, stages, quality signs, and common mistakes before you start.',
    bodyAr: `<p>الدهانات من أهم مراحل تشطيب المنازل؛ لأنها تؤثر على الشكل النهائي، وتساعد في حماية بعض الأسطح، وتمنح الغرف طابعًا يناسب الاستخدام والتصميم. النتيجة الجيدة لا تعتمد على اللون فقط: تجهيز الحوائط، معالجة العيوب، نوع الدهان، وطريقة التطبيق كلها عوامل أساسية.</p>
<p>الخدمة تشمل تجهيز وتغطية الحوائط والأسقف بطبقات مخصصة للدهان، ومعالجة الشروخ والمعجون والصنفرة، وتطبيق التأسيس والدهان النهائي وبعض التشطيبات الديكورية. وتختلف الأنواع حسب السطح والمكان والرطوبة ومستوى اللمعان.</p>
<p>تناسب الشقق الجديدة والفلل وتجديد الألوان والمكاتب والمحلات والعقارات قبل التأجير أو البيع.</p>
<p><strong>أنواع الأعمال:</strong> دهانات داخلية للغرف والمجالس والممرات والمطابخ والأسقف، دهانات خارجية للواجهات والأسوار والأسطح، دهانات ديكورية بتأثيرات حجرية أو إسمنتية أو رملية أو متدرجة، ودهانات متخصصة للرطوبة أو المعادن أو الأخشاب أو تطبيقات محددة وفق مواصفات المنتج — مع التأكد من الملاءمة الفعلية وليس الوصف التسويقي فقط.</p>
<p>الشغل الجيد يظهر في تجهيز نظيف وجاف، معالجة عيوب قبل الطبقات النهائية، نعومة بعد المعجون والصنفرة، تجانس لون وتغطية، حواف دقيقة، منتج مناسب للمكان، والالتزام بزمن الجفاف بين الطبقات.</p>
<p>المراحل: معاينة ← تجهيز وحماية المكان ← معالجة عيوب ورطوبة ← معجون ← صنفرة وتنظيف ← برايمر ← دهان نهائي ← تشطيب ومراجعة ← تسليم.</p>
<p>تجنّب الدهان على حوائط غير جافة، تجاهل سبب الرطوبة، إهمال الشروخ والتنظيف، معجون أو دهان غير مناسب، غياب التأسيس عند الحاجة، عدم احترام زمن الجفاف، خلط منتجات غير متوافقة، اختيار لون بلا عينة في إضاءة المكان، وعدم حماية الأرضيات والأبواب.</p>
<p>قبل الاتفاق اسأل: هل السعر يشمل معجون وصنفرة ودهان؟ كم طبقة معجون؟ هل البرايمر مشمول؟ نوع الدهان وملاءمته؟ الخامات ضمن السعر؟ معالجة الشروخ والرطوبة؟ تجربة عينة؟ عدد طبقات النهائي؟ المدة؟ حماية الأرضيات؟ التعامل مع اختلاف اللون أو العيوب؟ وهل في ضمان تنفيذ؟</p>
<p>المدد تقريبية: غرفة يوم إلى 3 أيام، شقة متوسطة 4–10 أيام، فيلا أو مساحة كبيرة من أسبوعين فأكثر — وقد تزيد مع الرطوبة أو إزالة دهان قديم أو تأثيرات ديكورية.</p>`,
    bodyEn: `<p>Painting is a key finishing stage that shapes the final look, helps protect some surfaces, and sets the feel of each room. Good results are not color alone — prep, defect repair, paint choice, and application all matter.</p>
<p>The service covers preparing and coating walls and ceilings, repairing cracks, putty and sanding, primer and finish coats, and some decorative finishes. Types vary by substrate, location, humidity, and sheen.</p>
<p>It suits new apartments, villas, color refreshes, offices, shops, and units prepared for rent or sale.</p>
<p>Quality shows in clean dry prep, defect repair before final coats, smooth putty and sanding, even color and coverage, clean edges, a product suited to the room, and proper drying times between coats.</p>
<p>Stages: survey → protect the space → fix defects and moisture causes → putty → sand and clean → primer → finish coats → touch-up → handover.</p>`,
    gallery: ['/images/services/painting.jpg'],
    benefitsAr: [
      'شكل نهائي أنظف عند تجهيز الحوائط صح قبل اللون',
      'حماية أفضل لبعض الأسطح باختيار منتج مناسب للمكان',
      'إمكانية تجديد سريع أو تشطيب ديكوري حسب التصميم',
      'تقليل التقشير والعيوب بمعالجة الرطوبة والشروخ أولًا',
    ],
    benefitsEn: [
      'A cleaner final look when walls are prepped before color',
      'Better surface protection with products suited to the room',
      'Quick refresh or decorative finishes depending on design',
      'Fewer peeling issues when moisture and cracks are fixed first',
    ],
    stepsAr: [
      'معاينة الأسطح واكتشاف الشروخ والرطوبة والتقشير',
      'تجهيز المكان وحماية الأرضيات والأبواب والأثاث',
      'معالجة العيوب وأسباب الرطوبة قبل التغطية',
      'المعجون لتسوية السطح',
      'الصنفرة والتنظيف من الأتربة',
      'طبقة التأسيس (البرايمر) حسب النظام',
      'الدهان النهائي مع احترام زمن الجفاف',
      'التشطيب والمراجعة ثم التسليم',
    ],
    stepsEn: [
      'Survey surfaces for cracks, moisture, and peeling',
      'Protect floors, doors, and furniture',
      'Fix defects and moisture causes before covering',
      'Apply putty to level the surface',
      'Sand and clean dust',
      'Apply primer suited to the system',
      'Finish coats with proper drying time',
      'Touch up, review, and hand over',
    ],
    typesAr: [
      'دهانات داخلية',
      'دهانات خارجية وواجهات',
      'دهانات ديكورية',
      'معجون وصنفرة وتأسيس',
      'معالجة شروخ ورطوبة',
      'دهانات متخصصة حسب السطح',
    ],
    typesEn: [
      'Interior painting',
      'Exterior and facade painting',
      'Decorative finishes',
      'Putty, sanding, and priming',
      'Crack and moisture treatment',
      'Specialty coatings by substrate',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين المعجون والبرايمر والدهان؟',
        a: 'المعجون لتسوية السطح ومعالجة العيوب البسيطة، والبرايمر تأسيس يجهّز السطح، والدهان الطبقة النهائية للون والتشطيب.',
      },
      {
        q: 'كم طبقة دهان يحتاج الحائط؟',
        a: 'حسب حالة السطح ونوع المنتج واللون ونظام الدهان. اتبع تعليمات الشركة المصنعة للتغطية المطلوبة.',
      },
      {
        q: 'ما أفضل نوع دهان لغرف النوم؟',
        a: 'يعتمد على الاستخدام والتشطيب وسهولة التنظيف والميزانية. لا يوجد نوع واحد أفضل لكل الحالات.',
      },
      {
        q: 'هل يمكن دهان الحوائط فوق الدهان القديم؟',
        a: 'نعم في حالات كثيرة إذا كانت الطبقة القديمة ثابتة ومتوافقة، مع تجهيز السطح وإزالة الأجزاء الضعيفة.',
      },
      {
        q: 'لماذا يظهر الدهان بشكل غير متساوٍ؟',
        a: 'غالبًا سوء التجهيز، اختلاف امتصاص الحائط، عدم انتظام التطبيق، أو عدم جفاف الطبقات بشكل مناسب.',
      },
      {
        q: 'هل يمكن دهان الحوائط التي بها رطوبة؟',
        a: 'لا تكتفِ بتغطية الأثر. حدد مصدر الرطوبة وعالجه وجفّف السطح قبل نظام الدهان المناسب.',
      },
    ],
    faqEn: [
      {
        q: 'What is the difference between putty, primer, and paint?',
        a: 'Putty levels and fills minor defects, primer prepares the surface, and paint is the final color and finish coat.',
      },
      {
        q: 'How many paint coats does a wall need?',
        a: 'It depends on substrate condition, product, color, and system. Follow manufacturer guidance for coverage.',
      },
      {
        q: 'What is the best paint for bedrooms?',
        a: 'It depends on use, finish, cleanability, and budget. There is no single best type for every case.',
      },
      {
        q: 'Can I paint over old paint?',
        a: 'Often yes if the old coat is sound and compatible, after prep and removal of weak areas.',
      },
      {
        q: 'Why does paint look uneven?',
        a: 'Usually poor prep, uneven absorption, inconsistent application, or insufficient drying between coats.',
      },
      {
        q: 'Can damp walls be painted?',
        a: 'Do not only cover the stain. Find and fix the moisture source and dry the surface before the right paint system.',
      },
    ],
    image: '/images/services/painting.jpg',
    popular: true,
  },
  {
    slug: 'marble-porcelain',
    categorySlug: 'construction-finishing',
    nameAr: 'الرخام والبورسلان',
    nameEn: 'Marble & Porcelain',
    shortAr: 'دليل عملي لأنواع الرخام والبورسلان، الاستخدامات، مراحل التركيب، وأهم النصائح قبل التنفيذ.',
    shortEn: 'A practical guide to marble and porcelain types, uses, installation stages, and tips before work starts.',
    introAr:
      'الرخام والبورسلان من أشهر خيارات تشطيب الأرضيات والجدران — لكن الاختيار مش مجرد شكل ولون. في ساعدني هتلاقي الفرق بين الخامتين، أنواع الأعمال، مراحل التركيب، وعلامات الجودة قبل ما تبدأ.',
    introEn:
      'Marble and porcelain are popular floor and wall finishes — but the choice is more than look and color. On Saedni you get the differences, work types, installation stages, and quality checks before you start.',
    bodyAr: `<p>الرخام والبورسلان من أشهر خيارات تشطيب الأرضيات والجدران في المنازل والمنشآت، لكن الاختيار بينهما مش مجرد اختلاف في الشكل أو اللون. كل نوع له خصائص واستخدامات وطريقة تركيب وعناية مختلفة.</p>
<p>خدمة تركيب الرخام والبورسلان تشمل تجهيز وتركيب وتثبيت ألواح الرخام الطبيعي أو بلاط البورسلان على الأرضيات والجدران والدرج والأسطح المختلفة.</p>
<p>الرخام حجر طبيعي يتميز باختلاف عروقه وألوانه من قطعة لأخرى. أما البورسلان فمادة مصنّعة من خامات معدنية وطينية تحت حرارة وضغط مرتفعين، ويتوفر بأشكال تحاكي الرخام والحجر والخشب وغيرها.</p>
<p>تتناسب الأعمال مع الشقق (أرضيات وحمامات ومطابخ)، والفلل (مداخل وسلالم ومجالس)، والمكاتب والمحلات والفنادق والمنشآت. ويُختار النوع حسب الاستخدام ومعدل الحركة واحتمال التعرض للمياه أو الاحتكاك.</p>
<p><strong>أعمال الرخام:</strong> أرضيات، سلالم، أسطح مطابخ، حمامات، كسوات حوائط، وواجهات بأنواع مناسبة للتثبيت الخارجي.</p>
<p><strong>أعمال البورسلان:</strong> أرضيات وحوائط، مقاسات كبيرة تحتاج تركيب متخصص، بورسلان يحاكي الرخام أو الخشب، وأنواع خارجية بمراعاة مقاومة الانزلاق.</p>
<p>جودة التركيب تظهر في استواء السطح، انتظام الفواصل، ثبات القطع بدون أصوات جوفاء، دقة القص حول الأعمدة والمواسير، تناسق عروق الرخام، معالجة الحماية عند الحاجة، والميول الصحيحة باتجاه الصرف في المناطق الرطبة.</p>
<p>تجنّب أخطاء شائعة مثل شراء الخامة قبل حساب الكمية، اختيار سطح لامع شديد الانزلاق في أماكن المياه، إهمال استواء الأرضية، لاصق غير مناسب، إهمال توزيع البلاط قبل التركيب، استخدام منظفات حمضية على الرخام، أو تحميل الأرضية قبل اكتمال زمن التصلب.</p>
<p>قبل الاتفاق اسأل: هل السعر يشمل التوريد والتركيب؟ هل الهالك محسوب؟ ما نوع اللاصق؟ هل التسوية ضمن الشغل؟ هل الوزرات والتشطيبات مشمولة؟ كيف اتجاه التوزيع؟ هل في ضمان؟ المدة؟ اختبار الميول؟ وكيف التعامل مع القطع المعيبة؟</p>
<p>المدة تختلف حسب المساحة والخامة وحالة السطح: حمام تقريبًا 2–4 أيام، شقة متوسطة 4–10 أيام، فيلا أو مساحة كبيرة أسبوعين أو أكثر — وقد تزيد مع العزل أو القص الخاص أو تأخر التوريد.</p>`,
    bodyEn: `<p>Marble and porcelain are popular floor and wall finishes in homes and buildings, but the choice is more than look or color. Each material has different properties, uses, installation methods, and care needs.</p>
<p>The service covers preparing, installing, and fixing natural marble slabs or porcelain tiles on floors, walls, stairs, and related surfaces.</p>
<p>Marble is a natural stone with unique veining. Porcelain is manufactured from mineral and clay materials under high heat and pressure, and is available in looks that mimic marble, stone, wood, and more.</p>
<p>It suits apartments, villas, offices, shops, hotels, and facilities. Choose by daily use, traffic, and exposure to water or abrasion.</p>
<p>Quality shows in level surfaces, consistent joints, solid fixing without hollow sounds, clean cuts, careful veining layout, suitable protection for marble, and correct slopes toward drains in wet areas.</p>
<p>Avoid buying materials before quantities are clear, using high-gloss slippery tiles in wet zones, skipping substrate leveling, using the wrong adhesive, ignoring dry layouts, acidic cleaners on marble, or loading the floor before curing time.</p>`,
    gallery: [
      '/images/hero/hero-12-marble-desktop.jpg',
      '/images/hero/hero-12-marble.jpg',
      '/images/hero/hero-03-tiling-desktop.jpg',
      '/images/hero/hero-02-finishing-desktop.jpg',
    ],
    benefitsAr: [
      'خيارات واسعة للأرضيات والجدران والسلالم وأسطح المطابخ',
      'مظهر فاخر مع الرخام الطبيعي أو مظهر مشابه ببورسلان عملي',
      'إمكانية اختيار تشطيب مناسب للحركة والمياه والاستخدام اليومي',
      'نتيجة مرتبة عند الالتزام بالتسوية واللاصق والفواصل الصحيحة',
    ],
    benefitsEn: [
      'Wide options for floors, walls, stairs, and kitchen counters',
      'Natural marble luxury or practical porcelain marble-look options',
      'Finishes suited to traffic, water exposure, and daily use',
      'Clean results when leveling, adhesive, and joints are done right',
    ],
    stepsAr: [
      'المعاينة والقياسات وفحص حالة الأرضية أو الحوائط',
      'اختيار الخامة والمقاسات والألوان والتشطيب المناسب',
      'تجهيز السطح: تنظيف واستواء ومعالجة العيوب',
      'التخطيط والتوزيع واتجاه التركيب لتقليل الهالك',
      'التركيب والتثبيت بمادة مناسبة لنوع الخامة والمقاس',
      'الفواصل والتشطيب وتنظيف الأسطح والحواف',
      'الفحص والتسليم: استواء وثبات وفواصل قبل الاستلام',
    ],
    stepsEn: [
      'Inspection, measurements, and substrate checks',
      'Choose material, sizes, colors, and suitable finish',
      'Prepare the surface: clean, level, and fix defects',
      'Plan layout and direction to reduce waste',
      'Install with adhesive suited to material and size',
      'Grout, finish edges, and clean surfaces',
      'Final inspection of level, fixing, and joints before handover',
    ],
    typesAr: [
      'رخام أرضيات وسلالم',
      'رخام مطابخ وحمامات',
      'كسوات رخام للحوائط',
      'بورسلان أرضيات وحوائط',
      'بورسلان كبير المقاسات',
      'بورسلان يحاكي الرخام أو الخشب',
      'بورسلان خارجي مقاوم للانزلاق',
      'تلميع وصيانة الرخام',
    ],
    typesEn: [
      'Marble floors and stairs',
      'Kitchen and bathroom marble',
      'Marble wall cladding',
      'Porcelain floors and walls',
      'Large-format porcelain',
      'Marble-look or wood-look porcelain',
      'Exterior slip-resistant porcelain',
      'Marble polishing and care',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين الرخام والبورسلان؟',
        a: 'الرخام حجر طبيعي بعروق واختلافات طبيعية، أما البورسلان فمادة مصنّعة بتصميمات ومواصفات متنوعة.',
      },
      {
        q: 'أيهما أفضل للأرضيات: الرخام أم البورسلان؟',
        a: 'يعتمد على الاستخدام والميزانية والتصميم ومتطلبات الصيانة. لا يوجد خيار أفضل في كل الحالات.',
      },
      {
        q: 'هل يمكن تركيب البورسلان فوق السيراميك القديم؟',
        a: 'قد يكون ممكنًا إذا كان السيراميك ثابتًا وسليمًا والارتفاع الإضافي مقبولًا، مع نظام تثبيت مناسب وبعد فحص السطح.',
      },
      {
        q: 'هل الرخام مناسب للحمامات؟',
        a: 'نعم مع اختيار التشطيب المناسب ومراعاة مقاومة الانزلاق والعناية الدورية والحماية من البقع.',
      },
      {
        q: 'هل يحتاج الرخام إلى صيانة مستمرة؟',
        a: 'يحتاج عناية مناسبة: منظفات ملائمة للحجر وتجنب المواد الحمضية، وقد يحتاج إعادة معالجة أو تلميع حسب الاستخدام.',
      },
      {
        q: 'ما سبب اختلاف مستوى البلاط بعد التركيب؟',
        a: 'غالبًا عدم استواء السطح، أو اختلاف سماكة البلاطات، أو أخطاء في الضبط والتسوية أثناء التركيب.',
      },
    ],
    faqEn: [
      {
        q: 'What is the difference between marble and porcelain?',
        a: 'Marble is a natural stone with unique veining; porcelain is manufactured with varied designs and specs.',
      },
      {
        q: 'Which is better for floors?',
        a: 'It depends on use, budget, design, and maintenance. There is no single best choice for every case.',
      },
      {
        q: 'Can porcelain be installed over existing ceramic?',
        a: 'Sometimes, if the old tile is sound and fixed, the extra height is acceptable, and a suitable system is used after inspection.',
      },
      {
        q: 'Is marble suitable for bathrooms?',
        a: 'Yes with the right finish, slip consideration, regular care, and stain protection.',
      },
      {
        q: 'Does marble need ongoing maintenance?',
        a: 'Yes — use stone-safe cleaners, avoid acids, and consider resealing or polishing based on wear.',
      },
      {
        q: 'Why are tiles uneven after installation?',
        a: 'Usually uneven substrate, thickness variation, or leveling mistakes during installation.',
      },
    ],
    image: '/images/hero/hero-12-marble-desktop.jpg',
    popular: true,
  },
  {
    slug: 'gypsum-board',
    categorySlug: 'construction-finishing',
    nameAr: 'الجبس بورد',
    nameEn: 'Gypsum Board',
    shortAr: 'دليل عملي للأسقف والقواطع والإضاءة المخفية: أنواع الجبس بورد، مراحل التركيب، وعلامات الجودة قبل الاتفاق.',
    shortEn: 'A practical guide to ceilings, partitions, and hidden lighting: gypsum types, stages, and quality checks before you agree.',
    introAr:
      'الجبس بورد نظام تشطيب بألواح جبسية على هيكل معدني للأسقف والقواطع والديكور والإضاءة المخفية. في ساعدني هتلاقي الأنواع والمراحل وعلامات الجودة والأخطاء الشائعة قبل التنفيذ.',
    introEn:
      'Gypsum board is a finishing system of plasterboards on metal framing for ceilings, partitions, décor, and hidden lighting. On Saedni you get types, stages, quality signs, and common mistakes before work starts.',
    bodyAr: `<p>الجبس بورد نظام تشطيب يعتمد على ألواح جبسية تُثبَّت على هياكل معدنية، ويُستخدم في الأسقف المعلقة والحوائط والقواطع والديكورات الداخلية، مع إمكانية دمج الإضاءة المخفية والتصميمات الحديثة.</p>
<p>تناسب الخدمة أصحاب الشقق والفلل لتطوير الديكور الداخلي، والمحلات والمكاتب، ومن يريد إخفاء التمديدات الكهربائية أو تحسين توزيع الإضاءة، أو تقسيم المساحات بقواطع خفيفة.</p>
<p><strong>أنواع الأعمال:</strong> أسقف معلقة ومستوية، أسقف متعددة المستويات، بيت نور وإضاءة مخفية، حوائط وقواطع داخلية، ديكورات تلفزيون وخلفيات، تغطية أعمدة وبعض العناصر المعمارية، وألواح مقاومة للرطوبة أو الحريق حسب الاستخدام والمواصفات.</p>
<p>جودة التنفيذ تظهر في استواء السطح بلا تموجات واضحة، ثبات الهيكل والألواح، انتظام الفواصل ومعالجتها جيدًا، عدم ظهور تشققات عند الوصلات والزوايا، توزيع فتحات الإضاءة بدقة، واستخدام النوع المناسب من الألواح حسب طبيعة المكان.</p>
<p>المراحل: معاينة ورفع مقاسات ← تحديد التصميم والمناسيب ومواقع الإضاءة ← تركيب الهيكل المعدني ← تثبيت الألواح ← معالجة الفواصل والزوايا ← صنفرة وتجهيز ← دهان وتركيب إضاءة ← مراجعة الاستواء والتشطيب.</p>
<p>تجنّب ألواح غير مناسبة للأماكن الرطبة، هيكل معدني ضعيف، عدم ضبط المناسيب قبل التركيب، إهمال معالجة الفواصل، عدم التنسيق مع الكهربائي، تعليق أحمال ثقيلة بلا تدعيم، وإغلاق السقف قبل التأكد من سلامة التمديدات داخله.</p>
<p>قبل الاتفاق اسأل: نوع الألواح؟ السماكة ومواصفات الهيكل؟ هل السعر يشمل خامات وتركيب ومعجون؟ هل التصميم يشمل فتحات الإضاءة؟ كيف تُدعَّم وحدات الإضاءة الثقيلة؟ هل في ضمان مكتوب؟ وما الذي لا يشمله السعر؟</p>
<p>المدة تختلف حسب المساحة وتعقيد التصميم: سقف بسيط في غرفة صغيرة قد يأخذ يومًا أو أكثر، والأسقف متعددة المستويات والمساحات الكبيرة تحتاج عدة أيام. التأخير شائع مع تعديلات التصميم أو انتظار الكهرباء أو الدهانات.</p>`,
    bodyEn: `<p>Gypsum board is a finishing system of plasterboards fixed on metal framing for suspended ceilings, walls, partitions, and interior décor, including hidden lighting and modern designs.</p>
<p>It suits apartments and villas upgrading interiors, shops and offices, hiding electrical runs or improving lighting layout, and light-weight space division.</p>
<p>Work types include flat and multi-level ceilings, cove lighting, partitions, TV walls, column cladding, and moisture- or fire-rated boards per specs and use.</p>
<p>Quality shows in flat surfaces, stable framing and boards, well-treated joints, no early cracks at seams and corners, accurate light openings, and the right board type for the room.</p>
<p>Stages: survey and measure → lock design, levels, and light points → metal framing → board fixing → joint treatment → sand and prep → paint and lights → final level and finish check.</p>
<p>Avoid wrong boards in wet rooms, weak framing, skipping level checks, poor joint treatment, no coordination with the electrician, hanging heavy loads without support, and closing the ceiling before services inside are verified.</p>`,
    gallery: ['/images/services/gypsum-board.jpg'],
    benefitsAr: [
      'أسقف وقواطع بتصميم مرن وإضاءة مخفية بدون هدم كبير',
      'إخفاء التمديدات وتحسين توزيع الإضاءة بشكل مرتب',
      'تقسيم المساحات بقواطع خفيفة نسبيًا',
      'إمكانية الإصلاح الجزئي عند التلف بدل إعادة العمل كله',
    ],
    benefitsEn: [
      'Flexible ceilings and partitions with hidden lighting without heavy demolition',
      'Clean concealment of services and better lighting layout',
      'Space division with relatively light partitions',
      'Partial repair is often possible instead of full redo',
    ],
    stepsAr: [
      'معاينة المكان ورفع المقاسات',
      'تحديد التصميم والمناسيب ومواقع الإضاءة',
      'تركيب الهيكل المعدني وتثبيته',
      'تثبيت ألواح الجبس بورد',
      'معالجة الفواصل والزوايا',
      'الصنفرة وتجهيز السطح',
      'تنفيذ الدهان وتركيب وحدات الإضاءة',
      'مراجعة الاستواء والتشطيب النهائي',
    ],
    stepsEn: [
      'Survey the space and take measurements',
      'Lock design, levels, and lighting positions',
      'Install and fix metal framing',
      'Fix gypsum boards',
      'Treat joints and corners',
      'Sand and prep the surface',
      'Paint and install light fittings',
      'Check flatness and final finish',
    ],
    typesAr: [
      'أسقف معلقة ومستوية',
      'أسقف متعددة المستويات',
      'بيت نور وإضاءة مخفية',
      'حوائط وقواطع داخلية',
      'ديكورات تلفزيون وخلفيات',
      'تغطية أعمدة وعناصر معمارية',
      'ألواح مقاومة للرطوبة أو الحريق',
    ],
    typesEn: [
      'Flat suspended ceilings',
      'Multi-level ceilings',
      'Cove and hidden lighting',
      'Interior walls and partitions',
      'TV walls and feature backgrounds',
      'Column and architectural cladding',
      'Moisture- or fire-rated boards',
    ],
    faqAr: [
      {
        q: 'هل الجبس بورد مناسب للمطابخ؟',
        a: 'يمكن استخدام أنواع مناسبة للرطوبة، مع مراعاة التهوية ومصادر البخار وعدم تعريض الألواح للمياه مباشرة.',
      },
      {
        q: 'هل الجبس بورد مقاوم للماء؟',
        a: 'ليس كل الجبس بورد مقاومًا للماء؛ توجد ألواح معالجة للرطوبة، لكنها ليست بديلًا عن العزل المائي.',
      },
      {
        q: 'هل يمكن تركيب إضاءة مخفية؟',
        a: 'نعم، يمكن تصميم بيت نور وتجهيز أماكن الإضاءة أثناء تنفيذ الهيكل.',
      },
      {
        q: 'هل يمكن إصلاح الجبس بورد عند حدوث تلف؟',
        a: 'يمكن إصلاح بعض التلفيات باستبدال الجزء المتضرر ومعالجة الفواصل وإعادة التشطيب.',
      },
      {
        q: 'هل الجبس بورد يقلل ارتفاع الغرفة؟',
        a: 'نعم، لأنه يحتاج مساحة للهيكل والألواح، ويختلف مقدار الانخفاض حسب التصميم والتمديدات.',
      },
    ],
    faqEn: [
      {
        q: 'Is gypsum board suitable for kitchens?',
        a: 'Moisture-suitable boards can be used with good ventilation and steam control, and without direct water exposure.',
      },
      {
        q: 'Is gypsum board waterproof?',
        a: 'Not all boards are. Moisture-treated boards exist, but they are not a substitute for waterproofing.',
      },
      {
        q: 'Can hidden lighting be installed?',
        a: 'Yes — cove lighting and light openings can be planned while framing is installed.',
      },
      {
        q: 'Can damaged gypsum board be repaired?',
        a: 'Some damage can be fixed by replacing the affected section, treating joints, and refinishing.',
      },
      {
        q: 'Does gypsum board reduce room height?',
        a: 'Yes — framing and boards need space, and the drop depends on design and services inside.',
      },
    ],
    image: '/images/services/gypsum-board.jpg',
    popular: true,
  },
  {
    slug: 'waterproofing',
    categorySlug: 'construction-finishing',
    nameAr: 'العزل والعزل المائي',
    nameEn: 'Waterproofing & Insulation',
    shortAr: 'دليل عملي للعزل المائي والحراري: أنواع الأعمال، مراحل التنفيذ، وعلامات الجودة قبل التشطيب.',
    shortEn: 'A practical guide to waterproofing and thermal insulation: work types, stages, and quality checks before finishing.',
    introAr:
      'العزل يحمي المبنى من المياه والرطوبة والحرارة. في ساعدني هتلاقي الفرق بين العزل المائي والحراري، أنواع الأعمال، المراحل، والأخطاء الشائعة قبل ما تبدأ.',
    introEn:
      'Insulation protects buildings from water, moisture, and heat. On Saedni you get waterproof vs thermal systems, work types, stages, and common mistakes before you start.',
    bodyAr: `<p>العزل استخدام مواد وأنظمة متخصصة لحماية المباني من تأثير المياه والرطوبة والحرارة، وقد يشمل الأسطح والخزانات والحمامات والجدران والأساسات حسب طبيعة المشكلة وموقعها. العزل المائي يمنع تسرب المياه، والعزل الحراري يقلل انتقال الحرارة إلى داخل المبنى.</p>
<p>تناسب الخدمة أصحاب المنازل والفلل، والمباني الجديدة قبل التشطيب، ومن يعانون من تسرب أو رطوبة، والعقارات ذات الأسطح المكشوفة، والخزانات والمسابح والمرافق التي تحتاج حماية من المياه.</p>
<p><strong>أنواع الأعمال:</strong> عزل مائي للأسطح، عزل حمامات ومطابخ، عزل خزانات ومسابح، عزل أساسات، عزل حراري لأسطح وجدران، معالجة رطوبة الجدران، وعزل فواصل وشروخ وفق طبيعة المشكلة.</p>
<p>جودة التنفيذ تظهر في اختيار مادة مناسبة للمكان، تجهيز وتنظيف السطح، معالجة الشروخ والفواصل، انتظام الطبقات بلا مناطق مكشوفة، الالتزام بالسماكة وطريقة التطبيق حسب الشركة المصنعة، اختبار مناسب بعد التنفيذ مثل الغمر عند ملاءمته، وحماية طبقة العزل أثناء استكمال التشطيبات.</p>
<p>المراحل: معاينة وتحديد مصدر المشكلة ← فحص السطح ← إزالة التالف والتنظيف ← معالجة الشروخ والفواصل ← تمهيد عند الحاجة ← تطبيق نظام العزل ← الجفاف وفق التعليمات ← الاختبارات ← طبقة الحماية والتشطيب.</p>
<p>تجنّب العزل فوق سطح غير نظيف، مادة غير مناسبة، تجاهل الشروخ، عدم الالتزام بعدد الطبقات أو السماكة، تشطيب قبل اكتمال الجفاف، إتلاف العزل أثناء البلاط، اعتبار الدهان العادي حلًا لكل رطوبة، وعدم الاختبار بعد الانتهاء.</p>
<p>قبل الاتفاق اسأل: نوع العزل المناسب؟ هل مصدر التسرب محدد؟ اسم المادة ومواصفاتها؟ هل السعر يشمل تجهيز السطح ومعالجة الشروخ؟ عدد الطبقات والسماكة؟ هل في اختبار بعد التنفيذ؟ طبقة حماية؟ ومدة الضمان وشروطه المكتوبة؟</p>
<p>المدة تختلف حسب المساحة والمادة وحالة السطح: مساحة صغيرة قد تأخذ يومًا أو أكثر، والأسطح الكبيرة والخزانات تحتاج وقتًا أطول مع فترات الجفاف والاختبارات. التأخير شائع مع الأمطار أو الرطوبة أو تلف طبقات قديمة.</p>`,
    bodyEn: `<p>Insulation uses specialized materials and systems to protect buildings from water, moisture, and heat. Scope may cover roofs, tanks, bathrooms, walls, and foundations depending on the problem. Waterproofing stops water ingress; thermal insulation reduces heat transfer into the building.</p>
<p>It suits homes and villas, new buildings before finishing, properties with leaks or damp, exposed roofs, and tanks, pools, and facilities that need water protection.</p>
<p>Quality shows in the right material for the location, clean substrate prep, crack and joint treatment, continuous layers, manufacturer thickness and method, suitable testing after install, and protecting the membrane during later finishes.</p>
<p>Stages: survey and find the source → inspect substrate → remove damaged parts and clean → treat cracks and joints → primer if needed → apply the system → cure per guidance → test → protect and finish.</p>`,
    gallery: ['/images/services/waterproofing.jpg'],
    benefitsAr: [
      'حماية أفضل من التسرب والرطوبة عند اختيار النظام المناسب',
      'تقليل انتقال الحرارة بالعزل الحراري حيث يُحتاج',
      'اكتشاف أبكر للمشاكل عبر المعاينة والاختبار قبل التغطية',
      'حماية طبقة العزل أثناء التشطيب يقلل فشل النظام لاحقًا',
    ],
    benefitsEn: [
      'Better protection from leaks and damp when the right system is chosen',
      'Reduced heat transfer with thermal insulation where needed',
      'Earlier issue spotting via survey and testing before covering',
      'Protecting the membrane during finishing reduces later system failure',
    ],
    stepsAr: [
      'معاينة الموقع وتحديد مصدر المشكلة',
      'فحص السطح أو المنطقة المراد عزلها',
      'إزالة الأجزاء التالفة وتنظيف السطح',
      'معالجة الشروخ والفواصل',
      'تجهيز السطح بالمواد التمهيدية عند الحاجة',
      'تطبيق نظام العزل المناسب',
      'ترك المواد حتى تجف وفق تعليمات الشركة المصنعة',
      'إجراء الاختبارات المناسبة',
      'تنفيذ طبقة الحماية والتشطيب النهائي',
    ],
    stepsEn: [
      'Survey the site and identify the problem source',
      'Inspect the surface or area to be insulated',
      'Remove damaged parts and clean the substrate',
      'Treat cracks and joints',
      'Prime or prep when required',
      'Apply the suitable insulation system',
      'Allow curing per manufacturer guidance',
      'Run suitable tests',
      'Apply protection and final finish',
    ],
    typesAr: [
      'عزل مائي للأسطح',
      'عزل الحمامات والمطابخ',
      'عزل الخزانات والمسابح',
      'عزل الأساسات',
      'عزل حراري',
      'معالجة رطوبة الجدران',
      'عزل فواصل وشروخ',
    ],
    typesEn: [
      'Roof waterproofing',
      'Bathroom and kitchen waterproofing',
      'Tank and pool waterproofing',
      'Foundation waterproofing',
      'Thermal insulation',
      'Wall damp treatment',
      'Joint and crack sealing',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين العزل المائي والعزل الحراري؟',
        a: 'العزل المائي يمنع نفاذ المياه، أما العزل الحراري فيقلل انتقال الحرارة.',
      },
      {
        q: 'هل يمكن عزل السطح بعد التشطيب؟',
        a: 'نعم، لكن يجب تحديد النظام المناسب وطريقة التنفيذ دون إتلاف التشطيبات الموجودة.',
      },
      {
        q: 'كيف أعرف أن عزل الحمام سليم؟',
        a: 'يُفحص وفق طريقة الاختبار المناسبة قبل تركيب البلاط، مع التأكد من سلامة الزوايا والفواصل.',
      },
      {
        q: 'هل العزل يعالج الرطوبة الموجودة في الجدران؟',
        a: 'ليس دائمًا؛ يجب تحديد مصدر الرطوبة أولًا — قد يكون تسربًا أو صعود رطوبة أو تكاثفًا.',
      },
      {
        q: 'متى يجب إعادة العزل؟',
        a: 'عند ظهور تلف أو تسرب أو انتهاء العمر التشغيلي للنظام، ويحدد ذلك الفحص الفني وحالة المواد.',
      },
      {
        q: 'هل يشمل كشف التسرب؟',
        a: 'كشف التسرب خدمة مستقلة مرتبطة، ومفيدة لتحديد المصدر قبل اختيار نظام العزل.',
      },
    ],
    faqEn: [
      {
        q: 'What is the difference between waterproofing and thermal insulation?',
        a: 'Waterproofing stops water ingress; thermal insulation reduces heat transfer.',
      },
      {
        q: 'Can a roof be waterproofed after finishing?',
        a: 'Yes, but the right system and method must protect existing finishes.',
      },
      {
        q: 'How do I know bathroom waterproofing is sound?',
        a: 'Use a suitable test method before tiling, and check corners and joints carefully.',
      },
      {
        q: 'Does insulation fix damp walls?',
        a: 'Not always — find the moisture source first: leak, rising damp, or condensation.',
      },
      {
        q: 'When should insulation be redone?',
        a: 'When damage or leaks appear, or the system reaches end of service life — based on technical inspection.',
      },
      {
        q: 'Does this include leak detection?',
        a: 'Leak detection is a related separate service and helps identify the source before choosing a system.',
      },
    ],
    image: '/images/services/waterproofing.jpg',
    popular: true,
  },
  {
    slug: 'renovation',
    categorySlug: 'construction-finishing',
    nameAr: 'الترميم والتجديد',
    nameEn: 'Renovation & Restoration',
    shortAr: 'دليل عملي للترميم والتجديد: إصلاح التلفيات وتحديث التشطيبات، مع المراحل والأسئلة قبل الاتفاق.',
    shortEn: 'A practical guide to renovation and restoration: fixing damage and updating finishes, with stages and pre-contract questions.',
    introAr:
      'الترميم يصلح المتضرر، والتجديد يحدّث الشكل والاستخدام. في ساعدني هتلاقي الفرق، أنواع الأعمال، المراحل، وعلامات الجودة قبل ما تبدأ.',
    introEn:
      'Restoration repairs damage; renovation updates look and use. On Saedni you get the difference, work types, stages, and quality signs before you start.',
    bodyAr: `<p>الترميم إصلاح الأجزاء المتضررة من المبنى وإعادة تأهيلها، بينما التجديد تحسين شكل المكان أو تطوير استخدامه وتحديث التشطيبات والتجهيزات. الأعمال قد تتراوح من إصلاح شروخ ودهانات إلى تجديد حمامات ومطابخ أو إعادة تأهيل أجزاء من المبنى.</p>
<p>تناسب الخدمة أصحاب المنازل القديمة، وتجهيز عقار قبل السكن أو التأجير، وتحديث تشطيبات الشقق، ومعالجة تلف الجدران أو الأرضيات، وتطوير المحلات والمكاتب.</p>
<p><strong>أنواع الأعمال:</strong> ترميم شروخ وتلفيات، إصلاح محارة ولياسة، تجديد دهانات وواجهات، استبدال سيراميك وأرضيات، تجديد حمامات ومطابخ، إصلاح أسقف وجبس، تجديد سباكة وكهرباء، معالجة آثار رطوبة وتسربات، وإعادة توزيع بعض المساحات بعد مراجعة السلامة الإنشائية.</p>
<p>جودة التنفيذ تظهر في تحديد سبب التلف قبل إصلاحه، مواد مناسبة لحالة المبنى، عدم إخفاء الشروخ بلا معرفة السبب، انتظام التشطيبات، سلامة التمديدات المجددة، الالتزام بالمراحل، تسليم نظيف، وتوثيق ما تم إصلاحه.</p>
<p>المراحل: معاينة وتحديد الأعمال ← تقييم الأولويات ← نطاق عمل وتقدير تكاليف ← حماية الأثاث والأجزاء غير المستهدفة ← إزالة التالف عند الحاجة ← إصلاحات بواسطة المختصين ← سباكة وكهرباء وتأسيس ← محارة وعزل وتشطيبات ← مراجعة وتسليم.</p>
<p>تجنّب الدهان قبل معالجة سبب الرطوبة، إخفاء شروخ بلا تقييم، إزالة حوائط أو تعديل عناصر إنشائية بلا مختص، عدم فحص سباكة وكهرباء قديمة، غياب نطاق وتكلفة واضحة، خامات غير مناسبة، جدول غير واقعي، وإهمال الاختبار قبل إغلاق التشطيبات.</p>
<p>قبل الاتفاق اسأل: ما الترميم وما التجديد في المشروع؟ هل فُحص المبنى عند مشاكل إنشائية؟ المواد المستخدمة؟ هل السعر يشمل إزالة المخلفات؟ أعمال إضافية محتملة؟ من ينسّق الفنيين؟ مراحل الدفع والتسليم؟ وهل يُوثَّق قبل وبعد؟</p>
<p>المدة: تجديد غرفة أو حمام قد يأخذ أيامًا، والشقة بالكامل أسابيع — وتتأثر بوجود أعمال إنشائية أو تمديدات قديمة أو تأخر توريد.</p>`,
    bodyEn: `<p>Restoration repairs damaged parts of a building; renovation improves look or use and updates finishes and fittings. Work can range from crack repair and paint to bathroom/kitchen refresh or partial rehabilitation.</p>
<p>It suits older homes, units prepared for living or rent, apartment finish updates, wall/floor damage, and shop or office upgrades.</p>
<p>Quality shows in finding the damage cause before repair, materials suited to the building, not covering cracks without diagnosis, consistent finishes, sound renewed services, stage discipline, a clean handover, and documentation of what was fixed.</p>
<p>Stages: survey → prioritize → scope and cost estimate → protect furniture → remove damaged parts if needed → specialist repairs → plumbing/electrical rough work → plaster, waterproofing, finishes → review and handover.</p>`,
    gallery: ['/images/services/renovation.jpg'],
    benefitsAr: [
      'معالجة التلفيات بدل تغطيتها بشكل مؤقت',
      'تحديث الشكل والاستخدام حسب احتياج السكن أو التأجير',
      'إمكانية البدء بمرحلة محددة مثل حمام أو مطبخ',
      'ترتيب أوضح يقلل إعادة العمل والتكاليف المخفية',
    ],
    benefitsEn: [
      'Fix damage instead of covering it temporarily',
      'Update look and use for living or rental needs',
      'Option to start with one area such as a bathroom or kitchen',
      'Clearer sequencing reduces rework and hidden costs',
    ],
    stepsAr: [
      'معاينة العقار وتحديد الأعمال المطلوبة',
      'تقييم حالة المبنى وتحديد الأولويات',
      'إعداد نطاق عمل وتقدير التكاليف',
      'حماية الأثاث والأجزاء غير المستهدفة',
      'إزالة الأجزاء التالفة عند الحاجة',
      'تنفيذ الإصلاحات بواسطة المختصين',
      'أعمال السباكة والكهرباء والتأسيس',
      'المحارة والعزل والتشطيبات',
      'مراجعة الجودة وتسليم الأعمال',
    ],
    stepsEn: [
      'Survey the property and define required works',
      'Assess building condition and set priorities',
      'Prepare scope and cost estimate',
      'Protect furniture and non-target areas',
      'Remove damaged parts when needed',
      'Carry out specialist repairs',
      'Plumbing, electrical, and rough-in works',
      'Plaster, waterproofing, and finishes',
      'Quality review and handover',
    ],
    typesAr: [
      'ترميم شروخ وتلفيات',
      'إصلاح محارة ولياسة',
      'تجديد دهانات وواجهات',
      'استبدال أرضيات وسيراميك',
      'تجديد حمامات ومطابخ',
      'إصلاح أسقف وجبس',
      'تجديد سباكة وكهرباء',
      'معالجة رطوبة وتسربات',
    ],
    typesEn: [
      'Crack and damage repair',
      'Plaster and render repair',
      'Paint and facade refresh',
      'Floor and ceramic replacement',
      'Bathroom and kitchen refresh',
      'Ceiling and gypsum repair',
      'Plumbing and electrical renewal',
      'Damp and leak treatment',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين الترميم والتجديد؟',
        a: 'الترميم يركز على إصلاح التلفيات، والتجديد على تحديث الشكل أو الوظيفة، وقد يجمع المشروع بينهما.',
      },
      {
        q: 'هل يمكن ترميم الشروخ في الجدران؟',
        a: 'نعم في بعض الحالات، لكن يجب تحديد نوع الشرخ وسببه قبل اختيار طريقة الإصلاح.',
      },
      {
        q: 'هل الأفضل ترميم الشقة أم إعادة تشطيبها؟',
        a: 'يعتمد على حالة التشطيبات والتمديدات والتكلفة المتوقعة لكل خيار.',
      },
      {
        q: 'هل يمكن السكن أثناء أعمال الترميم؟',
        a: 'قد يكون ممكنًا في الأعمال المحدودة، وبعض المشاريع تحتاج إخلاء المكان للسلامة والراحة.',
      },
      {
        q: 'هل تشمل أعمال الترميم السباكة والكهرباء؟',
        a: 'يمكن أن تشملها حسب نطاق العمل والاتفاق مع الجهة المنفذة.',
      },
      {
        q: 'هل يمكن البدء بمرحلة واحدة؟',
        a: 'نعم، كثير من الطلبات تبدأ بجزء محدد مثل المطبخ أو الحمام أو الواجهة.',
      },
    ],
    faqEn: [
      {
        q: 'What is the difference between restoration and renovation?',
        a: 'Restoration focuses on repairing damage; renovation updates look or function — and a project can include both.',
      },
      {
        q: 'Can wall cracks be repaired?',
        a: 'Often yes, but crack type and cause must be identified before choosing the repair method.',
      },
      {
        q: 'Is repair better than full re-finishing?',
        a: 'It depends on finish and services condition and the expected cost of each option.',
      },
      {
        q: 'Can we live in the home during renovation?',
        a: 'Sometimes for limited works; larger projects may need vacating for safety and comfort.',
      },
      {
        q: 'Does renovation include plumbing and electrical?',
        a: 'It can, depending on agreed scope with the contractor.',
      },
      {
        q: 'Can work start with one stage?',
        a: 'Yes. Many requests begin with a single area such as a kitchen, bathroom, or facade.',
      },
    ],
    image: '/images/services/renovation.jpg',
    popular: true,
  },
  {
    slug: 'plumbing',
    categorySlug: 'home-maintenance',
    nameAr: 'السباكة',
    nameEn: 'Plumbing',
    shortAr: 'دليل عملي للسباكة: تأسيس الشبكات، إصلاح التسربات، الصرف، وعلامات الجودة قبل إغلاق التشطيبات.',
    shortEn: 'A practical plumbing guide: network installation, leak repair, drainage, and quality checks before finishes are closed.',
    introAr:
      'السباكة تغطي المياه والصرف داخل المبنى وخارجه: تمديدات، أدوات صحية، تسربات، انسدادات، وضغط المياه. في ساعدني هتلاقي الأنواع والمراحل والأسئلة قبل الاتفاق.',
    introEn:
      'Plumbing covers water and drainage inside and around buildings: piping, fixtures, leaks, blockages, and water pressure. On Saedni you get types, stages, and questions before you agree.',
    bodyAr: `<p>السباكة أعمال تركيب وصيانة شبكات المياه والصرف الصحي داخل المباني وخارجها، وتشمل تمديد المواسير وتركيب الأدوات الصحية وإصلاح التسربات والانسدادات ومشاكل ضغط المياه.</p>
<p>تناسب أصحاب المنازل والشقق، والمباني الجديدة أثناء التأسيس، ومن يعانون من تسرب أو انسداد، والعقارات التي تحتاج تجديد شبكة، والمنشآت التجارية والمكاتب.</p>
<p><strong>أنواع الأعمال:</strong> تأسيس شبكات مياه، تمديدات صرف، تركيب أحواض وخلاطات ومراحيض وأدوات صحية، صيانة سخانات، إصلاح تسربات، تسليك مجاري، صيانة مضخات، وتركيب وصيانة خزانات وتوصيلاتها.</p>
<p>جودة التنفيذ تظهر في مواسير ووصلات مناسبة للمواصفات، تثبيت سليم، عدم تسرب عند الوصلات، ميول صرف صحيحة، اختبار ضغط عند الحاجة، نقاط صيانة يسهل الوصول إليها، وتصريف بلا ارتداد أو تجمع.</p>
<p>المراحل: تحديد المشكلة أو متطلبات التأسيس ← معاينة ومسارات المواسير ← اختيار خامات ومقاسات ← تمديدات وتوصيلات ← تثبيت أدوات صحية ← اختبارات ضغط وتسرب وصرف ← معالجة ملاحظات ← تسليم بعد سلامة التشغيل.</p>
<p>تجنّب مواسير غير مناسبة، إهمال الاختبار قبل إغلاق الحوائط والأرضيات، ميول صرف خاطئة، توصيلات غير محكمة، إخفاء نقاط الصيانة، تجاهل ضعف الضغط، مواد تسليك تضر المواسير، وتأجيل التسربات الصغيرة.</p>
<p>قبل الاتفاق اسأل: نوع المواسير والوصلات؟ هل الاختبار قبل التشطيب؟ هل السعر يشمل خامات وتركيب؟ أماكن المحابس ونقاط الصيانة؟ هل المشكلة تحتاج تكسير؟ هل إصلاح التشطيب مشمول بعد الصيانة؟ وهل في ضمان؟</p>
<p>الإصلاحات البسيطة قد تكون سريعة، والتأسيس أو تغيير شبكة كاملة قد يأخذ أيامًا أو أكثر حسب المساحة. التأخير شائع مع صعوبة الوصول للمواسير أو التكسير وإعادة التشطيب.</p>`,
    bodyEn: `<p>Plumbing covers installing and maintaining water and drainage networks in and around buildings: piping, sanitary fixtures, leak repair, blockages, and pressure issues.</p>
<p>It suits homes and apartments, new builds during rough-in, leak or blockage problems, properties needing network renewal, and commercial spaces.</p>
<p>Quality shows in suitable pipes and fittings, proper fixing, dry joints, correct drainage slopes, pressure testing when needed, accessible maintenance points, and drainage without backup or pooling.</p>
<p>Stages: define the issue or rough-in needs → survey pipe routes → choose materials and sizes → install piping → fit fixtures → pressure/leak/drainage tests → fix snags → hand over after safe operation.</p>`,
    gallery: ['/images/services/plumbing.jpg'],
    benefitsAr: [
      'تشغيل أوضح للمياه والصرف عند التأسيس والاختبار الصحيح',
      'اكتشاف أبكر للتسرب قبل إغلاق التشطيبات',
      'صيانة أسهل بوجود محابس ونقاط وصول واضحة',
      'تقليل تلف الجدران والأرضيات بتأجيل أقل للأعطال الصغيرة',
    ],
    benefitsEn: [
      'Clearer water and drainage performance with proper rough-in and testing',
      'Earlier leak detection before finishes are closed',
      'Easier maintenance with clear valves and access points',
      'Less wall and floor damage when small faults are not delayed',
    ],
    stepsAr: [
      'تحديد نوع المشكلة أو متطلبات التأسيس',
      'معاينة المكان وتحديد مسارات المواسير',
      'اختيار الخامات والمقاسات المناسبة',
      'تنفيذ التمديدات والتوصيلات',
      'تثبيت الأدوات الصحية',
      'إجراء اختبارات الضغط والتسرب والصرف المناسبة',
      'معالجة أي ملاحظات',
      'تسليم الشبكة بعد التأكد من سلامة التشغيل',
    ],
    stepsEn: [
      'Define the problem or rough-in requirements',
      'Survey the space and plan pipe routes',
      'Choose suitable materials and sizes',
      'Install piping and connections',
      'Fit sanitary fixtures',
      'Run suitable pressure, leak, and drainage tests',
      'Fix any snags',
      'Hand over after confirming safe operation',
    ],
    typesAr: [
      'تأسيس شبكات المياه',
      'تمديدات الصرف الصحي',
      'تركيب أحواض وخلاطات',
      'تركيب مراحيض وأدوات صحية',
      'صيانة سخانات ومضخات',
      'إصلاح تسربات',
      'تسليك مجاري وانسدادات',
      'خزانات مياه وتوصيلاتها',
    ],
    typesEn: [
      'Water network rough-in',
      'Drainage piping',
      'Sinks and mixers',
      'Toilets and sanitary fixtures',
      'Heater and pump maintenance',
      'Leak repair',
      'Drain clearing',
      'Water tanks and connections',
    ],
    faqAr: [
      {
        q: 'ما أسباب ضعف ضغط المياه؟',
        a: 'قد ينتج عن انسداد الفلاتر أو المواسير، أو مشكلة في المضخة أو مصدر المياه.',
      },
      {
        q: 'كيف أعرف أن هناك تسربًا مخفيًا؟',
        a: 'علامات مثل ارتفاع استهلاك المياه، بقع رطوبة، أو صوت تدفق دون استخدام — والتأكد يحتاج فحصًا متخصصًا.',
      },
      {
        q: 'هل يمكن إصلاح التسرب دون تكسير؟',
        a: 'أحيانًا يمكن تحديد الموقع وإصلاحه بوسائل محدودة، حسب مكان المواسير وطبيعة العطل.',
      },
      {
        q: 'متى يجب تغيير مواسير السباكة؟',
        a: 'عند تكرار الأعطال، أو تآكل أو تلف واضح، أو عدم ملاءمة الشبكة للاستخدام.',
      },
      {
        q: 'هل يجب اختبار السباكة قبل تركيب السيراميك؟',
        a: 'نعم، من المهم إجراء الاختبارات المناسبة قبل إغلاق التمديدات بالتشطيبات.',
      },
    ],
    faqEn: [
      {
        q: 'What causes low water pressure?',
        a: 'It can come from clogged filters or pipes, or a pump or water-source issue.',
      },
      {
        q: 'How do I know there is a hidden leak?',
        a: 'Signs include higher water use, damp patches, or flow noise without use — confirmation needs a specialist check.',
      },
      {
        q: 'Can a leak be fixed without demolition?',
        a: 'Sometimes location and repair can be limited, depending on pipe location and fault type.',
      },
      {
        q: 'When should plumbing pipes be replaced?',
        a: 'When faults repeat, corrosion or clear damage appears, or the network no longer suits use.',
      },
      {
        q: 'Should plumbing be tested before ceramic install?',
        a: 'Yes — suitable tests should be done before closing services behind finishes.',
      },
    ],
    image: '/images/services/plumbing.jpg',
    popular: true,
  },
  {
    slug: 'electrical',
    categorySlug: 'home-maintenance',
    nameAr: 'الصيانة الكهربائية',
    nameEn: 'Electrical Maintenance',
    shortAr: 'دليل عملي للصيانة الكهربائية: الأعطال، اللوحات، القواطع، الإضاءة، وعلامات التشغيل الآمن قبل الاتفاق مع فني مؤهل.',
    shortEn: 'A practical electrical maintenance guide: faults, panels, breakers, lighting, and safe-operation signs before hiring a qualified technician.',
    introAr:
      'الصيانة الكهربائية فحص وإصلاح الأنظمة داخل المبنى: أسلاك، مفاتيح، مقابس، لوحات، قواطع، وإضاءة. في ساعدني هتلاقي الأنواع والمراحل وعلامات الجودة — والأهم الاعتماد على فني مؤهل.',
    introEn:
      'Electrical maintenance covers inspecting and repairing building systems: wiring, switches, outlets, panels, breakers, and lighting. On Saedni you get types, stages, and quality signs — with qualified technicians for hazardous work.',
    bodyAr: `<p>الصيانة الكهربائية أعمال فحص وإصلاح وصيانة الأنظمة الكهربائية داخل المباني، وتشمل التوصيلات والأسلاك والمفاتيح والمقابس ولوحات التوزيع والقواطع وأنظمة الإضاءة، بهدف التشغيل الآمن وتقليل الأعطال.</p>
<p>تناسب أصحاب المنازل والشقق والمحلات والمكاتب، والمباني الجديدة التي تحتاج تأسيس كهرباء، ومن يواجه انقطاعًا متكررًا أو ضعف دوائر، والعقارات القديمة التي تحتاج فحص الشبكة.</p>
<p><strong>أنواع الأعمال:</strong> تأسيس تمديدات، إصلاح أعطال وانقطاعات، تغيير مفاتيح ومقابس، صيانة لوحات توزيع، فحص قواطع، تركيب إضاءة، تنظيم أحمال ودوائر، فحص تأريض ووسائل حماية، واستبدال أسلاك أو توصيلات تالفة.</p>
<p>جودة التنفيذ تظهر في أسلاك ومكونات مطابقة للمواصفات، قواطع مناسبة للأحمال، تنظيم داخل اللوحات، تأريض مناسب، تثبيت آمن للمقابس والمفاتيح، عدم وجود أسلاك مكشوفة أو وصلات عشوائية، اختبار الدوائر بعد الإصلاح، وتسميات واضحة للدوائر.</p>
<p>المراحل عادة: فحص العطل أو متطلبات التأسيس ← فصل المصدر وتأمين العمل بواسطة مختص ← تحديد الدائرة المتضررة ← فحص أسلاك وقواطع وتوصيلات ← إصلاح أو استبدال ← التأكد من التأريض والحماية ← اختبارات ← إعادة تشغيل ومراجعة الأداء.</p>
<p>تجنّب التعامل مع الكهرباء دون فصل التيار، قواطع غير مناسبة، تحميل مقبس واحد بأجهزة كثيرة، وصلات وأسلاك رديئة، إهمال التأريض، تجاهل رائحة احتراق أو سخونة مقابس، تعديلات عشوائية في اللوحة، والاعتماد على غير مؤهلين في الأعمال الخطرة.</p>
<p>قبل الاتفاق اسأل: ما سبب العطل المحدد؟ هل ستُفحص لوحة التوزيع؟ مواصفات الأسلاك والقواطع؟ هل يشمل اختبار التأريض؟ هل السعر يشمل قطع الغيار؟ هل اختبار الدائرة بعد الإصلاح؟ وهل الفني مؤهل لهذا النوع من الأعمال؟</p>
<p>الإصلاحات البسيطة قد تكون سريعة، وإعادة التمديد أو تغيير لوحة يحتاج وقتًا أطول حسب المكان وحالة التمديدات. التأخير شائع مع التكسير أو توريد مكونات محددة.</p>`,
    bodyEn: `<p>Electrical maintenance covers inspecting, repairing, and maintaining building electrical systems: connections, wiring, switches, outlets, distribution boards, breakers, and lighting — for safer operation and fewer faults.</p>
<p>It suits homes, apartments, shops, offices, new builds needing electrical rough-in, repeated outages or weak circuits, and older properties needing a network check.</p>
<p>Quality shows in specification-compliant components, breakers matched to loads, tidy panels, suitable earthing, secure outlets and switches, no exposed or improvised joints, post-repair testing, and clear circuit labels.</p>
<p>Typical stages for a qualified technician: diagnose → isolate supply and secure the area → identify the faulty circuit → inspect wiring and breakers → repair or replace → verify earthing and protection → test → restore and review performance.</p>`,
    gallery: ['/images/services/electrical.jpg'],
    benefitsAr: [
      'تشغيل أكثر أمانًا عند مطابقة المكونات للأحمال والحماية',
      'تقليل الأعطال المتكررة بتنظيم الدوائر والفحص الصحيح',
      'لوحة أوضح بتسميات وتنظيم يسهّل الصيانة لاحقًا',
      'اكتشاف أبكر لمخاطر مثل السخونة أو الوصلات العشوائية',
    ],
    benefitsEn: [
      'Safer operation when components match loads and protection needs',
      'Fewer repeat faults with proper circuit organization and checks',
      'A clearer panel with labels and layout that helps later maintenance',
      'Earlier spotting of risks like heat or improvised joints',
    ],
    stepsAr: [
      'فحص العطل أو متطلبات التأسيس بواسطة فني مؤهل',
      'فصل مصدر الكهرباء وتأمين مكان العمل',
      'تحديد الدائرة أو المكون المتضرر',
      'فحص الأسلاك والقواطع والتوصيلات',
      'إصلاح أو استبدال الأجزاء التالفة',
      'التأكد من سلامة التأريض والحماية',
      'إجراء الاختبارات اللازمة',
      'إعادة التشغيل ومراجعة الأداء',
    ],
    stepsEn: [
      'Diagnose the fault or rough-in needs with a qualified technician',
      'Isolate the supply and secure the work area',
      'Identify the affected circuit or component',
      'Inspect wiring, breakers, and connections',
      'Repair or replace damaged parts',
      'Verify earthing and protection',
      'Run required tests',
      'Restore power and review performance',
    ],
    typesAr: [
      'تأسيس تمديدات كهربائية',
      'إصلاح أعطال وانقطاعات',
      'تغيير مفاتيح ومقابس',
      'صيانة لوحات التوزيع',
      'فحص قواطع وحماية',
      'تركيب وحدات إضاءة',
      'تنظيم أحمال ودوائر',
      'فحص تأريض واستبدال تالف',
    ],
    typesEn: [
      'Electrical rough-in',
      'Fault and outage repair',
      'Switch and outlet replacement',
      'Distribution board maintenance',
      'Breaker and protection checks',
      'Light fitting installation',
      'Load and circuit organization',
      'Earthing checks and damaged wiring replacement',
    ],
    faqAr: [
      {
        q: 'لماذا يفصل القاطع الكهربائي باستمرار؟',
        a: 'قد يكون السبب حملًا زائدًا أو قصرًا كهربائيًا أو عطلًا في جهاز أو في القاطع نفسه — ويحدده فحص مؤهل.',
      },
      {
        q: 'ماذا أفعل عند شم رائحة احتراق من المقبس؟',
        a: 'توقف عن استخدامه وافصل التغذية من القاطع إذا كان ذلك آمنًا، واطلب فنيًا مؤهلًا. لا تلمس أجزاء مكشوفة أو ساخنة.',
      },
      {
        q: 'هل يمكن زيادة عدد المقابس في الغرفة؟',
        a: 'نعم بعد مراجعة قدرة الدائرة والأحمال وتحديد طريقة توصيل آمنة بواسطة مختص.',
      },
      {
        q: 'متى تحتاج لوحة الكهرباء إلى التغيير؟',
        a: 'عند وجود تلف أو عدم ملاءمة للمكونات أو الأحمال أو الحماية، بعد فحص مختص.',
      },
      {
        q: 'هل يمكن إصلاح الكهرباء أثناء وجود السكان؟',
        a: 'قد تسمح بعض الأعمال بذلك مع تأمين المنطقة وفصل الدوائر المتأثرة، والأعمال الكبيرة قد تحتاج إخلاءً مؤقتًا.',
      },
      {
        q: 'هل يتم فحص السلامة؟',
        a: 'يُفضّل طلب فحص سلامة ضمن النطاق مع فني مؤهل، خاصة للعقارات القديمة أو بعد أعطال متكررة.',
      },
    ],
    faqEn: [
      {
        q: 'Why does a breaker keep tripping?',
        a: 'It may be overload, a short, a faulty appliance, or the breaker itself — a qualified check identifies the cause.',
      },
      {
        q: 'What if I smell burning from an outlet?',
        a: 'Stop using it and isolate the circuit at the breaker if safe, then call a qualified technician. Do not touch exposed or hot parts.',
      },
      {
        q: 'Can more outlets be added in a room?',
        a: 'Yes after a specialist reviews circuit capacity and loads and chooses a safe connection method.',
      },
      {
        q: 'When should a distribution board be replaced?',
        a: 'When components are damaged or no longer suit loads or protection needs, after a specialist inspection.',
      },
      {
        q: 'Can electrical work be done while people are home?',
        a: 'Some jobs allow it with area security and isolation of affected circuits; larger works may need temporary vacating.',
      },
      {
        q: 'Are safety checks included?',
        a: 'Ask for a safety check within scope with a qualified technician, especially for older properties or repeat faults.',
      },
    ],
    image: '/images/services/electrical.jpg',
    popular: true,
  },
  {
    slug: 'air-conditioning',
    categorySlug: 'home-maintenance',
    nameAr: 'التكييف',
    nameEn: 'Air Conditioning',
    shortAr: 'دليل عملي لتركيب وصيانة وتنظيف المكيفات: اختيار القدرة، علامات الجودة، وأعطال التبريد الشائعة.',
    shortEn: 'A practical guide to AC install, maintenance, and cleaning: capacity choice, quality signs, and common cooling faults.',
    introAr:
      'خدمات التكييف تشمل التركيب والصيانة والتنظيف وإصلاح الأعطال وفحص التصريف والتوصيلات ودوائر التبريد. في ساعدني هتلاقي الأنواع والمراحل والأسئلة قبل الاتفاق.',
    introEn:
      'AC services cover install, maintenance, cleaning, repairs, and checks of drainage, connections, and refrigeration circuits. On Saedni you get types, stages, and questions before you agree.',
    bodyAr: `<p>خدمات التكييف تشمل تركيب أجهزة التبريد والتدفئة وصيانتها وتنظيفها وإصلاح أعطالها، بالإضافة إلى فحص وحدات التكييف وتمديدات التصريف والتوصيلات الكهربائية ودوائر التبريد.</p>
<p>تناسب أصحاب المنازل والشقق والمكاتب والمحلات والمنشآت، ومن يريد تركيب جهاز جديد، أو يعاني من ضعف تبريد أو تسرب مياه أو أصوات غير طبيعية.</p>
<p><strong>أنواع الأعمال:</strong> تركيب سبليت وشباك، صيانة مركزية، تنظيف فلاتر ووحدات داخلية وخارجية، إصلاح أعطال تبريد، فحص تسرب وسيط التبريد، صيانة تصريف المياه، تركيب وفحص مواسير التوصيل والعزل، وصيانة أنظمة تهوية مرتبطة.</p>
<p>جودة التنفيذ تظهر في اختيار قدرة مناسبة للمساحة والحمل الحراري، تثبيت سليم للوحدات، مواسير وتوصيل وعزل جيد، تصريف مناسب، بلا اهتزاز أو أصوات غير طبيعية، فحص أداء التبريد بعد التركيب، التعامل مع وسيط التبريد وفق تعليمات الشركة المصنعة، وترك مساحة صيانة حول الوحدة الخارجية.</p>
<p>المراحل: معاينة واحتياجات التبريد ← اختيار النوع والقدرة ← أماكن الوحدات ومسارات المواسير ← تثبيت داخلي وخارجي ← توصيلات كهرباء وتبريد وتصريف ← اختبارات تسرب وتشغيل ← قياس الأداء ← شرح الاستخدام والصيانة.</p>
<p>تجنّب قدرة غير مناسبة، وحدة خارجية سيئة التهوية، إهمال عزل المواسير، تصريف خاطئ، عدم تنظيف الفلاتر، إضافة وسيط تبريد دون فحص سبب النقص، إهمال الصيانة الدورية، وتشغيل الجهاز مع أصوات أو روائح غير طبيعية.</p>
<p>قبل الاتفاق اسأل: النوع والقدرة؟ هل السعر يشمل تركيب وخامات؟ هل اختبار التوصيلات بعد التركيب؟ هل يشمل التنظيف؟ فحص التصريف؟ سبب ضعف التبريد للجهاز القديم؟ ضمان التركيب والصيانة؟ وهل القطع متوافقة مع الجهاز؟</p>
<p>تركيب سبليت واحد قد يأخذ ساعات في الظروف المعتادة، والأنظمة المركزية أو التمديدات الإضافية تحتاج وقتًا أطول حسب الموقع وعدد الأجهزة وتوافر الخامات.</p>`,
    bodyEn: `<p>AC services cover installing, maintaining, cleaning, and repairing cooling and heating units, plus checking drainage, electrical connections, and refrigeration circuits.</p>
<p>It suits homes, apartments, offices, shops, facilities, new installs, and issues like weak cooling, water leaks, or unusual noise.</p>
<p>Quality shows in capacity matched to space and heat load, proper indoor/outdoor fixing, good pipework and insulation, suitable drainage, no abnormal vibration or noise, post-install cooling checks, manufacturer-guided refrigerant handling, and service clearance around the outdoor unit.</p>
<p>Stages: survey cooling needs → choose type and capacity → set unit locations and pipe routes → fix indoor/outdoor units → electrical, refrigerant, and drain connections → leak and operation tests → measure performance → explain use and maintenance.</p>`,
    gallery: ['/images/services/air-conditioning.jpg'],
    benefitsAr: [
      'تبريد أوضح عند اختيار القدرة المناسبة والصيانة الدورية',
      'تقليل تسرب المياه بتصريف وتركيب سليم',
      'أداء أفضل بتنظيف الفلاتر والوحدات',
      'اكتشاف أبكر لتسرب وسيط التبريد بدل التعبئة المتكررة بلا فحص',
    ],
    benefitsEn: [
      'Clearer cooling when capacity fits and maintenance is regular',
      'Fewer water leaks with proper drainage and install',
      'Better performance from cleaning filters and units',
      'Earlier refrigerant leak detection instead of refill without diagnosis',
    ],
    stepsAr: [
      'معاينة المكان وتحديد احتياجات التبريد',
      'اختيار نوع الجهاز والقدرة المناسبة',
      'تحديد مكان الوحدات ومسارات المواسير',
      'تثبيت الوحدة الداخلية والخارجية',
      'تنفيذ التوصيلات الكهربائية ومواسير التبريد والتصريف',
      'إجراء اختبارات التسرب والتشغيل المطلوبة',
      'تشغيل الجهاز وقياس الأداء',
      'شرح تعليمات الاستخدام والصيانة',
    ],
    stepsEn: [
      'Survey the space and define cooling needs',
      'Choose unit type and suitable capacity',
      'Set unit locations and pipe routes',
      'Fix indoor and outdoor units',
      'Complete electrical, refrigerant, and drain connections',
      'Run required leak and operation tests',
      'Start the unit and measure performance',
      'Explain use and maintenance guidance',
    ],
    typesAr: [
      'تركيب مكيفات سبليت',
      'تركيب مكيفات شباك',
      'صيانة تكييف مركزي',
      'تنظيف فلاتر ووحدات',
      'إصلاح ضعف التبريد',
      'فحص تسرب وسيط التبريد',
      'صيانة تصريف المياه',
      'مواسير توصيل وعزل',
    ],
    typesEn: [
      'Split AC installation',
      'Window AC installation',
      'Central AC maintenance',
      'Filter and unit cleaning',
      'Weak cooling repair',
      'Refrigerant leak checks',
      'Drain maintenance',
      'Pipework and insulation',
    ],
    faqAr: [
      {
        q: 'لماذا يعمل المكيف دون تبريد جيد؟',
        a: 'قد يكون السبب اتساخ الفلاتر أو ضعف تدفق الهواء أو مشكلة في المروحة أو دائرة التبريد أو عوامل أخرى تحتاج فحصًا.',
      },
      {
        q: 'كم مرة يجب تنظيف المكيف؟',
        a: 'حسب كثافة الاستخدام والغبار والبيئة، ويجب تنظيف الفلاتر دوريًا وفق تعليمات الشركة المصنعة.',
      },
      {
        q: 'لماذا ينزل الماء من الوحدة الداخلية؟',
        a: 'قد يكون انسداد خرطوم التصريف أو مشكلة تركيب أو تجمد بعض أجزاء الوحدة.',
      },
      {
        q: 'هل نقص غاز التبريد أمر طبيعي؟',
        a: 'ليس من المفترض أن ينقص باستمرار في نظام سليم؛ إذا نقص يجب فحص احتمال وجود تسرب.',
      },
      {
        q: 'كيف أختار قدرة المكيف؟',
        a: 'حسب مساحة الغرفة وارتفاع السقف والعزل والواجهات وعدد الأشخاص ومصادر الحرارة — وليس المساحة وحدها.',
      },
      {
        q: 'هل تشمل الخدمة التنظيف العميق؟',
        a: 'يمكن أن تشمل غسيل الوحدات الداخلية والخارجية حسب الاتفاق ونطاق العمل.',
      },
    ],
    faqEn: [
      {
        q: 'Why does the AC run with weak cooling?',
        a: 'It may be dirty filters, poor airflow, a fan issue, refrigeration circuit problems, or other factors needing inspection.',
      },
      {
        q: 'How often should an AC be cleaned?',
        a: 'It depends on use intensity, dust, and environment; clean filters periodically per manufacturer guidance.',
      },
      {
        q: 'Why does the indoor unit drip water?',
        a: 'Often a clogged drain hose, install issue, or freezing in parts of the unit.',
      },
      {
        q: 'Is refrigerant loss normal?',
        a: 'A sound system should not keep losing refrigerant; loss usually means a leak check is needed.',
      },
      {
        q: 'How do I choose AC capacity?',
        a: 'By room area, ceiling height, insulation, facades, occupancy, and heat sources — not floor area alone.',
      },
      {
        q: 'Is deep cleaning included?',
        a: 'Indoor and outdoor washing can be included depending on agreed scope.',
      },
    ],
    image: '/images/services/air-conditioning.jpg',
    popular: true,
  },
  {
    slug: 'appliance-repair',
    categorySlug: 'home-maintenance',
    nameAr: 'صيانة الأجهزة',
    nameEn: 'Appliance Maintenance',
    shortAr: 'دليل عملي لصيانة الأجهزة المنزلية: التشخيص قبل تغيير القطع، وأنواع الأعطال، والأسئلة قبل الاتفاق مع الفني.',
    shortEn: 'A practical home appliance maintenance guide: diagnose before replacing parts, common faults, and questions before hiring a technician.',
    introAr:
      'صيانة الأجهزة فحص وإصلاح للأجهزة اليومية لتحسين التشغيل وإطالة العمر عند الإمكان. في ساعدني هتلاقي الأنواع وعلامات الجودة والأخطاء الشائعة قبل ما تبدأ.',
    introEn:
      'Appliance maintenance covers inspecting and repairing everyday machines to improve operation and extend life when possible. On Saedni you get types, quality signs, and common mistakes before you start.',
    bodyAr: `<p>صيانة الأجهزة خدمات فحص وإصلاح وصيانة للأجهزة المنزلية والكهربائية اليومية، بهدف معالجة الأعطال وتحسين كفاءة التشغيل وإطالة العمر التشغيلي عند إمكانية ذلك.</p>
<p>تناسب أصحاب المنازل والشقق والشقق المفروشة والمنشآت التي تستخدم أجهزة منزلية، ومن يعانون من أعطال متكررة، أو يريدون فحص جهاز قبل شراء قطعة غيار أو استبداله.</p>
<p><strong>أنواع الأعمال:</strong> غسالات أوتوماتيك وعادية، ثلاجات وفريزر، أفران وبوتاجازات، غسالات أطباق، ميكروويف، مكانس، أجهزة صغيرة، وفحص دوائر وحساسات ومحركات. الخدمات تختلف حسب نوع الجهاز والموديل وتوافر قطع الغيار.</p>
<p>جودة الصيانة تظهر في تحديد سبب العطل قبل تغيير القطع، قطع متوافقة، شرح المشكلة والتكلفة قبل الإصلاح، اختبار تشغيل بعد الصيانة، عدم ترك أجزاء مفكوكة أو توصيلات غير آمنة، الحفاظ على الجهاز أثناء النقل أو الإصلاح، وتوضيح إن كانت القطعة أصلية أو بديلة متوافقة.</p>
<p>المراحل: وصف العطل وبيانات الجهاز ← تحديد النوع والموديل ← فحص وتشخيص ← توضيح السبب والتكلفة ← إصلاح أو استبدال ← إعادة تركيب ← اختبار الوظائف ← تعليمات استخدام وصيانة.</p>
<p>تجنّب الإصلاح بلا خبرة، تغيير قطع بلا تشخيص، قطع غير متوافقة، تجاهل أصوات أو روائح غير طبيعية، التشغيل مع تسرب مياه أو كهرباء، وعدم فصل الجهاز عن الكهرباء قبل الفحص عندما يكون ذلك آمنًا، وإهمال تنظيف الفلاتر والأجزاء الدورية.</p>
<p>قبل الاتفاق اسأل: هل سبب العطل محدد؟ أي قطعة تحتاج إصلاحًا أو استبدالًا؟ أصلية أم بديلة؟ هل السعر يشمل زيارة وفحص وتركيب؟ هل في ضمان مكتوب؟ هل الإصلاح في المنزل؟ هل القطع متوفرة للموديل؟ وهل اختبار بعد الانتهاء؟</p>
<p>الأعطال البسيطة قد تكون سريعة، والمحركات أو الدوائر الإلكترونية أو انتظار القطع قد تأخذ أيامًا حسب نوع الجهاز وتعقيد المشكلة وتوافر القطع.</p>`,
    bodyEn: `<p>Appliance maintenance covers inspecting, repairing, and servicing everyday home electrical appliances to fix faults, improve efficiency, and extend service life when possible.</p>
<p>It suits homes, apartments, furnished units, facilities using household appliances, repeat faults, and checks before buying a spare part or replacing the unit.</p>
<p>Quality shows in diagnosing the cause before replacing parts, compatible spares, clear problem and cost before repair, post-service testing, no loose parts or unsafe connections, careful handling, and clarity on original vs compatible parts.</p>
<p>Stages: fault description and appliance details → identify type and model → inspect and diagnose → explain cause and expected cost → repair or replace → reassemble → test core functions → share use and care guidance.</p>`,
    gallery: ['/images/services/appliance-repair.jpg'],
    benefitsAr: [
      'تشخيص قبل تغيير القطع يقلل التكلفة العشوائية',
      'إطالة عمر الجهاز عند إصلاحه بحالة مناسبة',
      'اختبار بعد الصيانة يوضح إن كانت الوظائف الأساسية رجعت',
      'وضوح القطع الأصلية أو البديلة يحمي قرارك قبل الدفع',
    ],
    benefitsEn: [
      'Diagnosis before part changes reduces random cost',
      'Longer appliance life when repair fits the unit condition',
      'Post-service testing shows whether core functions returned',
      'Clarity on original vs compatible parts protects your decision before payment',
    ],
    stepsAr: [
      'استقبال وصف العطل وبيانات الجهاز',
      'تحديد نوع الجهاز والموديل',
      'فحص الجهاز وتشخيص المشكلة',
      'توضيح سبب العطل والتكلفة المتوقعة',
      'إصلاح الجزء المتضرر أو استبداله',
      'إعادة تركيب الأجزاء',
      'اختبار التشغيل والوظائف الأساسية',
      'توضيح تعليمات الاستخدام والصيانة',
    ],
    stepsEn: [
      'Collect fault description and appliance details',
      'Identify appliance type and model',
      'Inspect and diagnose the problem',
      'Explain cause and expected cost',
      'Repair or replace the affected part',
      'Reassemble components',
      'Test operation and core functions',
      'Share use and maintenance guidance',
    ],
    typesAr: [
      'صيانة غسالات',
      'صيانة ثلاجات وفريزر',
      'صيانة أفران وبوتاجازات',
      'غسالات أطباق',
      'ميكروويف ومكانس',
      'أجهزة منزلية صغيرة',
      'فحص محركات وحساسات',
    ],
    typesEn: [
      'Washer repair',
      'Fridge and freezer repair',
      'Oven and cooker repair',
      'Dishwasher repair',
      'Microwave and vacuum repair',
      'Small home appliances',
      'Motor and sensor checks',
    ],
    faqAr: [
      {
        q: 'هل كل الأجهزة يمكن إصلاحها؟',
        a: 'ليس بالضرورة؛ يعتمد على حالة الجهاز وتكلفة الإصلاح وتوافر قطع الغيار.',
      },
      {
        q: 'هل الأفضل إصلاح الجهاز أم شراء جهاز جديد؟',
        a: 'قارن تكلفة الإصلاح وحالة الجهاز وعمره وتكلفة البديل قبل القرار.',
      },
      {
        q: 'لماذا تصدر الغسالة صوتًا مرتفعًا؟',
        a: 'قد يكون عدم اتزان الحمولة أو مشكلة تثبيت أو أجزاء داخلية تحتاج فحصًا.',
      },
      {
        q: 'لماذا لا تبرد الثلاجة؟',
        a: 'قد تكون المشكلة في تدفق الهواء أو نظام التبريد أو حساس الحرارة أو أجزاء أخرى — يُحدَّد بالفحص.',
      },
      {
        q: 'هل يجب الاحتفاظ بفاتورة الصيانة؟',
        a: 'نعم، لأنها توضح الأعمال والقطع المستبدلة وأي ضمان متفق عليه.',
      },
      {
        q: 'هل تتوفر قطع غيار؟',
        a: 'توافر القطع يعتمد على نوع الجهاز والموديل ويجب التأكد منه قبل بدء الإصلاح.',
      },
    ],
    faqEn: [
      {
        q: 'Can every appliance be repaired?',
        a: 'Not always — it depends on unit condition, repair cost, and spare-part availability.',
      },
      {
        q: 'Is repair better than buying new?',
        a: 'Compare repair cost, appliance condition and age, and replacement cost before deciding.',
      },
      {
        q: 'Why is the washing machine loud?',
        a: 'It may be unbalanced load, fixing issues, or internal parts that need inspection.',
      },
      {
        q: 'Why is the fridge not cooling?',
        a: 'It may be airflow, the cooling system, a temperature sensor, or other parts — diagnosis comes first.',
      },
      {
        q: 'Should I keep the service invoice?',
        a: 'Yes — it records work done, replaced parts, and any agreed warranty.',
      },
      {
        q: 'Are spare parts available?',
        a: 'Availability depends on appliance type and model and should be confirmed before repair starts.',
      },
    ],
    image: '/images/services/appliance-repair.jpg',
    popular: true,
  },
  {
    slug: 'leak-detection',
    categorySlug: 'home-maintenance',
    nameAr: 'كشف التسربات',
    nameEn: 'Leak Detection',
    shortAr: 'دليل عملي لكشف تسربات المياه المخفية: أنواع التسرب، مراحل الفحص، وكيف تقلل التكسير العشوائي قبل الإصلاح.',
    shortEn: 'A practical guide to detecting hidden water leaks: leak types, inspection stages, and how to reduce random demolition before repair.',
    introAr:
      'كشف التسربات يحدد مكان تسرب المياه في الشبكات والأسطح والخزانات — بما فيها المخفي داخل الجدران والأرضيات — قبل اختيار طريقة الإصلاح. في ساعدني هتلاقي العلامات والمراحل والأسئلة قبل الاتفاق.',
    introEn:
      'Leak detection finds where water is escaping in networks, roofs, and tanks — including hidden leaks in walls and floors — before choosing a repair method. On Saedni you get signs, stages, and questions before you agree.',
    bodyAr: `<p>كشف التسربات فحص لشبكات المياه والصرف والأسطح والخزانات لتحديد أماكن تسرب المياه، بما في ذلك التسربات المخفية داخل الجدران أو الأرضيات، باستخدام وسائل فحص مناسبة قبل تحديد طريقة الإصلاح.</p>
<p>تناسب أصحاب المنازل والشقق، والمباني التي تظهر بها بقع رطوبة، ومن يلاحظ ارتفاعًا غير معتاد في فاتورة المياه، والعقارات ذات التسربات المتكررة، ومن يشتبه بتسرب في حمام أو مطبخ أو خزان أو شبكة المياه.</p>
<p><strong>أنواع التسربات التي تُفحص:</strong> مواسير باردة وساخنة، حمامات ومطابخ، خزانات، أسطح، شبكات تدفئة أو توصيلات مائية عند وجودها، صرف صحي، تسربات مخفية داخل جدران وأرضيات، ومسابح.</p>
<p>جودة الخدمة تظهر في تحديد نطاق المشكلة قبل الإصلاح، استخدام أجهزة مناسبة لنوع التسرب، توضيح النتائج للعميل، عدم الاعتماد على التخمين وحده، تقليل التكسير غير الضروري قدر الإمكان، توثيق مكان التسرب وسببه عند الإمكان، واختبار بعد الإصلاح.</p>
<p>المراحل: وصف المشكلة والعلامات الظاهرة ← فحص المنطقة والشبكة ← تحديد نوع التسرب المحتمل ← أجهزة الكشف المناسبة ← تحديد الموقع ودرجة التأكد ← توضيح طريقة الإصلاح ← إصلاح بواسطة مختص ← إعادة اختبار ← معالجة آثار الإصلاح والتشطيبات عند الاتفاق.</p>
<p>تجنّب دهان الرطوبة بلا معالجة السبب، تكسير عشوائي قبل الفحص، تجاهل ارتفاع الاستهلاك، إهمال الخزانات والتوصيلات، الخلط بين التسرب والتكاثف، إصلاح جزء بلا اختبار الشبكة، وإهمال مصدر المياه قبل إعادة الدهان والتشطيب.</p>
<p>قبل الاتفاق اسأل: نوع جهاز الكشف؟ هل تحديد المكان قبل التكسير؟ هل السعر فحص فقط أم إصلاح أيضًا؟ هل تقرير أو صور للنتيجة؟ هل يمكن تحديد المصدر بدقة؟ هل اختبار بعد الإصلاح؟ هل إعادة التشطيب مشمولة؟ وهل في تكلفة إضافية عند الحاجة للتكسير؟</p>
<p>فحص تسرب بسيط قد يكون سريعًا، والحالات المخفية أو متعددة المصادر تأخذ وقتًا أطول حسب حجم المكان ونوع الشبكة وإمكانية الوصول وتعقيد المشكلة. اختيار الجهاز يعتمد على نوع التسرب ومكانه؛ لا توجد أداة واحدة لكل الحالات.</p>`,
    bodyEn: `<p>Leak detection inspects water and drainage networks, roofs, and tanks to locate leaks — including hidden ones in walls or floors — using suitable methods before choosing repair.</p>
<p>It suits homes and apartments with damp patches, unusual water-bill spikes, repeat leaks, or suspected leaks in bathrooms, kitchens, tanks, or water networks.</p>
<p>Quality shows in defining the problem scope before repair, using tools suited to the leak type, explaining results, not guessing alone, minimizing unnecessary demolition, documenting location and cause when possible, and retesting after repair.</p>
<p>Stages: review symptoms → inspect area and network → identify likely leak type → use suitable detection tools → locate leak and confidence level → explain repair method → specialist repair → retest → finish repair effects if agreed.</p>`,
    gallery: ['/images/services/leak-detection.jpg'],
    benefitsAr: [
      'تشخيص قبل التكسير يقلل الضرر العشوائي على التشطيبات',
      'توضيح أوضح لمكان التسرب وسبب المشكلة عند الإمكان',
      'ربط أفضل مع السباكة والعزل بعد معرفة المصدر',
      'اختبار بعد الإصلاح يؤكد أن التسرب توقف',
    ],
    benefitsEn: [
      'Diagnosis before demolition reduces random damage to finishes',
      'Clearer location and cause when the inspection can identify them',
      'Better link to plumbing and waterproofing after finding the source',
      'Post-repair testing confirms the leak has stopped',
    ],
    stepsAr: [
      'الاستماع إلى وصف المشكلة ومراجعة العلامات الظاهرة',
      'فحص المنطقة وشبكة المياه المرتبطة بها',
      'تحديد نوع التسرب المحتمل',
      'استخدام أجهزة الكشف المناسبة حسب الحالة',
      'تحديد موقع التسرب ودرجة تأكد الفحص',
      'توضيح طريقة الإصلاح المطلوبة',
      'تنفيذ الإصلاح بواسطة فني مختص',
      'إعادة الاختبار ومراجعة عدم استمرار التسرب',
      'معالجة آثار الإصلاح والتشطيبات عند الاتفاق عليها',
    ],
    stepsEn: [
      'Review the problem description and visible signs',
      'Inspect the area and related water network',
      'Identify the likely leak type',
      'Use detection tools suited to the case',
      'Locate the leak and state inspection confidence',
      'Explain the required repair method',
      'Carry out repair with a specialist',
      'Retest and confirm the leak has stopped',
      'Address repair effects and finishes when agreed',
    ],
    typesAr: [
      'تسرب مواسير باردة وساخنة',
      'تسرب حمامات ومطابخ',
      'تسرب خزانات',
      'تسرب أسطح',
      'تسرب صرف صحي',
      'تسرب مخفي داخل جدران وأرضيات',
      'تسرب مسابح',
      'فحص ضغط وشبكات',
    ],
    typesEn: [
      'Cold and hot pipe leaks',
      'Bathroom and kitchen leaks',
      'Tank leaks',
      'Roof leaks',
      'Drainage leaks',
      'Hidden wall and floor leaks',
      'Pool leaks',
      'Pressure and network checks',
    ],
    faqAr: [
      {
        q: 'كيف أعرف أن هناك تسرب مياه مخفيًا؟',
        a: 'من العلامات المحتملة: رطوبة أو تقشر دهان أو ارتفاع استهلاك المياه أو صوت تدفق غير معتاد.',
      },
      {
        q: 'هل يمكن كشف التسرب دون تكسير؟',
        a: 'يمكن استخدام أجهزة تساعد على تحديد الموقع وتقليل التكسير، وبعض الحالات تحتاج فتح جزء للتأكد أو الإصلاح.',
      },
      {
        q: 'هل ارتفاع فاتورة المياه يعني وجود تسرب؟',
        a: 'قد يكون مؤشرًا وليس دليلًا قاطعًا؛ راجع الاستهلاك وافحص الشبكة والأجهزة المتصلة.',
      },
      {
        q: 'هل يمكن كشف تسربات الحمامات؟',
        a: 'نعم، مع التمييز بين تسرب المواسير ومشاكل العزل أو الفواصل أو الصرف.',
      },
      {
        q: 'هل يتم إصلاح التسرب في نفس الزيارة؟',
        a: 'قد يحدث إذا كان السبب واضحًا والقطع متوفرة، وبعض الحالات تحتاج زيارة أو أعمالًا إضافية.',
      },
      {
        q: 'هل أجهزة الكشف تحدد كل أنواع التسربات؟',
        a: 'تختلف الدقة حسب الجهاز ومكان التسرب وطبيعة المبنى، وقد يُجمع بين أكثر من طريقة.',
      },
    ],
    faqEn: [
      {
        q: 'How do I know there is a hidden water leak?',
        a: 'Possible signs include damp, peeling paint, higher water use, or unusual flow noise.',
      },
      {
        q: 'Can leaks be found without demolition?',
        a: 'Detection tools can help locate leaks and reduce demolition, but some cases need opening an area to confirm or repair.',
      },
      {
        q: 'Does a higher water bill mean a leak?',
        a: 'It can be an indicator, not proof — review consumption and inspect the network and connected devices.',
      },
      {
        q: 'Can bathroom leaks be detected?',
        a: 'Yes, while distinguishing pipe leaks from waterproofing, joint, or drainage issues.',
      },
      {
        q: 'Is repair done in the same visit?',
        a: 'Sometimes if the cause is clear and parts are available; other cases need another visit or extra work.',
      },
      {
        q: 'Do detection devices find every leak type?',
        a: 'Accuracy varies by tool, leak location, and building type; more than one method may be needed.',
      },
    ],
    image: '/images/services/leak-detection.jpg',
    popular: true,
  },
  {
    slug: 'home-cleaning',
    categorySlug: 'cleaning',
    nameAr: 'تنظيف المنازل',
    nameEn: 'Home Cleaning',
    shortAr: 'دليل عملي لتنظيف المنازل: أنواع التنظيف، المراحل، وعلامات الجودة قبل اختيار الخدمة المناسبة.',
    shortEn: 'A practical home cleaning guide: cleaning types, stages, and quality signs before choosing the right service.',
    introAr:
      'تنظيف المنازل يحافظ على بيئة معيشية أنظف — سواء تنظيفًا دوريًا أو عميقًا أو تجهيزًا للسكن. في ساعدني هتلاقي الأنواع والمراحل والأسئلة قبل الاتفاق.',
    introEn:
      'Home cleaning keeps living spaces cleaner — whether recurring, deep clean, or move-in prep. On Saedni you get types, stages, and questions before you agree.',
    bodyAr: `<p>تنظيف المنازل خدمة مهمة لبيئة معيشية أنظف. تختلف طبيعته حسب مساحة المنزل وعدد الغرف وحالة المكان: دوري أو عميق أو تجهيز للسكن.</p>
<p>الخدمة تشمل تنظيف وترتيب المساحات الداخلية وإزالة الأتربة والأوساخ من الأرضيات والأسطح والمطابخ والحمامات والنوافذ والأثاث، باستخدام أدوات ومواد مناسبة.</p>
<p>تناسب أصحاب الشقق والفلل، والأسر التي تحتاج تنظيفًا دوريًا، وقبل الانتقال لمنزل جديد، وقبل التأجير، ومن يحتاج تنظيفًا عميقًا بعد فترة استخدام.</p>
<p><strong>أنواع الأعمال:</strong> تنظيف يومي أو دوري، تنظيف عميق، مطابخ وإزالة دهون، حمامات وتعقيم أسطح مناسبة، نوافذ وزجاج، أرضيات وسيراميك، أثاث وأسطح، وتنظيف قبل السكن أو بعد الانتقال.</p>
<p>جودة الخدمة تظهر في تنظيف الزوايا والأماكن الصعبة، عدم ترك آثار منظفات، مواد مناسبة لكل خامة، اهتمام بالمطابخ والحمامات، عدم نقل الأوساخ بين الأماكن، الالتزام بالوقت، والتعامل الآمن مع الأثاث والأجهزة.</p>
<p>المراحل: معاينة وتحديد المطلوب ← نوع التنظيف والمواد ← إزالة مخلفات وأتربة ← غرف وأسطح وأثاث ← مطابخ ودهون ← حمامات وأرضيات ← نوافذ حسب الاتفاق ← مراجعة نهائية.</p>
<p>تجنّب منظف واحد لكل الأسطح، خلط مواد كيميائية مختلفة، أدوات غير نظيفة، تجاهل الأماكن المخفية، مياه زائدة على أرضيات خشبية، عدم الاتفاق على التفاصيل قبل البدء، وإهمال التهوية أثناء التنظيف.</p>
<p>قبل الاتفاق اسأل: دوري أم عميق؟ هل يشمل النوافذ؟ هل يشمل الأجهزة من الخارج؟ هل المواد والأدوات متوفرة؟ عدد العمال؟ هل الأثاث والمفروشات؟ ما المساحات غير المشمولة؟ وهل في سعر إضافي للمساحات الكبيرة؟</p>
<p>شقة صغيرة قد تأخذ ساعات، والفلل والمنازل الكبيرة تحتاج وقتًا أطول أو فريقًا أكبر حسب الحالة وعدد الغرف ونوع التنظيف.</p>`,
    bodyEn: `<p>Home cleaning helps keep living spaces cleaner. Scope varies by home size, room count, and condition — recurring, deep clean, or move-in prep.</p>
<p>The service covers cleaning and organizing interiors and removing dust and dirt from floors, surfaces, kitchens, bathrooms, windows, and furniture with suitable tools and products.</p>
<p>Quality shows in cleaning corners and hard-to-reach areas, no leftover cleaner marks, products suited to each surface, focus on kitchens and bathrooms, not spreading dirt between rooms, sticking to agreed time, and careful handling of furniture and appliances.</p>
<p>Stages: survey and define needs → agree cleaning type and products → remove trash and dust → rooms, surfaces, furniture → kitchens and grease → bathrooms and floors → windows if agreed → final review.</p>`,
    gallery: ['/images/services/home-cleaning.jpg'],
    benefitsAr: [
      'بيئة أنظف مع تنظيف منظم حسب نوع الخدمة',
      'إمكانية تنظيف دوري أو عميق أو تجهيز قبل السكن',
      'نتيجة أوضح عند الاتفاق على المساحات والمواد قبل البدء',
      'تقليل تلف الأسطح باختيار منظف مناسب لكل خامة',
    ],
    benefitsEn: [
      'A cleaner living space with organized cleaning by service type',
      'Option for recurring, deep, or move-in cleaning',
      'Clearer results when areas and products are agreed upfront',
      'Less surface damage when cleaners match each material',
    ],
    stepsAr: [
      'معاينة مساحة المنزل وتحديد المطلوب',
      'تحديد نوع التنظيف والمواد المستخدمة',
      'إزالة المخلفات والأتربة',
      'تنظيف الغرف والأسطح والأثاث',
      'تنظيف المطابخ وإزالة الدهون',
      'تنظيف الحمامات والأرضيات',
      'تنظيف النوافذ والزجاج حسب الاتفاق',
      'المراجعة النهائية والتأكد من اكتمال العمل',
    ],
    stepsEn: [
      'Survey the home and define requirements',
      'Agree cleaning type and products',
      'Remove trash and dust',
      'Clean rooms, surfaces, and furniture',
      'Clean kitchens and remove grease',
      'Clean bathrooms and floors',
      'Clean windows and glass if agreed',
      'Final review to confirm completion',
    ],
    typesAr: [
      'تنظيف دوري',
      'تنظيف عميق',
      'تنظيف مطابخ ودهون',
      'تنظيف حمامات',
      'نوافذ وزجاج',
      'أرضيات وسيراميك',
      'أثاث وأسطح',
      'قبل السكن أو بعد الانتقال',
    ],
    typesEn: [
      'Recurring cleaning',
      'Deep cleaning',
      'Kitchen and grease cleaning',
      'Bathroom cleaning',
      'Windows and glass',
      'Floors and ceramic',
      'Furniture and surfaces',
      'Move-in or move-out cleaning',
    ],
    faqAr: [
      {
        q: 'كم مرة يحتاج المنزل إلى تنظيف عميق؟',
        a: 'حسب الاستخدام وعدد السكان ومستوى النظافة، ويمكن تحديد جدول مناسب لاحتياجات المنزل.',
      },
      {
        q: 'هل تنظيف المنازل يشمل تنظيف الأثاث؟',
        a: 'ليس دائمًا؛ تأكد من إدراج تنظيف الأثاث ضمن نطاق الخدمة.',
      },
      {
        q: 'هل مواد التنظيف مشمولة في السعر؟',
        a: 'يختلف حسب مقدم الخدمة والاتفاق — وضّح ذلك قبل البدء.',
      },
      {
        q: 'هل يمكن طلب تنظيف قبل الانتقال إلى منزل جديد؟',
        a: 'نعم، ويمكن طلب تنظيف شامل للمطبخ والحمامات والأرضيات والنوافذ قبل نقل الأثاث.',
      },
      {
        q: 'كيف أختار خدمة تنظيف مناسبة؟',
        a: 'راجع نطاق الخدمة وتفاصيل السعر والمواد والوقت، واتفق مكتوبًا على المساحات المشمولة.',
      },
    ],
    faqEn: [
      {
        q: 'How often does a home need deep cleaning?',
        a: 'It depends on use, household size, and cleanliness level — set a schedule that fits the home.',
      },
      {
        q: 'Does home cleaning include furniture?',
        a: 'Not always — confirm furniture cleaning is in scope.',
      },
      {
        q: 'Are cleaning products included in the price?',
        a: 'It depends on the provider and agreement — clarify before work starts.',
      },
      {
        q: 'Can I request cleaning before moving into a new home?',
        a: 'Yes — you can request a full clean of kitchen, bathrooms, floors, and windows before furniture moves in.',
      },
      {
        q: 'How do I choose a suitable cleaning service?',
        a: 'Review scope, price details, products, and timing, and agree covered areas clearly.',
      },
    ],
    image: '/images/services/home-cleaning.jpg',
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
    image: '/images/services/office-cleaning.jpg',
    gallery: ['/images/services/office-cleaning.jpg'],
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
    image: '/images/services/upholstery-cleaning.jpg',
    gallery: ['/images/services/upholstery-cleaning.jpg'],
  },
  {
    slug: 'water-tank-cleaning',
    categorySlug: 'cleaning',
    nameAr: 'تنظيف خزانات المياه',
    nameEn: 'Water Tank Cleaning',
    shortAr: 'دليل عملي لتنظيف خزانات المياه: الخطوات، أهمية الفحص، وعلامات الجودة قبل اختيار الخدمة المناسبة.',
    shortEn: 'A practical water tank cleaning guide: steps, why inspection matters, and quality signs before choosing a service.',
    introAr:
      'خزانات المياه تحتاج تنظيفًا وفحصًا دوريًا لتقليل الرواسب والشوائب. في ساعدني هتلاقي الأنواع والمراحل والأسئلة قبل الاتفاق — مع التركيز على مواد مناسبة وسلامة التنفيذ.',
    introEn:
      'Water tanks need periodic cleaning and inspection to reduce sediment and debris. On Saedni you get types, stages, and questions before agreeing — with suitable products and safe execution in mind.',
    bodyAr: `<p>تنظيف خزانات المياه خدمة لإزالة الرواسب والأوساخ من داخل الخزان وتنظيف الأسطح الداخلية وشطفها، مع فحص الخزان والتأكد من سلامة الغطاء والتوصيلات عند الحاجة. يجب التنفيذ بطريقة مناسبة لنوع الخزان ومواصفاته، مع الاهتمام بسلامة القائمين على العمل.</p>
<p>تناسب أصحاب المنازل والفلل والعمارات والمنشآت التجارية والمدارس والمباني الإدارية والعقارات التي تعتمد على خزانات تخزين المياه.</p>
<p><strong>أنواع الأعمال:</strong> خزانات أرضية وعلوية، إزالة رواسب وطمي، تنظيف جدران وأرضيات داخلية، شطف، فحص غطاء وعوامة وتوصيلات، وفحص علامات ظاهرة للتآكل أو التلف.</p>
<p>جودة الخدمة تظهر في تفريغ آمن، إزالة رواسب من القاع والزوايا، مواد مناسبة لخزانات مياه الشرب عند الحاجة، شطف جيد، عدم ترك بقايا منظفات، فحص الغطاء لمنع دخول الحشرات والأتربة، وإعادة التشغيل بعد التأكد من السلامة.</p>
<p>المراحل: فحص نوع وحالة الخزان ← إيقاف التغذية وتفريغ آمن ← إزالة رواسب ← تنظيف جدران وأرضية ← مواد تنظيف/تطهير معتمدة عند الحاجة ← شطف وفق متطلبات المادة ← فحص غطاء وتوصيلات ← إعادة الملء والتأكد من التشغيل.</p>
<p>تجنّب منظفات منزلية غير مناسبة، شطف ناقص، ترك الخزان مفتوحًا، تجاهل شروخ أو تلف داخلي، تركيزات كيميائية عشوائية، دخول خزانات مغلقة بلا إجراءات سلامة، وعدم التأكد من صلاحية المياه بعد التطهير.</p>
<p>قبل الاتفاق اسأل: خبرة بنوع الخزان؟ المواد المستخدمة وهل مناسبة لمياه الشرب؟ هل تشمل إزالة الرواسب والتطهير والشطف؟ فحص الغطاء والعوامة؟ تقرير أو توثيق؟ وما إجراءات السلامة أثناء التنفيذ؟</p>
<p>خزان منزلي صغير قد يأخذ ساعات، والخزانات الكبيرة أو متعددة الحجرات تحتاج وقتًا أطول حسب الحجم وكمية الرواسب وإمكانية الوصول. تنظيف الخزان لا يعالج التسرب — التسرب يحتاج فحصًا وإصلاحًا منفصلين.</p>`,
    bodyEn: `<p>Water tank cleaning removes sediment and dirt inside tanks, cleans and rinses interior surfaces, and may include checking the cover and connections. Work should match tank type and specs, with safety for the crew.</p>
<p>It suits homes, villas, residential buildings, commercial facilities, schools, offices, and properties that store water in tanks.</p>
<p>Quality shows in safe emptying, sediment removal from floors and corners, drinking-water-suitable products when needed, thorough rinsing, no leftover chemicals, a secure cover against insects and dust, and restart after safety checks.</p>
<p>Stages: inspect tank type and condition → isolate supply and empty safely → remove sediment → clean walls and floor → use approved clean/disinfect products when needed → rinse per product requirements → check cover and connections → refill and confirm operation.</p>`,
    gallery: ['/images/services/water-tank-cleaning.jpg'],
    benefitsAr: [
      'تقليل تراكم الرواسب والشوائب داخل الخزان',
      'فحص الغطاء والتوصيلات يقلل مصادر التلوث الظاهرة',
      'شطف صحيح بعد المواد المعتمدة أهم من التنظيف السطحي',
      'وضوح المواد وإجراءات السلامة قبل الاتفاق يحمي نتيجة العمل',
    ],
    benefitsEn: [
      'Less sediment and debris build-up inside the tank',
      'Cover and connection checks reduce visible contamination sources',
      'Proper rinsing after approved products matters more than surface wiping',
      'Clear products and safety steps before agreeing protect the outcome',
    ],
    stepsAr: [
      'فحص الخزان وتحديد نوعه وحالته',
      'إيقاف التغذية وتفريغ المياه وفق إجراءات آمنة',
      'إزالة الرواسب والمخلفات',
      'تنظيف الجدران والأرضية الداخلية',
      'استخدام مواد تنظيف أو تطهير معتمدة عند الحاجة',
      'شطف الخزان جيدًا وفق متطلبات المادة المستخدمة',
      'فحص الخزان والغطاء والتوصيلات',
      'إعادة ملء الخزان والتأكد من سلامة التشغيل',
    ],
    stepsEn: [
      'Inspect the tank type and condition',
      'Isolate supply and empty water using safe procedures',
      'Remove sediment and debris',
      'Clean interior walls and floor',
      'Use approved cleaning or disinfection products when needed',
      'Rinse thoroughly per product requirements',
      'Check tank, cover, and connections',
      'Refill and confirm safe operation',
    ],
    typesAr: [
      'تنظيف خزانات أرضية',
      'تنظيف خزانات علوية',
      'إزالة رواسب وطمي',
      'تنظيف جدران وأرضيات داخلية',
      'شطف الخزان',
      'فحص غطاء وعوامة وتوصيلات',
      'فحص تآكل أو تلف ظاهر',
    ],
    typesEn: [
      'Ground tank cleaning',
      'Rooftop tank cleaning',
      'Sediment and silt removal',
      'Interior wall and floor cleaning',
      'Tank rinsing',
      'Cover, float, and connection checks',
      'Visible corrosion or damage checks',
    ],
    faqAr: [
      {
        q: 'متى يجب تنظيف خزان المياه؟',
        a: 'حسب حالة الخزان وجودة المياه وظروف التخزين وتعليمات الجهات المختصة، وعند ظهور رواسب أو تلوث.',
      },
      {
        q: 'هل تنظيف الخزان يزيل الروائح؟',
        a: 'قد يساعد إذا كانت الرائحة من الرواسب، وإذا استمرت يجب تحديد السبب.',
      },
      {
        q: 'هل يمكن استخدام الكلور في تنظيف الخزان؟',
        a: 'يجب استخدام مواد تطهير مناسبة وبتركيزات وإجراءات معتمدة — وليس بشكل عشوائي.',
      },
      {
        q: 'هل يجب تفريغ الخزان بالكامل؟',
        a: 'غالبًا يحتاج التنظيف الداخلي إلى تفريغ مناسب وفق تصميم الخزان وطريقة العمل.',
      },
      {
        q: 'هل تنظيف الخزان يعالج التسرب؟',
        a: 'لا — التسرب يحتاج فحصًا وإصلاحًا منفصلين.',
      },
      {
        q: 'هل يتوقف الماء أثناء العمل؟',
        a: 'قد يتوقف مؤقتًا حسب حجم الخزان وخطوات التنظيف.',
      },
    ],
    faqEn: [
      {
        q: 'When should a water tank be cleaned?',
        a: 'Based on tank condition, water quality, storage conditions, and competent guidance — and when sediment or contamination appears.',
      },
      {
        q: 'Does tank cleaning remove odors?',
        a: 'It may help if odor comes from sediment; if odor continues, the cause must be identified.',
      },
      {
        q: 'Can chlorine be used to clean tanks?',
        a: 'Only suitable disinfection products at approved concentrations and procedures — never randomly.',
      },
      {
        q: 'Must the tank be fully emptied?',
        a: 'Interior cleaning usually needs suitable emptying depending on tank design and method.',
      },
      {
        q: 'Does cleaning fix leaks?',
        a: 'No — leaks need separate inspection and repair.',
      },
      {
        q: 'Will water stop during service?',
        a: 'It may pause temporarily depending on tank size and cleaning steps.',
      },
    ],
    image: '/images/services/water-tank-cleaning.jpg',
    popular: true,
  },
  {
    slug: 'post-construction-cleaning',
    categorySlug: 'cleaning',
    nameAr: 'نظافة ما بعد التشطيب',
    nameEn: 'Post-Construction Cleaning',
    shortAr: 'دليل عملي لنظافة ما بعد التشطيب: إزالة الأتربة وبقايا المواد وتجهيز المكان للسكن بدون خدش التشطيبات.',
    shortEn: 'A practical post-construction cleaning guide: remove dust and residue and prepare the space for living without scratching finishes.',
    introAr:
      'بعد البناء والتشطيب تبقى أتربة وبقايا معجون ودهان وأسمنت على الأرضيات والزجاج. في ساعدني هتلاقي أنواع الأعمال والمراحل والأسئلة قبل الاتفاق على تنظيف متخصص قبل فرش الأثاث.',
    introEn:
      'After building and finishing, dust and putty, paint, and cement residues remain on floors and glass. On Saedni you get work types, stages, and questions before agreeing specialized cleaning before furniture moves in.',
    bodyAr: `<p>نظافة ما بعد التشطيب تنظيف شامل بعد انتهاء أعمال البناء والتجديد، لإزالة مخلفات التشطيب والأتربة وبقايا مواد البناء وتجهيز المكان للاستخدام قبل فرش الأثاث أو الانتقال.</p>
<p>تناسب أصحاب الشقق والفلل الجديدة، والمقاولين بعد انتهاء المشاريع، وملاك العقارات قبل التسليم، وأصحاب المكاتب والمحلات الجديدة.</p>
<p><strong>أنواع الأعمال:</strong> إزالة أتربة البناء، تنظيف أرضيات وسيراميك وبورسلان، إزالة بقايا معجون ودهانات مناسبة للإزالة، نوافذ وزجاج، أبواب وإطارات، مطابخ وحمامات، خزائن وأسطح، مخلفات صغيرة، ومداخل وممرات.</p>
<p>جودة الخدمة تظهر في عدم خدش الأرضيات أو الزجاج، منظفات مناسبة لكل خامة، إزالة أتربة من الزوايا والحواف، تنظيف آثار دهانات دون إتلاف التشطيب، الاهتمام بالفواصل، عدم ترك بقايا مواد تنظيف، وفحص بعد الانتهاء.</p>
<p>المراحل: معاينة حالة التشطيبات ← إزالة مخلفات كبيرة إن ضمن الاتفاق ← أتربة أسقف وجدران ← نوافذ وإطارات ← أبواب وخزائن ← مطابخ وحمامات ← أرضيات وآثار مواد مناسبة ← تفاصيل وزوايا ← مراجعة وتسليم.</p>
<p>تجنّب أدوات معدنية تخدش السيراميك والزجاج، أحماض على الرخام أو الحجر الطبيعي، خلط منظفات، تنظيف أرضيات قبل إزالة أتربة عالقة، مياه كثيرة على الخشب، تجاهل بقايا أسمنت ولاصق، وعدم حماية التركيبات الجديدة أثناء التنظيف.</p>
<p>قبل الاتفاق اسأل: هل يشمل إزالة مخلفات البناء؟ زجاج من الخارج؟ خزائن من الداخل؟ ما المواد على الرخام والبورسلان؟ هل يشمل المكيفات؟ عدد العمال؟ فحص نهائي؟ وهل السعر حسب المساحة أم حجم الأعمال؟</p>
<p>شقة متوسطة قد تأخذ يومًا أو أكثر، والفيلا عدة أيام — وتزيد المدة مع بقايا أسمنت أو دهانات كثيرة أو مساحات زجاج واسعة. وضّح نوع الأرضيات والتشطيبات قبل البدء لاختيار مواد لا تسبب خدوشًا أو تغير لون.</p>`,
    bodyEn: `<p>Post-construction cleaning is a thorough clean after building and renovation to remove finishing debris, dust, and construction residues and prepare the space before furniture or move-in.</p>
<p>It suits new apartments and villas, contractors after project completion, property owners before handover, and new offices and shops.</p>
<p>Quality shows in no scratches on floors or glass, cleaners suited to each finish, dust removed from corners and edges, paint marks cleaned without damaging finishes, attention to joints, no leftover cleaner residue, and a final check.</p>
<p>Stages: survey finishes → remove large debris if agreed → dust ceilings and walls → windows and frames → doors and cabinets → kitchens and bathrooms → floors and suitable residue removal → details and corners → review and handover.</p>`,
    gallery: [
      '/images/hero/hero-02-finishing-desktop.jpg',
      '/images/hero/hero-09-cleaning-desktop.jpg',
      '/images/hero/hero-03-tiling-desktop.jpg',
      '/images/hero/hero-07-painting-desktop.jpg',
      '/images/hero/hero-12-marble-desktop.jpg',
    ],
    benefitsAr: [
      'تجهيز أوضح للسكن أو التسليم بعد إزالة مخلفات التشطيب',
      'حماية أفضل للتشطيبات باختيار مواد مناسبة لكل خامة',
      'نتيجة أنظف في الزوايا والزجاج والأرضيات قبل فرش الأثاث',
      'اتفاق مسبق على النطاق يقلل المفاجآت في السعر والنتيجة',
    ],
    benefitsEn: [
      'Clearer move-in or handover after finishing debris is removed',
      'Better finish protection when products match each material',
      'Cleaner corners, glass, and floors before furniture arrives',
      'Upfront scope agreement reduces surprises on price and results',
    ],
    stepsAr: [
      'معاينة المكان وتحديد حالة التشطيبات',
      'إزالة المخلفات الكبيرة إن كانت ضمن الاتفاق',
      'إزالة الأتربة من الأسقف والجدران',
      'تنظيف النوافذ والإطارات',
      'تنظيف الأبواب والخزائن',
      'تنظيف المطابخ والحمامات',
      'تنظيف الأرضيات وإزالة آثار المواد المناسبة',
      'تنظيف التفاصيل والزوايا',
      'المراجعة النهائية وتسليم المكان',
    ],
    stepsEn: [
      'Survey the space and finish condition',
      'Remove large debris if included',
      'Remove dust from ceilings and walls',
      'Clean windows and frames',
      'Clean doors and cabinets',
      'Clean kitchens and bathrooms',
      'Clean floors and remove suitable residues',
      'Clean details and corners',
      'Final review and handover',
    ],
    typesAr: [
      'إزالة أتربة البناء',
      'تنظيف أرضيات وسيراميك وبورسلان',
      'إزالة بقايا معجون ودهان',
      'تنظيف نوافذ وزجاج',
      'أبواب وإطارات وخزائن',
      'مطابخ وحمامات',
      'مداخل وممرات',
      'تسليم نهائي قبل السكن',
    ],
    typesEn: [
      'Construction dust removal',
      'Floor, ceramic, and porcelain cleaning',
      'Putty and paint residue removal',
      'Window and glass cleaning',
      'Doors, frames, and cabinets',
      'Kitchens and bathrooms',
      'Entrances and corridors',
      'Final handover before move-in',
    ],
    faqAr: [
      {
        q: 'متى يتم تنظيف المنزل بعد التشطيب؟',
        a: 'بعد اكتمال الأعمال التي تسبب أتربة أو مخلفات، وبعد جفاف المواد والدهانات وفق تعليماتها.',
      },
      {
        q: 'هل تنظيف ما بعد التشطيب يشمل إزالة الأسمنت؟',
        a: 'يمكن أن يشمل إزالة البقايا السطحية، مع تحديد نوع البقايا والخامة قبل أي مادة.',
      },
      {
        q: 'هل يمكن تنظيف الرخام من بقايا الأسمنت؟',
        a: 'يحتاج الرخام إلى مواد وطرق مناسبة، مع تجنب الأحماض والمنظفات غير المخصصة له.',
      },
      {
        q: 'هل تشمل الخدمة تنظيف النوافذ؟',
        a: 'يعتمد على نطاق العمل المتفق عليه.',
      },
      {
        q: 'هل يمكن الانتقال بعد التنظيف مباشرة؟',
        a: 'بعد اكتمال التنظيف وجفاف الأسطح وتهوية المكان والتأكد من عدم وجود مواد أو روائح مزعجة.',
      },
      {
        q: 'هل تناسب الفلل والشقق؟',
        a: 'نعم، وكذلك المحلات والمكاتب بعد أعمال التشطيب.',
      },
    ],
    faqEn: [
      {
        q: 'When should post-construction cleaning happen?',
        a: 'After dusty or debris-producing works are finished, and after materials and paints have dried per guidance.',
      },
      {
        q: 'Does it include cement residue removal?',
        a: 'Surface residues can be included, but residue type and finish must be identified before any product is used.',
      },
      {
        q: 'Can marble be cleaned of cement residue?',
        a: 'Marble needs suitable methods and products — avoid acids and cleaners not made for it.',
      },
      {
        q: 'Does the service include windows?',
        a: 'It depends on the agreed scope.',
      },
      {
        q: 'Can we move in right after cleaning?',
        a: 'After cleaning is complete, surfaces are dry, the space is ventilated, and no harsh residues or odors remain.',
      },
      {
        q: 'Does it cover villas and apartments?',
        a: 'Yes, as well as shops and offices after finishing work.',
      },
    ],
    image: '/images/hero/hero-02-finishing-desktop.jpg',
    popular: true,
  },
  {
    slug: 'pest-control',
    categorySlug: 'cleaning',
    nameAr: 'مكافحة الحشرات',
    nameEn: 'Pest Control',
    shortAr: 'دليل عملي لمكافحة الحشرات: أنواع الآفات، طرق المكافحة، وعلامات الجودة قبل اختيار الخدمة المناسبة.',
    shortEn: 'A practical pest control guide: pest types, treatment approaches, and quality signs before choosing a suitable service.',
    introAr:
      'ظهور الحشرات قد يزعج المنزل ويؤثر على المطابخ والحمامات. في ساعدني هتلاقي أهمية تحديد نوع الحشرة ومصدرها، وطرق المكافحة، والأسئلة قبل الاتفاق — مع منتجات مسجلة واحتياطات سلامة واضحة.',
    introEn:
      'Pests can disrupt homes and affect kitchens and bathrooms. On Saedni you get why identifying the pest and source matters, treatment approaches, and questions before agreeing — with registered products and clear safety precautions.',
    bodyAr: `<p>مكافحة الحشرات فحص ومعالجة للآفات داخل المنازل والمنشآت، بوسائل وقائية أو ميكانيكية أو مبيدات مخصصة وفق نوع الآفة ومكان انتشارها. المكافحة الفعالة تبدأ بتحديد نوع الحشرة ومصدر ظهورها.</p>
<p>تناسب أصحاب المنازل والشقق، والمطاعم والمطابخ التجارية، والمكاتب والمحلات، والمستودعات، والمنشآت السكنية والتجارية.</p>
<p><strong>أنواع الأعمال:</strong> صراصير، نمل، بق فراش، بعوض وذباب، نمل أبيض، فئران وقوارض، حشرات طائرة وزاحفة، وفحص أماكن التكاثر ومصادر الدخول.</p>
<p>جودة الخدمة تظهر في تحديد نوع الحشرة بدقة، فحص مصادر الانتشار، وسيلة مناسبة، منتجات مسجلة ومصرح بها للاستخدام المحدد، الالتزام بتعليمات السلامة، حماية الأطفال والحيوانات الأليفة والطعام، إرشادات وقاية بعد التنفيذ، وتوضيح الحاجة لمتابعة عند الضرورة.</p>
<p>المراحل: وصف المشكلة ← معاينة وتحديد نوع الآفة ← مصادر الدخول والتكاثر ← اختيار طريقة المكافحة ← تجهيز المكان وفق تعليمات المختص ← تنفيذ المعالجة ← احتياطات السلامة وفترة العودة وفق ملصق المنتج ← متابعة عند الحاجة.</p>
<p>تجنّب الرش العشوائي، منتجات مجهولة المصدر، خلط المبيدات والمواد الكيميائية، تجاهل مصادر الطعام والمياه، عدم سد الشقوق، عدم الالتزام بفترة إعادة الدخول، والاعتقاد أن زيارة واحدة تكفي لكل الآفات.</p>
<p>قبل الاتفاق اسأل: نوع الحشرة؟ طريقة المكافحة؟ هل المنتجات مسجلة ومناسبة للمنازل؟ تعليمات للأطفال والحيوانات؟ متى العودة للمكان؟ هل السعر يشمل المتابعة؟ هل ضمان مكتوب وشروطه؟ وهل تُوضَّح إجراءات الوقاية؟</p>
<p>المعالجة قد تأخذ ساعات، وبعض الآفات تحتاج متابعة أو أكثر من زيارة حسب النوع ودرجة الانتشار وطبيعة المبنى. لا تختر بالسعر فقط — اسأل عن الآفة والطريقة والمنتجات والسلامة.</p>`,
    bodyEn: `<p>Pest control covers inspecting and treating pests in homes and facilities using preventive, mechanical, or labeled pesticide methods suited to the pest and location. Effective control starts by identifying the pest and its source.</p>
<p>It suits homes and apartments, restaurants and commercial kitchens, offices and shops, warehouses, and residential or commercial buildings.</p>
<p>Quality shows in accurate pest ID, checking spread sources, a suitable method, registered products authorized for the specific use, following safety instructions, protecting children, pets, and food, prevention tips after treatment, and clarifying follow-up visits when needed.</p>
<p>Stages: problem description → survey and identify pest → entry and breeding sources → choose method → prepare space per specialist guidance → treat → safety precautions and re-entry time per product label → follow up when needed.</p>`,
    gallery: ['/images/services/pest-control.jpg'],
    benefitsAr: [
      'معالجة أوضح بعد تحديد نوع الآفة ومصدرها',
      'خيارات وقائية وميكانيكية وكيميائية حسب الحالة والمنتجات المسجلة',
      'سلامة أعلى بالالتزام بملصق المنتج وتعليمات المختص',
      'متابعة عند الحاجة تقلل عودة الآفة من مصادر لم تُعالج',
    ],
    benefitsEn: [
      'Clearer treatment after identifying the pest and its source',
      'Preventive, mechanical, and chemical options depending on the case and registered products',
      'Better safety by following the product label and specialist guidance',
      'Follow-up when needed reduces return from untreated sources',
    ],
    stepsAr: [
      'استقبال وصف المشكلة',
      'معاينة المكان وتحديد نوع الآفة',
      'تحديد مصادر الدخول والتكاثر',
      'اختيار طريقة المكافحة',
      'تجهيز المكان وفق تعليمات المختص',
      'تنفيذ المعالجة',
      'توضيح احتياطات السلامة وفترة العودة وفق ملصق المنتج',
      'متابعة النتائج عند الحاجة',
    ],
    stepsEn: [
      'Collect the problem description',
      'Survey the space and identify the pest',
      'Identify entry and breeding sources',
      'Choose the control method',
      'Prepare the space per specialist guidance',
      'Carry out treatment',
      'Explain safety precautions and re-entry time per product label',
      'Follow up results when needed',
    ],
    typesAr: [
      'مكافحة الصراصير',
      'مكافحة النمل',
      'مكافحة بق الفراش',
      'مكافحة البعوض والذباب',
      'مكافحة النمل الأبيض',
      'مكافحة الفئران والقوارض',
      'حشرات طائرة وزاحفة',
      'فحص أماكن التكاثر والدخول',
    ],
    typesEn: [
      'Cockroach control',
      'Ant control',
      'Bed bug control',
      'Mosquito and fly control',
      'Termite control',
      'Rodent control',
      'Flying and crawling insects',
      'Breeding and entry-point inspection',
    ],
    faqAr: [
      {
        q: 'هل مكافحة الحشرات آمنة للأطفال؟',
        a: 'تعتمد على المنتج وطريقة التطبيق والالتزام بتعليمات المختص وملصق المنتج، بما في ذلك إبعاد الأطفال خلال المدة المحددة.',
      },
      {
        q: 'هل يجب مغادرة المنزل أثناء الرش؟',
        a: 'قد يكون مطلوبًا حسب المادة وطريقة الاستخدام — التزم بتعليمات مقدم الخدمة وملصق المنتج.',
      },
      {
        q: 'لماذا تعود الحشرات بعد المكافحة؟',
        a: 'غالبًا بسبب استمرار مصدر غذاء أو مياه أو أماكن تكاثر أو دخول جديدة.',
      },
      {
        q: 'هل مكافحة النمل الأبيض مختلفة عن الصراصير؟',
        a: 'نعم — وسائل الفحص والمعالجة تختلف كثيرًا حسب نوع الآفة ومكان انتشارها.',
      },
      {
        q: 'هل يمكن مكافحة الحشرات دون رش؟',
        a: 'توجد وسائل مثل المصائد والطُعم وسد الفتحات ومعالجات أخرى لبعض الآفات — يحدد المختص المناسب.',
      },
    ],
    faqEn: [
      {
        q: 'Is pest control safe around children?',
        a: 'Safety depends on the product, application method, and following specialist and label guidance, including keeping children away for the stated period.',
      },
      {
        q: 'Must we leave during spraying?',
        a: 'It may be required depending on the product and method — follow the provider and product label.',
      },
      {
        q: 'Why do pests return after treatment?',
        a: 'Often because food or water sources, breeding sites, or new entry points remain.',
      },
      {
        q: 'Is termite control different from cockroach control?',
        a: 'Yes — inspection and treatment methods differ widely by pest type and location.',
      },
      {
        q: 'Can pests be controlled without spraying?',
        a: 'Options include traps, baits, sealing openings, and other methods for some pests — a specialist chooses what fits.',
      },
    ],
    image: '/images/services/pest-control.jpg',
    popular: true,
  },
  {
    slug: 'furniture-moving',
    categorySlug: 'moving-logistics',
    nameAr: 'نقل الأثاث',
    nameEn: 'Furniture Moving',
    shortAr: 'دليل عملي لنقل الأثاث: المراحل، حماية العفش، وعلامات الجودة قبل اختيار خدمة النقل المناسبة.',
    shortEn: 'A practical furniture moving guide: stages, protecting belongings, and quality signs before choosing a suitable move.',
    introAr:
      'نقل الأثاث يحتاج تخطيطًا حتى تصل المقتنيات بأقل تلف أو فقد. في ساعدني هتلاقي مراحل التجهيز والتغليف والفك والتحميل والنقل والتركيب، والأسئلة قبل الاتفاق — بما فيها ما يشمله السعر من تغليف وفك وتركيب.',
    introEn:
      'Furniture moving needs planning so belongings arrive with less damage or loss. On Saedni you get stages for prep, packing, disassembly, loading, transport, and reassembly, plus questions before agreeing — including what packing, disassembly, and reassembly the price covers.',
    bodyAr: `<p>نقل الأثاث خدمة لنقل المقتنيات المنزلية أو المكتبية من موقع إلى آخر، بسيارات ومعدات تحميل ووسائل حماية مناسبة. تشمل العملية تجهيز الأثاث وتغليفه وفكه وتحميله ونقله ثم تفريغه وتركيبه حسب الاتفاق.</p>
<p>تناسب الأسر المنتقلة لمنزل جديد، وأصحاب الشقق والفلل، وأصحاب المكاتب والشركات، وأصحاب المحلات والمنشآت، ومن يحتاج نقل أثاث للتخزين.</p>
<p><strong>أنواع الخدمات:</strong> نقل أثاث الشقق والفلل والمكاتب، الأجهزة الكهربائية، الأثاث الثقيل، فك وتركيب غرف النوم، المطابخ القابلة للفك، النقل بين المدن، والتحميل والتفريغ.</p>
<p>جودة الخدمة تظهر في سيارة مناسبة لحجم الأثاث، حماية القطع قبل التحميل، تثبيت داخل السيارة، معدات رفع مناسبة، حذر مع القطع الثقيلة، قائمة بالمقتنيات، الالتزام بالمواعيد، وفحص عند التسليم.</p>
<p>المراحل: معاينة وتقدير الحمولة ← تحديد الاستلام والتسليم ← الاتفاق على النطاق والتكلفة ← فك القطع اللازمة ← تغليف ← تحميل ← تثبيت وتأمين الحمولة ← النقل ← التفريغ وإعادة التركيب حسب الاتفاق ← فحص بعد التسليم.</p>
<p>تجنّب تقدير حمولة غير دقيق، سيارة غير مناسبة، نقل بلا تغليف، عدم تثبيت داخل السيارة، عدم توثيق القطع الثمينة، عدم الاتفاق على الأدوار والمصاعد، إهمال قياس الأبواب والممرات، وعدم توضيح مسؤولية التلفيات.</p>
<p>قبل الاتفاق اسأل: هل السعر يشمل الفك والتركيب؟ مواد التغليف؟ حجم السيارة؟ التحميل والتنزيل؟ تكلفة الأدوار المرتفعة؟ تأمين أو تعويض مكتوب؟ النقل بين المدن؟ موعد الاستلام والتسليم؟ وهل تُعدّ قائمة بالمقتنيات؟</p>
<p>شقة صغيرة قد تأخذ ساعات، والفلل والمكاتب الكبيرة يومًا أو أكثر حسب الحجم والمسافة وظروف الوصول. لا تقارن الأسعار فقط — قارن ما يشمله السعر من تغليف وفك وتركيب وتحميل وتنزيل، ووثّق حالة الأثاث قبل النقل.</p>`,
    bodyEn: `<p>Furniture moving transports home or office belongings from one place to another using suitable vehicles, loading equipment, and protection. The process covers prep, packing, disassembly, loading, transport, unloading, and reassembly as agreed.</p>
<p>It suits families moving to a new home, apartment and villa owners, offices and companies, shops and facilities, and anyone moving furniture into storage.</p>
<p>Quality shows in a truck sized for the load, protecting pieces before loading, securing items in the vehicle, suitable lifting gear, careful handling of heavy pieces, an inventory list, meeting schedules, and checking items on delivery.</p>
<p>Stages: survey and estimate load → set pickup and delivery → agree scope and cost → disassemble as needed → pack → load → secure the load → transport → unload and reassemble as agreed → inspect after delivery.</p>`,
    gallery: ['/images/services/furniture-moving.jpg'],
    benefitsAr: [
      'تخطيط أوضح من المعاينة حتى التسليم',
      'حماية أفضل بالتغليف والتثبيت داخل السيارة',
      'نطاق خدمة واضح: فك وتركيب وتحميل وتنزيل حسب الاتفاق',
      'توثيق المقتنيات يقلل النزاع حول التلفيات أو الفقد',
    ],
    benefitsEn: [
      'Clearer planning from survey through delivery',
      'Better protection with packing and securing the load',
      'Clear service scope: disassembly, reassembly, loading, and unloading as agreed',
      'An inventory list reduces disputes over damage or loss',
    ],
    stepsAr: [
      'معاينة الأثاث وتقدير حجم الحمولة',
      'تحديد موقع الاستلام والتسليم',
      'الاتفاق على نطاق الخدمة والتكلفة',
      'فك القطع التي تحتاج إلى فك',
      'تغليف الأثاث والمقتنيات',
      'تحميل الأغراض داخل السيارة',
      'تثبيت الحمولة وتأمينها',
      'نقل الأثاث إلى الوجهة',
      'التفريغ وإعادة التركيب حسب الاتفاق',
      'فحص القطع بعد التسليم',
    ],
    stepsEn: [
      'Survey furniture and estimate load size',
      'Confirm pickup and delivery locations',
      'Agree on scope and cost',
      'Disassemble pieces that need it',
      'Pack furniture and belongings',
      'Load items into the vehicle',
      'Secure and brace the load',
      'Transport to the destination',
      'Unload and reassemble as agreed',
      'Inspect pieces after delivery',
    ],
    typesAr: [
      'نقل أثاث الشقق',
      'نقل أثاث الفلل',
      'نقل أثاث المكاتب',
      'نقل الأجهزة الكهربائية',
      'نقل الأثاث الثقيل',
      'فك وتركيب غرف النوم',
      'نقل المطابخ القابلة للفك',
      'نقل الأثاث بين المدن',
      'التحميل والتفريغ',
    ],
    typesEn: [
      'Apartment furniture moves',
      'Villa furniture moves',
      'Office furniture moves',
      'Appliance moves',
      'Heavy furniture moves',
      'Bedroom disassembly and reassembly',
      'Demountable kitchen moves',
      'Intercity furniture moves',
      'Loading and unloading',
    ],
    faqAr: [
      {
        q: 'هل نقل الأثاث يشمل الفك والتركيب؟',
        a: 'يختلف حسب الاتفاق؛ بعضها يشمل الفك والتركيب وبعضها يقتصر على النقل.',
      },
      {
        q: 'هل يمكن نقل الأثاث بين المدن السعودية؟',
        a: 'نعم، حسب توفر الخدمة والمسافة وطبيعة الحمولة.',
      },
      {
        q: 'كيف أحمي الأجهزة أثناء النقل؟',
        a: 'جهّزها وفق تعليمات الشركة المصنعة، وغلّفها وثبّتها بطريقة مناسبة.',
      },
      {
        q: 'هل يجب تفريغ الخزائن قبل النقل؟',
        a: 'يُفضَّل تفريغها، خاصة الأدراج والخزائن التي تحتوي على أغراض قابلة للكسر.',
      },
      {
        q: 'كيف يتم تحديد تكلفة نقل الأثاث؟',
        a: 'تتأثر بحجم الحمولة والمسافة وعدد العمال وخدمات الفك والتغليف والتحميل.',
      },
    ],
    faqEn: [
      {
        q: 'Does furniture moving include disassembly and reassembly?',
        a: 'It depends on the agreement; some services include both, others cover transport only.',
      },
      {
        q: 'Can furniture be moved between Saudi cities?',
        a: 'Yes, depending on service availability, distance, and load type.',
      },
      {
        q: 'How do I protect appliances during a move?',
        a: 'Prepare them per manufacturer guidance, then pack and secure them properly.',
      },
      {
        q: 'Should cabinets be emptied before moving?',
        a: 'Preferably yes — especially drawers and cabinets with breakable items.',
      },
      {
        q: 'How is furniture moving cost determined?',
        a: 'It depends on load size, distance, crew size, and packing, disassembly, and loading services.',
      },
    ],
    image: '/images/services/furniture-moving.jpg',
    popular: true,
  },
  {
    slug: 'packing',
    categorySlug: 'moving-logistics',
    nameAr: 'التغليف وفك التغليف',
    nameEn: 'Packing & Unpacking',
    shortAr: 'دليل عملي للتغليف وفك التغليف: حماية الأثاث والمقتنيات أثناء النقل، وعلامات الجودة قبل الاتفاق.',
    shortEn: 'A practical packing and unpacking guide: protect furniture and belongings during moves, with quality signs before you agree.',
    introAr:
      'التغليف يحمي الأغراض من الخدوش والكسر والأتربة أثناء التحميل والنقل والتخزين. في ساعدني هتلاقي الأنواع والمراحل والأسئلة قبل الاتفاق — بما فيها فك التغليف في المكان الجديد.',
    introEn:
      'Packing protects items from scratches, breakage, and dust during loading, moving, and storage. On Saedni you get types, stages, and questions before agreeing — including unpacking at the new place.',
    bodyAr: `<p>التغليف وفك التغليف خدمة لتجهيز الأثاث والأجهزة والمقتنيات للنقل أو التخزين بمواد حماية مناسبة، ثم فك مواد التغليف وإعادة ترتيب الأغراض عند الوصول. تختلف الطريقة حسب حجم كل قطعة وحساسيتها.</p>
<p>تناسب الأسر المنتقلة، وأصحاب الشقق والفلل، والشركات التي تنقل مكاتب، وأصحاب المقتنيات القابلة للكسر، ومن يحتاج تخزين أثاث.</p>
<p><strong>أنواع الأعمال:</strong> تغليف أثاث خشبي، أجهزة كهربائية، زجاج ومرايا، أدوات مطبخ، تحف ومقتنيات حساسة، لوحات وديكورات، مراتب ومفروشات، ثم فك التغليف وإعادة الترتيب.</p>
<p>جودة التنفيذ تظهر في خامة مناسبة لكل قطعة، حماية الزوايا والأجزاء القابلة للكسر، عدم لصق يضر الأسطح، تثبيت داخل مواد التغليف، علامات على الصناديق، تسجيل القطع الحساسة، وعدم خلط ثقيل مع خفيف بطريقة تضر بالمحتوى.</p>
<p>المراحل: معاينة وتحديد حجم العمل ← فرز حسب النوع والحساسية ← تجهيز مواد ← حماية أثاث وزوايا ← صناديق للأغراض الصغيرة ← كتابة بيانات الصناديق ← تجهيز للنقل أو التخزين ← فك التغليف بعد الوصول وفحص المقتنيات.</p>
<p>تجنّب كراتين ضعيفة، حماية زجاج ناقصة، تغليف أجهزة غير مجهزة للنقل، أوزان كبيرة في صندوق واحد، غياب علامات، لاصق على أسطح حساسة، وإهمال تصوير القطع الثمينة قبل التغليف.</p>
<p>قبل الاتفاق اسأل: هل المواد مشمولة؟ هل كل قطعة تُغلَّف بشكل مناسب؟ هل يشمل فك أثاث؟ فك وتركيب أجهزة؟ كيف الزجاج والمرايا؟ هل في قائمة مقتنيات؟ هل تأمين أو تعويض مكتوب؟ وهل فك التغليف في المكان الجديد مشمول؟</p>
<p>شقة صغيرة قد تأخذ ساعات، والفلل والمنازل الكبيرة يومًا أو أكثر حسب كمية الأثاث. جهّز قائمة بالمقتنيات المهمة وصور القطع الثمينة قبل البدء.</p>`,
    bodyEn: `<p>Packing and unpacking prepares furniture, appliances, and belongings for moving or storage with suitable protection materials, then unpacks and rearranges at the destination. Method varies by size and fragility.</p>
<p>It suits households moving homes, apartments and villas, office moves, fragile collections, and furniture storage needs.</p>
<p>Quality shows in materials matched to each item, corner and fragile protection, no tape that damages finishes, secure wrapping, labeled boxes, logging fragile items, and not mixing heavy with light in harmful ways.</p>
<p>Stages: survey scope → sort by type and fragility → prepare materials → protect furniture and corners → box small items → label contents → ready for move or storage → unpack on arrival and check items.</p>`,
    gallery: ['/images/services/packing.jpg'],
    benefitsAr: [
      'حماية أوضح من الخدوش والكسر أثناء التحميل والنقل',
      'ترتيب أسهل بالصناديق المعلّمة وقوائم المقتنيات',
      'إمكانية تضمين فك التغليف في المكان الجديد ضمن الاتفاق',
      'مواد مناسبة تقلل تلف الأسطح الحساسة والزجاج',
    ],
    benefitsEn: [
      'Clearer protection from scratches and breakage during loading and transit',
      'Easier organization with labeled boxes and item lists',
      'Option to include unpacking at the new place in the agreement',
      'Suitable materials reduce damage to sensitive finishes and glass',
    ],
    stepsAr: [
      'معاينة الأغراض وتحديد حجم العمل',
      'فرز المقتنيات حسب النوع والحساسية',
      'تجهيز مواد التغليف',
      'حماية الأثاث والزوايا',
      'وضع الأغراض الصغيرة في صناديق مناسبة',
      'كتابة بيانات الصناديق ومحتوياتها',
      'تجهيز القطع للنقل أو التخزين',
      'فك التغليف بعد الوصول وفحص المقتنيات',
    ],
    stepsEn: [
      'Survey items and define work volume',
      'Sort belongings by type and fragility',
      'Prepare packing materials',
      'Protect furniture and corners',
      'Place small items in suitable boxes',
      'Label boxes and contents',
      'Prepare items for moving or storage',
      'Unpack on arrival and inspect belongings',
    ],
    typesAr: [
      'تغليف أثاث خشبي',
      'تغليف أجهزة كهربائية',
      'تغليف زجاج ومرايا',
      'أدوات مطبخ',
      'تحف ومقتنيات حساسة',
      'لوحات وديكورات',
      'مراتب ومفروشات',
      'فك تغليف وإعادة ترتيب',
    ],
    typesEn: [
      'Wooden furniture wrapping',
      'Appliance packing',
      'Glass and mirror packing',
      'Kitchen items',
      'Fragile collectibles',
      'Art and décor packing',
      'Mattresses and soft furnishings',
      'Unpacking and rearranging',
    ],
    faqAr: [
      {
        q: 'هل يجب تغليف جميع قطع الأثاث؟',
        a: 'يُفضّل حماية القطع أثناء النقل، وتختلف طريقة التغليف حسب طبيعة كل قطعة.',
      },
      {
        q: 'ما أفضل طريقة لتغليف الزجاج؟',
        a: 'استخدام مواد حماية مناسبة وتغليف كل قطعة منفصلة مع تثبيتها داخل صندوق ملائم.',
      },
      {
        q: 'هل التغليف يشمل فك الأثاث؟',
        a: 'ليس بالضرورة — تأكد من إدراج الفك والتركيب ضمن الاتفاق.',
      },
      {
        q: 'هل يمكن تغليف الأثاث للتخزين الطويل؟',
        a: 'نعم، مع اختيار مواد مناسبة للتهوية وطبيعة الأثاث ومدة التخزين.',
      },
      {
        q: 'كيف أتأكد من سلامة المقتنيات؟',
        a: 'بإعداد قائمة بالمقتنيات وفحص القطع قبل التغليف وبعد فك التغليف.',
      },
      {
        q: 'هل مواد التغليف مشمولة؟',
        a: 'غالبًا نعم ضمن الاتفاق — وضّح ذلك قبل البدء.',
      },
    ],
    faqEn: [
      {
        q: 'Should all furniture be packed?',
        a: 'Protection during transit is preferred; method varies by each item’s nature.',
      },
      {
        q: 'What is the best way to pack glass?',
        a: 'Use suitable protection, wrap each piece separately, and secure it in an appropriate box.',
      },
      {
        q: 'Does packing include furniture disassembly?',
        a: 'Not necessarily — confirm disassembly and reassembly are in the agreement.',
      },
      {
        q: 'Can furniture be packed for long storage?',
        a: 'Yes, with materials suited to ventilation, furniture type, and storage duration.',
      },
      {
        q: 'How do I confirm items are safe?',
        a: 'Prepare an item list and inspect pieces before packing and after unpacking.',
      },
      {
        q: 'Are packing materials included?',
        a: 'Usually yes within the agreement — clarify before work starts.',
      },
    ],
    image: '/images/services/packing.jpg',
    popular: true,
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
    image: '/images/services/furniture-assembly.jpg',
    gallery: ['/images/services/furniture-assembly.jpg'],
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
    image: '/images/services/office-relocation.jpg',
    gallery: ['/images/services/office-relocation.jpg'],
  },
  {
    slug: 'storage',
    categorySlug: 'moving-logistics',
    nameAr: 'خدمات التخزين',
    nameEn: 'Storage Services',
    shortAr: 'دليل عملي لخدمات التخزين: تخزين الأثاث والمقتنيات واختيار مكان مناسب قبل الاتفاق.',
    shortEn: 'A practical storage services guide: store furniture and belongings and choose a suitable place before agreeing.',
    introAr:
      'قد تحتاج تخزين أثاث أو مقتنيات لفترة مؤقتة أو طويلة بسبب الانتقال أو السفر أو التجديد. في ساعدني هتلاقي أنواع التخزين وعلامات الجودة والأسئلة قبل الاتفاق — بما فيها النظافة والأمان والرطوبة وشروط العقد.',
    introEn:
      'You may need to store furniture or belongings for a short or long period due to moving, travel, or renovation. On Saedni you get storage types, quality signs, and questions before agreeing — including cleanliness, security, humidity, and contract terms.',
    bodyAr: `<p>خدمات التخزين توفير مساحات مخصصة لحفظ الأثاث والأجهزة والبضائع والمقتنيات لفترة محددة، مع تنظيم التخزين وحماية المحتويات وفق طبيعتها وظروف المكان.</p>
<p>تناسب الأسر المنتقلة، والمسافرين لفترات طويلة، وأصحاب المنازل أثناء الترميم، وأصحاب المكاتب والشركات، والمتاجر التي تحتاج مساحة إضافية، وأصحاب الأثاث والمقتنيات الموسمية.</p>
<p><strong>أنواع الخدمات:</strong> تخزين أثاث منزلي، أجهزة كهربائية، مكاتب ومعدات، بضائع ومخزون تجاري، مقتنيات شخصية، أغراض موسمية، وتخزين قصير أو طويل الأجل.</p>
<p>جودة الخدمة تظهر في نظافة المكان، الحماية من الرطوبة وتسرب المياه، تهوية مناسبة، حماية من الحشرات والقوارض، وسائل أمن ومراقبة، تنظيم وترقيم المقتنيات، شروط وصول واضحة، وعقد يوضح المسؤوليات والتعويضات.</p>
<p>المراحل: تحديد نوع وكمية الأغراض ← اختيار مساحة مناسبة ← تغليف ← قائمة مقتنيات ← نقل إلى موقع التخزين ← ترتيب منظم ← متابعة ظروف التخزين ← استلام عند انتهاء الخدمة.</p>
<p>تجنّب تخزين أثاث رطب، تغليف غير مناسب، أوزان ثقيلة فوق قطع حساسة، عدم توثيق المحتويات، تجاهل الرطوبة والحرارة، تخزين مواد ممنوعة أو خطرة دون تصريح، إهمال شروط التأمين والمسؤولية، وعدم الاتفاق على الرسوم الإضافية.</p>
<p>قبل الاتفاق اسأل: المساحة؟ هل مغلق ومؤمن؟ مراقبة وحراسة؟ تحكم رطوبة وحرارة؟ السعر يومي أم شهري؟ هل النقل والتغليف مشمولان؟ عقد مسؤولية عن التلف؟ هل يمكن زيارة المخزن؟ ما المواد غير المسموح بها؟ وكيف الاستلام عند انتهاء المدة؟</p>
<p>الخدمة قد تكون أيامًا أو أسابيع أو أشهرًا حسب الحاجة. لا تختر بالمساحة والسعر فقط — افحص النظافة والأمان والرطوبة، وراجع شروط العقد والتعويض عن التلف.</p>`,
    bodyEn: `<p>Storage services provide dedicated space to keep furniture, appliances, goods, and belongings for a set period, with organized storage and protection suited to the items and site conditions.</p>
<p>It suits families moving home, people traveling for long periods, homeowners during renovation, offices and companies, shops needing extra space, and owners of seasonal furniture and items.</p>
<p>Quality shows in a clean site, protection from humidity and water leaks, suitable ventilation, pest protection, security and monitoring, organized labeling, clear access terms, and a contract that states responsibilities and compensation.</p>
<p>Stages: define item types and volume → choose suitable space → pack → inventory list → move to storage → organize contents → monitor storage conditions → collect items when the service ends.</p>`,
    gallery: ['/images/services/storage.jpg'],
    benefitsAr: [
      'مساحة أوضح أثناء الانتقال أو الترميم أو السفر',
      'حماية أفضل باختيار مكان نظيف ومؤمن ومناسب للرطوبة',
      'تنظيم وترقيم يقللان الفقد وصعوبة الاستلام لاحقًا',
      'عقد واضح يحدد المسؤولية والتعويض عن التلف',
    ],
    benefitsEn: [
      'Clearer space during a move, renovation, or travel',
      'Better protection by choosing a clean, secure, humidity-aware site',
      'Organization and labeling reduce loss and make collection easier later',
      'A clear contract defines responsibility and damage compensation',
    ],
    stepsAr: [
      'تحديد نوع وكمية الأغراض',
      'اختيار مساحة التخزين المناسبة',
      'تجهيز الأغراض بالتغليف',
      'إعداد قائمة بالمقتنيات',
      'نقل الأغراض إلى موقع التخزين',
      'ترتيب المحتويات بطريقة منظمة',
      'متابعة ظروف التخزين خلال المدة',
      'استلام الأغراض عند انتهاء الخدمة',
    ],
    stepsEn: [
      'Define item types and quantities',
      'Choose a suitable storage size',
      'Prepare items with packing',
      'Prepare an inventory list',
      'Move items to the storage site',
      'Organize contents clearly',
      'Monitor storage conditions during the period',
      'Collect items when the service ends',
    ],
    typesAr: [
      'تخزين الأثاث المنزلي',
      'تخزين الأجهزة الكهربائية',
      'تخزين المكاتب والمعدات',
      'تخزين البضائع والمخزون التجاري',
      'تخزين المقتنيات الشخصية',
      'تخزين الأغراض الموسمية',
      'التخزين قصير الأجل',
      'التخزين طويل الأجل',
    ],
    typesEn: [
      'Home furniture storage',
      'Appliance storage',
      'Office and equipment storage',
      'Goods and commercial inventory storage',
      'Personal belongings storage',
      'Seasonal item storage',
      'Short-term storage',
      'Long-term storage',
    ],
    faqAr: [
      {
        q: 'هل يمكن تخزين الأثاث لفترات طويلة؟',
        a: 'نعم، بشرط اختيار مكان مناسب وتجهيز الأثاث بطريقة تحميه من الرطوبة والغبار والتلف.',
      },
      {
        q: 'هل التخزين يشمل النقل؟',
        a: 'قد يشمل النقل أو يكون خدمة منفصلة حسب الاتفاق.',
      },
      {
        q: 'كيف أحسب مساحة التخزين المطلوبة؟',
        a: 'تُقدَّر حسب حجم الأثاث وعدد الصناديق وطريقة ترتيب المحتويات.',
      },
      {
        q: 'هل يمكن الوصول إلى الأغراض أثناء التخزين؟',
        a: 'يعتمد على نظام المستودع وشروط العقد.',
      },
      {
        q: 'هل توجد مستودعات مكيفة؟',
        a: 'تتوفر أماكن بتحكم في الحرارة والرطوبة — تأكد من ملاءمتها لمقتنياتك.',
      },
      {
        q: 'هل يتم تأمين الأثاث أثناء التخزين؟',
        a: 'راجع العقد لمعرفة وجود تغطية تأمينية والحالات التي تشملها.',
      },
    ],
    faqEn: [
      {
        q: 'Can furniture be stored long-term?',
        a: 'Yes, if you choose a suitable place and prepare furniture to protect it from humidity, dust, and damage.',
      },
      {
        q: 'Does storage include transport?',
        a: 'It may include transport or be a separate service depending on the agreement.',
      },
      {
        q: 'How do I estimate the storage space needed?',
        a: 'Estimate by furniture volume, number of boxes, and how contents will be arranged.',
      },
      {
        q: 'Can I access items during storage?',
        a: 'It depends on the warehouse system and contract terms.',
      },
      {
        q: 'Are climate-controlled warehouses available?',
        a: 'Some sites offer temperature and humidity control — confirm suitability for your items.',
      },
      {
        q: 'Is furniture insured during storage?',
        a: 'Review the contract for insurance coverage and what cases it includes.',
      },
    ],
    image: '/images/services/storage.jpg',
    popular: true,
  },
  {
    slug: 'landscaping',
    categorySlug: 'other-services',
    nameAr: 'تنسيق الحدائق',
    nameEn: 'Landscaping & Gardening',
    shortAr: 'دليل عملي لتنسيق الحدائق: التصميم والزراعة والري والعناية بالمساحات الخارجية قبل الاتفاق.',
    shortEn: 'A practical landscaping guide: design, planting, irrigation, and outdoor care before you agree.',
    introAr:
      'تنسيق الحدائق يحوّل المساحات الخارجية إلى أماكن منظمة ومناسبة للاستخدام. في ساعدني هتلاقي التصميم والزراعة والري والصيانة — مع أسئلة قبل الاتفاق تناسب المناخ المحلي.',
    introEn:
      'Landscaping turns outdoor spaces into organized, usable places. On Saedni you get design, planting, irrigation, and care — with pre-hire questions suited to the local climate.',
    bodyAr: `<p>تنسيق الحدائق خدمات تصميم وتجهيز وتجميل للمساحات الخارجية باستخدام النباتات والأشجار والمسطحات الخضراء والممرات وأنظمة الري والعناصر الديكورية. يناسب حديقة منزلية صغيرة أو مساحة واسعة حول فيلا أو منشأة تجارية.</p>
<p>تناسب أصحاب المنازل والفلل والاستراحات، والمجمعات السكنية، والفنادق والمنشآت التجارية، والمدارس والمباني الإدارية، وأصحاب المساحات الصغيرة والكبيرة.</p>
<p><strong>أنواع الأعمال:</strong> تصميم حدائق منزلية، زراعة أشجار وشجيرات ومسطحات، عشب طبيعي أو صناعي، ممرات وأرضيات خارجية، أنظمة ري، أحواض زراعة، إضاءة خارجية، مناطق جلوس، وتقليم وعناية بالنباتات.</p>
<p>جودة التنفيذ تظهر في نباتات مناسبة للمناخ المحلي، توزيع حسب احتياج الشمس، ري مناسب، تجهيز تربة صحيح، تصريف جيد، أحجام مناسبة للمساحة، تنظيم ممرات ومناطق جلوس، وسهولة الوصول للصيانة.</p>
<p>المراحل: معاينة ورفع مقاسات ← دراسة تربة وتعرض للشمس ← تصميم ونباتات ← تجهيز تربة ← شبكة ري ← زراعة ← عشب وممرات ← إضاءة وعناصر ديكور ← فحص ري وتصريف ← تسليم مع إرشادات عناية.</p>
<p>تجنّب نباتات لا تناسب المناخ، إفراط في الري، إهمال التصريف، زراعة أشجار قرب الجدران دون دراسة النمو، تجاهل احتياج الشمس، تربة غير مناسبة، غياب صيانة دورية، وعشب عالي استهلاك المياه دون مراعاة المكان.</p>
<p>قبل الاتفاق اسأل: هل السعر يشمل التصميم والزراعة؟ أنواع النباتات؟ هل مناسبة لمناخ المدينة؟ شبكة الري؟ تجهيز التربة؟ نوع العشب؟ صيانة بعد التنفيذ؟ وهل توجد خطة لتوفير المياه؟</p>
<p>حديقة صغيرة قد تأخذ أيامًا، والكبيرة أسابيع حسب التجهيز والزراعة والممرات والري. حدّد مقدار الشمس والمساحة واحتياجات الري قبل التصميم — فالنباتات المناسبة للمناخ توفر مياهًا وصيانة.</p>`,
    bodyEn: `<p>Landscaping covers designing, preparing, and beautifying outdoor spaces with plants, trees, lawns, paths, irrigation, and decorative elements. It suits a small home garden or a large area around a villa or commercial site.</p>
<p>It suits homeowners and villa owners, rest houses, residential compounds, hotels and commercial sites, schools and offices, and owners of small or large outdoor spaces.</p>
<p>Quality shows in plants suited to the local climate, placement by sun needs, suitable irrigation, proper soil prep, good drainage, sizes that fit the space, organized paths and seating, and easy access for maintenance.</p>
<p>Stages: survey and measure → study soil and sun exposure → design and plant selection → prepare soil → irrigation network → plant → lawn and paths → lighting and décor → check irrigation and drainage → hand over with care guidance.</p>`,
    gallery: [
      '/images/services/landscaping.jpg',
      '/images/hero/hero-13-landscaping-desktop.jpg',
      '/images/hero/hero-13-landscaping.jpg',
      '/images/team/team-01-villas.png',
    ],
    benefitsAr: [
      'مساحة خارجية أوضح بالتصميم المناسب للمناخ والمساحة',
      'ري وتصريف مدروسان يقللان الهدر والأضرار',
      'نباتات مناسبة تقلل الصيانة واستهلاك المياه',
      'ممرات ومناطق جلوس سهلة الاستخدام والصيانة',
    ],
    benefitsEn: [
      'A clearer outdoor space with design suited to climate and area',
      'Planned irrigation and drainage reduce waste and damage',
      'Suitable plants lower maintenance and water use',
      'Paths and seating that are easy to use and maintain',
    ],
    stepsAr: [
      'معاينة المساحة ورفع المقاسات',
      'دراسة طبيعة التربة والتعرض للشمس',
      'إعداد التصميم وتحديد النباتات',
      'تجهيز التربة والأرض',
      'تنفيذ شبكة الري',
      'زراعة الأشجار والنباتات',
      'تركيب العشب والممرات',
      'تركيب الإضاءة والعناصر الديكورية',
      'فحص الري والتصريف',
      'تسليم الحديقة مع إرشادات العناية',
    ],
    stepsEn: [
      'Survey the space and take measurements',
      'Study soil and sun exposure',
      'Prepare the design and plant selection',
      'Prepare soil and ground',
      'Install the irrigation network',
      'Plant trees and plants',
      'Install lawn and paths',
      'Install lighting and decorative elements',
      'Check irrigation and drainage',
      'Hand over the garden with care guidance',
    ],
    typesAr: [
      'تصميم الحدائق المنزلية',
      'زراعة الأشجار والشجيرات',
      'زراعة المسطحات الخضراء',
      'تركيب العشب الطبيعي أو الصناعي',
      'تنفيذ الممرات والأرضيات الخارجية',
      'تركيب أنظمة الري',
      'تنسيق أحواض الزراعة',
      'تنفيذ الإضاءة الخارجية',
      'إنشاء مناطق الجلوس',
      'تقليم الأشجار والعناية بالنباتات',
    ],
    typesEn: [
      'Home garden design',
      'Tree and shrub planting',
      'Lawn and green cover planting',
      'Natural or artificial turf',
      'Outdoor paths and flooring',
      'Irrigation systems',
      'Planter bed landscaping',
      'Outdoor lighting',
      'Seating areas',
      'Tree pruning and plant care',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين العشب الطبيعي والصناعي؟',
        a: 'الطبيعي يحتاج تربة وري وعناية مستمرة، والصناعي لا يحتاج ريًا زراعيًا لكنه يحتاج تنظيفًا وصيانة.',
      },
      {
        q: 'ما أفضل النباتات للحدائق في السعودية؟',
        a: 'يختلف حسب المدينة ودرجة الحرارة والتربة والتعرض للشمس وتوفر المياه.',
      },
      {
        q: 'هل يمكن تنسيق حديقة صغيرة؟',
        a: 'نعم — ويمكن استخدام أحواض ونباتات مناسبة وممرات صغيرة لاستغلال المساحة جيدًا.',
      },
      {
        q: 'هل تحتاج الحدائق إلى صيانة دورية؟',
        a: 'نعم — تشمل الري والتقليم وإزالة الأعشاب ومتابعة صحة النباتات.',
      },
      {
        q: 'هل يمكن تركيب نظام ري أوتوماتيكي؟',
        a: 'نعم — ويمكن تصميم تحكم بالري وفق نوع النباتات والمساحة واحتياجات المياه.',
      },
    ],
    faqEn: [
      {
        q: 'What is the difference between natural and artificial turf?',
        a: 'Natural turf needs soil, watering, and ongoing care; artificial turf needs no agricultural irrigation but still needs cleaning and upkeep.',
      },
      {
        q: 'What are the best plants for gardens in Saudi Arabia?',
        a: 'It depends on the city, temperature, soil, sun exposure, and water availability.',
      },
      {
        q: 'Can a small garden be landscaped?',
        a: 'Yes — planters, suitable plants, and small paths can make good use of limited space.',
      },
      {
        q: 'Do gardens need periodic maintenance?',
        a: 'Yes — including watering, pruning, weeding, and monitoring plant health.',
      },
      {
        q: 'Can an automatic irrigation system be installed?',
        a: 'Yes — and irrigation controls can be designed for plant types, area, and water needs.',
      },
    ],
    image: '/images/services/landscaping.jpg',
    popular: true,
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
    image: '/images/services/facility-management.jpg',
    gallery: ['/images/services/facility-management.jpg'],
  },
  {
    slug: 'commercial-maintenance',
    categorySlug: 'other-services',
    nameAr: 'صيانة العقارات التجارية',
    nameEn: 'Commercial Property Maintenance',
    shortAr: 'دليل عملي لصيانة العقارات التجارية: أنواع الصيانة، الجداول، وعلامات الجودة قبل التعاقد.',
    shortEn: 'A practical commercial property maintenance guide: maintenance types, schedules, and quality signs before contracting.',
    introAr:
      'العقارات التجارية تحتاج صيانة مستمرة لسلامة المبنى واستمرار الأنشطة. في ساعدني هتلاقي أنواع الأعمال والمراحل والأسئلة قبل الاتفاق — مع جدول زيارات وتقارير واضحة.',
    introEn:
      'Commercial properties need ongoing maintenance for building safety and continued operations. On Saedni you get work types, stages, and questions before agreeing — with a clear visit schedule and reports.',
    bodyAr: `<p>صيانة العقارات التجارية أعمال فحص وإصلاح وصيانة للمباني المستخدمة في الأنشطة التجارية والإدارية، بهدف تقليل الأعطال والمحافظة على كفاءة المرافق وتجهيزات العقار. تشمل الأنظمة الكهربائية والميكانيكية والسباكة والتكييف والتشطيبات والمرافق المشتركة.</p>
<p>تناسب أصحاب المحلات والمكاتب والمباني التجارية، والمطاعم والمنشآت، وملاك المجمعات التجارية، ومديري العقارات والمنشآت.</p>
<p><strong>أنواع الأعمال:</strong> كهرباء، مياه وصرف، تكييف وتهوية، متابعة مصاعد بالتعاون مع جهات متخصصة، أبواب ونوافذ، تشطيبات وأرضيات، واجهات، فحص أنظمة سلامة وحريق عبر جهات مؤهلة، ومواقف وممرات ومرافق مشتركة.</p>
<p>جودة التنفيذ تظهر في جدول صيانة واضح، تسجيل الأعطال والإصلاحات، قطع غيار مناسبة، فنيون مؤهلون، الالتزام باشتراطات السلامة، تقليل تعطيل النشاط، توثيق الأعمال، ومتابعة الأعطال المتكررة ومعالجة أسبابها.</p>
<p>المراحل: معاينة وتحديد الأنظمة ← قائمة الأعمال ← أولويات ← جدول زمني ← فحص وإصلاح ← اختبار بعد الصيانة ← توثيق وملاحظات ← خطة متابعة دورية.</p>
<p>تجنّب تأجيل الصيانة حتى عطل كبير، غياب سجلات، قطع غير مناسبة، إهمال الأنظمة المشتركة والوقائية، أعمال خطرة دون تصاريح أو مختصين، وعدم تحديد مسؤوليات المقاولين والفنيين.</p>
<p>قبل الاتفاق اسأل: ما الأنظمة المشمولة؟ دورية أم عند الأعطال؟ جدول زيارات؟ قطع الغيار؟ فريق طوارئ؟ تقارير؟ أوقات العمل؟ وهل الالتزام بمتطلبات السلامة والأنظمة المحلية؟</p>
<p>المدة تختلف حسب حجم العقار ونوع الأعمال — ساعات للصيانة البسيطة، وأيام لإصلاحات الأنظمة الكبيرة، والعقود الدورية وفق الجدول. حدّد الأنظمة المطلوب متابعتها، واطلب جدول زيارات وأعمال وتقارير واضحًا قبل التعاقد.</p>`,
    bodyEn: `<p>Commercial property maintenance covers inspecting, repairing, and maintaining buildings used for commercial and office activity to reduce failures and keep facilities and building systems efficient. It includes electrical, mechanical, plumbing, HVAC, finishes, and common areas.</p>
<p>It suits shop and office owners, commercial building owners, restaurants and facilities, mall owners, and property managers.</p>
<p>Quality shows in a clear maintenance schedule, logging faults and repairs, suitable spare parts, qualified technicians, safety compliance, minimizing disruption to business, documenting work, and following up recurring faults and their causes.</p>
<p>Stages: survey systems → work list → priorities → timeline → inspect and repair → test after maintenance → document notes → set a periodic follow-up plan.</p>`,
    gallery: ['/images/services/commercial-maintenance.jpg'],
    benefitsAr: [
      'أعطال أقل باكتشاف مبكر عبر الصيانة الوقائية',
      'تشغيل أوضح بجداول زيارات وتوثيق للأعمال',
      'تنسيق أنظمة متعددة دون تعطيل النشاط قدر الإمكان',
      'متابعة الأعطال المتكررة تقلل التكاليف المفاجئة',
    ],
    benefitsEn: [
      'Fewer failures with earlier detection through preventive maintenance',
      'Clearer operations with visit schedules and documented work',
      'Coordination across multiple systems with less disruption when possible',
      'Following recurring faults reduces surprise costs',
    ],
    stepsAr: [
      'معاينة العقار وتحديد الأنظمة الموجودة',
      'إعداد قائمة بالأعمال المطلوبة',
      'تحديد أولويات الصيانة',
      'وضع جدول زمني',
      'تنفيذ الفحص والإصلاح',
      'اختبار الأنظمة بعد الصيانة',
      'توثيق الأعمال والملاحظات',
      'إعداد خطة للمتابعة الدورية',
    ],
    stepsEn: [
      'Survey the property and identify existing systems',
      'Prepare the required work list',
      'Set maintenance priorities',
      'Build a timeline',
      'Carry out inspection and repairs',
      'Test systems after maintenance',
      'Document work and notes',
      'Set a periodic follow-up plan',
    ],
    typesAr: [
      'صيانة الأنظمة الكهربائية',
      'صيانة شبكات المياه والصرف',
      'صيانة التكييف والتهوية',
      'متابعة المصاعد مع جهات متخصصة',
      'صيانة الأبواب والنوافذ',
      'إصلاح التشطيبات والأرضيات',
      'صيانة الواجهات',
      'فحص أنظمة السلامة والحريق عبر جهات مؤهلة',
      'صيانة المواقف والممرات والمرافق المشتركة',
    ],
    typesEn: [
      'Electrical systems maintenance',
      'Water and drainage network maintenance',
      'HVAC maintenance',
      'Elevator follow-up with specialized providers',
      'Door and window maintenance',
      'Finishes and flooring repairs',
      'Facade maintenance',
      'Safety and fire system checks via qualified parties',
      'Parking, corridors, and common-area maintenance',
    ],
    faqAr: [
      {
        q: 'ما الفرق بين الصيانة التجارية وصيانة المنازل؟',
        a: 'التجارية غالبًا تشمل أنظمة أكبر ومتطلبات تشغيل وسلامة وتنسيقًا مع نشاط المنشأة.',
      },
      {
        q: 'هل الأفضل التعاقد على صيانة دورية؟',
        a: 'تساعد الدورية على اكتشاف المشكلات مبكرًا وتقليل الأعطال المفاجئة.',
      },
      {
        q: 'هل تشمل الصيانة المصاعد؟',
        a: 'يمكن أن يشمل نطاق الإدارة متابعة المصاعد، لكن الإصلاح الفني ينفذه مقدم متخصص ومؤهل.',
      },
      {
        q: 'ما أهمية سجل الصيانة؟',
        a: 'يساعد على متابعة الأعطال السابقة وتكاليف الإصلاح ومواعيد الفحص.',
      },
      {
        q: 'هل يمكن تنفيذ الصيانة أثناء عمل المنشأة؟',
        a: 'يمكن تنظيم بعض الأعمال خارج أوقات الذروة أو على مراحل لتقليل تعطيل النشاط.',
      },
    ],
    faqEn: [
      {
        q: 'How does commercial maintenance differ from home maintenance?',
        a: 'Commercial work usually covers larger systems, operational and safety requirements, and coordination with business activity.',
      },
      {
        q: 'Is a periodic maintenance contract better?',
        a: 'Periodic maintenance helps find issues earlier and reduce sudden failures.',
      },
      {
        q: 'Does maintenance include elevators?',
        a: 'Management scope can include elevator follow-up, but technical repair must be done by a specialized qualified provider.',
      },
      {
        q: 'Why keep a maintenance log?',
        a: 'It helps track past faults, repair costs, and inspection dates.',
      },
      {
        q: 'Can maintenance run while the business is open?',
        a: 'Some work can be scheduled off-peak or in phases to reduce disruption.',
      },
    ],
    image: '/images/services/commercial-maintenance.jpg',
    popular: true,
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
