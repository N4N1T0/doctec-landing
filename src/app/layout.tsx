import { Open_Sans } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';
import Courtain from '@/components/courtain';

import { DoctecMetatags } from '@/components/layout/metatag-seo';
import { WebVitals } from '@/components/layout/web-vitals';

const openSans = Open_Sans({ subsets: ['latin'], weight: ['300', '500', '700', '800'] });

export const metadata = DoctecMetatags

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={`${openSans.className} relative`}>
        {process.env.NODE_ENV === 'development' ? <WebVitals /> : null}
        <Courtain />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
