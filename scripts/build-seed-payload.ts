import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { categories, services as seedServices } from '../src/data/services'
import { cities } from '../src/data/cities'
import { digitalAssets } from '../src/data/assets'
import { mediaLibrary } from '../src/data/mediaLibrary'
import { DEFAULT_SITE_SETTINGS } from '../src/lib/siteSettings'
import { getSeedCmsArticles, getSeedCmsServices } from '../src/lib/cms'

const services = getSeedCmsServices()
const articles = getSeedCmsArticles()

const payload = {
  services: services.map((s) => ({ id: s.id, data: s })),
  articles: articles.map((a) => ({ id: a.id, data: a })),
  categories: categories.map((c) => ({ id: c.slug, data: c })),
  cities: cities.map((c) => ({
    id: c.slug,
    data: { ...c, featured: c.featured ?? false },
  })),
  assets: digitalAssets.map((a) => ({ id: a.id, data: a })),
  media: mediaLibrary.map((m) => ({ id: m.id, data: m })),
  settings: DEFAULT_SITE_SETTINGS,
  counts: {
    services: services.length,
    articles: articles.length,
    categories: categories.length,
    cities: cities.length,
    assets: digitalAssets.length,
    media: mediaLibrary.length,
    seedServicesRaw: seedServices.length,
  },
}

const out = resolve(process.cwd(), 'scripts/.seed-payload.json')
writeFileSync(out, JSON.stringify(payload))
console.log('Wrote', out, payload.counts)
