import type { LucideIcon } from 'lucide-react'
import {
  AirVent,
  Box,
  BrickWall,
  Brush,
  Building2,
  Droplets,
  Fence,
  Gem,
  Hammer,
  HardHat,
  Home,
  Layers,
  LayoutGrid,
  Leaf,
  Package,
  PaintRoller,
  PanelTop,
  Search,
  ShowerHead,
  ShieldCheck,
  Sofa,
  Sparkles,
  SprayCan,
  Truck,
  WashingMachine,
  Wrench,
  Zap,
} from 'lucide-react'

/** Unique icon per trade slug (falls back by category then Wrench). */
const bySlug: Record<string, LucideIcon> = {
  'general-contracting': HardHat,
  'apartment-finishing': Home,
  'ceramic-installation': LayoutGrid,
  painting: PaintRoller,
  'marble-porcelain': Gem,
  'gypsum-board': PanelTop,
  waterproofing: ShieldCheck,
  renovation: BrickWall,
  plumbing: ShowerHead,
  electrical: Zap,
  'air-conditioning': AirVent,
  'appliance-repair': WashingMachine,
  'leak-detection': Search,
  'home-cleaning': Sparkles,
  'office-cleaning': Building2,
  'upholstery-cleaning': Sofa,
  'water-tank-cleaning': Droplets,
  'post-construction-cleaning': Brush,
  'pest-control': SprayCan,
  'furniture-moving': Truck,
  packing: Package,
  'furniture-assembly': Hammer,
  'office-relocation': Box,
  storage: Layers,
  landscaping: Leaf,
  'facility-management': Fence,
  'commercial-maintenance': Wrench,
}

const byCategory: Record<string, LucideIcon> = {
  'construction-finishing': HardHat,
  'home-maintenance': Wrench,
  cleaning: Sparkles,
  'moving-logistics': Truck,
  'other-services': Building2,
}

export function getServiceIcon(
  slug: string,
  categorySlug?: string,
): LucideIcon {
  return bySlug[slug] || (categorySlug ? byCategory[categorySlug] : undefined) || Wrench
}
