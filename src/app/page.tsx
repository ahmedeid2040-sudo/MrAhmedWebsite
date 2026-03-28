import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SectionTitle, SiteShell } from "@/components/site-shell";

const stats = [
  { value: "+20", label: "مشروع وخدمة رقمية تم تنفيذها وتطويرها بشكل مباشر لعملاء في مصر والخليج." },
  { value: "95%", label: "قابلية للأتمتة وتقليل الاعتماد على العمل اليدوي في مسارات التشغيل المتكررة." },
  { value: "3X", label: "إمكانية مضاعفة كفاءة المتابعة والقياس عندما يكون عندك موقع ونظام وتشغيل في مكان واحد." },
  { value: "24/7", label: "موقع يبيع ويجمع Leads ويعرض خبرتك حتى أثناء انشغالك بالتنفيذ أو المبيعات." },
];

const services = [
  {
    icon: LayoutDashboard,
    title: "مواقع شخصية وتجارية فخمة",
    copy:
      "أصمم واجهات سريعة جدًا تعكس الثقة والاحتراف، وتعمل كأداة بيع حقيقية لا مجرد بروفايل شكلي.",
  },
  {
    icon: BriefcaseBusiness,
    title: "أنظمة إدارة داخلية مخصصة",
    copy:
      "لوحات تحكم لإدارة العملاء، المشاريع، الفواتير، والمحتوى، بحيث تقدر تدير البيزنس من مكان واحد.",
  },
  {
    icon: Cpu,
    title: "أتمتة وربط العمليات",
    copy:
      "ربط النماذج، الرسائل، الإيميل، المتابعة، والتقارير بأدوات أتمتة مثل n8n لتقليل الهدر وتسريع التنفيذ.",
  },
  {
    icon: BarChart3,
    title: "بنية قابلة للقياس والنمو",
    copy:
      "كل شيء مبني بعقلية تشغيل: KPIs واضحة، مسارات تحويل، وتجهيز للتوسع بدل الترقيع لاحقًا.",
  },
];

const bullets = [
  "الموقع نفسه يكون مثالًا حيًا يثبت للعميل مستوى التنفيذ الذي سيحصل عليه.",
  "تصميم فاخر جدًا مع سرعة عالية وتجربة استخدام واضحة ومريحة.",
  "SEO منظم، محتوى مرتب، وبنية مناسبة لمحركات البحث ومحركات الذكاء الاصطناعي.",
  "استعداد كامل لإضافة لوحة تحكم شاملة في المرحلة التالية دون إعادة بناء من الصفر.",
];

