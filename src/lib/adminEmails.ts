/**
 * Built-in admin emails enforced in the client allowlist.
 * KEEP IN SYNC with `isAdmin()` email list in `firestore.rules`.
 * Env `VITE_ADMIN_EMAILS` may add more; it cannot empty this list.
 */
export const BUILTIN_ADMIN_EMAILS = ['top1@admin.com'] as const

export function normalizeAdminEmail(email: string) {
  return email.trim().toLowerCase()
}
