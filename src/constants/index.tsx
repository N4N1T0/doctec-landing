import {
  Baterias1,
  Baterias2,
  Baterias,
  Leroit,
  Domus,
  Rebecca,
  Salud,
  Termogar,
  Stylo,
  Pura,
  Mj,
  Bolsa,
  Coques,
  Coes,
  Enka,
  Guerreros,
  Wearfit,
  Mimat,
  ThermogarShowcase,
  StyloShowcase,
  ClinicasShowcase,
  Wear2FitShowcase,
  Alberto,
  Maria,
  Oscar,
  Hector,
  Rebecca2,
  Encarna
} from '@/assets'
import { Development, Design, Seo, Branding, Marketing, Comunity } from '@/components/shared/icons'

export const navItems = [
  {
    label: 'Nosotros',
    route: '#nosotros',
  },
  {
    label: 'Proyectos',
    route: '#proyectos',
  },
  {
    label: 'Servicios',
    route: '#servicios',
  },
  {
    label: 'Testimonios',
    route: '#testimonios',
  },
  {
    label: 'Contacto',
    route: '#contacto',
  }
]

export const brands = [
  {
    label: 'Baterias 1',
    image: Baterias1
  },
  {
    label: 'Baterias',
    image: Baterias
  },
  {
    label: 'Baterias 2',
    image: Baterias2
  },
  {
    label: 'Leroit',
    image: Leroit
  },
  {
    label: 'Domus',
    image: Domus
  },
  {
    label: 'Rebecca',
    image: Rebecca
  },
  {
    label: 'Salud',
    image: Salud
  },
  {
    label: 'Termogar',
    image: Termogar
  },
  {
    label: 'Stylo',
    image: Stylo
  },
  {
    label: 'Pura',
    image: Pura
  },
  {
    label: 'MJ',
    image: Mj
  },
  {
    label: 'Bolsa',
    image: Bolsa
  },
  {
    label: 'Coques',
    image: Coques
  },
  {
    label: 'Enka',
    image: Enka
  },
  {
    label: 'Guerreros',
    image: Guerreros
  },
  {
    label: 'Coes',
    image: Coes
  },
  {
    label: 'Wearfit',
    image: Wearfit
  },
  {
    label: 'Mimat',
    image: Mimat
  }
]

export const servicios = [
  {
    label: 'Desarrollo Web',
    description: 'Desarrollo de experiencias web para entrar al mundo digital',
    image: <Development />,
    package: [
      {
        label: 'Pagina Web Basica',
        description: 'Tenemos un plan básico para la creación de tu web. Es recomendable si recién está empezando a digitalizarse tu negocio',
        projects: '7'
      },
      {
        label: 'Página web estándar',
        description: 'Tenemos un plan estándar para la creación de tu web con diseños más sofisticados.',
        projects: '10'
      },
      {
        label: 'Página web personalizada',
        description: 'Tenemos un plan personalizado para la creación de tu web con muchas herramientas a tu medida.',
        projects: '6'
      }
    ]
  },
  {
    label: 'Community Manager',
    description: 'Gestión profesional de comunidades online para potenciar tu interacción y presencia.',
    image: <Comunity />,
    package: [
      {
        label: 'Community Manager básico',
        description: 'Tenemos un plan básico para gestionar las redes sociales de tu marca',
        projects: '3'
      },
      {
        label: 'Community Manager estándar',
        description: 'Tenemos un plan estándar para gestionar las redes sociales de tu marca con más contenido.',
        projects: '4'
      },
      {
        label: 'Community Manager premium',
        description: 'Tenemos un plan personalizado para gestionar las redes sociales de tu marca con mucho contenido para generar  más ventas.',
        projects: '3'
      }
    ]
  },
  {
    label: 'Marketing Digital',
    description: 'Estrategias digitales efectivas para destacar y conectar con tu audiencia objetivo.',
    image: <Marketing />,
    package: [
      {
        label: 'Marketing D. Básico',
        description: 'Tenemos un plan básico con buenas opciones para comenzar a crear estrategias de ventas para tu marca.',
        projects: '8'
      },
      {
        label: 'Marketing D. Premium',
        description: 'Tenemos un plan premium con buenas opciones y estrategias de ventas para tu marca.',
        projects: '9'
      },
      {
        label: 'Marketing D. Personalizado',
        description: 'Tenemos un plan personalizado con las mejores opciones y estrategias de ventas para tu marca.',
        projects: '7'
      }
    ]
  },
  {
    label: 'Diseño Gráfico',
    description: 'Creación visual impactante que eleva tu marca y comunica tu identidad única.',
    image: <Design />,
    package: [
      {
        label: 'Diseño gráfico estándar',
        description: 'Tenemos un plan estándar con los mejores diseños para tu marca.',
        projects: '10'
      },
      {
        label: 'Diseño gráfico personalizado',
        description: 'Tenemos un plan personalizado con los mejores diseños para impulsar tu marca.',
        projects: '13'
      }
    ]
  },
  {
    label: 'Branding',
    description: 'Construcción de marcas sólidas que cautivan y establecen conexiones duraderas.',
    image: <Branding />,
    package: [
      {
        label: 'Branding básico',
        description: 'Tenemos un plan básico para que definas y construyas tu marca.',
        projects: '7'
      },
      {
        label: 'Branding estándar',
        description: 'Tenemos un plan estándar para que definas y construyas tu marca. ',
        projects: '9'
      },
      {
        label: 'Branding premium',
        description: 'enemos un plan premium para que definas y construyas tu marca con el mejor asesoramiento.',
        projects: '7'
      }
    ]
  },
  {
    label: 'SEO',
    description: 'Optimización para motores de búsqueda que impulsa tu visibilidad en línea.',
    image: <Seo />,
    package: [
      {
        label: 'SEO estándar',
        description: 'Tenemos un plan estándar de SEO para atraer tráfico a tu web.',
        projects: '14'
      },
      {
        label: 'SEO personalizado',
        description: 'Tenemos un plan personalizado de SEO para atraer tráfico de calidad a tu web, es decir, obtener la mayor cantidad de visitas.',
        projects: '20'
      }
    ]
  }
];

