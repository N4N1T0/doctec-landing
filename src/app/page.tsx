import About from '@/components/about'
import Hero from '@/components/hero'
import Marquee from '@/components/marquee'
import PreFooter from '@/components/pre-footer'
import Process from '@/components/process'
import Projects from '@/components/projects'
import Servicios from '@/components/servicios'
import Testimonials from '@/components/testimonials'



export default function Home() {
  return (
    <main className='overflow-x-clip space-y-32'>
      <Hero />
      <About />
      <Projects />
      <Marquee />
      <Servicios />
      <Process />
      <Testimonials />
      <PreFooter />
      <Marquee withBbrands={false} />
    </main>
  )
}
