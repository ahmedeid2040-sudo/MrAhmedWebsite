import { BarChart3, Boxes, Globe, ReceiptText, ShieldCheck, Workflow } from "lucide-react";
import { SectionTitle, SiteShell } from "@/components/site-shell";

const services = [
  {
    icon: Globe,
    title: "مواقع شخصية وتجارية عالية التحويل",
    copy:
      "تصميم وتطوير مواقع حديثة سريعة جدًا، مرتبة المحتوى، وقوية في الإقناع، بحيث تصبح أداة بيع حقيقية لا مجرد واجهة شكلية.",
  },
  {
    icon: Boxes,
    title: "أنظمة إدارة وعمليات مخصصة",
    copy:
      "بناء أنظمة داخلية لإدارة العملاء، المشاريع، الخدمات، والعمليات اليومية بطريقة منظمة وقابلة للتوسع.",
  },
  {
    icon: Workflow,
    title: "أتمتة وربط الأدوات",
    copy:
      "ربط الموقع والنماذج والبريد والمتابعة والتقارير مع أدوات الأتمتة لتقليل التأخير والهدر اليدوي.",
  },
  {
    icon: ReceiptText,
    title: "إدارة الفواتير والتشغيل المالي مبدئيًا",
    copy:
      "تجهيز طبقة أولية لإدارة الفواتير والمدفوعات والمتابعة المالية داخل النظام بدل التشتت بين أكثر من أداة.",
  },
  {
    icon: BarChart3,
    title: "لوحات قياس و KPIs",
    copy:
      "بناء واجهات تعرض مؤشرات الأداء المهمة مثل عدد الـ leads، التحويلات، قيمة المشاريع، والتحصيل.",
  },
  {
    icon: ShieldCheck,
    title: "بنية قابلة للتوسع بأمان",
    copy:
      "كل شيء يتم ترتيبه بحيث يمكن إضافة صلاحيات، تسجيل دخول، ولوحة تحكم شاملة لاحقًا بدون إعادة بناء مؤلمة.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="container">
          <SectionTitle
            kicker="الخدمات"
            title="حلول رقمية تبني الواجهة والتشغيل معًا"
            copy="الهدف من الخدمات التي أقدمها هو الجمع بين المظهر القوي، الرسالة البيعية الواضحة، والنظام الداخلي الذي يسمح لك بالإدارة والتوسع بثقة."
          />

          <div className="grid-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="glass card">
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: 18,
                      background: "rgba(110,231,249,0.08)",
                      border: "1px solid rgba(110,231,249,0.16)",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon size={24} color="#6ee7f9" />
                  </div>
                  <h3 style={{ fontSize: "1.2rem" }}>{service.title}</h3>
                  <p className="section-copy">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