const roadmap = [
  "المرحلة الأولى: واجهة احترافية + صفحات الخدمات + حالة دراسية + صفحة تواصل + تسجيل دخول.",
  "المرحلة الثانية: لوحة تحكم لإدارة المحتوى والعملاء والـ leads والمشاريع والفواتير.",
  "المرحلة الثالثة: أتمتة، تقارير تنفيذية، وربط تشغيلي كامل مع أدواتك الداخلية.",
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="container hero-grid">
          <div className="glass hero-panel">
            <span className="badge">
              <Sparkles size={16} />
              نسخة البداية الاحترافية لموقع أحمد عيد
            </span>
            <h1 className="hero-title">أبني حضورًا رقميًا يبيعك، ونظامًا داخليًا يوسّعك.</h1>
            <p className="hero-copy">
              أنا أحمد عيد، أساعد أصحاب الأعمال والشركات على تحويل مواقعهم من مجرد واجهة شكلية إلى أصل رقمي
              قوي: سريع، منظم، فخم بصريًا، ومجهز للربط مع لوحة تحكم تشغّل المبيعات والعملاء والمشاريع من
              مكان واحد.
            </p>

            <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <Link href="/contact" className="button button-primary">
                ابدأ مشروعك الآن
                <ArrowLeft size={18} />
              </Link>
              <Link href="/services" className="button button-secondary">
                استعرض الحلول
              </Link>
            </div>

            <div className="grid-2" style={{ marginTop: "1.6rem" }}>
              {bullets.map((item) => (
                <div key={item} className="metric">
                  <div style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                    <CheckCircle2 size={18} color="#6ee7f9" />
                    <span className="metric-label" style={{ marginTop: 0, color: "#e7eef7" }}>
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            <div className="glass hero-panel" style={{ background: "var(--card-strong)" }}>
              <p className="small-muted">الهدف من هذه النسخة</p>
              <h3 style={{ marginTop: 0, fontSize: "1.8rem" }}>واجهة تليق بالمرحلة القادمة</h3>
              <p className="section-copy">
                هذه النسخة ليست النهاية. هي قاعدة نظيفة وقابلة للتطوير حتى نضيف فوقها النظام الداخلي الشامل
                بدون فوضى أو إعادة شغل من الصفر.
              </p>
              <ul className="list-clean" style={{ marginTop: "1rem" }}>
                {roadmap.map((item) => (
                  <li key={item}>
                    <ShieldCheck size={18} color="#22c55e" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid-2">
              {stats.map((stat) => (
                <div key={stat.value} className="metric glass">
                  <span className="metric-value">{stat.value}</span>
                  <span className="metric-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            kicker="الخدمات الأساسية"
            title="ماذا سيحصل عليه العميل عندما يعمل معك؟"
            copy="الهدف ليس مجرد تسليم صفحات جميلة، بل بناء أصل رقمي يرفع الثقة، يحسن التحويل، ويسهّل عليك الإدارة والتوسع."
          />

          <div className="grid-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="glass card">
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 18,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(110, 231, 249, 0.08)",
                      border: "1px solid rgba(110, 231, 249, 0.16)",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon size={24} color="#6ee7f9" />
                  </div>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "0.7rem" }}>{service.title}</h3>
                  <p className="section-copy">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="glass card">
            <SectionTitle
              kicker="لماذا هذا الاتجاه؟"
              title="لأنك لا تبني موقعًا فقط، بل تبني Proof of Work حيًا."
              copy="العميل عندما يرى موقعك يجب أن يشعر فورًا أنك قادر على تنفيذ نفس المستوى له: في الشكل، في الرسالة، وفي المنهجية التشغيلية."
            />
            <ul className="list-clean">
              <li>
                <CheckCircle2 size={18} color="#6ee7f9" />
                <span>رسالة واضحة من أول شاشة: من أنت، ماذا تقدم، وما النتيجة التي يشتريها العميل.</span>
              </li>
              <li>
                <CheckCircle2 size={18} color="#6ee7f9" />
                <span>بنية صفحات جاهزة للتوسع لاحقًا إلى خدمات، دراسات حالة، ومدونة أو محتوى تعليمي.</span>
              </li>
              <li>
                <CheckCircle2 size={18} color="#6ee7f9" />
                <span>تمهيد تقني لإضافة صفحة دخول ولوحة تحكم حقيقية في المرحلة التالية.</span>
              </li>
            </ul>
          </div>

          <div className="glass card" style={{ background: "var(--card-strong)" }}>
            <p className="kicker">التركيز الحالي</p>
            <h3 style={{ fontSize: "2rem", marginTop: "0.7rem" }}>تحسين الانطباع + تجهيز التشغيل</h3>
            <p className="section-copy">
              الواجهة الحالية أصبحت أصلح من النسخة القديمة كبداية، لكن التطوير القادم يجب أن يركز على الرفاهية
              البصرية، الهوية الأقوى، وأول طبقة من الـ auth حتى نبدأ الـ dashboard بشكل صحيح.
            </p>
            <div style={{ marginTop: "1.3rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <Link href="/login" className="button button-primary">
                صفحة تسجيل الدخول
              </Link>
              <Link href="/case-studies" className="button button-secondary">
                دراسات الحالة
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
