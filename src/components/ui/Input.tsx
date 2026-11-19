import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

const fieldClass =
  'w-full rounded-md border border-line bg-surface px-3.5 py-3 text-sm text-ink placeholder:text-muted-soft transition-colors focus-ring hover:border-sand focus:border-brand/40'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, className)} {...props} />
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(fieldClass, 'min-h-28 resize-y leading-relaxed', className)}
        {...props}
      />
    )
  },
)

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldClass, 'appearance-none pe-9', className)} {...props}>
      {children}
    </select>
  )
}

export function Label({
  children,
  htmlFor,
  className,
}: {
  children: string
  htmlFor?: string
  className?: string
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('mb-1.5 block text-sm font-bold text-ink', className)}
    >
      {children}
    </label>
  )
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null
  return <p className="mt-1.5 text-xs text-red-700">{children}</p>
}

export function FormSuccess({ children }: { children: string }) {
  return (
    <div className="rounded-md border border-brand/20 bg-brand/5 px-4 py-3 text-sm text-brand-dark">
      {children}
    </div>
  )
}
