import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase'

const AUTH_KEY = 'saedni_admin_auth_v1'

type AdminAuthContextValue = {
  isAuthenticated: boolean
  login: (password: string) => Promise<boolean>
  logout: () => Promise<void>
  authNote: string
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null)

function readAuth(): boolean {
  try {
    return sessionStorage.getItem(AUTH_KEY) === '1'
  } catch {
    return false
  }
}

function expectedPassword() {
  return import.meta.env.VITE_ADMIN_PASSWORD || 'Saedni@Admin2026'
}

function adminEmail() {
  return (
    import.meta.env.VITE_FIREBASE_ADMIN_EMAIL || 'admin@saedniksa.com'
  ).trim()
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(readAuth)
  const [authNote, setAuthNote] = useState('')

  useEffect(() => {
    if (!isFirebaseConfigured()) return
    const auth = getFirebaseAuth()
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        sessionStorage.setItem(AUTH_KEY, '1')
        setIsAuthenticated(true)
      }
    })
  }, [])

  const login = useCallback(async (password: string) => {
    if (password.trim() !== expectedPassword()) {
      setAuthNote('')
      return false
    }

    sessionStorage.setItem(AUTH_KEY, '1')
    setIsAuthenticated(true)

    if (isFirebaseConfigured()) {
      try {
        await signInWithEmailAndPassword(
          getFirebaseAuth(),
          adminEmail(),
          password.trim(),
        )
        setAuthNote('تم الدخول وربط Firebase Auth')
      } catch (err) {
        console.warn(err)
        setAuthNote(
          'الدخول المحلي نجح. لإنشاء كتابة على Firestore: اعمل مستخدم Auth في Firebase بنفس الإيميل وكلمة المرور، أو افتح قواعد الكتابة مؤقتًا أثناء التصدير.',
        )
      }
    }

    return true
  }, [])

  const logout = useCallback(async () => {
    sessionStorage.removeItem(AUTH_KEY)
    setIsAuthenticated(false)
    setAuthNote('')
    if (isFirebaseConfigured()) {
      try {
        await signOut(getFirebaseAuth())
      } catch {
        /* ignore */
      }
    }
  }, [])

  const value = useMemo(
    () => ({ isAuthenticated, login, logout, authNote }),
    [isAuthenticated, login, logout, authNote],
  )

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider')
  return ctx
}
