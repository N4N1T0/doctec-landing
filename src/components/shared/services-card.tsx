interface ServicesCardProps {
  label: string;
  image: JSX.Element;
  description: string;
}

const ServicesCard = ({ service, index }: { service: ServicesCardProps, index: number }) => {
  return (
    <div key={service.label} className={`${index === 0 || index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} col-span-1 hover:bg-primary transition-colors duration-200 p-5 bg-muted space-y-20 group`}>
      <div className='w-full flex justify-between items-center'>
        {service.image}
        <div
          className='w-8 h-8 rounded-full border border-muted flex justify-center items-center'
          title='abrir un dialog'>
          <svg fill='#39393B' height='16px' width='16px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 511.93 511.93' className='-rotate-[135deg]'>
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
      </div>
      <div className='text-left space-y-3 group-hover:text-background'>
        <h4 className='uppercase text-xl'>{service.label}</h4>
        <p className='text-foreground/70 group-hover:text-background'>{service.description}</p>
      </div>
    </div>
  )
}

export default ServicesCard