import { useMemo, useState, type FormEvent } from 'react'
import {
  BookOpen,
  CheckCircle2,
  CircleHelp,
  LifeBuoy,
  MessageCircle,
  MessagesSquare,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useSiteSettings } from '@/context/SiteSettingsContext'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'
import { FieldError, Input, Label, Textarea } from '@/components/ui/Input'
import { ModernSelect } from '@/components/ui/ModernSelect'

export type ContactTopic = 'support' | 'content' | 'correction' | 'guide' | 'general'

type Props = {
  intent?: 'general' | 'rental' | 'service'
  defaultService?: string
  defaultCity?: string
  defaultTopic?: ContactTopic
}

const TOPIC_META: Record<
  ContactTopic,
  { ar: string; en: string; Icon: typeof LifeBuoy }
> = {
  support: { ar: 'دعم استخدام المنصة', en: 'Platform support', Icon: LifeBuoy },
  content: { ar: 'اقتراح محتوى أو مهنة', en: 'Suggest content or a trade', Icon: BookOpen },
  correction: {
    ar: 'تصحيح معلومة في دليل',
    en: 'Correct guide information',
    Icon: CheckCircle2,
  },
  guide: { ar: 'سؤال عن دليل مهنة', en: 'Question about a trade guide', Icon: CircleHelp },
  general: { ar: 'استفسار عام عن ساعدني', en: 'General Saedni inquiry', Icon: MessagesSquare },
}

export function ContactForm({
  intent = 'general',
  defaultService,
  defaultCity,
  defaultTopic,
}: Props) {
  const { t } = useLanguage()
  const { settings } = useSiteSettings()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [topic, setTopic] = useState<ContactTopic>(
    defaultTopic ||
      (intent === 'service' ? 'guide' : intent === 'rental' ? 'general' : 'support'),
  )

  const topicOptions = useMemo(
    () =>
      (Object.keys(TOPIC_META) as ContactTopic[]).map((key) => {
        const meta = TOPIC_META[key]
        const Icon = meta.Icon
        return {
          value: key,
          label: t(meta.ar, meta.en),
          icon: <Icon className="size-4" />,
          keywords: [meta.ar, meta.en, key],
        }
      }),
    [t],
  )

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '').trim()
    const message = String(fd.get('message') || '').trim()
    const service = String(fd.get('service') || defaultService || '').trim()
    const city = String(fd.get('city') || defaultCity || '').trim()
    const next: Record<string, string> = {}

    if (name.length < 2) next.name = t('يرجى إدخال الاسم.', 'Please enter your name.')
    if (message.length < 8) next.message = t('يرجى كتابة تفاصيل أوضح.', 'Please add a clearer message.')

    setErrors(next)
    if (Object.keys(next).length) return

    const topicLabel = TOPIC_META[topic] || TOPIC_META.general
    const lines = [
      `مرحباً ساعدني — ${topicLabel.ar}`,
      `الاسم: ${name}`,
      service ? `الدليل/المهنة: ${service}` : '',
      city ? `المدينة (إن وُجدت): ${city}` : '',
      '',
      message,
    ].filter(Boolean)

    openWhatsApp(settings.whatsapp, lines.join('\n'))
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <Label htmlFor="name">{t('الاسم', 'Name')}</Label>
        <Input id="name" name="name" autoComplete="name" placeholder={t('اسمك الكريم', 'Your name')} />
        <FieldError>{errors.name}</FieldError>
      </div>

      <div>
        <Label htmlFor="topic">{t('نوع الرسالة', 'Message type')}</Label>
        <input type="hidden" name="topic" value={topic} />
        <ModernSelect
          id="topic"
          value={topic}
          onChange={(value) => setTopic(value as ContactTopic)}
          options={topicOptions}
          searchable={false}
          placeholder={t('اختر نوع الرسالة', 'Choose message type')}
          ariaLabel={t('نوع الرسالة', 'Message type')}
          triggerClassName="rounded-md border-line bg-surface py-3 hover:border-sand"
        />
      </div>

      {(defaultService || intent === 'service') && (
        <div>
          <Label htmlFor="service">{t('الدليل المرتبط (اختياري)', 'Related guide (optional)')}</Label>
          <Input
            id="service"
            name="service"
            defaultValue={defaultService}
            placeholder={t('مثال: المقاولات العامة', 'e.g. General contracting')}
          />
        </div>
      )}

      {defaultCity ? (
        <input type="hidden" name="city" value={defaultCity} />
      ) : null}

      <div>
        <Label htmlFor="message">{t('الرسالة', 'Message')}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t(
            'اكتب باختصار: دعم، اقتراح محتوى، أو تصحيح معلومة...',
            'Briefly: support, content suggestion, or a correction...',
          )}
        />
        <FieldError>{errors.message}</FieldError>
      </div>

      <Button type="submit" variant="whatsapp" className="w-full sm:w-auto">
        <MessageCircle className="size-4" />
        {t('متابعة عبر واتساب', 'Continue on WhatsApp')}
      </Button>
      <p className="text-xs text-muted">
        {t(
          'يفتح واتساب برسالتك جاهزة — القناة المعتمدة لدعم ساعدني في هذه المرحلة.',
          'Opens WhatsApp with your message ready — the approved Saedni support channel for this phase.',
        )}
      </p>
    </form>
  )
}
