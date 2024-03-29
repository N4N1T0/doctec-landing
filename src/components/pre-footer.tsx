import React from 'react'
import { Button } from './ui/button'
import { preFooterStats } from '@/constants'
import { Check } from './shared/icons'
import { useLocale, useTranslations } from 'next-intl'
import { Locale } from '@/i18n'

const PreFooter = () => {
  const t = useTranslations('prefooter')
  const locale = useLocale() as Locale

  return (
    <section className='flex flex-col justify-center text-center items-center max-w-[1600px] mx-auto px-10 py-10 md:py-20 gap-8 bg-primary/80 text-background'>
      <h3 className='uppercase text-4xl md:text-5xl md:w-2/3 px-5'>{t('h3')}</h3>
      <p>{t('p')}</p>
      <Button className='bg-background text-foreground p-4 2xl:p-7 2xl:text-lg'><a href='https://wa.me/34634113014?text=Hola,%20estoy%20interesad@%20en%20conocer%20más%20sobre%20los%20servicios%20que%20ofrece%20tu%20agencia.%20¿Podríamos%20hablar%20al%20respecto?' target='_blank'>{t('button')}</a></Button>
      <ul className='md:w-2/3 flex justify-between items-center flex-col md:flex-row gap-2 md:gap-0'>
        {preFooterStats[locale].map(stat => (
          <li key={stat} className='flex gap-2 justify-center items-center'>
            <Check />
            <small>{stat}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PreFooter