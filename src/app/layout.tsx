import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "Ahmed Eid | أحمد عيد",
    template: "%s | Ahmed Eid",
  },
  description:
    "أحمد عيد - مستشار تقني ومطور حلول رقمية وأنظمة أعمال مخصصة للشركات ورواد الأعمال في مصر والخليج.",
  keywords: [
    "Ahmed Eid",
    "أحمد عيد",
    "مطور مواقع",
    "تطوير متاجر إلكترونية",
    "أنظمة ERP",
    "أتمتة الأعمال",
    "Business Automation",
    "Custom ERP",
    "Next.js",
    "Laravel",
  ],
  metadataBase: new URL("https://mrahmedwebsite.vercel.app"),
  openGraph: {
    title: "Ahmed Eid | أحمد عيد",
    description:
      "موقع شخصي احترافي يعرض خدمات أحمد عيد في تطوير المواقع، الأنظمة المخصصة، وأتمتة الأعمال.",
    url: "https://mrahmedwebsite.vercel.app",
    siteName: "Ahmed Eid",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Eid | أحمد عيد",
    description:
      "مستشار تقني ومطور حلول رقمية وأنظمة أعمال مخصصة للشركات ورواد الأعمال.",
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
      <body className={`${cairo.variable} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
