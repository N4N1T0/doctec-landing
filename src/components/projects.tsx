import { projects } from '@/constants/index'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Locale } from '@/i18n'

const Projects = () => {
  const t = useTranslations('projects')
  const locale: Locale = useLocale()

  return (
    <section id='proyectos' className='space-y-20 flex flex-col justify-center items-center max-w-[1600px] mx-auto px-2 md:px-10'>
      <div className='text-center space-y-2 px-10'>
        <h3 className='uppercase text-2xl'>{t('h3')}</h3>
        <p className='font-light'>{t('p')}</p>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
        {
          projects.map(project => (
            <a href={project.link} target='_blank' key={project.label} className='relative col-span-1 space-y-1 md:space-y-3 group' aria-label={project.label}>
              <div className='overflow-clip '>
                <Image src={project.image} alt={project.label} title={project.description[locale]} className='group-hover:scale-110 transition-transform duration-200' />
              </div>
              <h4 className='text-3xl font-bold group-hover:text-primary transition-colors duration-200'>{project.label}</h4>
              <p className='group-hover:text-secondary transition-colors duration-200 font-light'>{project.description[locale]}</p>
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Projects