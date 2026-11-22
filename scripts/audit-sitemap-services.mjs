import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sm = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8')
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const svc = urls
  .filter((u) => /\/services\/[^/]+$/.test(u))
  .map((u) => u.split('/services/')[1])

const src = readFileSync(resolve(root, 'src/data/services.ts'), 'utf8')
const blocks = src.split(/\n\s*\{\s*\n\s*slug:\s*'/)
const code = []
for (let i = 1; i < blocks.length; i++) {
  const b = blocks[i]
  if (!b.includes('categorySlug:')) continue
  const slug = b.match(/^([^']+)'/)?.[1]
  if (!slug) continue
  const bodyMatch = b.match(/bodyAr:\s*`([\s\S]*?)`/)
  const body =
    bodyMatch?.[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() || ''
  code.push({ slug, bodyLen: body.length })
}

const codeSet = new Set(code.map((c) => c.slug))
const smSet = new Set(svc)
const eligible = code.filter((c) => c.bodyLen >= 120).map((c) => c.slug)

console.log(
  JSON.stringify(
    {
      sitemapTotal: urls.length,
      sitemapServices: svc.length,
      codeServices: code.length,
      eligibleBody120: eligible.length,
      inSitemapNotCode: [...smSet].filter((s) => !codeSet.has(s)),
      eligibleMissingFromSitemap: eligible.filter((s) => !smSet.has(s)),
      inSitemapButShortBody: [...smSet]
        .map((s) => code.find((c) => c.slug === s))
        .filter((c) => c && c.bodyLen < 120)
        .map((c) => ({ slug: c.slug, bodyLen: c.bodyLen })),
      shortBodyServices: code
        .filter((c) => c.bodyLen < 120)
        .map((c) => ({ slug: c.slug, bodyLen: c.bodyLen })),
    },
    null,
    2,
  ),
)
