import { testimonials } from '@/constants'
import TestimonialCard from './shared/testimonial-card'

const Testimonials = () => {
  return (
    <section id='testimonios' className='flex flex-col justify-center items-center max-w-[1600px] mx-auto px-2 md:px-10 gap-16' >
      <h3 className='uppercase text-2xl text-center'>Testimonios de nuestros clientes</h3>
      <ul className='flex w-full flex-col md:flex-row justify-between items-center gap-10'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.client.name} testimonial={testimonial} index={index} />
        ))}
      </ul>
    </section>
  )
}

export default Testimonials