import { useEffect } from 'react'

/** Inject a single JSON-LD script; replaces previous node with same id. */
export function JsonLd({ id, data }: { id: string; data: Record<string, unknown> }) {
  useEffect(() => {
    const scriptId = `jsonld-${id}`
    let el = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = scriptId
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(data)
    return () => {
      el?.remove()
    }
  }, [id, data])

  return null
}
