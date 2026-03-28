import Link from "next/link";
import { LockKeyhole, ShieldCheck, ArrowRight, LayoutDashboard } from "lucide-react";

const features = [
  "إدارة العملاء المحتملين والعملاء الحاليين.",
  "متابعة المشاريع والمراحل والتنفيذ.",
  "الفواتير والمدفوعات والمؤشرات الرئيسية.",
  "إدارة المحتوى والصفحات من لوحة واحدة.",
];

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <section className="glass login-box">
          <span className="badge">
            <LockKeyhole size={16} />
            بوابة الدخول
          </span>
          <h1 className="section-title" style={{ marginTop: "1rem" }}>
            تسجيل الدخول إلى لوحة التحكم
          </h1>
          <p className="section-copy">
            هذه الصفحة هي بداية المسار الصحيح قبل بناء النظام الداخلي الشامل. في المرحلة التالية سيتم ربطها
            بالمصادقة والصلاحيات والـ dashboard الفعلي.
          </p>

          <form style={{ display: "grid", gap: "0.9rem", marginTop: "1.5rem" }}>
            <input className="field" placeholder="البريد الإلكتروني" type="email" />
            <input className="field" placeholder="كلمة المرور" type="password" />
            <button type="button" className="button button-primary" style={{ width: "100%" }}>
              <LayoutDashboard size={18} />
              دخول لوحة التحكم
            </button>
          </form>

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span className="small-muted">نسخة واجهة فقط حاليًا، بدون ربط backend بعد.</span>
            <Link href="/" style={{ color: "#6ee7f9", fontWeight: 800, display: "inline-flex", gap: "0.4rem", alignItems: "center" }}>
              الرجوع للرئيسية
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="glass login-box" style={{ background: "var(--card-strong)" }}>
          <p className="kicker">لماذا صفحة Login الآن؟</p>
          <h2 style={{ fontSize: "2rem", marginTop: "0.7rem" }}>لأن الـ dashboard القادم يحتاج مدخلًا واضحًا من البداية.</h2>
          <p className="section-copy">
            وجود صفحة دخول الآن يثبت للعميل أن الموقع ليس مجرد واجهة، بل منصة يجري تجهيزها لتشغيل المبيعات
            والعملاء والمحتوى والعمليات.
          </p>

          <div style={{ display: "grid", gap: "0.8rem", marginTop: "1.3rem" }}>
            {features.map((feature) => (
              <div key={feature} className="metric">
                <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                  <ShieldCheck size={18} color="#22c55e" />
                  <span>{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
