import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionTitle, SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'الخدمات',
  description: 'خدمات أحمد عيد في بناء المواقع والأنظمة والأتمتة والاستشارات التشغيلية.',
  alternates: { canonical: '/services' },
};

const blocks = [
  {
    title: 'مواقع وهوية رقمية تخدم البيع',
    points: ['واجهة فخمة وسريعة', 'نسخة عربية موجّهة للقرار', 'صفحات منظمة وقابلة للأرشفة', 'جاهزية للتوسعة لاحقًا'],
  },
  {
    title: 'أنظمة تشغيل وإدارة',
    points: ['ERP مخصص', 'متابعة عملاء ومشاريع', 'تقارير تشغيلية', 'قابلية ربط الأتمتة'],
  },
  {
    title: 'أتمتة وربط العمليات',
    points: ['Lead intake', 'رسائل وتنبيهات', 'تحديثات حالة المشاريع', 'ربط بين النماذج وقواعد البيانات'],
  },
  {
    title: 'استشارات تنفيذية',
    points: ['تحليل الوضع الحالي', 'بناء عرض القيمة', 'تنظيم مسارات البيع', 'خطة تنفيذ بالأولويات'],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="container-shell py-16 md:py-24">
        <SectionTitle
          eyebrow="خدمات أحمد عيد"
          title="ما الذي يمكن بناؤه فوق هذه الواجهة؟"
          description="هذه المرحلة تركز على الواجهة والبراند. لكن الأساس الذي تم ترتيبه يسمح بإضافة نظام داخلي متكامل في المرحلة القادمة دون إعادة البناء من الصفر."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="card-surface p-8">
              <h3 className="mb-5 text-2xl font-bold text-white">{block.title}</h3>
              <ul className="space-y-3 text-slate-300">
                {block.points.map((point) => (
                  <li key={point} className="rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">اطلب نسخة مخصصة لبيزنسك</Link>
          <Link href="/case-studies" className="btn-secondary">شاهد المنهج ودراسات الحالة</Link>
        </div>
      </section>
    </SiteShell>
  );
}
