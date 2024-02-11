import { Open_Sans } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';
import Courtain from '@/components/courtain';
import { DoctecMetatags } from '@/components/layout/metatag-seo';
import { WebVitals } from '@/components/layout/web-vitals';
import { locales } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { SpeedInsights } from '@vercel/speed-insights/next'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const openSans = Open_Sans({ subsets: ['latin'], weight: ['300', '500', '700', '800'] });

export const metadata = DoctecMetatags

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={`${openSans.className} relative bg-background text-foreground`}>
        {process.env.NODE_ENV === 'development' ? <WebVitals /> : <SpeedInsights />}
        <Courtain />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
