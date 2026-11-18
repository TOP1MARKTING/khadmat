import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium text-brand">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink">
        {t('الصفحة غير موجودة', 'Page not found')}
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        {t(
          'ربما تغير الرابط أو أن الصفحة غير متاحة ضمن النطاق الحالي.',
          'The link may have changed, or the page is not available in the current scope.',
        )}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/">
          <Button>{t('العودة للرئيسية', 'Back home')}</Button>
        </Link>
        <Link to="/services">
          <Button variant="outline">{t('تصفح الخدمات', 'Browse services')}</Button>
        </Link>
      </div>
    </div>
  )
}
