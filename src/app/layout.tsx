import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrahmedwebsite.vercel.app"),
  title: {
    default: "أحمد عيد | مواقع احترافية وأنظمة أعمال ذكية",
    template: "%s | Ahmed Eid",
  },
  description:
    "موقع أحمد عيد الشخصي لعرض خدمات تطوير المواقع، الأنظمة المخصصة، الأتمتة، والاستشارات التقنية للشركات ورواد الأعمال في مصر والخليج.",
  keywords: [
    "أحمد عيد",
    "Ahmed Eid",
    "تطوير مواقع",
    "متاجر إلكترونية",
    "أنظمة ERP",
    "أتمتة الأعمال",
    "لوحات تحكم",
    "Next.js",
    "حلول رقمية",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "أحمد عيد | مواقع احترافية وأنظمة أعمال ذكية",
    description:
      "مطور حلول رقمية يساعد الشركات في بناء مواقع احترافية، أنظمة تشغيل داخلية، وأتمتة قابلة للتوسع.",
    url: "https://mrahmedwebsite.vercel.app",
    siteName: "Ahmed Eid",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "أحمد عيد | مواقع احترافية وأنظمة أعمال ذكية",
    description:
      "حلول رقمية وأنظمة أعمال ذكية للشركات ورواد الأعمال في مصر والخليج.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
