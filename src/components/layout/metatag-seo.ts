import { Metadata } from 'next';

export const DoctecMetatags: Metadata = {
  title: 'Doctec World | Agencia de Marketing y Desarrollo',
  description: 'somos una agencia de marketing y desarrollo web del futuro | Aplicamos las últimas tendencias en marketing digital y Desarrollo Web',
  authors: [{ name: 'Adrian Alvarez', url: 'https://www.adrian-alvarez.dev/es/' }],
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['agencia digital', 'marketing', 'desarrollo web', 'community manager', 'marketing digital', 'diseño grafico', 'branding', 'seo', 'software a medida', 'coaching', 'consultoria', 'marbella', 'malaga', 'andalucia', 'españa'],
  creator: 'Adrian Alvarez',
  publisher: 'Doctor Tecnologico',
  category: 'Agencia de Marketing y Desarrollo',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Doctec World | Agencia de Marketing y Desarrollo',
    description: 'somos una agencia de marketing y desarrollo web del futuro | Aplicamos las últimas tendencias en marketing digital y Desarrollo Web',
    url: '',
    siteName: 'Doctec World',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'My custom alt',
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrian \'Nano\' Alvarez',
    description: 'somos una agencia de marketing y desarrollo web del futuro | Aplicamos las últimas tendencias en marketing digital y Desarrollo Web',
    creator: '@nextjs',
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
   robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}