export const key = [
  {
    label: '8.2K',
    subLabel: 'Promedio de Ganancias'
  },
  {
    label: '120+',
    subLabel: 'Proyectos Completados'
  },
  {
    label: '95%',
    subLabel: 'Clientes satisfechos'
  }
]

export const projects = [
  {
    label: 'Termogar',
    description: 'Expertos En Climatización',
    image: ThermogarShowcase,
    link: 'https://termogar.es/'
  },
  {
    label: 'Stylo',
    description: 'Relojeria y Joyeria',
    image: StyloShowcase,
    link: 'https://stylorelojeria.es/'
  },
  {
    label: 'Clínicas Salud Método Avanzado Madrid',
    description: 'Centro Medico Integral',
    image: ClinicasShowcase,
    link: 'https://saludmetodoavanzado.com/'
  },
  {
    label: 'Wear 2 Fit',
    description: 'Articulos Deportivos',
    image: Wear2FitShowcase,
    link: 'https://wear2fit.com/es/'
  }
]

export const process = [
  {
    label: 'Investigación y planificación',
    description: 'La hoja de ruta es fundamental para recopilar información, requisitos y otros datos necesarios para tomar decisiones informadas más adelante.'
  },
  {
    label: 'Maqueta',
    description: 'Crear una maqueta es el paso del proceso de desarrollo que más gente reconoce: es la parte más visual del proceso Bocetos en profundidad y lluvia de ideas.'
  },
  {
    label: 'Construccion',
    description: 'Implementar la solución (a menudo con la ayuda de otros profesionales como programadores, impresores o fabricantes)Revisar la solución a medida que surjan problemas técnicos.'
  }
]

export const testimonials = [
  {
    highlight: '"Estoy deseando volver a trabajar con el Doctec World."',
    testimonial: 'Durante cinco años, hemos colaborado estrechamente con esta empresa para mejorar nuestro ecommerce y fortalecer nuestro posicionamiento en buscadores. Gracias a su dedicación y experiencia, hemos logrado objetivos sobresalientes. Esta asociación es invaluable y estamos emocionados por continuar prosperando juntos en el futuro',
    client: {
      name: 'Alvaro perez Muñoz',
      position: 'CEO de Termogar',
      picture: Alberto
    }
  },
  {
    highlight: '"Anticipando el próximo capítulo de colaboración con Doctec World".',
    testimonial: '"En nuestra asociación con la red de clínicas, hemos mejorado nuestra presencia digital y consolidado nuestra identidad de marca mediante estrategias de marketing digital. Esta colaboración ha sido esencial para alcanzar logros destacados, y esperamos seguir avanzando juntos en el futuro".',
    client: {
      name: 'María José Barba',
      position: 'CEO de MJ Esthetic Advanced',
      picture: Maria
    }
  },
  {
    highlight: '"La calidad y profesionalismo de Doctec World nos han llevado al siguiente nivel."',
    testimonial: '"En Clinicas Salud, confiamos en la experiencia de Doctec World para mejorar nuestra presencia en línea y ampliar nuestro alcance. Desde 2019, han sido un socio confiable en nuestro viaje hacia el éxito digital. Esperamos seguir colaborando en proyectos emocionantes en el futuro".',
    client: {
      name: 'Oscar Guerrero Soriano',
      position: 'Administrador Clinicas Salud',
      picture: Oscar,
    }
  },
  {
    highlight: '"Gracias a Doctec World, hemos transformado nuestra presencia en línea".',
    testimonial: '"Como administrador de Gimnasio Active Fitness Sotogrande, confío en la experiencia de Doctec World para llevar nuestra presencia digital al siguiente nivel. Desde 2022, han sido fundamentales para nuestro éxito en línea y esperamos seguir creciendo juntos".',
    client: {
      name: 'Hector Natalizio',
      position: 'Gerente de Nataltec Instalaciones Técnicas SL',
      picture: Hector,
    }
  },
  {
    highlight: '"Doctec World ha sido un socio invaluable en nuestro viaje hacia una presencia digital destacada".',
    testimonial: '"Como directora de la Escuela Emoción en Ebullición, he confiado en Doctec World para mejorar nuestra visibilidad en línea desde 2021. Su enfoque estratégico y su dedicación han sido cruciales para nuestro éxito digital. Estoy emocionada por las futuras oportunidades de colaboración".',
    client: {
      name: 'Rebecca García-Monzón Moore',
      position: 'Directora de la Escuela Emoción en Ebullición',
      picture: Rebecca2,
    }
  },
  {
    highlight: '"Doctec World ha sido nuestro aliado desde el principio, llevando nuestra marca a nuevas alturas".',
    testimonial: '"Desde 2020, Doctec World ha sido fundamental para el crecimiento y la expansión de nuestra empresa. Como gerente de Distribuidora Enka Estética Profesional - Málaga, confío plenamente en su experiencia y profesionalismo. ¡Espero con ansias lo que el futuro nos depara juntos!"',
    client: {
      name: 'Encarna Castillo',
      position: 'Gerente de Distribuidora Enka Estética Profesional - Málaga',
      picture: Encarna,
    }
  }
]

export const preFooterStats = [
  'Marketing vanguardia',
  'Desarrollo innovador',
  'Social media interactivo',
  'Diseños adaptables'
]