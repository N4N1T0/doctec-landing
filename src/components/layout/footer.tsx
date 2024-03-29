import { Logo } from '@/assets/'
import { navItems } from '@/constants'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Locale } from '@/i18n';

const Footer = () => {
  const locale = useLocale() as Locale

  return (
    <footer className='flex flex-col justify-center text-center items-center max-w-[1600px] mx-auto p-10 md:p-20 gap-8 bg-foreground text-background my-10'>
      <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 md:gap-0'>
        <div className='space-y-3'>
          <Image src={Logo} alt='Doctec World Logo' width={50} height={50} />
          <div className='flex gap-3 justify-center items-center'>
            <a href='https://web.facebook.com/doctecworld/?_rdc=1&_rdr' target='_blank' aria-label='Facebook Link' className='hover:bg-primary transition-colors duration-200 rounded-full p-2'><Facebook /></a>
            <a href='https://www.instagram.com/doctecworld/' target='_blank' aria-label='Instagram Link' className='hover:bg-primary transition-colors duration-200 rounded-full p-2'><Instagram /></a>
          </div>
        </div>
        <nav className='md:w-[500px]'>
          <ul className='flex flex-col md:flex-row justify-between items-center'>
            {navItems.map(item => (
              <li key={item.route}>
                <a href={item.route} className='hover:text-primary transition-colors duration-200'>{item.label[locale]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='text-center md:text-right space-y-3'>
          <a href='https://wa.me/34634113014?text=Hola,%20estoy%20interesad@%20en%20conocer%20más%20sobre%20los%20servicios%20que%20ofrece%20tu%20agencia.%20¿Podríamos%20hablar%20al%20respecto?' className='block hover:text-primary transition-colors duration-200' target='_blank'>+34 63 411 30 14</a>
          <a href='mailto:info@doctortecnologico.com' className='block hover:text-primary transition-colors duration-200'>info@doctortecnologico.com</a>
        </div>
      </div>
      <hr className='border-primary border-[0.7px] w-full' />
      <div>Copyright ©️2024 | Doctor Tecnológico | DOCTECWORLD</div>
    </footer>
  )
}

export default Footer