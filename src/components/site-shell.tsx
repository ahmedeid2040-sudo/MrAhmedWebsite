import Link from "next/link";

type SiteShellProps = {
  children: React.ReactNode;
};

const navItems = [
  { href: "#services", label: "الخدمات" },
  { href: "#why-me", label: "لماذا أنا" },
  { href: "#work", label: "الأعمال" },
  { href: "#contact", label: "تواصل" },
];

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-ring -right-24 top-24 h-80 w-80 opacity-40" />
        <div className="hero-ring -left-28 top-[32rem] h-96 w-96 opacity-20" />
        <div className="absolute left-[8%] top-24 h-36 w-36 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute right-[10%] top-40 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-52 w-52 rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/6 bg-[#07111f]/70 backdrop-blur-xl">
        <div className="container-shell flex min-h-[84px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-lg font-black text-white">
              AE
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-300">Ahmed Eid</div>
              <div className="text-base font-extrabold tracking-tight text-white">
                أحمد عيد
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="btn-secondary hidden sm:inline-flex">
              تسجيل الدخول
            </Link>
            <a href="#contact" className="btn-primary">
              احجز استشارة
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/6 bg-black/10">
        <div className="container-shell grid gap-10 py-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 font-black text-white">
                AE
              </div>
              <div>
                <div className="text-sm text-slate-400">Ahmed Eid</div>
                <div className="font-bold text-white">حلول رقمية وأنظمة أعمال ذكية</div>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400">
              أبني واجهات رقمية فاخرة وأنظمة أعمال مخصصة تساعد الشركات ورواد
              الأعمال على النمو، الأتمتة، والعمل بكفاءة أعلى في مصر والخليج.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            <a href="#services" className="footer-link">
              الخدمات
            </a>
            <a href="#work" className="footer-link">
              سابقة الأعمال
            </a>
            <a href="#contact" className="footer-link">
              تواصل معي
            </a>
            <Link href="/login" className="footer-link">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
