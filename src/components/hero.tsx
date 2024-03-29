import { HeroImage1, HeroImage2 } from '@/assets'
import Image from 'next/image'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero')

  return (
    <section id='hero' className='h-screen w-full relative grid content-center'>
      <div className='hero-gradient absolute w-full h-full z-0' />
      <div className='z-10 gap-4 2xl:gap-16 flex justify-center items-center flex-col px-7 md:px-10'>
        <h1 className='text-5xl md:text-8xl 2xl:text-9xl uppercase md:leading-[9vw] leading-[20vw] text-center font-light'>
          {t('h1-1')} <Image src={HeroImage1} width={300} height={140} alt='Una reunion de negocios con nuestros clientes' className='rounded-full inline object-cover aspect-video h-[120px]' priority /> <span className='font-bold'>Doctec</span> <span className='font-bold'>World</span> <Image src={HeroImage2} alt='Uno de nuestros especialistas compartiendo informacion' width={300} height={140} className='rounded-full inline object-cover aspect-video h-[120px]' priority /> <span className='w-[250px] text-base md:inline-block italic hidden'>{t('h1-span')}</span>
        </h1>
        <h2 className='text-center md:text-lg 2xl:text-xl px-5 font-light'>{t('h2')}</h2>
        <div className='gap-4 md:gap-10 flex flex-col md:flex-row'>
          <Button className='text-background p-4 2xl:p-7 2xl:text-lg' asChild><a href='https://wa.me/34634113014?text=Hola,%20estoy%20interesad@%20en%20conocer%20más%20sobre%20los%20servicios%20que%20ofrece%20tu%20agencia.%20¿Podríamos%20hablar%20al%20respecto?' target='_blank'>{t('button-1')}</a></Button>
          <Button className='text-background p-4 2xl:p-7 2xl:text-lg' asChild><a href='#proyectos'>{t('button-2')}</a></Button>
        </div>
      </div>
      <div
        className='w-10 h-16 border border-yellow-500 absolute right-6 md:right-12 md:bottom-12 bottom-2 flex justify-center items-center animate-bounce hover:[animation-play-state:paused]'
        title='desplazarse hacia abajo'>
        <svg fill='#FFFFFF' height='25px' width='25px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 511.93 511.93'>
          <g>
            <g>
              <path d='M476.738,280.436c-4.16-4.16-10.88-4.16-15.04,0l-195.2,195.2V10.996c0-5.333-3.84-10.133-9.067-10.88
			c-6.613-0.96-12.267,4.16-12.267,10.56v464.96l-195.093-195.2c-4.267-4.053-10.987-3.947-15.04,0.213
			c-3.947,4.16-3.947,10.667,0,14.827L248.365,508.81c4.16,4.16,10.88,4.16,15.04,0l213.333-213.333
			C480.898,291.423,480.898,284.596,476.738,280.436z'/>
            </g>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Hero