import { process } from '@/constants'

const Process = () => {
  return (
    <section id='proceso' className='flex flex-col justify-center items-center max-w-[1600px] mx-auto px-2 md:px-10 gap-16'>
      <h3 className='uppercase text-2xl'>Nuestro Proceso</h3>
      <ul className='w-full flex flex-col md:flex-row justify-between items-center gap-10'>
        {process.map((item, index) => (
          <li key={item.label} className='bg-secondary/10 p-10 flex-grow space-y-5'>
            <span className='text-6xl text-secondary'>0{index + 1}</span>
            <h4 className='text-xl font-bold'>{item.label}</h4>
            <p className='font-light'>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Process