import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmed-eid-portfolio-pearl.vercel.app'),
  title: {
    default: 'أحمد عيد | بناء مواقع وأنظمة وأتمتة تخدم النمو',
    template: '%s | أحمد عيد',
  },
  description:
    'موقع أحمد عيد الشخصي لعرض خدمات بناء المواقع، أنظمة ERP، الأتمتة، والاستشارات التقنية بطريقة عملية موجّهة للنمو في مصر والخليج.',
  keywords: [
    'Ahmed Eid',
    'أحمد عيد',
    'تصميم مواقع',
    'ERP',
    'Automation',
    'لوحات تحكم',
    'استشارات تقنية',
    'مصر',
    'السعودية',
    'الإمارات',
  ],
  openGraph: {
    title: 'أحمد عيد | بناء مواقع وأنظمة وأتمتة تخدم النمو',
    description:
      'واجهة احترافية تعرض خدمات أحمد عيد في تطوير المواقع والأنظمة والأتمتة والاستشارات التقنية.',
    url: 'https://ahmed-eid-portfolio-pearl.vercel.app',
    siteName: 'Ahmed Eid',
    locale: 'ar_AR',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
