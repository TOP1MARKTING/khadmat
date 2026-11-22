/** Digits-only international number for wa.me links. */
export function whatsappDigits(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  if (digits.startsWith('0') && digits.length === 10) return `966${digits.slice(1)}`
  return digits
}

export function whatsappUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${whatsappDigits(phone)}`
  if (!message?.trim()) return base
  return `${base}?text=${encodeURIComponent(message.trim())}`
}

export function openWhatsApp(phone: string, message?: string) {
  window.open(whatsappUrl(phone, message), '_blank', 'noopener,noreferrer')
}
