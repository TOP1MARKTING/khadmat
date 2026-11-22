/** Production domain for Saedni (www is primary on Vercel) */
export const SITE_HOST = 'www.saedniksa.com'

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || `https://${SITE_HOST}`
).replace(/\/$/, '')

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized === '/' ? '/' : normalized}`
}
