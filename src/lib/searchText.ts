/** Normalize Arabic/Latin text for forgiving typeahead search. */
export function normalizeSearchText(input: string) {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // harakat + tatweel
    .replace(/[إأآٱا]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[^a-z0-9\u0600-\u06ff\s-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function matchesSearch(
  haystack: string | undefined,
  query: string,
): boolean {
  if (!haystack) return false
  const q = normalizeSearchText(query)
  if (!q) return true
  const h = normalizeSearchText(haystack)
  if (h.includes(q)) return true
  // Match start of any word: "سب" → "السباكة"
  return h.split(' ').some((word) => word.startsWith(q) || word.includes(q))
}

/** Find original-label slice to highlight for a normalized query. */
export function findHighlightRange(
  label: string,
  query: string,
): { start: number; end: number } | null {
  const q = query.trim()
  if (!q) return null

  const direct = label.toLowerCase().indexOf(q.toLowerCase())
  if (direct >= 0) return { start: direct, end: direct + q.length }

  const nQuery = normalizeSearchText(q)
  if (!nQuery) return null

  // Walk label; compare normalized windows by expanding end until match length
  for (let start = 0; start < label.length; start++) {
    let built = ''
    for (let end = start + 1; end <= label.length; end++) {
      built = normalizeSearchText(label.slice(start, end))
      if (!built) continue
      if (built === nQuery) return { start, end }
      if (built.length > nQuery.length && !nQuery.startsWith(built.slice(0, nQuery.length))) {
        break
      }
      if (built.startsWith(nQuery) && built.length >= nQuery.length) {
        // trim end back to exact normalized match length
        let e = end
        while (e > start && normalizeSearchText(label.slice(start, e)).length > nQuery.length) {
          e -= 1
        }
        if (normalizeSearchText(label.slice(start, e)) === nQuery) {
          return { start, end: e }
        }
      }
    }
  }
  return null
}
