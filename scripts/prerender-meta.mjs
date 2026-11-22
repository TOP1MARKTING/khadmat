/**
 * After Vite build: write per-route HTML shells with correct meta into dist/
 * so the first response is not stuck on homepage title/canonical.
 *
 * Vercel rewrites still point many paths to /index.html; middleware serves
 * share-preview HTML to social bots. These shells help View Source / some crawlers
 * when filesystem wins, and keep dist ready for future rewrite tuning.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { absoluteImage, absoluteUrl, renderShareHtml } from './lib/seo-catalog.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const catalogPath = join(root, 'public', 'seo-catalog.json')

if (!existsSync(dist) || !existsSync(catalogPath)) {
  console.error('prerender-meta: missing dist/ or public/seo-catalog.json')
  process.exit(1)
}

const catalog = JSON.parse(readFileSync(catalogPath, 'utf8'))
const indexHtml = readFileSync(join(dist, 'index.html'), 'utf8')

function injectMeta(shellHtml, page) {
  const share = renderShareHtml(page)
  const headMatch = share.match(/<head>([\s\S]*?)<\/head>/i)
  const metaBlock = headMatch?.[1] || ''
  // Replace title + strip old canonical/description/og/twitter, then inject.
  let html = shellHtml
  html = html.replace(/<title>[\s\S]*?<\/title>/i, '')
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, '')
  html = html.replace(/<meta\s+name="robots"[^>]*>/gi, '')
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '')
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, '')
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, '')
  html = html.replace(/<head[^>]*>/i, (m) => `${m}\n${metaBlock}`)
  // Visible fallback for non-JS crawlers before React mounts
  html = html.replace(
    /<div id="root"><\/div>/i,
    `<div id="root"><main><h1>${page.title}</h1><p>${page.description}</p></main></div>`,
  )
  return html
}

let count = 0
for (const page of Object.values(catalog)) {
  if (!page?.path) continue
  if ((page.robots || '').includes('noindex') && page.path === '/blog') {
    // still emit blog shell
  }
  const outPath =
    page.path === '/'
      ? join(dist, 'index.html')
      : join(dist, page.path.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  const html = injectMeta(indexHtml, {
    ...page,
    image: absoluteImage(page.image),
  })
  writeFileSync(outPath, html, 'utf8')
  count += 1
}

console.log(
  `prerender-meta → ${count} shells (example canonical ${absoluteUrl('/services')})`,
)
