import Image from 'next/image'
import { AboutPic, Logo } from '@/assets'
import { key } from '@/constants/index'
import { useTranslations, useLocale } from 'next-intl';

const About = () => {
  const t = useTranslations('about')
  const locale: "es" | "en" = useLocale();

  return (
    <section id='nosotros' className='space-y-20'>
      <div className='w-full flex flex-col md:flex-row justify-between items-center px-5 mx-auto max-w-[1600px] gap-5 md:gap-0'>
        <div className='flex-[30%] space-y-10'>
          <h3 className='uppercase text-2xl'>{t('h3')}</h3>
          <Image src={Logo} alt='Doctec World Logo' width={50} height={50} />
        </div>
        <p className='flex-[30%] text-lg font-light'>{t('p-1')}<br /><br />{t('p-2')}</p>
      </div>
      <Image src={AboutPic} alt='Una toma area de una mesa de reuniones' className='w-full h-[620px] object-cover' height={620} />
      <div className='w-full flex flex-col md:flex-row justify-between items-center px-5 mx-auto max-w-[1600px] gap-5 md:gap-0'>
        <h3 className='text-2xl flex-[30%]'>{t('h3-2')}</h3>
        <ul className='flex-[30%] flex justify-between items-center'>
          {key.map(item => {
            const finalChar = item.label.charAt(item.label.length - 1);
            const restChar = item.label.split('').slice(0, -1).join('')

            return (
              <li key={item.subLabel[locale]} className='space-y-3'>
                <strong className='text-3xl md:text-5xl'>{restChar}<span className='text-primary'>{finalChar}</span></strong>
                <p className='text-sm md:text-base font-light'>{item.subLabel[locale]}</p>
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