import Link from 'next/link';
import { ArrowUpLeft, BarChart3, CheckCircle2, Database, LayoutPanelTop, Workflow } from 'lucide-react';
import { SectionTitle, SiteShell } from '@/components/site-shell';

const stats = [
  { value: 'واجهة أسرع', label: 'هيكلة واضحة وتجربة أولى احترافية' },
  { value: '3 مسارات', label: 'خدمات، دراسات حالة، وتواصل مباشر' },
  { value: 'SEO جاهز', label: 'Metadata و sitemap و robots' },
  { value: 'مرحلة أولى', label: 'جاهزة للتوسع إلى لوحة تحكم' },
];

const services = [
  {
    icon: Database,
    title: 'أنظمة تشغيل داخلية و ERP',
    text: 'بناء أنظمة مخصصة لإدارة العمليات، الحسابات، والمخزون، مع قابلية واضحة للتوسع وربط الأتمتة لاحقًا.',
  },
  {
    icon: LayoutPanelTop,
    title: 'مواقع ومتاجر عالية التحويل',
    text: 'مواقع سريعة وفخمة بصريًا، مصممة لتوضّح القيمة، ترفع الثقة، وتحول الزائر إلى فرصة بيع فعلية.',
  },
  {
    icon: Workflow,
    title: 'أتمتة وربط العمليات',
    text: 'تبسيط دورة العمل بين التسويق والمبيعات والتشغيل عبر Webhooks وأدوات الأتمتة مثل n8n.',
  },
  {
    icon: BarChart3,
    title: 'استشارات نمو وتنفيذ',
    text: 'تحويل الفوضى إلى خطة تشغيلية عملية: عروض، تسعير، متابعة leads، وإغلاق صفقات بنظام قابل للقياس.',
  },
];

const phases = [
  'تصحيح الهوية بالكامل وإزالة أي Branding قديم.',
  'تأسيس واجهة بيع واضحة ومقنعة باللغة العربية.',
  'إضافة صفحات أساسية قابلة للأرشفة والفهرسة.',
  'تجهيز البنية للتوسعة في المرحلة التالية إلى لوحة تحكم وقاعدة بيانات.',
];

const caseStudies = [
  {
    title: 'موقعك كنموذج حي للعميل',
    text: 'العميل لا يسمع فقط أنك تبني أنظمة ومواقع؛ بل يرى ذلك مباشرة في موقعك من سرعة، وضوح، وهيكل بيع احترافي.',
  },
  {
    title: 'هيكلة تخدم مصر والخليج',
    text: 'الرسائل مكتوبة بحيث تُخاطب مالك البيزنس الذي يريد نتيجة، لا مجرد تصميم جميل أو تقنية مبعثرة.',
  },
  {
    title: 'جاهزية للمرحلة الثانية',
    text: 'البنية الحالية مهيأة لإضافة CMS و CRM وفواتير ومشاريع لاحقًا دون إعادة بناء الواجهة من الصفر.',
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="container-shell pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              المرحلة الأولى: واجهة براند شخصي قابلة للتوسع
            </span>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              موقع شخصي يبيعك كخبير، ويعمل في نفس الوقت <span className="text-cyan-400">كدليل حي</span> على جودة شغلك.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              أحمد عيد — أبني واجهات بيع احترافية، وأنظمة تشغيل داخلية، ومسارات نمو يمكن إدارتها لاحقًا من لوحة تحكم واحدة.
              هذه النسخة تركز على البراند، الرسائل، السرعة، والجاهزية للمرحلة القادمة.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                ابدأ التحدث عن مشروعك
              </Link>
              <Link href="/services" className="btn-secondary">
                استعرض الخدمات
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card-surface p-5">
                  <p className="text-xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface p-6 md:p-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">ما تم تحسينه</p>
            <div className="space-y-4">
              {phases.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/35 p-4">
                  <CheckCircle2 className="mt-0.5 size-5 text-cyan-400" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16 md:py-24">
        <SectionTitle
          eyebrow="الخدمات"
          title="رسائل واضحة، تموضع أوضح، وخدمات مرتبة حسب ما يهم العميل"
          description="بدل صفحة واحدة عامة، أصبحت الهوية أوضح: ماذا تقدم، لمن، ولماذا هذه الخدمات تساوي استثمارًا لا مجرد تكلفة."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card-surface p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">{service.title}</h3>
                <p className="leading-8 text-slate-400">{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-shell py-16 md:py-24">
        <SectionTitle
          eyebrow="لماذا هذه النسخة أفضل"
          title="الموقع نفسه أصبح أداة بيع، لا مجرد سيرة ذاتية"
          description="النسخة الحالية توضح ما تفعله بسرعة، وتفتح للعميل ثلاث خطوات واضحة: يفهم القيمة، يرى المنهج، ثم يتواصل."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="card-surface p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>
              <p className="leading-8 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="card-surface overflow-hidden p-8 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">الخطوة التالية</p>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">نقل الموقع من واجهة تسويقية قوية إلى منصة تشغيل كاملة.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                في المرحلة الثانية سنضيف لوحة تحكم، إدارة محتوى، leads، عملاء، مشاريع، وفواتير أساسية فوق نفس الأساس الحالي بدون خسارة العمل المنجز.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href="/case-studies" className="btn-secondary">
                شاهد منطق التطوير
              </Link>
              <Link href="/contact" className="btn-primary">
                انتقل للمرحلة التالية <ArrowUpLeft className="ms-2 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
