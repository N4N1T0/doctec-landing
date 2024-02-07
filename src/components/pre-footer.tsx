import React from 'react'
import { Button } from './ui/button'
import { preFooterStats } from '@/constants'
import { Check } from './shared/icons'

const PreFooter = () => {
  return (
    <section className='flex flex-col justify-center text-center items-center max-w-[1600px] mx-auto px-10 py-10 md:py-20 gap-8 bg-primary/80 text-background'>
      <h3 className='uppercase text-4xl md:text-5xl md:w-2/3 px-5'>Soluciones innovadoras de web, marketing y branding</h3>
      <p>Únase hoy mismo y experimente la diferencia. No pierda la oportunidad de transformar su negocio: ¡crezcamos juntos!</p>
      <Button className='bg-background text-foreground p-4 2xl:p-7 2xl:text-lg'>Contacta con nosotros</Button>
      <ul className='md:w-2/3 flex justify-between items-center flex-col md:flex-row'>
        {preFooterStats.map(stat => (
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