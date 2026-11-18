import { useState, type FormEvent } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'
import { FieldError, FormSuccess, Input, Label, Select, Textarea } from '@/components/ui/Input'

type Props = {
  intent?: 'general' | 'rental' | 'service'
  defaultService?: string
  defaultCity?: string
}

export function ContactForm({ intent = 'general', defaultService, defaultCity }: Props) {
  const { t } = useLanguage()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '').trim()
    const phone = String(fd.get('phone') || '').trim()
    const message = String(fd.get('message') || '').trim()
    const next: Record<string, string> = {}

    if (name.length < 2) next.name = t('يرجى إدخال الاسم.', 'Please enter your name.')
    if (phone.length < 9) next.phone = t('يرجى إدخال رقم جوال صحيح.', 'Please enter a valid mobile number.')
    if (message.length < 8) next.message = t('يرجى كتابة تفاصيل أوضح.', 'Please add a clearer message.')

    setErrors(next)
    if (Object.keys(next).length) return

    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      e.currentTarget.reset()
    }, 700)
  }

  if (success) {
    return (
      <FormSuccess>
        {t(
          'تم استلام رسالتك على الواجهة فقط. لن يتم إرسال بيانات إلى خادم في هذه المرحلة.',
          'Your message was received on the frontend only. No data is sent to a server in this phase.',
        )}
      </FormSuccess>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input type="hidden" name="intent" value={intent} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">{t('الاسم', 'Name')}</Label>
          <Input id="name" name="name" autoComplete="name" placeholder={t('اسمك الكريم', 'Your name')} />
          <FieldError>{errors.name}</FieldError>
        </div>
        <div>
          <Label htmlFor="phone">{t('الجوال', 'Mobile')}</Label>
          <Input id="phone" name="phone" inputMode="tel" dir="ltr" placeholder="05XXXXXXXX" />
          <FieldError>{errors.phone}</FieldError>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="city">{t('المدينة', 'City')}</Label>
          <Input
            id="city"
            name="city"
            defaultValue={defaultCity}
            placeholder={t('بريدة، عنيزة...', 'Buraydah, Unaizah...')}
          />
        </div>
        <div>
          <Label htmlFor="service">{t('الخدمة', 'Service')}</Label>
          <Input
            id="service"
            name="service"
            defaultValue={defaultService}
            placeholder={t('مثال: تركيب سيراميك', 'e.g. Ceramic installation')}
          />
        </div>
      </div>

      {intent === 'rental' && (
        <div>
          <Label htmlFor="business">{t('اسم المنشأة', 'Business name')}</Label>
          <Input id="business" name="business" placeholder={t('اسم شركتك أو مؤسستك', 'Your company name')} />
        </div>
      )}

      <div>
        <Label htmlFor="type">{t('نوع الطلب', 'Request type')}</Label>
        <Select id="type" name="type" defaultValue={intent}>
          <option value="general">{t('استفسار عام', 'General inquiry')}</option>
          <option value="service">{t('طلب خدمة', 'Service request')}</option>
          <option value="rental">{t('تأجير صفحة', 'Page rental')}</option>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">{t('الرسالة', 'Message')}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t('اكتب تفاصيل طلبك باختصار...', 'Briefly describe your request...')}
        />
        <FieldError>{errors.message}</FieldError>
      </div>

      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? t('جارٍ الإرسال...', 'Sending...') : t('إرسال الطلب', 'Send request')}
      </Button>
      <p className="text-xs text-muted">
        {t(
          'نموذج واجهة فقط — بدون تخزين خلفي في هذه المرحلة.',
          'Frontend-only form — no backend storage in this phase.',
        )}
      </p>
    </form>
  )
}
