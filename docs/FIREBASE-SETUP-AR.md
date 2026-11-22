# ربط ساعدني بـ Firebase

## ما الذي يحدث؟

- كل بيانات المحتوى **محفوظة محليًا كما هي** (لا تُمسح).
- زر **تصدير الكل إلى Firebase** في `/admin` يرفع:
  - المهن (`services`)
  - المقالات (`articles`)
  - التصنيفات (`categories`)
  - المدن (`cities`)
  - الأصول الرقمية (`digitalAssets`)
  - معرض الصور (`mediaLibrary`)
  - إعدادات الموقع (`settings/site`)
- التصدير يعمل `set` حسب الـ id — **لا يحذف** مستندات أخرى في المشروع.
- الموقع يقرأ من Firestore عند التوفر، مع دمج آمن مع النسخة المحلية.

## إعداد Console

1. افتح مشروع `khadmat-5c5be`.
2. فعّل **Firestore Database**.
3. فعّل **Authentication** → Email/Password.
4. أنشئ مستخدم في Authentication:
   - Email + Password (مثال: `admin@saedniksa.com`)
5. صفحة `/admin/login` تطلب **البريد + كلمة المرور** عبر Firebase Auth فقط.
6. انشر قواعد `firestore.rules` من هذا المشروع.
7. (اختياري) Analytics مفعّل عبر `measurementId`.

### تصدير أول مرة

1. ادخل `/admin/login` بالبريد وكلمة المرور من Firebase Authentication.
2. أول دخول للوحة يرفع البيانات تلقائيًا إذا كانت Firestore فاضية.
3. أو اضغط يدويًا **تصدير الكل إلى Firebase**.

رفع CLI (اختياري):

```bash
npx vite-node scripts/build-seed-payload.ts
node scripts/seed-firestore.mjs your@email.com 'password'
```

## متغيرات `.env`

انظر `.env.example`. الملف `.env` محلي ولا يُرفع على Git.

## بعد الربط

1. شغّل الموقع.
2. ادخل `/admin/login`.
3. من لوحة التحكم اضغط **تصدير الكل إلى Firebase**.
4. راجع Collections في Firebase Console.
