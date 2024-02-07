import { brands, servicios } from '@/constants/index'
import Image from 'next/image'
import React from 'react'

interface MarqueeProps {
  withBbrands?: boolean,
}

const completeServices = [...servicios.map((servicio) => servicio.label), 'Software', 'Coaching', 'Consultoria'];

const Marquee = ({ withBbrands = true }: MarqueeProps) => {
  // Array de info
  return (
    <div
      className='flex flex-col justify-between items-center w-full overflow-x-clip text-center gap-5 my-10'>
      {withBbrands ?
        <>
          <h3 className='text-secondary font-light'>Algunas otras marcas con las que hemos alcanzado el éxito</h3>
          <ul className='animate-marquee items-center justify-between flex w-full h-full hover:[animation-play-state:paused]'>
            {
              brands.map((brand) => (
                <li key={brand.label} className='mr-10 flex-shrink-0 hover:bg-primary transition-colors duration-200 p-5'>
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
            completeServices.map((servicio, index) => (
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