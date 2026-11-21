export type MediaGroupId = 'brand' | 'cities' | 'hero' | 'services' | 'team'

export type MediaAsset = {
  id: string
  src: string
  group: MediaGroupId
  groupAr: string
  groupEn: string
  labelAr: string
  labelEn: string
}

export const mediaGroups: { id: MediaGroupId; nameAr: string; nameEn: string }[] = [
  { id: 'brand', nameAr: 'الهوية', nameEn: 'Brand' },
  { id: 'hero', nameAr: 'هيرو', nameEn: 'Hero' },
  { id: 'services', nameAr: 'المهن', nameEn: 'Services' },
  { id: 'team', nameAr: 'عمال المهن', nameEn: 'Trade workers' },
  { id: 'cities', nameAr: 'المدن', nameEn: 'Cities' },
]

export const mediaLibrary: MediaAsset[] = [
  { id: 'abha', src: '/images/cities/abha.jpg', group: 'cities', groupAr: 'المدن', groupEn: 'Cities', labelAr: 'أبها', labelEn: 'Abha' },
  { id: 'buraydah', src: '/images/cities/buraydah.jpg', group: 'cities', groupAr: 'المدن', groupEn: 'Cities', labelAr: 'بريدة', labelEn: 'Buraydah' },
  { id: 'dammam', src: '/images/cities/dammam.jpg', group: 'cities', groupAr: 'المدن', groupEn: 'Cities', labelAr: 'الدمام', labelEn: 'Dammam' },
  { id: 'jeddah', src: '/images/cities/jeddah.jpg', group: 'cities', groupAr: 'المدن', groupEn: 'Cities', labelAr: 'جدة', labelEn: 'Jeddah' },
  { id: 'madinah', src: '/images/cities/madinah.jpg', group: 'cities', groupAr: 'المدن', groupEn: 'Cities', labelAr: 'المدينة المنورة', labelEn: 'Madinah' },
  { id: 'makkah', src: '/images/cities/makkah.jpg', group: 'cities', groupAr: 'المدن', groupEn: 'Cities', labelAr: 'مكة المكرمة', labelEn: 'Makkah' },
  { id: 'riyadh', src: '/images/cities/riyadh.jpg', group: 'cities', groupAr: 'المدن', groupEn: 'Cities', labelAr: 'الرياض', labelEn: 'Riyadh' },
  { id: 'hero-01-plumbing-desktop', src: '/images/hero/hero-01-plumbing-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 01 plumbing (ديسكتوب)', labelEn: 'Hero 01 Plumbing Desktop' },
  { id: 'hero-01-plumbing', src: '/images/hero/hero-01-plumbing.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 01 plumbing', labelEn: 'Hero 01 Plumbing' },
  { id: 'hero-02-finishing-desktop', src: '/images/hero/hero-02-finishing-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 02 finishing (ديسكتوب)', labelEn: 'Hero 02 Finishing Desktop' },
  { id: 'hero-02-finishing', src: '/images/hero/hero-02-finishing.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 02 finishing', labelEn: 'Hero 02 Finishing' },
  { id: 'hero-03-tiling-desktop', src: '/images/hero/hero-03-tiling-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 03 tiling (ديسكتوب)', labelEn: 'Hero 03 Tiling Desktop' },
  { id: 'hero-03-tiling', src: '/images/hero/hero-03-tiling.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 03 tiling', labelEn: 'Hero 03 Tiling' },
  { id: 'hero-04-waterproofing-desktop', src: '/images/hero/hero-04-waterproofing-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 04 waterproofing (ديسكتوب)', labelEn: 'Hero 04 Waterproofing Desktop' },
  { id: 'hero-04-waterproofing', src: '/images/hero/hero-04-waterproofing.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 04 waterproofing', labelEn: 'Hero 04 Waterproofing' },
  { id: 'hero-05-electrical-desktop', src: '/images/hero/hero-05-electrical-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 05 electrical (ديسكتوب)', labelEn: 'Hero 05 Electrical Desktop' },
  { id: 'hero-05-electrical', src: '/images/hero/hero-05-electrical.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 05 electrical', labelEn: 'Hero 05 Electrical' },
  { id: 'hero-06-ac-desktop', src: '/images/hero/hero-06-ac-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 06 ac (ديسكتوب)', labelEn: 'Hero 06 Ac Desktop' },
  { id: 'hero-06-ac', src: '/images/hero/hero-06-ac.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 06 ac', labelEn: 'Hero 06 Ac' },
  { id: 'hero-07-painting-desktop', src: '/images/hero/hero-07-painting-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 07 painting (ديسكتوب)', labelEn: 'Hero 07 Painting Desktop' },
  { id: 'hero-07-painting', src: '/images/hero/hero-07-painting.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 07 painting', labelEn: 'Hero 07 Painting' },
  { id: 'hero-08-moving-desktop', src: '/images/hero/hero-08-moving-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 08 moving (ديسكتوب)', labelEn: 'Hero 08 Moving Desktop' },
  { id: 'hero-08-moving', src: '/images/hero/hero-08-moving.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 08 moving', labelEn: 'Hero 08 Moving' },
  { id: 'hero-09-cleaning-desktop', src: '/images/hero/hero-09-cleaning-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 09 cleaning (ديسكتوب)', labelEn: 'Hero 09 Cleaning Desktop' },
  { id: 'hero-09-cleaning', src: '/images/hero/hero-09-cleaning.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 09 cleaning', labelEn: 'Hero 09 Cleaning' },
  { id: 'hero-10-gypsum-desktop', src: '/images/hero/hero-10-gypsum-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 10 gypsum (ديسكتوب)', labelEn: 'Hero 10 Gypsum Desktop' },
  { id: 'hero-10-gypsum', src: '/images/hero/hero-10-gypsum.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 10 gypsum', labelEn: 'Hero 10 Gypsum' },
  { id: 'hero-11-contracting-desktop', src: '/images/hero/hero-11-contracting-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 11 contracting (ديسكتوب)', labelEn: 'Hero 11 Contracting Desktop' },
  { id: 'hero-11-contracting', src: '/images/hero/hero-11-contracting.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 11 contracting', labelEn: 'Hero 11 Contracting' },
  { id: 'hero-12-marble-desktop', src: '/images/hero/hero-12-marble-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 12 marble (ديسكتوب)', labelEn: 'Hero 12 Marble Desktop' },
  { id: 'hero-12-marble', src: '/images/hero/hero-12-marble.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 12 marble', labelEn: 'Hero 12 Marble' },
  { id: 'hero-13-landscaping-desktop', src: '/images/hero/hero-13-landscaping-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 13 landscaping (ديسكتوب)', labelEn: 'Hero 13 Landscaping Desktop' },
  { id: 'hero-13-landscaping', src: '/images/hero/hero-13-landscaping.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 13 landscaping', labelEn: 'Hero 13 Landscaping' },
  { id: 'hero-14-leak-desktop', src: '/images/hero/hero-14-leak-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 14 leak (ديسكتوب)', labelEn: 'Hero 14 Leak Desktop' },
  { id: 'hero-14-leak', src: '/images/hero/hero-14-leak.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 14 leak', labelEn: 'Hero 14 Leak' },
  { id: 'hero-15-renovation-desktop', src: '/images/hero/hero-15-renovation-desktop.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 15 renovation (ديسكتوب)', labelEn: 'Hero 15 Renovation Desktop' },
  { id: 'hero-15-renovation', src: '/images/hero/hero-15-renovation.jpg', group: 'hero', groupAr: 'هيرو', groupEn: 'Hero', labelAr: 'هيرو 15 renovation', labelEn: 'Hero 15 Renovation' },
  { id: 'air-conditioning', src: '/images/services/air-conditioning.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'التكييف', labelEn: 'Air Conditioning' },
  { id: 'apartment-finishing', src: '/images/services/apartment-finishing.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'تشطيب الشقق', labelEn: 'Apartment Finishing' },
  { id: 'appliance-repair', src: '/images/services/appliance-repair.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'صيانة الأجهزة', labelEn: 'Appliance Repair' },
  { id: 'commercial-maintenance', src: '/images/services/commercial-maintenance.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'صيانة تجارية', labelEn: 'Commercial Maintenance' },
  { id: 'electrical', src: '/images/services/electrical.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'الكهرباء', labelEn: 'Electrical' },
  { id: 'facility-management', src: '/images/services/facility-management.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'إدارة المرافق', labelEn: 'Facility Management' },
  { id: 'furniture-assembly', src: '/images/services/furniture-assembly.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'تركيب الأثاث', labelEn: 'Furniture Assembly' },
  { id: 'furniture-moving', src: '/images/services/furniture-moving.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'نقل العفش', labelEn: 'Furniture Moving' },
  { id: 'gypsum-board', src: '/images/services/gypsum-board.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'الجبس بورد', labelEn: 'Gypsum Board' },
  { id: 'home-cleaning', src: '/images/services/home-cleaning.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'تنظيف المنازل', labelEn: 'Home Cleaning' },
  { id: 'landscaping', src: '/images/services/landscaping.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'تنسيق الحدائق', labelEn: 'Landscaping' },
  { id: 'leak-detection', src: '/images/services/leak-detection.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'كشف التسربات', labelEn: 'Leak Detection' },
  { id: 'office-cleaning', src: '/images/services/office-cleaning.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'تنظيف المكاتب', labelEn: 'Office Cleaning' },
  { id: 'office-relocation', src: '/images/services/office-relocation.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'نقل المكاتب', labelEn: 'Office Relocation' },
  { id: 'packing', src: '/images/services/packing.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'التغليف', labelEn: 'Packing' },
  { id: 'painting', src: '/images/services/painting.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'الدهانات', labelEn: 'Painting' },
  { id: 'pest-control', src: '/images/services/pest-control.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'مكافحة الحشرات', labelEn: 'Pest Control' },
  { id: 'plumbing', src: '/images/services/plumbing.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'السباكة', labelEn: 'Plumbing' },
  { id: 'post-construction-cleaning', src: '/images/services/post-construction-cleaning.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'تنظيف بعد التشطيب', labelEn: 'Post Construction Cleaning' },
  { id: 'renovation', src: '/images/services/renovation.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'الترميم', labelEn: 'Renovation' },
  { id: 'storage', src: '/images/services/storage.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'التخزين', labelEn: 'Storage' },
  { id: 'upholstery-cleaning', src: '/images/services/upholstery-cleaning.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'تنظيف المفروشات', labelEn: 'Upholstery Cleaning' },
  { id: 'water-tank-cleaning', src: '/images/services/water-tank-cleaning.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'تنظيف الخزانات', labelEn: 'Water Tank Cleaning' },
  { id: 'waterproofing', src: '/images/services/waterproofing.jpg', group: 'services', groupAr: 'المهن', groupEn: 'Services', labelAr: 'العزل', labelEn: 'Waterproofing' },
  { id: 'team-01-villas', src: '/images/team/team-01-villas.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 01 villas', labelEn: 'Workers 01 Villas' },
  { id: 'team-02-apartment', src: '/images/team/team-02-apartment.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 02 apartment', labelEn: 'Workers 02 Apartment' },
  { id: 'team-03-truck', src: '/images/team/team-03-truck.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 03 truck', labelEn: 'Workers 03 Truck' },
  { id: 'team-04-riyadh', src: '/images/team/team-04-riyadh.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 04 riyadh', labelEn: 'Workers 04 Riyadh' },
  { id: 'team-05-corniche', src: '/images/team/team-05-corniche.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 05 corniche', labelEn: 'Workers 05 Corniche' },
  { id: 'team-06-electrical', src: '/images/team/team-06-electrical.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 06 electrical', labelEn: 'Workers 06 Electrical' },
  { id: 'team-07-balad', src: '/images/team/team-07-balad.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 07 balad', labelEn: 'Workers 07 Balad' },
  { id: 'team-08-makkah', src: '/images/team/team-08-makkah.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 08 makkah', labelEn: 'Workers 08 Makkah' },
  { id: 'team-09-technician', src: '/images/team/team-09-technician.png', group: 'team', groupAr: 'عمال المهن', groupEn: 'Trade workers', labelAr: 'عمال 09 technician', labelEn: 'Workers 09 Technician' },
  { id: 'logo-header', src: '/logo-header.png', group: 'brand', groupAr: 'الهوية', groupEn: 'Brand', labelAr: 'logo-header', labelEn: 'Logo Header' },
  { id: 'logo-light', src: '/logo-light.png', group: 'brand', groupAr: 'الهوية', groupEn: 'Brand', labelAr: 'logo-light', labelEn: 'Logo Light' },
  { id: 'logo-lockup-dark', src: '/logo-lockup-dark.png', group: 'brand', groupAr: 'الهوية', groupEn: 'Brand', labelAr: 'شعار داكن', labelEn: 'Logo Lockup Dark' },
  { id: 'logo-lockup-light', src: '/logo-lockup-light.png', group: 'brand', groupAr: 'الهوية', groupEn: 'Brand', labelAr: 'شعار فاتح', labelEn: 'Logo Lockup Light' },
  { id: 'logo-lockup', src: '/logo-lockup.png', group: 'brand', groupAr: 'الهوية', groupEn: 'Brand', labelAr: 'شعار كامل', labelEn: 'Logo Lockup' },
  { id: 'logo', src: '/logo.png', group: 'brand', groupAr: 'الهوية', groupEn: 'Brand', labelAr: 'شعار الدائرة', labelEn: 'Logo' },
]

export function getMediaByGroup(group: MediaGroupId | 'all') {
  if (group === 'all') return mediaLibrary
  return mediaLibrary.filter((m) => m.group === group)
}
