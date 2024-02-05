import Image from 'next/image'
import Logo from '@/assets/Logo Negativo.png'
import AboutPic from '@/assets/louise-viallesoubranne-5EhN4wbfvBc-unsplash.jpg'
import { key } from '@/constants'

const About = () => {
  return (
    <section id='nosotros' className='space-y-14 mb-16'>
      <div className='w-full flex flex-col md:flex-row justify-between items-center px-5 mx-auto max-w-[1600px] gap-5 md:gap-0'>
        <div className='flex-[30%] space-y-10'>
          <h3 className='uppercase text-2xl'>Acerca de Doctec World</h3>
          <Image src={Logo} alt='Doctec World Logo' width={50} height={50} />
        </div>
        <p className='flex-[30%] text-lg'>Doctec World es una distinguida agencia de Marketing y Desarrollo Web con sede en Marbella, conocida por nuestro compromiso de crear experiencias digitales excepcionales. <br /><br /> Desde 2018, Doctec World ha estado remodelando los negocios en linea con un diseño de primer nivel y el poder de las nuevas tecnicas de Marketing Digital.</p>
      </div>
      <Image src={AboutPic} alt='Una toma area de una mesa de reuniones' className='w-full h-[620px] object-cover' />
      <div className='w-full flex flex-col md:flex-row justify-between items-center px-5 mx-auto max-w-[1600px] gap-5 md:gap-0'>
        <h3 className='uppercase text-2xl flex-[30%]'>CONOCE NUESTROS DATOS CLAVE</h3>
        <ul className='flex-[30%] flex justify-between items-center'>
          {key.map(item => {
            const finalChar = item.label.charAt(item.label.length - 1);
            const restChar = item.label.split('').slice(0, -1).join('')

            return (
              <li key={item.subLabel} className='space-y-3'>
                <strong className='text-3xl md:text-5xl'>{restChar}<span className='text-primary'>{finalChar}</span></strong>
                <p className='text-sm md:text-base'>{item.subLabel}</p>
              </li>
            )
          }
          )}
        </ul>
      </div>
    </section>
  )
}

export default About