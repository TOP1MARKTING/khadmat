"""Generate src/data/mediaLibrary.ts from public/ image assets."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUT = ROOT / "src" / "data" / "mediaLibrary.ts"

EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
SKIP = {"favicon.svg", "favicon.png", "icons.svg", "top1markting-logo.png"}

GROUP_META = {
    "hero": ("hero", "هيرو", "Hero"),
    "services": ("services", "المهن", "Services"),
    "team": ("team", "الفريق", "Team"),
    "cities": ("cities", "المدن", "Cities"),
    "brand": ("brand", "الهوية", "Brand"),
}

CITY_AR = {
    "riyadh": "الرياض",
    "jeddah": "جدة",
    "makkah": "مكة المكرمة",
    "madinah": "المدينة المنورة",
    "dammam": "الدمام",
    "abha": "أبها",
    "buraydah": "بريدة",
}

SERVICE_AR = {
    "air-conditioning": "التكييف",
    "apartment-finishing": "تشطيب الشقق",
    "appliance-repair": "صيانة الأجهزة",
    "commercial-maintenance": "صيانة تجارية",
    "electrical": "الكهرباء",
    "facility-management": "إدارة المرافق",
    "furniture-assembly": "تركيب الأثاث",
    "furniture-moving": "نقل العفش",
    "gypsum-board": "الجبس بورد",
    "home-cleaning": "تنظيف المنازل",
    "landscaping": "تنسيق الحدائق",
    "leak-detection": "كشف التسربات",
    "office-cleaning": "تنظيف المكاتب",
    "office-relocation": "نقل المكاتب",
    "packing": "التغليف",
    "painting": "الدهانات",
    "pest-control": "مكافحة الحشرات",
    "plumbing": "السباكة",
    "post-construction-cleaning": "تنظيف بعد التشطيب",
    "renovation": "الترميم",
    "storage": "التخزين",
    "upholstery-cleaning": "تنظيف المفروشات",
    "water-tank-cleaning": "تنظيف الخزانات",
    "waterproofing": "العزل",
}

BRAND_AR = {
    "logo": "شعار الدائرة",
    "logo-lockup": "شعار كامل",
    "logo-lockup-light": "شعار فاتح",
    "logo-lockup-dark": "شعار داكن",
}


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def main() -> None:
    items: list[tuple[str, str, str, str, str, str, str]] = []
    for path in sorted(PUBLIC.rglob("*")):
        if not path.is_file() or path.suffix.lower() not in EXTS or path.name in SKIP:
            continue
        rel = "/" + path.relative_to(PUBLIC).as_posix()
        parts = path.relative_to(PUBLIC).parts
        if parts[0] == "images" and len(parts) > 1:
            group = parts[1]
        elif path.parent == PUBLIC:
            group = "brand"
        else:
            group = parts[0]
        stem = path.stem
        if group == "cities":
            label_ar = CITY_AR.get(stem, stem)
            label_en = stem.replace("-", " ").title()
        elif group == "services":
            label_ar = SERVICE_AR.get(stem, stem)
            label_en = stem.replace("-", " ").title()
        elif group == "brand":
            label_ar = BRAND_AR.get(stem, stem)
            label_en = stem.replace("-", " ").title()
        elif group == "team":
            label_ar = stem.replace("team-", "فريق ").replace("-", " ")
            label_en = stem.replace("-", " ").title()
        else:
            label_ar = (
                stem.replace("hero-", "هيرو ")
                .replace("-desktop", " (ديسكتوب)")
                .replace("-", " ")
            )
            label_en = stem.replace("-", " ").title()
        gid, gar, gen = GROUP_META.get(group, (group, group, group))
        items.append((gid, gar, gen, rel, label_ar, label_en, stem))

    lines = [
        "export type MediaGroupId = 'brand' | 'cities' | 'hero' | 'services' | 'team'",
        "",
        "export type MediaAsset = {",
        "  id: string",
        "  src: string",
        "  group: MediaGroupId",
        "  groupAr: string",
        "  groupEn: string",
        "  labelAr: string",
        "  labelEn: string",
        "}",
        "",
        "export const mediaGroups: { id: MediaGroupId; nameAr: string; nameEn: string }[] = [",
        "  { id: 'brand', nameAr: 'الهوية', nameEn: 'Brand' },",
        "  { id: 'hero', nameAr: 'هيرو', nameEn: 'Hero' },",
        "  { id: 'services', nameAr: 'المهن', nameEn: 'Services' },",
        "  { id: 'team', nameAr: 'الفريق', nameEn: 'Team' },",
        "  { id: 'cities', nameAr: 'المدن', nameEn: 'Cities' },",
        "]",
        "",
        "export const mediaLibrary: MediaAsset[] = [",
    ]
    for gid, gar, gen, rel, lar, len_, stem in items:
        lines.append(
            "  {"
            f" id: '{esc(stem)}',"
            f" src: '{esc(rel)}',"
            f" group: '{gid}',"
            f" groupAr: '{esc(gar)}',"
            f" groupEn: '{esc(gen)}',"
            f" labelAr: '{esc(lar)}',"
            f" labelEn: '{esc(len_)}'"
            " },"
        )
    lines.extend(
        [
            "]",
            "",
            "export function getMediaByGroup(group: MediaGroupId | 'all') {",
            "  if (group === 'all') return mediaLibrary",
            "  return mediaLibrary.filter((m) => m.group === group)",
            "}",
            "",
        ]
    )
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {OUT} ({len(items)} assets)")


if __name__ == "__main__":
    main()
