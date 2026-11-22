import { BUILTIN_ADMIN_EMAILS, normalizeAdminEmail } from '@/lib/adminEmails'

/** Merged allowlist: built-in + optional env extras. Never “open to all”. */
export function getAdminEmailAllowlist(): string[] {
  const fromEnv = String(
    import.meta.env.VITE_ADMIN_EMAILS ||
      import.meta.env.VITE_FIREBASE_ADMIN_EMAIL ||
      '',
  )
    .split(',')
    .map(normalizeAdminEmail)
    .filter(Boolean)

  return [...new Set([...BUILTIN_ADMIN_EMAILS.map(normalizeAdminEmail), ...fromEnv])]
}

/** Empty allowlist ⇒ deny. Unlike legacy behavior that allowed any signed-in user. */
export function isEmailAllowedAdmin(email: string | null | undefined): boolean {
  if (!email) return false
  const list = getAdminEmailAllowlist()
  if (list.length === 0) return false
  return list.includes(normalizeAdminEmail(email))
}
