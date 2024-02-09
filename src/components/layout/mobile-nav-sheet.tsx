import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navItems } from '@/constants/index'
import { Button } from '../ui/button'
import LocaleSwitcher from './locale-switcher'
import { useLocale } from 'next-intl'

const MobileNavSheet = () => {
  const locale = useLocale()

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
            <Button className='text-background p-5'>{locale === 'en' ? 'Contact' : 'Contactar'}</Button>
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