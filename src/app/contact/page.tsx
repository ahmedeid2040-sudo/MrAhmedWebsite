import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle, PhoneCall } from 'lucide-react';
import { SectionTitle, SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'تواصل معي',
  description: 'ابدأ الحديث عن مشروعك أو اطلب المرحلة التالية من تطوير الموقع.',
  alternates: { canonical: '/contact' },
};

const contactOptions = [
  {
    title: 'بريد إلكتروني',
    value: 'ahmed.eid.2040@gmail.com',
    href: 'mailto:ahmed.eid.2040@gmail.com',
    icon: Mail,
  },
  {
    title: 'واتساب / مكالمة',
    value: 'أضف رقمك النهائي هنا',
    href: '#',
    icon: PhoneCall,
  },
  {
    title: 'رسالة سريعة',
    value: 'ابدأ بجملة: عندي مشروع وأريد النسخة التالية',
    href: 'mailto:ahmed.eid.2040@gmail.com?subject=مرحلة%20ثانية%20للموقع',
    icon: MessageCircle,
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="container-shell py-16 md:py-24">
        <SectionTitle
          eyebrow="التواصل"
          title="الخطوة التالية واضحة: ابدأ بمتطلباتك ثم ابنِ المرحلة الثانية"
          description="هذه الصفحة مقصودة لتكون بسيطة ومباشرة. يمكنك لاحقًا تحويلها إلى نموذج متصل بقاعدة بيانات، CRM، وAutomation flows."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr,0.9fr]">
          <div className="card-surface p-8">
            <h3 className="mb-5 text-2xl font-bold text-white">ماذا تضيف في المرحلة القادمة؟</h3>
            <ul className="space-y-4 leading-8 text-slate-300">
              <li>نموذج تواصل مرتبط بقاعدة البيانات.</li>
              <li>إدارة Leads داخل لوحة تحكم.</li>
              <li>تصنيف العملاء والخدمات المطلوبة.</li>
              <li>إصدار عروض أسعار وفواتير أولية.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/services" className="btn-secondary">ارجع إلى الخدمات</Link>
              <Link href="/case-studies" className="btn-primary">راجع المنهج</Link>
            </div>
          </div>
          <div className="grid gap-4">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <a key={option.title} href={option.href} className="card-surface block p-6 transition hover:border-cyan-300/30 hover:bg-white/7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="size-5" />
                  </div>
                  <p className="mb-2 text-xl font-bold text-white">{option.title}</p>
                  <p className="leading-7 text-slate-400">{option.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
