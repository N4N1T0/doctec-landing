import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Quotes } from './icons'

interface TestimonialCardProps {
  testimonial: {
    highlight: string
    testimonial: string
    client: {
      name: string
      position: string
      picture: StaticImageData
    }
  }
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className='p-10 bg-foreground text-background space-y-7 relative shrink-0 grow'>
      <h4 className='text-3xl pr-5'>{testimonial.highlight}</h4>
      <p className='font-light text-black'>{testimonial.testimonial}</p>
      <hr className='border-primary border-[0.7px]' />
      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-5 items-center justify-center'>
          <Image src={testimonial.client.picture} alt={testimonial.client.name} width={100} height={100} className='rounded-full' />
          <div className='space-y-1'>
            <h5 className='font-bold'>{testimonial.client.name}</h5>
            <p className='font-light'>{testimonial.client.position}</p>
          </div>
        </div>
      </div>
      <Quotes className='absolute -top-3 right-3 hidden md:block' />
    </div>
  )
}

export default TestimonialCard