/** Production domain for Saedni */
export const SITE_HOST = 'saedniksa.com'

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || `https://${SITE_HOST}`
).replace(/\/$/, '')

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized === '/' ? '/' : normalized}`
}
