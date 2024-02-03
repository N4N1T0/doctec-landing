import HeroImage1 from '@/assets/headway-5QgIuuBxKwM-unsplash (1).jpg'
import HeroImage2 from '@/assets/linkedin-sales-solutions-YDVdprpgHv4-unsplash.jpg'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section id='hero' className='h-[90vh] w-full relative grid content-center'>
      <div className="hero-gradient absolute w-full h-full z-0" />
      <div className='z-10 md:gap-20 gap-16 flex justify-center items-center flex-col'>
        <h1 className='text-5xl md:text-9xl uppercase md:leading-[9vw] leading-[20vw] text-center'>
          Somos <Image src={HeroImage1} alt='Una reunion de negocios con nuestros clientes' className='rounded-full inline object-cover h-[50px] w-[100px] md:h-[130px] md:w-[300px]' /> <span className='font-bold'>Doctec</span> <span className='font-bold'>World</span> <Image src={HeroImage2} alt='' className='rounded-full inline object-cover h-[50px] w-[100px] md:h-[130px] md:w-[300px]' /> <span className='w-[250px] text-base md:inline-block italic hidden'>somos agencia de marketing y desarrollo web del futuro</span>
        </h1>
        <h2 className='text-center md:text-xl px-5'>Aplicamos las últimas tendencias en marketing digital, combinadas con tecnologías de vanguardia en el desarrollo de software.</h2>
        <div className='gap-5 md:gap-10 flex flex-col md:flex-row'>
          <Button className='text-background md:p-7 md:text-lg'>Contacta con nosotros</Button>
          <Button className='text-background md:p-7 md:text-lg'>Proyectos Realizados</Button>
        </div>
      </div>
      <div
        className='w-12 h-20 rounded-xl border border-yellow-500 absolute right-10 md:right-12 md:bottom-12 bottom-2 flex justify-center items-center animate-bounce hover:[animation-play-state:paused]'
        title='desplazarse hacia abajo'>
        <svg fill="#FFFFFF" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.93 511.93">
          <g>
            <g>
              <path d="M476.738,280.436c-4.16-4.16-10.88-4.16-15.04,0l-195.2,195.2V10.996c0-5.333-3.84-10.133-9.067-10.88
			c-6.613-0.96-12.267,4.16-12.267,10.56v464.96l-195.093-195.2c-4.267-4.053-10.987-3.947-15.04,0.213
			c-3.947,4.16-3.947,10.667,0,14.827L248.365,508.81c4.16,4.16,10.88,4.16,15.04,0l213.333-213.333
			C480.898,291.423,480.898,284.596,476.738,280.436z"/>
            </g>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Hero