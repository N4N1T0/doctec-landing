import { Logo } from '@/assets/'
import Image from 'next/image'
import { Button } from '../ui/button'
import { navItems } from '@/constants/index'
import MobileNavSheet from './mobile-nav-sheet'

const NavBar = () => {
  return (
    <header className='w-full flex justify-between items-center p-5 2xl:p-10 absolute z-50'>
      <Image src={Logo} alt='Doctec World Logo' width={50} height={50} />
      <ul className='hidden sm:flex flex-1/2 bg-foreground text-background p-1'>
        {navItems.map((item) => (
          <li key={item.label} className='hover:bg-primary transition-colors duration-200 p-2 rounded-lg'>
            <a href={item.route}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className='flex'>
        <Button className='text-background p-5 hidden sm:flex' asChild><a href='tel:+34-63-411-30-14'>Contactar</a></Button>
        <MobileNavSheet />
      </div>
    </header>
  )
}

export default NavBar