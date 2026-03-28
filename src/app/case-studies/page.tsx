import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionTitle, SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'دراسات الحالة',
  description: 'كيف تم تحويل القالب الأولي إلى واجهة احترافية قابلة للتوسع.',
  alternates: { canonical: '/case-studies' },
};

const items = [
  {
    title: 'قبل التعديل',
    body: 'المشروع كان صفحة واحدة فقط، به Branding قديم، وروابط محدودة، ولا يوضح بوضوح المرحلة الحالية ولا المرحلة القادمة.',
  },
  {
    title: 'بعد التعديل',
    body: 'أصبح هناك تموضع واضح، صفحات أساسية متعددة، Metadata محسّنة، وهيكل محتوى أنسب للعميل ومحركات البحث.',
  },
  {
    title: 'ما الذي سيأتي لاحقًا',
    body: 'إضافة لوحة تحكم، CRM، إدارة عملاء ومشاريع وفواتير، وربط نماذج التواصل بقاعدة بيانات وتشغيل آلي.',
  },
];

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <section className="container-shell py-16 md:py-24">
        <SectionTitle
          eyebrow="منهج التطوير"
          title="هذه المرحلة ليست الشكل النهائي — لكنها أصبحت أساسًا احترافيًا حقيقيًا"
          description="الهدف في المرحلة الأولى ليس إضافة كل شيء مرة واحدة، بل بناء واجهة قوية ومرتبة يمكن أن تنمو فوقها بقية المنصة بكفاءة وسرعة."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className="card-surface p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">0{index + 1}</p>
              <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>
              <p className="leading-8 text-slate-400">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 card-surface p-8">
          <h3 className="mb-4 text-2xl font-bold text-white">مكاسب المرحلة الأولى</h3>
          <ul className="space-y-3 leading-8 text-slate-300">
            <li>وضوح أكبر للرسالة البيعية.</li>
            <li>تحسين الانطباع الأول والهيبة البصرية.</li>
            <li>صفحات قابلة للفهرسة بدل الاعتماد على صفحة وحيدة فقط.</li>
            <li>أساس جاهز لإضافة الـ CMS وAdmin في المرحلة الثانية.</li>
          </ul>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">ابدأ المرحلة الثانية</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
