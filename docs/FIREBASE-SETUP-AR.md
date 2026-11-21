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
4. أنشئ مستخدم:
   - Email: نفس `VITE_FIREBASE_ADMIN_EMAIL` (افتراضي `admin@saedniksa.com`)
   - Password: نفس `VITE_ADMIN_PASSWORD`
5. انشر قواعد `firestore.rules` من هذا المشروع.
6. (اختياري) Analytics مفعّل عبر `measurementId`.

### تصدير أول مرة لو الكتابة مقفولة

إما:

- ادخل الأدمن بعد إنشاء مستخدم Auth، ثم اضغط التصدير،  
أو مؤقتًا اسمح بالكتابة ثم أعد القواعد الآمنة.

## متغيرات `.env`

انظر `.env.example`. الملف `.env` محلي ولا يُرفع على Git.

## بعد الربط

1. شغّل الموقع.
2. ادخل `/admin/login`.
3. من لوحة التحكم اضغط **تصدير الكل إلى Firebase**.
4. راجع Collections في Firebase Console.
