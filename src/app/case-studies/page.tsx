import { ArrowUpLeft, CheckCircle2 } from "lucide-react";
import { SectionTitle, SiteShell } from "@/components/site-shell";

const studies = [
  {
    title: "موقع شخصي احترافي يعمل كأداة بيع",
    result: "رفع الثقة وتحسين وضوح الرسالة وتجهيز الموقع للتوسع لاحقًا إلى لوحة تحكم كاملة.",
    points: [
      "هيكلة الرسالة التسويقية من أول الشاشة وحتى الدعوة لاتخاذ الإجراء.",
      "تحسين الشكل العام والـ visual hierarchy بدل صفحة بورتفوليو بسيطة.",
      "تجهيز صفحات داخلية للتوسع في الخدمات ودراسات الحالة والتواصل.",
    ],
  },
  {
    title: "الانتقال من شغل متفرق إلى منصة تشغيل",
    result: "تقليل التشتت بين الأدوات المختلفة والاستعداد لإدارة العملاء والمشاريع من مكان واحد.",
    points: [
      "وضع تصور واضح للموديولات الأساسية: Leads, Clients, Projects, Invoices.",
      "إضافة صفحة دخول كبداية منطقية قبل بناء الـ dashboard.",
      "التحضير لبنية تقنية قابلة للنمو بدل قرارات مؤقتة قصيرة الأجل.",
    ],
  },
  {
    title: "موقع يكون Demo حيًا لقدراتك",
    result: "الموقع نفسه يصبح عينة مباشرة يراها العميل فيحكم على جودة التنفيذ من أول زيارة.",
    points: [
      "تصميم حديث وداكن يعطي إحساسًا تقنيًا واحترافيًا.",
      "محتوى عربي واضح مناسب للسوق المصري والخليجي.",
      "بنية SEO نظيفة قابلة للتطوير لاحقًا بالمحتوى والدراسات والمقالات.",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="container">
          <SectionTitle
            kicker="دراسات الحالة"
            title="أمثلة على نوع النتائج التي يستهدفها هذا المشروع"
            copy="هذه الصفحة تعرض أمثلة قريبة من نوع القيمة التي تقدمها: تحسين الانطباع، رفع التحويل، وتجهيز التشغيل الداخلي بشكل ينعكس على النمو."
          />

          <div className="grid-3">
            {studies.map((study) => (
              <article key={study.title} className="glass card">
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.7rem" }}>{study.title}</h3>
                <p className="section-copy" style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#fff" }}>النتيجة:</strong> {study.result}
                </p>
                <ul className="list-clean">
                  {study.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={18} color="#6ee7f9" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "1.1rem", color: "#6ee7f9", fontWeight: 800, display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  قراءة كتوجه تنفيذي
                  <ArrowUpLeft size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
