import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase'

type LoginResult = { ok: true } | { ok: false; message: string }

type AdminAuthContextValue = {
  isAuthenticated: boolean
  authReady: boolean
  userEmail: string | null
  login: (email: string, password: string) => Promise<LoginResult>
  logout: () => Promise<void>
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null)

function mapAuthError(err: unknown): string {
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case 'auth/invalid-email':
        return 'صيغة البريد الإلكتروني غير صحيحة'
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'البريد أو كلمة المرور غير صحيحة'
      case 'auth/too-many-requests':
        return 'محاولات كثيرة. حاول بعد قليل'
      case 'auth/network-request-failed':
        return 'مشكلة في الاتصال. تحقق من الإنترنت'
      default:
        return err.message || 'تعذر تسجيل الدخول'
    }
  }
  if (err instanceof Error) return err.message
  return 'تعذر تسجيل الدخول'
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [authReady, setAuthReady] = useState(!isFirebaseConfigured())

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setAuthReady(true)
      return
    }
    const auth = getFirebaseAuth()
    return onAuthStateChanged(auth, (next) => {
      setUser(next)
      setAuthReady(true)
    })
  }, [])

  const login = useCallback(async (email: string, password: string): Promise<LoginResult> => {
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()
    if (!trimmedEmail || !trimmedPassword) {
      return { ok: false, message: 'أدخل البريد الإلكتروني وكلمة المرور' }
    }
    if (!isFirebaseConfigured()) {
      return {
        ok: false,
        message: 'تعذر تهيئة نظام الدخول. حدّث الصفحة أو راجع إعدادات المشروع.',
      }
    }
    try {
      await signInWithEmailAndPassword(
        getFirebaseAuth(),
        trimmedEmail,
        trimmedPassword,
      )
      return { ok: true }
    } catch (err) {
      console.warn(err)
      return { ok: false, message: mapAuthError(err) }
    }
  }, [])

  const logout = useCallback(async () => {
    if (!isFirebaseConfigured()) {
      setUser(null)
      return
    }
    try {
      await signOut(getFirebaseAuth())
    } catch {
      /* ignore */
    }
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      isAuthenticated: Boolean(user),
      authReady,
      userEmail: user?.email ?? null,
      login,
      logout,
    }),
    [user, authReady, login, logout],
  )

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider')
  return ctx
}
