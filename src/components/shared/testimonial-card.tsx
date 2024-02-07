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
      company: StaticImageData
    }
  }
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <li key={testimonial.client.name} className='p-10 bg-foreground text-background space-y-7 flex-1 flex-shrink-0 flex-grow relative'>
      <h4 className='text-3xl'>{testimonial.highlight}</h4>
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
        <Image src={testimonial.client.company} alt={testimonial.client.name} width={100} height={50} className='bg-primary p-3 md:block hidden' />
      </div>
      <Quotes className='absolute -top-12 right-5' />
    </li>
  )
}

export default TestimonialCard