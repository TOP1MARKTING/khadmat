import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAdminAuth } from '@/context/AdminAuthContext'

export function RequireAdmin({ children }: { children: ReactNode }) {
  const { isAuthenticated, authReady } = useAdminAuth()
  const location = useLocation()

  if (!authReady) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-cream text-sm font-bold text-muted">
        جاري التحقق من الجلسة…
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  }

  return children
}
