import Link from "next/link";
import { ArrowLeft, PhoneCall } from "lucide-react";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/case-studies", label: "دراسات الحالة" },
  { href: "/contact", label: "تواصل معي" },
  { href: "/login", label: "تسجيل الدخول" },
];

export function SectionTitle({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <span className="kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy" style={{ maxWidth: "64ch" }}>
        {copy}
      </p>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 40, backdropFilter: "blur(12px)" }}>
        <div className="container" style={{ paddingTop: "1rem" }}>
          <div
            className="glass"
            style={{
              borderRadius: 999,
              padding: "0.9rem 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Link href="/" style={{ fontWeight: 900, fontSize: "1.1rem" }}>
              Ahmed Eid
            </Link>

            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {links.map((link) => (
                <Link key={link.href} href={link.href} style={{ color: "#dbe6f2", fontWeight: 700 }}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link href="/contact" className="button button-primary">
              احجز مكالمة
              <PhoneCall size={18} />
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer-line" style={{ padding: "1.6rem 0", marginTop: "2rem" }}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong style={{ display: "block", marginBottom: "0.3rem" }}>Ahmed Eid</strong>
            <span className="small-muted">
              مواقع احترافية، أنظمة تشغيل داخلية، وأتمتة أعمال قابلة للتوسع.
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/services" className="button button-secondary">
              استعرض الخدمات
              <ArrowLeft size={18} />
            </Link>
            <Link href="/login" className="button button-secondary">
              دخول لوحة التحكم
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
