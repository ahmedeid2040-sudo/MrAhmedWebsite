import Link from 'next/link';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'الخدمات' },
  { href: '/case-studies', label: 'دراسات الحالة' },
  { href: '/contact', label: 'تواصل معي' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#11203f_0%,#050816_32%,#02040c_72%)] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute -left-16 top-72 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>
      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-lg font-extrabold tracking-tight text-white">
            أحمد عيد <span className="text-cyan-400">.</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20 hover:text-white"
          >
            احجز مكالمة تعريفية
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/8 bg-slate-950/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-400 lg:grid-cols-[1.2fr,1fr,1fr] lg:px-8">
          <div>
            <p className="mb-3 text-base font-bold text-white">موقع أحمد عيد — المرحلة الأولى</p>
            <p className="max-w-xl leading-7">
              واجهة براند شخصي احترافية مصممة لتكون نموذجًا حيًا للجودة التي تُباع للعميل: سرعة، وضوح، هيكلة محتوى، ورسائل بيع عملية.
            </p>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">روابط أساسية</p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">المرحلة القادمة</p>
            <ul className="space-y-2 leading-6">
              <li>لوحة تحكم لإدارة المحتوى والعملاء.</li>
              <li>إضافة قاعدة بيانات و CRM أساسي.</li>
              <li>ربط نماذج التواصل والتقارير التشغيلية.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="text-lg leading-8 text-slate-400">{description}</p>
    </div>
  );
}
