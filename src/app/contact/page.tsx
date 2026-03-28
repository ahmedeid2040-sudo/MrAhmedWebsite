import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { SectionTitle, SiteShell } from "@/components/site-shell";

const contactCards = [
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "أضف رقمك النهائي هنا",
    note: "أفضل قناة للبداية السريعة وجمع تفاصيل المشروع.",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "ahmed.eid.2040@gmail.com",
    note: "مناسب لاستقبال المتطلبات المنظمة أو الملفات المرتبطة بالمشروع.",
  },
  {
    icon: MapPin,
    title: "النطاق الجغرافي",
    value: "مصر + الخليج",
    note: "العمل عن بُعد مع استهداف واضح لسوق السعودية والإمارات.",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="container grid-2">
          <div>
            <SectionTitle
              kicker="تواصل معي"
              title="جاهز تبني موقعًا يبيعك ونظامًا يوسعك؟"
              copy="املأ النموذج المبدئي، وسأساعدك في تحديد أنسب نقطة بداية حسب وضعك الحالي: واجهة بيع فقط، أو واجهة + نظام تشغيل داخلي، أو خارطة انتقال كاملة."
            />

            <div className="grid-1" style={{ display: "grid", gap: "1rem" }}>
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="glass card">
                    <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          display: "grid",
                          placeItems: "center",
                          borderRadius: 16,
                          background: "rgba(110,231,249,0.08)",
                          border: "1px solid rgba(110,231,249,0.16)",
                        }}
                      >
                        <Icon size={22} color="#6ee7f9" />
                      </div>
                      <div>
                        <h3 style={{ marginBottom: "0.35rem" }}>{card.title}</h3>
                        <p style={{ fontWeight: 800, margin: 0 }}>{card.value}</p>
                        <p className="small-muted">{card.note}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass card" style={{ background: "var(--card-strong)" }}>
            <h3 style={{ fontSize: "1.6rem", marginTop: 0 }}>نموذج تواصل مبدئي</h3>
            <p className="small-muted">
              هذه نسخة واجهة فقط في المرحلة الحالية. النموذج هنا ثابت بصريًا، ويمكن ربطه لاحقًا بقاعدة بيانات أو
              بريد أو WhatsApp API أو n8n.
            </p>

            <form style={{ display: "grid", gap: "0.9rem", marginTop: "1rem" }}>
              <input className="field" placeholder="الاسم" />
              <input className="field" placeholder="البريد الإلكتروني" />
              <input className="field" placeholder="رقم الموبايل أو الواتساب" />
              <select className="field" defaultValue="">
                <option value="" disabled>
                  نوع الخدمة المطلوبة
                </option>
                <option>موقع شخصي / تجاري</option>
                <option>لوحة تحكم أو نظام داخلي</option>
                <option>أتمتة وربط أدوات</option>
                <option>خطة تنفيذ كاملة</option>
              </select>
              <textarea
                className="textarea"
                placeholder="اكتب نبذة سريعة عن المشروع أو الوضع الحالي الذي تريد تطويره"
              />
              <button type="button" className="button button-primary" style={{ width: "100%" }}>
                <PhoneCall size={18} />
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
