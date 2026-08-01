-- ============================================================================
-- 068 — Fix Supabase linter: rls_disabled_in_public
-- ============================================================================
-- الجداول الثلاثة التالية موجودة في schema `public` (المكشوف لـ PostgREST)
-- بدون تفعيل Row Level Security:
--   * competition_judge_scores
--   * competition_stages
--   * system_settings_backup_067
--
-- التطبيق لا يعتمد على anon/authenticated للوصول لهذه الجداول:
--   - lib/db.ts يتصل مباشرة عبر pg Pool (دور postgres → يتجاوز RLS)
--   - lib/supabase.ts يستخدم SUPABASE_SERVICE_ROLE_KEY (يتجاوز RLS)
-- لذلك تفعيل RLS بدون أي policy = منع كامل لأي وصول عام، والتطبيق يعمل كما هو.
--
-- آمن للتشغيل أكثر من مرة.
-- ============================================================================

BEGIN;

-- 1) competition_judge_scores -------------------------------------------------
ALTER TABLE public.competition_judge_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.competition_judge_scores FORCE ROW LEVEL SECURITY;
REVOKE ALL ON public.competition_judge_scores FROM anon, authenticated;

-- 2) competition_stages -------------------------------------------------------
ALTER TABLE public.competition_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.competition_stages FORCE ROW LEVEL SECURITY;
REVOKE ALL ON public.competition_stages FROM anon, authenticated;

-- 3) system_settings_backup_067 ----------------------------------------------
-- هذا مجرد جدول نسخة احتياطية من ترحيل 067. الأفضل حذفه بعد التأكد من نجاح
-- الترحيل (السطر في الأسفل)، لكن ريثما يحدث ذلك نُفعّل RLS عليه.
ALTER TABLE public.system_settings_backup_067 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_settings_backup_067 FORCE ROW LEVEL SECURITY;
REVOKE ALL ON public.system_settings_backup_067 FROM anon, authenticated;

COMMIT;

-- ============================================================================
-- (اختياري) بعد التأكد أن ترحيل 067 سليم، احذف النسخة الاحتياطية نهائياً:
--   DROP TABLE IF EXISTS public.system_settings_backup_067;
-- ============================================================================

-- ============================================================================
-- التحقق:
-- SELECT relname, relrowsecurity, relforcerowsecurity
-- FROM pg_class
-- WHERE relnamespace = 'public'::regnamespace
--   AND relname IN (
--     'competition_judge_scores',
--     'competition_stages',
--     'system_settings_backup_067'
--   );
-- ============================================================================
