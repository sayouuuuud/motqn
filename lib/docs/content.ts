export type DocsLocale = 'ar' | 'en'

export type LocalizedText = Record<DocsLocale, string>

export type DocsSection = {
  id: string
  title: LocalizedText
  intro?: LocalizedText
  steps: Record<DocsLocale, string[]>
  note?: LocalizedText
}

export type DocsGuide = {
  slug: string
  group: 'start' | 'users' | 'staff' | 'admin' | 'support'
  icon: 'start' | 'student' | 'reader' | 'teacher' | 'parent' | 'supervisor' | 'admin' | 'support'
  title: LocalizedText
  description: LocalizedText
  audience: LocalizedText
  keywords: Record<DocsLocale, string[]>
  productRoutes: string[]
  reviewedAt: string
  sections: DocsSection[]
}

export const docsGroups: Array<{ id: DocsGuide['group']; label: LocalizedText }> = [
  { id: 'start', label: { ar: 'ابدأ هنا والنظرة العامة', en: 'Getting started & Overview' } },
  { id: 'users', label: { ar: 'أدلة المستخدمين والطلاب', en: 'User & Student guides' } },
  { id: 'staff', label: { ar: 'المعلمون والمشرفون', en: 'Staff & Supervisors' } },
  { id: 'admin', label: { ar: 'الإدارة العليا وقواعد البيانات', en: 'Administration & Database' } },
  { id: 'support', label: { ar: 'الخدمات والأنظمة الفرعية', en: 'Services & Subsystems' } },
]

export const docsGuides: DocsGuide[] = [
  {
    "slug": "authentication",
    "group": "start",
    "icon": "start",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "نظام المصادقة والتصريح",
      "en": "Authentication & Authorization"
    },
    "description": {
      "ar": "المسارات والأنظمة الخاصة بتسجيل الدخول، إنشاء الحسابات، والتوكنات.",
      "en": "Routes, authentication flows, registration, and security tokens."
    },
    "audience": {
      "ar": "جميع المستخدمين والزوار والمطورين",
      "en": "All visitors, users, and developers"
    },
    "keywords": {
      "ar": [
        "نظام المصادقة والتصريح",
        "المسارات والأنظمة الخاصة بتسجيل الدخول، إنشاء الحسابات، والتوكنات.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Authentication & Authorization",
        "Routes, authentication flows, registration, and security tokens.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/login",
      "/register",
      "/api/auth"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يتناول هذا القسم التوثيق الشامل والتفصيلي لنظام المصادقة والتحقق (Authentication & Authorization System) الخاص بـ **منصة إتقان**، شاملاً جميع مسارات واجهة المستخدم (Frontend Routes) ونقاط الاتصال البرمجية (API Endpoints)، بما يتضمنه ذلك من أغراض، أدوار مسموح بها، حقول الطلب والاستجابة، حالات الخطأ، والمنطق البرمجي الخاص بكل مسار. ---",
          "en": "This section provides comprehensive and detailed documentation for the Authentication & Authorization System of **Itqan Platform**, covering all Frontend Routes and API Endpoints, including their purposes, allowed roles, request and response fields, error states, and business logic for each route. ---"
        },
        "steps": {
          "ar": [
            "يتناول هذا القسم التوثيق الشامل والتفصيلي لنظام المصادقة والتحقق (Authentication & Authorization System) الخاص بـ **منصة إتقان**، شاملاً جميع مسارات واجهة المستخدم (Frontend Routes) ونقاط الاتصال البرمجية (API Endpoints)، بما يتضمنه ذلك من أغراض، أدوار مسموح بها، حقول الطلب والاستجابة، حالات الخطأ، والمنطق البرمجي الخاص بكل مسار. ---"
          ],
          "en": [
            "This section provides comprehensive and detailed documentation for the Authentication & Authorization System of **Itqan Platform**, covering all Frontend Routes and API Endpoints, including their purposes, allowed roles, request and response fields, error states, and business logic for each route. ---"
          ]
        }
      },
      {
        "id": "1-login-صفحة-تسجيل-الدخول-",
        "title": {
          "ar": "1. `/login` (صفحة تسجيل الدخول)",
          "en": "1. `/login` (Login Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**حقول المدخلات والـ Request State**:",
            "`email`: البريد الإلكتروني (string, required, format: email, dir: ltr).",
            "`password`: كلمة المرور (string, required, minLength: 1, dir: ltr).",
            "إمكانية تبديل رؤية كلمة المرور (Show/Hide Password).",
            "**المخرجات والتوجيه (Response & Navigation Logic)**:",
            "إذا كان الدور `teacher` والحالة `pending_approval` أو `rejected` -> التوجيه إلى `/academy/pending`.",
            "إذا كان الدور `reader` والحالة `pending_approval` أو `rejected` -> التوجيه إلى `/reader/pending`.",
            "إذا كان الدور `admin` أو `super_admin` أو `maqraa_admin` -> التوجيه إلى `/admin`.",
            "إذا كان الدور `academy_admin` -> التوجيه إلى `/academy/admin`.",
            "إذا كان الدور `student_supervisor` أو `reciter_supervisor` -> التوجيه إلى `/admin`.",
            "إذا كان الدور `fiqh_supervisor` -> التوجيه إلى `/academy/fiqh-supervisor`.",
            "إذا كان الدور `content_supervisor` -> التوجيه إلى `/academy/content-supervisor`.",
            "إذا كان الدور `supervisor` -> التوجيه إلى `/academy/supervisor`.",
            "إذا كان الدور `reader` (معتمد) -> التوجيه إلى `/reader`.",
            "إذا كان الدور `teacher` (معتمد) -> التوجيه إلى `/academy/teacher`.",
            "إذا كان الدور `parent` -> التوجيه إلى `/academy/parent`.",
            "إذا كان الدور `student`:",
            "إذا كان لديه صلاحية الأكاديمية فقط (`has_academy_access: true`, `has_quran_access: false`) -> التوجيه إلى `/academy/student`.",
            "إذا كان لديه صلاحية المقرأة فقط (`has_quran_access: true`, `has_academy_access: false`) -> التوجيه إلى `/student`.",
            "إذا كان يملك الصلاحيتين معاً -> التوجيه الافتراضي إلى `/academy/student`.",
            "**حالات الخطأ والرسائل**:",
            "بيانات دخول خاطئة: إرجاع رسالة خطأ تُظهر عدد المحاولات المتبقية قبل قفل الحساب.",
            "حساب مقفل (`is_locked = true`): إظهار الرسالة: `\"تم قفل الحساب بسبب كثرة المحاولات الفاشلة. يرجى استخدام 'نسيت كلمة المرور' لإعادة تنشيط حسابك.\"`",
            "حساب معطل (`is_active = false`): إظهار الرسالة: `\"الحساب معطل. تواصل مع الدعم.\"`",
            "حساب المقرئ غير معتمد: إظهار رسالة تفيد بأن الطلب قيد المراجعة أو تم رفضه.",
            "خطأ في الاتصال بالأجهزة أو الشبكة: إظهار رسالة خطأ الاتصال."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Input Fields & Request State**:",
            "`email`: Email address (string, required, format: email, dir: ltr).",
            "`password`: Password (string, required, minLength: 1, dir: ltr).",
            "Toggle password visibility option (Show/Hide Password).",
            "**Response & Navigation Logic**:",
            "If role is `teacher` and status is `pending_approval` or `rejected` -> Redirect to `/academy/pending`.",
            "If role is `reader` and status is `pending_approval` or `rejected` -> Redirect to `/reader/pending`.",
            "If role is `admin`, `super_admin`, or `maqraa_admin` -> Redirect to `/admin`.",
            "If role is `academy_admin` -> Redirect to `/academy/admin`.",
            "If role is `student_supervisor` or `reciter_supervisor` -> Redirect to `/admin`.",
            "If role is `fiqh_supervisor` -> Redirect to `/academy/fiqh-supervisor`.",
            "If role is `content_supervisor` -> Redirect to `/academy/content-supervisor`.",
            "If role is `supervisor` -> Redirect to `/academy/supervisor`.",
            "If role is `reader` (approved) -> Redirect to `/reader`.",
            "If role is `teacher` (approved) -> Redirect to `/academy/teacher`.",
            "If role is `parent` -> Redirect to `/academy/parent`.",
            "If role is `student`:",
            "If user has academy access only (`has_academy_access: true`, `has_quran_access: false`) -> Redirect to `/academy/student`.",
            "If user has Quran access only (`has_quran_access: true`, `has_academy_access: false`) -> Redirect to `/student`.",
            "If user has both permissions -> Default redirect to `/academy/student`.",
            "**Error States & Messages**:",
            "Invalid credentials: Returns an error message showing the remaining attempts before account lockout.",
            "Locked account (`is_locked = true`): Displays message: `\"Account locked due to excessive failed attempts. Please use 'Forgot Password' to reactivate your account.\"`",
            "Disabled account (`is_active = false`): Displays message: `\"Account disabled. Please contact support.\"`",
            "Reciter account not approved: Displays a message indicating that the application is under review or rejected.",
            "Device or network connection error: Displays a connection error message."
          ]
        }
      },
      {
        "id": "2-register-صفحة-إنشاء-حساب-جديد-واختيار-الدور-",
        "title": {
          "ar": "2. `/register` (صفحة إنشاء حساب جديد واختيار الدور)",
          "en": "2. `/register` (Sign Up & Role Selection Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**مكون اختيار الدور (`RoleSelection.tsx`)**:",
            "`student`: التسجيل كطالب لحفظ القرآن أو الدراسة الأكاديمية.",
            "`parent`: التسجيل كولي أمر لمتابعة أداء الأبناء وإدارة حساباتهم.",
            "`teacher`: التسجيل كمعلم لتدريس المواد الأكاديمية (فقه، عقيدة، إلخ).",
            "`reader`: التسجيل كمقرئ لتسميع القرآن الكريم وتصحيح التلاوة.",
            "**النماذج الفرعية حسب الدور المختار**:",
            "**نموذج الطالب وولي الأمر (`StudentForm.tsx`)**:",
            "الحقول: `name` (الاسم الكامل)، `email` (البريد)، `password` (كلمة المرور)، `gender` (الجنس)، `platform` (المنصة: المقرأة / الأكاديمية / كلاهما - للطلاب فقط).",
            "عند النجاح: يتم التوجيه إلى صفحة التحقق من البريد `/verify?email=...` وإرسال كود التفعيل المكون من 6 أرقام.",
            "**نموذج المعلم (`TeacherForm.tsx`)**:",
            "الحقول: `full_name_triple` (الاسم الثلاثي)، `email` (البريد)، `password` (كلمة المرور)، `phone` (رقم الجوال)، `gender` (الجنس)، `nationality` (الجنسية - قائمة منسدلة قابلة للبحث)، `qualification` (المؤهل العلمي)، `years_of_experience` (سنوات الخبرة)، `teaching_subjects` (المواد التي يدرسها).",
            "عند النجاح: يعرض شاشة نجاح استلام الطلب وتوضيح أن الحساب يحتاج إلى مراجعة واعتماد من إدارة الأكاديمية.",
            "**نموذج المقرئ (`ReaderForm.tsx`)**:",
            "الحقول: `full_name_triple` (الاسم الثلاثي)، `email` (البريد)، `password` (كلمة المرور)، `phone` (رقم الجوال)، `gender` (الجنس)، `nationality` (الجنسية)، `qualification` (المؤهل العلمي)، `memorized_parts` (عدد الأجزاء المحفوظة: 0 - 30)، `years_of_experience` (سنوات الخبرة)، وإمكانية إرفاق ملفات الشهادات.",
            "عند النجاح: إظهار رسالة تفيد باستلام الطلب وإحالته للإدارة للمراجعة والاعتماد."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Role Selection Component (`RoleSelection.tsx`)**:",
            "`student`: Register as a student for Quran memorization or academic studies.",
            "`parent`: Register as a parent to track children's performance and manage their accounts.",
            "`teacher`: Register as a teacher to teach academic subjects (Fiqh, Aqidah, etc.).",
            "`reader`: Register as a reciter for Quran recitation testing and pronunciation correction.",
            "**Sub-forms by Selected Role**:",
            "**Student and Parent Form (`StudentForm.tsx`)**:",
            "Fields: `name` (Full name), `email` (Email), `password` (Password), `gender` (Gender), `platform` (Platform: Maqraa / Academy / Both - for students only).",
            "On success: Redirects to the email verification page `/verify?email=...` and sends a 6-digit activation code.",
            "**Teacher Form (`TeacherForm.tsx`)**:",
            "Fields: `full_name_triple` (Full triple name), `email` (Email), `password` (Password), `phone` (Phone number), `gender` (Gender), `nationality` (Nationality - searchable dropdown), `qualification` (Educational qualification), `years_of_experience` (Years of experience), `teaching_subjects` (Subjects taught).",
            "On success: Displays application submission success screen indicating that the account requires review and approval from academy management.",
            "**Reciter Form (`ReaderForm.tsx`)**:",
            "Fields: `full_name_triple` (Full triple name), `email` (Email), `password` (Password), `phone` (Phone number), `gender` (Gender), `nationality` (Nationality), `qualification` (Educational qualification), `memorized_parts` (Number of memorized Juz: 0 - 30), `years_of_experience` (Years of experience), and option to attach certificate files.",
            "On success: Displays a message indicating receipt of application and forwarding it to management for review and approval."
          ]
        }
      },
      {
        "id": "3-forgot-password-صفحة-نسيت-كلمة-المرور-",
        "title": {
          "ar": "3. `/forgot-password` (صفحة نسيت كلمة المرور)",
          "en": "3. `/forgot-password` (Forgot Password Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**حقول المدخلات**:",
            "`email`: البريد الإلكتروني الخاص بالمستخدم (string, required, format: email).",
            "**المخرجات والتوجيه**:",
            "في حال كان البريد مسجلاً بالمنصة: يتم توليد رمز استعادة مكون من 6 أرقام ينتهي بعد ساعة واحدة، وحفظه في جدول `users` بالحقليين (`reset_code`, `reset_expires_at`)، وإرسال بريد إلكتروني رسمي يحتوي الكود، ثم توجيه المستخدم بعد ثانيتين إلى صفحة إعادة تعيين كلمة المرور `/reset-password?email=...`.",
            "**حالات الخطأ والرسائل**:",
            "`not_found`: البريد غير مسجل بالمنصة -> عرض تنبيه بلون تنبيهي يُفهم المستخدم بعدم وجود البريد مع توفير زر مباشر للانتقال إلى صفحة إنشاء حساب جديد `/register`."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Input Fields**:",
            "`email`: User's email address (string, required, format: email).",
            "**Response & Navigation**:",
            "If email is registered in the platform: Generates a 6-digit recovery code expiring after 1 hour, saves it in the `users` table fields (`reset_code`, `reset_expires_at`), sends an official email containing the code, and redirects the user after 2 seconds to password reset page `/reset-password?email=...`.",
            "**Error States & Messages**:",
            "`not_found`: Email not registered on platform -> Displays a warning message informing user that email doesn't exist, with a direct button to navigate to sign up page `/register`."
          ]
        }
      },
      {
        "id": "4-reset-password-صفحة-إعادة-تعيين-كلمة-المرور-",
        "title": {
          "ar": "4. `/reset-password` (صفحة إعادة تعيين كلمة المرور)",
          "en": "4. `/reset-password` (Reset Password Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**حقول المدخلات**:",
            "`email`: البريد الإلكتروني (يسترد تلقائياً من روابط الصفحات أو يكتب يدوياً في حال عدم وجوده).",
            "`code`: رمز التحقق المكون من 6 خانات منفصلة (يدعم اللصق والتنقل التلقائي بين المربعات).",
            "`newPassword`: كلمة المرور الجديدة (string, minLength: 6).",
            "**المخرجات والتوجيه**:",
            "عند نجاح المطابقة والتحقق: يتم التحديث في قاعدة البيانات (تحديث `password_hash` بـ bcrypt hash جديد، تفريغ `reset_code` و `reset_expires_at` إلى `NULL`، فك قفل الحساب `is_locked = false` وإعادة صفر لـ `failed_login_count`)، ثم توجيه المستخدم تلقائياً إلى `/login` بعد ثانيتين.",
            "**حالات الخطأ والرسائل**:",
            "عدم إدخال الرمز بالكامل (أقل من 6 أرقام).",
            "رمز تحقق خاطئ أو منتهي الصلاحية.",
            "كلمة المرور أقل من 6 أحرف."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Input Fields**:",
            "`email`: Email address (automatically retrieved from URL query or entered manually if absent).",
            "`code`: 6-digit verification code across separate inputs (supports paste and automatic box navigation).",
            "`newPassword`: New password (string, minLength: 6).",
            "**Response & Navigation**:",
            "On successful verification & match: Updates database (sets `password_hash` to new bcrypt hash, clears `reset_code` and `reset_expires_at` to `NULL`, unlocks account `is_locked = false` and resets `failed_login_count` to 0), then automatically redirects user to `/login` after 2 seconds.",
            "**Error States & Messages**:",
            "Incomplete code entry (fewer than 6 digits).",
            "Invalid or expired verification code.",
            "Password length less than 6 characters."
          ]
        }
      },
      {
        "id": "5-change-password-صفحة-تغيير-كلمة-المرور-للمستخدم-المسجل-",
        "title": {
          "ar": "5. `/change-password` (صفحة تغيير كلمة المرور للمستخدم المسجل)",
          "en": "5. `/change-password` (Change Password Page for Authenticated Users)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**حقول المدخلات**:",
            "`currentPassword`: كلمة المرور الحالية (string, required).",
            "`newPassword`: كلمة المرور الجديدة (string, required, minLength: 8).",
            "`confirmPassword`: تأكيد كلمة المرور الجديدة (string, required).",
            "**المخرجات والتوجيه**:",
            "عند النجاح: يتم إبطال جميع جلسات المستخدم الحالية وحذف التوكنات من الكوكيز وجداول الجلسات `user_sessions` و `refresh_tokens` لحماية الحساب، وتوجيهه إلى صفحة وتسجيل الدخول `/login` مجدداً.",
            "**حالات الخطأ والرسائل**:",
            "كلمة المرور الحالية غير صحيحة.",
            "كلمة المرور الجديدة تماثل كلمة المرور الحالية.",
            "عدم تطابق كلمتي المرور الجديدة والتأكيد.",
            "طول كلمة المرور الجديدة أقل من 8 أحرف."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Input Fields**:",
            "`currentPassword`: Current password (string, required).",
            "`newPassword`: New password (string, required, minLength: 8).",
            "`confirmPassword`: Confirm new password (string, required).",
            "**Response & Navigation**:",
            "**Error States & Messages**:",
            "Incorrect current password.",
            "New password is identical to current password.",
            "Mismatch between new password and confirmation.",
            "New password length less than 8 characters."
          ]
        }
      },
      {
        "id": "6-verify-صفحة-تفعيل-البريد-الإلكتروني-",
        "title": {
          "ar": "6. `/verify` (صفحة تفعيل البريد الإلكتروني)",
          "en": "6. `/verify` (Email Verification Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**حقول المدخلات**:",
            "`email`: البريد الإلكتروني المستهدف بالتحقق (من رابط الصفحة).",
            "`code`: رمز التفعيل المكون من 6 أرقام (يدعم اللصق والتنقل بين الخانات).",
            "**المخرجات والتوجيه**:",
            "عند نجاح التفعيل: تحويل `email_verified = true` في قاعدة البيانات، إرسال رسالة ترحيبية عبر البريد الإلكتروني، إنشاء توكن وتعيين كوكي الجلسة `auth-token` بمدة 30 يوماً، وتوجيه المستخدم مباشرة إلى لوحة التحكم الخاصة بدور منصته (الأكاديمية أو المقرأة أو ولي الأمر).",
            "إمكانية طلب كود جديد بعد انقضاء عداد التنازلي (60 ثانية).",
            "**حالات الخطأ والرسائل**:",
            "كود غير صحيح أو منتهي الصلاحية.",
            "بريد إلكتروني غير موجود أو الحساب مفعل بالفعل."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Input Fields**:",
            "`email`: Target email address (retrieved from URL query).",
            "`code`: 6-digit activation code (supports paste and automatic input navigation).",
            "**Response & Navigation**:",
            "On successful activation: Sets `email_verified = true` in database, sends welcome email, creates JWT token and sets `auth-token` session cookie for 30 days, and directly redirects user to their role-specific dashboard (Academy, Maqraa, or Parent).",
            "Ability to request a new code after countdown timer expires (60 seconds).",
            "**Error States & Messages**:",
            "Incorrect or expired code.",
            "Email does not exist or account is already verified."
          ]
        }
      },
      {
        "id": "1-post-api-auth-login-",
        "title": {
          "ar": "1. `POST /api/auth/login`",
          "en": "1. `POST /api/auth/login`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 200 OK)**:",
            "تعيين Cookie باسم `auth-token` تحتوي JWT signed token بصلاحية 30 يوماً (`httpOnly: true`, `sameSite: 'lax'`, `maxAge: 30 days`, `path: '/'`).",
            "صفير محاولات الفشل (`failed_login_count = 0`) وتحديث `last_login_at`.",
            "إدراج سجل في `user_sessions` و `activity_logs` (شاملاً بيانات الـ IP والـ User Agent والتفاصيل الجغرافية).",
            "إرسال إشعار للمدراء عند تسجيل دخول حساب إداري.",
            "**حالات الخطأ (Error Cases)**:",
            "`400 Bad Request`: البريد الإلكتروني وكلمة المرور مطلوبان.",
            "`401 Unauthorized`:",
            "عدم وجود حساب بهذا البريد.",
            "كلمة المرور غير صحيحة (زيادة `failed_login_count` بمقدار 1، وعند الوصول لـ 5 محاولات يتم قفل الحساب `is_locked = true` وإرجاع تنبيه القفل).",
            "`403 Forbidden`:",
            "الحساب مقفل (`is_locked = true`).",
            "الحساب معطل (`is_active = false`).",
            "حساب المقرئ لا يزال قيد الاعتماد (`pending_approval`) أو مرفوض (`rejected`).",
            "تسجيل دخول من واجهة المدراء (`loginType = 'admin'`) لحساب لا يملك صلاحيات إدارية.",
            "`500 Internal Server Error`: حدث خطأ في الخادم (يرجع حقل `debug` في بيئات التطوير)."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 200 OK)**:",
            "Sets `auth-token` cookie containing JWT signed token valid for 30 days (`httpOnly: true`, `sameSite: 'lax'`, `maxAge: 30 days`, `path: '/'`).",
            "Resets failed attempts (`failed_login_count = 0`) and updates `last_login_at`.",
            "Inserts record in `user_sessions` and `activity_logs` (including IP, User Agent, and geo details).",
            "Sends notification to admins upon administrative account login.",
            "**Error Cases**:",
            "`400 Bad Request`: Email and password are required.",
            "`401 Unauthorized`:",
            "Account with this email does not exist.",
            "Invalid password (increments `failed_login_count` by 1; upon reaching 5 attempts, locks account `is_locked = true` and returns lockout alert).",
            "`403 Forbidden`:",
            "Account locked (`is_locked = true`).",
            "Account disabled (`is_active = false`).",
            "Reciter account is pending approval (`pending_approval`) or rejected (`rejected`).",
            "Login attempt from admin portal (`loginType = 'admin'`) for account lacking admin permissions.",
            "`500 Internal Server Error`: Server error occurred (returns `debug` field in development environments)."
          ]
        }
      },
      {
        "id": "2-post-api-auth-register-",
        "title": {
          "ar": "2. `POST /api/auth/register`",
          "en": "2. `POST /api/auth/register`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 201 Created)**:",
            "**حالات الخطأ (Error Cases)**:",
            "`400 Bad Request`: بيانات مفقودة، كلمة المرور أقل من 6 أحرف، أو قيمة الجنس غير صحيحة.",
            "`409 Conflict`:",
            "البريد الإلكتروني مسجل ومفعل مسبقاً (`\"البريد الإلكتروني مسجل ومفعل مسبقاً، يرجى تسجيل الدخول\"`).",
            "البريد مسجل ولكنه غير مفعل (`requiresVerification: true`).",
            "`500 Internal Server Error`: فشل إنشاء الحساب في قاعدة البيانات.",
            "**المنطق الخاص (Special Logic)**:",
            "يقتصر هذا المسار على أدوار `student` و `parent` فقط.",
            "أولياء الأمور يتم إعطاؤهم الوصول التلقائي لـ `academy` فقط (`has_academy_access = true`, `has_quran_access = false`).",
            "توليد رمز كود تحقق مكون من 6 أرقام عشوائية بصلاحية 24 ساعة وحفظه في `verification_code` و `verification_expires_at`."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 201 Created)**:",
            "**Error Cases**:",
            "`400 Bad Request`: Missing fields, password shorter than 6 characters, or invalid gender value.",
            "`409 Conflict`:",
            "Email already registered and verified (`\"البريد الإلكتروني مسجل ومفعل مسبقاً، يرجى تسجيل الدخول\"`).",
            "Email registered but not verified (`requiresVerification: true`).",
            "`500 Internal Server Error`: Failed to create account in database.",
            "**Special Logic**:",
            "Route restricted to `student` and `parent` roles only.",
            "Parents automatically granted access to `academy` only (`has_academy_access = true`, `has_quran_access = false`).",
            "Generates random 6-digit verification code valid for 24 hours, stored in `verification_code` and `verification_expires_at`."
          ]
        }
      },
      {
        "id": "3-post-api-auth-logout-",
        "title": {
          "ar": "3. `POST /api/auth/logout`",
          "en": "3. `POST /api/auth/logout`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 200 OK)**:",
            "مسح سجل الجلسة من جدول `user_sessions` المستند على التوكن الحالية.",
            "تفريغ Cookie الـ `auth-token` وتعيين `maxAge: 0`."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 200 OK)**:",
            "Removes session record from `user_sessions` table based on current token.",
            "Clears `auth-token` Cookie and sets `maxAge: 0`."
          ]
        }
      },
      {
        "id": "4-get-patch-api-auth-me-",
        "title": {
          "ar": "4. `GET` & `PATCH /api/auth/me`",
          "en": "4. `GET` & `PATCH /api/auth/me`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "`GET`: جلب بيانات الملف الشخصي الكاملة للمستخدم الحاضر بجلسته (بما في ذلك حالة الطلاب، وتفاصيل المقرئين إن وجدوا).",
            "`PATCH`: تحديث بيانات الملف الشخصي (الاسم، الصورة، الجوال، المدينة، التفضيلات، وإعدادات الجاهزية للمقرئين).",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Response Body لـ GET (حالة النجاح - HTTP 200 OK)**:",
            "**تفاصيل الـ Request Body لـ PATCH**:",
            "**تفاصيل الـ Response Body لـ PATCH (حالة النجاح - HTTP 200 OK)**:",
            "**حالات الخطأ (Error Cases)**:",
            "`401 Unauthorized`: غير مسجل دخول أو التوكن غير صالحة.",
            "`404 Not Found`: المستخدم غير موجود بقاعدة البيانات.",
            "`400 Bad Request`: عدم إرسال أي حقل للتحديث في طلب PATCH.",
            "`500 Internal Server Error`: خطأ في الخادم."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetches full profile data for current session user (including student status and reciter details if applicable).",
            "`PATCH`: Updates profile data (name, avatar, phone, city, preferences, and reciter availability settings).",
            "**Allowed Roles**:",
            "**Response Body Details for GET (Success - HTTP 200 OK)**:",
            "**Request Body Details for PATCH**:",
            "**Response Body Details for PATCH (Success - HTTP 200 OK)**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in or invalid token.",
            "`404 Not Found`: User does not exist in database.",
            "`400 Bad Request`: No fields provided for update in PATCH request.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "5-get-api-auth-status-",
        "title": {
          "ar": "5. `GET /api/auth/status`",
          "en": "5. `GET /api/auth/status`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Response Body (في حال عدم تسجيل الدخول)**:",
            "**تفاصيل الـ Response Body (في حال تسجيل الدخول - HTTP 200 OK)**:"
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Response Body Details (Unauthenticated)**:",
            "**Response Body Details (Authenticated - HTTP 200 OK)**:"
          ]
        }
      },
      {
        "id": "6-post-api-auth-verify-",
        "title": {
          "ar": "6. `POST /api/auth/verify`",
          "en": "6. `POST /api/auth/verify`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 200 OK)**:",
            "**حالات الخطأ (Error Cases)**:",
            "`400 Bad Request`:",
            "البريد الإلكتروني أو كود التحقق مفقود.",
            "الحساب مفعل بالفعل.",
            "كود التحقق غير صحيح.",
            "كود التحقق منتهي الصلاحية.",
            "`404 Not Found`: المستخدم غير موجود.",
            "**المنطق الخاص (Special Logic - QA Bypass)**:",
            "يتضمن المسار دعم كود تجاوز مخصص للاختبارات التلقائية (QA Bypass Code) عبر الدالة `isQaBypassCode(user.email, code)`، مما يتيح للأدوات مثل (Playwright و TestSprite) إكمال التفعيل في بيئات الاختبار بدون انتظار الرسائل الفعلية."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 200 OK)**:",
            "**Error Cases**:",
            "`400 Bad Request`:",
            "Missing email or verification code.",
            "Account is already verified.",
            "Incorrect verification code.",
            "Verification code expired.",
            "`404 Not Found`: User not found.",
            "**Special Logic (QA Bypass)**:",
            "Route includes QA Bypass Code support via `isQaBypassCode(user.email, code)`, allowing automated testing tools (such as Playwright and TestSprite) to complete activation in test environments without waiting for actual emails."
          ]
        }
      },
      {
        "id": "7-post-api-auth-forgot-password-",
        "title": {
          "ar": "7. `POST /api/auth/forgot-password`",
          "en": "7. `POST /api/auth/forgot-password`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 200 OK)**:",
            "**حالات الخطأ (Error Cases)**:",
            "`400 Bad Request`: البريد الإلكتروني مطلوب.",
            "`404 Not Found`:"
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 200 OK)**:",
            "**Error Cases**:",
            "`400 Bad Request`: Email is required.",
            "`404 Not Found`:"
          ]
        }
      },
      {
        "id": "8-post-api-auth-reset-password-",
        "title": {
          "ar": "8. `POST /api/auth/reset-password`",
          "en": "8. `POST /api/auth/reset-password`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 200 OK)**:",
            "**حالات الخطأ (Error Cases)**:",
            "`400 Bad Request`:",
            "جميع الحقول مطلوبة.",
            "كلمة المرور أقل من 6 أحرف.",
            "كود التحقق غير صحيح أو غير صالح.",
            "كود التحقق منتهي الصلاحية.",
            "`404 Not Found`: المستخدم غير موجود."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 200 OK)**:",
            "**Error Cases**:",
            "`400 Bad Request`:",
            "All fields are required.",
            "Password shorter than 6 characters.",
            "Verification code is invalid or incorrect.",
            "Verification code expired.",
            "`404 Not Found`: User not found."
          ]
        }
      },
      {
        "id": "9-post-api-auth-reader-register-",
        "title": {
          "ar": "9. `POST /api/auth/reader-register`",
          "en": "9. `POST /api/auth/reader-register`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 201 Created)**:",
            "**حالات الخطأ (Error Cases)**:",
            "`400 Bad Request`: حقول إجبارية مفقودة، كلمة المرور أقل من 6 أحرف، أو قيمة الجنس خاطئة.",
            "`409 Conflict`: البريد الإلكتروني مسجل مسبقاً (`\"البريد الإلكتروني مسجل مسبقاً\"`).",
            "`500 Internal Server Error`: حدث خطأ أثناء إنشاء الحساب أو الملف الشخصي.",
            "**المنطق الخاص والاختلاف عن التسجيل العادي (Special Logic)**:",
            "**عدم تسجيل الدخول التلقائي**: لا يتم إنشاء JWT Token ولا يتم تثبيت أي كوكيز مصادقة.",
            "إنشاء المستخدم في جدول `users` بحيث يكون الدور `role = 'reader'` وحالة الاعتماد `approval_status = 'pending_approval'`.",
            "إنشاء سجل موازٍ في جدول `reader_profiles` لحفظ البيانات المهنية (الاسم الثلاثي، رقم الهاتف، المدينة، الجنسية، المؤهل العلمي، عدد الأجزاء المحفوظة وسنوات الخبرة).",
            "إرسال إشعار فوري لجميع المدراء والأدمن عبر النظام (`createNotificationForAdmins`) يتضمن رابط مراجعة طلبات المقرئين (`/admin/reader-applications`)."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 201 Created)**:",
            "**Error Cases**:",
            "`400 Bad Request`: Missing mandatory fields, password under 6 characters, or invalid gender.",
            "`409 Conflict`: Email already registered (`\"البريد الإلكتروني مسجل مسبقاً\"`).",
            "`500 Internal Server Error`: Error occurred while creating account or profile.",
            "**Special Logic & Differences from Standard Registration**:",
            "**No Automatic Login**: No JWT Token is generated and no authentication cookies are set.",
            "Creates user in `users` table with `role = 'reader'` and `approval_status = 'pending_approval'`.",
            "Creates corresponding record in `reader_profiles` table to store professional details (full name, phone, city, nationality, qualification, memorized Juz, years of experience).",
            "Sends instant system notification to all admins (`createNotificationForAdmins`) including link to review reciter applications (`/admin/reader-applications`)."
          ]
        }
      },
      {
        "id": "10-post-api-auth-teacher-register-",
        "title": {
          "ar": "10. `POST /api/auth/teacher-register`",
          "en": "10. `POST /api/auth/teacher-register`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 201 Created)**:",
            "**حالات الخطأ (Error Cases)**:",
            "`400 Bad Request`: جميع الحقول الإلزامية مطلوبة، كلمة المرور أقل من 6 أحرف، أو الجنس غير صحيح.",
            "`409 Conflict`: البريد الإلكتروني مسجل مسبقاً بصفة نشطة أو قيد المراجعة (`\"البريد الإلكتروني مسجل مسبقاً\"`).",
            "`500 Internal Server Error`: حدث خطأ أثناء إنشاء الحساب بالخادم.",
            "**المنطق الخاص والاختلاف عن التسجيل العادي (Special Logic)**:",
            "**معالجة طلبات المعلمين المرفوضة مسبقاً (Re-submission for Rejected Teachers)**: في حال كان البريد مسجلاً مسبقاً والحساب حالته مرفوضة (`approval_status === 'rejected'`)، يتعامل المسار معها كطلب جديد، حيث يتم تحديث بيانات المستخدم وكلمة المرور وتغيير حالته إلى `pending_approval` وزيادة عداد الرفض `rejection_count` وتحديث بيانات الطلب بجدول `teacher_applications`.",
            "للمعلمين الجدد: يتم إنشاء الحساب بدور `teacher` مع `approval_status = 'pending_approval'`, صلاحية أوتوماتيكية للأكاديمية (`has_academy_access = true`), وإنشاء سجل في جدول `teacher_applications` يحتوي على المؤهلات بصيغة JSON.",
            "إرسال إشعار فوري لإدارة الأكاديمية (`createNotificationForAdmins`) يتضمن رابط مراجعة طلبات المعلمين (`/academy/admin/teacher-applications`)."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 201 Created)**:",
            "**Error Cases**:",
            "`400 Bad Request`: Mandatory fields required, password under 6 characters, or invalid gender.",
            "`409 Conflict`: Email already registered under active or pending status (`\"البريد الإلكتروني مسجل مسبقاً\"`).",
            "`500 Internal Server Error`: Error occurred while creating server account.",
            "**Special Logic & Differences from Standard Registration**:",
            "**Handling Previously Rejected Teacher Applications (Re-submission for Rejected Teachers)**: If email is already registered and status is rejected (`approval_status === 'rejected'`), the route handles it as a new submission: updates user data and password, resets status to `pending_approval`, increments `rejection_count`, and updates application record in `teacher_applications`.",
            "For new teachers: Creates account with role `teacher`, `approval_status = 'pending_approval'`, automatic access to academy (`has_academy_access = true`), and creates a record in `teacher_applications` containing qualifications in JSON format.",
            "Sends instant notification to academy management (`createNotificationForAdmins`) with link to review teacher applications (`/academy/admin/teacher-applications`)."
          ]
        }
      },
      {
        "id": "11-post-api-auth-reapply-",
        "title": {
          "ar": "11. `POST /api/auth/reapply`",
          "en": "11. `POST /api/auth/reapply`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 200 OK)**:",
            "**حالات الخطأ والمنطق الخاص (Error Cases & Special Logic)**:",
            "`401 Unauthorized`: غير مسجل دخول.",
            "`404 Not Found`: المستخدم غير موجود.",
            "`400 Bad Request`: لا يمكن إعادة التقديم لأن حالة الحساب ليست مرفوضة (`approval_status !== 'rejected'`).",
            "`403 Forbidden` (حظر الإدارة من إعادة التقديم): إذا قام الأدمن بضبط حقل `reapply_blocked = TRUE` في جدول المستخدمين، يمنع المستخدم تماماً من إعادة التقديم مع إرجاع الرسالة:",
            "عند نجاح الطلب: يتم تحديث `approval_status` إلى `pending_approval` في جدول `users` وإعادة ضبط حالة الطلب بجدول `teacher_applications` إن كان معلماً إلى `status = 'pending'`."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 200 OK)**:",
            "**Error Cases & Special Logic**:",
            "`401 Unauthorized`: Not logged in.",
            "`404 Not Found`: User not found.",
            "`400 Bad Request`: Cannot reapply because account status is not rejected (`approval_status !== 'rejected'`).",
            "`403 Forbidden` (Admin Reapplication Block): If admin has set `reapply_blocked = TRUE` in users table, blocks user from reapplying and returns message:",
            "On success: Updates `approval_status` to `pending_approval` in `users` table and resets application status in `teacher_applications` to `status = 'pending'` if applicant is a teacher."
          ]
        }
      },
      {
        "id": "12-post-api-auth-change-password-",
        "title": {
          "ar": "12. `POST /api/auth/change-password`",
          "en": "12. `POST /api/auth/change-password`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**:",
            "**الأدوار المسموح لها بالوصول**:",
            "**تفاصيل الـ Request Body**:",
            "**تفاصيل الـ Response Body (حالة النجاح - HTTP 200 OK)**:",
            "تحديث `password_hash` بـ bcrypt hash جديد في جدول `users`.",
            "تعيين `must_change_password = false` وتحديث `password_changed_at = NOW()`.",
            "**إبطال الجلسات**: حذف كافة الجلسات السابقة للمستخدم من جدولي `user_sessions` و `refresh_tokens`.",
            "حذف الكوكيز الخاصة بالجلسة (`auth-token` و `better-auth.session_token`).",
            "**حالات الخطأ (Error Cases)**:",
            "`401 Unauthorized`: غير مسجل دخول.",
            "`400 Bad Request`:",
            "حقول مفقودة (`currentPassword` أو `newPassword`).",
            "كلمة المرور الجديدة أقل من 8 أحرف.",
            "كلمة المرور الحالية غير صحيحة.",
            "`404 Not Found`: المستخدم غير موجود."
          ],
          "en": [
            "**Purpose**:",
            "**Allowed Roles**:",
            "**Request Body Details**:",
            "**Response Body Details (Success - HTTP 200 OK)**:",
            "Updates `password_hash` with new bcrypt hash in `users` table.",
            "Sets `must_change_password = false` and updates `password_changed_at = NOW()`.",
            "**Session Revocation**: Deletes all previous user sessions from `user_sessions` and `refresh_tokens` tables.",
            "Removes session cookies (`auth-token` and `better-auth.session_token`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in.",
            "`400 Bad Request`:",
            "Missing fields (`currentPassword` or `newPassword`).",
            "New password under 8 characters.",
            "Incorrect current password.",
            "`404 Not Found`: User not found."
          ]
        }
      }
    ]
  },
  {
    "slug": "public-pages",
    "group": "start",
    "icon": "start",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "الصفحات العامة للمقرأة والأكاديمية",
      "en": "Public Pages & Portals"
    },
    "description": {
      "ar": "توثيق الصفحات العامة، تصفح الكتالوج، التعريف، والصفحات التعريفية.",
      "en": "Documentation for public landing pages, catalogs, and open portals."
    },
    "audience": {
      "ar": "الزوار وأصحاب الحسابات",
      "en": "Visitors and all account holders"
    },
    "keywords": {
      "ar": [
        "الصفحات العامة للمقرأة والأكاديمية",
        "توثيق الصفحات العامة، تصفح الكتالوج، التعريف، والصفحات التعريفية.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Public Pages & Portals",
        "Documentation for public landing pages, catalogs, and open portals.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/",
      "/about",
      "/faq",
      "/contact"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يغطي هذا القسم التوثيق التفصيلي الشامل للصفحات العامة بالمنصة والتي يستطيع أي زائر أو مستخدم الوصول إليها مباشرة دون الحاجة لتسجيل الدخول، موضحاً الغرض من كل صفحة، المحتوى الذي تعرضه بالتفصيل، والنماذج (Forms) ونقاط الاتصال البرمجية (API Endpoints) التي تتفاعل معها. ---",
          "en": "This section provides comprehensive detailed documentation for public platform pages accessible directly by any visitor or user without requiring authentication, describing each page's purpose, detailed content, forms, and interacted API endpoints. ---"
        },
        "steps": {
          "ar": [
            "يغطي هذا القسم التوثيق التفصيلي الشامل للصفحات العامة بالمنصة والتي يستطيع أي زائر أو مستخدم الوصول إليها مباشرة دون الحاجة لتسجيل الدخول، موضحاً الغرض من كل صفحة، المحتوى الذي تعرضه بالتفصيل، والنماذج (Forms) ونقاط الاتصال البرمجية (API Endpoints) التي تتفاعل معها. ---"
          ],
          "en": [
            "This section provides comprehensive detailed documentation for public platform pages accessible directly by any visitor or user without requiring authentication, describing each page's purpose, detailed content, forms, and interacted API endpoints. ---"
          ]
        }
      },
      {
        "id": "1-الصفحة-الرئيسية-landing-page-",
        "title": {
          "ar": "1. `/` (الصفحة الرئيسية / Landing Page)",
          "en": "1. `/` (Home Page / Landing Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "**المحتوى الذي تعرضه**:",
            "**الهيدر التفاعلي الموحد (`HomepageHeader`)**:",
            "شعار المنصة، روابط التصفح السريع، زر تبديل اللغة (عربي / إنجليزي)، زر التبديل بين الوضع المظلم والمضيء (Dark/Light Mode)، ورابط التوجيه الذكي إلى لوحة التحكم أو صفحة تسجيل الدخول حسب حالة الجلسة.",
            "**قسم الترحيب والهبوط الرئيسي (Hero Section)**:",
            "البسملة الشريفة والآية القرآنية الكريمة، العنوان الرئيسي والفرعي للمبادرة، ونصوص وصفية جذابة.",
            "أزرار الدعوة للعمل (CTA): زر \"ابدأ الآن\" الموجه لصفحة التسجيل `/register` وزر \"كيف نعمل\" الذي ينقل الزائر بسلاسة لقسم شرح خطوات التعلم.",
            "عناصر زخرفية إسلامية تفاعلية تتضمن النجوم الثمانية والأقواس والأشكال الهندسية المتكيفة مع المظهر المظلم والمضيء.",
            "**ركيزتا المنصة (The Two Pillars)**:",
            "**الأكاديمية العلمية**: تستعرض المسارات العلمية الأكاديمية (الفقه، العقيدة، الحديث، التجويد) وتتيح الانتقال المباشر لصفحة الأكاديمية.",
            "**المقرأة القرآنية**: تستعرض خدمات تسميع وتصحيح قراءة سورة الفاتحة والقرآن الكريم مع المقرئين والمعلمين المعتمدين.",
            "**قسم مميزات المنصة (Features Section)**:",
            "بطاقات تفاعلية وشبكية (Bento Grid) تشرح مميزات التعلم (معلمون معتمدون، مرونة المواعيد، متابعة الأبناء، شهادات الإتقان، وتقارير الأداء).",
            "**عداد الإحصائيات (Live Stats Counter)**:",
            "عداد حي يعرض أرقام الإنجازات (عدد الطلاب المتقنين، الجلسات المنفذة، الكورسات والختمات).",
            "**شريط آراء الطلاب والمستفيدين (Testimonials Marquee)**:",
            "شريط متصل ومتحرك يعرض آراء وتقييمات الطلاب وأولياء الأمور بالمنصة مع عدد النجوم والتقييم.",
            "**تذييل الصفحة (`HomepageFooter`)**:",
            "روابط سريعة لجميع الصفحات العامة وسياسات المنصة ومعلومات التواصل الرسمية.",
            "**الـ Forms والـ API Endpoints المستدعاة**:",
            "**Forms**: لا توجد مدخلات نماذج مباشرة في الصفحة الرئيسية سوى أزرار التوجيه والروابط.",
            "**API Endpoints**:",
            "`GET /api/homepage`: جلب إعدادات ومحتويات الصفحة الرئيسية الديناميكية المحددة من قبل الإدارة (العناوين، النصوص، الألوان، حالة ونصوص وضع الصيانة الصريحة أو الشريطية).",
            "`GET /api/public/stats`: جلب الإحصائيات الحية للمنصة (مثل عدد الطلاب المتقنين `masteredStudents`).",
            "`GET /api/auth/status`: فحص حالة جلسة المستخدم لتعديل زر الدخول بالهيدر إلى رابط لوحة التحكم المناسبة بدور المستخدم."
          ],
          "en": [
            "**Purpose**:",
            "**Content Displayed**:",
            "**Unified Interactive Header (`HomepageHeader`)**:",
            "Platform logo, quick navigation links, language toggle button (Arabic / English), Dark/Light mode toggle button, and smart navigation link to dashboard or login page based on session state.",
            "**Hero Section**:",
            "Basmala, Quranic verse, main and sub-headings for the initiative, and engaging descriptive text.",
            "Call to Action (CTA) buttons: \"Start Now\" button pointing to registration page `/register`, and \"How We Work\" button smooth-scrolling to learning workflow section.",
            "Interactive Islamic decorative elements including octagrams, arches, and geometric patterns adaptive to dark and light themes.",
            "**The Two Pillars**:",
            "**Islamic Science Academy**: Showcases academic tracks (Fiqh, Aqidah, Hadith, Tajweed) with direct navigation to Academy page.",
            "**Quranic Maqraa**: Showcases recitation testing and correction services for Surah Al-Fatiha and Holy Quran with certified reciters and teachers.",
            "**Features Section**:",
            "Interactive Bento Grid cards explaining learning features (certified teachers, flexible scheduling, child tracking, mastery certificates, performance reports).",
            "**Live Stats Counter**:",
            "Real-time counter displaying achievement metrics (number of mastered students, completed sessions, courses, and Khatmas).",
            "**Testimonials Marquee**:",
            "Continuous animated marquee displaying student and parent feedback/ratings with star ratings.",
            "**Page Footer (`HomepageFooter`)**:",
            "Quick links to all public pages, platform policies, and official contact info.",
            "**Forms & Called API Endpoints**:",
            "**Forms**: No direct form inputs on homepage except navigation buttons and links.",
            "**API Endpoints**:",
            "`GET /api/homepage`: Fetches dynamic homepage settings and content configured by management (titles, texts, colors, maintenance mode status/banners).",
            "`GET /api/public/stats`: Fetches live platform statistics (such as number of mastered students `masteredStudents`).",
            "`GET /api/auth/status`: Checks user session status to adjust header action button to role-specific dashboard link."
          ]
        }
      },
      {
        "id": "2-about-صفحة-من-نحن-",
        "title": {
          "ar": "2. `/about` (صفحة من نحن)",
          "en": "2. `/about` (About Us Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "**المحتوى الذي تعرضه**:",
            "تعتمد الصفحات الاستاتيكية الديناميكية في المنصة على المكون Reusable `<StaticPage slug=\"about\" />`.",
            "**هيدر الصفحة**: يعرض أيقونة كتاب مفتوح مع عنوان الصفحة الرئيسي ومؤشر تاريخ آخر تحديث للنص.",
            "**جسم الصفحة (Content Body)**:",
            "نصوص محصورة داخل بطاقة مصممة بنمط إسلامي أنيق، ويتم رندر المحتوى بصيغة **Markdown / GitHub Flavored Markdown (GFM)**.",
            "تتضمن محاور من نحن: نبذة عن المبادرة، الرسالة، الرؤية المستقبيلية، الأهداف التعليمية، والنهج الشرعي في تحفيظ القرآن وتدريس العلوم الإسلامية.",
            "**الـ Forms والـ API Endpoints المستدعاة**:",
            "**Forms**: لا توجد نماذج مدخلات في هذه الصفحة.",
            "**API Endpoints**:",
            "`GET /api/content-pages/about`: جلب عنوان ومحتوى الصفحة وميتا داتا الوصف باللغتين العربية والإنجليزية وتاريخ التحديث من جدول `content_pages` في قاعدة البيانات عبر مكتبة SWR."
          ],
          "en": [
            "**Purpose**:",
            "**Content Displayed**:",
            "Dynamic static pages rely on the reusable component `<StaticPage slug=\"about\" />`.",
            "**Page Header**: Displays open book icon, main page title, and last text update indicator.",
            "**Content Body**:",
            "Text enclosed inside an elegantly styled Islamic card, rendering content using **Markdown / GitHub Flavored Markdown (GFM)**.",
            "Topics include: Initiative overview, mission, future vision, educational goals, and Islamic methodology in Quran memorization and Islamic science education.",
            "**Forms & Called API Endpoints**:",
            "**Forms**: No input forms on this page.",
            "**API Endpoints**:",
            "`GET /api/content-pages/about`: Fetches page title, content, metadata description in Arabic/English, and update date from `content_pages` database table via SWR."
          ]
        }
      },
      {
        "id": "3-contact-صفحة-تواصل-معنا-",
        "title": {
          "ar": "3. `/contact` (صفحة تواصل معنا)",
          "en": "3. `/contact` (Contact Us Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "**المحتوى الذي تعرضه**:",
            "**قسم معلومات الاتصال المباشرة**:",
            "بطاقات تفاعلية تعرض: البريد الإلكتروني الرسمي (`email`)، رقم الجوال/الواتساب المباشر (`phone`)، والعنوان الجغرافي (`address`).",
            "**نموذج إرسال الرسائل (`Contact Form`)**:",
            "نموذج يحتوي حقول إدخال الاسم، البريد، موضوع الرسالة، ونص الرسالة بالتفصيل.",
            "**واجهة التأكيد والنجاح**:",
            "عند النجاح في إرسال النموذج، تتغير الواجهة لإظهار علامة صح ورسالة تأكيد استلام الرسالة، مع خيار إرسال رسالة أخرى، ورابط خاص بمدراء المنصة (`Admin`) للانتقال المباشر إلى لوحة إدارة الإشعارات والرسائل (`/admin/notifications`).",
            "**الـ Forms والـ API Endpoints المستدعاة**:",
            "**Form التواصل (`handleSubmit`)**:",
            "`name`: اسم مرسل الرسالة (string, required).",
            "`email`: البريد الإلكتروني للمراسل (string, required, format: email, dir: ltr).",
            "`subject`: موضوع الاستفسار أو الرسالة (string, required).",
            "`message`: نص الرسالة بالتفصيل (string/textarea, required).",
            "**API Endpoints**:",
            "`POST /api/contact`: إرسال بيانات الرسالة للخادم، حفظها في جدول `contact_messages` بقاعدة البيانات، وإشعارات الإدارة.",
            "`GET /api/public-settings`: جلب معلومات الاتصال الرسمية للمنصة (البريد الإلكتروني، الجوال، العنوان) المعتمدة من الإدارة.",
            "`GET /api/auth/me`: فحص دور المستخدم الحالي لإظهار زر الوصول إلى لوحة الإشعارات الإدارية للمدراء."
          ],
          "en": [
            "**Purpose**:",
            "**Content Displayed**:",
            "**Direct Contact Information Section**:",
            "Interactive cards displaying: Official email (`email`), direct phone/WhatsApp number (`phone`), and physical address (`address`).",
            "**Message Submission Form (`Contact Form`)**:",
            "Form containing inputs for name, email, subject, and detailed message body.",
            "**Success & Confirmation Interface**:",
            "On successful submission, interface updates to show a checkmark and receipt confirmation message, with an option to send another message and an admin-only link (`Admin`) to navigate directly to the notification and message management dashboard (`/admin/notifications`).",
            "**Forms & Called API Endpoints**:",
            "**Contact Form (`handleSubmit`)**:",
            "`name`: Sender's name (string, required).",
            "`email`: Sender's email address (string, required, format: email, dir: ltr).",
            "`subject`: Inquiry subject (string, required).",
            "`message`: Detailed message text (string/textarea, required).",
            "**API Endpoints**:",
            "`POST /api/contact`: Sends message data to server, stores it in `contact_messages` database table, and notifies management.",
            "`GET /api/public-settings`: Fetches official platform contact details (email, phone, address) approved by management.",
            "`GET /api/auth/me`: Checks current user role to show administrative notifications dashboard button for admins."
          ]
        }
      },
      {
        "id": "4-faq-صفحة-الأسئلة-الشائعة-",
        "title": {
          "ar": "4. `/faq` (صفحة الأسئلة الشائعة)",
          "en": "4. `/faq` (Frequently Asked Questions Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "**المحتوى الذي تعرضه**:",
            "تعتمد الصفحة على المكون الديناميكي `<StaticPage slug=\"faq\" />`.",
            "هيدر الصفحة وعنوانها وتاريخ التحديث.",
            "قائمة الأسئلة والإجابات المنسقة بعناية بترميز Markdown (تتضمن عناوين فرعية، نقاط مفسرة، وروابط توجيهية لصفحات التسجيل والدخول).",
            "**الـ Forms والـ API Endpoints المستدعاة**:",
            "**Forms**: لا توجد نماذج مدخلات في هذه الصفحة.",
            "**API Endpoints**:",
            "`GET /api/content-pages/faq`: جلب الأسئلة الشائعة والإجابات المعرفّة باللغتين العربية والإنجليزية وتاريخ تحديثها من جدول `content_pages`."
          ],
          "en": [
            "**Purpose**:",
            "**Content Displayed**:",
            "Uses the dynamic component `<StaticPage slug=\"faq\" />`.",
            "Page header, title, and last update date.",
            "List of carefully formatted Markdown questions and answers (including subheadings, bullet points, and directional links to registration and login pages).",
            "**Forms & Called API Endpoints**:",
            "**Forms**: No input forms on this page.",
            "**API Endpoints**:",
            "`GET /api/content-pages/faq`: Fetches defined FAQs and answers in Arabic and English along with last update date from `content_pages` table."
          ]
        }
      },
      {
        "id": "5-privacy-صفحة-سياسة-الخصوصية-",
        "title": {
          "ar": "5. `/privacy` (صفحة سياسة الخصوصية)",
          "en": "5. `/privacy` (Privacy Policy Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "**المحتوى الذي تعرضه**:",
            "تستخدم المكون الديناميكي `<StaticPage slug=\"privacy\" />`.",
            "تعرض وثيقة الخصوصية المنسقة بـ Markdown شاملاً البنود التالية:",
            "أنواع البيانات المعالجة (الاسم، البريد، التسجيلات الصوتية، الكوكيز، وعناوين IP).",
            "أغراض استخدام البيانات (تحسين الجودة، تقييم القراءة، وإصدار الشهادات).",
            "سرية وحماية تسجيلات التلاوات القرآنية وتأمين حسابات الأبناء وأولياء الأمور.",
            "حقوق المستخدم في تعديل أو طلب حذف بياناته الشخصية.",
            "**الـ Forms والـ API Endpoints المستدعاة**:",
            "**Forms**: لا توجد نماذج مدخلات في هذه الصفحة.",
            "**API Endpoints**:",
            "`GET /api/content-pages/privacy`: استرجاع نص وتحديثات وثيقة سياسة الخصوصية باللغة المحددة من جدول `content_pages`."
          ],
          "en": [
            "**Purpose**:",
            "**Content Displayed**:",
            "Uses dynamic component `<StaticPage slug=\"privacy\" />`.",
            "Displays Markdown formatted Privacy document covering:",
            "Processed data types (name, email, audio recordings, cookies, and IP addresses).",
            "Data usage purposes (quality assurance, recitation evaluation, certificate issuance).",
            "Confidentiality and security of Quranic recitation recordings and protection of child/parent accounts.",
            "User rights to edit or request deletion of personal data.",
            "**Forms & Called API Endpoints**:",
            "**Forms**: No input forms on this page.",
            "**API Endpoints**:",
            "`GET /api/content-pages/privacy`: Retrieves text and updates of Privacy policy document in selected language from `content_pages` table."
          ]
        }
      },
      {
        "id": "6-terms-صفحة-الشروط-والأحكام-",
        "title": {
          "ar": "6. `/terms` (صفحة الشروط والأحكام)",
          "en": "6. `/terms` (Terms & Conditions Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "**المحتوى الذي تعرضه**:",
            "تستخدم المكون الديناميكي `<StaticPage slug=\"terms\" />`.",
            "تعرض بنود الاتفاقية المنسقة بـ Markdown شاملاً:",
            "شروط وأخلاقيات الحضور والانضباط في الجلسات القرآنية والأكاديمية.",
            "التزامات المعلمين والمقرئين والطلاب.",
            "حقوق الملكية الفكرية للمحتوى التعليمي والمناهج والمواد المسجلة.",
            "سياسات إلغاء الحسابات والتصرف في حالات مخالفة قواعد وشروط المنصة.",
            "**الـ Forms والـ API Endpoints المستدعاة**:",
            "**Forms**: لا توجد نماذج مدخلات في هذه الصفحة.",
            "**API Endpoints**:",
            "`GET /api/content-pages/terms`: استرجاع نصوص الشروط والأحكام وتاريخ التعديل من جدول `content_pages` بقاعدة البيانات."
          ],
          "en": [
            "**Purpose**:",
            "**Content Displayed**:",
            "Uses dynamic component `<StaticPage slug=\"terms\" />`.",
            "Displays Markdown formatted agreement terms covering:",
            "Attendance ethics and discipline requirements in Quranic and academic sessions.",
            "Obligations of teachers, reciters, and students.",
            "Intellectual property rights for educational content, curricula, and recorded materials.",
            "Account termination policies and actions regarding platform terms violations.",
            "**Forms & Called API Endpoints**:",
            "**Forms**: No input forms on this page.",
            "**API Endpoints**:",
            "`GET /api/content-pages/terms`: Retrieves terms & conditions text and modification date from `content_pages` database table."
          ]
        }
      },
      {
        "id": "7-sitemap-page-صفحة-خريطة-الموقع-",
        "title": {
          "ar": "7. `/sitemap-page` (صفحة خريطة الموقع)",
          "en": "7. `/sitemap-page` (Sitemap Page)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "**المحتوى الذي تعرضه**:",
            "**أقسام الخريطة المنظمة (Sitemap Sections)**:",
            "**الصفحات العامة (Globe)**: تضم روابط (`/`, `/about`, `/contact`).",
            "**صفحات المصادقة (Shield)**: تضم روابط (`/login`, `/register`, `/reset-password`).",
            "**لوحة الطالب (Users)**: تضم روابط (`/student`, `/student/submit`, `/student/recitations`, `/student/booking`, `/student/sessions`, `/student/notifications`, `/student/profile`).",
            "**لوحة القارئ (BookOpen)**: تضم روابط (`/reader`, `/reader/recitations`, `/reader/schedule`, `/reader/sessions`, `/reader/chat`, `/reader/profile`).",
            "**لوحة المدير (Shield)**: تضم روابط (`/admin`, `/admin/users`, `/admin/recitations`, `/admin/settings`, `/admin/reports`).",
            "كل عنصر في القائمة يحتوي على: اسم الصفحة، وصف مختصر لدورها، المسار البرمجي المباشر (`href`)، وأيقونة تعبيرية.",
            "**ملخص الخريطة الإحصائي (Summary Card)**: يعرض إجمالي عدد الأقسام بالمنصة، إجمالي عدد الصفحات المتاحة، وعدد الأدوار الرئيسية.",
            "**الـ Forms والـ API Endpoints المستدعاة**:",
            "**Forms**: لا توجد نماذج مدخلات في هذه الصفحة.",
            "**API Endpoints**: لا تستدعي APIs خارجية بل تتفاعل محلياً مع سياق التدويل واللغات `useI18n`."
          ],
          "en": [
            "**Purpose**:",
            "**Displayed Content**:",
            "**Organized Sitemap Sections**:",
            "**Public Pages (Globe)**: Includes links (`/`, `/about`, `/contact`).",
            "**Authentication Pages (Shield)**: Includes links (`/login`, `/register`, `/reset-password`).",
            "**Student Dashboard (Users)**: Includes links (`/student`, `/student/submit`, `/student/recitations`, `/student/booking`, `/student/sessions`, `/student/notifications`, `/student/profile`).",
            "**Reader Dashboard (BookOpen)**: Includes links (`/reader`, `/reader/recitations`, `/reader/schedule`, `/reader/sessions`, `/reader/chat`, `/reader/profile`).",
            "**Admin Dashboard (Shield)**: Includes links (`/admin`, `/admin/users`, `/admin/recitations`, `/admin/settings`, `/admin/reports`).",
            "Each item in the list contains: Page name, short description of its role, direct programming path (`href`), and an icon.",
            "**Statistical Summary Card**: Displays total number of platform sections, total number of available pages, and number of main roles.",
            "**Forms & Called API Endpoints**:",
            "**Forms**: No input forms on this page.",
            "**API Endpoints**: Does not call external APIs, but interacts locally with the internationalization context `useI18n`."
          ]
        }
      }
    ]
  },
  {
    "slug": "academy-admin",
    "group": "admin",
    "icon": "admin",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "لوحة إدارة الأكاديمية",
      "en": "Academy Admin Dashboard"
    },
    "description": {
      "ar": "إدارة الدورات والدروس والمعلمين والتسجيلات والأكاديمية بالكامل.",
      "en": "Comprehensive management for courses, lessons, teachers, and academy operations."
    },
    "audience": {
      "ar": "إدارة الأكاديمية والمدراء",
      "en": "Academy Administrators and Directors"
    },
    "keywords": {
      "ar": [
        "لوحة إدارة الأكاديمية",
        "إدارة الدورات والدروس والمعلمين والتسجيلات والأكاديمية بالكامل.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Academy Admin Dashboard",
        "Comprehensive management for courses, lessons, teachers, and academy operations.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/academy/admin"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحة التحكم الإدارية للأكاديمية التعليمية (`/academy/admin`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/admin/`). ---",
          "en": "This section provides comprehensive and detailed technical documentation for the Educational Academy Admin Dashboard (`/academy/admin`) and its associated API endpoints (`app/api/academy/admin/`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحة التحكم الإدارية للأكاديمية التعليمية (`/academy/admin`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/admin/`). ---"
          ],
          "en": [
            "This section provides comprehensive and detailed technical documentation for the Educational Academy Admin Dashboard (`/academy/admin`) and its associated API endpoints (`app/api/academy/admin/`). ---"
          ]
        }
      },
      {
        "id": "-academy-admin-",
        "title": {
          "ar": "`/academy/admin`",
          "en": "`/academy/admin`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: لوحة التحكم المركزية الرئيسية لإدارة كافة الشؤون الأكاديمية (الدورات، المعلمين، الطلاب، المسارات، الحلقات، المنتديات، المسابقات، النقاط والشهادات، وإعدادات النظام).",
            "**الأدوار المسموح لها بالوصول**: `academy_admin`, `admin` (مع صلاحيات جزئية للمشرفين مثل `student_supervisor`, `fiqh_supervisor`, `content_supervisor` حسب القسم).",
            "**المحتوى والتفاعل**:",
            "عرض المؤشرات الحيوية الرئيسية والإحصائيات والتحليلات الجغرافية والترتيب (Leaderboard).",
            "التبويب بين الأقسام الفرعية (إدارة الدورات، المسارات التعليمية، المكتبة، الفقه، المعلمون، طلبات التقديم، الجلسات، المسابقات، والإعدادات)."
          ],
          "en": [
            "**Purpose**: Main centralized control dashboard for managing all academic affairs (courses, teachers, students, paths, halaqat, forums, competitions, points and certificates, and system settings).",
            "**Allowed Roles**: `academy_admin`, `admin` (with partial permissions for supervisors like `student_supervisor`, `fiqh_supervisor`, `content_supervisor` depending on the section).",
            "**Content & Interaction**:",
            "Display key vital indicators, statistics, geographical analytics, and leaderboard ranking.",
            "Tabbed navigation between sub-sections (course management, learning paths, library, fiqh, teachers, applications, sessions, competitions, and settings)."
          ]
        }
      },
      {
        "id": "1-get-api-academy-admin-analytics-",
        "title": {
          "ar": "1. `GET /api/academy/admin/analytics`",
          "en": "1. `GET /api/academy/admin/analytics`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: جلب التحليلات والإحصائيات الأكاديمية الشاملة (أعداد الطلاب، المدرسين، أولياء الأمور، المقرئين، الدورات، الجلسات، المهام، الشهادات الصادرة، ونسب الحضور والتقدم والنشاط الجغرافي). يقتصر الاستخدام على أدوار `academy_admin` و `admin`.",
            "**Request Fields**: لا يوجد (Query Params غير مطلوبة).",
            "**Response Fields (HTTP 200 OK)**:",
            "`stats`: كائن يحتوي على: `totalStudents`, `totalTeachers`, `totalParents`, `totalReaders`, `totalAdmins`, `activeCourses`, `draftCourses`, `archivedCourses`, `totalEnrollments`, `activeEnrollments`, `completedEnrollments`, `totalLessons`, `totalSessions`, `upcomingSessions`, `completedSessions`, `totalTasks`, `completedTasks`, `overdueTasks`, `taskCompletionRate`, `attendancePresent`, `attendanceTotal`, `attendanceRate`, `completionRate`, `totalCertificates`, `weeklyEnrollments`, `monthlyEnrollments`, `dailyActiveStudents`, `weeklyActiveStudents`, `monthlyActiveStudents`, `dailyActivityRate`, `learningPaths`, `memorizationPaths`, `tajweedPaths`, `totalRecitations`, `totalBookings`, `totalBooks`, `totalBookFiles`, `forumPosts`, `communityMembers`.",
            "`enrollmentTrend`: اتجاهات التسجيل الشهرية لآخر 6 أشهر (`month`, `count`).",
            "`genderDistribution`: توزيع الطلاب حسب الجنس (`gender`, `count`).",
            "`topCourses`: أعلى 10 دورات تسجيلات (`title`, `enrollments`, `avg_progress`).",
            "`topTeachers`: أعلى 10 معلمين إنجازاً (`teacher_id`, `name`, `courses_count`, `students_count`).",
            "`topStudents`: أعلى 10 طلاب نقاطاً وإنجازاً.",
            "`studentsByCountry` & `geoHeatmap`: التوزيع الجغرافي للطلاب حسب الدول والمدن والمناطق.",
            "`dailyActivity`: النشاط اليومي لآخر 30 يوماً (`day`, `active_students`, `points`).",
            "`topSurahs`: السور الأكثر تسميعاً بالمقرأة للأكاديميين.",
            "`lastSignups`: أحدث 10 مستخدمين مسجلين بالمنصة.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول أو ليس أدمن.",
            "`500 Internal Server Error`: خطأ في قاعدة البيانات."
          ],
          "en": [
            "**Purpose & Who can use it**: Fetch comprehensive academic analytics and statistics (student, teacher, parent, reader, course, session, task counts, issued certificates, attendance, progress, and geographic activity rates). Restricted to `academy_admin` and `admin` roles.",
            "**Request Fields**: None (Query Params not required).",
            "**Response Fields (HTTP 200 OK)**:",
            "`stats`: Object containing: `totalStudents`, `totalTeachers`, `totalParents`, `totalReaders`, `totalAdmins`, `activeCourses`, `draftCourses`, `archivedCourses`, `totalEnrollments`, `activeEnrollments`, `completedEnrollments`, `totalLessons`, `totalSessions`, `upcomingSessions`, `completedSessions`, `totalTasks`, `completedTasks`, `overdueTasks`, `taskCompletionRate`, `attendancePresent`, `attendanceTotal`, `attendanceRate`, `completionRate`, `totalCertificates`, `weeklyEnrollments`, `monthlyEnrollments`, `dailyActiveStudents`, `weeklyActiveStudents`, `monthlyActiveStudents`, `dailyActivityRate`, `learningPaths`, `memorizationPaths`, `tajweedPaths`, `totalRecitations`, `totalBookings`, `totalBooks`, `totalBookFiles`, `forumPosts`, `communityMembers`.",
            "`enrollmentTrend`: Monthly enrollment trends for the last 6 months (`month`, `count`).",
            "`genderDistribution`: Student distribution by gender (`gender`, `count`).",
            "`topCourses`: Top 10 enrolled courses (`title`, `enrollments`, `avg_progress`).",
            "`topTeachers`: Top 10 performing teachers (`teacher_id`, `name`, `courses_count`, `students_count`).",
            "`topStudents`: Top 10 students by points and achievements.",
            "`studentsByCountry` & `geoHeatmap`: Student geographical distribution by country, city, and region.",
            "`dailyActivity`: Daily activity for the last 30 days (`day`, `active_students`, `points`).",
            "`topSurahs`: Most recited Surahs in the maqraa for academics.",
            "`lastSignups`: Latest 10 registered users on the platform.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in or not an admin.",
            "`500 Internal Server Error`: Database error."
          ]
        }
      },
      {
        "id": "2-get-api-academy-admin-analytics-export-",
        "title": {
          "ar": "2. `GET /api/academy/admin/analytics/export`",
          "en": "2. `GET /api/academy/admin/analytics/export`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: تصدير كافة بيانات وتحليلات الأكاديمية في ملف Excel تفاعلي (`.xlsx`) يحتوي على 7 صفحات عمل (ملخص، الطلاب، المدرسون، الدورات، الجلسات، التسجيلات، الدول) داعم للاتجاه من اليمين لليسار (RTL). المسموح: `academy_admin`, `admin`.",
            "**Request Fields**: لا يوجد.",
            "**Response Fields (HTTP 200 OK)**:",
            "Buffer لملف Excel مسمى بـ `academy-analytics-YYYY-MM-DD.xlsx` مع Headers لتنزيل الملف (`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`).",
            "**Side Effects**: تجميع كميات ضخمة من البيانات وإنشاء ملف Excel ديناميكياً.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`500 Internal Server Error`: خطأ في توليد الملف."
          ],
          "en": [
            "**Purpose & Who can use it**: Export all academy data and analytics into an interactive Excel file (`.xlsx`) containing 7 worksheets (Summary, Students, Teachers, Courses, Sessions, Enrollments, Countries) supporting Right-to-Left (RTL). Allowed: `academy_admin`, `admin`.",
            "**Request Fields**: None.",
            "**Response Fields (HTTP 200 OK)**:",
            "Excel file buffer named `academy-analytics-YYYY-MM-DD.xlsx` with download headers (`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`).",
            "**Side Effects**: Aggregating large amounts of data and generating an Excel file dynamically.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`500 Internal Server Error`: File generation error."
          ]
        }
      },
      {
        "id": "3-get-post-api-academy-admin-announcements-",
        "title": {
          "ar": "3. `GET` & `POST /api/academy/admin/announcements`",
          "en": "3. `GET` & `POST /api/academy/admin/announcements`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**:",
            "`GET`: جلب قائمة الإعلانات والتنبيهات الأكاديمية مرتبة من الأحدث للأقدم.",
            "`POST`: إنشاء إعلان أكاديمي جديد وتحديد الجمهور المستهدف والأولوية والنشر.",
            "المسموح: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**POST Response Body Fields (HTTP 201 Created)**:",
            "`data`: السجل المنشأ مع ملء الحقول الإنجليزية بالقيم العربية تلقائياً لتجنب قيود NOT NULL بالقواعد القديمة.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: العنوان أو النص مفقود (`Title and content required`).",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose & Who can use it**:",
            "`GET`: Fetch the list of academic announcements and alerts sorted from newest to oldest.",
            "`POST`: Create a new academic announcement, specifying target audience, priority, and publication status.",
            "Allowed: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**POST Response Body Fields (HTTP 201 Created)**:",
            "`data`: Created record automatically populating English fields with Arabic values to bypass legacy NOT NULL constraints.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Title or content missing (`Title and content required`).",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "4-get-api-academy-admin-archive-",
        "title": {
          "ar": "4. `GET /api/academy/admin/archive`",
          "en": "4. `GET /api/academy/admin/archive`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: عرض وتصفية كافة عناصر الأرشيف للأكاديمية (الدورات والحلقات المؤرشفة) مع أسباب الأرشفة واسم المدرس الأصلي ومن قام بالأرشفة. المسموح: `academy_admin`, `admin`.",
            "**Request Query Params**:",
            "`type`: `all` | `courses` | `halaqat` (default: `all`).",
            "`search`: نص للبحث في العناوين أو الوصف.",
            "`reason`: تصفية حسب سبب الأرشفة (مثلاً: `teacher_deleted`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة دمج الدورة/الحلقة مرتبة حسب تاريخ الأرشفة، بالإضافة إلى `counts` (`total`, `courses`, `halaqat`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose & Who can use it**: Display and filter all archive items for the academy (archived courses and halaqat) along with archive reasons, original teacher name, and archived by details. Allowed: `academy_admin`, `admin`.",
            "**Request Query Params**:",
            "`type`: `all` | `courses` | `halaqat` (default: `all`).",
            "`search`: Text to search in titles or description.",
            "`reason`: Filter by archive reason (e.g., `teacher_deleted`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Merged course/halaqa array sorted by archive date, plus `counts` (`total`, `courses`, `halaqat`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "5-get-post-api-academy-admin-badges-",
        "title": {
          "ar": "5. `GET` & `POST /api/academy/admin/badges`",
          "en": "5. `GET` & `POST /api/academy/admin/badges`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة تعريفات الأوسمة والشارات الأكاديمية (Badges Definitions). المسموح: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: الاسم أو `badge_type` مفقود، أو `badge_type` مكرر موجود مسبقاً (`Badge type already exists`).",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage badge and award definitions (Badges Definitions). Allowed: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Name or `badge_type` missing, or duplicate `badge_type` already exists (`Badge type already exists`).",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "6-get-post-api-academy-admin-categories-",
        "title": {
          "ar": "6. `GET` & `POST /api/academy/admin/categories`",
          "en": "6. `GET` & `POST /api/academy/admin/categories`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**:",
            "`GET`: جلب شجرة التصنيفات الأكاديمية مع إحصائيات الاستخدام الحية (عدد الدورات، الدروس، والدروس العامة) والتصنيف الأب. *استثناء*: يسمح لجميع المستخدمين المسجلين بقراءة القائمة الأساسية لاستخدامها في نماذج الكورسات، ولكن لا تُضاف الأعداد والإحصائيات الكثيفة إلا للأدمن.",
            "`POST`: إنشاء تصنيف أكاديمي جديد. المسموح: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: الاسم مفقود (`الاسم مطلوب`).",
            "`409 Conflict`: يوجد تصنيف آخر بنفس الاسم أو الـ slug (`يوجد تصنيف آخر بنفس الاسم/الرابط`)."
          ],
          "en": [
            "**Purpose & Who can use it**:",
            "`GET`: Fetch academic category tree with live usage statistics (course, lesson, and public lesson counts) and parent category. *Exception*: Allowed for all registered users to read the basic list for use in course forms, but heavy counts/statistics are added only for admins.",
            "`POST`: Create a new academic category. Allowed: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Name missing (`الاسم مطلوب`).",
            "`409 Conflict`: Another category with the same name or slug exists (`يوجد تصنيف آخر بنفس الاسم/الرابط`)."
          ]
        }
      },
      {
        "id": "7-get-api-academy-admin-certificates-",
        "title": {
          "ar": "7. `GET /api/academy/admin/certificates`",
          "en": "7. `GET /api/academy/admin/certificates`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: عرض وإدارة شهادات الأكاديمية الصادرة والطلبات عبر المسارين الفرعيين:",
            "`GET /api/academy/admin/certificates/issued`: عرض الشهادات الصادرة مع بيانات الطالب، الدورة، كود التحقق وتاريخ الإصدار.",
            "`GET /api/academy/admin/certificates/requests`: جلب طلبات إصدار الشهادات المعلقة من الطلاب للمراجعة والاعتماد.",
            "المسموح: `academy_admin`, `admin`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح."
          ],
          "en": [
            "**Purpose & Who can use it**: Display and manage issued academy certificates and requests via two sub-routes:",
            "`GET /api/academy/admin/certificates/issued`: Display issued certificates with student data, course, verification code, and issue date.",
            "`GET /api/academy/admin/certificates/requests`: Fetch pending certificate issuance requests from students for review and approval.",
            "Allowed: `academy_admin`, `admin`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized."
          ]
        }
      },
      {
        "id": "8-get-post-api-academy-admin-competitions-",
        "title": {
          "ar": "8. `GET` & `POST /api/academy/admin/competitions`",
          "en": "8. `GET` & `POST /api/academy/admin/competitions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: جلب وإنشاء المسابقات الأكاديمية. المسموح: `academy_admin`, `admin`, بالإضافة إلى مشرف الطلاب (`student_supervisor`).",
            "**POST Request Body Fields**:",
            "**Side Effects**: إنشاء جولات المسابقة التلقائية (`competition_stages`) في قاعدة البيانات.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: العنوان أو تواريخ البداية والنهاية مفقودة."
          ],
          "en": [
            "**Purpose & Who can use it**: Fetch and create academic competitions. Allowed: `academy_admin`, `admin`, as well as student supervisor (`student_supervisor`).",
            "**POST Request Body Fields**:",
            "**Side Effects**: Automatic creation of competition stages (`competition_stages`) in the database.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Title or start/end dates missing."
          ]
        }
      },
      {
        "id": "9-get-post-api-academy-admin-competitions-id-advance-",
        "title": {
          "ar": "9. `GET` & `POST /api/academy/admin/competitions/[id]/advance`",
          "en": "9. `GET` & `POST /api/academy/admin/competitions/[id]/advance`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**:",
            "`GET`: المعاينة المسبقة لنتائج الجولة الحالية وتصنيف الطلاب والقطع التأهيلي بدون التعديل على البيانات.",
            "`POST`: تنفيذ إجراءات المسابقة والجولات:",
            "`action = 'advance'`: تصعید الطلاب الأوائل للجولة التالية (أو الاعتماد إن كانت الجولة الأخيرة).",
            "`action = 'finalize_now'`: إنهاء المسابقة فوراً واعتماد الجولة الحالية كنتيجة نهائية وتوزيع الجوائز.",
            "`action = 'cancel'`: إلغاء المسابقة (بدون فائزين) وإشعار كافة المشاركين.",
            "المسموح: `academy_admin`, `admin`, `student_supervisor`.",
            "**Side Effects**: تحديث الجولات، إرسال إشعارات وتنبيهات للطلاب، وتوزيع النقاط والأوسمة للفائزين المعتمدين.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`404 Not Found`: المسابقة غير موجودة.",
            "`400 Bad Request`: فشل العملية لأسباب تتعلق بـ Tie الحسم أو حالة المسابقة."
          ],
          "en": [
            "**Purpose & Who can use it**:",
            "`GET`: Preview current stage results, student rankings, and qualifying cutoffs without mutating data.",
            "`POST`: Execute competition and stage actions:",
            "`action = 'advance'`: Advance top students to the next stage (or approve if final stage).",
            "`action = 'finalize_now'`: Finalize competition immediately, approve current stage as final result, and distribute prizes.",
            "`action = 'cancel'`: Cancel competition (without winners) and notify all participants.",
            "Allowed: `academy_admin`, `admin`, `student_supervisor`.",
            "**Side Effects**: Update stages, send notifications/alerts to students, and distribute points and badges to approved winners.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`404 Not Found`: Competition not found.",
            "`400 Bad Request`: Operation failed due to tie-breaker issues or competition status."
          ]
        }
      },
      {
        "id": "10-get-post-delete-api-academy-admin-competitions-id-judges-",
        "title": {
          "ar": "10. `GET`, `POST` & `DELETE /api/academy/admin/competitions/[id]/judges`",
          "en": "10. `GET`, `POST` & `DELETE /api/academy/admin/competitions/[id]/judges`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: عرض، تعيين، وإلغاء تعيين المحكمين والقضاة لمسابقة أكاديمية محددة. المسموح: `academy_admin`, `admin`, `student_supervisor`.",
            "**POST Request Body**: `{\"judge_id\": \"UUID (required)\"}`.",
            "**DELETE Query Param**: `?judge_id=UUID`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`404 Not Found`: المسابقة الأكاديمية غير موجودة (`scope = 'academy'`).",
            "`400 Bad Request`: `judge_id` مفقود."
          ],
          "en": [
            "**Purpose & Who can use it**: Display, assign, and unassign judges/arbitrators for a specific academic competition. Allowed: `academy_admin`, `admin`, `student_supervisor`.",
            "**POST Request Body**: `{\"judge_id\": \"UUID (required)\"}`.",
            "**DELETE Query Param**: `?judge_id=UUID`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`404 Not Found`: Academic competition not found (`scope = 'academy'`).",
            "`400 Bad Request`: `judge_id` missing."
          ]
        }
      },
      {
        "id": "11-get-post-api-academy-admin-courses-",
        "title": {
          "ar": "11. `GET` & `POST /api/academy/admin/courses`",
          "en": "11. `GET` & `POST /api/academy/admin/courses`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: عرض كافة دورات الأكاديمية وإنشاء دورة تعليمية جديدة وتعيين معلم لها. المسموح: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Side Effects & Special Logic**:",
            "يفحص المعلم المسند عبر `assertTeacherAssignable(teacher_id)` ويرفض إسناد الكورس لأي معلم حالته `pending` أو `rejected` أو معطل.",
            "يستعلم عن التخصص الأساسي للمعلم في `user_specializations` ويسجله في حقل `specialization` بالدورة تلقائياً.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: العنوان أو المعلم مفقود، أو المعلم غير مؤهل للإسناد."
          ],
          "en": [
            "**Purpose & Who can use it**: Display all academy courses, create a new course, and assign a teacher to it. Allowed: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Side Effects & Special Logic**:",
            "Validates assigned teacher via `assertTeacherAssignable(teacher_id)` and rejects assigning courses to any teacher whose status is `pending`, `rejected`, or disabled.",
            "Queries teacher's primary specialization from `user_specializations` and records it in the course's `specialization` field automatically.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Title or teacher missing, or teacher not eligible for assignment."
          ]
        }
      },
      {
        "id": "12-get-post-api-academy-admin-fiqh-",
        "title": {
          "ar": "12. `GET` & `POST /api/academy/admin/fiqh`",
          "en": "12. `GET` & `POST /api/academy/admin/fiqh`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة وإجابة ونشر أسئلة الفقه والفتوى بالأكاديمية.",
            "**استثناء في الأدوار**: يسمح بالوصول لـ `academy_admin`, `admin`, بالإضافة لمشرف الفقه `fiqh_supervisor` والمشرف العام `supervisor`.",
            "**GET Query Params**:",
            "`status`: `pending` | `answered` | `published` | `unpublished` | `awaiting_consent` | `closed` | `all`",
            "`category`: تصفية حسب قسم الفقه.",
            "`search`: بحث في نص السؤال أو الإجابة.",
            "**POST Request Body Fields**:",
            "**Response Extra**: يُرجع الـ GET تجميعة أعداد `counts` لكل تبويب بحسم استعلام واحد.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: السؤال مفقود."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage, answer, and publish fiqh and fatwa questions in the academy.",
            "**Role Exception**: Access allowed for `academy_admin`, `admin`, as well as fiqh supervisor (`fiqh_supervisor`) and general supervisor (`supervisor`).",
            "**GET Query Params**:",
            "`status`: `pending` | `answered` | `published` | `unpublished` | `awaiting_consent` | `closed` | `all`",
            "`category`: Filter by fiqh section.",
            "`search`: Search in question or answer text.",
            "**POST Request Body Fields**:",
            "**Response Extra**: GET returns aggregated `counts` for each tab in a single query.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Question missing."
          ]
        }
      },
      {
        "id": "13-get-api-academy-admin-forum-",
        "title": {
          "ar": "13. `GET /api/academy/admin/forum`",
          "en": "13. `GET /api/academy/admin/forum`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: تصفح ومراقبة جميع منشورات المنتدى الأكاديمي والردود والكاتب والتثبيت. المسموح: `academy_admin`, `admin`.",
            "**Query Params**: `?category=all|general|quran|fiqh|...`",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: التصنيف غير صحيح (`Invalid category`)."
          ],
          "en": [
            "**Purpose & Who can use it**: Browse and monitor all academy forum posts, replies, authors, and pinned items. Allowed: `academy_admin`, `admin`.",
            "**Query Params**: `?category=all|general|quran|fiqh|...`",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Invalid category (`Invalid category`)."
          ]
        }
      },
      {
        "id": "14-get-post-api-academy-admin-halaqat-",
        "title": {
          "ar": "14. `GET` & `POST /api/academy/admin/halaqat`",
          "en": "14. `GET` & `POST /api/academy/admin/halaqat`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة وتأسيس الحلقات التعليمية التابعة للأكاديمية (`platform = 'academy'`). المسموح: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Side Effects**: فحص جاهزية المعلم عبر `assertTeacherAssignable` إذا تم تمرير `teacher_id`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: الاسم مفقود أو المعلم غير مؤهل."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage and establish academy educational halaqat (`platform = 'academy'`). Allowed: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Side Effects**: Checks teacher readiness via `assertTeacherAssignable` if `teacher_id` is passed.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Name missing or teacher ineligible."
          ]
        }
      },
      {
        "id": "15-get-post-api-academy-admin-invitations-",
        "title": {
          "ar": "15. `GET` & `POST /api/academy/admin/invitations`",
          "en": "15. `GET` & `POST /api/academy/admin/invitations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة وإرسال الدعوات الرسمية للانضمام للأكاديمية عبر البريد الإلكتروني. المسموح: `academy_admin`, `admin`.",
            "**GET Response**: قائمة الدعوات مقسمة للصفحات مع تصفية الحالة والبحث وتحديث أوتوماتيكي للدعوات المنتهية الصلاحية (`status = 'EXPIRED'`).",
            "**POST Request Body**:",
            "دعوة فردية: `{\"email\": \"...\", \"role\": \"...\", \"plan_id\": \"...\", \"invited_name\": \"...\"}`",
            "دعوة جماعية (Batch): `{\"entries\": [{...}, {...}]}`",
            "**Side Effects**: إرسال إيميلات رسمية بـ Nodemailer متضمنة توكنات الرابط الفريد ورابط قبول الدعوة `academy/invite/[token]` وتأريخ انتهائها (7 أيام).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: الإيميل غير صالح أو توجد دعوة معلقة سابقة لنفس البريد."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage and send official academy joining invitations via email. Allowed: `academy_admin`, `admin`.",
            "**GET Response**: Paginated list of invitations with status filtering, search, and automatic update for expired invitations (`status = 'EXPIRED'`).",
            "**POST Request Body**:",
            "Individual invitation: `{\"email\": \"...\", \"role\": \"...\", \"plan_id\": \"...\", \"invited_name\": \"...\"}`",
            "Batch invitation: `{\"entries\": [{...}, {...}]}`",
            "**Side Effects**: Sends official emails via Nodemailer containing unique link tokens and invitation acceptance link `academy/invite/[token]` with expiration date (7 days).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Invalid email or existing pending invitation for the same email."
          ]
        }
      },
      {
        "id": "16-get-api-academy-admin-leaderboard-",
        "title": {
          "ar": "16. `GET /api/academy/admin/leaderboard`",
          "en": "16. `GET /api/academy/admin/leaderboard`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: جلب لوحة المتصدرين والترتيب العام للأكاديمية أو حسب حلقة معينة ونطاق زمني (أسبوعي/شهري/الكل). المسموح: `academy_admin`, `admin`.",
            "**Query Params**: `scope=platform|halaqa`, `period=all_time|weekly|monthly`, `halqa_id=UUID`, `limit=100`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح."
          ],
          "en": [
            "**Purpose & Who can use it**: Fetch leaderboard rankings for the entire academy or a specific halaqa and time period (weekly/monthly/all time). Allowed: `academy_admin`, `admin`.",
            "**Query Params**: `scope=platform|halaqa`, `period=all_time|weekly|monthly`, `halqa_id=UUID`, `limit=100`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized."
          ]
        }
      },
      {
        "id": "17-get-post-api-academy-admin-library-books-",
        "title": {
          "ar": "17. `GET` & `POST /api/academy/admin/library/books`",
          "en": "17. `GET` & `POST /api/academy/admin/library/books`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة مكتبة الكتب الرقمية الخاصة بالأكاديمية (`library_domain = 'academy'`). المسموح: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: العنوان مفقود."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage the digital book library for the academy (`library_domain = 'academy'`). Allowed: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Title missing."
          ]
        }
      },
      {
        "id": "18-get-post-api-academy-admin-paths-",
        "title": {
          "ar": "18. `GET` & `POST /api/academy/admin/paths`",
          "en": "18. `GET` & `POST /api/academy/admin/paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة واستحداث المسارات التعليمية الأكاديمية (Learning Paths). المسموح: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: العنوان مفقود."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage and create academic learning paths (Learning Paths). Allowed: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Title missing."
          ]
        }
      },
      {
        "id": "19-get-post-api-academy-admin-points-",
        "title": {
          "ar": "19. `GET` & `POST /api/academy/admin/points`",
          "en": "19. `GET` & `POST /api/academy/admin/points`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة نظام النقاط الأكاديمي، تصفح سجلات الطلاب، وتعديل النقاط والستريك والمستويات. المسموح: `academy_admin`, `admin`.",
            "**POST Actions Supported**:",
            "`update_config`: تحديث إعدادات نظام النقاط الموحدة بجدول `system_settings` ومسح كاش `points_config`.",
            "`reset_streak`: إعادة تعيين الـ Streak لـ 0.",
            "`set_level`: تعيين المستوى الأكاديمي للطالب (`beginner`, `intermediate`, `advanced`, `hafiz`, `master`).",
            "`reset_points`: تصفير كافة نقاط الطالب وتسجيل الإجراء في `points_log`.",
            "التعديل اليدوي للنقاط إضافة أو خصماً عبر `adminAdjustPoints`.",
            "**Side Effects**: إدخال سجلات بجدول `points_log` وتحديث جدول `user_points` وإعادة حساب المستوى الأكاديمي.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: بيانات غير كاملة أو حقول مفقودة."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage the academy points system, browse student logs, and adjust points, streak, and levels. Allowed: `academy_admin`, `admin`.",
            "**POST Actions Supported**:",
            "`update_config`: Update unified points system settings in `system_settings` table and clear `points_config` cache.",
            "`reset_streak`: Reset Streak to 0.",
            "`set_level`: Set student academic level (`beginner`, `intermediate`, `advanced`, `hafiz`, `master`).",
            "`reset_points`: Reset all student points to zero and log action in `points_log`.",
            "Manual adjustment of points (addition or deduction) via `adminAdjustPoints`.",
            "**Side Effects**: Insert records into `points_log`, update `user_points` table, and recalculate academic level.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Incomplete data or missing fields."
          ]
        }
      },
      {
        "id": "20-get-api-academy-admin-public-lessons-",
        "title": {
          "ar": "20. `GET /api/academy/admin/public-lessons`",
          "en": "20. `GET /api/academy/admin/public-lessons`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: عرض وطابور مراجعة الدروس العامة المفتوحة المرفوعة من المعلمين مع حالات المراجعة والملاحظات.",
            "**استثناء في الأدوار**: المسموح: `admin`, `academy_admin`, `supervisor`, `content_supervisor`.",
            "**Query Params**: `?review_status=pending_review|approved|rejected`"
          ],
          "en": [
            "**Purpose & Who can use it**: View and review queue of open public lessons submitted by teachers with review statuses and notes.",
            "**Role Exception**: Allowed: `admin`, `academy_admin`, `supervisor`, `content_supervisor`.",
            "**Query Params**: `?review_status=pending_review|approved|rejected`"
          ]
        }
      },
      {
        "id": "21-get-post-api-academy-admin-series-",
        "title": {
          "ar": "21. `GET` & `POST /api/academy/admin/series`",
          "en": "21. `GET` & `POST /api/academy/admin/series`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة واستحداث السلاسل التعليمية المتتابعة (Series). المسموح: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Side Effects**: فحص المعلم المسند عبر `assertTeacherAssignable`."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage and create sequential educational series (Series). Allowed: `academy_admin`, `admin`.",
            "**POST Request Body Fields**:",
            "**Side Effects**: Checks assigned teacher via `assertTeacherAssignable`."
          ]
        }
      },
      {
        "id": "22-get-put-post-api-academy-admin-settings-",
        "title": {
          "ar": "22. `GET`, `PUT`, `POST` /api/academy/admin/settings/*",
          "en": "22. `GET`, `PUT`, `POST` /api/academy/admin/settings/*"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**النقاط الفرعية والخصائص**:",
            "`GET` & `PUT /api/academy/admin/settings`:",
            "**الغرض**: قراءة وتحديث كافة إعدادات الأكاديمية ذات البادئة `academy_*` حصرياً (مثل `academy_courses_`, `academy_sessions_`, `academy_gamification_`).",
            "**المسموح**: `academy_admin`.",
            "**Side Effects**: تحديث جدول `system_settings` واستدعاء `clearSettingCache(key)` وتجاهل أو إرجاع الحقول غير التابعة لنطاق الأكاديمية.",
            "`GET /api/academy/admin/settings/backup`:",
            "**الغرض**: استخراج وإنشاء نسخة احتياطية كاملة (JSON Snapshot) لجميع إعدادات الأكاديمية وتنزيل الملف مع قناع حماية لكلمة مرور SMTP (`********`).",
            "**المسموح**: `admin`, `academy_admin`.",
            "`POST /api/academy/admin/settings/clear-cache`:",
            "**الغرض**: تنظيف وتفريغ الكاش بالذاكرة وزمر الـ Tags والتصميم `revalidatePath(\"/\", \"layout\")`.",
            "**المسموح**: `admin`, `academy_admin`.",
            "`GET /api/academy/admin/settings/storage-status`:",
            "**الغرض**: كشف حالة وتوفر المزودات التخزينية (S3 / Cloudinary / Vercel Blob) بقيم منطقية (`true/false`) دون كشف الأسرار.",
            "**المسموح**: `admin`, `super_admin`, `academy_admin`.",
            "`POST /api/academy/admin/settings/test-email`:",
            "**الغرض**: اختبار الاتصال بخادم SMTP المرفق في الإعدادات وإرسال بريد تجريبي لعنوان الأدمن الحالي.",
            "**المسموح**: `admin`, `academy_admin`."
          ],
          "en": [
            "**Sub-endpoints & Features**:",
            "`GET` & `PUT /api/academy/admin/settings`:",
            "**Purpose**: Exclusively read and update all academy settings prefixed with `academy_*` (such as `academy_courses_`, `academy_sessions_`, `academy_gamification_`).",
            "**Allowed**: `academy_admin`.",
            "**Side Effects**: Updates `system_settings` table, calls `clearSettingCache(key)`, and ignores or returns non-academy scoped fields.",
            "`GET /api/academy/admin/settings/backup`:",
            "**Purpose**: Extract and generate a complete backup (JSON Snapshot) of all academy settings and download the file with a mask protecting SMTP password (`********`).",
            "**Allowed**: `admin`, `academy_admin`.",
            "`POST /api/academy/admin/settings/clear-cache`:",
            "**Purpose**: Clean and purge memory cache, tag clusters, and layout `revalidatePath(\"/\", \"layout\")`.",
            "**Allowed**: `admin`, `academy_admin`.",
            "`GET /api/academy/admin/settings/storage-status`:",
            "**Purpose**: Detect status and availability of storage providers (S3 / Cloudinary / Vercel Blob) with boolean values (`true/false`) without revealing secrets.",
            "**Allowed**: `admin`, `super_admin`, `academy_admin`.",
            "`POST /api/academy/admin/settings/test-email`:",
            "**Purpose**: Test connection to the SMTP server configured in settings and send a test email to current admin email address.",
            "**Allowed**: `admin`, `academy_admin`."
          ]
        }
      },
      {
        "id": "23-get-api-academy-admin-stats-",
        "title": {
          "ar": "23. `GET /api/academy/admin/stats`",
          "en": "23. `GET /api/academy/admin/stats`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: جلب ملخص سريع للإحصائيات الحيوية للوحة القيادة والأعداد وطلبات التقديم وتوجهات التسجيل. المسموح: `academy_admin`, `admin`."
          ],
          "en": [
            "**Purpose & Who can use it**: Fetch quick summary of dashboard vital statistics, counts, applications, and registration trends. Allowed: `academy_admin`, `admin`."
          ]
        }
      },
      {
        "id": "24-get-api-academy-admin-students-",
        "title": {
          "ar": "24. `GET /api/academy/admin/students`",
          "en": "24. `GET /api/academy/admin/students`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: عرض واسترجاع كافة طلاب الأكاديمية المسجلين (`student`, `academy_student`, `dual_student`) مع أعداد كورساتهم النشطة والتاريخ. المسموح: `academy_admin`, `admin`."
          ],
          "en": [
            "**Purpose & Who can use it**: View and retrieve all registered academy students (`student`, `academy_student`, `dual_student`) with counts of active courses and history. Allowed: `academy_admin`, `admin`."
          ]
        }
      },
      {
        "id": "25-get-post-delete-api-academy-admin-supervisors-",
        "title": {
          "ar": "25. `GET`, `POST` & `DELETE /api/academy/admin/supervisors`",
          "en": "25. `GET`, `POST` & `DELETE /api/academy/admin/supervisors`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: إدارة وإنشاء وتعطيل حسابات المشرفين بالمنصة (`supervisor`, `fiqh_supervisor`, `content_supervisor`). المسموح: `academy_admin`, `admin`.",
            "**POST Body**: `{ \"name\": \"...\", \"email\": \"...\", \"password\": \"...\", \"gender\": \"male|female\", \"type\": \"fiqh|content|supervisor\" }`.",
            "**DELETE Body**: `{ \"supervisorId\": \"UUID\" }` (يقوم بتعطيل حساب المشرف `is_active = false`)."
          ],
          "en": [
            "**Purpose & Who can use it**: Manage, create, and disable platform supervisor accounts (`supervisor`, `fiqh_supervisor`, `content_supervisor`). Allowed: `academy_admin`, `admin`.",
            "**POST Body**: `{ \"name\": \"...\", \"email\": \"...\", \"password\": \"...\", \"gender\": \"male|female\", \"type\": \"fiqh|content|supervisor\" }`.",
            "**DELETE Body**: `{ \"supervisorId\": \"UUID\" }` (disables supervisor account `is_active = false`)."
          ]
        }
      },
      {
        "id": "26-get-post-api-academy-admin-teachers-",
        "title": {
          "ar": "26. `GET` & `POST /api/academy/admin/teachers`",
          "en": "26. `GET` & `POST /api/academy/admin/teachers`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: عرض وإضافة معلمي الأكاديمية مع إحصائيات طلابهم وكورساتهم وتاريخ رفض الطلبات السابقة إن وجدت. المسموح: `academy_admin`, `admin`.",
            "**Query Param**: `?assignable=true` لتصفية المعلمين المعتمدين والمفعلين فقط لإسنادهم بالواجهات الأخرى.",
            "**POST Body**: `{ name, email, password, gender, specialization }`.",
            "**Side Effects**: إنشاء حساب المعلم مع اعتماد حالة حسابه أوتوماتيكياً `approval_status = 'approved'` وتخزين التخصص في `user_specializations`."
          ],
          "en": [
            "**Purpose & Who can use it**: Display and add academy teachers with statistics of their students and courses, plus history of previous application rejections if any. Allowed: `academy_admin`, `admin`.",
            "**Query Param**: `?assignable=true` to filter approved and active teachers only for assignment in other interfaces.",
            "**POST Body**: `{ name, email, password, gender, specialization }`.",
            "**Side Effects**: Creates teacher account with auto-approved status `approval_status = 'approved'` and stores specialization in `user_specializations`."
          ]
        }
      },
      {
        "id": "27-get-post-api-academy-admin-teacher-applications-",
        "title": {
          "ar": "27. `GET` & `POST /api/academy/admin/teacher-applications`",
          "en": "27. `GET` & `POST /api/academy/admin/teacher-applications`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: جلب كافة طلبات التقديم الخاصة بالمعلمين ومراجعة المؤهلات والسيرة الذاتية. المسموح: `academy_admin`, `admin`."
          ],
          "en": [
            "**Purpose & Who can use it**: Fetch all teacher applications and review qualifications and CVs. Allowed: `academy_admin`, `admin`."
          ]
        }
      },
      {
        "id": "28-get-api-academy-admin-users-id-",
        "title": {
          "ar": "28. `GET /api/academy/admin/users/[id]`",
          "en": "28. `GET /api/academy/admin/users/[id]`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض ومن يقدر على استخدامه**: جلب الملف الأكاديمي الشامل والتفصيلي لحساب مستخدم محدد مخصص للأكاديمية (يختلف عن ملف المقرأة العامة) للتكيف مع دور الحساب (الطالب: تسجيلاته والدروس والمهام والحضور / المعلم: دوراته وحلقاته وجلساته وطلابه / ولي الأمر: أبناؤه وحالاتهم). المسموح: `academy_admin`, `admin`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`404 Not Found`: المستخدم غير موجود."
          ],
          "en": [
            "**Purpose & Who can use it**: Fetch comprehensive and detailed academic profile for a specific user account tailored for the academy (differs from general maqraa profile) adapting to account role (Student: enrollments, lessons, tasks, attendance / Teacher: courses, halaqat, sessions, students / Parent: children and their statuses). Allowed: `academy_admin`, `admin`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`404 Not Found`: User not found."
          ]
        }
      }
    ]
  },
  {
    "slug": "teacher-dashboard",
    "group": "staff",
    "icon": "teacher",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "لوحة المعلم والشيخ",
      "en": "Teacher & Sheikh Dashboard"
    },
    "description": {
      "ar": "أدوات المعلمين لإدارة الدروس، تصحيح الواجبات، ومتابعة الطلاب.",
      "en": "Teacher tools for lesson management, assignment grading, and student tracking."
    },
    "audience": {
      "ar": "المعلمون والشيوخ المعتمدون",
      "en": "Approved Teachers and Sheikhs"
    },
    "keywords": {
      "ar": [
        "لوحة المعلم والشيخ",
        "أدوات المعلمين لإدارة الدروس، تصحيح الواجبات، ومتابعة الطلاب.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Teacher & Sheikh Dashboard",
        "Teacher tools for lesson management, assignment grading, and student tracking.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/academy/teacher"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحة تحكم المعلم (`/academy/teacher`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/teacher/`). ---",
          "en": "This section provides comprehensive and detailed technical documentation for the Teacher Dashboard (`/academy/teacher`) and its associated API endpoints (`app/api/academy/teacher/`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحة تحكم المعلم (`/academy/teacher`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/teacher/`). ---"
          ],
          "en": [
            "This section provides comprehensive and detailed technical documentation for the Teacher Dashboard (`/academy/teacher`) and its associated API endpoints (`app/api/academy/teacher/`). ---"
          ]
        }
      },
      {
        "id": "-academy-teacher-",
        "title": {
          "ar": "`/academy/teacher`",
          "en": "`/academy/teacher`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: لوحة التحكم المركزية للمعلمين لإدارة الدورات التدريبية، الحلقات، الجلسات المباشرة، متابعة وقبول طلبات التسجيل، تقييم الطلاب، إضافة الواجبات والمسابقات، وإدارة الملف الشخصي والجدول الزمني.",
            "**الأدوار المسموح لها بالوصول**: `teacher`, `admin`, `academy_admin`.",
            "**المحتوى والتفاعل**:",
            "نظرة عامة على إحصائيات المعلم (إجمالي الطلاب، الدورات المنشورة، الجلسات القادمة، والمهام بانتظار التصحيح).",
            "التبويب بين الأقسام الفرعية (إدارة الدورات، طلبات الانضمام، تقويم الجلسات، الجلسات الحية المباشرة، الطلاب ومتابعة تقدمهم، الواجبات والاختبارات، المسارات التعليمية، المسابقات، والملف الشخصي)."
          ],
          "en": [
            "**Purpose**: Centralized control dashboard for teachers to manage training courses, halaqat, live sessions, track and accept enrollment requests, grade students, add assignments and competitions, and manage personal profile and schedule.",
            "**Allowed Roles**: `teacher`, `admin`, `academy_admin`.",
            "**Content & Interaction**:",
            "Overview of teacher statistics (total students, published courses, upcoming sessions, and tasks pending grading).",
            "Tabbed navigation between sub-sections (course management, join requests, session calendar, live sessions, student tracking & progress, assignments & quizzes, learning paths, competitions, and profile)."
          ]
        }
      },
      {
        "id": "1-get-api-academy-teacher-calendar-",
        "title": {
          "ar": "1. `GET /api/academy/teacher/calendar`",
          "en": "1. `GET /api/academy/teacher/calendar`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب كافة الفعاليات والمواعيد الخاصة بالمعلم في جدول زمني موحد (الجلسات المباشرة المجدولة للدورات، ومواعيد تسليم الواجبات والاختبارات).",
            "**Request Fields**: `?from=YYYY-MM-DD&to=YYYY-MM-DD` (اختياري للتصفية الزمنية).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة الأحداث المعروضة بتنسيق: `id`, `title`, `date`, `time`, `type ('live_session' | 'assignment_deadline')`, `course`, `link`, `meta`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول كـ معلم أو أدمن.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**: Fetch all events and dates for the teacher in a unified schedule (scheduled live sessions for courses, and assignment/quiz submission deadlines).",
            "**Request Fields**: `?from=YYYY-MM-DD&to=YYYY-MM-DD` (optional for time filtering).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of events formatted as: `id`, `title`, `date`, `time`, `type ('live_session' | 'assignment_deadline')`, `course`, `link`, `meta`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in as a teacher or admin.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "2-get-patch-api-academy-teacher-certificates-requests-",
        "title": {
          "ar": "2. `GET` & `PATCH /api/academy/teacher/certificates/requests`",
          "en": "2. `GET` & `PATCH /api/academy/teacher/certificates/requests`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: جلب طلبات إصدار الشهادات المرفوعة من الطلاب للدورات المسندة للمعلم أو المسارات التي يديرها (`r.scope = 'academy'`).",
            "`PATCH`: اعتماد وتوليد الشهادة أوتوماتيكياً (`action = 'approve'`) أو رفض الطلب مع توضيح السبب (`action = 'reject'`).",
            "**GET Response Fields**:",
            "`requests`: مصفوفة الطلبات متضمنة بيانات الطالب (`student_name`, `student_email`)، اسم الدورة/المسار، تاريخ الطلب، والحالة (`submitted`, `approved`, `issued`, `rejected`).",
            "`counts`: تجميعة أعداد الطلبات حسب كل حالة.",
            "**PATCH Request Body Fields**:",
            "`action`: `'approve' | 'reject'` (required).",
            "`reason`: سبب الرفض (string, optional - عند الرفض).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`404 Not Found`: الطلب غير موجود أو المعلم لا يملك الدورة/المسار.",
            "`400 Bad Request`: إجراء غير صالح أو حالة الطلب لا تسمح بالتعديل.",
            "`500 Internal Server Error`: فشل توليد ملف الشهادة الـ PDF لعدم وجود قالب افتراضي."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetch certificate issuance requests submitted by students for courses assigned to the teacher or paths they manage (`r.scope = 'academy'`).",
            "`PATCH`: Approve and auto-generate certificate (`action = 'approve'`) or reject request with reason (`action = 'reject'`).",
            "**GET Response Fields**:",
            "`requests`: Array of requests including student data (`student_name`, `student_email`), course/path name, request date, and status (`submitted`, `approved`, `issued`, `rejected`).",
            "`counts`: Aggregated count of requests by status.",
            "**PATCH Request Body Fields**:",
            "`action`: `'approve' | 'reject'` (required).",
            "`reason`: Rejection reason (string, optional - on rejection).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`404 Not Found`: Request not found or teacher does not own the course/path.",
            "`400 Bad Request`: Invalid action or request status does not allow modification.",
            "`500 Internal Server Error`: Failed to generate PDF certificate file due to missing default template."
          ]
        }
      },
      {
        "id": "3-get-api-academy-teacher-competitions-",
        "title": {
          "ar": "3. `GET /api/academy/teacher/competitions`",
          "en": "3. `GET /api/academy/teacher/competitions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب قائمة المسابقات الأكاديمية التي تم تعيين المعلم فيها كـ \"محكّم أو قاضٍ\" (`getJudgeAssignments`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة المسابقات المعين فيها المعلم شاملاً: عنوان المسابقة، النوع، التاريخ، وحالة الجولات والتقييمات.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح."
          ],
          "en": [
            "**Purpose**: Fetch list of academic competitions where the teacher is assigned as a \"judge or evaluator\" (`getJudgeAssignments`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of competitions assigned to the teacher including: competition title, type, date, and status of stages and evaluations.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized."
          ]
        }
      },
      {
        "id": "4-get-post-api-academy-teacher-courses-",
        "title": {
          "ar": "4. `GET` & `POST /api/academy/teacher/courses`",
          "en": "4. `GET` & `POST /api/academy/teacher/courses`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: جلب كافة الدورات التدريبية الخاصة بالمعلم الحالي مع إحصائيات التسجيل والدروس الحالية وطلبات الانضمام المعلقة.",
            "`POST`: إنشاء مسودة دورة جديدة (`status = 'draft'`).",
            "**POST Request Body Fields**:",
            "**Side Effects**: يتم تعيين التخصص الأساسي للمعلم تلقائياً من `user_specializations`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: العنوان أو المستوى مفقود."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetch all training courses belonging to current teacher with enrollment stats, current lessons, and pending join requests.",
            "`POST`: Create a new course draft (`status = 'draft'`).",
            "**POST Request Body Fields**:",
            "**Side Effects**: Teacher's primary specialization is automatically assigned from `user_specializations`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Title or level missing."
          ]
        }
      },
      {
        "id": "5-get-api-academy-teacher-enrollment-requests-",
        "title": {
          "ar": "5. `GET /api/academy/teacher/enrollment-requests`",
          "en": "5. `GET /api/academy/teacher/enrollment-requests`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب كافة طلبات الانضمام المعلقة والنشطة من الطلاب للدورات التي يدرسها المعلم أو مسارات التجويد التي يديرها.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة دمج طلبات تسجيل الدورات ومسارات التجويد متضمنة: `id`, `status`, `enrolled_at`, `student_name`, `student_email`, `course_title`, `course_id`, `kind`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح."
          ],
          "en": [
            "**Purpose**: Fetch all pending and active student join requests for courses taught by the teacher or tajweed paths managed by them.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Merged array of course registration and tajweed path requests including: `id`, `status`, `enrolled_at`, `student_name`, `student_email`, `course_title`, `course_id`, `kind`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized."
          ]
        }
      },
      {
        "id": "6-get-post-patch-api-academy-teacher-live-session-",
        "title": {
          "ar": "6. `GET`, `POST` & `PATCH /api/academy/teacher/live-session`",
          "en": "6. `GET`, `POST` & `PATCH /api/academy/teacher/live-session`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: إدارة البث المباشر والجلسة الفورية الحية للمعلم:",
            "`GET`: جلب الجلسة الحية النشطة حالياً أو القادمة خلال ساعتين مع الحضور الحيين.",
            "`POST`: إنشاء وبدء جلسة حية فورية للدورة (`status = 'in_progress'`).",
            "`PATCH`: تغيير حالة الجلسة الحية (`action = 'start'` لتصبح `in_progress` أو `action = 'end'` لتصبح `completed`).",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`403 Forbidden`: الدورة ليست ملكاً للمعلم الحالي.",
            "`400 Bad Request`: الحقول المطلوبة مفقودة."
          ],
          "en": [
            "**Purpose**: Manage teacher's live streaming and instant sessions:",
            "`GET`: Fetch currently active live session or upcoming session within 2 hours with live attendees.",
            "`POST`: Create and start instant live session for a course (`status = 'in_progress'`).",
            "`PATCH`: Change live session status (`action = 'start'` to become `in_progress` or `action = 'end'` to become `completed`).",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`403 Forbidden`: Course does not belong to current teacher.",
            "`400 Bad Request`: Required fields missing."
          ]
        }
      },
      {
        "id": "7-get-post-api-academy-teacher-paths-",
        "title": {
          "ar": "7. `GET` & `POST /api/academy/teacher/paths`",
          "en": "7. `GET` & `POST /api/academy/teacher/paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: إدارة مسارات التجويد والتعلم التي أنشأها المعلم أو يتولى إدارتها (`manager_id`).",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: العنوان مفقود."
          ],
          "en": [
            "**Purpose**: Manage tajweed and learning paths created or managed by the teacher (`manager_id`).",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Title missing."
          ]
        }
      },
      {
        "id": "8-get-patch-api-academy-teacher-profile-",
        "title": {
          "ar": "8. `GET` & `PATCH /api/academy/teacher/profile`",
          "en": "8. `GET` & `PATCH /api/academy/teacher/profile`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: جلب بيانات الملف الأكاديمي الشامل للمعلم (السيرة الذاتية، التخصص، سنوات الخبرة، الشهادات، المواد، إجمالي الدورات والطلاب المسجلين).",
            "`PATCH`: تحديث أو إنشاء سجل المعلم الأكاديمي بجدول `academy_teachers`.",
            "**PATCH Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`404 Not Found`: الملف غير موجود."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetch comprehensive academic profile data for the teacher (bio, specialization, years of experience, certifications, subjects, total courses and enrolled students).",
            "`PATCH`: Update or create teacher academic record in `academy_teachers` table.",
            "**PATCH Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`404 Not Found`: Profile not found."
          ]
        }
      },
      {
        "id": "9-get-post-api-academy-teacher-public-lessons-",
        "title": {
          "ar": "9. `GET` & `POST /api/academy/teacher/public-lessons`",
          "en": "9. `GET` & `POST /api/academy/teacher/public-lessons`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: عرض وإنشاء الدروس العامة المفتوحة الموجهة للجمهور والطلاب.",
            "**POST Request Body Fields**:",
            "**Side Effects & Logic**:",
            "توليد `public_slug` فريد ديناميكياً للدرس.",
            "للمعلمين: يتم إنشاء الدرس بحالة `review_status = 'pending_review'` وإرسال إشعار للمدراء والمشرفين لمراجعته.",
            "للأدمن: يُنشر الدرس فوراً ويتم إرسال إشعارات لجميع المتابعين وتنبيه المشتركين عبر القائمة البريدية (`sendNewLessonNotificationEmail`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: العنوان أو الموعد مفقود."
          ],
          "en": [
            "**Purpose**: Display and create open public lessons targeted at general public and students.",
            "**POST Request Body Fields**:",
            "**Side Effects & Logic**:",
            "Dynamically generate a unique `public_slug` for the lesson.",
            "For teachers: Lesson created with status `review_status = 'pending_review'` and notification sent to admins/supervisors for review.",
            "For admin: Lesson published immediately, notifications sent to all followers, and mailing list subscribers alerted (`sendNewLessonNotificationEmail`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Title or scheduled date missing."
          ]
        }
      },
      {
        "id": "10-get-post-api-academy-teacher-sessions-",
        "title": {
          "ar": "10. `GET` & `POST /api/academy/teacher/sessions`",
          "en": "10. `GET` & `POST /api/academy/teacher/sessions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب جدول الجلسات المسجلة والمباشرة التابعة لدورات المعلم، وإنشاء أو جدولة جلسة جديدة (أو بدء جلسة فورية عبر `start_now`).",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`403 Forbidden`: الدورة ليست ملكاً للمعلم.",
            "`400 Bad Request`: البيانات الأساسية مفقودة."
          ],
          "en": [
            "**Purpose**: Fetch recorded and live sessions table for teacher's courses, and create or schedule a new session (or start instant session via `start_now`).",
            "**POST Request Body Fields**:",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`403 Forbidden`: Course does not belong to teacher.",
            "`400 Bad Request`: Core data missing."
          ]
        }
      },
      {
        "id": "11-get-api-academy-teacher-students-",
        "title": {
          "ar": "11. `GET /api/academy/teacher/students`",
          "en": "11. `GET /api/academy/teacher/students`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: استرجاع قائمة جميع الطلاب المسجلين في دورات المعلم أو الحلقات التي ينشئها مع ملخص إحصائي شامل لكل طالب (عدد الدورات، المهام المكتملة والإجمالية، إجمالي النقاط، تاريخ آخر نشاط، أعداد الأوسمة، ونسبة التقدم الأكاديمي `progress_percentage`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح."
          ],
          "en": [
            "**Purpose**: Retrieve list of all students enrolled in teacher's courses or created halaqat with comprehensive statistical summary for each student (course count, completed & total tasks, total points, last activity date, badge counts, and academic progress rate `progress_percentage`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized."
          ]
        }
      },
      {
        "id": "12-get-post-api-academy-teacher-tasks-",
        "title": {
          "ar": "12. `GET` & `POST /api/academy/teacher/tasks`",
          "en": "12. `GET` & `POST /api/academy/teacher/tasks`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: عرض الواجبات والاختبارات المنشأة من المعلم وإنشاء واجبات أو اختبارات تفاعلية جديدة (Quizzes).",
            "**POST Request Body Fields**:",
            "**Special Logic**: في اختبارات `quiz` يتم حساب `max_score` تلقائياً كمجموع درجات الأسئلة المعرفة ضماناً لعدم تعارض النسب.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`403 Forbidden`: الدورة ليست ملكاً للمعلم.",
            "`400 Bad Request`: حقول مفقودة أو اختبار بدون أسئلة."
          ],
          "en": [
            "**Purpose**: Display assignments and quizzes created by the teacher, and create new assignments or interactive quizzes.",
            "**POST Request Body Fields**:",
            "**Special Logic**: For `quiz` tests, `max_score` is automatically calculated as sum of defined question scores to ensure no score discrepancy.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`403 Forbidden`: Course does not belong to teacher.",
            "`400 Bad Request`: Missing fields or quiz without questions."
          ]
        }
      },
      {
        "id": "13-post-delete-api-teachers-id-follow-",
        "title": {
          "ar": "13. `POST` & `DELETE /api/teachers/[id]/follow`",
          "en": "13. `POST` & `DELETE /api/teachers/[id]/follow`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: تمكين الطلاب والمستخدمين من متابعة معلم محدد (`POST`) أو إلغاء المتابعة (`DELETE`).",
            "**Side Effects & Inter-relationship**:",
            "تخزين العلاقات في جدول `teacher_followers`.",
            "عند قيام المعلم بنشر درس عام جديد عبر `public-lessons` واقتناع المشرفين باعتمااده، يُرسل النظام تنبيهات وإشعارات فورية أوتوماتيكية لكل متابعيه المسجلين في هذا الجدول.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول.",
            "`404 Not Found`: المعلم غير موجود."
          ],
          "en": [
            "**Purpose**: Enable students and users to follow a specific teacher (`POST`) or unfollow (`DELETE`).",
            "**Side Effects & Inter-relationship**:",
            "Store relationships in `teacher_followers` table.",
            "When a teacher publishes a new public lesson via `public-lessons` and it is approved by supervisors, system automatically sends instant alerts and notifications to all followers registered in this table.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in.",
            "`404 Not Found`: Teacher not found."
          ]
        }
      },
      {
        "id": "ثالثاً-العلاقات-بين-نقاط-الاتصال-البرمجية-endpoint-relationships-",
        "title": {
          "ar": "ثالثاً: العلاقات بين نقاط الاتصال البرمجية (Endpoint Relationships)",
          "en": "Third: Endpoint Relationships"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**علاقة `enrollment-requests` بـ `students` و `courses`**:",
            "يتم رفع طلبات التسجيل من الطلاب للدورات فتظهر للمعلم في `enrollment-requests` بحالة `pending`.",
            "عند قبول الطلب، تتحول حالة التسجيل إلى `active` ويتم إدراج الطالب تلقائياً في قائمة الطلاب المعتمدين التي يسترجعها `GET /api/academy/teacher/students`.",
            "تنعكس التغييرات في `GET /api/academy/teacher/courses` من خلال زيادة عداد الطلاب المسجلين `total_enrolled` وانخفاض الطلبات المعلقة `pending_requests`.",
            "**علاقة `courses` بـ `sessions` و `live-session` و `calendar`**:",
            "يتم إنشاء الدورة التدريبية أولاً عبر `/courses`.",
            "يقوم المعلم بجدولة الجلسات التابعة للدورة عبر `/sessions` أو فتح بث مباشر سريع عبر `/live-session`.",
            "تظهر جميع هذه الجلسات المجدولة تلقائياً في تقويم المعلم والطلاب عبر `/calendar`.",
            "تظهر الجلسة الحية النشطة حالياً في `/live-session` وتتيح متابعة الحضور والانصراف لحظياً.",
            "**علاقة `courses` بـ `tasks` و `students`**:",
            "يضيف المعلم المهام والاختبارات المسندة للدورة عبر `/tasks`.",
            "إجابات وإنجازات الطلاب في هذه المهام تحسب وتُراكم لتقوم بتحديث نسبة التقدم `progress_percentage` وإجمالي المهام المكتملة `tasks_completed` التي تظهر في قائمة `students`.",
            "**علاقة `courses` و `paths` بـ `certificates/requests`**:",
            "عند إكمال الطالب للدورة أو المسار، يتم رفع طلب شهادة، فيظهر للمعلم في `/certificates/requests`.",
            "بمجرد اعتماد الطلب، يقوم الخادم بتوليد ملف الشهادة وإرسال إشعار للطالب.",
            "**علاقة `public-lessons` بـ `teachers/[id]/follow`**:",
            "تتيح `teachers/[id]/follow` للطلاب متابعة المعلم.",
            "عند اعتماد ونشر درس عام جديد للمعلم عبر `public-lessons` يُرسل النظام إشعارات فورية وإيميلات لكافة المتابعين في `teacher_followers`."
          ],
          "en": [
            "**`enrollment-requests` relationship with `students` and `courses`**:",
            "Enrollment requests submitted by students for courses appear to teacher in `enrollment-requests` with `pending` status.",
            "Upon request approval, enrollment status changes to `active` and student is automatically added to approved student list retrieved by `GET /api/academy/teacher/students`.",
            "Changes reflect in `GET /api/academy/teacher/courses` by increasing `total_enrolled` counter and decreasing `pending_requests`.",
            "**`courses` relationship with `sessions`, `live-session`, and `calendar`**:",
            "Training course is created first via `/courses`.",
            "Teacher schedules course sessions via `/sessions` or opens fast live stream via `/live-session`.",
            "All scheduled sessions automatically appear in teacher and student calendar via `/calendar`.",
            "Currently active live session appears in `/live-session` allowing real-time attendance tracking.",
            "**`courses` relationship with `tasks` and `students`**:",
            "Teacher adds assigned course tasks and quizzes via `/tasks`.",
            "Student answers and achievements in these tasks are computed and accumulated to update `progress_percentage` and total completed tasks `tasks_completed` shown in `students` list.",
            "**`courses` and `paths` relationship with `certificates/requests`**:",
            "Upon student completion of course or path, a certificate request is submitted, appearing to teacher in `/certificates/requests`.",
            "Once request is approved, server generates certificate file and sends notification to student.",
            "**`public-lessons` relationship with `teachers/[id]/follow`**:",
            "`teachers/[id]/follow` allows students to follow a teacher.",
            "Upon approving and publishing a new public lesson for the teacher via `public-lessons`, system sends instant notifications and emails to all followers in `teacher_followers`."
          ]
        }
      }
    ]
  },
  {
    "slug": "student-dashboard",
    "group": "users",
    "icon": "student",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "لوحة الطالب",
      "en": "Student Dashboard"
    },
    "description": {
      "ar": "لوحة الطالب لمتابعة الحلقات والتلاوات والدروس والتقدم والشهادات.",
      "en": "Student dashboard for circles, recitations, courses, progress, and certificates."
    },
    "audience": {
      "ar": "طلاب المقرأة والأكاديمية",
      "en": "Maqraa and Academy Students"
    },
    "keywords": {
      "ar": [
        "لوحة الطالب",
        "لوحة الطالب لمتابعة الحلقات والتلاوات والدروس والتقدم والشهادات.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Student Dashboard",
        "Student dashboard for circles, recitations, courses, progress, and certificates.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/student",
      "/academy/student"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحة تحكم الطالب (`/academy/student`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/student/`). ---",
          "en": "This section provides comprehensive and detailed technical documentation for the Student Dashboard (`/academy/student`) and its associated API endpoints (`app/api/academy/student/`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحة تحكم الطالب (`/academy/student`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/student/`). ---"
          ],
          "en": [
            "This section provides comprehensive and detailed technical documentation for the Student Dashboard (`/academy/student`) and its associated API endpoints (`app/api/academy/student/`). ---"
          ]
        }
      },
      {
        "id": "-academy-student-",
        "title": {
          "ar": "`/academy/student`",
          "en": "`/academy/student`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: الواجهة المركزية للطالب لمتابعة خطته التعليمية، الدورات المسجل فيها، التقدم الأكاديمي، الحضور والجلسات المباشرة، حل الواجبات والاختبارات، استعراض الشارات والنقاط، وطلب الشهادات.",
            "**الأدوار المسموح لها بالوصول**: `student`, `academy_student`, `dual_student`, `admin`, `academy_admin`.",
            "**المحتوى والتفاعل**:",
            "بطاقات الإحصائيات السريعة (عدد الكورسات، المسارات المنتهية، النقاط المكتسبة، الـ Streak الحالي، والواجبات المعلقة).",
            "التبويب بين الأقسام الفرعية (دوراتي، التقويم الأكاديمي، المسارات التعليمية، المسابقات، الأسئلة الفقهية، الواجبات، الشارات والنقاط، والشهادات)."
          ],
          "en": [
            "**Purpose**: Centralized interface for the student to track their educational plan, enrolled courses, academic progress, attendance and live sessions, complete assignments and quizzes, view badges and points, and request certificates.",
            "**Allowed Roles**: `student`, `academy_student`, `dual_student`, `admin`, `academy_admin`.",
            "**Content & Interaction**:",
            "Quick statistics cards (course count, completed paths, points earned, current Streak, and pending assignments).",
            "Tabbed navigation between sub-sections (My Courses, Academic Calendar, Learning Paths, Competitions, Fiqh Questions, Assignments, Badges & Points, and Certificates)."
          ]
        }
      },
      {
        "id": "1-get-api-academy-student-badges-",
        "title": {
          "ar": "1. `GET /api/academy/student/badges`",
          "en": "1. `GET /api/academy/student/badges`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب كتالوج ومصفوفة الشارات والأوسمة الأكاديمية كاملة مقسمة حسب الفئات، موضحة حالة كل شارة للطالب الحالي (هل تم الحصول عليها أم لا `is_earned` وتاريخ الحصول عليها).",
            "**Response Fields (HTTP 200 OK)**:",
            "`categories`: مصفوفة الفئات، كل فئة تحتوي على قائمة الشارات (`id`, `name`, `description`, `criteria_type`, `criteria_value`, `points_required`, `icon`, `is_earned`).",
            "`stats`: كائن الإحصائيات (`total`, `earned`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**: Fetch complete catalog and array of academic badges and awards categorized by groups, indicating current student status for each badge (`is_earned` status and earned date).",
            "**Response Fields (HTTP 200 OK)**:",
            "`categories`: Array of categories, each category containing list of badges (`id`, `name`, `description`, `criteria_type`, `criteria_value`, `points_required`, `icon`, `is_earned`).",
            "`stats`: Statistics object (`total`, `earned`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "2-get-api-academy-student-calendar-",
        "title": {
          "ar": "2. `GET /api/academy/student/calendar`",
          "en": "2. `GET /api/academy/student/calendar`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب التقويم الأكاديمي الموحد للطالب، مجمعاً الفعاليات من الجلسات المباشرة المجدولة للدورات المسجل بها ومواعيد تسليم الواجبات والاختبارات.",
            "**Request Query Params**: `?from=YYYY-MM-DD&to=YYYY-MM-DD` (اختياري).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة الأحداث (`id`, `title`, `date`, `time`, `type`, `course`, `link`, `meta`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Fetch student's unified academic calendar, aggregating events from scheduled live sessions of enrolled courses and assignment/quiz submission deadlines.",
            "**Request Query Params**: `?from=YYYY-MM-DD&to=YYYY-MM-DD` (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of events (`id`, `title`, `date`, `time`, `type`, `course`, `link`, `meta`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "3-get-api-academy-student-certificates-",
        "title": {
          "ar": "3. `GET /api/academy/student/certificates`",
          "en": "3. `GET /api/academy/student/certificates`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب قائمة الشهادات الأكاديمية الخاصة بالطالب الحالي الصادرة والمتاحة للتنزيل بـ scope الأكاديمية (`makeStudentCertificatesGet`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة الشهادات الصادرة شاملاً كود الشهادة الفريد، اسم الدورة، تاريخ الإصدار ورابط التحميل.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Fetch list of issued academic certificates for current student available for download in academy scope (`makeStudentCertificatesGet`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of issued certificates including unique certificate code, course name, issue date, and download link.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "4-get-api-academy-student-competitions-",
        "title": {
          "ar": "4. `GET /api/academy/student/competitions`",
          "en": "4. `GET /api/academy/student/competitions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: عرض واستكشاف المسابقات الأكاديمية المتاحة للطالب أو عرض المسابقات التي اشترك فيها الطالب مسبقاً.",
            "**Request Query Params**:",
            "`view`: `'browse' | 'my_entries'` (default: `'browse'`).",
            "`status`: تصفية حسب حالة المسابقة (`active`, `upcoming`, `completed`).",
            "`type`: تصفية حسب النوع (`monthly`, `ramadan`, `tajweed`, `memorization`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة المسابقات مع حالة اشتراك الطالب والترتيب والجولات.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Display and explore available academic competitions for the student or display competitions previously entered by the student.",
            "**Request Query Params**:",
            "`view`: `'browse' | 'my_entries'` (default: `'browse'`).",
            "`status`: Filter by competition status (`active`, `upcoming`, `completed`).",
            "`type`: Filter by type (`monthly`, `ramadan`, `tajweed`, `memorization`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of competitions with student participation status, ranking, and stages.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "5-get-post-delete-api-academy-student-courses-",
        "title": {
          "ar": "5. `GET`, `POST` & `DELETE /api/academy/student/courses/*`",
          "en": "5. `GET`, `POST` & `DELETE /api/academy/student/courses/*`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**النقاط الفرعية والخصائص**:",
            "`GET /api/academy/student/courses`:",
            "**الغرض**: جلب جميع الدورات المسجل فيها الطالب مع نسبة التقدم وعدد الدروس المكتملة والحالة.",
            "`GET /api/academy/student/courses/archive`:",
            "**الغرض**: جلب أرشيف الدورات التي أكملها الطالب (`status = 'completed'` أو `progress_percentage >= 100`) مع إمكانية البحث (`?search=...`).",
            "`GET /api/academy/student/courses/[id]`:",
            "**الغرض**: جلب تفاصيل دورة محددة، قائمة الدروس المكتملة وغير المكتملة، وحالة التسجيل الحالية (`none`, `pending`, `active`, `rejected`).",
            "`POST /api/academy/student/courses/[id]/enroll`:",
            "**الغرض**: تقديم طلب انضمام للدورة (`status = 'pending'`).",
            "**Side Effects**: يفحص قيود ولي الأمر عبر `isTargetAllowedForStudent` ويقوم بإرسال إشعار فوري للمعلم بوجود طلب جديد.",
            "`DELETE /api/academy/student/courses/[id]/enroll`:",
            "**الغرض**: إلغاء التسجيل أو الانسحاب من الدورة.",
            "**Side Effects**: حذف سجلات التقدم `lesson_progress` وحذف سجل التسجيل `enrollments` وإرسال إشعار انسحاب للمعلم.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول.",
            "`403 Forbidden`: الدورة محظورة بواسطة ولي الأمر.",
            "`409 Conflict`: يوجد طلب تسجيل مسبق لنفس الدورة.",
            "`404 Not Found`: الدورة غير موجودة."
          ],
          "en": [
            "**Sub-endpoints & Features**:",
            "`GET /api/academy/student/courses`:",
            "**Purpose**: Fetch all enrolled courses for the student with progress percentage, completed lesson count, and status.",
            "`GET /api/academy/student/courses/archive`:",
            "**Purpose**: Fetch archived courses completed by the student (`status = 'completed'` or `progress_percentage >= 100`) with search capability (`?search=...`).",
            "`GET /api/academy/student/courses/[id]`:",
            "**Purpose**: Fetch details of a specific course, list of completed and uncompleted lessons, and current enrollment status (`none`, `pending`, `active`, `rejected`).",
            "`POST /api/academy/student/courses/[id]/enroll`:",
            "**Purpose**: Submit course join request (`status = 'pending'`).",
            "**Side Effects**: Checks parent restrictions via `isTargetAllowedForStudent` and sends instant notification to teacher regarding new request.",
            "`DELETE /api/academy/student/courses/[id]/enroll`:",
            "**Purpose**: Cancel registration or withdraw from course.",
            "**Side Effects**: Deletes `lesson_progress` records, deletes `enrollments` registration record, and sends withdrawal notification to teacher.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in.",
            "`403 Forbidden`: Course restricted by parent.",
            "`409 Conflict`: Existing prior enrollment request for the same course.",
            "`404 Not Found`: Course not found."
          ]
        }
      },
      {
        "id": "6-get-post-api-academy-student-fiqh-",
        "title": {
          "ar": "6. `GET` & `POST /api/academy/student/fiqh`",
          "en": "6. `GET` & `POST /api/academy/student/fiqh`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: جلب قائمة الأسئلة الفقهية التي طرحها الطالب وإجابات المشرفين عليها والكاتب وتاريخ الإجابة.",
            "`POST`: طرح سؤال فقهي جديد في تصنيف محدد (`question`, `category`).",
            "**Side Effects**: عند طرح سؤال جديد، يتم إرسال إشعارات فورية لمشرفي الفقه المعنيين بالمنصة.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول كـ طالب أو قارئ.",
            "`400 Bad Request`: السؤال أو الفئة مفقودة."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetch list of fiqh questions asked by the student along with supervisor answers, author, and answer date.",
            "`POST`: Submit a new fiqh question in a specific category (`question`, `category`).",
            "**Side Effects**: Upon submitting a new question, instant notifications are sent to relevant platform fiqh supervisors.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in as a student or reader.",
            "`400 Bad Request`: Question or category missing."
          ]
        }
      },
      {
        "id": "7-post-api-academy-student-lessons-lessonid-complete-",
        "title": {
          "ar": "7. `POST /api/academy/student/lessons/[lessonId]/complete`",
          "en": "7. `POST /api/academy/student/lessons/[lessonId]/complete`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: تحديد الدرس كمكتمل من قبل الطالب وحساب وتحديث نسبة تقدم الطالب في الدورة وتوليد الشهادات والنقاط أوتوماتيكياً.",
            "**Response Fields (HTTP 200 OK)**:",
            "`{ \"success\": true, \"message\": \"تم تحديد الدرس كمكتمل\", \"courseCompleted\": boolean, \"progress\": number }`.",
            "**Side Effects & Inter-relationship**:",
            "تحديث جدول `lesson_progress` وتعيين `is_completed = true`.",
            "إعادة حساب `progress_percentage` بالدورة؛ وإذا وصلت 100% تتحول الحالة لـ `completed` ويُنشأ طلب إصدار شهادة أوتوماتيكي في `academy_certificates` و `certificate_issuance_requests`.",
            "يمنح الطالب نقاط الدرس (`awardLessonPoints`) ونقاط إكمال الدورة (`awardCourseCompletePoints`)، ويفحص استحقاق الشارات الجديدة ويفعل تنبيهات الأوسمة.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`403 Forbidden`: المعلم/الأدمن لا يستطيع إكمال الدرس نيابة عن الطالب هنا، أو الطالب غير مسجل بالدورة.",
            "`404 Not Found`: الدرس غير موجود."
          ],
          "en": [
            "**Purpose**: Mark lesson as completed by student, calculate and update student course progress percentage, and automatically generate certificates and points.",
            "**Response Fields (HTTP 200 OK)**:",
            "`{ \"success\": true, \"message\": \"Lesson marked as complete\", \"courseCompleted\": boolean, \"progress\": number }`.",
            "**Side Effects & Inter-relationship**:",
            "Update `lesson_progress` table and set `is_completed = true`.",
            "Recalculate course `progress_percentage`; if it reaches 100%, status changes to `completed` and an automatic certificate issuance request is created in `academy_certificates` and `certificate_issuance_requests`.",
            "Awards student lesson points (`awardLessonPoints`) and course completion points (`awardCourseCompletePoints`), checks eligibility for new badges, and triggers badge alerts.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`403 Forbidden`: Teacher/Admin cannot complete lesson on student's behalf here, or student is not enrolled in the course.",
            "`404 Not Found`: Lesson not found."
          ]
        }
      },
      {
        "id": "8-get-api-academy-student-paths-",
        "title": {
          "ar": "8. `GET /api/academy/student/paths`",
          "en": "8. `GET /api/academy/student/paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب مسارات التجويد والتعلم المسجل فيها الطالب ومتابعة الإنجاز بالمراحل.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Fetch enrolled tajweed and learning paths for the student and track progress across stages.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "9-get-api-academy-student-points-",
        "title": {
          "ar": "9. `GET /api/academy/student/points`",
          "en": "9. `GET /api/academy/student/points`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: استرجاع ملخص نظام النقاط والمستوى والـ Streak والشارات المحصلة وآخر 20 عملية بـ `points_log`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`total_points`, `level`, `level_label`, `streak_days`, `longest_streak`, `next_level`, `points_to_next_level`, `total_verses_memorized`, `log`, `badges`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Retrieve summary of points system, level, Streak, earned badges, and last 20 operations in `points_log`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`total_points`, `level`, `level_label`, `streak_days`, `longest_streak`, `next_level`, `points_to_next_level`, `total_verses_memorized`, `log`, `badges`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "10-get-api-academy-student-progress-",
        "title": {
          "ar": "10. `GET /api/academy/student/progress`",
          "en": "10. `GET /api/academy/student/progress`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب التحليلات الأكاديمية المجمعة لصفحة التقدم للطالب (الدورات المسجلة والمكتملة، المهام المكتملة والإجمالية، الدروس المنفذة، نسبة الحضور للجلسات الحية، والمستوى الرقمي).",
            "**Side Effects**: تمنح الطالب نقاط تسجيل الدخول اليومي (`awardDailyLoginIfNew`) عند فتح الصفحة.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Fetch aggregated academic analytics for student progress page (enrolled and completed courses, completed and total tasks, executed lessons, live session attendance rate, and numerical level).",
            "**Side Effects**: Awards daily login points (`awardDailyLoginIfNew`) to student when opening the page.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "11-get-api-academy-student-series-",
        "title": {
          "ar": "11. `GET /api/academy/student/series`",
          "en": "11. `GET /api/academy/student/series`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: استعراض السلاسل التعليمية المنشورة والمتاحة للطلاب.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Browse published educational series available to students.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "12-get-api-academy-student-sessions-",
        "title": {
          "ar": "12. `GET /api/academy/student/sessions`",
          "en": "12. `GET /api/academy/student/sessions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب جميع الجلسات المباشرة والمجدولة التابعة للدورات المسجل فيها الطالب، مع إتاحة رابط التسجيل إن سمح المعلم بذلك.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Fetch all live and scheduled sessions belonging to courses in which student is enrolled, providing registration link if permitted by teacher.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "13-get-api-academy-student-stats-",
        "title": {
          "ar": "13. `GET /api/academy/student/stats`",
          "en": "13. `GET /api/academy/student/stats`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب الإحصائيات السريعة للوحة تحكم الطالب (الدورات المسجلة، الدورات المكتملة، المهام المعلقة، إجمالي النقاط، المستوى الحالي، الـ Streak، متوسط الدرجات `avg_grade` للشارات والأنشطة).",
            "**Side Effects**: تمنح نقاط الدخول اليومي التلقائي `awardDailyLoginIfNew`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Fetch quick statistics for student dashboard (enrolled courses, completed courses, pending tasks, total points, current level, Streak, average grade `avg_grade` for badges and activities).",
            "**Side Effects**: Awards automatic daily login points `awardDailyLoginIfNew`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "14-get-api-academy-student-tasks-",
        "title": {
          "ar": "14. `GET /api/academy/student/tasks`",
          "en": "14. `GET /api/academy/student/tasks`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب كافة الواجبات والاختبارات المسندة للطالب (سواء الواجبات الفردية أو واجبات الكورس العامة) مدمجة مع آخر تسليم للطالب لمعرفة الحالة والدرجة والملاحظات.",
            "**Request Query Params**: `?pending=true` (لإرجاع الواجبات المعلقة ومتأخرة التسليم فقط)، `?limit=N`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة المهام (`id`, `title`, `description`, `course_title`, `type`, `due_date`, `points_value`, `submission_status`, `grade`, `feedback`, `status ('pending' | 'submitted' | 'graded' | 'late')`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول."
          ],
          "en": [
            "**Purpose**: Fetch all assignments and quizzes assigned to the student (whether individual tasks or general course assignments) merged with student's latest submission to check status, grade, and feedback.",
            "**Request Query Params**: `?pending=true` (to return only pending and overdue submissions), `?limit=N`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of tasks (`id`, `title`, `description`, `course_title`, `type`, `due_date`, `points_value`, `submission_status`, `grade`, `feedback`, `status ('pending' | 'submitted' | 'graded' | 'late')`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in."
          ]
        }
      },
      {
        "id": "ثالثاً-ترابط-واقتران-النقاط-والشارات-والإحصائيات-gamification-stats-interconnection-",
        "title": {
          "ar": "ثالثاً: ترابط واقتران النقاط والشارات والإحصائيات (Gamification & Stats Interconnection)",
          "en": "Third: Gamification & Stats Interconnection"
        },
        "intro": {
          "ar": "تتفاعل النقاط والشارات والإحصائيات بالأكاديمية عبر شلال متكامل من الأحداث البرمجية:",
          "en": "Points, badges, and statistics in the academy interact through an integrated cascade of programmatic events:"
        },
        "steps": {
          "ar": [
            "**المُحفز (Trigger Event)**:",
            "عندما يقوم الطالب بإنهاء درس عبر `/lessons/[lessonId]/complete` أو إكمال دورة 100%، أو تسليم واجب عبر `/tasks` وتصحيحه، أو تسجيل الدخول اليومي عبر `/stats` أو `/progress`.",
            "**احتساب النقاط والـ Streak**:",
            "تُستدعى دوال التحفيز (`awardLessonPoints`, `awardCourseCompletePoints`, `awardDailyLoginIfNew`).",
            "يتم تسجيل العملية في جدول `points_log` بقيم النقاط المكتسبة وسبب المكافأة.",
            "يُحدث جدول `user_points` لزيادة `total_points` وتعديل الـ `streak_days` و `longest_streak`.",
            "**حساب المستوى الأكاديمي (Level Progression)**:",
            "يُقارن إجمالي النقاط `total_points` بجداول مستويات الأكاديمية (`beginner: 0`, `intermediate: 500`, `advanced: 2000`, `hafiz: 5000`, `master`).",
            "يتغير المستوى تلقائياً وتُحسب النقاط المتبقية للوصول للمستوى التالي `points_to_next_level`.",
            "**فتح الشارات والأوسمة (Badges Unlocking)**:",
            "تتم مقارنة الإنجازات الأكاديمية الصريحة (عدد الكورسات المكتملة من `enrollments` + عدد المهام المصححة من `task_submissions` + إجمالي النقاط من `user_points`) مع شروط الكتالوج الموحد `BADGE_CATALOGUE`.",
            "عند استيفاء الشرط (`criteria_type: 'courses' | 'tasks' | 'points'`)، يتم منح الشارة وتخزينها في جدول `badges` وإرسال إشعار فوري للطالب.",
            "**التجميع في الإحصائيات (Stats Aggregation)**:",
            "عند استدعاء `/stats` أو `/progress` أو `/points` يقوم الخادم بتجميع نتائج الجدولين `user_points` و `badges` ومقارنتها بسجلات التعلم `enrollments` و `task_submissions` لإرجاع صورة موحدة وشاملة لمستوى وتألق الطالب."
          ],
          "en": [
            "**Trigger Event**:",
            "When a student completes a lesson via `/lessons/[lessonId]/complete`, completes a course 100%, submits and gets an assignment graded via `/tasks`, or logs in daily via `/stats` or `/progress`.",
            "**Points & Streak Calculation**:",
            "Incentive functions are called (`awardLessonPoints`, `awardCourseCompletePoints`, `awardDailyLoginIfNew`).",
            "Operation is recorded in `points_log` table with points earned and reward reason.",
            "`user_points` table is updated to increase `total_points` and adjust `streak_days` and `longest_streak`.",
            "**Level Progression**:",
            "Total points `total_points` are compared against academy level tables (`beginner: 0`, `intermediate: 500`, `advanced: 2000`, `hafiz: 5000`, `master`).",
            "Level changes automatically and remaining points to reach next level `points_to_next_level` are computed.",
            "**Badges Unlocking**:",
            "Explicit academic achievements (completed courses count from `enrollments` + graded tasks count from `task_submissions` + total points from `user_points`) are compared against criteria in unified catalog `BADGE_CATALOGUE`.",
            "Upon meeting condition (`criteria_type: 'courses' | 'tasks' | 'points'`), badge is granted, stored in `badges` table, and instant notification is sent to student.",
            "**Stats Aggregation**:",
            "When `/stats`, `/progress`, or `/points` is called, server aggregates results from `user_points` and `badges` tables and compares them with learning records `enrollments` and `task_submissions` to return a unified, comprehensive picture of student's level and achievements."
          ]
        }
      }
    ]
  },
  {
    "slug": "parent-dashboard",
    "group": "users",
    "icon": "parent",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "لوحة ولي الأمر",
      "en": "Parent Dashboard"
    },
    "description": {
      "ar": "إدارة حسابات الأبناء وتتبع تقدمهم وحضورهم والتواصل مع المعلمين.",
      "en": "Parent portal to track children progress, attendance, and communicate with staff."
    },
    "audience": {
      "ar": "أولياء الأمور والعائلات",
      "en": "Parents and Guardians"
    },
    "keywords": {
      "ar": [
        "لوحة ولي الأمر",
        "إدارة حسابات الأبناء وتتبع تقدمهم وحضورهم والتواصل مع المعلمين.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Parent Dashboard",
        "Parent portal to track children progress, attendance, and communicate with staff.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/academy/parent"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحة تحكم ولي الأمر (`/academy/parent`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/parent/`). ---",
          "en": "This section provides comprehensive and detailed technical documentation for the Parent Dashboard (`/academy/parent`) and its associated API endpoints (`app/api/academy/parent/`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحة تحكم ولي الأمر (`/academy/parent`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/parent/`). ---"
          ],
          "en": [
            "This section provides comprehensive and detailed technical documentation for the Parent Dashboard (`/academy/parent`) and its associated API endpoints (`app/api/academy/parent/`). ---"
          ]
        }
      },
      {
        "id": "-academy-parent-",
        "title": {
          "ar": "`/academy/parent`",
          "en": "`/academy/parent`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: لوحة التحكم المخصصة لأولياء الأمور لمتابعة المستوى التعليمي للأبناء المربوطين بالحساب، استعراض تقارير الحضور والتلاوات والواجبات، إرسال طلبات ربط أبناء جُدد، والتواصل المباشر مع معلمي الدورات الحالية لأبنائهم.",
            "**الأدوار المسموح لها بالوصول**: `parent` (أولياء الأمور حصراً).",
            "**المحتوى والتفاعل**:",
            "قائمة الأبناء المربوطين ملحقة بنسبة تقدم كل ابن والشارات والمؤشرات الأكاديمية.",
            "تقويم الفعاليات والأحداث الموحد لكافة الأبناء.",
            "نماذج إضافة وربط الأبناء عبر البريد الإلكتروني.",
            "مركز الرسائل والتواصل مع معلمي الأبناء."
          ],
          "en": [
            "**Purpose**: Dedicated dashboard for parents to track the educational level of children linked to the account, view attendance, recitation, and assignment reports, send new child linking requests, and communicate directly with teachers of their children's current courses.",
            "**Allowed Roles**: `parent` (parents exclusively).",
            "**Content & Interaction**:",
            "List of linked children accompanied by progress percentage, badges, and academic indicators for each child.",
            "Unified events and activities calendar for all children.",
            "Forms to add and link children via email.",
            "Messaging and communication center with children's teachers."
          ]
        }
      },
      {
        "id": "ثانياً-آلية-ربط-الابن-بولي-الأمر-child-linking-mechanism-link-child-",
        "title": {
          "ar": "ثانياً: آلية ربط الابن بولي الأمر (Child Linking Mechanism - `link-child`)",
          "en": "Second: Child Linking Mechanism (`link-child`)"
        },
        "intro": {
          "ar": "يتبع النظام آلية حماية ثنائية الخطوات للربط بين ولي الأمر والطالب، تضمن الخصوصية والموافقة الصريحة:",
          "en": "The system follows a two-step protection mechanism to link a parent with a student, ensuring privacy and explicit consent:"
        },
        "steps": {
          "ar": [
            "**الخطوة الأولى (البحث - Search Phase)**:",
            "يرسل ولي الأمر طلب بحث بالبريد الإلكتروني للابن (`action: 'search', email`).",
            "يفحص النظام وجود حساب برول `student` بهذا البريد، ويتأكد من عدم وجود طلب ربط سابق أو علاقة قائمة.",
            "**الخطوة الثانية (إرسال الطلب - Link Request Phase)**:",
            "يحدد ولي الأمر صلة القرابة (`father`, `mother`, `guardian`, `other`) ويرسل الطلب (`action: 'link', child_id, relation`).",
            "يُنشئ الخادم سجلاً بجدول `parent_children` بحالة معلقة `status = 'pending'`.",
            "**الموافقة الصريحة من الطالب (Explicit Student Approval)**:",
            "يصل إشعار فوري لحساب الطالب بوجود طلب ربط جديد.",
            "يراجع الطالب الطلب من لوحته الخاصة (`/academy/student/parent-requests`) ويرفض أو يوافق.",
            "عند موافقة الطالب تحول الحالة إلى `active` / `approved` لتصبح بيانات وتقارير الطالب مرئية لولي الأمر."
          ],
          "en": [
            "**Step One (Search Phase)**:",
            "Parent sends a search request using student's email (`action: 'search', email`).",
            "System checks existence of an account with role `student` for this email and verifies no prior pending request or existing link exists.",
            "**Step Two (Link Request Phase)**:",
            "Parent specifies relationship (`father`, `mother`, `guardian`, `other`) and submits request (`action: 'link', child_id, relation`).",
            "Server creates a record in `parent_children` table with pending status `status = 'pending'`.",
            "**Explicit Student Approval**:",
            "Instant notification reaches student account regarding new linking request.",
            "Student reviews request from their dashboard (`/academy/student/parent-requests`) and approves or rejects it.",
            "Upon student approval, status changes to `active` / `approved`, making student data and reports visible to parent."
          ]
        }
      },
      {
        "id": "ثالثاً-الصلاحيات-وتنقية-البيانات-permissions-strict-scoping-",
        "title": {
          "ar": "ثالثاً: الصلاحيات وتنقية البيانات (Permissions & Strict Scoping)",
          "en": "Third: Permissions & Strict Scoping"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**هل ولي الأمر يقدر يشوف أبناءه بس؟**: **نعم، بكل صرامة وقيد برمجي قاطع**.",
            "لا يتم استرجاع أي بيانات أكاديمية أو تقارير أو مواعيد إلا بعد التحقق من وجود سجل نشط ومكتمل بجدول `parent_children` يربط `session.sub` (مُعرّف ولي الأمر) بـ `child_id` (معرف الابن المطلوبة بياناته):",
            "في `calendar/events`: يتم جلب الأحداث فقط لـ `child_id IN (SELECT child_id FROM parent_children WHERE parent_id = session.sub AND status = 'active')`.",
            "في `children/[id]/activity`: تُستدعى `getActiveParentChildLink(session.sub, childId)`، وإذا لم يكن الابن مربوطاً بولي الأمر يرفض الخادم الطلب فوراً بكود `403 Forbidden`.",
            "في `children/[id]/reports`: تفحص الاستعلامات اقتران الابن بولي الأمر مع مطابقة `pc.status IN ('active', 'approved')` وُترجع `403 Forbidden` في حال عدم الاقتران.",
            "في `conversations`: يُحظر على ولي الأمر مراسلة أي معلم إلا إذا كان المعلم يُدرّس فعلياً دورة مسجل فيها أحد أبنائه المربوطين بالحساب."
          ],
          "en": [
            "**Can the parent only see their own children?**: **Yes, with strict enforcement and absolute programmatic scoping**.",
            "No academic data, reports, or appointments are retrieved without first verifying an active and complete record in `parent_children` table linking `session.sub` (parent ID) with `child_id` (target child ID):",
            "In `calendar/events`: Events fetched only for `child_id IN (SELECT child_id FROM parent_children WHERE parent_id = session.sub AND status = 'active')`.",
            "In `children/[id]/activity`: `getActiveParentChildLink(session.sub, childId)` is called; if child is not linked to parent, server immediately rejects request with `403 Forbidden`.",
            "In `children/[id]/reports`: Queries check child-parent link matching `pc.status IN ('active', 'approved')` and return `403 Forbidden` if not linked.",
            "In `conversations`: Parent is prohibited from messaging any teacher unless that teacher actually teaches a course in which one of their linked children is enrolled."
          ]
        }
      },
      {
        "id": "1-get-api-academy-parent-calendar-events-",
        "title": {
          "ar": "1. `GET /api/academy/parent/calendar/events`",
          "en": "1. `GET /api/academy/parent/calendar/events`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب تقويم موحد يجمع فعاليات جميع الأبناء المربوطين بولي الأمر (الجلسات الحية للدورات، مواعيد تسليم الواجبات والاختبارات، وحجوزات التلاوة مع القراء).",
            "**Request Query Params**:",
            "`month`: تصفية بالشهر والسنة بتنسيق `YYYY-MM` (optional).",
            "`child`: تصفية الأحداث لابن محدد باستخدام UUID الخاص به (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`events`: مصفوفة الأحداث (`id`, `title`, `date`, `time`, `type ('live_session' | 'assignment_deadline' | 'booking')`, `course`, `course_id`, `child_id`, `child_name`, `link`, `status`, `scheduled_at`).",
            "`children`: قائمة الأبناء المربوطين المشمولين بالتقويم (`id`, `name`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول كـ ولي أمر.",
            "`500 Internal Server Error`: خطأ بالنظام."
          ],
          "en": [
            "**Purpose**: Fetch a unified calendar aggregating events for all children linked to the parent (course live sessions, assignment and quiz deadlines, and recitation bookings with readers).",
            "**Request Query Params**:",
            "`month`: Filter by month and year in `YYYY-MM` format (optional).",
            "`child`: Filter events for a specific child using their UUID (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`events`: Array of events (`id`, `title`, `date`, `time`, `type ('live_session' | 'assignment_deadline' | 'booking')`, `course`, `course_id`, `child_id`, `child_name`, `link`, `status`, `scheduled_at`).",
            "`children`: List of linked children included in calendar (`id`, `name`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in as a parent.",
            "`500 Internal Server Error`: System error."
          ]
        }
      },
      {
        "id": "2-get-api-academy-parent-children-id-activity-",
        "title": {
          "ar": "2. `GET /api/academy/parent/children/[id]/activity`",
          "en": "2. `GET /api/academy/parent/children/[id]/activity`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب السجل التفصيلي اليومي لنشاط ابن محدد (التلاوات المرفوعة وتقييمات القراء، الجلسات والحجوزات، والأوسمة والشارات المكتسبة).",
            "**Permissions**: يفحص الخادم اقتران الابن بولي الأمر عبر `getActiveParentChildLink(session.sub, childId)`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`recitations`: قائمة التلاوات (`surah_name`, `ayah_from`, `ayah_to`, `status`, `overall_score`, `verdict`, `detailed_feedback`, `reader_name`).",
            "`sessions`: قائمة الحجوزات والجلسات (`status`, `scheduled_at`, `duration_minutes`, `session_summary`, `reader_notes`, `teacher_name`).",
            "`badges`: الأوسمة المحصلة (`badge_name`, `badge_description`, `badge_icon_url`, `points_awarded`, `earned_at`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول كـ ولي أمر.",
            "`403 Forbidden`: الابن غير مربوط بحساب ولي الأمر.",
            "`500 Internal Server Error`: خطأ غير متوقع."
          ],
          "en": [
            "**Purpose**: Fetch detailed daily activity log for a specific child (submitted recitations and reader evaluations, sessions and bookings, and earned badges and awards).",
            "**Permissions**: Server checks child-parent link via `getActiveParentChildLink(session.sub, childId)`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`recitations`: List of recitations (`surah_name`, `ayah_from`, `ayah_to`, `status`, `overall_score`, `verdict`, `detailed_feedback`, `reader_name`).",
            "`sessions`: List of bookings and sessions (`status`, `scheduled_at`, `duration_minutes`, `session_summary`, `reader_notes`, `teacher_name`).",
            "`badges`: Earned badges (`badge_name`, `badge_description`, `badge_icon_url`, `points_awarded`, `earned_at`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in as a parent.",
            "`403 Forbidden`: Child not linked to parent account.",
            "`500 Internal Server Error`: Unexpected error."
          ]
        }
      },
      {
        "id": "3-get-api-academy-parent-children-id-reports-",
        "title": {
          "ar": "3. `GET /api/academy/parent/children/[id]/reports`",
          "en": "3. `GET /api/academy/parent/children/[id]/reports`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب تقرير أكاديمي أسبوعي وشامل لأداء الابن، متضمناً الدورات المسجل بها، نسبة إنجاز الدروس، الواجبات المسلمة ودرجاتها وتعليقات المعلم، متوسط الدرجات `avg_grade` والإحصائيات التجميعية.",
            "**Request Query Params**: `?weekStart=YYYY-MM-DD&weekEnd=YYYY-MM-DD` (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`courses`: قائمة الدورات المسجل بها الابن مع عدد الدروس الإجمالية والمكتملة والمعلم.",
            "`submissions`: قائمة آخر 20 واجب مسلّم من الابن مع الدرجة وتعليق المعلم `teacher_comment`.",
            "`stats`: كائن الإحصائيات (`total_courses`, `total_submissions`, `graded_tasks`, `avg_grade`, `recitations_count`, `sessions_attended`, `badges_earned`, `current_level`).",
            "`weekly`: ملخص التقرير الأسبوعي المنشأ عبر `buildParentWeeklyReport`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول كـ ولي أمر.",
            "`403 Forbidden`: غير مصرح - الابن غير تابع لولي الأمر الحالي (`Unauthorized: Not your child`)."
          ],
          "en": [
            "**Purpose**: Fetch comprehensive weekly academic report for child's performance, including enrolled courses, lesson completion rate, submitted assignments with grades and teacher feedback, average grade `avg_grade`, and aggregated statistics.",
            "**Request Query Params**: `?weekStart=YYYY-MM-DD&weekEnd=YYYY-MM-DD` (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`courses`: List of enrolled courses for child with total/completed lesson counts and teacher.",
            "`submissions`: List of last 20 submitted assignments from child with grade and teacher comment `teacher_comment`.",
            "`stats`: Statistics object (`total_courses`, `total_submissions`, `graded_tasks`, `avg_grade`, `recitations_count`, `sessions_attended`, `badges_earned`, `current_level`).",
            "`weekly`: Weekly report summary generated via `buildParentWeeklyReport`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in as a parent.",
            "`403 Forbidden`: Unauthorized - Child does not belong to current parent (`Unauthorized: Not your child`)."
          ]
        }
      },
      {
        "id": "4-get-post-api-academy-parent-conversations-",
        "title": {
          "ar": "4. `GET` & `POST /api/academy/parent/conversations`",
          "en": "4. `GET` & `POST /api/academy/parent/conversations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: عرض قائمة المحادثات القائمة بين ولي الأمر ومعلمي أبنائه مع عداد الرسائل غير المقروءة.",
            "`POST`: بدء محادثة جديدة مع معلم يدرّس أحداً من أبنائه مع إمكانية إرفاق رسالة أولى.",
            "**POST Request Body Fields**:",
            "**Permissions & Validation**:",
            "يتأكد الخادم أولاً أن الابن مربوط بحساب ولي الأمر (`getActiveParentChild`).",
            "يتأكد الخادم أن المعلم يُدرّس بالفعل في دورة مسجل فيها هذا الابن بحالة نشطة (`enrollments.status IN ('active', 'accepted', 'completed')`).",
            "**Side Effects**: عند إرسال رسالة يتم تحديث `unread_count_teacher` وزيادته وإرسال إشعار فوري للمعلم.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول.",
            "`400 Bad Request`: بيانات ناقصة (المعلم أو الابن مفقود).",
            "`403 Forbidden`: الطالب غير مربوط بالحساب أو المعلم لا يدرّس لهذا الطالب."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Display list of existing conversations between parent and their children's teachers with unread message counter.",
            "`POST`: Start a new conversation with a teacher teaching one of their children with optional initial message attachment.",
            "**POST Request Body Fields**:",
            "**Permissions & Validation**:",
            "Server first verifies child is linked to parent account (`getActiveParentChild`).",
            "Server verifies teacher actually teaches in a course where this child is actively enrolled (`enrollments.status IN ('active', 'accepted', 'completed')`).",
            "**Side Effects**: Sending a message updates and increments `unread_count_teacher` and sends instant notification to teacher.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in.",
            "`400 Bad Request`: Incomplete data (teacher or child missing).",
            "`403 Forbidden`: Student not linked to account or teacher does not teach this student."
          ]
        }
      },
      {
        "id": "5-post-api-academy-parent-link-child-",
        "title": {
          "ar": "5. `POST /api/academy/parent/link-child`",
          "en": "5. `POST /api/academy/parent/link-child`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: البحث عن حساب طالب باستخدام بريده الإلكتروني، وإرسال طلب ربط حساب كـ ولي أمر.",
            "**Request Body Fields**:",
            "**البحث (Search Phase)**:",
            "**إرسال الطلب (Link Request Phase)**:",
            "**Side Effects**:",
            "إنشاء سجل بـ `parent_children` بحالة `pending`.",
            "إرسال إشعار فوري بحالة عالية الأهمية لحساب الطالب يحتوي على رابط مباشر لمراجعة واعتماد الطلب (`/academy/student/parent-requests`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`400 Bad Request`: بيانات ناقصة أو نوع صلة القرابة غير صالح.",
            "`404 Not Found`: لم يتم العثور على طالب بهذا البريد.",
            "`409 Conflict`: الطالب مربوط بالحساب بالفعل، أو يوجد طلب ربط سابق قيد المراجعة أو مرفوض."
          ],
          "en": [
            "**Purpose**: Search for a student account using their email address, and send a account link request as a parent.",
            "**Request Body Fields**:",
            "**Search Phase**:",
            "**Send Request (Link Request Phase)**:",
            "**Side Effects**:",
            "Creates a record in `parent_children` with status `pending`.",
            "Sends an instant high-priority notification to the student's account containing a direct link to review and approve the request (`/academy/student/parent-requests`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`400 Bad Request`: Missing data or invalid relation type.",
            "`404 Not Found`: No student found with this email.",
            "`409 Conflict`: The student is already linked to the account, or a previous link request is under review or rejected."
          ]
        }
      }
    ]
  },
  {
    "slug": "supervisors",
    "group": "staff",
    "icon": "supervisor",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "لوحات المشرفين التخصصية",
      "en": "Specialized Supervisors Dashboards"
    },
    "description": {
      "ar": "أدوات مشرفي المحتوى، الفقه، الجودة، الطلاب، والمقرئين.",
      "en": "Supervision tools for content, fiqh, quality, student, and reader supervisors."
    },
    "audience": {
      "ar": "المشرفون التخصصيون",
      "en": "Specialized Supervisors"
    },
    "keywords": {
      "ar": [
        "لوحات المشرفين التخصصية",
        "أدوات مشرفي المحتوى، الفقه، الجودة، الطلاب، والمقرئين.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Specialized Supervisors Dashboards",
        "Supervision tools for content, fiqh, quality, student, and reader supervisors.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/academy/supervisor"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحات التحكم الخاصة بالمشرفين المعتمدين بـ 3 تخصصات مختلفة (`/academy/supervisor`, `/academy/content-supervisor`, `/academy/fiqh-supervisor`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/supervisor/`). ---",
          "en": "This section provides comprehensive and detailed technical documentation for the control panels dedicated to authorized supervisors across 3 different specializations (`/academy/supervisor`, `/academy/content-supervisor`, `/academy/fiqh-supervisor`) and their associated API endpoints (`app/api/academy/supervisor/`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الشامل والتفصيلي للوحات التحكم الخاصة بالمشرفين المعتمدين بـ 3 تخصصات مختلفة (`/academy/supervisor`, `/academy/content-supervisor`, `/academy/fiqh-supervisor`) ونقاط الاتصال البرمجية التابعة لها (`app/api/academy/supervisor/`). ---"
          ],
          "en": [
            "This section provides comprehensive and detailed technical documentation for the control panels dedicated to authorized supervisors across 3 different specializations (`/academy/supervisor`, `/academy/content-supervisor`, `/academy/fiqh-supervisor`) and their associated API endpoints (`app/api/academy/supervisor/`). ---"
          ]
        }
      },
      {
        "id": "أولاً-الفروقات-بين-أدوار-المشرفين-والصلاحيات-supervisor-roles-permissions-",
        "title": {
          "ar": "أولاً: الفروقات بين أدوار المشرفين والصلاحيات (Supervisor Roles & Permissions)",
          "en": "First: Differences Between Supervisor Roles & Permissions"
        },
        "intro": {
          "ar": "تتوزع مسؤوليات الإشراف في الأكاديمية على ثلاثة أدوار رئيسية مستقلة تضمن التخصصية والجودة:",
          "en": "Supervisory responsibilities in the Academy are distributed across three main independent roles ensuring specialization and quality:"
        },
        "steps": {
          "ar": [
            "تتوزع مسؤوليات الإشراف في الأكاديمية على ثلاثة أدوار رئيسية مستقلة تضمن التخصصية والجودة:"
          ],
          "en": [
            "Supervisory responsibilities in the Academy are distributed across three main independent roles ensuring specialization and quality:"
          ]
        }
      },
      {
        "id": "1-المشرف-العام-general-supervisor-academy-supervisor-",
        "title": {
          "ar": "1. المشرف العام (General Supervisor - `/academy/supervisor`)",
          "en": "1. General Supervisor (`/academy/supervisor`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: لوحة التحكم المركزية للإشراف الإداري والأكاديمي العام على سير العملية التعليمية بالمنصة، متابعة أداء وتوثيق المعلمين، مراقبة منتديات النقاش والبلاغات، ومتابعة الإشعارات والأسئلة.",
            "**الأدوار المسموح لها بالوصول**: `supervisor`, `student_supervisor`, `reciter_supervisor`, `admin`, `academy_admin`.",
            "**الصلاحيات والوظائف**:",
            "فحص وتوثيق حسابات المعلمين (`is_verified`).",
            "الإشراف على منتديات الطلاب ومراجعة وحذف البلاغات وحل الشكاوى.",
            "متابعة استفسارات الطلاب والرسائل الإشعارية العامة."
          ],
          "en": [
            "**Purpose**: The central control panel for general administrative and academic oversight of the educational process on the platform, tracking teacher performance and verification, monitoring discussion forums and reports, and managing notifications and inquiries.",
            "**Allowed Roles for Access**: `supervisor`, `student_supervisor`, `reciter_supervisor`, `admin`, `academy_admin`.",
            "**Permissions & Functions**:",
            "Inspecting and verifying teacher accounts (`is_verified`).",
            "Supervising student forums, reviewing and deleting reports, and resolving complaints.",
            "Tracking student inquiries and general notification messages."
          ]
        }
      },
      {
        "id": "2-مشرف-المحتوى-content-supervisor-academy-content-supervisor-",
        "title": {
          "ar": "2. مشرف المحتوى (Content Supervisor - `/academy/content-supervisor`)",
          "en": "2. Content Supervisor (`/academy/content-supervisor`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: لوحة التحكم المتخصصة في تدقيق وفحص الجودة الأكاديمية والفنية لكافة المواد التعليمية التي يرفعها المعلمون قبل اعتمادها ونشرها للجمهور والطلاب.",
            "**الأدوار المسموح لها بالوصول**: `content_supervisor`, `admin`, `academy_admin`.",
            "**الصلاحيات والوظائف**:",
            "مراجعة واعتماد/رفض مسودات الدورات التعليمية كاملة (`courses`).",
            "مراجعة الدروس الفردية والملفات التوضيحية المرئية (`content`).",
            "مراجعة واختبار المسارات التعليمية الأكاديمية ومسارات التجويد والحفظ (`academy-paths`, `paths`).",
            "مراجعة واعتماد السلاسل الدروس المتتابعة (`series`)."
          ],
          "en": [
            "**Purpose**: A specialized control panel for auditing and checking the academic and technical quality of all educational materials uploaded by teachers before approval and publication to the public and students.",
            "**Allowed Roles for Access**: `content_supervisor`, `admin`, `academy_admin`.",
            "**Permissions & Functions**:",
            "Reviewing and approving/rejecting entire educational course drafts (`courses`).",
            "Reviewing individual lessons and visual explanatory files (`content`).",
            "Reviewing and testing academic learning paths, Tajweed paths, and memorization paths (`academy-paths`, `paths`).",
            "Reviewing and approving sequential lesson series (`series`)."
          ]
        }
      },
      {
        "id": "3-مشرف-الفقه-fiqh-supervisor-academy-fiqh-supervisor-",
        "title": {
          "ar": "3. مشرف الفقه (Fiqh Supervisor - `/academy/fiqh-supervisor`)",
          "en": "3. Fiqh Supervisor (`/academy/fiqh-supervisor`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: لوحة التحكم الشرعية المخصصة لاستقبال الأسئلة والاستفسارات الفقهية المقدمة من الطلاب والقراء، إعداد الإجابات المعتمدة وتدقيقها، وإدارتها قبل النشر.",
            "**الأدوار المسموح لها بالوصول**: `fiqh_supervisor`, `admin`, `academy_admin` (إضافة إلى `supervisor` في بعض وظائف الإجابة والاستعراض).",
            "**الصلاحيات والوظائف**:",
            "مراجعة أسئلة الطلاب الفقهية غير المجاب عنها (`pending`).",
            "كتابة وتدقيق الإجابات الشرعية ونشر المعتمد منها للعامة (`published`).",
            "إرسال الإشعارات والتنبيهات الشرعية والتوجيهية للطلاب والقراء."
          ],
          "en": [
            "**Purpose**: A dedicated Sharia control panel for receiving jurisprudence (Fiqh) questions and inquiries submitted by students and reciters, preparing and auditing approved answers, and managing them prior to publication.",
            "**Allowed Roles for Access**: `fiqh_supervisor`, `admin`, `academy_admin` (in addition to `supervisor` in certain answering and viewing functions).",
            "**Permissions & Functions**:",
            "Reviewing unanswered Fiqh questions from students (`pending`).",
            "Drafting and auditing Sharia answers and publishing approved ones to the public (`published`).",
            "Sending Sharia notifications and guidance alerts to students and reciters."
          ]
        }
      },
      {
        "id": "1-get-api-academy-supervisor-academy-paths-",
        "title": {
          "ar": "1. `GET /api/academy/supervisor/academy-paths`",
          "en": "1. `GET /api/academy/supervisor/academy-paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب قائمة المسارات التعليمية الأكاديمية (`learning_paths`) بانتظار مراجعة مشرف المحتوى أو المعتمدة/المرفوضة.",
            "**الأدوار المسموح لها**: `content_supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**:",
            "`status`: `'pending' | 'approved' | 'rejected' | 'all'` (default: `'pending'`).",
            "`search`: البحث بعنوان المسار أو اسم المنشئ (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة المسارات الأكاديمية (`id`, `title`, `description`, `subject`, `level`, `estimated_hours`, `status`, `rejection_reason`, `creator_name`, `reviewer_name`, `created_at`).",
            "`counts`: تجميعية الأعداد حسب كل حالة (`pending`, `approved`, `rejected`, `all`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`503 Service Unavailable`: عدم تشغيل سكربت التحديثات (`migration_not_applied`).",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**: Fetch a list of academic learning paths (`learning_paths`) awaiting content supervisor review, or approved/rejected.",
            "**Allowed Roles**: `content_supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**:",
            "`status`: `'pending' | 'approved' | 'rejected' | 'all'` (default: `'pending'`).",
            "`search`: Search by path title or creator name (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of academic paths (`id`, `title`, `description`, `subject`, `level`, `estimated_hours`, `status`, `rejection_reason`, `creator_name`, `reviewer_name`, `created_at`).",
            "`counts`: Count aggregations per status (`pending`, `approved`, `rejected`, `all`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`503 Service Unavailable`: Migration script not executed (`migration_not_applied`).",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "2-get-api-academy-supervisor-content-",
        "title": {
          "ar": "2. `GET /api/academy/supervisor/content`",
          "en": "2. `GET /api/academy/supervisor/content`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب الدروس الفردية (`lessons`) التابعة للدورات والمرفوعة بانتظار مراجعة المحتوى والتدقيق الفني قبل النشر.",
            "**الأدوار المسموح لها**: `content_supervisor`, `supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**:",
            "`status`: `'pending' | 'approved' | 'rejected' | 'all'` (default: `'pending'`).",
            "`search`: تصفية بحسب اسم الدرس أو اسم الدورة أو المعلم (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة الدروس (`id`, `title`, `description`, `video_url`, `duration_minutes`, `status`, `review_notes`, `course_title`, `teacher_name`, `reviewer_name`).",
            "`counts`: إحصائيات الحالات (`pending`, `approved`, `rejected`, `all`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**: Fetch individual lessons (`lessons`) belonging to courses uploaded and awaiting content review and technical audit prior to publication.",
            "**Allowed Roles**: `content_supervisor`, `supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**:",
            "`status`: `'pending' | 'approved' | 'rejected' | 'all'` (default: `'pending'`).",
            "`search`: Filter by lesson name, course name, or teacher name (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of lessons (`id`, `title`, `description`, `video_url`, `duration_minutes`, `status`, `review_notes`, `course_title`, `teacher_name`, `reviewer_name`).",
            "`counts`: Status statistics (`pending`, `approved`, `rejected`, `all`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "3-get-api-academy-supervisor-courses-",
        "title": {
          "ar": "3. `GET /api/academy/supervisor/courses`",
          "en": "3. `GET /api/academy/supervisor/courses`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب قائمة الدورات التدريبية كاملة بانتظار مراجعة واعتماد مشرف المحتوى، غير مقيدة بتخصص محدد لمعاينة الهيكل والأهداف العامة.",
            "**الأدوار المسموح لها**: `content_supervisor`, `supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**: `?status=pending|approved|rejected|all&search=`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة الدورات (`id`, `title`, `description`, `thumbnail_url`, `status`, `level`, `rejection_reason`, `teacher_name`, `reviewer_name`, `total_lessons`).",
            "`counts`: تجميعة أعداد الحالات.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**: Fetch the complete list of training courses awaiting content supervisor review and approval, unrestricted by specialization, to inspect structure and general objectives.",
            "**Allowed Roles**: `content_supervisor`, `supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**: `?status=pending|approved|rejected|all&search=`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of courses (`id`, `title`, `description`, `thumbnail_url`, `status`, `level`, `rejection_reason`, `teacher_name`, `reviewer_name`, `total_lessons`).",
            "`counts`: Aggregation of status counts.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "4-get-api-academy-supervisor-fiqh-",
        "title": {
          "ar": "4. `GET /api/academy/supervisor/fiqh`",
          "en": "4. `GET /api/academy/supervisor/fiqh`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب الأسئلة الفقهية المرفوعة من المستخدمين مقسمة حسب تبويبات المراجعة (`pending`: معلقة، `answered`: مجاب عنها، `published`: منشورة).",
            "**الأدوار المسموح لها**: `supervisor`, `student_supervisor`, `reciter_supervisor`, `fiqh_supervisor`, `admin`.",
            "**Request Query Params**:",
            "`tab`: `'all' | 'pending' | 'answered' | 'published'` (default: `'all'`).",
            "`search`: بحث في نص السؤال أو الفئة (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`questions`: قائمة الأسئلة (`id`, `question`, `category`, `answer`, `answered_by`, `is_published`, `asker_name`, `created_at`).",
            "`counts`: أعداد الأسئلة بكل حالة (`pending`, `answered`, `published`).",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**: Fetch Fiqh questions submitted by users, divided by review tabs (`pending`: pending, `answered`: answered, `published`: published).",
            "**Allowed Roles**: `supervisor`, `student_supervisor`, `reciter_supervisor`, `fiqh_supervisor`, `admin`.",
            "**Request Query Params**:",
            "`tab`: `'all' | 'pending' | 'answered' | 'published'` (default: `'all'`).",
            "`search`: Search within question text or category (optional).",
            "**Response Fields (HTTP 200 OK)**:",
            "`questions`: List of questions (`id`, `question`, `category`, `answer`, `answered_by`, `is_published`, `asker_name`, `created_at`).",
            "`counts`: Question counts per status (`pending`, `answered`, `published`).",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "5-get-patch-api-academy-supervisor-forum-",
        "title": {
          "ar": "5. `GET` & `PATCH /api/academy/supervisor/forum`",
          "en": "5. `GET` & `PATCH /api/academy/supervisor/forum`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: جلب منشورات منتدى الأكاديمية مع إمكانية عرض المنشورات المبلغ عنها (`tab = 'reported'`) أو المنتهية (`resolved`).",
            "`PATCH`: إدارة منشورات المنتدى (حل البلاغ `action = 'resolve'`، إضافة بلاغ جديد `action = 'report'`، أو حذف المنشور المخالف `action = 'delete'`).",
            "**PATCH Request Body Fields**: `{ \"postId\": \"UUID\", \"action\": \"resolve | report | delete\", \"reason\": \"string (optional)\" }`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetch Academy forum posts with support for displaying reported posts (`tab = 'reported'`) or resolved ones (`resolved`).",
            "`PATCH`: Manage forum posts (resolve report `action = 'resolve'`, add new report `action = 'report'`, or delete violating post `action = 'delete'`).",
            "**PATCH Request Body Fields**: `{ \"postId\": \"UUID\", \"action\": \"resolve | report | delete\", \"reason\": \"string (optional)\" }`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "6-get-patch-api-academy-supervisor-notifications-",
        "title": {
          "ar": "6. `GET` & `PATCH /api/academy/supervisor/notifications`",
          "en": "6. `GET` & `PATCH /api/academy/supervisor/notifications`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: استرجاع قائمة الإشعارات الخاصة بحساب المشرف الحالي مع عداد الرسائل غير المقروءة `unreadCount`.",
            "`PATCH`: قراءة إشعار محدد أو تحديد جميع الإشعارات كـ مقروءة دفعة واحدة.",
            "**PATCH Request Body Fields**: `{ \"notificationId\": \"UUID (optional)\", \"isRead\": true, \"markAllAsRead\": boolean (optional) }`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Retrieve the list of notifications for the current supervisor account along with unread message counter `unreadCount`.",
            "`PATCH`: Read a specific notification or mark all notifications as read in bulk.",
            "**PATCH Request Body Fields**: `{ \"notificationId\": \"UUID (optional)\", \"isRead\": true, \"markAllAsRead\": boolean (optional) }`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "7-get-api-academy-supervisor-paths-",
        "title": {
          "ar": "7. `GET /api/academy/supervisor/paths`",
          "en": "7. `GET /api/academy/supervisor/paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب مصفوفة موحدة تدمج مسارات التجويد (`tajweed_paths`) ومسارات الحفظ (`memorization_paths`) المرفوعة بانتظار مراجعة مشرف المحتوى مع تحديد نوع المسار `path_type` بكل سجل.",
            "**الأدوار المسموح لها**: `content_supervisor`, `supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**: `?status=pending|approved|rejected|all&search=`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة دمج المسارات (`id`, `title`, `description`, `thumbnail_url`, `level`, `status`, `path_type ('tajweed' | 'memorization')`, `creator_name`, `reviewer_name`).",
            "`counts`: إحصائيات الحالات المجمعة للمسارين.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`503 Service Unavailable`: السكربت `scripts/030-content-review-workflow.sql` غير منفذ.",
            "`500 Internal Server Error`: خطأ بالنظام."
          ],
          "en": [
            "**Purpose**: Fetch a unified array merging Tajweed paths (`tajweed_paths`) and memorization paths (`memorization_paths`) uploaded awaiting content supervisor review, specifying the path type `path_type` in each record.",
            "**Allowed Roles**: `content_supervisor`, `supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**: `?status=pending|approved|rejected|all&search=`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Merged paths array (`id`, `title`, `description`, `thumbnail_url`, `level`, `status`, `path_type ('tajweed' | 'memorization')`, `creator_name`, `reviewer_name`).",
            "`counts`: Combined status statistics for both path types.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`503 Service Unavailable`: Script `scripts/030-content-review-workflow.sql` not executed.",
            "`500 Internal Server Error`: System error."
          ]
        }
      },
      {
        "id": "8-get-api-academy-supervisor-series-",
        "title": {
          "ar": "8. `GET /api/academy/supervisor/series`",
          "en": "8. `GET /api/academy/supervisor/series`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب كافة السلاسل الدروس والتعلم الأكاديمية المنشأة بانتظار المراجعة والاعتماد.",
            "**الأدوار المسموح لها**: `content_supervisor`, `supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**: `?status=pending|approved|rejected|all&search=`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة السلاسل التعليمية (`id`, `title`, `description`, `subject`, `status`, `teacher_name`, `reviewer_name`, `total_items`).",
            "`counts`: أعداد السلاسل بكل حالة.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`503 Service Unavailable`: عدم تنفيذ السكربت 030.",
            "`500 Internal Server Error`: خطأ بالخادم."
          ],
          "en": [
            "**Purpose**: Fetch all created lesson series and academic learning series awaiting review and approval.",
            "**Allowed Roles**: `content_supervisor`, `supervisor`, `academy_admin`, `admin`.",
            "**Request Query Params**: `?status=pending|approved|rejected|all&search=`.",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of educational series (`id`, `title`, `description`, `subject`, `status`, `teacher_name`, `reviewer_name`, `total_items`).",
            "`counts`: Counts of series per status.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`503 Service Unavailable`: Script 030 not executed.",
            "`500 Internal Server Error`: Server error."
          ]
        }
      },
      {
        "id": "9-get-api-academy-supervisor-teachers-",
        "title": {
          "ar": "9. `GET /api/academy/supervisor/teachers`",
          "en": "9. `GET /api/academy/supervisor/teachers`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب قائمة معلمات ومعلمي الأكاديمية مع حالة التوثيق والأمان (`is_verified`) لإتاحة فحص وتوثيق المعلمين وسحب التوثيق.",
            "**الأدوار المسموح لها**: جميع أدوار المشرفين المعتمدين (`SUPERVISOR_ROLES`).",
            "**Request Query Params**: `?status=pending|verified|all` (default: `'all'`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: مصفوفة المعلمين (`id`, `name`, `email`, `phone`, `bio`, `specialization`, `years_of_experience`, `rating`, `is_verified`, `is_accepting_students`, `courses_count`, `students_count`).",
            "`counts`: `{ pending, verified, all }`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مصرح.",
            "`500 Internal Server Error`: خطأ بالنظام."
          ],
          "en": [
            "**Purpose**: Fetch a list of female and male Academy teachers along with verification and safety status (`is_verified`) to enable inspecting, verifying, and revoking verification of teachers.",
            "**Allowed Roles**: All authorized supervisor roles (`SUPERVISOR_ROLES`).",
            "**Request Query Params**: `?status=pending|verified|all` (default: `'all'`).",
            "**Response Fields (HTTP 200 OK)**:",
            "`data`: Array of teachers (`id`, `name`, `email`, `phone`, `bio`, `specialization`, `years_of_experience`, `rating`, `is_verified`, `is_accepting_students`, `courses_count`, `students_count`).",
            "`counts`: `{ pending, verified, all }`.",
            "**Error Cases**:",
            "`401 Unauthorized`: Unauthorized.",
            "`500 Internal Server Error`: System error."
          ]
        }
      }
    ]
  },
  {
    "slug": "fiqh-system",
    "group": "support",
    "icon": "support",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "منظومة الفقه والفتوى",
      "en": "Fiqh & Fatwa System"
    },
    "description": {
      "ar": "إدارة الأسئلة الفقهية، الفتاوى، تصنيف المسائل، وإجابات العلماء.",
      "en": "Fiqh questions, fatwas, category classification, and scholars answers."
    },
    "audience": {
      "ar": "الطلاب والمفتون ومشرفو الفقه",
      "en": "Students, Scholars, and Fiqh Supervisors"
    },
    "keywords": {
      "ar": [
        "منظومة الفقه والفتوى",
        "إدارة الأسئلة الفقهية، الفتاوى، تصنيف المسائل، وإجابات العلماء.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Fiqh & Fatwa System",
        "Fiqh questions, fatwas, category classification, and scholars answers.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/academy/fiqh"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل لمنظومة الفقه الاستشارية والفتوى بالأكاديمية (`/academy/fiqh`)، مبيناً دورة حياة السؤال والجواب، صلاحيات المسؤولين الشرعيين والمشرفين، وآلية النشر العام في المكتبة الفقهية. ---",
          "en": "This section provides comprehensive architectural and field technical documentation for the Fiqh advisory and Fatwa system in the Academy (`/academy/fiqh`), detailing the question and answer lifecycle, permissions of Sharia officers and supervisors, and the mechanism for public publishing in the Fiqh library. ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل لمنظومة الفقه الاستشارية والفتوى بالأكاديمية (`/academy/fiqh`)، مبيناً دورة حياة السؤال والجواب، صلاحيات المسؤولين الشرعيين والمشرفين، وآلية النشر العام في المكتبة الفقهية. ---"
          ],
          "en": [
            "This section provides comprehensive architectural and field technical documentation for the Fiqh advisory and Fatwa system in the Academy (`/academy/fiqh`), detailing the question and answer lifecycle, permissions of Sharia officers and supervisors, and the mechanism for public publishing in the Fiqh library. ---"
          ]
        }
      },
      {
        "id": "أولاً-المسار-الرئيسي-للواجهة-العامة-والطلاب-academy-fiqh-",
        "title": {
          "ar": "أولاً: المسار الرئيسي للواجهة العامة والطلاب (`/academy/fiqh`)",
          "en": "First: Main Route for Public Interface and Students (`/academy/fiqh`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: المركز الموحد لاستعراض المكتبة الفقهية المفتوحة للجمهور، متابعة الأسئلة الخاصة بالطلاب، وطرح الاستفسارات الفقهية الجديدة.",
            "**الأدوار المسموح لها بالوصول**:",
            "**التصفح والمكتبة العامة**: متاح لكافة الزوار والجمهور دون الحاجة لتسجيل الدخول (`Unauthenticated Users`).",
            "**طرح سؤال ومتابعة الأسئلة الشخصية**: متاح لجميع المستخدمين المسجلين بالمنصة (`student`, `reader`, `parent`, `teacher`, `admin`).",
            "**أقسام وتبويبات الواجهة الرئيسية (`Tabs`)**:",
            "`library` (المكتبة الفقهية العامة): عرض الفتاوى والأسئلة المنشورة المعتمدة، مع إمكانية التصفية حسب الفئة الشرعية (`category`) والبحث النصي (`q`).",
            "`mine` (أسئلتي الفقهية): استعراض كافة الأسئلة الخاصة بالطالب وقراءتها بمختلف حالاتها (`pending`, `assigned`, `in_progress`, `answered`, `awaiting_consent`, `published`, `closed`).",
            "`ask` (طرح سؤال فقهي): نموذج إرسال استفسار جديد يتيح اختيار التصنيف الشرعي وتفعيل الخصوصية وإخفاء الهوية (`isAnonymous`)."
          ],
          "en": [
            "**Purpose**: The unified center for browsing the public Fiqh library open to the public, tracking private student questions, and submitting new Fiqh inquiries.",
            "**Allowed Roles for Access**:",
            "**Browsing & Public Library**: Available to all visitors and the public without requiring login (`Unauthenticated Users`).",
            "**Asking a Question & Tracking Personal Questions**: Available to all registered users on the platform (`student`, `reader`, `parent`, `teacher`, `admin`).",
            "**Main Interface Tabs (`Tabs`)**:",
            "`library` (Public Fiqh Library): Displays approved published Fatwas and questions, with filtering capabilities by Sharia category (`category`) and text search (`q`).",
            "`mine` (My Fiqh Questions): Browsing all private questions of the student and reading them across various statuses (`pending`, `assigned`, `in_progress`, `answered`, `awaiting_consent`, `published`, `closed`).",
            "`ask` (Submit Fiqh Question): Form for submitting a new inquiry, allowing selection of Sharia category and enabling privacy/anonymity (`isAnonymous`)."
          ]
        }
      },
      {
        "id": "ثانياً-دورة-حياة-السؤال-والجواب-بالكامل-end-to-end-question-answer-lifecycle-",
        "title": {
          "ar": "ثانياً: دورة حياة السؤال والجواب بالكامل (End-to-End Question & Answer Lifecycle)",
          "en": "Second: End-to-End Question & Answer Lifecycle"
        },
        "intro": {
          "ar": "تدار منظومة الأسئلة الفقهية من لحظة كتابة السؤال حتى النشر عبر 4 مراحل متلسلسلة ومحكمة: ```mermaid flowchart TD A[\"طالب / مستخدم يرسل سؤالاً عبر POST /api/academy/fiqh\"] --> B{\"فحص التعيين التلقائي pickOfficerForCategory\"} B -- \"يوجد مسجل شرعي متفرغ\" --> C[\"الحالة: assigned وتعيين assigned_to = officer_id\"] B -- \"لا يوجد مسؤول مخصص\" --> D[\"الحالة: pending وإحالة الطلب للجدول العام\"] C --> E[\"إرسال إشعارات فورية للمسؤول الشرعي والمشرفين notifyNewFiqhQuestion\"] D --> E E --> F[\"المسؤول الشرعي / مشرف الفقه يجيب عبر POST /api/academy/fiqh/[id]/answer\"] F --> G[\"تعديل الحالة إلى awaiting_consent وطلب موافقة السائل على النشر\"] G --> H[\"إرسال إشعار فوري + إيميل رسمي للسائل بالإجابة ورابط الموافقة\"] H --> I{\"قرار صاحب السؤال عبر POST /api/academy/fiqh/[id]/consent\"} I -- \"موافقة على النشر (grant)\" --> J[\"الحالة: published + ظهور السؤال والمستند في المكتبة العامة\"] I -- \"رفض النشر (deny)\" --> K[\"الحالة: closed + خروج السؤال من المكتبة العامة وبقاؤه خاصاً للسائل\"] ```",
          "en": "The Fiqh questions system is managed from the moment a question is written until publication through 4 sequential and controlled stages: ```mermaid flowchart TD A[\"Student / user submits a question via POST /api/academy/fiqh\"] --> B{\"Check auto-assignment pickOfficerForCategory\"} B -- \"Available Sharia officer exists\" --> C[\"Status: assigned and set assigned_to = officer_id\"] B -- \"No designated officer\" --> D[\"Status: pending and refer request to general table\"] C --> E[\"Send instant notifications to Sharia officer and supervisors notifyNewFiqhQuestion\"] D --> E E --> F[\"Sharia officer / Fiqh supervisor answers via POST /api/academy/fiqh/[id]/answer\"] F --> G[\"Change status to awaiting_consent and request asker consent for publication\"] G --> H[\"Send instant notification + official email to asker with answer and consent link\"] H --> I{\"Asker decision via POST /api/academy/fiqh/[id]/consent\"} I -- \"Approval for publication (grant)\" --> J[\"Status: published + appearance of question and document in public library\"] I -- \"Rejection of publication (deny)\" --> K[\"Status: closed + removal of question from public library remaining private to asker\"] ```"
        },
        "steps": {
          "ar": [
            "تدار منظومة الأسئلة الفقهية من لحظة كتابة السؤال حتى النشر عبر 4 مراحل متلسلسلة ومحكمة: ```mermaid flowchart TD A[\"طالب / مستخدم يرسل سؤالاً عبر POST /api/academy/fiqh\"] --> B{\"فحص التعيين التلقائي pickOfficerForCategory\"} B -- \"يوجد مسجل شرعي متفرغ\" --> C[\"الحالة: assigned وتعيين assigned_to = officer_id\"] B -- \"لا يوجد مسؤول مخصص\" --> D[\"الحالة: pending وإحالة الطلب للجدول العام\"] C --> E[\"إرسال إشعارات فورية للمسؤول الشرعي والمشرفين notifyNewFiqhQuestion\"] D --> E E --> F[\"المسؤول الشرعي / مشرف الفقه يجيب عبر POST /api/academy/fiqh/[id]/answer\"] F --> G[\"تعديل الحالة إلى awaiting_consent وطلب موافقة السائل على النشر\"] G --> H[\"إرسال إشعار فوري + إيميل رسمي للسائل بالإجابة ورابط الموافقة\"] H --> I{\"قرار صاحب السؤال عبر POST /api/academy/fiqh/[id]/consent\"} I -- \"موافقة على النشر (grant)\" --> J[\"الحالة: published + ظهور السؤال والمستند في المكتبة العامة\"] I -- \"رفض النشر (deny)\" --> K[\"الحالة: closed + خروج السؤال من المكتبة العامة وبقاؤه خاصاً للسائل\"] ```"
          ],
          "en": [
            "The Fiqh questions system is managed from the moment a question is written until publication through 4 sequential and controlled stages: ```mermaid flowchart TD A[\"Student / user submits a question via POST /api/academy/fiqh\"] --> B{\"Check auto-assignment pickOfficerForCategory\"} B -- \"Available Sharia officer exists\" --> C[\"Status: assigned and set assigned_to = officer_id\"] B -- \"No designated officer\" --> D[\"Status: pending and refer request to general table\"] C --> E[\"Send instant notifications to Sharia officer and supervisors notifyNewFiqhQuestion\"] D --> E E --> F[\"Sharia officer / Fiqh supervisor answers via POST /api/academy/fiqh/[id]/answer\"] F --> G[\"Change status to awaiting_consent and request asker consent for publication\"] G --> H[\"Send instant notification + official email to asker with answer and consent link\"] H --> I{\"Asker decision via POST /api/academy/fiqh/[id]/consent\"} I -- \"Approval for publication (grant)\" --> J[\"Status: published + appearance of question and document in public library\"] I -- \"Rejection of publication (deny)\" --> K[\"Status: closed + removal of question from public library remaining private to asker\"] ```"
          ]
        }
      },
      {
        "id": "1-مرحلة-الإنشاء-والتعيين-التلقائي-question-submission-auto-assignment-",
        "title": {
          "ar": "1. مرحلة الإنشاء والتعيين التلقائي (Question Submission & Auto-Assignment)",
          "en": "1. Question Submission & Auto-Assignment Phase"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "يرسل المستخدم السؤال عبر `POST /api/academy/fiqh` (أو `POST /api/academy/student/fiqh`).",
            "يقوم النظام بتحديد المسؤول الشرعي المناسب أوتوماتيكياً عبر `pickOfficerForCategory(categoryId)` من خلال اختيار المسؤول صاحب أقل عدد أسئلة قيد المراجعة في هذه الفئة.",
            "إذا وجد مسؤول شرعي تتحول الحالة إلى `assigned`؛ وإذا لم يوجد تحول الحالة إلى `pending` وتظهر في صندوق الوارد العام لمشرفي الفقه والمدراء.",
            "تُرسل إشعارات لحظية عبر `notifyNewFiqhQuestion` لكل من المسؤول المعين ومشرف الفقه والمدراء."
          ],
          "en": [
            "The user submits the question via `POST /api/academy/fiqh` (or `POST /api/academy/student/fiqh`).",
            "The system automatically selects the appropriate Sharia officer via `pickOfficerForCategory(categoryId)` by picking the officer with the lowest count of pending questions in this category.",
            "If a Sharia officer is found, the status changes to `assigned`; if not, the status changes to `pending` and appears in the general inbox for Fiqh supervisors and admins.",
            "Real-time notifications are sent via `notifyNewFiqhQuestion` to the assigned officer, Fiqh supervisor, and admins."
          ]
        }
      },
      {
        "id": "2-مرحلة-الدراسة-والإجابة-الشرعية-review-answering-",
        "title": {
          "ar": "2. مرحلة الدراسة والإجابة الشرعية (Review & Answering)",
          "en": "2. Review & Answering Phase"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "يدخل المسؤول الشرعي أو مشرف الفقه إلى لوحة صندوق الوارد الخاص به (`GET /api/academy/fiqh?view=inbox` أو `GET /api/academy/supervisor/fiqh`).",
            "يدرس المسؤول السؤال ويكتب الإجابة الشرعية المعتمدة (10 أحرف على الأقل) ويرسلها عبر `POST /api/academy/fiqh/[id]/answer`.",
            "يقوم النظام بتعيين `answered_by = session.sub` وتعديل حالة السؤال إلى `status = 'awaiting_consent'` وحالة طلب النشر إلى `publish_consent = 'requested'`."
          ],
          "en": [
            "The Sharia officer or Fiqh supervisor accesses their personal inbox dashboard (`GET /api/academy/fiqh?view=inbox` or `GET /api/academy/supervisor/fiqh`).",
            "The officer reviews the question, writes the approved Sharia answer (at least 10 characters), and submits it via `POST /api/academy/fiqh/[id]/answer`.",
            "The system sets `answered_by = session.sub`, updates the question status to `status = 'awaiting_consent'`, and sets the publish consent request status to `publish_consent = 'requested'`."
          ]
        }
      },
      {
        "id": "3-مرحلة-الإشعار-وطلب-موافقة-السائل-notification-consent-request-",
        "title": {
          "ar": "3. مرحلة الإشعار وطلب موافقة السائل (Notification & Consent Request)",
          "en": "3. Notification & Consent Request Phase"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "يرسل النظام فوراً إشعاراً في المنصة ورسالة بريد إلكتروني HTML رسمية ومصممة إلى بريد السائل.",
            "تُتيح الرسالة للسائل قراءة الإجابة الخاصة فوراً، وتطلب منه إبداء موافقته أو رفضه لنشر السؤال والإجابة في المكتبة العامة المفتوحة للجمهور، مع خيار النشر المجهول بدون اسم."
          ],
          "en": [
            "The system immediately sends an in-platform notification and an officially designed HTML email to the asker's email.",
            "The message allows the asker to read the private answer immediately and asks them to give approval or rejection for publishing the question and answer in the open public library, with an option for anonymous publishing without a name."
          ]
        }
      },
      {
        "id": "4-مرحلة-قرار-السائل-والنشر-العام-consent-response-publishing-",
        "title": {
          "ar": "4. مرحلة قرار السائل والنشر العام (Consent Response & Publishing)",
          "en": "4. Asker Decision & Public Publishing Phase"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "يتخذ السائل قراره عبر `POST /api/academy/fiqh/[id]/consent`:",
            "**في حالة الموافقة (`decision = 'grant'`)**: يُحدث النظام السجل ليكون `status = 'published'`, `is_published = TRUE`, `published_at = NOW()`. ينزل السؤال فوراً في المكتبة العامة المفتوحة (`GET /api/academy/fiqh?view=library`) ليظهر لكافة زوار المنصة، مع مراعاة إخفاء اسم السائل إذا اختار النشر مجهولاً `is_anonymous = true`.",
            "**في حالة الرفض (`decision = 'deny'`)**: يُحدث النظام السجل ليكون `status = 'closed'`, `is_published = FALSE`. يبقى السؤال والإجابة حصرياً وخاصاً بحساب السائل ولا يظهر أبداً في المكتبة العامة."
          ],
          "en": [
            "The asker makes their decision via `POST /api/academy/fiqh/[id]/consent`:",
            "**In case of approval (`decision = 'grant'`)**: The system updates the record to `status = 'published'`, `is_published = TRUE`, `published_at = NOW()`. The question immediately appears in the open public library (`GET /api/academy/fiqh?view=library`) for all platform visitors, concealing the asker's name if they selected anonymous publishing `is_anonymous = true`.",
            "**In case of rejection (`decision = 'deny'`)**: The system updates the record to `status = 'closed'`, `is_published = FALSE`. The question and answer remain exclusively private to the asker's account and never appear in the public library."
          ]
        }
      },
      {
        "id": "ثالثاً-الربط-بين-نقاط-الاتصال-البرمجية-للمنظومة-interconnected-fiqh-endpoints-",
        "title": {
          "ar": "ثالثاً: الربط بين نقاط الاتصال البرمجية للمنظومة (Interconnected Fiqh Endpoints)",
          "en": "Third: Interconnected Fiqh Endpoints"
        },
        "intro": {
          "ar": "تتكامل وتترابط كافة نقاط الاتصال البرمجية الخاصة بالفقه التي تم توثيقها سابقاً عبر مختلف الأدوار:",
          "en": "All Fiqh API endpoints documented previously integrate and interconnect across various roles:"
        },
        "steps": {
          "ar": [
            "**نقاط اتصال الطالب والجمهور (Student & Public Endpoints)**:",
            "`GET /api/academy/fiqh?view=library`: استرجاع المكتبة العامة المفتوحة المعتمدة فقط دون إظهار أسماء السائلين المجهولين.",
            "`GET /api/academy/fiqh?view=mine` (و `GET /api/academy/student/fiqh`): استرجاع أسئلة الطالب الخاصة بكافة حالاتها وقراءة إجاباتها الخاصة.",
            "`POST /api/academy/fiqh` (و `POST /api/academy/student/fiqh`): تقديم سؤال فقهي جديد وتحديد الفئة وإخفاء الهوية.",
            "`POST /api/academy/fiqh/[id]/consent`: قبول أو رفض النشر العام للفتوى والموافقة على النشر المجهول.",
            "**نقاط اتصال المشرفين والمسؤولين الشرعيين (Supervisor & Officer Endpoints)**:",
            "`GET /api/academy/fiqh?view=inbox`: صندوق الوارد الخاص بالمسؤول الشرعي لاستعراض الأسئلة المسندة إليه.",
            "`GET /api/academy/supervisor/fiqh`: لوحة مشرف الفقه لمتابعة وتصفية الأسئلة (`pending`, `answered`, `published`) وإعادة إسنادها.",
            "`POST /api/academy/fiqh/[id]/answer`: تقديم وإرسال الإجابة الشرعية النهائية وطلب موافقة السائل.",
            "**نقاط اتصال إدارة النظام (Admin Audit Endpoints)**:",
            "`GET /api/academy/fiqh?view=admin` (و `GET /api/academy/admin/fiqh`): الرقابة الإدارية الشاملة على كافة الأسئلة (المفتوحة، بانتظار الموافقة، المنشورة، والمغلقة مع الإجابة) لتدقيق أداء المسؤولين الشرعيين حتى عند رفض السائل للنشر."
          ],
          "en": [
            "**Student & Public Endpoints**:",
            "`GET /api/academy/fiqh?view=library`: Retrieves only approved open public library entries without displaying names of anonymous askers.",
            "`GET /api/academy/fiqh?view=mine` (and `GET /api/academy/student/fiqh`): Retrieves the student's private questions across all statuses and reads their private answers.",
            "`POST /api/academy/fiqh` (and `POST /api/academy/student/fiqh`): Submits a new Fiqh question, specifying category and anonymity.",
            "`POST /api/academy/fiqh/[id]/consent`: Accepts or rejects public publication of the Fatwa and agrees to anonymous publishing.",
            "**Supervisor & Officer Endpoints**:",
            "`GET /api/academy/fiqh?view=inbox`: Sharia officer's inbox for reviewing assigned questions.",
            "`GET /api/academy/supervisor/fiqh`: Fiqh supervisor dashboard for tracking and filtering questions (`pending`, `answered`, `published`) and reassigning them.",
            "`POST /api/academy/fiqh/[id]/answer`: Submits the final Sharia answer and requests asker consent.",
            "**Admin Audit Endpoints**:",
            "`GET /api/academy/fiqh?view=admin` (and `GET /api/academy/admin/fiqh`): Comprehensive administrative oversight over all questions (open, awaiting approval, published, and closed with answer) to audit Sharia officer performance even when the asker rejects publication."
          ]
        }
      }
    ]
  },
  {
    "slug": "digital-library",
    "group": "support",
    "icon": "start",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "المكتبة الرقمية والكتب",
      "en": "Digital Library & Books"
    },
    "description": {
      "ar": "تصفح الكتب والملفات العلمية والمراجع المتاحة للطلاب والزوار.",
      "en": "Digital library catalog, books, files, and scientific resources."
    },
    "audience": {
      "ar": "جميع المستخدمين والطلاب",
      "en": "All users and students"
    },
    "keywords": {
      "ar": [
        "المكتبة الرقمية والكتب",
        "تصفح الكتب والملفات العلمية والمراجع المتاحة للطلاب والزوار.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Digital Library & Books",
        "Digital library catalog, books, files, and scientific resources.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/library"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل لنظام المكتبة الرقمية للأكاديمية (`/academy/library`)، مبيناً آلية إضافة الكتب وتصنيفاتها، رفع وتخزين ملفات الـ PDF والأغلفة، إدارة متعدد اللغات للكتاب، والتحكم بالصلاحيات والبحث. ---",
          "en": "This section provides comprehensive architectural and field technical documentation for the Academy's digital library system (`/academy/library`), detailing book addition mechanisms and categories, uploading and storing PDF files and covers, multi-language book management, and permissions and search controls. ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل لنظام المكتبة الرقمية للأكاديمية (`/academy/library`)، مبيناً آلية إضافة الكتب وتصنيفاتها، رفع وتخزين ملفات الـ PDF والأغلفة، إدارة متعدد اللغات للكتاب، والتحكم بالصلاحيات والبحث. ---"
          ],
          "en": [
            "This section provides comprehensive architectural and field technical documentation for the Academy's digital library system (`/academy/library`), detailing book addition mechanisms and categories, uploading and storing PDF files and covers, multi-language book management, and permissions and search controls. ---"
          ]
        }
      },
      {
        "id": "1-واجهة-المكتبة-العامة-والطلاب-academy-library-",
        "title": {
          "ar": "1. واجهة المكتبة العامة والطلاب (`/academy/library`)",
          "en": "1. Public Library & Student Interface (`/academy/library`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: عرض واستكشاف المراجع والكتب الرقمية المعتمدة والمنشورة، وإتاحة قراءتها وتنزيل النسخ المترجمة بلغات مختلفة.",
            "**الأدوار المسموح لها بالوصول**: جميع المستخدمين المسجلين بالمنصة (`student`, `reader`, `parent`, `teacher`, `admin`).",
            "**آلية استرجاع البيانات**: تستدعي `GET /api/library/books?domain=academy` وترجع فقط الكتب المفعلة والمحددة كمنشورة (`is_published = TRUE`)."
          ],
          "en": [
            "**Purpose**: Display and explore approved and published digital references and books, enabling reading and downloading translated versions in different languages.",
            "**Allowed Roles for Access**: All registered platform users (`student`, `reader`, `parent`, `teacher`, `admin`).",
            "**Data Retrieval Mechanism**: Calls `GET /api/library/books?domain=academy` and returns only active books set as published (`is_published = TRUE`)."
          ]
        }
      },
      {
        "id": "2-لوحة-التحكم-الإدارية-للمكتبة-academy-admin-library-",
        "title": {
          "ar": "2. لوحة التحكم الإدارية للمكتبة (`/academy/admin/library`)",
          "en": "2. Library Administrative Control Panel (`/academy/admin/library`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: الواجهة الخاصة لمدراء المنصة لإضافة مراجع جديدة، تعديل بيانات الكتب، رفع نسخ الـ PDF والترجمات، وتحديد ترتيب الظهور.",
            "**الأدوار المسموح لها بالوصول**: مدراء الأكاديمية والنظام حصراً (`admin`, `academy_admin`)."
          ],
          "en": [
            "**Purpose**: Special interface for platform administrators to add new references, edit book data, upload PDF versions and translations, and set display order.",
            "**Allowed Roles for Access**: Exclusively Academy and System Administrators (`admin`, `academy_admin`)."
          ]
        }
      },
      {
        "id": "ثانياً-آلية-إضافة-وتحديث-وإلغاء-الكتب-how-books-are-managed-",
        "title": {
          "ar": "ثانياً: آلية إضافة وتحديث وإلغاء الكتب (How Books Are Managed)",
          "en": "Second: How Books Are Managed"
        },
        "intro": {
          "ar": "تتم إدارة الكتب بجدول `books` بـ `library_domain = 'academy'` عبر نقاط الاتصال البرمجية التالية:",
          "en": "Books are managed in the `books` table with `library_domain = 'academy'` via the following API endpoints:"
        },
        "steps": {
          "ar": [
            "تتم إدارة الكتب بجدول `books` بـ `library_domain = 'academy'` عبر نقاط الاتصال البرمجية التالية:"
          ],
          "en": [
            "Books are managed in the `books` table with `library_domain = 'academy'` via the following API endpoints:"
          ]
        }
      },
      {
        "id": "1-إنشاء-كتاب-جديد-post-api-academy-admin-library-books-",
        "title": {
          "ar": "1. إنشاء كتاب جديد (`POST /api/academy/admin/library/books`)",
          "en": "1. Create New Book (`POST /api/academy/admin/library/books`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**Request Body Fields**:",
            "**Response (HTTP 201 Created)**: `{ \"id\": \"UUID\" }`."
          ],
          "en": [
            "**Request Body Fields**:",
            "**Response (HTTP 201 Created)**: `{ \"id\": \"UUID\" }`."
          ]
        }
      },
      {
        "id": "2-تحديث-بيانات-الكتاب-patch-api-academy-admin-library-books-id-",
        "title": {
          "ar": "2. تحديث بيانات الكتاب (`PATCH /api/academy/admin/library/books/[id]`)",
          "en": "2. Update Book Data (`PATCH /api/academy/admin/library/books/[id]`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "تتيح تعديل حقل أو أكثر من الحقول المسموح بها (`ALLOWED_FIELDS`: العنوان، المؤلف، الوصف، الغلاف، الصفحات، النشر، الترتيب)."
          ],
          "en": [
            "Allows modifying one or more allowed fields (`ALLOWED_FIELDS`: title, author, description, cover, pages, publication, order)."
          ]
        }
      },
      {
        "id": "3-حذف-الكتاب-بالتنظيف-الآلي-delete-api-academy-admin-library-books-id-",
        "title": {
          "ar": "3. حذف الكتاب بالتنظيف الآلي (`DELETE /api/academy/admin/library/books/[id]`)",
          "en": "3. Delete Book with Automated Cleanup (`DELETE /api/academy/admin/library/books/[id]`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "عند حذف كتاب، يقوم الخادم بحذف سجل الكتاب بجدول `books` وحذف كافة السجلات في `book_files`.",
            "**التنظيف الآلي للملفات (`Storage Cleanup`)**: يستخرج الخادم مفاتيح الـ PDF ومفتاح غلاف الكتاب من AWS S3 ويقوم بحذفها أوتوماتيكياً عبر `deleteFromStorage`."
          ],
          "en": [
            "When a book is deleted, the server deletes the book record in the `books` table and all associated records in `book_files`.",
            "**Storage Cleanup**: The server extracts PDF keys and the book cover key from AWS S3 and automatically deletes them via `deleteFromStorage`."
          ]
        }
      },
      {
        "id": "ثالثاً-آلية-رفع-المرفقات-والنسخ-المترجمة-file-cover-upload-flow-",
        "title": {
          "ar": "ثالثاً: آلية رفع المرفقات والنسخ المترجمة (File & Cover Upload Flow)",
          "en": "Third: File & Cover Upload Flow"
        },
        "intro": {
          "ar": "تتبع الأكاديمية آلية رفع متقدمة تدعم **تعدد اللغات لنفس المرجع** (Multi-Language Book Files): ```mermaid flowchart TD A[\"رفع صورة الغلاف عبر uploadToStorage\"] --> B[\"الحصول على cover_image_url & cover_image_key\"] C[\"رفع ملف الـ PDF عبر POST /api/upload-pdf\"] --> D[\"معالجة وتطهير الاسم transliterate والرفع لـ S3\"] B --> E[\"إنشاء سجل الكتاب عبر POST /api/academy/admin/library/books\"] D --> F[\"ربط ملف اللغة بالكتاب عبر POST /api/academy/admin/library/books/[id]/files\"] E --> F F --> G[\"توليد/تحديث سجل بـ book_files بعلاقة ON CONFLICT (book_id, language)\"] ```",
          "en": "The Academy follows an advanced upload mechanism supporting **multi-language book files for the same reference**: ```mermaid flowchart TD A[\"Upload cover image via uploadToStorage\"] --> B[\"Obtain cover_image_url & cover_image_key\"] C[\"Upload PDF file via POST /api/upload-pdf\"] --> D[\"Process and sanitize name transliterate and upload to S3\"] B --> E[\"Create book record via POST /api/academy/admin/library/books\"] D --> E E --> F[\"Link language file to book via POST /api/academy/admin/library/books/[id]/files\"] F --> G[\"Generate/update record in book_files via ON CONFLICT (book_id, language)\"] ```"
        },
        "steps": {
          "ar": [
            "**رفع صورة الغلاف (Cover Image Upload)**:",
            "يُرفع الغلاف ليُخزن في AWS S3 ويولّد رابطاً `cover_image_url` ومفتاحاً `cover_image_key` يُمرران لنموذج الكتاب.",
            "**رفع ملفات الـ PDF (`POST /api/upload-pdf`)**:",
            "يستقبل ملف الـ PDF عبر `multipart/form-data`.",
            "يتأكد أن نوع الملف `application/pdf` وألا يتجاوز الحجم 20 ميجابايت.",
            "يطهر اسم الملف باللغة الإنجليزية عبر `transliterate` لتجنب المشاكل بالنظام، ويرفعه لـ S3 ليرجع `url` و `key`.",
            "**ربط نسخ اللغات بالكتاب (`POST /api/academy/admin/library/books/[id]/files`)**:",
            "**Request Body Fields**:",
            "**Multi-Language Upsert Logic**: يُحفظ الملف بجدول `book_files`. في حال وجود ملف مسبق لنفس الكتاب بنفس اللغة، يتم تحديث الرابط والمفتاح أوتوماتيكياً عبر `ON CONFLICT (book_id, language) DO UPDATE`."
          ],
          "en": [
            "**Cover Image Upload**:",
            "The cover is uploaded to be stored in AWS S3 and generates a `cover_image_url` and `cover_image_key` passed to the book form.",
            "**Upload PDF Files (`POST /api/upload-pdf`)**:",
            "Receives the PDF file via `multipart/form-data`.",
            "Ensures the file type is `application/pdf` and size does not exceed 20 MB.",
            "Sanitizes the filename into English via `transliterate` to avoid system conflicts, uploads it to S3, returning `url` and `key`.",
            "**Link Language Versions to Book (`POST /api/academy/admin/library/books/[id]/files`)**:",
            "**Request Body Fields**:",
            "**Multi-Language Upsert Logic**: The file is saved in the `book_files` table. If a previous file exists for the same book in the same language, the URL and key are automatically updated via `ON CONFLICT (book_id, language) DO UPDATE`."
          ]
        }
      },
      {
        "id": "1-التصنيفات-الفئوية-categories-",
        "title": {
          "ar": "1. التصنيفات الفئوية (`Categories`)",
          "en": "1. Categories"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "تُجلب قائمة تصنيفات الكتب عبر `GET /api/library/categories?domain=academy`.",
            "يعتمد النظام التصنيفات الفرعية المرتبطة بالفئة الجذرية الخاصة بالكتب (`root.slug = 'book'`) في جدول `categories` المخصصة للأكاديمية."
          ],
          "en": [
            "The list of book categories is fetched via `GET /api/library/categories?domain=academy`.",
            "The system adopts subcategories linked to the root book category (`root.slug = 'book'`) in the `categories` table dedicated to the Academy."
          ]
        }
      },
      {
        "id": "2-البحث-والتصفية-المتعددة-search-filter-capabilities-",
        "title": {
          "ar": "2. البحث والتصفية المتعددة (`Search & Filter Capabilities`)",
          "en": "2. Search & Filter Capabilities"
        },
        "intro": {
          "ar": "تتيح نقطة الاتصال `GET /api/library/books` إمكانيات تصفية مرنة تشمل:",
          "en": "The endpoint `GET /api/library/books` provides flexible filtering capabilities including:"
        },
        "steps": {
          "ar": [
            "**البحث النصي (`search`)**: بحث غير حساس لحالة الأحرف يبحث في عنوان الكتاب واسم المؤلف (`title ILIKE %q% OR author ILIKE %q%`).",
            "**التصفية حسب الفئة (`category`)**: تقبل إما الـ UUID الخاص بالتصنيف `category_id` أو الـ `slug`.",
            "**التصفية حسب اللغة (`language`)**: ترجع الكتب التي تمتلك ملف PDF مرفقاً باللغة المطلوبة عبر استعلام التواجد: `EXISTS (SELECT 1 FROM book_files bf2 WHERE bf2.book_id = b.id AND bf2.language = $language)`."
          ],
          "en": [
            "**Text Search (`search`)**: Case-insensitive search querying book title and author name (`title ILIKE %q% OR author ILIKE %q%`).",
            "**Filter by Category (`category`)**: Accepts either the category UUID `category_id` or the `slug`.",
            "**Filter by Language (`language`)**: Returns books possessing an attached PDF file in the requested language via an existence query: `EXISTS (SELECT 1 FROM book_files bf2 WHERE bf2.book_id = b.id AND bf2.language = $language)`."
          ]
        }
      }
    ]
  },
  {
    "slug": "community",
    "group": "users",
    "icon": "parent",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "قسم المجتمع والمنتدى",
      "en": "Community & Forum"
    },
    "description": {
      "ar": "منتدى النقاشات العلمية، المنشورات، البلاغات، والتفاعل الاجتماعي.",
      "en": "Academic forum discussions, posts, reports, and community interaction."
    },
    "audience": {
      "ar": "جميع المستخدمين والطلاب المعلمين",
      "en": "All active platform members"
    },
    "keywords": {
      "ar": [
        "قسم المجتمع والمنتدى",
        "منتدى النقاشات العلمية، المنشورات، البلاغات، والتفاعل الاجتماعي.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Community & Forum",
        "Academic forum discussions, posts, reports, and community interaction.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/community"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل لنظام المجتمع التفاعلي بالمنصة (`/community`)، مبيناً منظومة المقالات، المنتدى التفاعلي (النقاشات والأسئلة)، البلاغات والإشراف الإداري وحظر الأعضاء، ونظام المحادثات المباشرة. ---",
          "en": "This section provides comprehensive architectural and field technical documentation for the platform's interactive community system (`/community`), detailing the articles system, interactive forum (discussions and Q&A), reports and administrative moderation, member banning, and direct messaging system. ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل لنظام المجتمع التفاعلي بالمنصة (`/community`)، مبيناً منظومة المقالات، المنتدى التفاعلي (النقاشات والأسئلة)، البلاغات والإشراف الإداري وحظر الأعضاء، ونظام المحادثات المباشرة. ---"
          ],
          "en": [
            "This section provides comprehensive architectural and field technical documentation for the platform's interactive community system (`/community`), detailing the articles system, interactive forum (discussions and Q&A), reports and administrative moderation, member banning, and direct messaging system. ---"
          ]
        }
      },
      {
        "id": "-community-community-academy-community-maqraa-",
        "title": {
          "ar": "`/community` (`/community/academy` & `/community/maqraa`)",
          "en": "`/community` (`/community/academy` & `/community/maqraa`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "** الغرض منه**: البوابة المركزية للتفاعل المجتمعي والمعرفي بين الطلاب والمعلمين والقراء، ومشاركة المقالات والتجارب، والمناقشة الفقهية والتعليمية.",
            "**تعدد المجتمعات (Multi-Community System)**:",
            "`academy`: مجتمع الأكاديمية (يضم الطلاب والمعلمين وأولياء الأمور والمشرفين والمدراء).",
            "`maqraa`: مجتمع المقرأة (يضم القراء والطلاب ومشرفي مقرأة التلاوة والمدراء).",
            "**الوصول والصلاحيات**: يتم التحقق الصارم من انتماء المستخدم للمجتمع المطلوب عبر `canAccessCommunity(session, community)`."
          ],
          "en": [
            "**Purpose**: The central gateway for community and knowledge interaction between students, teachers, and reciters, sharing articles and experiences, and Fiqh and educational discussions.",
            "**Multi-Community System**:",
            "`academy`: Academy community (includes students, teachers, parents, supervisors, and admins).",
            "`maqraa`: Maqraa community (includes reciters, students, recitation Maqraa supervisors, and admins).",
            "**Access & Permissions**: Strict verification of user membership in the requested community via `canAccessCommunity(session, community)`."
          ]
        }
      },
      {
        "id": "ثانياً-نظام-المقالات-والتعليقات-والإعجابات-articles-system-",
        "title": {
          "ar": "ثانياً: نظام المقالات والتعليقات والإعجابات (Articles System)",
          "en": "Second: Articles System"
        },
        "intro": {
          "ar": "يسمح نظام المقالات للمعلمين والمشرفين وصناع المحتوى بنشر مقالات ثرية ومفيدة مع دورة مراجعة متكاملة.",
          "en": "The articles system allows teachers, supervisors, and content creators to publish rich, useful articles with a complete review lifecycle."
        },
        "steps": {
          "ar": [
            "يسمح نظام المقالات للمعلمين والمشرفين وصناع المحتوى بنشر مقالات ثرية ومفيدة مع دورة مراجعة متكاملة."
          ],
          "en": [
            "The articles system allows teachers, supervisors, and content creators to publish rich, useful articles with a complete review lifecycle."
          ]
        }
      },
      {
        "id": "1-get-post-api-community-articles-",
        "title": {
          "ar": "1. `GET` & `POST /api/community/articles`",
          "en": "1. `GET` & `POST /api/community/articles`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: جلب المقالات المنشورة (`status = 'published'`) في مجتمع محدد، مع دعم التصفية بالفئة والبحث النصي والصفحات.",
            "`POST`: إنشاء مسودة مقال جديد (`status = 'draft'`).",
            "**POST Request Body Fields**:",
            "**Special Logic**: توليد `slug` فريد تلقائياً وحساب وقت القراءة المقدر `reading_minutes`.",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (عدم امتلاك صلاحية تأليف مقال `canAuthorArticle`), `400 Bad Request`."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetch published articles (`status = 'published'`) in a specified community, with support for category filtering, text search, and pagination.",
            "`POST`: Create a new article draft (`status = 'draft'`).",
            "**POST Request Body Fields**:",
            "**Special Logic**: Automatically generates a unique `slug` and calculates estimated reading time `reading_minutes`.",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (lacking permission to author article `canAuthorArticle`), `400 Bad Request`."
          ]
        }
      },
      {
        "id": "2-get-post-api-community-articles-id-comments-",
        "title": {
          "ar": "2. `GET` & `POST /api/community/articles/[id]/comments`",
          "en": "2. `GET` & `POST /api/community/articles/[id]/comments`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: جلب تعليقات المقال المنشور غير المخفية (`is_hidden = FALSE`).",
            "`POST`: إضافة تعليق جديد على المقال.",
            "**POST Body**: `{ \"content\": \"string (required)\" }`.",
            "**Error Cases**: `401 Unauthorized`, `404 Not Found` (المقال غير موجود أو غير منشور), `400 Bad Request`."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetch non-hidden comments (`is_hidden = FALSE`) of a published article.",
            "`POST`: Add a new comment to the article.",
            "**POST Body**: `{ \"content\": \"string (required)\" }`.",
            "**Error Cases**: `401 Unauthorized`, `404 Not Found` (article does not exist or is not published), `400 Bad Request`."
          ]
        }
      },
      {
        "id": "3-post-api-community-articles-id-like-",
        "title": {
          "ar": "3. `POST /api/community/articles/[id]/like`",
          "en": "3. `POST /api/community/articles/[id]/like`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: الإعجاب بالمقال أو إلغاء الإعجاب أوتوماتيكياً (Toggle Like) والتعديل في جدول `article_likes`.",
            "**Response Fields (HTTP 200 OK)**: `{ \"liked\": boolean }`.",
            "**Error Cases**: `401 Unauthorized`, `404 Not Found`."
          ],
          "en": [
            "**Purpose**: Like an article or automatically cancel a like (Toggle Like) and modify the `article_likes` table.",
            "**Response Fields (HTTP 200 OK)**: `{ \"liked\": boolean }`.",
            "**Error Cases**: `401 Unauthorized`, `404 Not Found`."
          ]
        }
      },
      {
        "id": "ثالثاً-نظام-المنتدى-والنقاشات-والردود-forum-system-",
        "title": {
          "ar": "ثالثاً: نظام المنتدى والنقاشات والردود (Forum System)",
          "en": "Third: Forum System"
        },
        "intro": {
          "ar": "يقدم المنتدى التفاعلي بيئة لطرح النقاشات (`discussion`) والأسئلة والإجابات (`qna`).",
          "en": "The interactive forum provides an environment for initiating discussions (`discussion`) and questions and answers (`qna`)."
        },
        "steps": {
          "ar": [
            "يقدم المنتدى التفاعلي بيئة لطرح النقاشات (`discussion`) والأسئلة والإجابات (`qna`)."
          ],
          "en": [
            "The interactive forum provides an environment for initiating discussions (`discussion`) and questions and answers (`qna`)."
          ]
        }
      },
      {
        "id": "1-get-post-api-community-forum-",
        "title": {
          "ar": "1. `GET` & `POST /api/community/forum`",
          "en": "1. `GET` & `POST /api/community/forum`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: جلب منشورات المنتدى مع دعم الترتيب المتقدم (`hot` الشائع، `new` الأحدث، `top` الأعلى تقييماً، `unanswered` بدون ردود)، والتصفية بحسب `post_type` و `category` والبحث.",
            "`POST`: إضافة منشور جديد للمجتمع مع فحص قيد الحظر `isUserBanned`.",
            "**POST Request Body Fields**:",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (أنت محظور من النشر `isUserBanned`), `400 Bad Request`."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Fetch forum posts with advanced sorting support (`hot` trending, `new` latest, `top` top rated, `unanswered` unanswered), and filtering by `post_type`, `category`, and search.",
            "`POST`: Add a new post to the community after checking ban restrictions `isUserBanned`.",
            "**POST Request Body Fields**:",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (you are banned from posting `isUserBanned`), `400 Bad Request`."
          ]
        }
      },
      {
        "id": "2-post-api-community-forum-id-replies-",
        "title": {
          "ar": "2. `POST /api/community/forum/[id]/replies`",
          "en": "2. `POST /api/community/forum/[id]/replies`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: إضافة رد على منشور قائم في المنتدى، مع إمكانية الرد على رد سابق (`parent_reply_id` للردود المتداخلة).",
            "**Request Body Fields**: `{ \"content\": \"string (required)\", \"parent_reply_id\": \"UUID (optional)\" }`.",
            "**Side Effects**: إرسال إشعارات فورية لصاحب المنشور وصاحب التعليق الأصلي عند الرد.",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (المنشور مغلق `is_locked` أو المستخدم محظور)، `404 Not Found`."
          ],
          "en": [
            "**Purpose**: Add a reply to an existing forum post, with the capability to reply to a previous reply (`parent_reply_id` for nested replies).",
            "**Request Body Fields**: `{ \"content\": \"string (required)\", \"parent_reply_id\": \"UUID (optional)\" }`.",
            "**Side Effects**: Sends real-time notifications to the post owner and original comment owner upon reply.",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (post is locked `is_locked` or user is banned), `404 Not Found`."
          ]
        }
      },
      {
        "id": "3-get-post-api-community-forum-reports-",
        "title": {
          "ar": "3. `GET` & `POST /api/community/forum/reports`",
          "en": "3. `GET` & `POST /api/community/forum/reports`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**:",
            "`GET`: للمشرفين فقط (`canModerate`) لاستعراض البلاغات المرفوعة بحالة `open`.",
            "`POST`: متاح لكافة الأعضاء للإبلاغ عن منشور أو رد مخالف قواعد المجتمع.",
            "**POST Request Body Fields**:",
            "**Error Cases**: `401 Unauthorized`, `404 Not Found` (العنصر غير موجود), `400 Bad Request`."
          ],
          "en": [
            "**Purpose**:",
            "`GET`: Supervisors only (`canModerate`) to review reports filed with status `open`.",
            "`POST`: Available to all members to report a post or reply violating community rules.",
            "**POST Request Body Fields**:",
            "**Error Cases**: `401 Unauthorized`, `404 Not Found` (item does not exist), `400 Bad Request`."
          ]
        }
      },
      {
        "id": "رابعاً-قواعد-الإشراف-والتعديل-وحظر-الأعضاء-moderation-bans-",
        "title": {
          "ar": "رابعاً: قواعد الإشراف والتعديل وحظر الأعضاء (Moderation & Bans)",
          "en": "Fourth: Moderation & Bans"
        },
        "intro": {
          "ar": "يضمن النظام سلامة البيئة المجتمعية عبر أدوات إشراف صارمة ومحددة بنقطة الاتصال `app/api/community/admin/members`:",
          "en": "The system guarantees the safety of the community environment via strict moderation tools defined at the endpoint `app/api/community/admin/members`:"
        },
        "steps": {
          "ar": [
            "**حظر الأعضاء (`POST /api/community/admin/members`)**:",
            "يسمح لمشرفي المجتمع (`isCommunityAdmin`) بحظر أي عضو مخالف (`action = 'ban'`) مع تحديد سبب الحظر `reason` وتاريخ الانتهاء `expires_at` (أو حظر دائم)، أو فك الحظر (`action = 'unban'`).",
            "عند حظر العضو، يُمنع فوراً من إضافة مقالات أو منشورات أو ردود بجميع نقاط الاتصال التابعة للمجتمع عبر فحص `isUserBanned`.",
            "**قاعدة منع الاستعلاء**: يُمنع المشرف أو الأدمن من حظر نفسه (`user_id === session.sub`).",
            "**إخفاء وتثبيت وقفل المحتوى (`Moderation Actions`)**:",
            "يمتلك المشرفون صلاحية تثبيت المنشورات المتميزة `is_pinned = TRUE`.",
            "قفل المنشورات `is_locked = TRUE` لمنع إضافة ردود جديدة.",
            "إخفاء المنشورات والتعليقات المخالفة `is_hidden = TRUE` لتعود مرئية للمشرفين والمدراء فقط."
          ],
          "en": [
            "**Banning Members (`POST /api/community/admin/members`)**:",
            "Allows community administrators (`isCommunityAdmin`) to ban any violating member (`action = 'ban'`), specifying ban reason `reason` and expiration date `expires_at` (or permanent ban), or unban (`action = 'unban'`).",
            "When a member is banned, they are immediately prohibited from adding articles, posts, or replies across all community endpoints via `isUserBanned` check.",
            "**Self-Ban Prevention Rule**: A supervisor or admin is prevented from banning themselves (`user_id === session.sub`).",
            "**Moderation Actions**:",
            "Supervisors possess authority to pin featured posts `is_pinned = TRUE`.",
            "Lock posts `is_locked = TRUE` to prevent adding new replies.",
            "Hide violating posts and comments `is_hidden = TRUE` making them visible only to supervisors and admins."
          ]
        }
      },
      {
        "id": "خامساً-نظام-المحادثات-العامة-والرسائل-app-api-conversations-id-messages-",
        "title": {
          "ar": "خامساً: نظام المحادثات العامة والرسائل (`app/api/conversations/[id]/messages`)",
          "en": "Fifth: Conversations & Messaging System (`app/api/conversations/[id]/messages`)"
        },
        "intro": {
          "ar": "إدارة الرسائل الفردية والتفاعلية والتذاكر بين مستخدمي الأكاديمية والمقرأة:",
          "en": "Management of individual and interactive messages and support tickets between Academy and Maqraa users:"
        },
        "steps": {
          "ar": [
            "إدارة الرسائل الفردية والتفاعلية والتذاكر بين مستخدمي الأكاديمية والمقرأة:"
          ],
          "en": [
            "Management of individual and interactive messages and support tickets between Academy and Maqraa users:"
          ]
        }
      },
      {
        "id": "1-get-api-conversations-id-messages-",
        "title": {
          "ar": "1. `GET /api/conversations/[id]/messages`",
          "en": "1. `GET /api/conversations/[id]/messages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: جلب محادثة كاملة ورسائلها مرتبة زمنيًا وتحديد الرسائل كـ مقروءة أوتوماتيكياً.",
            "**Side Effects**:",
            "تحديث `is_read = true` وتعيين `read_at = NOW()`.",
            "تصفير العداد `unread_count_student` أو `unread_count_reader` بحسب دور المستخدم.",
            "تصفير التنبيهات المرتبطة بنوع `new_message` لرفع الشارة عن جرس الإشعارات.",
            "**Error Cases**: `401 Unauthorized`, `500 Internal Server Error`."
          ],
          "en": [
            "**Purpose**: Fetch a complete conversation and its messages ordered chronologically, automatically setting messages as read.",
            "**Side Effects**:",
            "Updates `is_read = true` and sets `read_at = NOW()`.",
            "Resets counter `unread_count_student` or `unread_count_reader` based on user role.",
            "Clears notifications associated with `new_message` type to remove badge from notification bell.",
            "**Error Cases**: `401 Unauthorized`, `500 Internal Server Error`."
          ]
        }
      },
      {
        "id": "2-post-api-conversations-id-messages-",
        "title": {
          "ar": "2. `POST /api/conversations/[id]/messages`",
          "en": "2. `POST /api/conversations/[id]/messages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: إرسال رسالة نصية أو مرفق ضمن محادثة قائمة أو تذكرة دعم فني.",
            "**Request Body Fields**:",
            "**Special Ticket & Permission Logic**:",
            "في تذاكر الدعم الفني (`is_ticket = true`): إذا كانت التذكرة مغلقة `ticket_status IN ('closed', 'resolved')` يُمنع الطالب من إرسال رسائل جديدة برمز `403 Forbidden`.",
            "يتم التعرف التلقائي على المستلم `recipientId` بحسب طرفي المحادثة (طالب، قارئ، أدمن).",
            "**Side Effects**:",
            "تحديث معاينة الرسالة الأخيرة `last_message_preview` وتاريخها بجدول `conversations`.",
            "زيادة عداد الرسائل غير المقروءة للمستلم.",
            "إرسال إشعار فوري للمستلم من نوع `new_message`.",
            "**Error Cases**:",
            "`401 Unauthorized`: غير مسجل دخول.",
            "`404 Not Found`: المحادثة غير موجودة.",
            "`403 Forbidden`: غير مصرح بالإرسال أو التذكرة مغلقة."
          ],
          "en": [
            "**Purpose**: Send a text message or attachment within an existing conversation or support ticket.",
            "**Request Body Fields**:",
            "**Special Ticket & Permission Logic**:",
            "In tech support tickets (`is_ticket = true`): If the ticket is closed `ticket_status IN ('closed', 'resolved')`, the student is prevented from sending new messages with status `403 Forbidden`.",
            "Recipient `recipientId` is automatically identified based on conversation parties (student, reciter, admin).",
            "**Side Effects**:",
            "Updates last message preview `last_message_preview` and date in `conversations` table.",
            "Increments recipient unread messages counter.",
            "Sends an instant notification of type `new_message` to recipient.",
            "**Error Cases**:",
            "`401 Unauthorized`: Not logged in.",
            "`404 Not Found`: Conversation does not exist.",
            "`403 Forbidden`: Unauthorized to send or ticket is closed."
          ]
        }
      }
    ]
  },
  {
    "slug": "live-sessions-livekit",
    "group": "staff",
    "icon": "reader",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "الجلسات الحية و LiveKit",
      "en": "Live Sessions & LiveKit Integration"
    },
    "description": {
      "ar": "البث المباشر، الجلسات الصوتية، وغرف التسميع الحية عبر LiveKit.",
      "en": "Live audio rooms, streaming, and recitation sessions powered by LiveKit."
    },
    "audience": {
      "ar": "المعلمون والمقرؤون والطلاب",
      "en": "Teachers, Readers, and Students"
    },
    "keywords": {
      "ar": [
        "الجلسات الحية و LiveKit",
        "البث المباشر، الجلسات الصوتية، وغرف التسميع الحية عبر LiveKit.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Live Sessions & LiveKit Integration",
        "Live audio rooms, streaming, and recitation sessions powered by LiveKit.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/c"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل لنظام البث المباشر والحلقات التفاعلية المستند إلى منصة LiveKit Cloud/Self-Hosted، مبيناً آلية إنشاء التوكنات، إدارة غرفة الانتظار، أحداث الـ Webhook، وتخزين واسترجاع التسجيلات. ---",
          "en": "This section provides comprehensive architectural and field technical documentation for the live streaming and interactive halaqat system based on LiveKit Cloud/Self-Hosted platform, detailing token creation mechanisms, waiting room management, Webhook events, and storage and retrieval of recordings. ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل لنظام البث المباشر والحلقات التفاعلية المستند إلى منصة LiveKit Cloud/Self-Hosted، مبيناً آلية إنشاء التوكنات، إدارة غرفة الانتظار، أحداث الـ Webhook، وتخزين واسترجاع التسجيلات. ---"
          ],
          "en": [
            "This section provides comprehensive architectural and field technical documentation for the live streaming and interactive halaqat system based on LiveKit Cloud/Self-Hosted platform, detailing token creation mechanisms, waiting room management, Webhook events, and storage and retrieval of recordings. ---"
          ]
        }
      },
      {
        "id": "أولاً-المسارات-والواجهات-المربوطة-بالبث-المباشر-routes-",
        "title": {
          "ar": "أولاً: المسارات والواجهات المربوطة بالبث المباشر (Routes)",
          "en": "First: Routes Linked to Live Streaming"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "`/lessons`: صفحة الدروس التفاعلية للدورة التعليمية مع زر الانضمام المباشر للدرس البث المباشر.",
            "`/recordings`: أرشيف التسجيلات والمرئيات المسجلة للجلسات والحلقات السابقة مع إمكانية التشغيل الفوري.",
            "`/maqraah`: واجهة المقرأة الحية وجلسات التلاوة المباشرة والحجوزات الفردية 1:1.",
            "`/reader`: لوحة القارئ/المعلم للتحكم بالجلسة الحية وقبول الطلاب وإدارة غرفة الانتظار."
          ],
          "en": [
            "`/lessons`: Interactive lesson page for the educational course with a direct join button for the live broadcast lesson.",
            "`/recordings`: Archive of recordings and recorded video content for previous sessions and halaqat with instant playback capability.",
            "`/maqraah`: Live Maqraa interface, live recitation sessions, and 1:1 individual bookings.",
            "`/reader`: Reciter/Teacher dashboard to control live sessions, accept students, and manage the waiting room."
          ]
        }
      },
      {
        "id": "1-post-api-livekit-token-",
        "title": {
          "ar": "1. `POST /api/livekit/token`",
          "en": "1. `POST /api/livekit/token`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: نقطة الاتصال الرئيسية لإصدار التوكن المشفر (`mintLiveKitToken`) للانضمام للبث المباشر.",
            "**قواعد الصلاحيات حسب نوع الجلسة (`kind`)**:",
            "`halaqa`: المضيف (`host`) هو معلم الحلقة (`teacher_id`). المشارك (`participant`) هو الطالب المسجل بجدول `halaqat_students`. المدراء والمشرفون يدخلون كمضيفين أو مراقبين خفيين (`stealth`).",
            "`booking`: جلسة تلاوة فردية 1:1. المضيف هو القارئ (`reader_id`). المشارك هو الطالب بجدول `bookings`.",
            "`course_session`: درس دراسي. المضيف هو مدرس الدورة. المشارك هو الطالب المقيد بالدورة بجدول `enrollments`.",
            "**غرفة الانتظار (`Waiting Room Check`)**: إذا كان خيار `require_approval_to_join` مفعلاً للنظام، يُسجل طلب غير المضيف بجدول `video_session_pending_joins` ويرجع الخادم `HTTP 202 Accepted` بـ `{ \"waiting\": true }` لحين موافقة المضيف.",
            "**Response Fields (HTTP 200 OK)**:"
          ],
          "en": [
            "**Purpose**: Main endpoint to issue an encrypted JWT token (`mintLiveKitToken`) to join live streams.",
            "**Permission Rules by Session Type (`kind`)**:",
            "`halaqa`: Host (`host`) is the halaqa teacher (`teacher_id`). Participant (`participant`) is the student registered in `halaqat_students` table. Admins and supervisors enter as hosts or stealth observers (`stealth`).",
            "`booking`: Individual 1:1 recitation session. Host is the reciter (`reader_id`). Participant is the student in `bookings` table.",
            "`course_session`: Course lesson. Host is the course instructor. Participant is the enrolled student in `enrollments` table.",
            "**Waiting Room Check**: If system option `require_approval_to_join` is enabled, non-host requests are registered in `video_session_pending_joins` and the server returns `HTTP 202 Accepted` with `{ \"waiting\": true }` until host approval.",
            "**Response Fields (HTTP 200 OK)**:"
          ]
        }
      },
      {
        "id": "2-post-api-livekit-public-token-",
        "title": {
          "ar": "2. `POST /api/livekit/public-token`",
          "en": "2. `POST /api/livekit/public-token`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: إصدار توكن استماع/مشاهدة فقط (`viewer` subscribe-only token) للزوار غير المسجلين بالدروس العامة المفتوحة (`is_public = TRUE` بـ `course_sessions`).",
            "**Request Body Fields**: `{ \"token\": \"string (public_join_token)\", \"name\": \"string (optional - اسم الضيف)\" }`.",
            "**الضوابط والقيود**:",
            "يمنح توكن بدون صلاحيات بث فيديو أو صوت أو شاشة (`allow_screen_share: false`, `allow_student_unmute: false`).",
            "يتيح الانضمام فقط قبل 15 دقيقة من الموعد أو أثناء البث الحي (`status = 'in_progress'`).",
            "يزيد عداد المشاركين الإجمالي بجدول `video_sessions` بدون إنشاء سجل مستخدم في `video_session_participants`."
          ],
          "en": [
            "**Purpose**: Issue a listen/view only token (`viewer` subscribe-only token) for unregistered visitors in open public lessons (`is_public = TRUE` in `course_sessions`).",
            "**Request Body Fields**: `{ \"token\": \"string (public_join_token)\", \"name\": \"string (optional - guest name)\" }`.",
            "**Controls & Restrictions**:",
            "Grants token without broadcast permissions for video, audio, or screen share (`allow_screen_share: false`, `allow_student_unmute: false`).",
            "Allows joining only 15 minutes prior to session time or during live stream (`status = 'in_progress'`).",
            "Increments total participant counter in `video_sessions` table without creating a user record in `video_session_participants`."
          ]
        }
      },
      {
        "id": "3-get-post-api-livekit-waiting-room-",
        "title": {
          "ar": "3. `GET` & `POST /api/livekit/waiting-room`",
          "en": "3. `GET` & `POST /api/livekit/waiting-room`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: إدارة قائمة الانتظار للطلاب قبل دخول البث المباشر.",
            "**`GET /api/livekit/waiting-room?kind=...&id=...`**: استرجاع قائمة الطلبات المعلقة بحالة `pending` المربوطة بالجلسة (خاص بالمضيف فقط عبر `isHostOf`).",
            "**`POST /api/livekit/waiting-room`**:",
            "**Request Body Fields**:",
            "عند الموافقة (`approve`) يتم تحديث السجل إلى `status = 'approved'`. يعيد الطالب حينها الطلب على `/api/livekit/token` فيحصل على التوكن فوراً."
          ],
          "en": [
            "**Purpose**: Manage student waiting queue prior to joining live streams.",
            "**`GET /api/livekit/waiting-room?kind=...&id=...`**: Retrieve pending request list with status `pending` associated with session (exclusive to host via `isHostOf`).",
            "**`POST /api/livekit/waiting-room`**:",
            "**Request Body Fields**:",
            "Upon approval (`approve`), record is updated to `status = 'approved'`. The student then re-requests `/api/livekit/token` and receives token immediately."
          ]
        }
      },
      {
        "id": "4-post-api-livekit-webhook-",
        "title": {
          "ar": "4. `POST /api/livekit/webhook`",
          "en": "4. `POST /api/livekit/webhook`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منها**: استقبال الفعاليات والأحداث اللحظية من سيرفر LiveKit وتحديث قاعدة البيانات أوتوماتيكياً (مؤمنة عبر توقيع `Authorization` بمفتاح `LIVEKIT_API_SECRET`).",
            "**الأحداث المعالجة (`Handled Events`)**:",
            "`participant_left`: تحديث تاريخ الخروج `left_at = NOW()` وحساب مدة التواجد بالثواني بجدول `video_session_participants`.",
            "`room_finished`: غلق الجلسة المباشرة بجدول `video_sessions` بتعيين `ended_at = NOW()` وإغلاق أي اشتراكات معلقة للمشاركين.",
            "`egress_ended`: عند استلام إشارة انتهاء التسجيل المباشر، تحديث حالة التسجيل `recording_status` بجدول `video_sessions` إلى `completed` أو `failed`."
          ],
          "en": [
            "**Purpose**: Receive real-time events from LiveKit server and automatically update database (secured via `Authorization` signature with `LIVEKIT_API_SECRET` key).",
            "**Handled Events**:",
            "`participant_left`: Update departure date `left_at = NOW()` and compute duration in seconds in `video_session_participants` table.",
            "`room_finished`: Close live session in `video_sessions` table by setting `ended_at = NOW()` and terminate any pending participant subscriptions.",
            "`egress_ended`: Upon receiving live recording completion signal, update `recording_status` in `video_sessions` table to `completed` or `failed`."
          ]
        }
      },
      {
        "id": "ثالثاً-دورة-حياة-الجلسة-المباشرة-والتسجيلات-lifecycle-recording-architecture-",
        "title": {
          "ar": "ثالثاً: دورة حياة الجلسة المباشرة والتسجيلات (Lifecycle & Recording Architecture)",
          "en": "Third: Lifecycle & Recording Architecture"
        },
        "intro": {
          "ar": "```mermaid flowchart TD A[\"المعلم/القارئ يطلب التوكن كـ Host عبر /api/livekit/token\"] --> B[\"تشغيل startVideoSession وإنشاء سجل بـ video_sessions\"] B --> C[\"تجهيز الغرفة على السيرفر عبر ensureRoom وتعيين السعة\"] D[\"طالب يطلب الدخول لـ /api/livekit/token\"] --> E{\"فحص require_approval_to_join\"} E -- \"نعم ومطلوب موافقة\" --> F[\"إدراج في video_session_pending_joins وإعادة waiting: true\"] F --> G[\"المضيف يوافق عبر POST /api/livekit/waiting-room\"] G --> H[\"الطالب يعيد الطلب ويستلم التوكن\"] E -- \"غير مطلوب\" --> H H --> I[\"تنسيق الاتصال وتسجيل الدخول بـ video_session_participants\"] I --> J[\"انتهاء البث وإرسال إشارة LiveKit Egress\"] J --> K[\"الاستقبال بـ /api/livekit/webhook وتحديث egress_ended\"] K --> L[\"حفظ الفيديو في S3 وتحديث video_sessions.recording_url\"] L --> M[\"استعراض المرئيات بصفحة /recordings واستدعاء GET /api/video/recordings\"] ``` ---",
          "en": "```mermaid flowchart TD A[\"Teacher/Reciter requests token as Host via /api/livekit/token\"] --> B[\"Execute startVideoSession and create record in video_sessions\"] B --> C[\"Prepare room on server via ensureRoom and set capacity\"] D[\"Student requests entry to /api/livekit/token\"] --> E{\"Check require_approval_to_join\"} E -- \"Yes and approval required\" --> F[\"Insert into video_session_pending_joins and return waiting: true\"] F --> G[\"Host approves via POST /api/livekit/waiting-room\"] G --> H[\"Student resubmits request and receives token\"] E -- \"Not required\" --> H H --> I[\"Establish connection and log entry in video_session_participants\"] I --> J[\"Broadcast ends and LiveKit Egress signal sent\"] J --> K[\"Receive at /api/livekit/webhook and update egress_ended\"] K --> L[\"Save video in S3 and update video_sessions.recording_url\"] L --> M[\"Browse visuals on /recordings page calling GET /api/video/recordings\"] ``` ---"
        },
        "steps": {
          "ar": [
            "```mermaid flowchart TD A[\"المعلم/القارئ يطلب التوكن كـ Host عبر /api/livekit/token\"] --> B[\"تشغيل startVideoSession وإنشاء سجل بـ video_sessions\"] B --> C[\"تجهيز الغرفة على السيرفر عبر ensureRoom وتعيين السعة\"] D[\"طالب يطلب الدخول لـ /api/livekit/token\"] --> E{\"فحص require_approval_to_join\"} E -- \"نعم ومطلوب موافقة\" --> F[\"إدراج في video_session_pending_joins وإعادة waiting: true\"] F --> G[\"المضيف يوافق عبر POST /api/livekit/waiting-room\"] G --> H[\"الطالب يعيد الطلب ويستلم التوكن\"] E -- \"غير مطلوب\" --> H H --> I[\"تنسيق الاتصال وتسجيل الدخول بـ video_session_participants\"] I --> J[\"انتهاء البث وإرسال إشارة LiveKit Egress\"] J --> K[\"الاستقبال بـ /api/livekit/webhook وتحديث egress_ended\"] K --> L[\"حفظ الفيديو في S3 وتحديث video_sessions.recording_url\"] L --> M[\"استعراض المرئيات بصفحة /recordings واستدعاء GET /api/video/recordings\"] ``` ---"
          ],
          "en": [
            "```mermaid flowchart TD A[\"Teacher/Reciter requests token as Host via /api/livekit/token\"] --> B[\"Execute startVideoSession and create record in video_sessions\"] B --> C[\"Prepare room on server via ensureRoom and set capacity\"] D[\"Student requests entry to /api/livekit/token\"] --> E{\"Check require_approval_to_join\"} E -- \"Yes and approval required\" --> F[\"Insert into video_session_pending_joins and return waiting: true\"] F --> G[\"Host approves via POST /api/livekit/waiting-room\"] G --> H[\"Student resubmits request and receives token\"] E -- \"Not required\" --> H H --> I[\"Establish connection and log entry in video_session_participants\"] I --> J[\"Broadcast ends and LiveKit Egress signal sent\"] J --> K[\"Receive at /api/livekit/webhook and update egress_ended\"] K --> L[\"Save video in S3 and update video_sessions.recording_url\"] L --> M[\"Browse visuals on /recordings page calling GET /api/video/recordings\"] ``` ---"
          ]
        }
      },
      {
        "id": "رابعاً-الربط-المباشر-بجداول-قاعدة-البيانات-database-tables-interconnection-",
        "title": {
          "ar": "رابعاً: الربط المباشر بجداول قاعدة البيانات (Database Tables Interconnection)",
          "en": "Fourth: Database Tables Interconnection"
        },
        "intro": {
          "ar": "تتكامل منظومة LiveKit مع جداول قاعدة البيانات المحورية التالية:",
          "en": "The LiveKit system integrates with the following core database tables:"
        },
        "steps": {
          "ar": [
            "**`video_sessions`**: السجل المركزي لجلسة البث المباشر (يتضمن `kind`, `ref_id`, `platform`, `started_by`, `room_name`, `recording_url`, `recording_status`, `egress_id`, `duration_seconds`).",
            "**`video_session_participants`**: سجل حضور وأوقات دخول وخروج كل مستخدم وتتبع مدة الاستماع بالثواني (`joined_at`, `left_at`, `duration_seconds`).",
            "**`video_session_pending_joins`**: طابور طلبات الانتظار والموافقة عليها من المضيف (`status = 'pending' | 'approved' | 'denied'`).",
            "**`video_recordings`**: أرشيف التسجيلات المكتملة المرتبطة بالجلسة لتشغيلها في `/recordings`.",
            "**الجداول المصدرية المرجعية**: `halaqat` (حلقات التحفيظ)، `bookings` (جلسات المقرأة الفردية)، `course_sessions` (محاضرات الدورات التعليمية)."
          ],
          "en": [
            "**`video_sessions`**: Central record for live streaming session (includes `kind`, `ref_id`, `platform`, `started_by`, `room_name`, `recording_url`, `recording_status`, `egress_id`, `duration_seconds`).",
            "**`video_session_participants`**: Attendance record and user entry/exit timestamps, tracking listen duration in seconds (`joined_at`, `left_at`, `duration_seconds`).",
            "**`video_session_pending_joins`**: Queue of join requests and host approvals (`status = 'pending' | 'approved' | 'denied'`).",
            "**`video_recordings`**: Archive of completed recordings associated with session for playback in `/recordings`.",
            "**Source Reference Tables**: `halaqat` (memorization halaqat), `bookings` (individual Maqraa sessions), `course_sessions` (educational course lectures)."
          ]
        }
      }
    ]
  },
  {
    "slug": "platform-admin",
    "group": "admin",
    "icon": "admin",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "لوحة إدارة المنصة العليا",
      "en": "Platform Admin Dashboard"
    },
    "description": {
      "ar": "التحكم الشامل بالمنصة، الإعدادات، الأدوار العليا، الهوية، والنسخ الاحتياطي.",
      "en": "Full platform administration, system settings, roles, branding, and backups."
    },
    "audience": {
      "ar": "المدير العام ومديرو النظام",
      "en": "Super Admins and System Operators"
    },
    "keywords": {
      "ar": [
        "لوحة إدارة المنصة العليا",
        "التحكم الشامل بالمنصة، الإعدادات، الأدوار العليا، الهوية، والنسخ الاحتياطي.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Platform Admin Dashboard",
        "Full platform administration, system settings, roles, branding, and backups.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/admin"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل للوحة إدارة المنصة العليا والرقابة الشاملة (`/admin`)، مبيناً الفرق الجوهري بينها وبين إدارة الأكاديمية الفرعية (`/academy/admin`)، وتوثيق نقاط الاتصال الـ 26 الخاصة بالنظام مع حزم التحذيرات الأمنية والصلاحيات الحساسة. ---",
          "en": "This section provides comprehensive architectural and field technical documentation for the Super Platform Administration and Overall Supervision Control Panel (`/admin`), highlighting the fundamental distinction between it and the sub-Academy Administration (`/academy/admin`), and documenting the 26 system API endpoints alongside security warnings and sensitive permissions. ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني المعماري والميداني الشامل للوحة إدارة المنصة العليا والرقابة الشاملة (`/admin`)، مبيناً الفرق الجوهري بينها وبين إدارة الأكاديمية الفرعية (`/academy/admin`)، وتوثيق نقاط الاتصال الـ 26 الخاصة بالنظام مع حزم التحذيرات الأمنية والصلاحيات الحساسة. ---"
          ],
          "en": [
            "This section provides comprehensive architectural and field technical documentation for the Super Platform Administration and Overall Supervision Control Panel (`/admin`), highlighting the fundamental distinction between it and the sub-Academy Administration (`/academy/admin`), and documenting the 26 system API endpoints alongside security warnings and sensitive permissions. ---"
          ]
        }
      },
      {
        "id": "أولاً-التمييز-المعماري-والصلاحيات-platform-admin-vs-academy-admin-",
        "title": {
          "ar": "أولاً: التمييز المعماري والصلاحيات (Platform Admin vs Academy Admin)",
          "en": "First: Architectural Distinction & Permissions (Platform Admin vs Academy Admin)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**لوحة إدارة الأكاديمية (`/academy/admin`)**: لوحة فرعية متخصصة محصورة بنطاق الأكاديمية التعليمية، تقتصر على الكورسات والدروس المسجلة والمسارات الأكاديمية ودرجات طلاب الأكاديمية ومحاضريها.",
            "**لوحة إدارة المنصة العليا (`/admin`)**: اللوحة التنفيذية الحاكمة للمشروع ككل (`Site-Wide Super Admin`). تشرف على كافة القطاعات (الأكاديمية + المقرأة العامة)، وتتحكم بالبنية التحتية، الأمان والتشفير، خوادم البث والتخزين، النسخ الاحتياطي، الشؤون المالية والسياسات العامة، ومصفوفة الأدوار الشاملة."
          ],
          "en": [
            "**Academy Admin Control Panel (`/academy/admin`)**: A specialized sub-panel confined to the educational Academy scope, limited to recorded courses and lessons, academic paths, and Academy student grades and instructors.",
            "**Super Platform Admin Control Panel (`/admin`)**: The executive governing panel for the entire project (`Site-Wide Super Admin`). It supervises all sectors (Academy + Public Maqraa) and controls infrastructure, security and encryption, streaming and storage servers, backups, financial affairs, general policies, and the comprehensive role matrix."
          ]
        }
      },
      {
        "id": "1-api-admin-activity-logs-",
        "title": {
          "ar": "1. `/api/admin/activity-logs`",
          "en": "1. `/api/admin/activity-logs`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: استرجاع ومتابعة سجلات أنشطة وحركات المستخدمين والمدراء بالمنصة.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**:",
            "`GET /api/admin/activity-logs?user_id=&action=&page=&limit=`: يرجع مصفوفة الأنشطة (`id`, `user_id`, `action`, `entity_type`, `description`, `ip_address`, `created_at`).",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (غير مدير منصة)."
          ],
          "en": [
            "**Purpose**: Retrieve and monitor user and admin activity and action logs on the platform.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**:",
            "`GET /api/admin/activity-logs?user_id=&action=&page=&limit=`: Returns array of activities (`id`, `user_id`, `action`, `entity_type`, `description`, `ip_address`, `created_at`).",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (not a platform admin)."
          ]
        }
      },
      {
        "id": "2-api-admin-audit-log-",
        "title": {
          "ar": "2. `/api/admin/audit-log`",
          "en": "2. `/api/admin/audit-log`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل التدقيق الرقابي والأمني الأعلى لتتبع قرارات المدراء والتعديلات الحساسة على الصلاحيات والإعدادات.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**:",
            "`GET /api/admin/audit-log`: يرجع قائمة عمليات التدقيق (`actor_id`, `action`, `platform`, `entity_type`, `new_value`, `created_at`).",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (تتطلب `super_admin`)."
          ],
          "en": [
            "**Purpose**: Highest supervisory and security audit log to track administrator decisions and sensitive modifications to permissions and settings.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**:",
            "`GET /api/admin/audit-log`: Returns list of audit operations (`actor_id`, `action`, `platform`, `entity_type`, `new_value`, `created_at`).",
            "**Error Cases**: `401 Unauthorized`, `403 Forbidden` (requires `super_admin`)."
          ]
        }
      },
      {
        "id": "3-api-admin-backup-",
        "title": {
          "ar": "3. `/api/admin/backup`",
          "en": "3. `/api/admin/backup`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التصدير والاستعادة الآمنة لقواعد بيانات المنصة وإجراء عمليات التنظيف الدوري للبيانات القديمة.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**:",
            "`POST /api/admin/backup` بـ `{ \"action\": \"export\" }`: يرجع ملف JSON موقعاً يحتوي على كافة الجداول الرئيسية.",
            "`POST /api/admin/backup` بـ `{ \"action\": \"restore\", \"raw\": \"...\" }`: ينفذ عملية دمج آمنة (`Safe Merge`) عبر `ON CONFLICT DO NOTHING`.",
            "`POST /api/admin/backup` بـ `{ \"action\": \"clear_old_logs\" | \"clear_cache\" | \"stats\" }`.",
            "> [!WARNING]"
          ],
          "en": [
            "**Purpose**: Secure export and restoration of platform databases and performing periodic cleanup operations for legacy data.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**:",
            "`POST /api/admin/backup` with `{ \"action\": \"export\" }`: Returns a signed JSON file containing all main tables.",
            "`POST /api/admin/backup` with `{ \"action\": \"restore\", \"raw\": \"...\" }`: Executes a safe merge (`Safe Merge`) via `ON CONFLICT DO NOTHING`.",
            "`POST /api/admin/backup` with `{ \"action\": \"clear_old_logs\" | \"clear_cache\" | \"stats\" }`.",
            "> [!WARNING]"
          ]
        }
      },
      {
        "id": "4-api-admin-badges-",
        "title": {
          "ar": "4. `/api/admin/badges`",
          "en": "4. `/api/admin/badges`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إدارة الأوسمة والشارات التكريمية المتاحة للطلاب والقراء عبر قطاعات المنصة.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET`, `POST`, `PATCH`, `DELETE` لإدارة الشارة (`name`, `description`, `icon`, `points_required`, `category`)."
          ],
          "en": [
            "**Purpose**: Manage honor badges and commendation badges available to students and reciters across platform sectors.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET`, `POST`, `PATCH`, `DELETE` to manage badge (`name`, `description`, `icon`, `points_required`, `category`)."
          ]
        }
      },
      {
        "id": "5-api-admin-bookings-",
        "title": {
          "ar": "5. `/api/admin/bookings`",
          "en": "5. `/api/admin/bookings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الرقابة الشاملة على حجوزات المقرأة والجلسات الفردية 1:1 بين الطلاب والقراء ومتابعة حالاتها (`confirmed`, `completed`, `cancelled`).",
            "**النطاق**: المقرأة العامة والأكاديمية.",
            "**Request / Response**: `GET /api/admin/bookings?status=&reader_id=&student_id=`."
          ],
          "en": [
            "**Purpose**: Comprehensive oversight over Maqraa bookings and 1:1 individual sessions between students and reciters, tracking their statuses (`confirmed`, `completed`, `cancelled`).",
            "**Scope**: Public Maqraa and Academy.",
            "**Request / Response**: `GET /api/admin/bookings?status=&reader_id=&student_id=`."
          ]
        }
      },
      {
        "id": "6-api-admin-branding-",
        "title": {
          "ar": "6. `/api/admin/branding`",
          "en": "6. `/api/admin/branding`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التحكم بالهوية البصرية للمنصة (الشعارات الرسمية، أيقونة Favicon، الألوان الرئيسية والأنماط).",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET`, `PUT /api/admin/branding` بـ `{ logo_url, favicon_url, primary_color, app_title }`."
          ],
          "en": [
            "**Purpose**: Control the visual identity of the platform (official logos, Favicon icon, primary colors, and styles).",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET`, `PUT /api/admin/branding` with `{ logo_url, favicon_url, primary_color, app_title }`."
          ]
        }
      },
      {
        "id": "7-api-admin-certificates-center-",
        "title": {
          "ar": "7. `/api/admin/certificates-center`",
          "en": "7. `/api/admin/certificates-center`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المركز الموحد لإصدار وتصديق وقوالب الشهادات الرسمية المعتمدة الصادرة للطلاب والقراء.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET`, `POST /api/admin/certificates-center` للتحكم بقوالب وتواقيع الشهادات."
          ],
          "en": [
            "**Purpose**: Unified center for issuing, authenticating, and managing templates for official accredited certificates issued to students and reciters.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET`, `POST /api/admin/certificates-center` to manage certificate templates and signatures."
          ]
        }
      },
      {
        "id": "8-api-admin-competitions-",
        "title": {
          "ar": "8. `/api/admin/competitions`",
          "en": "8. `/api/admin/competitions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إدارة وتدشين المسابقات القرآنية والفقهية العامة، وتحديد الجوائز والمحكمين ومواعيد البداية والنهاية.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET`, `POST`, `PATCH /api/admin/competitions`."
          ],
          "en": [
            "**Purpose**: Manage and launch public Quranic and Fiqh competitions, specifying prizes, judges, and start/end dates.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET`, `POST`, `PATCH /api/admin/competitions`."
          ]
        }
      },
      {
        "id": "9-api-admin-content-pages-",
        "title": {
          "ar": "9. `/api/admin/content-pages`",
          "en": "9. `/api/admin/content-pages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إدارة صفحات المحتوى الثابت والتنظيمي للمنصة (سياسة الخصوصية، الشروط والأحكام، من نحن، الأسئلة الشائعة).",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET`, `PUT /api/admin/content-pages` بـ `{ slug, title_ar, content_ar, is_published }`."
          ],
          "en": [
            "**Purpose**: Manage static and regulatory content pages of the platform (privacy policy, terms & conditions, about us, FAQs).",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET`, `PUT /api/admin/content-pages` with `{ slug, title_ar, content_ar, is_published }`."
          ]
        }
      },
      {
        "id": "10-api-admin-email-templates-",
        "title": {
          "ar": "10. `/api/admin/email-templates`",
          "en": "10. `/api/admin/email-templates`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إدارة وتعديل قوالب الرسائل الإلكترونية التلقائية (ترحيب، تفعيل، موافقة الفتوى، إشعار الجلسة).",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET`, `PUT /api/admin/email-templates`."
          ],
          "en": [
            "**Purpose**: Manage and modify automated email templates (welcome, activation, fatwa approval, session notification).",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET`, `PUT /api/admin/email-templates`."
          ]
        }
      },
      {
        "id": "11-api-admin-homepage-",
        "title": {
          "ar": "11. `/api/admin/homepage`",
          "en": "11. `/api/admin/homepage`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إعداد وتنسيق عناصر ومكونات الصفحة الرئيسية العامة (البنرات المتحركة، الإحصائيات البارزة، الشهادات التقديرية، الأقسام الظاهرة).",
            "**النطاق**: الواجهة العامة للمشروع.",
            "**Request / Response**: `GET`, `PUT /api/admin/homepage`."
          ],
          "en": [
            "**Purpose**: Configure and layout components and elements of the public homepage (animated banners, featured statistics, appreciation certificates, visible sections).",
            "**Scope**: Public project interface.",
            "**Request / Response**: `GET`, `PUT /api/admin/homepage`."
          ]
        }
      },
      {
        "id": "12-api-admin-integrations-",
        "title": {
          "ar": "12. `/api/admin/integrations`",
          "en": "12. `/api/admin/integrations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: ضبط إعدادات ومفاتيح الربط مع الخدمات الخارجية (LiveKit Video, AWS S3 Storage, Resend Email API).",
            "**النطاق**: خوادم المنصة.",
            "> [!IMPORTANT]"
          ],
          "en": [
            "**Purpose**: Configure settings and integration keys with external services (LiveKit Video, AWS S3 Storage, Resend Email API).",
            "**Scope**: Platform servers.",
            "> [!IMPORTANT]"
          ]
        }
      },
      {
        "id": "13-api-admin-invitations-",
        "title": {
          "ar": "13. `/api/admin/invitations`",
          "en": "13. `/api/admin/invitations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إنتاج وإرسال دعوات انضمام رسمية بمحاور مخصصة للمدراء والمشرفين والمعلمين للانضمام لطاقم العمل.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `POST /api/admin/invitations` بـ `{ email, role, custom_note }`."
          ],
          "en": [
            "**Purpose**: Generate and send official joining invitations with custom paths for admins, supervisors, and teachers to join the staff.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `POST /api/admin/invitations` with `{ email, role, custom_note }`."
          ]
        }
      },
      {
        "id": "14-api-admin-library-",
        "title": {
          "ar": "14. `/api/admin/library`",
          "en": "14. `/api/admin/library`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الإشراف الأعلى على المكتبة الرقمية العامة ومراجعة الكتب المرفوعة عبر الأكاديمية والمقرأة.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET /api/admin/library/books`."
          ],
          "en": [
            "**Purpose**: Super administrative oversight over the public digital library and reviewing books uploaded via Academy and Maqraa.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET /api/admin/library/books`."
          ]
        }
      },
      {
        "id": "15-api-admin-maintenance-",
        "title": {
          "ar": "15. `/api/admin/maintenance`",
          "en": "15. `/api/admin/maintenance`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تفعيل وإدارة وضع الصيانة للنظام، وتفريغ الكاش العام للمشروع وتجديد مسارات الصفحات عبر `revalidatePath`.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request Body**: `{ \"action\": \"clear-cache\" | \"backup\" }`."
          ],
          "en": [
            "**Purpose**: Enable and manage maintenance mode for the system, clear global project cache, and revalidate page paths via `revalidatePath`.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request Body**: `{ \"action\": \"clear-cache\" | \"backup\" }`."
          ]
        }
      },
      {
        "id": "16-api-admin-memorization-paths-",
        "title": {
          "ar": "16. `/api/admin/memorization-paths`",
          "en": "16. `/api/admin/memorization-paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تصميم وإدارة مسارات حفظ القرآن الكريم العامة والخطط الزمكانية المقررة بالمنصة.",
            "**النطاق**: المقرأة والأكاديمية.",
            "**Request / Response**: `GET`, `POST`, `PATCH /api/admin/memorization-paths`."
          ],
          "en": [
            "**Purpose**: Design and manage public Quran memorization paths and scheduled spatio-temporal plans on the platform.",
            "**Scope**: Maqraa and Academy.",
            "**Request / Response**: `GET`, `POST`, `PATCH /api/admin/memorization-paths`."
          ]
        }
      },
      {
        "id": "17-api-admin-recitations-",
        "title": {
          "ar": "17. `/api/admin/recitations`",
          "en": "17. `/api/admin/recitations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الرقابة الشاملة على التلاوات الصوتية المرسلة للتسميع من الطلاب، وتوزيع المراجعات على المقرئين.",
            "**النطاق**: المقرأة العامة.",
            "**Request / Response**: `GET /api/admin/recitations?status=&reader_id=`."
          ],
          "en": [
            "**Purpose**: Comprehensive supervision of audio recitations submitted by students for recitation testing, distributing reviews to reciters.",
            "**Scope**: Public Maqraa.",
            "**Request / Response**: `GET /api/admin/recitations?status=&reader_id=`."
          ]
        }
      },
      {
        "id": "18-api-admin-roles-",
        "title": {
          "ar": "18. `/api/admin/roles`",
          "en": "18. `/api/admin/roles`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: استعراض مصفوفة وتوزيع الأكواد الشاملة للأدوار والصلاحيات (`ROLE_CATALOG`) وحساب عدد مستخدمي كل دور.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "> [!CAUTION]"
          ],
          "en": [
            "**Purpose**: Browse the comprehensive role matrix and code distribution (`ROLE_CATALOG`) and count users per role.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "> [!CAUTION]"
          ]
        }
      },
      {
        "id": "19-api-admin-security-",
        "title": {
          "ar": "19. `/api/admin/security`",
          "en": "19. `/api/admin/security`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: مراقبة الهجمات الأمنية ومحاولات الدخول الفاشلة (`login_failed`) والحسابات المغلقة آلياً (`is_locked = true`)، وقفل أو فك قفل الحسابات يدويًا.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**:",
            "`GET /api/admin/security`: يرجع `failedLogins`, `lockedAccounts`, `recentLogins`, و `stats`.",
            "`PATCH /api/admin/security`: بـ `{ \"userId\": \"UUID\", \"action\": \"unlock\" | \"lock\" }`."
          ],
          "en": [
            "**Purpose**: Monitor security attacks, failed login attempts (`login_failed`), and automatically locked accounts (`is_locked = true`), and manually lock or unlock accounts.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**:",
            "`GET /api/admin/security`: Returns `failedLogins`, `lockedAccounts`, `recentLogins`, and `stats`.",
            "`PATCH /api/admin/security`: with `{ \"userId\": \"UUID\", \"action\": \"unlock\" | \"lock\" }`."
          ]
        }
      },
      {
        "id": "20-api-admin-seo-",
        "title": {
          "ar": "20. `/api/admin/seo`",
          "en": "20. `/api/admin/seo`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: ضبط إعدادات تحسين محركات البحث SEO، الكلمات المفتاحية، ملفات OpenGraph، وربط معرفات Google Analytics.",
            "**النطاق**: الواجهة العامة للمشروع.",
            "**Request / Response**: `GET`, `PUT /api/admin/seo`."
          ],
          "en": [
            "**Purpose**: Configure Search Engine Optimization (SEO) settings, keywords, OpenGraph files, and link Google Analytics IDs.",
            "**Scope**: Public project interface.",
            "**Request / Response**: `GET`, `PUT /api/admin/seo`."
          ]
        }
      },
      {
        "id": "21-api-admin-settings-",
        "title": {
          "ar": "21. `/api/admin/settings`",
          "en": "21. `/api/admin/settings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التحكم بالإعدادات الهيكلية للمشروع (`system_settings`) شاملاً `app_url`, `smtp_config`, `storage_config`, وإستراتيجية توزيع المقرئين.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "> [!IMPORTANT]"
          ],
          "en": [
            "**Purpose**: Control structural project settings (`system_settings`) including `app_url`, `smtp_config`, `storage_config`, and reciter distribution strategy.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "> [!IMPORTANT]"
          ]
        }
      },
      {
        "id": "22-api-admin-students-",
        "title": {
          "ar": "22. `/api/admin/students`",
          "en": "22. `/api/admin/students`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الإدارة الإشرافية الشاملة على كافة الطلاب المسجلين بالمنصة ومتابعة تقدمهم عبر الأكاديمية والمقرأة.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET /api/admin/students?search=&platform=`."
          ],
          "en": [
            "**Purpose**: Comprehensive supervisory management over all registered students on the platform and tracking their progress across Academy and Maqraa.",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET /api/admin/students?search=&platform=`."
          ]
        }
      },
      {
        "id": "23-api-admin-supervisor-tasks-",
        "title": {
          "ar": "23. `/api/admin/supervisor-tasks`",
          "en": "23. `/api/admin/supervisor-tasks`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إسناد ومتابعة المهام الإشرافية والرقابية للمشرفين بمختلف تخصصاتهم (محتوى، فقه، طلاب، جودة).",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET`, `POST`, `PATCH /api/admin/supervisor-tasks`."
          ],
          "en": [
            "**Purpose**: Assign and track supervisory and monitoring tasks for supervisors across different specializations (content, Fiqh, students, quality).",
            "**Scope**: Platform-Wide (`Platform-Wide`).",
            "**Request / Response**: `GET`, `POST`, `PATCH /api/admin/supervisor-tasks`."
          ]
        }
      },
      {
        "id": "24-api-admin-tajweed-paths-",
        "title": {
          "ar": "24. `/api/admin/tajweed-paths`",
          "en": "24. `/api/admin/tajweed-paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: بناء وتعديل مسارات علم التجويد، وأحكام التلاوة، والروايات القرآنية.",
            "**النطاق**: المقرأة والأكاديمية.",
            "**Request / Response**: `GET`, `POST`, `PATCH /api/admin/tajweed-paths`."
          ],
          "en": [
            "**Purpose**: Build and edit Tajweed science paths, recitation rules, and Quranic Qira'at (narrations).",
            "**Scope**: Maqraa and Academy.",
            "**Request / Response**: `GET`, `POST`, `PATCH /api/admin/tajweed-paths`."
          ]
        }
      },
      {
        "id": "25-api-admin-theme-",
        "title": {
          "ar": "25. `/api/admin/theme`",
          "en": "25. `/api/admin/theme`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التحكم بنظام المظهر البصري العام للمستخدمين (Theme) وإتاحة الثيمات الفاتحة، الداكنة، والأنماط المخصصة.",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**: `GET`, `PUT /api/admin/theme`."
          ],
          "en": [
            "**Purpose**: Controls the general visual theme system for users (Theme), enabling light, dark, and custom styles.",
            "**Scope**: Platform-wide (`Platform-Wide`).",
            "**Request / Response**: `GET`, `PUT /api/admin/theme`."
          ]
        }
      },
      {
        "id": "26-api-admin-users-",
        "title": {
          "ar": "26. `/api/admin/users`",
          "en": "26. `/api/admin/users`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الإدارة المركزية الكاملة لجميع مستخدمي وحسابات النظام (إضافة، تعديل البيانات، تغيير الدور، التعطيل، والتفعيل).",
            "**النطاق**: المنصة ككل (`Platform-Wide`).",
            "**Request / Response**:",
            "`GET /api/admin/users?role=&platform=&search=&page=&limit=`: جلب قائمة المستخدمين مع فلترة المنصة والحالة وسجلات النشاط.",
            "`POST /api/admin/users`: إنشاء حساب مستخدم جديد وتعيين كلمة المرور المشفرة بـ `bcrypt`.",
            "`PATCH /api/admin/users`: تعديل الحساب أو إيقافه (`isActive = false`).",
            "> [!CAUTION]"
          ],
          "en": [
            "**Purpose**: Full centralized management of all system users and accounts (adding, editing data, changing roles, disabling, and enabling).",
            "**Scope**: Platform-wide (`Platform-Wide`).",
            "**Request / Response**:",
            "`GET /api/admin/users?role=&platform=&search=&page=&limit=`: Fetch user list with platform, status, and activity log filtering.",
            "`POST /api/admin/users`: Create a new user account and set a password hashed with `bcrypt`.",
            "`PATCH /api/admin/users`: Modify account or suspend it (`isActive = false`).",
            "> [!CAUTION]"
          ]
        }
      }
    ]
  },
  {
    "slug": "cron-jobs",
    "group": "support",
    "icon": "support",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "المهام المجدولة في النظام",
      "en": "Scheduled Cron Jobs"
    },
    "description": {
      "ar": "المهام التلقائية خلف الكواليس: التذكيرات، التجميع، التقارير، والنظافة.",
      "en": "Automated background cron tasks: reminders, aggregations, and cleanup."
    },
    "audience": {
      "ar": "مورو ومديرو النظام والمطورون",
      "en": "System Administrators and Developers"
    },
    "keywords": {
      "ar": [
        "المهام المجدولة في النظام",
        "المهام التلقائية خلف الكواليس: التذكيرات، التجميع، التقارير، والنظافة.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Scheduled Cron Jobs",
        "Automated background cron tasks: reminders, aggregations, and cleanup.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/api/cron"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الميداني الشامل لكافة المهام المجدولة دورياً (`Cron Jobs`) المخصصة للنظام وحماية البث المباشر، التذكيرات الذكية، والتقارير الرقابية بمسار `app/api/cron/`. ---",
          "en": "This section provides comprehensive technical documentation for all periodically scheduled tasks (`Cron Jobs`) dedicated to system administration, live stream protection, smart reminders, and audit reports under the path `app/api/cron/`. ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الميداني الشامل لكافة المهام المجدولة دورياً (`Cron Jobs`) المخصصة للنظام وحماية البث المباشر، التذكيرات الذكية، والتقارير الرقابية بمسار `app/api/cron/`. ---"
          ],
          "en": [
            "This section provides comprehensive technical documentation for all periodically scheduled tasks (`Cron Jobs`) dedicated to system administration, live stream protection, smart reminders, and audit reports under the path `app/api/cron/`. ---"
          ]
        }
      },
      {
        "id": "أولاً-منظومة-المصادقة-والأمان-للمهام-المجدولة-cron-authorization-",
        "title": {
          "ar": "أولاً: منظومة المصادقة والأمان للمهام المجدولة (Cron Authorization)",
          "en": "First: Cron Authorization & Security Framework"
        },
        "intro": {
          "ar": "تعتمد كافة نقاط الاتصال في هذا القسم على حماية مشددة يتم التحقق منها عبر الدالة `isCronAuthorized(req)`:",
          "en": "All endpoints in this section rely on strict authorization verified via `isCronAuthorized(req)`:"
        },
        "steps": {
          "ar": [
            "تتيح التنفيذ المباشر عبر Vercel Cron أوتوماتيكياً.",
            "تشترط تمرير المفتاح السري عبر الرابط `?secret=$CRON_SECRET` أو من خلال الهيدر `x-cron-secret: $CRON_SECRET`."
          ],
          "en": [
            "Allows direct execution via Vercel Cron automatically.",
            "Requires passing the secret key via URL `?secret=$CRON_SECRET` or via the header `x-cron-secret: $CRON_SECRET`."
          ]
        }
      },
      {
        "id": "1-get-post-api-cron-academy-reminders-",
        "title": {
          "ar": "1. `GET` / `POST /api/cron/academy-reminders`",
          "en": "1. `GET` / `POST /api/cron/academy-reminders`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: دوري كل 5 إلى 15 دقيقة.",
            "**ما تفعله بالتفصيل**: وظيفة تذكير شاملة ومطابقة غير تكرارية (Idempotent) تعالج 5 محاور بالمنصة:",
            "`session_60min`: تذكير الطلاب ببدء الجلسة التفاعلية خلال 60 دقيقة.",
            "`session_10min`: تذكير عاجل ببدء الجلسة خلال 10 دقائق.",
            "`task_morning`: ملخص صباحي يجمع المهام المستحقة اليوم لكل طالب.",
            "`task_overdue`: تنبيه بالمهام المتأخرة التي تجاوزت الموعد النهائي دون تسليم.",
            "`streak_break_warning`: تحذير حماية السلسلة المتواصلة قبل نهاية اليوم.",
            "**مستقبل النتيجة**: الطلاب المقيدون بالدورات والمجالس عبر إشعارات المنصة الفورية (`notifications`).",
            "**الجداول المتأثرة**: `reminder_runs`, `notifications`, `course_sessions`, `courses`, `enrollments`, `tasks`, `task_submissions`, `user_points`, `points_log`."
          ],
          "en": [
            "**Execution Schedule**: Periodically every 5 to 15 minutes.",
            "**Detailed Operation**: Comprehensive, idempotent reminder feature processing 5 main vectors across the platform:",
            "`session_60min`: Reminds students 60 minutes before an interactive session begins.",
            "`session_10min`: Urgent reminder 10 minutes before session start.",
            "`task_morning`: Morning summary aggregating tasks due today for each student.",
            "`task_overdue`: Alert for overdue tasks past deadline without submission.",
            "`streak_break_warning`: Warning to protect continuous daily streak before day end.",
            "**Recipient**: Students enrolled in courses and majalis via instant platform notifications (`notifications`).",
            "**Affected Tables**: `reminder_runs`, `notifications`, `course_sessions`, `courses`, `enrollments`, `tasks`, `task_submissions`, `user_points`, `points_log`."
          ]
        }
      },
      {
        "id": "2-get-post-api-cron-admin-activity-reports-",
        "title": {
          "ar": "2. `GET` / `POST /api/cron/admin-activity-reports`",
          "en": "2. `GET` / `POST /api/cron/admin-activity-reports`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: أسبوعياً أو شهرياً (حسب المعامل `period=weekly|monthly`).",
            "**ما تفعله بالتفصيل**: تجميع وتحليل البيانات التنفيذية وحركات المدراء والإحصائيات العامة وإرسال ملخص رقابي شامل.",
            "**مستقبل النتيجة**: مدراء المنصة الأعلى (`admin`, `super_admin`) عبر البريد الإلكتروني الرسمي.",
            "**الجداول المتأثرة**: `activity_logs`, `audit_log`, `users`, `system_settings`."
          ],
          "en": [
            "**Execution Schedule**: Weekly or monthly (based on parameter `period=weekly|monthly`).",
            "**Detailed Operation**: Aggregates and analyzes executive data, admin activities, and general statistics, sending a comprehensive audit summary.",
            "**Recipient**: Top platform administrators (`admin`, `super_admin`) via official email.",
            "**Affected Tables**: `activity_logs`, `audit_log`, `users`, `system_settings`."
          ]
        }
      },
      {
        "id": "3-get-api-cron-auto-end-sessions-",
        "title": {
          "ar": "3. `GET /api/cron/auto-end-sessions`",
          "en": "3. `GET /api/cron/auto-end-sessions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: دوري كل 5 دقائق.",
            "**ما تفعله بالتفصيل**: إنهاء جلسات البث المباشر المعلقة والمتروكة أوتوماتيكياً بناءً على:",
            "تجاوز الحد الأقصى للمدة المسموحة للجلسة `max_duration_minutes`.",
            "خلو الغرفة من المشاركين بالاتصال الحي مع LiveKit Server (`listRoomParticipants`) وتجاوز مهلة الخمول `inactivity_timeout_minutes`.",
            "**مستقبل النتيجة**: النظام المحلي للتحكم بالجلسات وتفريغ خوادم البث.",
            "**الجداول المتأثرة**: `video_sessions`, `video_session_participants`."
          ],
          "en": [
            "**Execution Schedule**: Periodically every 5 minutes.",
            "**Detailed Operation**: Automatically terminates pending or abandoned live streaming sessions based on:",
            "Exceeding the maximum allowed session duration `max_duration_minutes`.",
            "Empty live connection room on LiveKit Server (`listRoomParticipants`) exceeding inactivity timeout `inactivity_timeout_minutes`.",
            "**Recipient**: Local session control system to free up streaming servers.",
            "**Affected Tables**: `video_sessions`, `video_session_participants`."
          ]
        }
      },
      {
        "id": "4-get-api-cron-check-expirations-",
        "title": {
          "ar": "4. `GET /api/cron/check-expirations`",
          "en": "4. `GET /api/cron/check-expirations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: دوري كل ساعة أو يومياً.",
            "**ما تفعله بالتفصيل**: معالجة انتهاء مهلة اختيار الموعد للجلسات الفردية 1:1 (مهلة الـ 3 أيام):",
            "البحث عن الحجوزات المنتهية بجدول `reserved_slots` (`status = 'pending'` و `expires_at < NOW()`).",
            "تحديث حالة الحجز إلى `expired`.",
            "خفض عداد الحجوزات المعلقة لدى القارئ بجدول `reader_profiles`.",
            "**تعليق حساب الطالب آلياً**: تعديل `student_status = 'suspended'` وإدراج `suspension_reason = 'انتهت مهلة 3 أيام لاختيار موعد الجلسة'`.",
            "إرسال إشعار للطالب المعلق يوضح كيفية طلب موعد جديد.",
            "**مستقبل النتيجة**: الطالب المعطل حسابه والقارئ المعني (إشعار بالمنصة وتحديث حالة الحساب).",
            "**الجداول المتأثرة**: `reserved_slots`, `reader_profiles`, `users`, `notifications`."
          ],
          "en": [
            "**Execution Schedule**: Periodically every hour or daily.",
            "**Detailed Operation**: Handles expiration of the 3-day time slot selection window for 1:1 individual sessions:",
            "Search for expired bookings in `reserved_slots` table (`status = 'pending'` and `expires_at < NOW()`).",
            "Update booking status to `expired`.",
            "Decrement the reader's pending booking counter in `reader_profiles` table.",
            "**Automatically suspend student account**: Update `student_status = 'suspended'` and insert `suspension_reason = '3-day deadline for selecting session time expired'`.",
            "Send a notification to the suspended student explaining how to request a new slot.",
            "**Recipient**: The suspended student and the relevant reader (in-platform notification + account status update).",
            "**Affected Tables**: `reserved_slots`, `reader_profiles`, `users`, `notifications`."
          ]
        }
      },
      {
        "id": "5-get-post-api-cron-parent-weekly-reports-",
        "title": {
          "ar": "5. `GET` / `POST /api/cron/parent-weekly-reports`",
          "en": "5. `GET` / `POST /api/cron/parent-weekly-reports`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: أسبوعياً (مساء كل أحد/إثنين).",
            "**ما تفعله بالتفصيل**: حساب وتجميع تقارير الإنجاز الأسبوعية للطلاب المربوطين (الأداء التعليمي، الحضور، النقاط، المهام) وإرسالها لأولياء الأمور.",
            "**مستقبل النتيجة**: ولي الأمر المربوط بالحساب (`parent_children`) عبر البريد الإلكتروني وإشعارات المنصة.",
            "**الجداول المتأثرة**: `parent_children`, `student_reports`, `enrollments`, `task_submissions`, `user_points`."
          ],
          "en": [
            "**Execution Schedule**: Weekly (every Sunday/Monday evening).",
            "**Detailed Operation**: Calculates and compiles weekly achievement reports for linked students (educational performance, attendance, points, tasks) and sends them to parents.",
            "**Recipient**: Parents linked to accounts (`parent_children`) via email and platform notifications.",
            "**Affected Tables**: `parent_children`, `student_reports`, `enrollments`, `task_submissions`, `user_points`."
          ]
        }
      },
      {
        "id": "6-get-api-cron-recover-multipart-",
        "title": {
          "ar": "6. `GET /api/cron/recover-multipart`",
          "en": "6. `GET /api/cron/recover-multipart`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: دوري كل 10 إلى 15 دقيقة.",
            "**ما تفعله بالتفصيل**: الإنقاذ التلقائي لتسجيلات الفيديو والصوت المقطوعة نتيجة إغلاق المتصفح (`Crash Recovery`):",
            "البحث عن التسجيلات المعلقة بجدول `video_recordings` (`status = 'uploading'`).",
            "إعادة استعلام الأجزاء المرفوعة فعلياً لـ AWS S3 عبر `listMultipartParts`.",
            "تجميع الأجزاء وإكمال الملف (`completeMultipart`) وتحديث الحالة إلى `completed` وتعيين `recording_url`.",
            "في حال عدم وجود أي أجزاء مرفوعة، يتم إلغاء العملية (`abortMultipart`) لتحرير المساحة التخزينية.",
            "**مستقبل النتيجة**: أرشيف التسجيلات التابع للنظام (`video_recordings` & `video_sessions`).",
            "**الجداول المتأثرة**: `video_recordings`, `video_sessions`."
          ],
          "en": [
            "**Execution Schedule**: Periodically every 10 to 15 minutes.",
            "**Detailed Operation**: Automatic crash recovery for video and audio recordings interrupted due to browser closure:",
            "Search for pending recordings in `video_recordings` table (`status = 'uploading'`).",
            "Re-query parts actually uploaded to AWS S3 via `listMultipartParts`.",
            "Assemble parts and complete file (`completeMultipart`), update status to `completed`, and set `recording_url`.",
            "If no uploaded parts exist, cancel the process (`abortMultipart`) to free up storage space.",
            "**Recipient**: System recording archive (`video_recordings` & `video_sessions`).",
            "**Affected Tables**: `video_recordings`, `video_sessions`."
          ]
        }
      },
      {
        "id": "7-get-api-cron-reminders-",
        "title": {
          "ar": "7. `GET /api/cron/reminders`",
          "en": "7. `GET /api/cron/reminders`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: كل ساعة (`0 * * * *`).",
            "**ما تفعله بالتفصيل**: التذكير بجلسات المقرأة الفردية 1:1 قبل 24 ساعة من موعدها:",
            "جلب الحجوزات المعتمدة `confirmed` التي تبدأ خلال 24 ساعة ولم يرسل لها تذكير (`reminder_sent_at IS NULL`).",
            "إرسال بريد إلكتروني تفصيلي للطالب يتضمن موعد الجلسة ورابط الاجتماع `meeting_link`.",
            "إضافة إشعار تفاعلي بجدول `notifications` وتعيين `reminder_sent_at = NOW()`.",
            "**مستقبل النتيجة**: الطالب المعني بالحجز (إيميل رسمي + إشعار بالمنصة).",
            "**الجداول المتأثرة**: `bookings`, `users`, `notifications`."
          ],
          "en": [
            "**Execution Schedule**: Hourly (`0 * * * *`).",
            "**Detailed Operation**: Reminder for 1:1 individual Maqraa sessions 24 hours prior to scheduled time:",
            "Fetch `confirmed` bookings starting within 24 hours that have not been sent reminders (`reminder_sent_at IS NULL`).",
            "Send detailed email to student including session date/time and meeting link `meeting_link`.",
            "Add interactive notification to `notifications` table and set `reminder_sent_at = NOW()`.",
            "**Recipient**: Student assigned to the booking (official email + platform notification).",
            "**Affected Tables**: `bookings`, `users`, `notifications`."
          ]
        }
      },
      {
        "id": "8-get-api-cron-session-reminders-",
        "title": {
          "ar": "8. `GET /api/cron/session-reminders`",
          "en": "8. `GET /api/cron/session-reminders`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: دوري كل 10 إلى 15 دقيقة.",
            "**ما تفعله بالتفصيل**: التذكيرات المرحلية لمجالس ودروس الأكاديمية:",
            "**تذكير الساعة**: إرسال إشعار للطلاب المقيدين بالدورة قبل الدرس بساعة.",
            "**تذكير الـ 10 دقائق**: إرسال إشعار عاجل للطلاب الانضمام الفوري للدرس.",
            "**مستقبل النتيجة**: الطلاب المسجلين بالدورة التعليمية (`enrollments`).",
            "**الجداول المتأثرة**: `course_sessions`, `courses`, `enrollments`, `session_meeting_invites`, `notifications`."
          ],
          "en": [
            "**Execution Schedule**: Periodically every 10 to 15 minutes.",
            "**Detailed Operation**: Phased reminders for Academy majalis and lessons:",
            "**1-Hour Reminder**: Send notification to enrolled students 1 hour before lesson.",
            "**10-Minute Reminder**: Send urgent notification to students for immediate lesson join.",
            "**Recipient**: Students enrolled in the educational course (`enrollments`).",
            "**Affected Tables**: `course_sessions`, `courses`, `enrollments`, `session_meeting_invites`, `notifications`."
          ]
        }
      },
      {
        "id": "9-get-api-cron-streak-reminders-",
        "title": {
          "ar": "9. `GET /api/cron/streak-reminders`",
          "en": "9. `GET /api/cron/streak-reminders`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**توقيت التشغيل**: يومياً قبل نهاية اليوم (الساعة 11 مساءً).",
            "**ما تفعله بالتفصيل**: حماية السلسلة المتواصلة للطالب (`Streak Protection`):",
            "تتبع الطلاب أصحاب السلسلة المتواصلة (`streak_days >= 1`) الذين لم ينجزوا أي تسميع أو نشاط تعليمي اليوم، وإرسال تنبيه عاجل لحثهم على التسجيل لتجنب تصفير السلسلة.",
            "**مستقبل النتيجة**: الطلاب المعرضون لكسر السلسلة اليومية.",
            "**الجداول المتأثرة**: `user_points`, `users`, `notifications`."
          ],
          "en": [
            "**Execution Schedule**: Daily before end of day (11:00 PM).",
            "**Detailed Operation**: Protect continuous student daily streak (`Streak Protection`):",
            "Track students with active streaks (`streak_days >= 1`) who haven't completed any recitation or educational activity today, sending an urgent alert to prompt logging activity to prevent streak reset to zero.",
            "**Recipient**: Students at risk of breaking their daily streak today.",
            "**Affected Tables**: `user_points`, `users`, `notifications`."
          ]
        }
      }
    ]
  },
  {
    "slug": "database-users-permissions",
    "group": "admin",
    "icon": "admin",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "قاعدة البيانات — المستخدمين والصلاحيات",
      "en": "Database — Users & Permissions"
    },
    "description": {
      "ar": "توثيق جداول الحسابات، الأدوار، الصلاحيات، التوكنات، والاعتمادات.",
      "en": "Database schema for accounts, roles, permissions, tokens, and verification."
    },
    "audience": {
      "ar": "مورو قواعد البيانات والمطورون",
      "en": "Database Administrators & Developers"
    },
    "keywords": {
      "ar": [
        "قاعدة البيانات — المستخدمين والصلاحيات",
        "توثيق جداول الحسابات، الأدوار، الصلاحيات، التوكنات، والاعتمادات.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Database — Users & Permissions",
        "Database schema for accounts, roles, permissions, tokens, and verification.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/admin/users"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الشامل والمفصل لجداول قاعدة البيانات المخصصة لإدارة المستخدمين، المصادقة، التوكنات، الأدوار والصلاحيات، طلبات التقديم، والإشراف في مشروع الأكاديمية والمقرأة (`Supabase Postgres Database`). ---",
          "en": "This section provides comprehensive technical documentation for database tables dedicated to user management, authentication, tokens, roles & permissions, applications, and supervision in the Academy and Maqraa project (`Supabase Postgres Database`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الشامل والمفصل لجداول قاعدة البيانات المخصصة لإدارة المستخدمين، المصادقة، التوكنات، الأدوار والصلاحيات، طلبات التقديم، والإشراف في مشروع الأكاديمية والمقرأة (`Supabase Postgres Database`). ---"
          ],
          "en": [
            "This section provides comprehensive technical documentation for database tables dedicated to user management, authentication, tokens, roles & permissions, applications, and supervision in the Academy and Maqraa project (`Supabase Postgres Database`). ---"
          ]
        }
      },
      {
        "id": "1-account-",
        "title": {
          "ar": "1. `account`",
          "en": "1. `account`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: تخزين بيانات الحسابات المربوطة بمزودي المصادقة الخارجيين (NextAuth / OAuth Providers مثل Google و GitHub).",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`varchar`, Primary Key): المعرف الفريد لسجل الحساب.",
            "`userId` (`uuid`, Foreign Key): معرف المستخدم المربوط بجدول `users`.",
            "`type` (`varchar`): نوع الحساب (`oauth`, `credentials`).",
            "`provider` (`varchar`): اسم المزود (`google`, `github`).",
            "`providerAccountId` (`varchar`): المعرف الفريد لدى مزود الخدمة الخارجي.",
            "`refreshToken` (`text`): توكن التحديث الخاص بالمزود.",
            "`accessToken` (`text`): توكن الوصول الخاص بالمزود.",
            "`expiresAt` (`bigint`): تاريخ انتهاء التوكن.",
            "**العلاقات (Foreign Keys)**:",
            "`userId` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/login`, `/api/auth/me`."
          ],
          "en": [
            "**Purpose**: Store account details linked with external authentication providers (NextAuth / OAuth Providers like Google and GitHub).",
            "**Key Columns & Types**:",
            "`id` (`varchar`, Primary Key): Unique identifier for the account record.",
            "`userId` (`uuid`, Foreign Key): User ID linked to `users` table.",
            "`type` (`varchar`): Account type (`oauth`, `credentials`).",
            "`provider` (`varchar`): Provider name (`google`, `github`).",
            "`providerAccountId` (`varchar`): Unique ID at the external service provider.",
            "`refreshToken` (`text`): Provider's refresh token.",
            "`accessToken` (`text`): Provider's access token.",
            "`expiresAt` (`bigint`): Token expiration timestamp.",
            "**Relationships (Foreign Keys)**:",
            "`userId` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/auth/login`, `/api/auth/me`."
          ]
        }
      },
      {
        "id": "2-users-",
        "title": {
          "ar": "2. `users`",
          "en": "2. `users`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: السجل المركزي والرئيسي لجميع مستخدمي المنصة بمختلف أدوارهم (طلاب، معلمين، قراء، أولياء أمور، مشرفين، مدراء).",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): المعرف الفريد الفريد للمستخدم.",
            "`name` (`varchar`): الاسم الكامل للمستخدم.",
            "`email` (`varchar`, Unique): البريد الإلكتروني.",
            "`password_hash` (`varchar`): كلمة المرور المشفرة بخوارزمية `bcrypt`.",
            "`role` (`varchar`): الدور الأساسي (`student`, `teacher`, `reader`, `parent`, `supervisor`, `admin`, `academy_admin`, `super_admin`).",
            "`academy_roles` (`ARRAY`): قائمة الأدوار الثانوية المسندة بالمنصة.",
            "`is_active` (`boolean`): حالة تفعيل الحساب بالمنصة.",
            "`is_disabled` (`boolean`): حظر الحساب الفوري ومزامنته مع الـ Middleware.",
            "`is_locked` (`boolean`): قفل الحساب آلياً بعد محاولات الدخول الخاطئة.",
            "`failed_login_count` (`integer`): عداد محاولات الدخول الخاطئة (حد أقصى 5).",
            "`student_status` (`text`): حالة الطالب (`active`, `suspended`).",
            "`notification_preferences` (`jsonb`): تفضيلات الإشعارات الشخصية.",
            "**العلاقات (Foreign Keys)**:",
            "يرتبط بـ `reader_profiles`, `user_sessions`, `refresh_tokens`, `enrollments`, `bookings`, `messages`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/*`, `/api/admin/users`, `/api/admin/security`, `/api/academy/admin/users`."
          ],
          "en": [
            "**Purpose**: Main central registry for all platform users across various roles (students, teachers, readers, parents, supervisors, admins).",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Unique user identifier.",
            "`name` (`varchar`): Full name of the user.",
            "`email` (`varchar`, Unique): Email address.",
            "`password_hash` (`varchar`): Password hashed with `bcrypt` algorithm.",
            "`role` (`varchar`): Primary role (`student`, `teacher`, `reader`, `parent`, `supervisor`, `admin`, `academy_admin`, `super_admin`).",
            "`academy_roles` (`ARRAY`): List of secondary assigned roles on the platform.",
            "`is_active` (`boolean`): Account activation state on the platform.",
            "`is_disabled` (`boolean`): Immediate account ban synchronized with Middleware.",
            "`is_locked` (`boolean`): Automatic account lock after failed login attempts.",
            "`failed_login_count` (`integer`): Failed login attempt counter (max 5).",
            "`student_status` (`text`): Student status (`active`, `suspended`).",
            "`notification_preferences` (`jsonb`): Personal notification preferences.",
            "**Relationships (Foreign Keys)**:",
            "Linked to `reader_profiles`, `user_sessions`, `refresh_tokens`, `enrollments`, `bookings`, `messages`.",
            "**Linked API Endpoints**: `/api/auth/*`, `/api/admin/users`, `/api/admin/security`, `/api/academy/admin/users`."
          ]
        }
      },
      {
        "id": "3-session-",
        "title": {
          "ar": "3. `session`",
          "en": "3. `session`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: إدارة جلسات NextAuth المؤقتة المسجلة بالنظام.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`varchar`, Primary Key): معرف الجلسة.",
            "`userId` (`uuid`, Foreign Key): معرف المستخدم صاحب الجلسة.",
            "`token` (`varchar`): رمز الجلسة المشفر.",
            "`expiresAt` (`timestamp`): تاريخ انتهاء الجلسة.",
            "**العلاقات (Foreign Keys)**:",
            "`userId` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/*`."
          ],
          "en": [
            "**Purpose**: Management of temporary NextAuth sessions registered in the system.",
            "**Key Columns & Types**:",
            "`id` (`varchar`, Primary Key): Session ID.",
            "`userId` (`uuid`, Foreign Key): User ID owning the session.",
            "`token` (`varchar`): Encrypted session token.",
            "`expiresAt` (`timestamp`): Session expiration date.",
            "**Relationships (Foreign Keys)**:",
            "`userId` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/auth/*`."
          ]
        }
      },
      {
        "id": "4-user_sessions-",
        "title": {
          "ar": "4. `user_sessions`",
          "en": "4. `user_sessions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: السجل الحي للجلسات النشطة لتتبع عنوان الـ IP ونوع المتصفح وتأمين خروج الحسابات المعطلة لحظياً (`Security A-5`).",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف سجل الجلسة.",
            "`user_id` (`uuid`, Foreign Key): معرف المستخدم.",
            "`token` (`text`): توكن الجلسة المحلي المشفر.",
            "`ip_address` (`inet`): عنوان الـ IP الخاص بالجهاز.",
            "`user_agent` (`text`): معرف متصفح وجهاز المستخدم.",
            "`last_active_at` (`timestamp`): آخر تواجد وحركة على المنصة.",
            "**العلاقات (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/login`, `/api/auth/logout`, `/api/admin/users`."
          ],
          "en": [
            "**Purpose**: Live registry of active sessions for tracking IP address and browser type, securing immediate logout for disabled accounts (`Security A-5`).",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Session record ID.",
            "`user_id` (`uuid`, Foreign Key): User ID.",
            "`token` (`text`): Encrypted local session token.",
            "`ip_address` (`inet`): Device IP address.",
            "`user_agent` (`text`): User browser and device identifier.",
            "`last_active_at` (`timestamp`): Last activity timestamp on the platform.",
            "**Relationships (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/auth/login`, `/api/auth/logout`, `/api/admin/users`."
          ]
        }
      },
      {
        "id": "5-refresh_tokens-",
        "title": {
          "ar": "5. `refresh_tokens`",
          "en": "5. `refresh_tokens`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: تخزين توكنات التحديث لتجديد الجلسات وإصدار توكنات جديدة عند انتهاء الصلاحية.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`/`bigint`, Primary Key): معرف التوكن.",
            "`user_id` (`uuid`, Foreign Key): معرف المستخدم.",
            "`token` (`text`): رمز التحديث.",
            "`expires_at` (`timestamp`): تاريخ الانتهاء.",
            "`revoked` (`boolean`): حظر التوكن وإلغاء صلاحيته.",
            "**العلاقات (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/login`, `/api/auth/logout`, `/api/admin/users`."
          ],
          "en": [
            "**Purpose**: Store refresh tokens for renewing sessions and issuing new tokens upon expiration.",
            "**Key Columns & Types**:",
            "`id` (`uuid`/`bigint`, Primary Key): Token ID.",
            "`user_id` (`uuid`, Foreign Key): User ID.",
            "`token` (`text`): Refresh token string.",
            "`expires_at` (`timestamp`): Expiration date.",
            "`revoked` (`boolean`): Token revocation and invalidation status.",
            "**Relationships (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/auth/login`, `/api/auth/logout`, `/api/admin/users`."
          ]
        }
      },
      {
        "id": "6-verificationtoken-",
        "title": {
          "ar": "6. `verificationToken`",
          "en": "6. `verificationToken`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: رموز وتوكنات تفعيل وحسابات البريد الإلكتروني والتحقق من الهوية.",
            "**أهم الأعمدة ونوعها**:",
            "`token` (`varchar`, Primary Key): رمز التحقق.",
            "`email` (`varchar`): البريد الإلكتروني المستهدف.",
            "`expiresAt` (`timestamp`): تاريخ انقضاء الرمز.",
            "**العلاقات (Foreign Keys)**: مرجعي بـ `users.email`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/verify`, `/api/auth/register`."
          ],
          "en": [
            "**Purpose**: Verification tokens and codes for email verification and identity check.",
            "**Key Columns & Types**:",
            "`token` (`varchar`, Primary Key): Verification token.",
            "`email` (`varchar`): Target email address.",
            "`expiresAt` (`timestamp`): Token expiration date.",
            "**Relationships (Foreign Keys)**: Referenced by `users.email`.",
            "**Linked API Endpoints**: `/api/auth/verify`, `/api/auth/register`."
          ]
        }
      },
      {
        "id": "7-role_permissions-",
        "title": {
          "ar": "7. `role_permissions`",
          "en": "7. `role_permissions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: حصر وتعريف الأدوار القيادية والتنفيذية المتاحة بالمنصة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف سجل الدور.",
            "`role` (`varchar`, Unique): اسم الدور التنسيقي.",
            "`description` (`text`): الوصف والتفاصيل التنظيمية للدور.",
            "**العلاقات (Foreign Keys)**: يرتبط بـ `permission_mappings.role`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/roles`."
          ],
          "en": [
            "**Purpose**: Define and restrict administrative and executive roles available on the platform.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Role record ID.",
            "`role` (`varchar`, Unique): Role code name.",
            "`description` (`text`): Description and organizational details of the role.",
            "**Relationships (Foreign Keys)**: Linked to `permission_mappings.role`.",
            "**Linked API Endpoints**: `/api/admin/roles`."
          ]
        }
      },
      {
        "id": "8-permission_mappings-",
        "title": {
          "ar": "8. `permission_mappings`",
          "en": "8. `permission_mappings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: تعيين الأذونات الدقيقة لكل دور على مستوى الموارد والإجراءات بالنظام (`resource`, `action`, `can_access`).",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الأذن.",
            "`role` (`varchar`): كود الدور.",
            "`resource` (`varchar`): اسم المورد (مثل `courses`, `users`, `fiqh`).",
            "`action` (`varchar`): الإجراء المسموح (`create`, `read`, `update`, `delete`).",
            "`can_access` (`boolean`): السماح أو المنع.",
            "**العلاقات (Foreign Keys)**: `role` -> `role_permissions.role`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/roles`."
          ],
          "en": [
            "**Purpose**: Assign granular permissions to each role at the system resource and action level (`resource`, `action`, `can_access`).",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Permission ID.",
            "`role` (`varchar`): Role code.",
            "`resource` (`varchar`): Resource name (e.g., `courses`, `users`, `fiqh`).",
            "`action` (`varchar`): Allowed action (`create`, `read`, `update`, `delete`).",
            "`can_access` (`boolean`): Allow or deny access.",
            "**Relationships (Foreign Keys)**: `role` -> `role_permissions.role`.",
            "**Linked API Endpoints**: `/api/admin/roles`."
          ]
        }
      },
      {
        "id": "9-permission_invalidations-",
        "title": {
          "ar": "9. `permission_invalidations`",
          "en": "9. `permission_invalidations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: سجل إبطال الصلاحيات الفوري لتنبيه الـ Middleware بتحديث أذونات العضو فور تغيير دوره بالمنصة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`bigint`, Primary Key): التسلسل الزمني.",
            "`user_id` (`uuid`, Foreign Key): العضو المستهدف بالإبطال.",
            "`invalidated_at` (`timestamp`): تاريخ الإبطال.",
            "`admin_id` (`uuid`, Foreign Key): المدير منفذ الإجراء.",
            "**العلاقات (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`admin_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/roles`, `/api/admin/users`."
          ],
          "en": [
            "**Purpose**: Immediate permission invalidation log notifying Middleware to update member permissions upon role change.",
            "**Key Columns & Types**:",
            "`id` (`bigint`, Primary Key): Chronological sequence ID.",
            "`user_id` (`uuid`, Foreign Key): Target member for invalidation.",
            "`invalidated_at` (`timestamp`): Invalidation timestamp.",
            "`admin_id` (`uuid`, Foreign Key): Admin executing the action.",
            "**Relationships (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`admin_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/admin/roles`, `/api/admin/users`."
          ]
        }
      },
      {
        "id": "10-supervisor_assignments-",
        "title": {
          "ar": "10. `supervisor_assignments`",
          "en": "10. `supervisor_assignments`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: تحدد ونطاق إشراف المشرفين على قطاعات الطلاب أو المعلمين أو المواد بالمنصة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف التعيين.",
            "`supervisor_id` (`uuid`, Foreign Key): معرف المشرف.",
            "`scope_type` (`text`): نوع النطاق (`student`, `reader`, `course`, `all`).",
            "`scope_value` (`text`): قيمة النطاق أو المعرفات.",
            "`is_active` (`boolean`): تفعيل التكليف.",
            "**العلاقات (Foreign Keys)**:",
            "`supervisor_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/supervisors`, `/api/admin/supervisor-tasks`."
          ],
          "en": [
            "**Purpose**: Define supervision scope for supervisors over student, teacher, or course sectors.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Assignment ID.",
            "`supervisor_id` (`uuid`, Foreign Key): Supervisor ID.",
            "`scope_type` (`text`): Scope type (`student`, `reader`, `course`, `all`).",
            "`scope_value` (`text`): Scope value or identifiers.",
            "`is_active` (`boolean`): Assignment active state.",
            "**Relationships (Foreign Keys)**:",
            "`supervisor_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/academy/admin/supervisors`, `/api/admin/supervisor-tasks`."
          ]
        }
      },
      {
        "id": "11-user_specializations-",
        "title": {
          "ar": "11. `user_specializations`",
          "en": "11. `user_specializations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: توثيق التخصصات العلمية والشرعية المسندة للمدرسين والقراء والمشرفين.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف التخصص.",
            "`user_id` (`uuid`, Foreign Key): العضو صاحب التخصص.",
            "`specialization` (`text`): مسار التخصص.",
            "`set_by` (`text`): طريقة التعيين.",
            "**العلاقات (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/teachers`, `/api/admin/users`."
          ],
          "en": [
            "**Purpose**: Document academic and Sharia specializations assigned to teachers, readers, and supervisors.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Specialization ID.",
            "`user_id` (`uuid`, Foreign Key): Member owning the specialization.",
            "`specialization` (`text`): Specialization track.",
            "`set_by` (`text`): Assignment method.",
            "**Relationships (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/academy/admin/teachers`, `/api/admin/users`."
          ]
        }
      },
      {
        "id": "12-teacher_applications-",
        "title": {
          "ar": "12. `teacher_applications`",
          "en": "12. `teacher_applications`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: طلبات التقديم والانضمام المقدمة من المعلمين للأكاديمية مع السيرة الذاتية والمرفقات الصوتية.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الطلب.",
            "`user_id` (`uuid`, Foreign Key): حساب المتقدم بـ `users`.",
            "`full_name`, `email`, `phone`: بيانات المتقدم.",
            "`qualification` (`text`), `specialization` (`text`): المؤهل والتخصص.",
            "`years_of_experience` (`integer`), `memorized_parts` (`integer`).",
            "`cv_url` (`text`), `certificate_file_url` (`text`), `audio_url` (`text`).",
            "`status` (`varchar`): حالة الطلب (`pending`, `approved`, `rejected`).",
            "`rejection_reason` (`text`): سبب الرفض إن وجد.",
            "**العلاقات (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`reviewed_by` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/teacher-register`, `/api/academy/admin/teacher-applications`, `/api/auth/reapply`."
          ],
          "en": [
            "**Purpose**: Applications submitted by teachers to join the academy, with CV and audio attachments.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Application ID.",
            "`user_id` (`uuid`, Foreign Key): Applicant account in `users`.",
            "`full_name`, `email`, `phone`: Applicant details.",
            "`qualification` (`text`), `specialization` (`text`): Qualification and specialization.",
            "`years_of_experience` (`integer`), `memorized_parts` (`integer`).",
            "`cv_url` (`text`), `certificate_file_url` (`text`), `audio_url` (`text`).",
            "`status` (`varchar`): Application status (`pending`, `approved`, `rejected`).",
            "`rejection_reason` (`text`): Rejection reason if applicable.",
            "**Relationships (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`reviewed_by` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/auth/teacher-register`, `/api/academy/admin/teacher-applications`, `/api/auth/reapply`."
          ]
        }
      },
      {
        "id": "13-teacher_verifications-",
        "title": {
          "ar": "13. `teacher_verifications`",
          "en": "13. `teacher_verifications`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: سجل الاعتماد والتوثيق لمعلمي الأكاديمية ودرجات الثقة (`trust_score`).",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الاعتماد.",
            "`teacher_id` (`uuid`, Foreign Key): المعلم المستهدف.",
            "`supervisor_id` (`uuid`, Foreign Key): المشرف المعتمد.",
            "`trust_score` (`integer`): درجة الثقة والمصداقية.",
            "`notes` (`text`): ملاحظات التوثيق.",
            "**العلاقات (Foreign Keys)**:",
            "`teacher_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`supervisor_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/teachers`, `/api/academy/supervisor/teachers`."
          ],
          "en": [
            "**Purpose**: Verification and accreditation log for Academy teachers and trust scores (`trust_score`).",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Verification ID.",
            "`teacher_id` (`uuid`, Foreign Key): Target teacher.",
            "`supervisor_id` (`uuid`, Foreign Key): Accrediting supervisor.",
            "`trust_score` (`integer`): Trust and credibility score.",
            "`notes` (`text`): Verification notes.",
            "**Relationships (Foreign Keys)**:",
            "`teacher_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`supervisor_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/academy/admin/teachers`, `/api/academy/supervisor/teachers`."
          ]
        }
      },
      {
        "id": "14-teacher_followers-",
        "title": {
          "ar": "14. `teacher_followers`",
          "en": "14. `teacher_followers`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: تتبع الطلاب المتابعين لمعلمي الأكاديمية لإرسال إشعارات الدروس العامة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف المتابعة.",
            "`user_id` (`uuid`, Foreign Key): الطالب المتابع.",
            "`teacher_id` (`uuid`, Foreign Key): المعلم المتبع.",
            "`followed_at` (`timestamp`): تاريخ بدء المتابعة.",
            "**العلاقات (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`teacher_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/teachers/[id]/follow`."
          ],
          "en": [
            "**Purpose**: Track students following Academy teachers to send public lesson notifications.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Follow record ID.",
            "`user_id` (`uuid`, Foreign Key): Following student.",
            "`teacher_id` (`uuid`, Foreign Key): Followed teacher.",
            "`followed_at` (`timestamp`): Follow timestamp.",
            "**Relationships (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`teacher_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/academy/teacher/teachers/[id]/follow`."
          ]
        }
      },
      {
        "id": "15-reader_applications-",
        "title": {
          "ar": "15. `reader_applications`",
          "en": "15. `reader_applications`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: طلبات التقديم لصفة \"قارئ/مقريء\" بالمقرأة العامة متضمنة تسجيل التلاوة وتقييمات المراجعة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الطلب.",
            "`user_id` (`uuid`, Foreign Key): المتقدم بجدول `users`.",
            "`audio_url` (`text`): رابط عينة التلاوة الصوتية.",
            "`status` (`varchar`): حالة الطلب (`pending`, `approved`, `rejected`).",
            "`reviewer_notes` (`text`), `review_scores` (`jsonb`): تقييم لجنة الاختبار.",
            "**العلاقات (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`reviewer_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/reader-register`, `/api/admin/reader-applications`, `/api/auth/reapply`."
          ],
          "en": [
            "**Purpose**: Applications for \"Reader/Reciter\" status in the public Maqraa including recitation recording and review evaluations.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Application ID.",
            "`user_id` (`uuid`, Foreign Key): Applicant in `users` table.",
            "`audio_url` (`text`): Audio recitation sample URL.",
            "`status` (`varchar`): Application status (`pending`, `approved`, `rejected`).",
            "`reviewer_notes` (`text`), `review_scores` (`jsonb`): Examination committee evaluation.",
            "**Relationships (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`reviewer_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/auth/reader-register`, `/api/admin/reader-applications`, `/api/auth/reapply`."
          ]
        }
      },
      {
        "id": "16-reader_profiles-",
        "title": {
          "ar": "16. `reader_profiles`",
          "en": "16. `reader_profiles`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: الملف الشخصي والمهني للقارئ المعلم بالمقرأة (الإجازات، الطاقة الاستيعابية، المواعيد).",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الملف.",
            "`user_id` (`uuid`, Foreign Key): القارئ بجدول `users`.",
            "`full_name_triple` (`varchar`): الاسم الثلاثي الرسمي.",
            "`specialization` (`varchar`), `ijazah_details` (`text`): الروايات والإجازات.",
            "`rating` (`numeric`), `total_reviews` (`integer`): متوسط التقييمات.",
            "`is_accepting_students` (`boolean`): استقبال طلاب جدد.",
            "`current_reserved_slots` (`integer`), `max_total_slots` (`integer`).",
            "**العلاقات (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/profile`, `/api/admin/readers`, `/api/cron/check-expirations`."
          ],
          "en": [
            "**Purpose**: Personal and professional profile for Maqraa reciter/teacher (Ijazahs, capacity, schedules).",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Profile ID.",
            "`user_id` (`uuid`, Foreign Key): Reader in `users` table.",
            "`full_name_triple` (`varchar`): Official triple full name.",
            "`specialization` (`varchar`), `ijazah_details` (`text`): Riwayats and Ijazahs.",
            "`rating` (`numeric`), `total_reviews` (`integer`): Average ratings.",
            "`is_accepting_students` (`boolean`): Accepting new students.",
            "`current_reserved_slots` (`integer`), `max_total_slots` (`integer`).",
            "**Relationships (Foreign Keys)**:",
            "`user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/academy/teacher/profile`, `/api/admin/readers`, `/api/cron/check-expirations`."
          ]
        }
      },
      {
        "id": "17-reader_stats-",
        "title": {
          "ar": "17. `reader_stats`",
          "en": "17. `reader_stats`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: الإحصائيات التراكمية والأداء الميداني للقارئ بالمنصة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف السجل.",
            "`reader_id` (`uuid`, Foreign Key): القارئ.",
            "`total_reviews_completed` (`integer`), `total_sessions_completed` (`integer`).",
            "`average_review_time_minutes` (`numeric`), `approval_rate` (`numeric`).",
            "**العلاقات (Foreign Keys)**:",
            "`reader_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/readers`, `/api/academy/teacher/profile`."
          ],
          "en": [
            "**Purpose**: Cumulative statistics and field performance for the reader on the platform.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Record ID.",
            "`reader_id` (`uuid`, Foreign Key): Reader.",
            "`total_reviews_completed` (`integer`), `total_sessions_completed` (`integer`).",
            "`average_review_time_minutes` (`numeric`), `approval_rate` (`numeric`).",
            "**Relationships (Foreign Keys)**:",
            "`reader_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/admin/readers`, `/api/academy/teacher/profile`."
          ]
        }
      },
      {
        "id": "18-reader_ratings-",
        "title": {
          "ar": "18. `reader_ratings`",
          "en": "18. `reader_ratings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: التقييمات والملاحظات الواردة من الطلاب عقب انتهاء جلسات الإقراء والتسميع الفردية.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف التقييم.",
            "`booking_id` (`uuid`, Foreign Key): الجلسة المربوطة بـ `bookings`.",
            "`student_id` (`uuid`, Foreign Key): الطالب المقيّم.",
            "`reader_id` (`uuid`, Foreign Key): القارئ المقيّم.",
            "`rating` (`integer`): التقييم الإجمالي (1-5).",
            "`feedback_text` (`text`): نص التقييم والملاحظات.",
            "**العلاقات (Foreign Keys)**:",
            "`booking_id` -> `bookings.id`",
            "`student_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`reader_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/sessions`, `/api/admin/readers`."
          ],
          "en": [
            "**Purpose**: Ratings and feedback received from students after concluding individual recitation sessions.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Rating ID.",
            "`booking_id` (`uuid`, Foreign Key): Session linked to `bookings`.",
            "`student_id` (`uuid`, Foreign Key): Rating student.",
            "`reader_id` (`uuid`, Foreign Key): Rated reader.",
            "`rating` (`integer`): Overall rating (1-5).",
            "`feedback_text` (`text`): Feedback text and notes.",
            "**Relationships (Foreign Keys)**:",
            "`booking_id` -> `bookings.id`",
            "`student_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`reader_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/academy/student/sessions`, `/api/admin/readers`."
          ]
        }
      },
      {
        "id": "19-reader_time_off-",
        "title": {
          "ar": "19. `reader_time_off`",
          "en": "19. `reader_time_off`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: سجل إجازات القارئ واستقطاع المواعيد لحجب الحجز بالمقرأة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الإجازة.",
            "`reader_id` (`uuid`, Foreign Key): القارئ.",
            "`start_date` (`date`), `end_date` (`date`): الفترة الزمنية.",
            "`reason` (`varchar`): سبب الاستقطاع.",
            "**العلاقات (Foreign Keys)**:",
            "`reader_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/calendar`, `/api/admin/readers`."
          ],
          "en": [
            "**Purpose**: Reader leave log and blocked time slots to prevent booking in Maqraa.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Leave ID.",
            "`reader_id` (`uuid`, Foreign Key): Reader.",
            "`start_date` (`date`), `end_date` (`date`): Time period.",
            "`reason` (`varchar`): Reason for leave.",
            "**Relationships (Foreign Keys)**:",
            "`reader_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/academy/teacher/calendar`, `/api/admin/readers`."
          ]
        }
      },
      {
        "id": "20-universities-",
        "title": {
          "ar": "20. `universities`",
          "en": "20. `universities`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: حصر وسجل الجامعات والمؤسسات الأكاديمية الشرعية المعتمدة لاختيار المؤهلات.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الجامعة.",
            "`name` (`varchar`): اسم الجامعة الرسمي.",
            "**العلاقات (Foreign Keys)**: مرجعي لـ `teacher_applications.qualification`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/auth/teacher-register`, `/api/admin/settings`."
          ],
          "en": [
            "**Purpose**: Registry of accredited universities and Sharia academic institutions for selecting qualifications.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): University ID.",
            "`name` (`varchar`): Official university name.",
            "**Relationships (Foreign Keys)**: Referenced by `teacher_applications.qualification`.",
            "**Linked API Endpoints**: `/api/auth/teacher-register`, `/api/admin/settings`."
          ]
        }
      },
      {
        "id": "21-invitation_codes-",
        "title": {
          "ar": "21. `invitation_codes`",
          "en": "21. `invitation_codes`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: الرموز الأكاديمية والترويجية لتسجيل الطلاب بالدورات والكورسات.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الكود.",
            "`code` (`varchar`, Unique): الرمز السري للاستخدام.",
            "`created_by` (`uuid`, Foreign Key): منشئ الكود.",
            "`course_id` (`uuid`, Foreign Key): الدورة التعليمية المربوطة.",
            "`max_uses` (`integer`), `used_count` (`integer`): عداد وحظر الاستخدامات.",
            "**العلاقات (Foreign Keys)**:",
            "`created_by` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`course_id` -> `courses.id`",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/invitations`, `/api/academy/student/courses/enroll`."
          ],
          "en": [
            "**Purpose**: Academic and promotional codes for student enrollment in courses.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Code ID.",
            "`code` (`varchar`, Unique): Secret code for usage.",
            "`created_by` (`uuid`, Foreign Key): Code creator.",
            "`course_id` (`uuid`, Foreign Key): Linked educational course.",
            "`max_uses` (`integer`), `used_count` (`integer`): Counter and usage cap.",
            "**Relationships (Foreign Keys)**:",
            "`created_by` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`course_id` -> `courses.id`",
            "**Linked API Endpoints**: `/api/academy/admin/invitations`, `/api/academy/student/courses/enroll`."
          ]
        }
      },
      {
        "id": "22-invitation_history-",
        "title": {
          "ar": "22. `invitation_history`",
          "en": "22. `invitation_history`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: تتبع تغييرات حالات الدعوات الرسمية ومراجعة إجراءات القبول والإلغاء.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف السجل.",
            "`invitation_id` (`uuid`, Foreign Key): الدعوة الأصلية.",
            "`previous_status` (`varchar`), `new_status` (`varchar`).",
            "`changed_by` (`uuid`, Foreign Key): منسق التعديل.",
            "**العلاقات (Foreign Keys)**:",
            "`invitation_id` -> `invitations.id`",
            "`changed_by` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/invitations`, `/api/academy/admin/invitations`."
          ],
          "en": [
            "**Purpose**: Track status changes of official invitations and review acceptance/cancellation actions.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Record ID.",
            "`invitation_id` (`uuid`, Foreign Key): Original invitation.",
            "`previous_status` (`varchar`), `new_status` (`varchar`).",
            "`changed_by` (`uuid`, Foreign Key): Modifier coordinator.",
            "**Relationships (Foreign Keys)**:",
            "`invitation_id` -> `invitations.id`",
            "`changed_by` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/admin/invitations`, `/api/academy/admin/invitations`."
          ]
        }
      },
      {
        "id": "23-invitations-",
        "title": {
          "ar": "23. `invitations`",
          "en": "23. `invitations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: الدعوات الرسمية المرسلة عبر البريد الإلكتروني لتسكين الوظائف والمدراء والأعضاء بالمنصة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الدعوة.",
            "`email` (`varchar`): البريد المستهدف.",
            "`token` (`varchar`): توكن الدعوة الفريد.",
            "`role_to_assign` (`varchar`), `roles_to_assign` (`ARRAY`): الأدوار المسندة عند القبول.",
            "`status` (`varchar`): حالة الدعوة (`pending`, `accepted`, `cancelled`, `expired`).",
            "`invited_by` (`uuid`, Foreign Key): منشئ الدعوة.",
            "`accepted_by_user_id` (`uuid`, Foreign Key): الحساب المقترن بالقبول.",
            "**العلاقات (Foreign Keys)**:",
            "`invited_by` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`accepted_by_user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/invitations`, `/api/academy/admin/invitations`, `/api/auth/register`."
          ],
          "en": [
            "**Purpose**: Official invitations sent via email for placing positions, managers, and members on the platform.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Invitation ID.",
            "`email` (`varchar`): Target email.",
            "`token` (`varchar`): Unique invitation token.",
            "`role_to_assign` (`varchar`), `roles_to_assign` (`ARRAY`): Roles assigned upon acceptance.",
            "`status` (`varchar`): Invitation status (`pending`, `accepted`, `cancelled`, `expired`).",
            "`invited_by` (`uuid`, Foreign Key): Invitation creator.",
            "`accepted_by_user_id` (`uuid`, Foreign Key): Account linked upon acceptance.",
            "**Relationships (Foreign Keys)**:",
            "`invited_by` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "`accepted_by_user_id` -> [users.id](file:///c:/Users/ASUS/Desktop/Motqn-academy/Codebase/Motqn-academy-codebase/DOCS.md#2-users)",
            "**Linked API Endpoints**: `/api/admin/invitations`, `/api/academy/admin/invitations`, `/api/auth/register`."
          ]
        }
      },
      {
        "id": "24-application_questions-",
        "title": {
          "ar": "24. `application_questions`",
          "en": "24. `application_questions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: الأسئلة والحقول الديناميكية لنماذج تقديم المعلمين والقراء بالمنصة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف السؤال.",
            "`role_target` (`varchar`): الدور المستهدف (`teacher`, `reader`).",
            "`label` (`text`): نص السؤال الظاهر.",
            "`type` (`varchar`): نوع الإدخال (`text`, `select`, `file`, `audio`).",
            "`options` (`jsonb`): خيارات الاختيار المتعدد.",
            "`is_required` (`boolean`): الحقل إجباري.",
            "**العلاقات (Foreign Keys)**: مرجعي بالدور الاستهدافي `users.role`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/application-questions`, `/api/auth/teacher-register`, `/api/auth/reader-register`."
          ],
          "en": [
            "**Purpose**: Dynamic questions and fields for teacher and reader application forms on the platform.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Question ID.",
            "`role_target` (`varchar`): Target role (`teacher`, `reader`).",
            "`label` (`text`): Displayed question text.",
            "`type` (`varchar`): Input type (`text`, `select`, `file`, `audio`).",
            "`options` (`jsonb`): Multiple choice options.",
            "`is_required` (`boolean`): Mandatory field flag.",
            "**Relationships (Foreign Keys)**: Referenced by target role `users.role`.",
            "**Linked API Endpoints**: `/api/admin/application-questions`, `/api/auth/teacher-register`, `/api/auth/reader-register`."
          ]
        }
      },
      {
        "id": "25-authorized_entities-",
        "title": {
          "ar": "25. `authorized_entities`",
          "en": "25. `authorized_entities`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض منه**: الجمعيات والجهات والمؤسسات المصرح لها بتصديق وإصدار الشهادات والأختام بالمنصة.",
            "**أهم الأعمدة ونوعها**:",
            "`id` (`uuid`, Primary Key): معرف الجهة.",
            "`name` (`varchar`): اسم المؤسسة أو الجمعية.",
            "`seal_url` (`text`): رابط الختم المعتمد.",
            "**العلاقات (Foreign Keys)**: مرجعي بجدول `certificate_templates` و `academy_certificates`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/certificates-center`, `/api/academy/admin/certificates`.",
            "**العلاقات (Foreign Keys)**: مرجعي بجدول `certificate_templates` و `academy_certificates`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/certificates-center`, `/api/academy/admin/certificates`."
          ],
          "en": [
            "**Purpose**: Associations, organizations, and institutions authorized to authenticate and issue certificates and seals on the platform.",
            "**Key Columns & Types**:",
            "`id` (`uuid`, Primary Key): Entity ID.",
            "`name` (`varchar`): Official organization or association name.",
            "`seal_url` (`text`): Authorized seal URL.",
            "**Relationships (Foreign Keys)**: Referenced in `certificate_templates` and `academy_certificates` tables.",
            "**Linked API Endpoints**: `/api/admin/certificates-center`, `/api/academy/admin/certificates`."
          ]
        }
      }
    ]
  },
  {
    "slug": "database-learning-core",
    "group": "staff",
    "icon": "teacher",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "قاعدة البيانات — النظام التعليمي والحلقات",
      "en": "Database — Learning Core"
    },
    "description": {
      "ar": "جداول الدورات، الدروس، التلاوات، الحلقات، والمسارات التعليمية.",
      "en": "Database schema for courses, lessons, recitations, halaqat, and paths."
    },
    "audience": {
      "ar": "المطورون والمشرفون التعليميون",
      "en": "Developers & Educational Leads"
    },
    "keywords": {
      "ar": [
        "قاعدة البيانات — النظام التعليمي والحلقات",
        "جداول الدورات، الدروس، التلاوات، الحلقات، والمسارات التعليمية.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Database — Learning Core",
        "Database schema for courses, lessons, recitations, halaqat, and paths.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/academy/admin"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني المعماري والميداني المكتمل لمظلة الجداول التعليمية والتفاعلية بالنظام (`Supabase Postgres Database`)، وتحديداً الدورات التعليمية، المسارات والأوراق العلمية، التكليفات والواجبات، مسارات الحفظ والتجويد، الحلقات القرآنية الجماعية، جلسات المقرأة الفردية، ومحرك غرف البث المباشر والتسجيلات (`LiveKit Video Engine`). ---",
          "en": "This section provides complete architectural and field technical documentation for the educational and interactive tables umbrella in the system (`Supabase Postgres Database`), specifically courses, educational paths and academic papers, tasks and assignments, memorization and Tajweed paths, group Quranic Halaqat, 1:1 individual Maqraa sessions, and live stream room engine & recordings (`LiveKit Video Engine`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني المعماري والميداني المكتمل لمظلة الجداول التعليمية والتفاعلية بالنظام (`Supabase Postgres Database`)، وتحديداً الدورات التعليمية، المسارات والأوراق العلمية، التكليفات والواجبات، مسارات الحفظ والتجويد، الحلقات القرآنية الجماعية، جلسات المقرأة الفردية، ومحرك غرف البث المباشر والتسجيلات (`LiveKit Video Engine`). ---"
          ],
          "en": [
            "This section provides complete architectural and field technical documentation for the educational and interactive tables umbrella in the system (`Supabase Postgres Database`), specifically courses, educational paths and academic papers, tasks and assignments, memorization and Tajweed paths, group Quranic Halaqat, 1:1 individual Maqraa sessions, and live stream room engine & recordings (`LiveKit Video Engine`). ---"
          ]
        }
      },
      {
        "id": "أولاً-التداخل-المعماري-والميداني-بين-halaqat-و-video_sessions-و-bookings-",
        "title": {
          "ar": "أولاً: التداخل المعماري والميداني بين `halaqat` و `video_sessions` و `bookings`",
          "en": "First: Architectural and Field Interconnection Between `halaqat`, `video_sessions`, and `bookings`"
        },
        "intro": {
          "ar": "تعتمد البنية التحتية للبث المباشر والدروس الصوتية/المرئية في المنصة على تصميم متعدد الأشكال (`Polymorphic Session Architecture`) يربط ثلاثة أركان رئيسية: ```mermaid graph TD VS[video_sessions<br/>Polymorphic Engine] -->|kind = 'halaqah' & ref_id| H[halaqat<br/>حلقات التحفيظ الجماعية] VS -->|kind = 'booking' & ref_id| B[bookings<br/>جلسات المقرأة الفردية 1:1] VS -->|kind = 'course_session' & ref_id| CS[course_sessions<br/>محاضرات الكورسات] H -->|تنشئ| HLS[halaqat_live_sessions] H -->|تفتح جلسات| HS[halaqa_sessions] HS -->|تتبع الحضور| HSA[halaqa_session_attendance] HS -->|تقييمات الحفظ| HSE[halaqa_session_evaluations] B -->|تعتمد على| AS[availability_slots] B -->|تخصص مهلة| RS[reserved_slots] B -->|تسميع وتصحيح| R[recitations] VS -->|تتبع الأعضاء الحيين| VSP[video_session_participants] VS -->|غرفة الانتظار| VSPJ[video_session_pending_joins] VS -->|التسجيلات المرئية| VR[video_recordings] ```",
          "en": "The infrastructure for live streaming and audio/video lessons in the platform relies on a polymorphic design (`Polymorphic Session Architecture`) linking three main pillars: ```mermaid graph TD VS[video_sessions<br/>Polymorphic Engine] -->|kind = 'halaqah' & ref_id| H[halaqat<br/>حلقات التحفيظ الجماعية] VS -->|kind = 'booking' & ref_id| B[bookings<br/>جلسات المقرأة الفردية 1:1] VS -->|kind = 'course_session' & ref_id| CS[course_sessions<br/>محاضرات الكورسات] H -->|تنشئ| HLS[halaqat_live_sessions] H -->|تفتح جلسات| HS[halaqa_sessions] HS -->|تتبع الحضور| HSA[halaqa_session_attendance] HS -->|تقييمات الحفظ| HSE[halaqa_session_evaluations] B -->|تعتمد على| AS[availability_slots] B -->|تخصص مهلة| RS[reserved_slots] B -->|تسميع وتصحيح| R[recitations] VS -->|تتبع الأعضاء الحيين| VSP[video_session_participants] VS -->|غرفة الانتظار| VSPJ[video_session_pending_joins] VS -->|التسجيلات المرئية| VR[video_recordings] ```"
        },
        "steps": {
          "ar": [
            "**`video_sessions` (المحرك الرئيسي للبث المباشر)**:",
            "يعمل كالمحرك الموحد لكافة غرف LiveKit بالمنصة.",
            "يستقبل حقلين محوريين: `kind` (`'halaqah'`, `'booking'`, `'course_session'`) و `ref_id` (المعرف الفريد بجدول `halaqat` أو `bookings` أو `course_sessions`).",
            "يدير حالة البث الفعلي (`started_at`, `ended_at`, `peak_participants`) ويربط التسجيل بـ `video_recordings`.",
            "**`halaqat` (الحلقات التفاعلية الجماعية)**:",
            "تمثل الحلقات القرآنية الجماعية المقررة برابط جدول زمني معلم وطالب.",
            "عند بدء الحلقة المباشرة، يُنشئ الخادم سطرًا في `video_sessions` بـ `kind = 'halaqah'` و `ref_id = halaqat.id` وتوليد غرف LiveKit باسم `livekit_room_name`.",
            "ترتبط تفصيلياً بـ `halaqa_sessions` (الجلسات الفردية للحلقة) و `halaqat_live_sessions` و `halaqa_session_evaluations` لتقييم الحفظ والتجويد لكل طالب.",
            "**`bookings` (جلسات المقرأة الفردية 1:1)**:",
            "تمثل المواعيد المحجوزة فردياً بين طالب وقارئ محدد لتسميع القرآن وتصحيح التلاوة.",
            "عند الانطلاق، يُنشئ الخادم سطرًا بـ `video_sessions` بـ `kind = 'booking'` و `ref_id = bookings.id` مع حظر الدخول إلا للطالب والقارئ المعنيين عبر حقل `livekit_room_name`.",
            "ترتبط بجدول الحجز المبدئي `reserved_slots` والأوقات المتاحة `availability_slots` والتسميع الصوتي المرفق `recitations`."
          ],
          "en": [
            "**`video_sessions` (Core Live Stream Engine)**:",
            "Functions as the unified engine for all LiveKit rooms on the platform.",
            "Accepts two pivotal fields: `kind` (`'halaqah'`, `'booking'`, `'course_session'`) and `ref_id` (Unique ID in `halaqat`, `bookings`, or `course_sessions` table).",
            "Manages actual stream status (`started_at`, `ended_at`, `peak_participants`) and links recording to `video_recordings`.",
            "**`halaqat` (Interactive Group Halaqat)**:",
            "Represents group Quranic Halaqat scheduled with teacher-student timetable links.",
            "When a live Halaqah starts, the server creates a row in `video_sessions` with `kind = 'halaqah'` and `ref_id = halaqat.id`, generating LiveKit rooms under `livekit_room_name`.",
            "Detailed links to `halaqa_sessions` (individual Halaqah sessions), `halaqat_live_sessions`, and `halaqa_session_evaluations` for evaluating memorization and Tajweed for each student.",
            "**`bookings` (1:1 Individual Maqraa Sessions)**:",
            "Represents individually booked slots between a student and a specific reader for Quran recitation and correction.",
            "Upon launch, the server creates a row in `video_sessions` with `kind = 'booking'` and `ref_id = bookings.id`, restricting entry strictly to the specified student and reader via `livekit_room_name`.",
            "Linked to initial reservation table `reserved_slots`, available time slots `availability_slots`, and attached audio recitation `recitations`."
          ]
        }
      },
      {
        "id": "1-categories-",
        "title": {
          "ar": "1. `categories`",
          "en": "1. `categories`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تصنيف الدورات، الكتب، والمواد التعليمية حسب المجالات (فقه، تجويد، تفسير، حديث).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `name` (`varchar`), `slug` (`varchar`), `library_domain` (`varchar`), `parent_id` (`uuid`), `is_active` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `parent_id` -> `categories.id`. ترتبط بـ `courses.category_id` و `books.category_id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/categories`, `/api/library/categories`."
          ],
          "en": [
            "**Purpose**: Categorization of courses, books, and educational materials by field (Fiqh, Tajweed, Tafseer, Hadith).",
            "**Key Columns & Types**: `id` (`uuid`, PK), `name` (`varchar`), `slug` (`varchar`), `library_domain` (`varchar`), `parent_id` (`uuid`), `is_active` (`boolean`).",
            "**Relationships (Foreign Keys)**: `parent_id` -> `categories.id`. Linked to `courses.category_id` and `books.category_id`.",
            "**Linked API Endpoints**: `/api/academy/admin/categories`, `/api/library/categories`."
          ]
        }
      },
      {
        "id": "2-courses-",
        "title": {
          "ar": "2. `courses`",
          "en": "2. `courses`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الدورات والبرامج التعليمية بالأكاديمية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `title` (`varchar`), `slug` (`varchar`), `teacher_id` (`uuid`), `category_id` (`uuid`), `status` (`varchar`), `is_published` (`boolean`), `certificate_enabled` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `teacher_id` -> `users.id`, `category_id` -> `categories.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/courses`, `/api/academy/student/courses`, `/api/academy/teacher/courses`."
          ],
          "en": [
            "**Purpose**: Educational courses and programs in the Academy.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `title` (`varchar`), `slug` (`varchar`), `teacher_id` (`uuid`), `category_id` (`uuid`), `status` (`varchar`), `is_published` (`boolean`), `certificate_enabled` (`boolean`).",
            "**Relationships (Foreign Keys)**: `teacher_id` -> `users.id`, `category_id` -> `categories.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/courses`, `/api/academy/student/courses`, `/api/academy/teacher/courses`."
          ]
        }
      },
      {
        "id": "3-course_sessions-",
        "title": {
          "ar": "3. `course_sessions`",
          "en": "3. `course_sessions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المحاضرات والجلسات التفاعلية التابعة لدورة تعليمية معينة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `course_id` (`uuid`), `title` (`varchar`), `scheduled_at` (`timestamp`), `duration_minutes` (`integer`), `meeting_link` (`text`), `livekit_room_name` (`varchar`), `status` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `course_id` -> `courses.id`, `teacher_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/sessions`, `/api/academy/student/sessions`, `/api/cron/session-reminders`."
          ],
          "en": [
            "**Purpose**: Lectures and interactive sessions belonging to a specific educational course.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `course_id` (`uuid`), `title` (`varchar`), `scheduled_at` (`timestamp`), `duration_minutes` (`integer`), `meeting_link` (`text`), `livekit_room_name` (`varchar`), `status` (`varchar`).",
            "**Relationships (Foreign Keys)**: `course_id` -> `courses.id`, `teacher_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/sessions`, `/api/academy/student/sessions`, `/api/cron/session-reminders`."
          ]
        }
      },
      {
        "id": "4-lessons-",
        "title": {
          "ar": "4. `lessons`",
          "en": "4. `lessons`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الدروس المسجلة أو النصية المقررة داخل الكورس.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `course_id` (`uuid`), `title` (`varchar`), `video_url` (`varchar`), `audio_url` (`varchar`), `lesson_order` (`integer`), `is_published` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `course_id` -> `courses.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/lessons`, `/api/academy/teacher/courses`."
          ],
          "en": [
            "**Purpose**: Recorded or text lessons designated within a course.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `course_id` (`uuid`), `title` (`varchar`), `video_url` (`varchar`), `audio_url` (`varchar`), `lesson_order` (`integer`), `is_published` (`boolean`).",
            "**Relationships (Foreign Keys)**: `course_id` -> `courses.id`.",
            "**Linked API Endpoints**: `/api/academy/student/lessons`, `/api/academy/teacher/courses`."
          ]
        }
      },
      {
        "id": "5-lesson_attachments-",
        "title": {
          "ar": "5. `lesson_attachments`",
          "en": "5. `lesson_attachments`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المرفقات والملفات الإضافية (PDF، صور، ملخصات) التابعة لدرس محدد.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `lesson_id` (`uuid`), `file_url` (`varchar`), `file_type` (`varchar`), `file_name` (`varchar`), `file_size_bytes` (`bigint`).",
            "**العلاقات (Foreign Keys)**: `lesson_id` -> `lessons.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/lessons`."
          ],
          "en": [
            "**Purpose**: Attachments and additional files (PDF, images, summaries) associated with a specific lesson.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `lesson_id` (`uuid`), `file_url` (`varchar`), `file_type` (`varchar`), `file_name` (`varchar`), `file_size_bytes` (`bigint`).",
            "**Relationships (Foreign Keys)**: `lesson_id` -> `lessons.id`.",
            "**Linked API Endpoints**: `/api/academy/student/lessons`."
          ]
        }
      },
      {
        "id": "6-lesson_progress-",
        "title": {
          "ar": "6. `lesson_progress`",
          "en": "6. `lesson_progress`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع نسب إنجاز الطالب ومدى مشاهدته لكل درس بالدورة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `enrollment_id` (`uuid`), `lesson_id` (`uuid`), `is_completed` (`boolean`), `watched_duration_seconds` (`integer`), `completed_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `enrollment_id` -> `enrollments.id`, `lesson_id` -> `lessons.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/progress`, `/api/academy/student/lessons`."
          ],
          "en": [
            "**Purpose**: Track student completion rates and watch duration for each course lesson.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `enrollment_id` (`uuid`), `lesson_id` (`uuid`), `is_completed` (`boolean`), `watched_duration_seconds` (`integer`), `completed_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `enrollment_id` -> `enrollments.id`, `lesson_id` -> `lessons.id`.",
            "**Linked API Endpoints**: `/api/academy/student/progress`, `/api/academy/student/lessons`."
          ]
        }
      },
      {
        "id": "7-enrollments-",
        "title": {
          "ar": "7. `enrollments`",
          "en": "7. `enrollments`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل تسجيل وقيد الطلاب بالدورات التعليمية بالأكاديمية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `course_id` (`uuid`), `status` (`varchar` - `'active'`, `'completed'`, `'rejected'`), `progress_percentage` (`numeric`), `enrolled_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `course_id` -> `courses.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/courses/enroll`, `/api/academy/teacher/enrollment-requests`."
          ],
          "en": [
            "**Purpose**: Registry of student enrollment and registration in Academy educational courses.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `course_id` (`uuid`), `status` (`varchar` - `'active'`, `'completed'`, `'rejected'`), `progress_percentage` (`numeric`), `enrolled_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `course_id` -> `courses.id`.",
            "**Linked API Endpoints**: `/api/academy/student/courses/enroll`, `/api/academy/teacher/enrollment-requests`."
          ]
        }
      },
      {
        "id": "8-series-",
        "title": {
          "ar": "8. `series`",
          "en": "8. `series`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: السلاسل والدروس المتتابعة (مثل سلسلة تفسير سورة البقرة).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `title` (`varchar`), `teacher_id` (`uuid`), `is_published` (`boolean`), `certificate_enabled` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `teacher_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/series`, `/api/academy/student/series`."
          ],
          "en": [
            "**Purpose**: Series and sequential lessons (e.g., Tafseer Surah Al-Baqarah series).",
            "**Key Columns & Types**: `id` (`uuid`, PK), `title` (`varchar`), `teacher_id` (`uuid`), `is_published` (`boolean`), `certificate_enabled` (`boolean`).",
            "**Relationships (Foreign Keys)**: `teacher_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/series`, `/api/academy/student/series`."
          ]
        }
      },
      {
        "id": "9-series_items-",
        "title": {
          "ar": "9. `series_items`",
          "en": "9. `series_items`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: ربط المواد والكورسات والدروس المكونة للسلسلة بترتيب محدد.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `series_id` (`uuid`), `item_type` (`varchar`), `course_id` (`uuid`), `path_id` (`uuid`), `order_index` (`integer`).",
            "**العلاقات (Foreign Keys)**: `series_id` -> `series.id`, `course_id` -> `courses.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/series`."
          ],
          "en": [
            "**Purpose**: Link materials, courses, and lessons composing a series in a specified order.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `series_id` (`uuid`), `item_type` (`varchar`), `course_id` (`uuid`), `path_id` (`uuid`), `order_index` (`integer`).",
            "**Relationships (Foreign Keys)**: `series_id` -> `series.id`, `course_id` -> `courses.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/series`."
          ]
        }
      },
      {
        "id": "10-lesson_series-",
        "title": {
          "ar": "10. `lesson_series`",
          "en": "10. `lesson_series`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سلاسل الدروس العامة المستقلة المفتوحة المخصصة للمعلمين.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `teacher_id` (`uuid`), `title` (`varchar`), `is_public` (`boolean`), `public_slug` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `teacher_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/public-lessons`."
          ],
          "en": [
            "**Purpose**: Independent open public lesson series designated for teachers.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `teacher_id` (`uuid`), `title` (`varchar`), `is_public` (`boolean`), `public_slug` (`varchar`).",
            "**Relationships (Foreign Keys)**: `teacher_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/public-lessons`."
          ]
        }
      },
      {
        "id": "11-learning_paths-",
        "title": {
          "ar": "11. `learning_paths`",
          "en": "11. `learning_paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المسارات التعليمية والأكاديمية التي تجمع عدة دورات متعاقبة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `title` (`varchar`), `subject` (`varchar`), `level` (`varchar`), `total_courses` (`integer`), `is_published` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `created_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/paths`, `/api/academy/student/paths`."
          ],
          "en": [
            "**Purpose**: Educational and academic paths grouping multiple consecutive courses.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `title` (`varchar`), `subject` (`varchar`), `level` (`varchar`), `total_courses` (`integer`), `is_published` (`boolean`).",
            "**Relationships (Foreign Keys)**: `created_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/paths`, `/api/academy/student/paths`."
          ]
        }
      },
      {
        "id": "12-learning_path_courses-",
        "title": {
          "ar": "12. `learning_path_courses`",
          "en": "12. `learning_path_courses`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تحديد الكورسات المقررة داخل كل مسار تعليمي بترتيبها.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `path_id` (`uuid`), `course_id` (`uuid`), `order_index` (`integer`), `is_required` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `path_id` -> `learning_paths.id`, `course_id` -> `courses.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/paths`."
          ],
          "en": [
            "**Purpose**: Define designated courses inside each educational path in order.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `path_id` (`uuid`), `course_id` (`uuid`), `order_index` (`integer`), `is_required` (`boolean`).",
            "**Relationships (Foreign Keys)**: `path_id` -> `learning_paths.id`, `course_id` -> `courses.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/paths`."
          ]
        }
      },
      {
        "id": "13-student_path_progress-",
        "title": {
          "ar": "13. `student_path_progress`",
          "en": "13. `student_path_progress`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: متابعة تقدم الطالب الميداني عبر المسار التعليمي والكورسات المكتملة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `path_id` (`uuid`), `current_course_id` (`uuid`), `progress_percentage` (`numeric`), `completed_courses` (`ARRAY`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `path_id` -> `learning_paths.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/paths`."
          ],
          "en": [
            "**Purpose**: Track student field progress through educational path and completed courses.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `path_id` (`uuid`), `current_course_id` (`uuid`), `progress_percentage` (`numeric`), `completed_courses` (`ARRAY`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `path_id` -> `learning_paths.id`.",
            "**Linked API Endpoints**: `/api/academy/student/paths`."
          ]
        }
      },
      {
        "id": "14-tasks-",
        "title": {
          "ar": "14. `tasks`",
          "en": "14. `tasks`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المهام والتكليفات والأبحاث المسندة للطلاب من قبل المعلمين.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `assigned_by` (`uuid`), `assigned_to` (`uuid`), `course_id` (`uuid`), `title` (`varchar`), `due_date` (`timestamp`), `max_score` (`integer`), `points_reward` (`integer`).",
            "**العلاقات (Foreign Keys)**: `assigned_by` -> `users.id`, `assigned_to` -> `users.id`, `course_id` -> `courses.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/tasks`, `/api/academy/student/tasks`, `/api/cron/academy-reminders`."
          ],
          "en": [
            "**Purpose**: Tasks, assignments, and research projects assigned to students by teachers.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `assigned_by` (`uuid`), `assigned_to` (`uuid`), `course_id` (`uuid`), `title` (`varchar`), `due_date` (`timestamp`), `max_score` (`integer`), `points_reward` (`integer`).",
            "**Relationships (Foreign Keys)**: `assigned_by` -> `users.id`, `assigned_to` -> `users.id`, `course_id` -> `courses.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/tasks`, `/api/academy/student/tasks`, `/api/cron/academy-reminders`."
          ]
        }
      },
      {
        "id": "15-task_submissions-",
        "title": {
          "ar": "15. `task_submissions`",
          "en": "15. `task_submissions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إجابات وتسليمات الطلاب للمهام مرفقة بالملفات أو الصوتيات والدرجات المسجلة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `task_id` (`uuid`), `student_id` (`uuid`), `content` (`text`), `file_url` (`text`), `audio_url` (`text`), `score` (`integer`), `status` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `task_id` -> `tasks.id`, `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/tasks`, `/api/academy/teacher/tasks`."
          ],
          "en": [
            "**Purpose**: Student answers and task submissions attached with files or audio recordings and recorded scores.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `task_id` (`uuid`), `student_id` (`uuid`), `content` (`text`), `file_url` (`text`), `audio_url` (`text`), `score` (`integer`), `status` (`varchar`).",
            "**Relationships (Foreign Keys)**: `task_id` -> `tasks.id`, `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/tasks`, `/api/academy/teacher/tasks`."
          ]
        }
      },
      {
        "id": "16-memorization_paths-",
        "title": {
          "ar": "16. `memorization_paths`",
          "en": "16. `memorization_paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: خطط ومسارات حفظ القرآن الكريم (بالأجزاء أو الأحزاب أو الصفحات).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `title` (`varchar`), `unit_type` (`varchar`), `total_units` (`integer`), `require_audio` (`boolean`), `is_published` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `created_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/memorization-paths`, `/api/academy/student/paths`."
          ],
          "en": [
            "**Purpose**: Holy Quran memorization plans and paths (by Juz, Hizb, or pages).",
            "**Key Columns & Types**: `id` (`uuid`, PK), `title` (`varchar`), `unit_type` (`varchar`), `total_units` (`integer`), `require_audio` (`boolean`), `is_published` (`boolean`).",
            "**Relationships (Foreign Keys)**: `created_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/memorization-paths`, `/api/academy/student/paths`."
          ]
        }
      },
      {
        "id": "17-memorization_path_units-",
        "title": {
          "ar": "17. `memorization_path_units`",
          "en": "17. `memorization_path_units`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تقسيم خطة الحفظ إلى وحدات تفصيلية (سورة، جزء، صفحة من إلى).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `path_id` (`uuid`), `position` (`integer`), `unit_type` (`varchar`), `juz_number` (`integer`), `surah_number` (`integer`), `page_from` (`integer`), `page_to` (`integer`).",
            "**العلاقات (Foreign Keys)**: `path_id` -> `memorization_paths.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/memorization-paths`."
          ],
          "en": [
            "**Purpose**: Divide memorization plan into detailed units (Surah, Juz, page from-to).",
            "**Key Columns & Types**: `id` (`uuid`, PK), `path_id` (`uuid`), `position` (`integer`), `unit_type` (`varchar`), `juz_number` (`integer`), `surah_number` (`integer`), `page_from` (`integer`), `page_to` (`integer`).",
            "**Relationships (Foreign Keys)**: `path_id` -> `memorization_paths.id`.",
            "**Linked API Endpoints**: `/api/admin/memorization-paths`."
          ]
        }
      },
      {
        "id": "18-memorization_path_enrollments-",
        "title": {
          "ar": "18. `memorization_path_enrollments`",
          "en": "18. `memorization_path_enrollments`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تسجيل الطلاب في مسارات الحفظ القرآنية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `path_id` (`uuid`), `student_id` (`uuid`), `status` (`varchar`), `current_unit_id` (`uuid`), `units_completed` (`integer`).",
            "**العلاقات (Foreign Keys)**: `path_id` -> `memorization_paths.id`, `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/paths`."
          ],
          "en": [
            "**Purpose**: Enrolling students in Quranic memorization paths.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `path_id` (`uuid`), `student_id` (`uuid`), `status` (`varchar`), `current_unit_id` (`uuid`), `units_completed` (`integer`).",
            "**Relationships (Foreign Keys)**: `path_id` -> `memorization_paths.id`, `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/paths`."
          ]
        }
      },
      {
        "id": "19-memorization_path_progress-",
        "title": {
          "ar": "19. `memorization_path_progress`",
          "en": "19. `memorization_path_progress`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تسجيل التلاوة والتسميع الصوتي المرفق من الطالب لكل وحدة حفظ ومراجعتها.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `enrollment_id` (`uuid`), `unit_id` (`uuid`), `status` (`varchar`), `recitation_id` (`uuid`), `audio_url` (`text`).",
            "**العلاقات (Foreign Keys)**: `enrollment_id` -> `memorization_path_enrollments.id`, `unit_id` -> `memorization_path_units.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/paths`."
          ],
          "en": [
            "**Purpose**: Record audio recitation submitted by student for each memorization unit and review it.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `enrollment_id` (`uuid`), `unit_id` (`uuid`), `status` (`varchar`), `recitation_id` (`uuid`), `audio_url` (`text`).",
            "**Relationships (Foreign Keys)**: `enrollment_id` -> `memorization_path_enrollments.id`, `unit_id` -> `memorization_path_units.id`.",
            "**Linked API Endpoints**: `/api/academy/student/paths`."
          ]
        }
      },
      {
        "id": "20-memorization_goals-",
        "title": {
          "ar": "20. `memorization_goals`",
          "en": "20. `memorization_goals`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الأهداف الأسبوعية والشخصية المحددة للطالب لحفظ الآيات والتحقق منها.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `week_start` (`date`), `target_verses` (`integer`), `status` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/stats`."
          ],
          "en": [
            "**Purpose**: Weekly and personal goals set for student for Ayah memorization and verification.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `week_start` (`date`), `target_verses` (`integer`), `status` (`varchar`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/stats`."
          ]
        }
      },
      {
        "id": "21-memorization_log-",
        "title": {
          "ar": "21. `memorization_log`",
          "en": "21. `memorization_log`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل تتبع الحفظ والمراجعة اليومي المقيد من الطالب وساعات التسميع.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `log_date` (`date`), `new_verses` (`integer`), `revised_verses` (`integer`), `quality_rating` (`integer`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/stats`."
          ],
          "en": [
            "**Purpose**: Daily memorization and review tracking log logged by student with recitation hours.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `log_date` (`date`), `new_verses` (`integer`), `revised_verses` (`integer`), `quality_rating` (`integer`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/stats`."
          ]
        }
      },
      {
        "id": "22-tajweed_paths-",
        "title": {
          "ar": "22. `tajweed_paths`",
          "en": "22. `tajweed_paths`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: مسارات دراسة أحكام التجويد والروايات.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `title` (`varchar`), `total_stages` (`integer`), `subject` (`varchar`), `is_published` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `created_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/tajweed-paths`, `/api/academy/student/paths`."
          ],
          "en": [
            "**Purpose**: Tajweed rules and Riwayats study paths.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `title` (`varchar`), `total_stages` (`integer`), `subject` (`varchar`), `is_published` (`boolean`).",
            "**Relationships (Foreign Keys)**: `created_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/tajweed-paths`, `/api/academy/student/paths`."
          ]
        }
      },
      {
        "id": "23-tajweed_path_stages-",
        "title": {
          "ar": "23. `tajweed_path_stages`",
          "en": "23. `tajweed_path_stages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: مراحل ودروس مسار التجويد والأحكام المشروحة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `path_id` (`uuid`), `position` (`integer`), `title` (`varchar`), `video_url` (`text`), `passage_text` (`text`), `require_audio` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `path_id` -> `tajweed_paths.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/tajweed-paths`."
          ],
          "en": [
            "**Purpose**: Stages and lessons of Tajweed paths and explained rules.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `path_id` (`uuid`), `position` (`integer`), `title` (`varchar`), `video_url` (`text`), `passage_text` (`text`), `require_audio` (`boolean`).",
            "**Relationships (Foreign Keys)**: `path_id` -> `tajweed_paths.id`.",
            "**Linked API Endpoints**: `/api/admin/tajweed-paths`."
          ]
        }
      },
      {
        "id": "24-tajweed_path_enrollments-",
        "title": {
          "ar": "24. `tajweed_path_enrollments`",
          "en": "24. `tajweed_path_enrollments`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: اشتراك وتسجيل الطالب بمسار التجويد.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `path_id` (`uuid`), `student_id` (`uuid`), `status` (`varchar`), `stages_completed` (`integer`).",
            "**العلاقات (Foreign Keys)**: `path_id` -> `tajweed_paths.id`, `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/paths`."
          ],
          "en": [
            "**Purpose**: Student subscription and enrollment in Tajweed paths.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `path_id` (`uuid`), `student_id` (`uuid`), `status` (`varchar`), `stages_completed` (`integer`).",
            "**Relationships (Foreign Keys)**: `path_id` -> `tajweed_paths.id`, `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/paths`."
          ]
        }
      },
      {
        "id": "25-tajweed_path_progress-",
        "title": {
          "ar": "25. `tajweed_path_progress`",
          "en": "25. `tajweed_path_progress`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع أداء وتسميع الطالب الصوتي أو الكتابي لكل مرحلة تجويدية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `enrollment_id` (`uuid`), `stage_id` (`uuid`), `status` (`varchar`), `audio_url` (`text`), `reviewer_feedback` (`text`).",
            "**العلاقات (Foreign Keys)**: `enrollment_id` -> `tajweed_path_enrollments.id`, `stage_id` -> `tajweed_path_stages.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/paths`."
          ],
          "en": [
            "**Purpose**: Track student performance and audio or text recitations for each Tajweed stage.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `enrollment_id` (`uuid`), `stage_id` (`uuid`), `status` (`varchar`), `audio_url` (`text`), `reviewer_feedback` (`text`).",
            "**Relationships (Foreign Keys)**: `enrollment_id` -> `tajweed_path_enrollments.id`, `stage_id` -> `tajweed_path_stages.id`.",
            "**Linked API Endpoints**: `/api/academy/student/paths`."
          ]
        }
      },
      {
        "id": "26-student_werd_settings-",
        "title": {
          "ar": "26. `student_werd_settings`",
          "en": "26. `student_werd_settings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إعدادات الورد القرآني التلقائي وتنبيهات الفجر والمغرب للطالب.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `fajr_reminder_enabled` (`boolean`), `maghrib_reminder_enabled` (`boolean`), `wird_items` (`jsonb`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/calendar`."
          ],
          "en": [
            "**Purpose**: Automatic Quranic Wird settings and Fajr/Maghrib reminders for student.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `fajr_reminder_enabled` (`boolean`), `maghrib_reminder_enabled` (`boolean`), `wird_items` (`jsonb`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/calendar`."
          ]
        }
      },
      {
        "id": "27-halaqat-",
        "title": {
          "ar": "27. `halaqat`",
          "en": "27. `halaqat`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: حلقات التحفيظ القرآنية التفاعلية الجماعية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `name` (`varchar`), `teacher_id` (`uuid`), `gender` (`varchar`), `max_students` (`integer`), `current_students` (`integer`), `livekit_room_name` (`varchar`), `is_active` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `teacher_id` -> `users.id`. يرتبط مباشرة مع `video_sessions` عبر `ref_id` عندما يكون `kind = 'halaqah'`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/halaqat`, `/api/academy/teacher/sessions`, `/api/livekit/token`."
          ],
          "en": [
            "**Purpose**: Interactive group Quranic memorization Halaqat.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `name` (`varchar`), `teacher_id` (`uuid`), `gender` (`varchar`), `max_students` (`integer`), `current_students` (`integer`), `livekit_room_name` (`varchar`), `is_active` (`boolean`).",
            "**Relationships (Foreign Keys)**: `teacher_id` -> `users.id`. Linked directly with `video_sessions` via `ref_id` when `kind = 'halaqah'`.",
            "**Linked API Endpoints**: `/api/academy/admin/halaqat`, `/api/academy/teacher/sessions`, `/api/livekit/token`."
          ]
        }
      },
      {
        "id": "28-halaqat_students-",
        "title": {
          "ar": "28. `halaqat_students`",
          "en": "28. `halaqat_students`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: قيد الطلاب المقيدين بكل حلقة قرأنية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `halaqah_id` (`uuid`), `student_id` (`uuid`), `joined_at` (`timestamp`), `is_active` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `halaqah_id` -> `halaqat.id`, `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/halaqat`, `/api/academy/teacher/students`."
          ],
          "en": [
            "**Purpose**: Enrollment of students assigned to each Quranic Halaqah.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `halaqah_id` (`uuid`), `student_id` (`uuid`), `joined_at` (`timestamp`), `is_active` (`boolean`).",
            "**Relationships (Foreign Keys)**: `halaqah_id` -> `halaqat.id`, `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/halaqat`, `/api/academy/teacher/students`."
          ]
        }
      },
      {
        "id": "29-halaqat_attendance-",
        "title": {
          "ar": "29. `halaqat_attendance`",
          "en": "29. `halaqat_attendance`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل حضور وغياب الطلاب بالحلقات الجماعية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `halaqah_id` (`uuid`), `student_id` (`uuid`), `session_date` (`date`), `status` (`varchar` - `'present'`, `'absent'`, `'late'`).",
            "**العلاقات (Foreign Keys)**: `halaqah_id` -> `halaqat.id`, `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/sessions`."
          ],
          "en": [
            "**Purpose**: Student attendance and absence log in group Halaqat.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `halaqah_id` (`uuid`), `student_id` (`uuid`), `session_date` (`date`), `status` (`varchar` - `'present'`, `'absent'`, `'late'`).",
            "**Relationships (Foreign Keys)**: `halaqah_id` -> `halaqat.id`, `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/sessions`."
          ]
        }
      },
      {
        "id": "30-halaqat_live_sessions-",
        "title": {
          "ar": "30. `halaqat_live_sessions`",
          "en": "30. `halaqat_live_sessions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع حركات فتح وإغلاق البث المباشر الحي للحلقة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `halaqah_id` (`uuid`), `started_by` (`uuid`), `livekit_room_name` (`varchar`), `started_at` (`timestamp`), `ended_at` (`timestamp`), `participants_count` (`integer`).",
            "**العلاقات (Foreign Keys)**: `halaqah_id` -> `halaqat.id`, `started_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/livekit/token`, `/api/livekit/webhook`."
          ],
          "en": [
            "**Purpose**: Track live stream opening and closing events for Halaqah.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `halaqah_id` (`uuid`), `started_by` (`uuid`), `livekit_room_name` (`varchar`), `started_at` (`timestamp`), `ended_at` (`timestamp`), `participants_count` (`integer`).",
            "**Relationships (Foreign Keys)**: `halaqah_id` -> `halaqat.id`, `started_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/livekit/token`, `/api/livekit/webhook`."
          ]
        }
      },
      {
        "id": "31-halaqa_sessions-",
        "title": {
          "ar": "31. `halaqa_sessions`",
          "en": "31. `halaqa_sessions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الجلسات والمواعيد الدورية المقررة للحلقة القرآنية ومتابعة الورد المقرر.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `halaqah_id` (`uuid`), `title` (`varchar`), `surah_number` (`integer`), `ayah_from` (`integer`), `ayah_to` (`integer`), `scheduled_at` (`timestamp`), `video_session_id` (`uuid`), `recording_url` (`text`).",
            "**العلاقات (Foreign Keys)**: `halaqah_id` -> `halaqat.id`, `video_session_id` -> `video_sessions.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/sessions`, `/api/academy/student/sessions`."
          ],
          "en": [
            "**Purpose**: Sessions and periodic appointments scheduled for Quranic Halaqah and tracking designated Wird.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `halaqah_id` (`uuid`), `title` (`varchar`), `surah_number` (`integer`), `ayah_from` (`integer`), `ayah_to` (`integer`), `scheduled_at` (`timestamp`), `video_session_id` (`uuid`), `recording_url` (`text`).",
            "**Relationships (Foreign Keys)**: `halaqah_id` -> `halaqat.id`, `video_session_id` -> `video_sessions.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/sessions`, `/api/academy/student/sessions`."
          ]
        }
      },
      {
        "id": "32-halaqa_session_attendance-",
        "title": {
          "ar": "32. `halaqa_session_attendance`",
          "en": "32. `halaqa_session_attendance`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع وقت دخول وخروج الطالب الدقيق بالجلسة الحية للحلقة وحساب الدقائق المفتوحة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `session_id` (`uuid`), `student_id` (`uuid`), `status` (`varchar`), `joined_at` (`timestamp`), `left_at` (`timestamp`), `duration_minutes` (`integer`).",
            "**العلاقات (Foreign Keys)**: `session_id` -> `halaqa_sessions.id`, `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/livekit/webhook`."
          ],
          "en": [
            "**Purpose**: Track precise join and leave times of student in live Halaqah session and calculate open minutes.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `session_id` (`uuid`), `student_id` (`uuid`), `status` (`varchar`), `joined_at` (`timestamp`), `left_at` (`timestamp`), `duration_minutes` (`integer`).",
            "**Relationships (Foreign Keys)**: `session_id` -> `halaqa_sessions.id`, `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/livekit/webhook`."
          ]
        }
      },
      {
        "id": "33-halaqa_session_evaluations-",
        "title": {
          "ar": "33. `halaqa_session_evaluations`",
          "en": "33. `halaqa_session_evaluations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التقييم العلمي التفصيلي للطالب في نهاية جلسة الحلقة (درجات الحفظ، التجويد، الطلاقة، والورد الجديد المقرر).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `session_id` (`uuid`), `student_id` (`uuid`), `memorization_score` (`integer`), `tajweed_score` (`integer`), `fluency_score` (`integer`), `verdict` (`varchar`), `next_surah_name` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `session_id` -> `halaqa_sessions.id`, `student_id` -> `users.id`, `evaluated_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/sessions`."
          ],
          "en": [
            "**Purpose**: Detailed scientific evaluation of student at end of Halaqah session (memorization, Tajweed, fluency scores, and next designated Wird).",
            "**Key Columns & Types**: `id` (`uuid`, PK), `session_id` (`uuid`), `student_id` (`uuid`), `memorization_score` (`integer`), `tajweed_score` (`integer`), `fluency_score` (`integer`), `verdict` (`varchar`), `next_surah_name` (`varchar`).",
            "**Relationships (Foreign Keys)**: `session_id` -> `halaqa_sessions.id`, `student_id` -> `users.id`, `evaluated_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/sessions`."
          ]
        }
      },
      {
        "id": "34-session_attendance-",
        "title": {
          "ar": "34. `session_attendance`",
          "en": "34. `session_attendance`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل حضور الطلاب بمحاضرات ودروس الدورات التعليمية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `session_id` (`uuid`), `student_id` (`uuid`), `joined_at` (`timestamp`), `left_at` (`timestamp`), `attendance_status` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `session_id` -> `course_sessions.id`, `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/livekit/webhook`."
          ],
          "en": [
            "**Purpose**: Student attendance log for course lectures and lessons.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `session_id` (`uuid`), `student_id` (`uuid`), `joined_at` (`timestamp`), `left_at` (`timestamp`), `attendance_status` (`varchar`).",
            "**Relationships (Foreign Keys)**: `session_id` -> `course_sessions.id`, `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/livekit/webhook`."
          ]
        }
      },
      {
        "id": "35-session_meeting_invites-",
        "title": {
          "ar": "35. `session_meeting_invites`",
          "en": "35. `session_meeting_invites`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الدعوات المخصصة بروابط اجتماعات مخصصة لطلاب محددين بالدرس.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `session_id` (`uuid`), `student_id` (`uuid`), `meeting_link` (`text`), `meeting_password` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `session_id` -> `course_sessions.id`, `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/cron/session-reminders`."
          ],
          "en": [
            "**Purpose**: Custom invitations with dedicated meeting links for specific students in lesson.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `session_id` (`uuid`), `student_id` (`uuid`), `meeting_link` (`text`), `meeting_password` (`varchar`).",
            "**Relationships (Foreign Keys)**: `session_id` -> `course_sessions.id`, `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/cron/session-reminders`."
          ]
        }
      },
      {
        "id": "36-video_sessions-",
        "title": {
          "ar": "36. `video_sessions`",
          "en": "36. `video_sessions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: السجل التجمعي الفريد والموحد لكافة غرف البث الحي المباشر بالمنصة (`Polymorphic Live Engine`).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `kind` (`varchar` - `'halaqah'`, `'booking'`, `'course_session'`), `ref_id` (`uuid`), `platform` (`varchar`), `room_name` (`varchar`), `started_at` (`timestamp`), `ended_at` (`timestamp`), `peak_participants` (`integer`), `recording_status` (`varchar`), `recording_url` (`text`).",
            "**العلاقات (Foreign Keys)**: `started_by` -> `users.id`. ترتبط بشرط المعرف `ref_id` بالجداول `halaqat`, `bookings`, `course_sessions`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/livekit/token`, `/api/livekit/webhook`, `/api/cron/auto-end-sessions`."
          ],
          "en": [
            "**Purpose**: Unique unified aggregated registry for all live streaming rooms across the platform (`Polymorphic Live Engine`).",
            "**Key Columns & Types**: `id` (`uuid`, PK), `kind` (`varchar` - `'halaqah'`, `'booking'`, `'course_session'`), `ref_id` (`uuid`), `platform` (`varchar`), `room_name` (`varchar`), `started_at` (`timestamp`), `ended_at` (`timestamp`), `peak_participants` (`integer`), `recording_status` (`varchar`), `recording_url` (`text`).",
            "**Relationships (Foreign Keys)**: `started_by` -> `users.id`. Linked via `ref_id` conditional ID to tables `halaqat`, `bookings`, `course_sessions`.",
            "**Linked API Endpoints**: `/api/livekit/token`, `/api/livekit/webhook`, `/api/cron/auto-end-sessions`."
          ]
        }
      },
      {
        "id": "37-video_session_participants-",
        "title": {
          "ar": "37. `video_session_participants`",
          "en": "37. `video_session_participants`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع تسلسلي حي لدخول وخروج كل مشارك بغرفة البث وحساب زمني تفصيلي.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `session_id` (`uuid`), `user_id` (`uuid`), `role` (`varchar`), `joined_at` (`timestamp`), `left_at` (`timestamp`), `duration_seconds` (`integer`), `device_info` (`jsonb`).",
            "**العلاقات (Foreign Keys)**: `session_id` -> `video_sessions.id`, `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/livekit/webhook`, `/api/cron/auto-end-sessions`."
          ],
          "en": [
            "**Purpose**: Live sequential tracking of entry and exit for each participant in streaming room with detailed timing calculation.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `session_id` (`uuid`), `user_id` (`uuid`), `role` (`varchar`), `joined_at` (`timestamp`), `left_at` (`timestamp`), `duration_seconds` (`integer`), `device_info` (`jsonb`).",
            "**Relationships (Foreign Keys)**: `session_id` -> `video_sessions.id`, `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/livekit/webhook`, `/api/cron/auto-end-sessions`."
          ]
        }
      },
      {
        "id": "38-video_session_pending_joins-",
        "title": {
          "ar": "38. `video_session_pending_joins`",
          "en": "38. `video_session_pending_joins`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إدارة غرف الانتظار (`Waiting Room`) والموافقة اليدوية من المحاضر لدخول المنضمين.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `kind` (`varchar`), `ref_id` (`uuid`), `user_id` (`uuid`), `status` (`varchar` - `'pending'`, `'approved'`, `'rejected'`), `approved_by` (`uuid`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`, `approved_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/livekit/waiting-room`."
          ],
          "en": [
            "**Purpose**: Management of waiting rooms (`Waiting Room`) and manual approval from instructor for joining participants.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `kind` (`varchar`), `ref_id` (`uuid`), `user_id` (`uuid`), `status` (`varchar` - `'pending'`, `'approved'`, `'rejected'`), `approved_by` (`uuid`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`, `approved_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/livekit/waiting-room`."
          ]
        }
      },
      {
        "id": "39-video_session_ratings-",
        "title": {
          "ar": "39. `video_session_ratings`",
          "en": "39. `video_session_ratings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تقييمات جودة الصوت والصورة والمحاضر عقب خروج المشارك من جلسة البث.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `session_id` (`uuid`), `user_id` (`uuid`), `rating` (`integer`), `audio_quality` (`integer`), `video_quality` (`integer`), `comment` (`text`).",
            "**العلاقات (Foreign Keys)**: `session_id` -> `video_sessions.id`, `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/livekit/webhook`."
          ],
          "en": [
            "**Purpose**: Audio/video quality and instructor ratings after participant exits stream session.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `session_id` (`uuid`), `user_id` (`uuid`), `rating` (`integer`), `audio_quality` (`integer`), `video_quality` (`integer`), `comment` (`text`).",
            "**Relationships (Foreign Keys)**: `session_id` -> `video_sessions.id`, `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/livekit/webhook`."
          ]
        }
      },
      {
        "id": "40-video_settings-",
        "title": {
          "ar": "40. `video_settings`",
          "en": "40. `video_settings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: ضبط إعدادات وسياسات البث المباشر لكل قطاع (`academy` أو `maqraa`).",
            "**أهم الأعمدة ونوعها**: `platform` (`varchar`, PK), `max_participants` (`integer`), `recording_enabled` (`boolean`), `require_approval_to_join` (`boolean`), `max_duration_minutes` (`integer`), `inactivity_timeout_minutes` (`integer`).",
            "**العلاقات (Foreign Keys)**: `updated_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/integrations`, `/api/cron/auto-end-sessions`."
          ],
          "en": [
            "**Purpose**: Configure live streaming settings and policies per sector (`academy` or `maqraa`).",
            "**Key Columns & Types**: `platform` (`varchar`, PK), `max_participants` (`integer`), `recording_enabled` (`boolean`), `require_approval_to_join` (`boolean`), `max_duration_minutes` (`integer`), `inactivity_timeout_minutes` (`integer`).",
            "**Relationships (Foreign Keys)**: `updated_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/integrations`, `/api/cron/auto-end-sessions`."
          ]
        }
      },
      {
        "id": "41-video_recordings-",
        "title": {
          "ar": "41. `video_recordings`",
          "en": "41. `video_recordings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع وحفظ ملفات فيديو البث المباشر المرفوعة بخوادم AWS S3 عبر الرفع المتقطع (`Multipart Upload`).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `session_id` (`uuid`), `s3_key` (`text`), `upload_id` (`text`), `status` (`varchar` - `'uploading'`, `'completed'`, `'failed'`, `'aborted'`), `recording_url` (`text`), `bytes_uploaded` (`bigint`), `duration_seconds` (`integer`).",
            "**العلاقات (Foreign Keys)**: `session_id` -> `video_sessions.id`, `uploader_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/livekit/webhook`, `/api/cron/recover-multipart`, `/api/video/recordings`."
          ],
          "en": [
            "**Purpose**: Track and save live stream video files uploaded to AWS S3 servers via multipart upload (`Multipart Upload`).",
            "**Key Columns & Types**: `id` (`uuid`, PK), `session_id` (`uuid`), `s3_key` (`text`), `upload_id` (`text`), `status` (`varchar` - `'uploading'`, `'completed'`, `'failed'`, `'aborted'`), `recording_url` (`text`), `bytes_uploaded` (`bigint`), `duration_seconds` (`integer`).",
            "**Relationships (Foreign Keys)**: `session_id` -> `video_sessions.id`, `uploader_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/livekit/webhook`, `/api/cron/recover-multipart`, `/api/video/recordings`."
          ]
        }
      },
      {
        "id": "42-video_recording_parts-",
        "title": {
          "ar": "42. `video_recording_parts`",
          "en": "42. `video_recording_parts`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع أجزاء رفوف الفيديو المتقطعة المسجلة بالمتصفح لإعادة استبدال وتجميع الأجزاء المقطوعة.",
            "**أهم الأعمدة ونوعها**: `id` (`bigint`, PK), `recording_id` (`uuid`), `part_number` (`integer`), `etag` (`text`), `size_bytes` (`bigint`).",
            "**العلاقات (Foreign Keys)**: `recording_id` -> `video_recordings.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/cron/recover-multipart`."
          ],
          "en": [
            "**Purpose**: Track chunked video upload parts recorded in browser for replacing and assembling broken parts.",
            "**Key Columns & Types**: `id` (`bigint`, PK), `recording_id` (`uuid`), `part_number` (`integer`), `etag` (`text`), `size_bytes` (`bigint`).",
            "**Relationships (Foreign Keys)**: `recording_id` -> `video_recordings.id`.",
            "**Linked API Endpoints**: `/api/cron/recover-multipart`."
          ]
        }
      },
      {
        "id": "43-bookings-",
        "title": {
          "ar": "43. `bookings`",
          "en": "43. `bookings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: جلسات المقرأة الفردية المخصصة للتسميع 1:1 بين الطالب والقارئ.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `reader_id` (`uuid`), `recitation_id` (`uuid`), `scheduled_at` (`timestamp`), `duration_minutes` (`integer`), `status` (`varchar` - `'confirmed'`, `'completed'`, `'cancelled'`), `meeting_link` (`text`), `livekit_room_name` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `reader_id` -> `users.id`, `recitation_id` -> `recitations.id`. ترتبط مباشرة بـ `video_sessions` عبر `ref_id` عند `kind = 'booking'`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/bookings`, `/api/cron/reminders`, `/api/livekit/token`."
          ],
          "en": [
            "**Purpose**: 1:1 individual Maqraa sessions designated for recitation between student and reader.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `reader_id` (`uuid`), `recitation_id` (`uuid`), `scheduled_at` (`timestamp`), `duration_minutes` (`integer`), `status` (`varchar` - `'confirmed'`, `'completed'`, `'cancelled'`), `meeting_link` (`text`), `livekit_room_name` (`varchar`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `reader_id` -> `users.id`, `recitation_id` -> `recitations.id`. Linked directly to `video_sessions` via `ref_id` when `kind = 'booking'`.",
            "**Linked API Endpoints**: `/api/admin/bookings`, `/api/cron/reminders`, `/api/livekit/token`."
          ]
        }
      },
      {
        "id": "44-booking_comments-",
        "title": {
          "ar": "44. `booking_comments`",
          "en": "44. `booking_comments`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التعليقات والملاحظات المتبادلة بين الطالب والقارئ حول موعد الحجز.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `booking_id` (`uuid`), `user_id` (`uuid`), `comment_text` (`text`).",
            "**العلاقات (Foreign Keys)**: `booking_id` -> `bookings.id`, `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/bookings`."
          ],
          "en": [
            "**Purpose**: Comments and feedback exchanged between student and reader regarding booking appointment.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `booking_id` (`uuid`), `user_id` (`uuid`), `comment_text` (`text`).",
            "**Relationships (Foreign Keys)**: `booking_id` -> `bookings.id`, `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/bookings`."
          ]
        }
      },
      {
        "id": "45-booking_reschedule_requests-",
        "title": {
          "ar": "45. `booking_reschedule_requests`",
          "en": "45. `booking_reschedule_requests`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: طلبات تغيير وتأجيل موعد الجلسة الفردية المقدمة من الطالب أو المقرئ.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `booking_id` (`uuid`), `requested_by` (`uuid`), `requested_by_role` (`varchar`), `proposed_slot_start` (`timestamp`), `status` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `booking_id` -> `bookings.id`, `requested_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/bookings`."
          ],
          "en": [
            "**Purpose**: Requests to change or reschedule individual session time submitted by student or reader.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `booking_id` (`uuid`), `requested_by` (`uuid`), `requested_by_role` (`varchar`), `proposed_slot_start` (`timestamp`), `status` (`varchar`).",
            "**Relationships (Foreign Keys)**: `booking_id` -> `bookings.id`, `requested_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/bookings`."
          ]
        }
      },
      {
        "id": "46-reserved_slots-",
        "title": {
          "ar": "46. `reserved_slots`",
          "en": "46. `reserved_slots`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: حجز المواعيد المبدئية المعلقة لمدة 3 أيام لانتظار اختيار وقت الجلسة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `reader_id` (`uuid`), `recitation_id` (`uuid`), `expires_at` (`timestamp`), `status` (`text` - `'pending'`, `'expired'`, `'confirmed'`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `reader_id` -> `users.id`, `recitation_id` -> `recitations.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/cron/check-expirations`."
          ],
          "en": [
            "**Purpose**: Reserve initial pending slots for 3 days awaiting session time selection.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `reader_id` (`uuid`), `recitation_id` (`uuid`), `expires_at` (`timestamp`), `status` (`text` - `'pending'`, `'expired'`, `'confirmed'`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `reader_id` -> `users.id`, `recitation_id` -> `recitations.id`.",
            "**Linked API Endpoints**: `/api/cron/check-expirations`."
          ]
        }
      },
      {
        "id": "47-availability_slots-",
        "title": {
          "ar": "47. `availability_slots`",
          "en": "47. `availability_slots`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: جدول الأوقات والأنصبة المتاحة المحددة من المقرئين لاستقبال الحجوزات الفردية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `reader_id` (`uuid`), `day_of_week` (`integer`), `start_time` (`time`), `end_time` (`time`), `is_recurring` (`boolean`), `is_available` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `reader_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/calendar`, `/api/admin/bookings`."
          ],
          "en": [
            "**Purpose**: Table of available time slots and quotas set by readers for receiving individual bookings.",
            "**Key Columns & Types**: `id` (`uuid`, PK), `reader_id` (`uuid`), `day_of_week` (`integer`), `start_time` (`time`), `end_time` (`time`), `is_recurring` (`boolean`), `is_available` (`boolean`).",
            "**Relationships (Foreign Keys)**: `reader_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/calendar`, `/api/admin/bookings`."
          ]
        }
      },
      {
        "id": "48-recitations-",
        "title": {
          "ar": "48. `recitations`",
          "en": "48. `recitations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التلاوات الصوتية المرسلة للتسميع من الطلاب بالمقرأة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `assigned_reader_id` (`uuid`), `surah_name` (`varchar`), `surah_number` (`integer`), `ayah_from` (`integer`), `ayah_to` (`integer`), `audio_url` (`text`), `status` (`varchar` - `'pending'`, `'assigned'`, `'reviewed'`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `assigned_reader_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/recitations`, `/api/academy/student/progress`."
          ],
          "en": [
            "**Purpose**: Audio recitations submitted for recitation by students in Maqraa.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `assigned_reader_id` (`uuid`), `surah_name` (`varchar`), `surah_number` (`integer`), `ayah_from` (`integer`), `ayah_to` (`integer`), `audio_url` (`text`), `status` (`varchar` - `'pending'`, `'assigned'`, `'reviewed'`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `assigned_reader_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/recitations`, `/api/academy/student/progress`."
          ]
        }
      },
      {
        "id": "49-recitation_feedback-",
        "title": {
          "ar": "49. `recitation_feedback`",
          "en": "49. `recitation_feedback`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تقييم وملاحظات المقرئ على التلاوة الصوتية وتحديد الأخطاء والتوجيهات.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `recitation_id` (`uuid`), `reader_id` (`uuid`), `verdict` (`varchar`), `feedback` (`text`), `mistake_words` (`jsonb`).",
            "**العلاقات (Foreign Keys)**: `recitation_id` -> `recitations.id`, `reader_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/recitations`."
          ],
          "en": [
            "**Purpose**: Reciter evaluation and feedback on audio recitation, specifying errors and guidance.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `recitation_id` (`uuid`), `reader_id` (`uuid`), `verdict` (`varchar`), `feedback` (`text`), `mistake_words` (`jsonb`).",
            "**Relationships (Foreign Keys)**: `recitation_id` -> `recitations.id`, `reader_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/recitations`."
          ]
        }
      },
      {
        "id": "50-word_mistakes-",
        "title": {
          "ar": "50. `word_mistakes`",
          "en": "50. `word_mistakes`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: توثيق الكلمات المحددة التي أخطأ بها الطالب أثناء التسميع الصوتي لمراجعتها.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `recitation_id` (`uuid`), `student_id` (`uuid`), `reader_id` (`uuid`), `word` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `recitation_id` -> `recitations.id`, `student_id` -> `users.id`, `reader_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/recitations`."
          ],
          "en": [
            "**Purpose**: Documenting specific words where the student made mistakes during audio recitation for review.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `recitation_id` (`uuid`), `student_id` (`uuid`), `reader_id` (`uuid`), `word` (`varchar`).",
            "**Relationships (Foreign Keys)**: `recitation_id` -> `recitations.id`, `student_id` -> `users.id`, `reader_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/recitations`."
          ]
        }
      }
    ]
  },
  {
    "slug": "database-gamification-certificates",
    "group": "users",
    "icon": "student",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "قاعدة البيانات — النقاط والشهادات",
      "en": "Database — Gamification & Certificates"
    },
    "description": {
      "ar": "جداول نظام التحفيز، النقاط، الشارات، والشهادات الصادرة.",
      "en": "Database schema for gamification, points, badges, and certificates."
    },
    "audience": {
      "ar": "المطورون ومديرو النظام",
      "en": "Developers & System Operators"
    },
    "keywords": {
      "ar": [
        "قاعدة البيانات — النقاط والشهادات",
        "جداول نظام التحفيز، النقاط، الشارات، والشهادات الصادرة.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Database — Gamification & Certificates",
        "Database schema for gamification, points, badges, and certificates.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/admin/certificates"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الشامل لجداول المسابقات القرآنية، نظام التحفيز والنقاط، الأوسمة والشارات، إحصائيات الطلاب التراكمية، ومحرك إنشاء وتصديق الشهادات الرقمية بالمنصة (`Supabase Postgres Database`). ---",
          "en": "This section presents comprehensive technical documentation for Quranic competition tables, gamification and points system, badges and honors, cumulative student statistics, and the digital certificate generation and verification engine on the platform (`Supabase Postgres Database`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الشامل لجداول المسابقات القرآنية، نظام التحفيز والنقاط، الأوسمة والشارات، إحصائيات الطلاب التراكمية، ومحرك إنشاء وتصديق الشهادات الرقمية بالمنصة (`Supabase Postgres Database`). ---"
          ],
          "en": [
            "This section presents comprehensive technical documentation for Quranic competition tables, gamification and points system, badges and honors, cumulative student statistics, and the digital certificate generation and verification engine on the platform (`Supabase Postgres Database`). ---"
          ]
        }
      },
      {
        "id": "1-تحول-النقاط-والأنشطة-إلى-شارات-تذكارية-points-badges-engine-",
        "title": {
          "ar": "1. تحول النقاط والأنشطة إلى شارات تذكارية (`Points & Badges Engine`)",
          "en": "1. Points & Activities to Badges Transformation (`Points & Badges Engine`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**اكتساب النقاط**: يحصل الطالب على نقاط تفاعلية تُسجل بجدول `user_points` ويُسجل لها سطر تفصيلي بجدول `points_log` عند كل حركة (إنجاز ورد يومي، تسليم مهمة، الحضور الحي بالجلسة، الحفاظ على السلسلة اليومية `streak_days`، أو الفوز بالمسابقات عبر `points_first` و `points_second`).",
            "**فحص شروط الشارة**: يقدم النظام مراقباً أوتوماتيكياً يفحص الجدول المرجعي `badge_definitions` مقارناً قيم الطالب بـ `criteria_type` (`'points'`, `'streak'`, `'recitations'`, `'tasks'`) والحد المطلوب بـ `criteria_value` أو `points_required`.",
            "**منح الشارة**: عند استيفاء الشرط، يُنشئ النظام سطر تملّك بجدول `badges` يربط `user_id` بـ `badge_definition_id` مع تعيين تاريخ الاستحقاق `awarded_at` وإرسال إشعار احتفالي للطالب."
          ],
          "en": [
            "**Points Acquisition**: Students earn interactive points recorded in the `user_points` table, with detailed logs recorded in `points_log` for each action (completing daily assigned portion, submitting a task, live session attendance, maintaining daily `streak_days`, or winning competitions via `points_first` and `points_second`).",
            "**Badge Condition Check**: The system provides an automated watcher that evaluates the reference table `badge_definitions`, comparing student values against `criteria_type` (`'points'`, `'streak'`, `'recitations'`, `'tasks'`) and required thresholds in `criteria_value` or `points_required`.",
            "**Badge Awarding**: Upon fulfilling criteria, the system creates an ownership record in the `badges` table linking `user_id` to `badge_definition_id` with `awarded_at` timestamp and sends a congratulatory notification to the student."
          ]
        }
      },
      {
        "id": "2-دورة-حياة-وإصدار-الشهادات-الرقمية-certificates-issuance-flow-",
        "title": {
          "ar": "2. دورة حياة وإصدار الشهادات الرقمية (`Certificates Issuance Flow`)",
          "en": "2. Digital Certificate Lifecycle & Issuance (`Certificates Issuance Flow`)"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**إعداد القالب**: يحدد المدير الإعدادات بـ `certificate_settings` ويصمم قالب الشهادة بـ `certificate_templates` شاملاً أبعاد النصوص `field_positions` والختم الرسمي بـ `authorized_entities`.",
            "**طلب الإصدار**: عند إنهاء الكورس (`enrollments.status = 'completed'`) أو المسار أو الفوز بمسابقة، يُنشأ طلب بـ `certificate_issuance_requests` بحالة `pending`.",
            "**الموافقة والتصدير**: عقب اعتماد الطلب من المشرف (`approved_by`)، يولد الخادم رقم الشهادة الفريد `certificate_number` والرمز السري `serial_code` ويقوم بطباعة وحفظ ملف الـ PDF بـ AWS S3 وثبيته بجدول `academy_certificates` و `certificate_data`.",
            "**التحقق والتنزيل**: يستلم الطالب رابط تحميل الـ PDF المباشر ويُتاح لأي جهة خارجية استعلام التوثيق الرسمي عبر الرقم التسلسلي."
          ],
          "en": [
            "**Template Setup**: The admin defines settings in `certificate_settings` and designs the certificate template in `certificate_templates`, including text coordinates `field_positions` and official seal via `authorized_entities`.",
            "**Issuance Request**: Upon course completion (`enrollments.status = 'completed'`), track completion, or winning a competition, an issuance request is created in `certificate_issuance_requests` with `pending` status.",
            "**Approval & Export**: Following request approval by supervisor (`approved_by`), the server generates unique `certificate_number` and secret `serial_code`, prints and stores the PDF file on AWS S3, and records it in `academy_certificates` and `certificate_data`.",
            "**Verification & Download**: The student receives a direct PDF download link, and third-party entities can query official verification via the serial number."
          ]
        }
      },
      {
        "id": "1-competitions-",
        "title": {
          "ar": "1. `competitions`",
          "en": "1. `competitions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إدارة المسابقات القرآنية والفقهية العامة وتحديد المواعيد، الجوائز، واللجان.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `title` (`varchar`), `type` (`varchar`), `start_date` (`timestamp`), `end_date` (`timestamp`), `points_first` (`integer`), `points_second` (`integer`), `points_third` (`integer`), `badge_key` (`varchar`), `certificate_enabled` (`boolean`), `certificate_template_id` (`uuid`).",
            "**العلاقات (Foreign Keys)**: `created_by` -> `users.id`, `winner_id` -> `users.id`, `certificate_template_id` -> `certificate_templates.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/competitions`, `/api/academy/admin/competitions`, `/api/academy/student/competitions`."
          ],
          "en": [
            "**Purpose**: Managing general Quranic and Fiqh competitions, setting schedules, awards, and committees.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `title` (`varchar`), `type` (`varchar`), `start_date` (`timestamp`), `end_date` (`timestamp`), `points_first` (`integer`), `points_second` (`integer`), `points_third` (`integer`), `badge_key` (`varchar`), `certificate_enabled` (`boolean`), `certificate_template_id` (`uuid`).",
            "**Relationships (Foreign Keys)**: `created_by` -> `users.id`, `winner_id` -> `users.id`, `certificate_template_id` -> `certificate_templates.id`.",
            "**Linked API Endpoints**: `/api/admin/competitions`, `/api/academy/admin/competitions`, `/api/academy/student/competitions`."
          ]
        }
      },
      {
        "id": "2-competition_entries-",
        "title": {
          "ar": "2. `competition_entries`",
          "en": "2. `competition_entries`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: مشاركات وتسليمات الطلاب بالمسابقات وتوثيق التلاوات المرسلة والدرجات.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `competition_id` (`uuid`), `student_id` (`uuid`), `recitation_id` (`uuid`), `submission_url` (`text`), `score` (`numeric`), `rank` (`integer`), `status` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `competition_id` -> `competitions.id`, `student_id` -> `users.id`, `recitation_id` -> `recitations.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/competitions`, `/api/academy/admin/competitions`."
          ],
          "en": [
            "**Purpose**: Student entries and submissions for competitions, documenting submitted recitations and scores.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `competition_id` (`uuid`), `student_id` (`uuid`), `recitation_id` (`uuid`), `submission_url` (`text`), `score` (`numeric`), `rank` (`integer`), `status` (`varchar`).",
            "**Relationships (Foreign Keys)**: `competition_id` -> `competitions.id`, `student_id` -> `users.id`, `recitation_id` -> `recitations.id`.",
            "**Linked API Endpoints**: `/api/academy/student/competitions`, `/api/academy/admin/competitions`."
          ]
        }
      },
      {
        "id": "3-competition_judges-",
        "title": {
          "ar": "3. `competition_judges`",
          "en": "3. `competition_judges`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: حصر وتكليف أعضاء لجنة التحكيم بالمسابقة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `competition_id` (`uuid`), `judge_id` (`uuid`), `assigned_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `competition_id` -> `competitions.id`, `judge_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/competitions/[id]/judges`."
          ],
          "en": [
            "**Purpose**: Listing and assigning judging panel members for the competition.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `competition_id` (`uuid`), `judge_id` (`uuid`), `assigned_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `competition_id` -> `competitions.id`, `judge_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/competitions/[id]/judges`."
          ]
        }
      },
      {
        "id": "4-competition_judge_scores-",
        "title": {
          "ar": "4. `competition_judge_scores`",
          "en": "4. `competition_judge_scores`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التقييمات والدرجات الفردية الصادرة من كل محكّم لمشاركات الطلاب بالمسابقة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `entry_id` (`uuid`), `judge_id` (`uuid`), `score` (`numeric`), `tajweed_scores` (`jsonb`), `feedback` (`text`).",
            "**العلاقات (Foreign Keys)**: `entry_id` -> `competition_entries.id`, `judge_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/competitions`."
          ],
          "en": [
            "**Purpose**: Individual evaluations and scores issued by each judge for student entries in the competition.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `entry_id` (`uuid`), `judge_id` (`uuid`), `score` (`numeric`), `tajweed_scores` (`jsonb`), `feedback` (`text`).",
            "**Relationships (Foreign Keys)**: `entry_id` -> `competition_entries.id`, `judge_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/competitions`."
          ]
        }
      },
      {
        "id": "5-competition_stages-",
        "title": {
          "ar": "5. `competition_stages`",
          "en": "5. `competition_stages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: مراحل التصفيات بالمسابقات متعددة المراحل (`is_multi_stage = true`).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `competition_id` (`uuid`), `order_index` (`integer`), `name` (`text`), `advance_count` (`integer`), `status` (`text`).",
            "**العلاقات (Foreign Keys)**: `competition_id` -> `competitions.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/competitions/[id]/advance`."
          ],
          "en": [
            "**Purpose**: Qualification stages for multi-stage competitions (`is_multi_stage = true`).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `competition_id` (`uuid`), `order_index` (`integer`), `name` (`text`), `advance_count` (`integer`), `status` (`text`).",
            "**Relationships (Foreign Keys)**: `competition_id` -> `competitions.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/competitions/[id]/advance`."
          ]
        }
      },
      {
        "id": "6-badge_definitions-",
        "title": {
          "ar": "6. `badge_definitions`",
          "en": "6. `badge_definitions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الدليل المرجعي والشروط المحددة لاستحقاق كل شارة وأوسمة النظام.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `badge_key` (`varchar`), `name` (`varchar`), `description` (`text`), `badge_icon` (`varchar`), `criteria_type` (`varchar`), `criteria_value` (`integer`), `points_required` (`integer`), `points_awarded` (`integer`).",
            "**العلاقات (Foreign Keys)**: ترتبط بـ `badges.badge_definition_id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/badges`, `/api/academy/admin/badges`."
          ],
          "en": [
            "**Purpose**: Reference guide and specific criteria for earning system badges and honors.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `badge_key` (`varchar`), `name` (`varchar`), `description` (`text`), `badge_icon` (`varchar`), `criteria_type` (`varchar`), `criteria_value` (`integer`), `points_required` (`integer`), `points_awarded` (`integer`).",
            "**Relationships (Foreign Keys)**: Linked to `badges.badge_definition_id`.",
            "**Linked API Endpoints**: `/api/admin/badges`, `/api/academy/admin/badges`."
          ]
        }
      },
      {
        "id": "7-badges-",
        "title": {
          "ar": "7. `badges`",
          "en": "7. `badges`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الشارات والأوسمة المملوكة فعلياً والمكتسبة من المستخدمين بالمنصة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `user_id` (`uuid`), `badge_definition_id` (`uuid`), `badge_name` (`varchar`), `points_awarded` (`integer`), `awarded_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`, `badge_definition_id` -> `badge_definitions.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/badges`, `/api/admin/badges`."
          ],
          "en": [
            "**Purpose**: Badges and honors actively owned and earned by platform users.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `user_id` (`uuid`), `badge_definition_id` (`uuid`), `badge_name` (`varchar`), `points_awarded` (`integer`), `awarded_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`, `badge_definition_id` -> `badge_definitions.id`.",
            "**Linked API Endpoints**: `/api/academy/student/badges`, `/api/admin/badges`."
          ]
        }
      },
      {
        "id": "8-points_log-",
        "title": {
          "ar": "8. `points_log`",
          "en": "8. `points_log`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل التدقيق التفصيلي لكافة الأنشطة والحركات التي منحت نقاطاً للمستخدم.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `user_id` (`uuid`), `points` (`integer`), `reason` (`varchar`), `description` (`text`), `related_entity_type` (`varchar`), `related_entity_id` (`uuid`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/points`, `/api/academy/admin/points`."
          ],
          "en": [
            "**Purpose**: Detailed audit log of all activities and actions that granted points to the user.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `user_id` (`uuid`), `points` (`integer`), `reason` (`varchar`), `description` (`text`), `related_entity_type` (`varchar`), `related_entity_id` (`uuid`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/points`, `/api/academy/admin/points`."
          ]
        }
      },
      {
        "id": "9-user_points-",
        "title": {
          "ar": "9. `user_points`",
          "en": "9. `user_points`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الرصيد التراكمي الإجمالي لنقاط المستخدم وسلسلة التواجد اليومي (`streak_days`).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `user_id` (`uuid`), `total_points` (`integer`), `level` (`varchar`), `streak_days` (`integer`), `longest_streak` (`integer`), `last_activity_date` (`date`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/points`, `/api/cron/streak-reminders`."
          ],
          "en": [
            "**Purpose**: Total cumulative user points balance and daily presence streak (`streak_days`).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `user_id` (`uuid`), `total_points` (`integer`), `level` (`varchar`), `streak_days` (`integer`), `longest_streak` (`integer`), `last_activity_date` (`date`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/points`, `/api/cron/streak-reminders`."
          ]
        }
      },
      {
        "id": "10-student_stats-",
        "title": {
          "ar": "10. `student_stats`",
          "en": "10. `student_stats`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الإحصائيات التراكمية الدقيقة لأداء الطالب الميداني (عدد التلاوات، الجلسات المكتملة، متوسط درجات التجويد، ساعات الدراسة).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `total_recitations` (`integer`), `approved_recitations` (`integer`), `completed_sessions` (`integer`), `total_hours_studied` (`numeric`), `average_tajweed_score` (`numeric`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/stats`, `/api/academy/admin/stats`."
          ],
          "en": [
            "**Purpose**: Precise cumulative statistics for student performance (recitation count, completed sessions, average Tajweed score, study hours).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `total_recitations` (`integer`), `approved_recitations` (`integer`), `completed_sessions` (`integer`), `total_hours_studied` (`numeric`), `average_tajweed_score` (`numeric`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/stats`, `/api/academy/admin/stats`."
          ]
        }
      },
      {
        "id": "11-academy_certificates-certificates-",
        "title": {
          "ar": "11. `academy_certificates` / `certificates`",
          "en": "11. `academy_certificates` / `certificates`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: السجل النهائي المعتمد للشهادات الصادرة للطلاب بعد اجتياز الدورات أو المسارات.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `course_id` (`uuid`), `certificate_number` (`varchar`), `pdf_url` (`text`), `issued_at` (`timestamp`), `template_id` (`uuid`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `course_id` -> `courses.id`, `template_id` -> `certificate_templates.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/certificates`, `/api/admin/certificates-center`."
          ],
          "en": [
            "**Purpose**: Final approved record of certificates issued to students after completing courses or tracks.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `course_id` (`uuid`), `certificate_number` (`varchar`), `pdf_url` (`text`), `issued_at` (`timestamp`), `template_id` (`uuid`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `course_id` -> `courses.id`, `template_id` -> `certificate_templates.id`.",
            "**Linked API Endpoints**: `/api/academy/student/certificates`, `/api/admin/certificates-center`."
          ]
        }
      },
      {
        "id": "12-certificate_data-",
        "title": {
          "ar": "12. `certificate_data`",
          "en": "12. `certificate_data`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: البيانات الرسمية الديموغرافية والجامعية المطبوعة داخل الشهادة (الاسم بالإنجليزية، الكلية، الرقم التسلسلي، الختم).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `name_en` (`varchar`), `university` (`varchar`), `college` (`varchar`), `serial_code` (`varchar`), `pdf_file_url` (`text`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `entity_id` -> `authorized_entities.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/certificates-center`."
          ],
          "en": [
            "**Purpose**: Official demographic and academic data printed inside the certificate (English name, college, serial number, seal).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `name_en` (`varchar`), `university` (`varchar`), `college` (`varchar`), `serial_code` (`varchar`), `pdf_file_url` (`text`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `entity_id` -> `authorized_entities.id`.",
            "**Linked API Endpoints**: `/api/admin/certificates-center`."
          ]
        }
      },
      {
        "id": "13-certificate_issuance_requests-",
        "title": {
          "ar": "13. `certificate_issuance_requests`",
          "en": "13. `certificate_issuance_requests`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: إدارة ومتابعة طلبات استصدار الشهادات (المعلقة، المقبولة، أو المرفوضة).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `scope` (`varchar`), `kind` (`varchar`), `status` (`varchar` - `'pending'`, `'approved'`, `'rejected'`), `certificate_number` (`varchar`), `serial_code` (`varchar`), `pdf_url` (`text`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `approved_by` -> `users.id`, `template_id` -> `certificate_templates.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/certificates/requests`, `/api/admin/certificates-center`."
          ],
          "en": [
            "**Purpose**: Managing and tracking certificate issuance requests (pending, approved, or rejected).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `scope` (`varchar`), `kind` (`varchar`), `status` (`varchar` - `'pending'`, `'approved'`, `'rejected'`), `certificate_number` (`varchar`), `serial_code` (`varchar`), `pdf_url` (`text`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `approved_by` -> `users.id`, `template_id` -> `certificate_templates.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/certificates/requests`, `/api/admin/certificates-center`."
          ]
        }
      },
      {
        "id": "14-certificate_settings-",
        "title": {
          "ar": "14. `certificate_settings`",
          "en": "14. `certificate_settings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الإعدادات والسياسات التنظيمية الخاصة بشروط وأبعاد إصدار الشهادات بالمنصة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `scope` (`varchar`), `key` (`varchar`), `value` (`jsonb`).",
            "**العلاقات (Foreign Keys)**: `updated_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/certificates-center`."
          ],
          "en": [
            "**Purpose**: Platform organizational settings and policies governing certificate issuance rules and parameters.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `scope` (`varchar`), `key` (`varchar`), `value` (`jsonb`).",
            "**Relationships (Foreign Keys)**: `updated_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/certificates-center`."
          ]
        }
      },
      {
        "id": "15-certificate_templates-",
        "title": {
          "ar": "15. `certificate_templates`",
          "en": "15. `certificate_templates`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تصميم وقوالب الشهادات الرسمية وتعين مواقع النصوص والأختام (`field_positions`).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `scope` (`varchar`), `kind` (`varchar`), `language` (`varchar`), `name` (`varchar`), `template_url` (`text`), `field_positions` (`jsonb`), `is_active` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `created_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/certificates-center`."
          ],
          "en": [
            "**Purpose**: Design and layout templates for official certificates, specifying coordinates for text and seals (`field_positions`).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `scope` (`varchar`), `kind` (`varchar`), `language` (`varchar`), `name` (`varchar`), `template_url` (`text`), `field_positions` (`jsonb`), `is_active` (`boolean`).",
            "**Relationships (Foreign Keys)**: `created_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/certificates-center`."
          ]
        }
      }
    ]
  },
  {
    "slug": "database-communication-fiqh-system",
    "group": "support",
    "icon": "support",
    "reviewedAt": "2026-08-01",
    "title": {
      "ar": "قاعدة البيانات — الرسائل والفقه والنظام",
      "en": "Database — Communication, Fiqh & System"
    },
    "description": {
      "ar": "جداول المحادثات، الإشعارات، الفقه، المنتدى، والمجتمع والنسخ الاحتياطية.",
      "en": "Database schema for messaging, notifications, fiqh, forum, and system logs."
    },
    "audience": {
      "ar": "المطورون والمهندسون",
      "en": "Developers & Engineers"
    },
    "keywords": {
      "ar": [
        "قاعدة البيانات — الرسائل والفقه والنظام",
        "جداول المحادثات، الإشعارات، الفقه، المنتدى، والمجتمع والنسخ الاحتياطية.",
        "تطبيق",
        "متقن",
        "تعليم"
      ],
      "en": [
        "Database — Communication, Fiqh & System",
        "Database schema for messaging, notifications, fiqh, forum, and system logs.",
        "motqn",
        "docs",
        "system"
      ]
    },
    "productRoutes": [
      "/admin/settings"
    ],
    "sections": [
      {
        "id": "التفاصيل-العامة",
        "title": {
          "ar": "التفاصيل العامة",
          "en": "التفاصيل العامة"
        },
        "intro": {
          "ar": "يقدم هذا القسم التوثيق الفني الشامل والمفصل لجداول الرسائل والمحادثات المباشرة، منظومة أولياء الأمور، قسم الفتوى والفقه، منتديات ومقالات المجتمع، المكتبة الرقمية، وسجلات الإدارة والتحكم بالنظام بالكامل (`Supabase Postgres Database`). ---",
          "en": "This section provides comprehensive technical documentation for messaging and direct chat tables, parent portal system, Fiqh & Fatwa section, community forums and articles, digital library, and administrative control and audit logs across the entire system (`Supabase Postgres Database`). ---"
        },
        "steps": {
          "ar": [
            "يقدم هذا القسم التوثيق الفني الشامل والمفصل لجداول الرسائل والمحادثات المباشرة، منظومة أولياء الأمور، قسم الفتوى والفقه، منتديات ومقالات المجتمع، المكتبة الرقمية، وسجلات الإدارة والتحكم بالنظام بالكامل (`Supabase Postgres Database`). ---"
          ],
          "en": [
            "This section provides comprehensive technical documentation for messaging and direct chat tables, parent portal system, Fiqh & Fatwa section, community forums and articles, digital library, and administrative control and audit logs across the entire system (`Supabase Postgres Database`). ---"
          ]
        }
      },
      {
        "id": "1-conversations-",
        "title": {
          "ar": "1. `conversations`",
          "en": "1. `conversations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: محادثات وتذاكر الدعم والرسائل المباشرة بقطاع المقرأة العامة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `reader_id` (`uuid`), `recitation_id` (`uuid`), `booking_id` (`uuid`), `last_message_preview` (`text`), `unread_count_student` (`integer`), `unread_count_reader` (`integer`), `is_ticket` (`boolean`), `ticket_status` (`text`), `assigned_supervisor_id` (`uuid`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `reader_id` -> `users.id`, `recitation_id` -> `recitations.id`, `booking_id` -> `bookings.id`, `assigned_supervisor_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/conversations/[id]/messages`, `/api/academy/parent/conversations`."
          ],
          "en": [
            "**Purpose**: Conversations, support tickets, and direct messages in the general Maqra'ah sector.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `reader_id` (`uuid`), `recitation_id` (`uuid`), `booking_id` (`uuid`), `last_message_preview` (`text`), `unread_count_student` (`integer`), `unread_count_reader` (`integer`), `is_ticket` (`boolean`), `ticket_status` (`text`), `assigned_supervisor_id` (`uuid`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `reader_id` -> `users.id`, `recitation_id` -> `recitations.id`, `booking_id` -> `bookings.id`, `assigned_supervisor_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/conversations/[id]/messages`, `/api/academy/parent/conversations`."
          ]
        }
      },
      {
        "id": "2-messages-",
        "title": {
          "ar": "2. `messages`",
          "en": "2. `messages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الرسائل الفردية المسجلة داخل محادثات وتذاكر المقرأة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `conversation_id` (`uuid`), `sender_id` (`uuid`), `recipient_id` (`uuid`), `message_text` (`text`), `attachment_url` (`text`), `is_read` (`boolean`), `inserted_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `conversation_id` -> `conversations.id`, `sender_id` -> `users.id`, `recipient_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/conversations/[id]/messages`."
          ],
          "en": [
            "**Purpose**: Individual messages recorded within Maqra'ah chats and support tickets.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `conversation_id` (`uuid`), `sender_id` (`uuid`), `recipient_id` (`uuid`), `message_text` (`text`), `attachment_url` (`text`), `is_read` (`boolean`), `inserted_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `conversation_id` -> `conversations.id`, `sender_id` -> `users.id`, `recipient_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/conversations/[id]/messages`."
          ]
        }
      },
      {
        "id": "3-academy_conversations-",
        "title": {
          "ar": "3. `academy_conversations`",
          "en": "3. `academy_conversations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المحادثات والتذاكر المباشرة التابعة لقطاع الأكاديمية بين الطلاب والمعلمين والمشرفين.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `student_id` (`uuid`), `teacher_id` (`uuid`), `admin_id` (`uuid`), `parent_id` (`uuid`), `last_message` (`text`), `is_ticket` (`boolean`), `ticket_status` (`text`), `unread_count_student` (`integer`), `unread_count_teacher` (`integer`).",
            "**العلاقات (Foreign Keys)**: `student_id` -> `users.id`, `teacher_id` -> `users.id`, `parent_id` -> `users.id`, `assigned_supervisor_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/conversations/[id]/messages`, `/api/academy/teacher/profile`."
          ],
          "en": [
            "**Purpose**: Academy sector direct chats and tickets between students, teachers, and supervisors.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `student_id` (`uuid`), `teacher_id` (`uuid`), `admin_id` (`uuid`), `parent_id` (`uuid`), `last_message` (`text`), `is_ticket` (`boolean`), `ticket_status` (`text`), `unread_count_student` (`integer`), `unread_count_teacher` (`integer`).",
            "**Relationships (Foreign Keys)**: `student_id` -> `users.id`, `teacher_id` -> `users.id`, `parent_id` -> `users.id`, `assigned_supervisor_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/conversations/[id]/messages`, `/api/academy/teacher/profile`."
          ]
        }
      },
      {
        "id": "4-academy_messages-",
        "title": {
          "ar": "4. `academy_messages`",
          "en": "4. `academy_messages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الرسائل والردود المسجلة داخل محادثات الأكاديمية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `conversation_id` (`uuid`), `sender_id` (`uuid`), `content` (`text`), `is_read` (`boolean`), `created_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `conversation_id` -> `academy_conversations.id`, `sender_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/conversations/[id]/messages`."
          ],
          "en": [
            "**Purpose**: Messages and responses recorded within Academy conversations.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `conversation_id` (`uuid`), `sender_id` (`uuid`), `content` (`text`), `is_read` (`boolean`), `created_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `conversation_id` -> `academy_conversations.id`, `sender_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/conversations/[id]/messages`."
          ]
        }
      },
      {
        "id": "5-parent_reader_conversations-",
        "title": {
          "ar": "5. `parent_reader_conversations`",
          "en": "5. `parent_reader_conversations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المحادثات التنسيقية بين أولياء الأمور وقراء المقرأة لمتابعة أبنائهم.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `parent_id` (`uuid`), `reader_id` (`uuid`), `child_id` (`uuid`), `subject` (`varchar`), `last_message` (`text`), `unread_count_parent` (`integer`).",
            "**العلاقات (Foreign Keys)**: `parent_id` -> `users.id`, `reader_id` -> `users.id`, `child_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/parent/conversations`."
          ],
          "en": [
            "**Purpose**: Coordination chats between parents and Maqra'ah reciters to monitor children's progress.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `parent_id` (`uuid`), `reader_id` (`uuid`), `child_id` (`uuid`), `subject` (`varchar`), `last_message` (`text`), `unread_count_parent` (`integer`).",
            "**Relationships (Foreign Keys)**: `parent_id` -> `users.id`, `reader_id` -> `users.id`, `child_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/parent/conversations`."
          ]
        }
      },
      {
        "id": "6-parent_reader_messages-",
        "title": {
          "ar": "6. `parent_reader_messages`",
          "en": "6. `parent_reader_messages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الرسائل الفردية المتبادلة بمحادثات ولي الأمر والقارئ.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `conversation_id` (`uuid`), `sender_id` (`uuid`), `content` (`text`), `is_read` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `conversation_id` -> `parent_reader_conversations.id`, `sender_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/parent/conversations`."
          ],
          "en": [
            "**Purpose**: Individual messages exchanged in parent-reciter chats.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `conversation_id` (`uuid`), `sender_id` (`uuid`), `content` (`text`), `is_read` (`boolean`).",
            "**Relationships (Foreign Keys)**: `conversation_id` -> `parent_reader_conversations.id`, `sender_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/parent/conversations`."
          ]
        }
      },
      {
        "id": "7-parent_teacher_conversations-",
        "title": {
          "ar": "7. `parent_teacher_conversations`",
          "en": "7. `parent_teacher_conversations`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المحادثات المباشرة بين أولياء الأمور ومعلمي الأكاديمية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `parent_id` (`uuid`), `teacher_id` (`uuid`), `child_id` (`uuid`), `subject` (`varchar`), `last_message` (`text`), `unread_count_parent` (`integer`).",
            "**العلاقات (Foreign Keys)**: `parent_id` -> `users.id`, `teacher_id` -> `users.id`, `child_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/parent/conversations`."
          ],
          "en": [
            "**Purpose**: Direct conversations between parents and Academy teachers.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `parent_id` (`uuid`), `teacher_id` (`uuid`), `child_id` (`uuid`), `subject` (`varchar`), `last_message` (`text`), `unread_count_parent` (`integer`).",
            "**Relationships (Foreign Keys)**: `parent_id` -> `users.id`, `teacher_id` -> `users.id`, `child_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/parent/conversations`."
          ]
        }
      },
      {
        "id": "8-parent_teacher_messages-",
        "title": {
          "ar": "8. `parent_teacher_messages`",
          "en": "8. `parent_teacher_messages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الرسائل المسجلة بـ محادثات ولي الأمر والمعلم.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `conversation_id` (`uuid`), `sender_id` (`uuid`), `content` (`text`), `is_read` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `conversation_id` -> `parent_teacher_conversations.id`, `sender_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/parent/conversations`."
          ],
          "en": [
            "**Purpose**: Messages recorded in parent-teacher conversations.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `conversation_id` (`uuid`), `sender_id` (`uuid`), `content` (`text`), `is_read` (`boolean`).",
            "**Relationships (Foreign Keys)**: `conversation_id` -> `parent_teacher_conversations.id`, `sender_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/parent/conversations`."
          ]
        }
      },
      {
        "id": "9-parent_child_links-",
        "title": {
          "ar": "9. `parent_child_links`",
          "en": "9. `parent_child_links`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الجدول المرجعي لروابط الامتداد والتأكيد الأبوي القديم.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `parent_id` (`uuid`), `child_id` (`uuid`), `relation` (`text`), `status` (`text`).",
            "**العلاقات (Foreign Keys)**: `parent_id` -> `users.id`, `child_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/parent/link-child`."
          ],
          "en": [
            "**Purpose**: Reference table for legacy parent-child linkage and verification records.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `parent_id` (`uuid`), `child_id` (`uuid`), `relation` (`text`), `status` (`text`).",
            "**Relationships (Foreign Keys)**: `parent_id` -> `users.id`, `child_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/parent/link-child`."
          ]
        }
      },
      {
        "id": "10-parent_children-",
        "title": {
          "ar": "10. `parent_children`",
          "en": "10. `parent_children`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: السجل النشط المعتمد لربط ولي الأمر بأبنائه الطلاب عبر أكواد الربط وتحديد الحالة (`pending`, `confirmed`, `rejected`).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `parent_id` (`uuid`), `child_id` (`uuid`), `relation` (`text`), `status` (`text`), `link_code` (`varchar`), `link_code_expires_at` (`timestamp`), `confirmed_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `parent_id` -> `users.id`, `child_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/parent/link-child`, `/api/academy/parent/children/[id]/activity`."
          ],
          "en": [
            "**Purpose**: Active approved registry linking parents to student children via link codes with status tracking (`pending`, `confirmed`, `rejected`).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `parent_id` (`uuid`), `child_id` (`uuid`), `relation` (`text`), `status` (`text`), `link_code` (`varchar`), `link_code_expires_at` (`timestamp`), `confirmed_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `parent_id` -> `users.id`, `child_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/parent/link-child`, `/api/academy/parent/children/[id]/activity`."
          ]
        }
      },
      {
        "id": "11-parent_content_restrictions-",
        "title": {
          "ar": "11. `parent_content_restrictions`",
          "en": "11. `parent_content_restrictions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: القيود والضوابط الأبوية المفروضة من ولي الأمر على الأبناء بالحساب.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `parent_id` (`uuid`), `child_id` (`uuid`), `restriction_type` (`varchar`), `target_id` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `parent_id` -> `users.id`, `child_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/parent/children/[id]/reports`."
          ],
          "en": [
            "**Purpose**: Parental controls and content restrictions imposed by parents on child accounts.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `parent_id` (`uuid`), `child_id` (`uuid`), `restriction_type` (`varchar`), `target_id` (`varchar`).",
            "**Relationships (Foreign Keys)**: `parent_id` -> `users.id`, `child_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/parent/children/[id]/reports`."
          ]
        }
      },
      {
        "id": "12-parent_weekly_reports-",
        "title": {
          "ar": "12. `parent_weekly_reports`",
          "en": "12. `parent_weekly_reports`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: أرشيف تقارير الإنجاز الأسبوعية المولدة والمحيطة بأداء الأبناء والمراسلة لأولياء الأمور.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `parent_id` (`uuid`), `child_id` (`uuid`), `week_start` (`date`), `week_end` (`date`), `recitations_count` (`integer`), `sessions_attended` (`integer`), `badges_earned` (`integer`), `summary` (`jsonb`), `email_sent` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `parent_id` -> `users.id`, `child_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/cron/parent-weekly-reports`, `/api/academy/parent/children/[id]/reports`."
          ],
          "en": [
            "**Purpose**: Archive of weekly progress reports generated regarding children's performance and dispatched to parents.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `parent_id` (`uuid`), `child_id` (`uuid`), `week_start` (`date`), `week_end` (`date`), `recitations_count` (`integer`), `sessions_attended` (`integer`), `badges_earned` (`integer`), `summary` (`jsonb`), `email_sent` (`boolean`).",
            "**Relationships (Foreign Keys)**: `parent_id` -> `users.id`, `child_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/cron/parent-weekly-reports`, `/api/academy/parent/children/[id]/reports`."
          ]
        }
      },
      {
        "id": "13-notifications-",
        "title": {
          "ar": "13. `notifications`",
          "en": "13. `notifications`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الإشعارات والتنبيهات الفورية والتفاعلية الصادرة لجميع المستخدمين بالمنصة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `user_id` (`uuid`), `type` (`varchar`), `title` (`varchar`), `message` (`text`), `link` (`text`), `category` (`varchar`), `is_read` (`boolean`), `dedup_key` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/supervisor/notifications`, `lib/notifications.ts`."
          ],
          "en": [
            "**Purpose**: Instant and interactive notifications issued to all platform users.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `user_id` (`uuid`), `type` (`varchar`), `title` (`varchar`), `message` (`text`), `link` (`text`), `category` (`varchar`), `is_read` (`boolean`), `dedup_key` (`varchar`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/supervisor/notifications`, `lib/notifications.ts`."
          ]
        }
      },
      {
        "id": "14-contact_messages-",
        "title": {
          "ar": "14. `contact_messages`",
          "en": "14. `contact_messages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: رسائل نموذج تواصل معنا المرسلة من زوار الواجهة العامة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `name` (`varchar`), `email` (`varchar`), `subject` (`varchar`), `message` (`text`), `status` (`varchar`).",
            "**العلاقات (Foreign Keys)**: مستشعر عام غير مقترن مفتاحياً.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `app/contact/page.tsx`, `/api/admin/content-pages`."
          ],
          "en": [
            "**Purpose**: Contact form messages submitted by visitors on the public site.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `name` (`varchar`), `email` (`varchar`), `subject` (`varchar`), `message` (`text`), `status` (`varchar`).",
            "**Relationships (Foreign Keys)**: Unlinked general sensor record.",
            "**Linked API Endpoints**: `app/contact/page.tsx`, `/api/admin/content-pages`."
          ]
        }
      },
      {
        "id": "15-fiqh_questions-",
        "title": {
          "ar": "15. `fiqh_questions`",
          "en": "15. `fiqh_questions`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الأسئلة والاستفسارات الفقهية المقدمة من الطلاب وإدارتها حتى إجابتها ونشرها.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `asked_by` (`uuid`), `title` (`varchar`), `question` (`text`), `answer` (`text`), `answered_by` (`uuid`), `assigned_to` (`uuid`), `category` (`varchar`), `status` (`varchar` - `'pending'`, `'answered'`, `'closed'`), `publish_consent` (`varchar`), `is_published` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `asked_by` -> `users.id`, `answered_by` -> `users.id`, `assigned_to` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/student/fiqh`, `/api/academy/supervisor/fiqh`, `/api/academy/admin/fiqh`, `/api/academy/fiqh/[id]/answer`, `/api/academy/fiqh/[id]/consent`."
          ],
          "en": [
            "**Purpose**: Fiqh questions and inquiries submitted by students, managed through answer issuance and publishing.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `asked_by` (`uuid`), `title` (`varchar`), `question` (`text`), `answer` (`text`), `answered_by` (`uuid`), `assigned_to` (`uuid`), `category` (`varchar`), `status` (`varchar` - `'pending'`, `'answered'`, `'closed'`), `publish_consent` (`varchar`), `is_published` (`boolean`).",
            "**Relationships (Foreign Keys)**: `asked_by` -> `users.id`, `answered_by` -> `users.id`, `assigned_to` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/student/fiqh`, `/api/academy/supervisor/fiqh`, `/api/academy/admin/fiqh`, `/api/academy/fiqh/[id]/answer`, `/api/academy/fiqh/[id]/consent`."
          ]
        }
      },
      {
        "id": "16-fiqh_messages-",
        "title": {
          "ar": "16. `fiqh_messages`",
          "en": "16. `fiqh_messages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الرسائل والاستفسارات التعقيبية المتبادلة بين الطالب ومفتي الفقه حول السؤال.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `question_id` (`uuid`), `sender_id` (`uuid`), `sender_role` (`varchar`), `content` (`text`), `is_read` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `question_id` -> `fiqh_questions.id`, `sender_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/supervisor/fiqh`."
          ],
          "en": [
            "**Purpose**: Follow-up messages and inquiries exchanged between student and Fiqh scholar regarding a question.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `question_id` (`uuid`), `sender_id` (`uuid`), `sender_role` (`varchar`), `content` (`text`), `is_read` (`boolean`).",
            "**Relationships (Foreign Keys)**: `question_id` -> `fiqh_questions.id`, `sender_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/supervisor/fiqh`."
          ]
        }
      },
      {
        "id": "17-fiqh_form_fields-",
        "title": {
          "ar": "17. `fiqh_form_fields`",
          "en": "17. `fiqh_form_fields`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الحقول الديناميكية المخصصة بنموذج طرح الأسئلة الفقهية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `name` (`varchar`), `label_ar` (`varchar`), `type` (`varchar`), `options` (`jsonb`), `is_required` (`boolean`), `sort_order` (`integer`).",
            "**العلاقات (Foreign Keys)**: مرجعية بنظام نموذج الفتوى.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/fiqh`."
          ],
          "en": [
            "**Purpose**: Custom dynamic fields configured for the Fiqh question submission form.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `name` (`varchar`), `label_ar` (`varchar`), `type` (`varchar`), `options` (`jsonb`), `is_required` (`boolean`), `sort_order` (`integer`).",
            "**Relationships (Foreign Keys)**: Reference configuration for the Fatwa form engine.",
            "**Linked API Endpoints**: `/api/academy/admin/fiqh`."
          ]
        }
      },
      {
        "id": "18-fiqh_officers-",
        "title": {
          "ar": "18. `fiqh_officers`",
          "en": "18. `fiqh_officers`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: حصر وتعيين مشايخ ومفتي قسم الفقه والإفتاء المعتمدين.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `user_id` (`uuid`), `bio` (`text`), `is_active` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/fiqh`, `/api/academy/supervisor/fiqh`."
          ],
          "en": [
            "**Purpose**: Roster and assignments for certified Fiqh scholars and Muftis.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `user_id` (`uuid`), `bio` (`text`), `is_active` (`boolean`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/fiqh`, `/api/academy/supervisor/fiqh`."
          ]
        }
      },
      {
        "id": "19-fiqh_officer_categories-",
        "title": {
          "ar": "19. `fiqh_officer_categories`",
          "en": "19. `fiqh_officer_categories`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: ربط مفتي الفقه بتصنيفات الفتاوى المحددة لتوزيع الأسئلة آلياً.",
            "**أهم الأعمدة ونوعها**: `officer_id` (`uuid`), `category_id` (`uuid`).",
            "**العلاقات (Foreign Keys)**: `officer_id` -> `fiqh_officers.id`, `category_id` -> `categories.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/fiqh`."
          ],
          "en": [
            "**Purpose**: Mapping Fiqh scholars to specific Fatwa categories for automated question distribution.",
            "**Main Columns & Types**: `officer_id` (`uuid`), `category_id` (`uuid`).",
            "**Relationships (Foreign Keys)**: `officer_id` -> `fiqh_officers.id`, `category_id` -> `categories.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/fiqh`."
          ]
        }
      },
      {
        "id": "20-articles-",
        "title": {
          "ar": "20. `articles`",
          "en": "20. `articles`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: المقالات التثقيفية والشرعية المنشورة بقسم المجتمع بالمنصة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `author_id` (`uuid`), `community` (`varchar`), `title` (`varchar`), `slug` (`varchar`), `content` (`text`), `cover_image_url` (`text`), `status` (`varchar` - `'published'`, `'draft'`), `views_count` (`integer`), `likes_count` (`integer`), `comments_count` (`integer`).",
            "**العلاقات (Foreign Keys)**: `author_id` -> `users.id`, `reviewed_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/articles`."
          ],
          "en": [
            "**Purpose**: Educational and Islamic articles published in the platform community section.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `author_id` (`uuid`), `community` (`varchar`), `title` (`varchar`), `slug` (`varchar`), `content` (`text`), `cover_image_url` (`text`), `status` (`varchar` - `'published'`, `'draft'`), `views_count` (`integer`), `likes_count` (`integer`), `comments_count` (`integer`).",
            "**Relationships (Foreign Keys)**: `author_id` -> `users.id`, `reviewed_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/community/articles`."
          ]
        }
      },
      {
        "id": "21-article_comments-",
        "title": {
          "ar": "21. `article_comments`",
          "en": "21. `article_comments`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التعليقات الواردة من الأعضاء على المقالات المنشورة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `article_id` (`uuid`), `author_id` (`uuid`), `content` (`text`), `is_hidden` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `article_id` -> `articles.id`, `author_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/articles/[id]/comments`."
          ],
          "en": [
            "**Purpose**: Comments submitted by members on published articles.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `article_id` (`uuid`), `author_id` (`uuid`), `content` (`text`), `is_hidden` (`boolean`).",
            "**Relationships (Foreign Keys)**: `article_id` -> `articles.id`, `author_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/community/articles/[id]/comments`."
          ]
        }
      },
      {
        "id": "22-article_likes-",
        "title": {
          "ar": "22. `article_likes`",
          "en": "22. `article_likes`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تسجيل الإعجابات بالمقالات.",
            "**أهم الأعمدة ونوعها**: `article_id` (`uuid`), `user_id` (`uuid`), `created_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `article_id` -> `articles.id`, `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/articles/[id]/like`."
          ],
          "en": [
            "**Purpose**: Recording likes on articles.",
            "**Main Columns & Types**: `article_id` (`uuid`), `user_id` (`uuid`), `created_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `article_id` -> `articles.id`, `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/community/articles/[id]/like`."
          ]
        }
      },
      {
        "id": "23-forum_posts-",
        "title": {
          "ar": "23. `forum_posts`",
          "en": "23. `forum_posts`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: منشورات ومواضيع منتدى المجتمع التفاعلي.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `author_id` (`uuid`), `title` (`varchar`), `content` (`text`), `category` (`varchar`), `is_pinned` (`boolean`), `is_locked` (`boolean`), `is_hidden` (`boolean`), `views_count` (`integer`), `replies_count` (`integer`).",
            "**العلاقات (Foreign Keys)**: `author_id` -> `users.id`, `best_reply_id` -> `forum_replies.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/forum`."
          ],
          "en": [
            "**Purpose**: Posts and discussion topics in the interactive community forum.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `author_id` (`uuid`), `title` (`varchar`), `content` (`text`), `category` (`varchar`), `is_pinned` (`boolean`), `is_locked` (`boolean`), `is_hidden` (`boolean`), `views_count` (`integer`), `replies_count` (`integer`).",
            "**Relationships (Foreign Keys)**: `author_id` -> `users.id`, `best_reply_id` -> `forum_replies.id`.",
            "**Linked API Endpoints**: `/api/community/forum`."
          ]
        }
      },
      {
        "id": "24-forum_replies-",
        "title": {
          "ar": "24. `forum_replies`",
          "en": "24. `forum_replies`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الردود والمشاركات والتعليقات المتداخلة بـ مواضيع المنتدى.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `post_id` (`uuid`), `author_id` (`uuid`), `content` (`text`), `parent_reply_id` (`uuid`), `is_best_answer` (`boolean`), `likes_count` (`integer`).",
            "**العلاقات (Foreign Keys)**: `post_id` -> `forum_posts.id`, `author_id` -> `users.id`, `parent_reply_id` -> `forum_replies.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/forum/[id]/replies`."
          ],
          "en": [
            "**Purpose**: Nested replies, contributions, and comments in forum threads.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `post_id` (`uuid`), `author_id` (`uuid`), `content` (`text`), `parent_reply_id` (`uuid`), `is_best_answer` (`boolean`), `likes_count` (`integer`).",
            "**Relationships (Foreign Keys)**: `post_id` -> `forum_posts.id`, `author_id` -> `users.id`, `parent_reply_id` -> `forum_replies.id`.",
            "**Linked API Endpoints**: `/api/community/forum/[id]/replies`."
          ]
        }
      },
      {
        "id": "25-forum_post_likes-",
        "title": {
          "ar": "25. `forum_post_likes`",
          "en": "25. `forum_post_likes`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تسجيل الإعجابات بمواضيع المنتدى.",
            "**أهم الأعمدة ونوعها**: `post_id` (`uuid`), `user_id` (`uuid`), `created_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `post_id` -> `forum_posts.id`, `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/forum`."
          ],
          "en": [
            "**Purpose**: Recording likes on forum topics.",
            "**Main Columns & Types**: `post_id` (`uuid`), `user_id` (`uuid`), `created_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `post_id` -> `forum_posts.id`, `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/community/forum`."
          ]
        }
      },
      {
        "id": "26-forum_reply_likes-",
        "title": {
          "ar": "26. `forum_reply_likes`",
          "en": "26. `forum_reply_likes`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تسجيل الإعجابات بالردود في المنتدى.",
            "**أهم الأعمدة ونوعها**: `reply_id` (`uuid`), `user_id` (`uuid`), `created_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `reply_id` -> `forum_replies.id`, `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/forum`."
          ],
          "en": [
            "**Purpose**: Recording likes on forum replies.",
            "**Main Columns & Types**: `reply_id` (`uuid`), `user_id` (`uuid`), `created_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `reply_id` -> `forum_replies.id`, `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/community/forum`."
          ]
        }
      },
      {
        "id": "27-forum_reports-",
        "title": {
          "ar": "27. `forum_reports`",
          "en": "27. `forum_reports`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: بلاغات وشكاوى الأعضاء والمشرفين حول منشورات أو ردود غير ملائمة بالمنتدى.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `target_type` (`varchar`), `target_id` (`uuid`), `reporter_id` (`uuid`), `reason` (`varchar`), `details` (`text`), `status` (`varchar` - `'pending'`, `'reviewed'`, `'dismissed'`).",
            "**العلاقات (Foreign Keys)**: `reporter_id` -> `users.id`, `reviewed_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/forum/reports`."
          ],
          "en": [
            "**Purpose**: Member and supervisor reports/complaints regarding inappropriate forum posts or replies.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `target_type` (`varchar`), `target_id` (`uuid`), `reporter_id` (`uuid`), `reason` (`varchar`), `details` (`text`), `status` (`varchar` - `'pending'`, `'reviewed'`, `'dismissed'`).",
            "**Relationships (Foreign Keys)**: `reporter_id` -> `users.id`, `reviewed_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/community/forum/reports`."
          ]
        }
      },
      {
        "id": "28-community_bans-",
        "title": {
          "ar": "28. `community_bans`",
          "en": "28. `community_bans`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: حظر الأعضاء المخالفين من المشاركة والتعليق بقطاعات المجتمع.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `community` (`varchar`), `user_id` (`uuid`), `banned_by` (`uuid`), `reason` (`text`), `expires_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`, `banned_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/admin/members`."
          ],
          "en": [
            "**Purpose**: Banning violating members from participating and commenting across community sectors.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `community` (`varchar`), `user_id` (`uuid`), `banned_by` (`uuid`), `reason` (`text`), `expires_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`, `banned_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/community/admin/members`."
          ]
        }
      },
      {
        "id": "29-community_rules-",
        "title": {
          "ar": "29. `community_rules`",
          "en": "29. `community_rules`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: القوانين والقواعد التنظيمية العامة لمنسوبي وحوارات المنتدى والمجتمع.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `community` (`varchar`), `position` (`integer`), `title` (`varchar`), `body` (`text`).",
            "**العلاقات (Foreign Keys)**: `created_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/community/forum`."
          ],
          "en": [
            "**Purpose**: General guidelines and organizational rules for community forum members and discussions.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `community` (`varchar`), `position` (`integer`), `title` (`varchar`), `body` (`text`).",
            "**Relationships (Foreign Keys)**: `created_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/community/forum`."
          ]
        }
      },
      {
        "id": "30-page_views-",
        "title": {
          "ar": "30. `page_views`",
          "en": "30. `page_views`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع زوار ومقاييس حركة الصفحات ومصادر الزيارات والأجهزة (`Analytics`).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `path` (`varchar`), `country` (`varchar`), `device_type` (`varchar`), `user_agent` (`text`), `ip_hash` (`varchar`), `user_id` (`uuid`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/analytics`, `/api/admin/activity-logs`."
          ],
          "en": [
            "**Purpose**: Tracking visitors, page traffic metrics, traffic sources, and devices (`Analytics`).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `path` (`varchar`), `country` (`varchar`), `device_type` (`varchar`), `user_agent` (`text`), `ip_hash` (`varchar`), `user_id` (`uuid`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/analytics`, `/api/admin/activity-logs`."
          ]
        }
      },
      {
        "id": "31-books-",
        "title": {
          "ar": "31. `books`",
          "en": "31. `books`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الكتب والمراجع الرقمية المتاحة بمكتبة الأكاديمية والمقرأة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `title` (`varchar`), `author` (`varchar`), `description` (`text`), `cover_image_url` (`text`), `pages_count` (`integer`), `category_id` (`uuid`), `library_domain` (`varchar`), `is_published` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `category_id` -> `categories.id`, `created_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/library/books`, `/api/library/books`."
          ],
          "en": [
            "**Purpose**: Digital books and reference materials available in the Academy and Maqra'ah library.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `title` (`varchar`), `author` (`varchar`), `description` (`text`), `cover_image_url` (`text`), `pages_count` (`integer`), `category_id` (`uuid`), `library_domain` (`varchar`), `is_published` (`boolean`).",
            "**Relationships (Foreign Keys)**: `category_id` -> `categories.id`, `created_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/library/books`, `/api/library/books`."
          ]
        }
      },
      {
        "id": "32-book_files-",
        "title": {
          "ar": "32. `book_files`",
          "en": "32. `book_files`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: ملفات الـ PDF المتعددة اللغات المرفقة لكل كتاب بالمكتبة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `book_id` (`uuid`), `language` (`varchar`), `language_label` (`varchar`), `pdf_url` (`text`), `file_size_bytes` (`bigint`).",
            "**العلاقات (Foreign Keys)**: `book_id` -> `books.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/library/books/[id]/files`, `/api/upload-pdf`."
          ],
          "en": [
            "**Purpose**: Multilingual PDF files attached to each book in the library.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `book_id` (`uuid`), `language` (`varchar`), `language_label` (`varchar`), `pdf_url` (`text`), `file_size_bytes` (`bigint`).",
            "**Relationships (Foreign Keys)**: `book_id` -> `books.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/library/books/[id]/files`, `/api/upload-pdf`."
          ]
        }
      },
      {
        "id": "33-content_pages-",
        "title": {
          "ar": "33. `content_pages`",
          "en": "33. `content_pages`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: صفحات المحتوى التنظيمي والثابت للمنصة (الخصوصية، الشروط، من نحن، الأسئلة الشائعة).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `slug` (`text`), `title_ar` (`text`), `title_en` (`text`), `content_ar` (`text`), `content_en` (`text`), `is_published` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `updated_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/content-pages`."
          ],
          "en": [
            "**Purpose**: Static and regulatory content pages for the platform (Privacy Policy, Terms, About Us, FAQ).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `slug` (`text`), `title_ar` (`text`), `title_en` (`text`), `content_ar` (`text`), `content_en` (`text`), `is_published` (`boolean`).",
            "**Relationships (Foreign Keys)**: `updated_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/content-pages`."
          ]
        }
      },
      {
        "id": "34-system_settings-",
        "title": {
          "ar": "34. `system_settings`",
          "en": "34. `system_settings`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التحكم بالإعدادات التكوينية الأساسية للنظام والمشروع ككل.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `setting_key` (`varchar`), `setting_value` (`jsonb`), `setting_type` (`varchar`), `is_public` (`boolean`), `is_editable` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `updated_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/settings`, `/api/admin/backup`."
          ],
          "en": [
            "**Purpose**: Managing core system configuration settings across the entire application.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `setting_key` (`varchar`), `setting_value` (`jsonb`), `setting_type` (`varchar`), `is_public` (`boolean`), `is_editable` (`boolean`).",
            "**Relationships (Foreign Keys)**: `updated_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/settings`, `/api/admin/backup`."
          ]
        }
      },
      {
        "id": "35-system_settings_backup_067-",
        "title": {
          "ar": "35. `system_settings_backup_067`",
          "en": "35. `system_settings_backup_067`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: جدول النسخة الاحتياطية المرجعية التاريخية لإعدادات النظام.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`), `setting_key` (`varchar`), `setting_value` (`jsonb`), `setting_type` (`varchar`).",
            "**العلاقات (Foreign Keys)**: مرجعي احتياطي غير مقترن.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/backup`."
          ],
          "en": [
            "**Purpose**: Historical reference backup table for system settings.",
            "**Main Columns & Types**: `id` (`uuid`), `setting_key` (`varchar`), `setting_value` (`jsonb`), `setting_type` (`varchar`).",
            "**Relationships (Foreign Keys)**: Unlinked historical backup table.",
            "**Linked API Endpoints**: `/api/admin/backup`."
          ]
        }
      },
      {
        "id": "36-activity_logs-",
        "title": {
          "ar": "36. `activity_logs`",
          "en": "36. `activity_logs`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع حركات وسجلات الأنشطة والإجراءات اليومية للمستخدمين والمدراء.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `user_id` (`uuid`), `action` (`varchar`), `entity_type` (`varchar`), `description` (`text`), `ip_address` (`inet`), `status` (`varchar`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/activity-logs`."
          ],
          "en": [
            "**Purpose**: Tracking daily activity logs, actions, and operations performed by users and admins.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `user_id` (`uuid`), `action` (`varchar`), `entity_type` (`varchar`), `description` (`text`), `ip_address` (`inet`), `status` (`varchar`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/activity-logs`."
          ]
        }
      },
      {
        "id": "37-audit_log-",
        "title": {
          "ar": "37. `audit_log`",
          "en": "37. `audit_log`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل التدقيق الرقابي والأمني الأعلى لقرارات الإدارة والتعديلات الحساسة بالمنصة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `actor_id` (`uuid`), `action` (`text`), `platform` (`text`), `entity_type` (`text`), `old_value` (`jsonb`), `new_value` (`jsonb`), `ip_address` (`inet`).",
            "**العلاقات (Foreign Keys)**: `actor_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/audit-log`."
          ],
          "en": [
            "**Purpose**: High-level security and administrative audit log for sensitive system modifications and management decisions.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `actor_id` (`uuid`), `action` (`text`), `platform` (`text`), `entity_type` (`text`), `old_value` (`jsonb`), `new_value` (`jsonb`), `ip_address` (`inet`).",
            "**Relationships (Foreign Keys)**: `actor_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/admin/audit-log`."
          ]
        }
      },
      {
        "id": "38-admin_reports-",
        "title": {
          "ar": "38. `admin_reports`",
          "en": "38. `admin_reports`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: التقارير التنفيذية والتحليلية المولدة أوتوماتيكياً للمدراء.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `report_type` (`varchar`), `period_start` (`date`), `period_end` (`date`), `report_data` (`jsonb`), `recipient_email` (`text`), `email_sent` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `recipient_user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/cron/admin-activity-reports`."
          ],
          "en": [
            "**Purpose**: Automatically generated executive and analytical reports for administrators.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `report_type` (`varchar`), `period_start` (`date`), `period_end` (`date`), `report_data` (`jsonb`), `recipient_email` (`text`), `email_sent` (`boolean`).",
            "**Relationships (Foreign Keys)**: `recipient_user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/cron/admin-activity-reports`."
          ]
        }
      },
      {
        "id": "39-announcements-",
        "title": {
          "ar": "39. `announcements`",
          "en": "39. `announcements`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الإعلانات والتنبيهات العامة والشريط الإخباري الظاهر للمستخدمين.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `title_ar` (`varchar`), `content_ar` (`text`), `target_audience` (`varchar`), `priority` (`varchar`), `is_published` (`boolean`), `course_session_id` (`uuid`).",
            "**العلاقات (Foreign Keys)**: `created_by` -> `users.id`, `course_session_id` -> `course_sessions.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/announcements`."
          ],
          "en": [
            "**Purpose**: Public announcements, general alerts, and news ticker displayed to users.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `title_ar` (`varchar`), `content_ar` (`text`), `target_audience` (`varchar`), `priority` (`varchar`), `is_published` (`boolean`), `course_session_id` (`uuid`).",
            "**Relationships (Foreign Keys)**: `created_by` -> `users.id`, `course_session_id` -> `course_sessions.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/announcements`."
          ]
        }
      },
      {
        "id": "40-email_templates-",
        "title": {
          "ar": "40. `email_templates`",
          "en": "40. `email_templates`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: قوالب ورسائل البريد الإلكتروني التلقائية باللغتين العربية والإنجليزية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `template_key` (`varchar`), `subject_ar` (`varchar`), `body_ar` (`text`), `variables` (`jsonb`), `is_active` (`boolean`), `scope` (`text`).",
            "**العلاقات (Foreign Keys)**: مرجعية بخدمات البريد Resend / SMTP.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/admin/email-templates`."
          ],
          "en": [
            "**Purpose**: Automated email templates and messages in Arabic and English.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `template_key` (`varchar`), `subject_ar` (`varchar`), `body_ar` (`text`), `variables` (`jsonb`), `is_active` (`boolean`), `scope` (`text`).",
            "**Relationships (Foreign Keys)**: Referenced by email services (Resend / SMTP).",
            "**Linked API Endpoints**: `/api/admin/email-templates`."
          ]
        }
      },
      {
        "id": "41-report_exports-",
        "title": {
          "ar": "41. `report_exports`",
          "en": "41. `report_exports`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع وتجهيز ملفات تصدير التقارير والإحصائيات بصيغ CSV/Excel.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `user_id` (`uuid`), `report_type` (`varchar`), `filters` (`jsonb`), `status` (`varchar`), `file_url` (`text`), `row_count` (`integer`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/analytics/export`."
          ],
          "en": [
            "**Purpose**: Tracking and generating export files for reports and statistics in CSV/Excel formats.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `user_id` (`uuid`), `report_type` (`varchar`), `filters` (`jsonb`), `status` (`varchar`), `file_url` (`text`), `row_count` (`integer`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/analytics/export`."
          ]
        }
      },
      {
        "id": "42-reminder_runs-",
        "title": {
          "ar": "42. `reminder_runs`",
          "en": "42. `reminder_runs`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل توثيق عمليات تنفيذ مهام التذكير المجدولة (`Cron Runs Audit`).",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `kind` (`varchar`), `ran_at` (`timestamp`), `notifications_created` (`integer`), `errors` (`integer`), `meta` (`jsonb`).",
            "**العلاقات (Foreign Keys)**: سجل تشغيل تلقائي.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/cron/academy-reminders`."
          ],
          "en": [
            "**Purpose**: Execution audit log for scheduled reminder cron tasks (`Cron Runs Audit`).",
            "**Main Columns & Types**: `id` (`uuid`, PK), `kind` (`varchar`), `ran_at` (`timestamp`), `notifications_created` (`integer`), `errors` (`integer`), `meta` (`jsonb`).",
            "**Relationships (Foreign Keys)**: Automated system execution log.",
            "**Linked API Endpoints**: `/api/cron/academy-reminders`."
          ]
        }
      },
      {
        "id": "43-academy_teachers-",
        "title": {
          "ar": "43. `academy_teachers`",
          "en": "43. `academy_teachers`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل وملف معلمي الأكاديمية التخصصي والخبرات وساعات التدريس والمصداقية.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `user_id` (`uuid`), `bio` (`text`), `specialties` (`ARRAY`), `trust_score` (`integer`), `rating` (`numeric`), `is_verified` (`boolean`), `is_active` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `user_id` -> `users.id`, `verified_by` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/admin/teachers`, `/api/academy/supervisor/teachers`."
          ],
          "en": [
            "**Purpose**: Professional profile registry for Academy teachers, tracking specialties, experience, teaching hours, and credibility.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `user_id` (`uuid`), `bio` (`text`), `specialties` (`ARRAY`), `trust_score` (`integer`), `rating` (`numeric`), `is_verified` (`boolean`), `is_active` (`boolean`).",
            "**Relationships (Foreign Keys)**: `user_id` -> `users.id`, `verified_by` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/admin/teachers`, `/api/academy/supervisor/teachers`."
          ]
        }
      },
      {
        "id": "44-public_lessons-",
        "title": {
          "ar": "44. `public_lessons`",
          "en": "44. `public_lessons`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: الدروس العامة المفتوحة والمحاضرات المجانية المقررة للجمهور.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `teacher_id` (`uuid`), `title` (`varchar`), `public_slug` (`varchar`), `scheduled_at` (`timestamp`), `meeting_link` (`text`), `is_published` (`boolean`), `view_count` (`integer`), `signup_count` (`integer`).",
            "**العلاقات (Foreign Keys)**: `teacher_id` -> `users.id`, `category_id` -> `categories.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/public-lessons`, `/api/academy/admin/public-lessons`."
          ],
          "en": [
            "**Purpose**: Open public lessons and scheduled free lectures for the general public.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `teacher_id` (`uuid`), `title` (`varchar`), `public_slug` (`varchar`), `scheduled_at` (`timestamp`), `meeting_link` (`text`), `is_published` (`boolean`), `view_count` (`integer`), `signup_count` (`integer`).",
            "**Relationships (Foreign Keys)**: `teacher_id` -> `users.id`, `category_id` -> `categories.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/public-lessons`, `/api/academy/admin/public-lessons`."
          ]
        }
      },
      {
        "id": "45-public_lesson_signup_referrals-",
        "title": {
          "ar": "45. `public_lesson_signup_referrals`",
          "en": "45. `public_lesson_signup_referrals`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: تتبع الإحالات وتحولات الزوار المسجلين بالدروس العامة إلى حسابات دائمة بالمنصة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `lesson_id` (`uuid`), `visitor_token` (`varchar`), `converted_user_id` (`uuid`), `converted_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `lesson_id` -> `public_lessons.id`, `converted_user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/public-lessons`."
          ],
          "en": [
            "**Purpose**: Tracking referrals and conversion of public lesson visitors into permanent platform user accounts.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `lesson_id` (`uuid`), `visitor_token` (`varchar`), `converted_user_id` (`uuid`), `converted_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `lesson_id` -> `public_lessons.id`, `converted_user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/public-lessons`."
          ]
        }
      },
      {
        "id": "46-public_lesson_subscribers-",
        "title": {
          "ar": "46. `public_lesson_subscribers`",
          "en": "46. `public_lesson_subscribers`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: قائمة مشتركي التنبيهات والبريد الإلكتروني للدروس العامة المفتوحة.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `email` (`varchar`), `teacher_id` (`uuid`), `course_id` (`uuid`), `lesson_id` (`uuid`), `is_verified` (`boolean`), `reminder_enabled` (`boolean`).",
            "**العلاقات (Foreign Keys)**: `teacher_id` -> `users.id`, `lesson_id` -> `public_lessons.id`, `user_id` -> `users.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/public-lessons`."
          ],
          "en": [
            "**Purpose**: Email notification and subscriber list for open public lessons.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `email` (`varchar`), `teacher_id` (`uuid`), `course_id` (`uuid`), `lesson_id` (`uuid`), `is_verified` (`boolean`), `reminder_enabled` (`boolean`).",
            "**Relationships (Foreign Keys)**: `teacher_id` -> `users.id`, `lesson_id` -> `public_lessons.id`, `user_id` -> `users.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/public-lessons`."
          ]
        }
      },
      {
        "id": "47-public_lesson_views-",
        "title": {
          "ar": "47. `public_lesson_views`",
          "en": "47. `public_lesson_views`"
        },
        "intro": {
          "ar": "",
          "en": ""
        },
        "steps": {
          "ar": [
            "**الغرض**: سجل تتبع المشاهدات وزوار الدروس العامة المفتوحة وتحليل الأداء.",
            "**أهم الأعمدة ونوعها**: `id` (`uuid`, PK), `lesson_id` (`uuid`), `visitor_token` (`varchar`), `user_agent` (`text`), `joined_at` (`timestamp`), `left_at` (`timestamp`).",
            "**العلاقات (Foreign Keys)**: `lesson_id` -> `public_lessons.id`.",
            "**نقاط الاتصال المربوطة (API Endpoints)**: `/api/academy/teacher/public-lessons`."
          ],
          "en": [
            "**Purpose**: View tracking and visitor analytics log for open public lessons.",
            "**Main Columns & Types**: `id` (`uuid`, PK), `lesson_id` (`uuid`), `visitor_token` (`varchar`), `user_agent` (`text`), `joined_at` (`timestamp`), `left_at` (`timestamp`).",
            "**Relationships (Foreign Keys)**: `lesson_id` -> `public_lessons.id`.",
            "**Linked API Endpoints**: `/api/academy/teacher/public-lessons`."
          ]
        }
      }
    ]
  }
];

export function getGuide(slug: string): DocsGuide | undefined {
  return docsGuides.find((g) => g.slug === slug)
}
