import { servicios } from "@/constants/index"
import ServicesDialog from "./shared/services-dialog"
import ServicesCard from "./shared/services-card"


const Servicios = () => {
  return (
    <section id="servicios" className='flex flex-col md:flex-row justify-between items-start max-w-[1600px] mx-auto px-2 md:px-10 gap-10 md:gap-0'>
      <div className="text-left space-y-2 flex-[30%]">
        {/* Sticky */}
        <h3 className='uppercase text-2xl'>Conoce Nuestros Servicios</h3>
        <p className="font-light">Una parte de nuestros mejores servicios</p>
      </div>
      <div className="flex-[60%] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {servicios.map(service => (
          <ServicesDialog key={service.label} servicios={service}>
            <ServicesCard service={service} />
          </ServicesDialog>
        ))}
      </div>
    </section>
  )
}

export default Servicios