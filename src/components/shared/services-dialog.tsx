import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ServiciosProps {
  label: string
  description: string
  package:
  {
    label: string,
    description: string,
    projects: string
  }[]
}

const ServicesDialog = ({ servicios, children }: { servicios: ServiciosProps, children: JSX.Element }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="border-none rounded-none space-y-5 md:space-y-10 p-10 md:p-20 bg-primary text-background">
        <DialogHeader>
          <DialogTitle className="font-bold uppercase text-3xl">{servicios.label}</DialogTitle>
          <DialogDescription className="text-background">
            Conoces nuestros <span>paquetes</span>
          </DialogDescription>
        </DialogHeader>
        <ul className="space-y-7 md:space-y-10">
          {servicios.package.map(pack => (
            <li key={pack.label} className="space-y-2 list-disc">
              <h5 className="font-bold uppercase text-lg">{pack.label}</h5>
              <p>{pack.description}</p>
              <p>Proyectos en Curso: <strong className="text-xl">{pack.projects}</strong></p>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>

  )
}

export default ServicesDialog