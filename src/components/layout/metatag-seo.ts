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
    date: true,
    url: true,
  },
  openGraph: {
    title: 'Doctec World | Agencia de Marketing y Desarrollo',
    description: 'somos una agencia de marketing y desarrollo web del futuro | Aplicamos las últimas tendencias en marketing digital y Desarrollo Web',
    url: process.env.SITE_URL,
    siteName: 'Doctec World',
    locale: 'es_ES',
    type: 'website',
    countryName: 'España',
    emails: 'info@doctortecnologico.com',
    phoneNumbers: '34634113014',
    images: ['https://opengraph.b-cdn.net/production/documents/2d5cf489-15fa-4149-afd0-bbd4f40f6fa6.jpg?token=kk6G_2Ww0GHyibsYWNm4VCBfz7JGFTKiepyDQ88g5dM&height=631&width=1200&expires=33243731096']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doctec World | Agencia de Marketing y Desarrollo',
    description: 'somos una agencia de marketing y desarrollo web del futuro | Aplicamos las últimas tendencias en marketing digital y Desarrollo Web',
    creator: 'Adrian Alvarez',
    site: process.env.SITE_URL,
    images: ['https://opengraph.b-cdn.net/production/documents/2d5cf489-15fa-4149-afd0-bbd4f40f6fa6.jpg?token=kk6G_2Ww0GHyibsYWNm4VCBfz7JGFTKiepyDQ88g5dM&height=631&width=1200&expires=33243731096'],
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