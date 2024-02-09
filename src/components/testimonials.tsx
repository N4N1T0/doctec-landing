import { testimonials } from '@/constants'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TestimonialCard from './shared/testimonial-card'
import { useLocale, useTranslations } from 'next-intl'

const Testimonials = () => {
  const t = useTranslations('testimonials')
  const locale = useLocale()

  return (
    <section id='testimonios' className='flex flex-col justify-center items-center max-w-[1600px] mx-auto px-2 md:px-10 gap-16' >
      <h3 className='uppercase text-2xl text-center'>{t('h3')}</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {testimonials[locale].map(testimonial => (
            <CarouselItem key={testimonial.client.name} className="md:basis-1/2 2xl:basis-1/3 grow flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default Testimonials