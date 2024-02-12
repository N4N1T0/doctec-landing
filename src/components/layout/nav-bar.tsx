import { Logo } from '@/assets/'
import Image from 'next/image'
import { Button } from '../ui/button'
import { navItems } from '@/constants/index'
import MobileNavSheet from './mobile-nav-sheet'
import LocaleSwitcher from './locale-switcher'
import { useLocale } from 'next-intl'
import { Locale } from '@/i18n'

const NavBar = () => {
  const locale = useLocale() as Locale

  return (
    <header className='w-full flex justify-between items-center p-5 2xl:p-10 absolute z-40'>
      <Image src={Logo} alt='Doctec World Logo' width={50} height={50} />
      <ul className='hidden sm:flex flex-1/2 bg-foreground text-background p-1'>
        {navItems.map((item) => (
          <li key={item.label[locale]} className='hover:bg-primary transition-colors duration-200 p-2 rounded-lg'>
            <a href={item.route}>{item.label[locale]}</a>
          </li>
        ))}
      </ul>
      <div className='flex gap-3'>
        <Button className='text-background p-5 hidden sm:flex' asChild><a href='https://wa.me/34634113014?text=Hola,%20estoy%20interesad@%20en%20conocer%20más%20sobre%20los%20servicios%20que%20ofrece%20tu%20agencia.%20¿Podríamos%20hablar%20al%20respecto?' target='_blank'>{locale === 'en' ? 'Contact' : 'Contactar'}</a></Button>
        <div className='hidden sm:block'>
          <LocaleSwitcher />
        </div>
        <MobileNavSheet />
      </div>
    </header>
  )
}

export default NavBar