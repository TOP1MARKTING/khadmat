import { cn } from '@/lib/cn'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  className,
  as = 'h2',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'start' | 'center'
  className?: string
  as?: 'h1' | 'h2'
}) {
  const HeadingTag = as
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
      <HeadingTag className="heading-section">{title}</HeadingTag>
      {description && <p className="body-lead mt-4 max-w-2xl">{description}</p>}
    </div>
  )
}
