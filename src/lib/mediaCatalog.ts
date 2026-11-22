import { useCallback, useEffect, useState } from 'react'
import {
  mediaLibrary as seedMediaLibrary,
  type MediaAsset,
  type MediaGroupId,
} from '@/data/mediaLibrary'

const REMOVED_KEY = 'saedni_media_removed_ids_v1'
const CHANGE_EVENT = 'saedni-media-catalog-change'

function readRemovedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(REMOVED_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw) as string[]
    return new Set(Array.isArray(arr) ? arr.filter(Boolean) : [])
  } catch {
    return new Set()
  }
}

function writeRemovedIds(ids: Set<string>) {
  localStorage.setItem(REMOVED_KEY, JSON.stringify([...ids]))
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function getActiveMediaLibrary(): MediaAsset[] {
  const removed = readRemovedIds()
  return seedMediaLibrary.filter((m) => !removed.has(m.id))
}

export function getActiveMediaByGroup(group: MediaGroupId | 'all') {
  const list = getActiveMediaLibrary()
  if (group === 'all') return list
  return list.filter((m) => m.group === group)
}

export function removeMediaFromCatalog(id: string) {
  const next = readRemovedIds()
  next.add(id)
  writeRemovedIds(next)
}

export function restoreMediaToCatalog(id: string) {
  const next = readRemovedIds()
  next.delete(id)
  writeRemovedIds(next)
}

/** Live list for admin gallery / picker — updates when an image is removed. */
export function useMediaCatalog() {
  const [items, setItems] = useState<MediaAsset[]>(() =>
    typeof window === 'undefined' ? seedMediaLibrary : getActiveMediaLibrary(),
  )

  const refresh = useCallback(() => {
    setItems(getActiveMediaLibrary())
  }, [])

  useEffect(() => {
    refresh()
    const onStorage = (e: StorageEvent) => {
      if (e.key === REMOVED_KEY) refresh()
    }
    window.addEventListener(CHANGE_EVENT, refresh)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener(CHANGE_EVENT, refresh)
      window.removeEventListener('storage', onStorage)
    }
  }, [refresh])

  const remove = useCallback(
    (id: string) => {
      removeMediaFromCatalog(id)
      refresh()
    },
    [refresh],
  )

  return { items, remove, refresh }
}
