import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navItems } from '@/constants/index'
import { Button } from '../ui/button'
import LocaleSwitcher from './locale-switcher'
import { useLocale } from 'next-intl'
import { Locale } from '@/i18n'

const MobileNavSheet = () => {
  const locale = useLocale() as Locale

  return (
    <Sheet>
      <SheetTrigger className='bg-primary block sm:hidden cursor-pointer w-12 h-10' asChild>
        <svg width='800px' height='800px' viewBox='0 0 12 12' enableBackground='new 0 0 12 12' version='1.1' xmlns='http://www.w3.org/2000/svg'>
          <g>
            <rect fill='#1D1D1B' height='1' width='11' x='0.5' y='5.5' />
            <rect fill='#1D1D1B' height='1' width='11' x='0.5' y='2.5' />
            <rect fill='#1D1D1B' height='1' width='11' x='0.5' y='8.5' />
          </g>
        </svg>
      </SheetTrigger>
      <SheetContent>
        <ul className='pt-10 space-y-5'>
          {navItems.map((item) => (
            <li key={item.label[locale]} className='hover:bg-primary transition-colors duration-200 p-2 rounded-lg'>
              <a href={item.route}>{item.label[locale]}</a>
            </li>
          ))}
          <li>
            <Button className='text-background p-5' asChild><a href='https://wa.me/34634113014?text=Hola,%20estoy%20interesad@%20en%20conocer%20más%20sobre%20los%20servicios%20que%20ofrece%20tu%20agencia.%20¿Podríamos%20hablar%20al%20respecto?' target='_blank'>{locale === 'en' ? 'Contact' : 'Contactar'}</a></Button>
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavSheet