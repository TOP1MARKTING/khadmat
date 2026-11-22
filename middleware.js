/**
 * Edge middleware: real HTTP 404 for commercial Phase-2 routes.
 * Page components remain in the repo for a future re-enable.
 */
export const config = {
  matcher: ['/advertise-with-us', '/advertise-with-us/(.*)', '/rent-a-page', '/rent-a-page/(.*)'],
}

export default function middleware() {
  return new Response(
    `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex,nofollow" />
  <title>404 | ساعدني</title>
</head>
<body style="font-family:system-ui,sans-serif;text-align:center;padding:4rem 1rem">
  <p>404</p>
  <h1>الصفحة غير موجودة</h1>
  <p><a href="/">العودة للرئيسية</a></p>
</body>
</html>`,
    {
      status: 404,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex, nofollow',
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    },
  )
}
