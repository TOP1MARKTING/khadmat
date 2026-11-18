import { cn } from '@/lib/cn'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'start' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <>
          <p className="eyebrow mb-2">{eyebrow}</p>
          <div className="mb-3 work-rule w-12" />
        </>
      )}
      <h2 className="heading-section">{title}</h2>
      {description && <p className="body-lead mt-4 max-w-2xl">{description}</p>}
    </div>
  )
}
