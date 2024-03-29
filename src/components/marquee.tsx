import { brands, servicios } from '@/constants/index'
import Image from 'next/image'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl';
import { Locale } from '@/i18n';

interface MarqueeProps {
  withBbrands?: boolean,
}

const Marquee = ({ withBbrands = true }: MarqueeProps) => {
  const t = useTranslations('marquee')
  const locale = useLocale() as Locale

  return (
    <div
      className='flex flex-col justify-between items-center w-full overflow-x-clip text-center gap-5 my-10'>
      {withBbrands ?
        <>
          <h3 className='text-secondary font-light'>{t('h3')}</h3>
          <ul className='animate-marquee items-center justify-between flex w-full h-full hover:[animation-play-state:paused]'>
            {
              brands.map((brand) => (
                <li key={brand.label} className='mr-10 flex-shrink-0 p-5'>
                  <Image
                    src={brand.image}
                    alt={brand.label}
                    title={brand.label}
                    width={120}
                    height={120}
                    className='w-auto h-auto'
                  />
                </li>
              ))
            }
          </ul>
        </>
        :
        <ul className='animate-marquee items-center justify-between flex w-full h-full hover:[animation-play-state:paused]'>
          {
            locale === 'es' ?
              [...servicios.es.map((servicio) => servicio.label), 'Software', 'Coaching', 'Consultoria'].map((servicio, index) => (
                <li key={servicio} className='mr-10 flex-shrink-0 p-5 flex gap-3 justify-center items-center'>
                  <small>0{index + 1}</small>
                  <h2 className='text-3xl font-light'>{servicio}</h2>
                </li>
              ))
              :
              [...servicios.en.map((servicio) => servicio.label), 'Software', 'Coaching', 'Consultory'].map((servicio, index) => (
                <li key={servicio} className='mr-10 flex-shrink-0 p-5 flex gap-3 justify-center items-center'>
                  <small>0{index + 1}</small>
                  <h2 className='text-3xl font-light'>{servicio}</h2>
                </li>
              ))
          }
        </ul>
      }
    </div>
  )
}

export default Marquee