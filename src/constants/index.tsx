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
    label: {
      'es': 'Nosotros',
      'en': 'About us'
    },
    route: '#nosotros',
  },
  {
    label: {
      'es': 'Proyectos',
      'en': 'Projects'
    },
    route: '#proyectos',
  },
  {
    label: {
      'es': 'Servicios',
      'en': 'Services'
    },
    route: '#servicios',
  },
  {
    label: {
      'es': 'Testimonios',
      'en': 'Testimonials'
    },
    route: '#testimonios',
  },
]

// Translation no need it
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

// Completed Translation
export const servicios = {
  'es': [
    {
      label: 'Desarrollo Web',
      description: 'Desarrollo de experiencias web para ingresar al mundo digital',
      image: <Development />,
      package: [
        {
          label: 'Página Web Básica',
          description: 'Tenemos un plan básico para la creación de tu sitio web. Es recomendable si estás comenzando a digitalizar tu negocio.',
          projects: '7'
        },
        {
          label: 'Página web estándar',
          description: 'Tenemos un plan estándar para la creación de tu sitio web con diseños más sofisticados.',
          projects: '10'
        },
        {
          label: 'Página web personalizada',
          description: 'Tenemos un plan personalizado para la creación de tu sitio web con muchas herramientas adaptadas a tus necesidades.',
          projects: '6'
        }
      ]
    },
    {
      label: 'Community Manager',
      description: 'Gestión profesional de comunidades en línea para potenciar tu interacción y presencia.',
      image: <Comunity />,
      package: [
        {
          label: 'Community Manager básico',
          description: 'Tenemos un plan básico para gestionar las redes sociales de tu marca.',
          projects: '3'
        },
        {
          label: 'Community Manager estándar',
          description: 'Tenemos un plan estándar para gestionar las redes sociales de tu marca con más contenido.',
          projects: '4'
        },
        {
          label: 'Community Manager premium',
          description: 'Tenemos un plan personalizado para gestionar las redes sociales de tu marca con mucho contenido para generar más ventas.',
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
          label: 'Marketing Digital Básico',
          description: 'Tenemos un plan básico con buenas opciones para comenzar a crear estrategias de ventas para tu marca.',
          projects: '8'
        },
        {
          label: 'Marketing Digital Premium',
          description: 'Tenemos un plan premium con buenas opciones y estrategias de ventas para tu marca.',
          projects: '9'
        },
        {
          label: 'Marketing Digital Personalizado',
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
          description: 'Tenemos un plan básico para definir y construir tu marca.',
          projects: '7'
        },
        {
          label: 'Branding estándar',
          description: 'Tenemos un plan estándar para definir y construir tu marca.',
          projects: '9'
        },
        {
          label: 'Branding premium',
          description: 'Tenemos un plan premium para definir y construir tu marca con el mejor asesoramiento.',
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
          description: 'Tenemos un plan estándar de SEO para atraer tráfico a tu sitio web.',
          projects: '14'
        },
        {
          label: 'SEO personalizado',
          description: 'Tenemos un plan personalizado de SEO para atraer tráfico de calidad a tu sitio web, es decir, obtener la mayor cantidad de visitas.',
          projects: '20'
        }
      ]
    }
  ],
  'en': [
    {
      label: 'Web Development',
      description: 'Development of web experiences to enter the digital world.',
      image: <Development />,
      package: [
        {
          label: 'Basic Website',
          description: 'We have a basic plan for creating your website. It is recommended if your business is just starting to go digital.',
          projects: '7'
        },
        {
          label: 'Standard Website',
          description: 'We have a standard plan for creating your website with more sophisticated designs.',
          projects: '10'
        },
        {
          label: 'Customized Website',
          description: 'We have a customized plan for creating your website with many tailored tools.',
          projects: '6'
        }
      ]
    },
    {
      label: 'Community Manager',
      description: 'Professional management of online communities to enhance your interaction and presence.',
      image: <Comunity />,
      package: [
        {
          label: 'Basic Community Manager',
          description: 'We have a basic plan to manage your brand\'s social media.',
          projects: '3'
        },
        {
          label: 'Standard Community Manager',
          description: 'We have a standard plan to manage your brand\'s social media with more content.',
          projects: '4'
        },
        {
          label: 'Premium Community Manager',
          description: 'We have a customized plan to manage your brand\'s social media with a lot of content to generate more sales.',
          projects: '3'
        }
      ]
    },
    {
      label: 'Digital Marketing',
      description: 'Effective digital strategies to stand out and connect with your target audience.',
      image: <Marketing />,
      package: [
        {
          label: 'Basic Digital Marketing',
          description: 'We have a basic plan with good options to start creating sales strategies for your brand.',
          projects: '8'
        },
        {
          label: 'Premium Digital Marketing',
          description: 'We have a premium plan with good options and sales strategies for your brand.',
          projects: '9'
        },
        {
          label: 'Customized Digital Marketing',
          description: 'We have a customized plan with the best options and sales strategies for your brand.',
          projects: '7'
        }
      ]
    },
    {
      label: 'Graphic Design',
      description: 'Impactful visual creation that elevates your brand and communicates your unique identity.',
      image: <Design />,
      package: [
        {
          label: 'Standard Graphic Design',
          description: 'We have a standard plan with the best designs for your brand.',
          projects: '10'
        },
        {
          label: 'Customized Graphic Design',
          description: 'We have a customized plan with the best designs to boost your brand.',
          projects: '13'
        }
      ]
    },
    {
      label: 'Branding',
      description: 'Building solid brands that captivate and establish lasting connections.',
      image: <Branding />,
      package: [
        {
          label: 'Basic Branding',
          description: 'We have a basic plan for you to define and build your brand.',
          projects: '7'
        },
        {
          label: 'Standard Branding',
          description: 'We have a standard plan for you to define and build your brand.',
          projects: '9'
        },
        {
          label: 'Premium Branding',
          description: 'We have a premium plan for you to define and build your brand with the best guidance.',
          projects: '7'
        }
      ]
    },
    {
      label: 'SEO',
      description: 'Search engine optimization that boosts your online visibility.',
      image: <Seo />,
      package: [
        {
          label: 'Standard SEO',
          description: 'We have a standard SEO plan to attract traffic to your website.',
          projects: '14'
        },
        {
          label: 'Customized SEO',
          description: 'We have a customized SEO plan to attract quality traffic to your website, i.e., to get the most visits.',
          projects: '20'
        }
      ]
    }
  ]
}

// Completed Translation
export const key = [
  {
    label: '8.2K',
    subLabel: {
      es: 'Promedio de Ganancias',
      en: 'Average Revenue'
    }
  },
  {
    label: '120+',
    subLabel: {
      es: 'Proyectos Completados',
      en: 'Completed Projects'
    }
  },
  {
    label: '95%',
    subLabel: {
      es: 'Clientes satisfechos',
      en: 'Happy Clients'
    }
  }
]

// Completed Translation
export const projects = [
  {
    label: 'Termogar',
    description: {
      es: 'Expertos En Climatización',
      en: 'Experts in Heating'
    },
    image: ThermogarShowcase,
    link: 'https://termogar.es/'
  },
  {
    label: 'Stylo',
    description: {
      es: 'Relojeria y Joyeria',
      en: 'Jewellery and Clothing'
    },
    image: StyloShowcase,
    link: 'https://stylorelojeria.es/'
  },
  {
    label: 'Clínicas Salud Método Avanzado Madrid',
    description: {
      es: 'Centro Medico Integral',
      en: 'Holistic Medical Center'
    },
    image: ClinicasShowcase,
    link: 'https://saludmetodoavanzado.com/'
  },
  {
    label: 'Wear 2 Fit',
    description: {
      es: 'Articulos Deportivos',
      en: 'Sportswear'
    },
    image: Wear2FitShowcase,
    link: 'https://wear2fit.com/es/'
  }
]

// Completed Translation
export const process = {
  'es': [
    {
      label: 'Investigación y planificación',
      description: 'La hoja de ruta es fundamental para recopilar información, requisitos y otros datos necesarios para tomar decisiones informadas más adelante.'
    },
    {
      label: 'Maqueta',
      description: 'Crear una maqueta es el paso del proceso de desarrollo que más gente reconoce: es la parte más visual del proceso. Bocetos en profundidad y lluvia de ideas.'
    },
    {
      label: 'Construcción',
      description: 'Implementar la solución (a menudo con la ayuda de otros profesionales como programadores, impresores o fabricantes). Revisar la solución a medida que surjan problemas técnicos.'
    }
  ],
  'en': [
    {
      label: 'Research and Planning',
      description: 'The roadmap is crucial for gathering information, requirements, and other necessary data to make informed decisions later.'
    },
    {
      label: 'Mockup',
      description: 'Creating a mockup is the step in the development process that most people recognize: it is the most visual part of the process. Detailed sketches and brainstorming.'
    },
    {
      label: 'Construction',
      description: 'Implementing the solution (often with the help of other professionals like programmers, printers, or manufacturers). Reviewing the solution as technical issues arise.'
    }
  ]
}

// Completed Translation
export const testimonials = {
  'es': [
    {
      highlight: '"Estoy deseando volver a trabajar con Doctec World."',
      testimonial: 'Durante cinco años, hemos colaborado estrechamente con esta empresa para mejorar nuestro ecommerce y fortalecer nuestro posicionamiento en buscadores. Gracias a su dedicación y experiencia, hemos logrado objetivos sobresalientes. Esta asociación es invaluable y estamos emocionados por continuar prosperando juntos en el futuro.',
      client: {
        name: 'Álvaro Pérez Muñoz',
        position: 'CEO de Termogar',
        picture: Alberto
      }
    },
    {
      highlight: '"Anticipando el próximo capítulo de colaboración con Doctec World."',
      testimonial: '"En nuestra asociación con los 2 centros de estética, hemos mejorado nuestra presencia digital y consolidado nuestra identidad de marca mediante estrategias de marketing digital. Esta colaboración ha sido esencial para alcanzar logros destacados, y esperamos seguir avanzando juntos en el futuro."',
      client: {
        name: 'María José Barba',
        position: 'CEO de MJ Esthetic Advanced',
        picture: Maria
      }
    },
    {
      highlight: '"La calidad y profesionalismo de Doctec World nos han llevado al siguiente nivel."',
      testimonial: '"En Clínicas Salud, confiamos en la experiencia de Doctec World para mejorar nuestra presencia en línea y ampliar nuestro alcance. Desde 2019, han sido un socio confiable en nuestro viaje hacia el éxito digital. Esperamos seguir colaborando en proyectos emocionantes en el futuro."',
      client: {
        name: 'Óscar Guerrero Soriano',
        position: 'Administrador de Clínicas Salud',
        picture: Oscar
      }
    },
    {
      highlight: '"Gracias a Doctec World, hemos transformado nuestra presencia en línea."',
      testimonial: '"Como administrador de Gimnasio Active Fitness Sotogrande, confío en la experiencia de Doctec World para llevar nuestra presencia digital al siguiente nivel. Desde 2022, han sido fundamentales para nuestro éxito en línea y esperamos seguir creciendo juntos."',
      client: {
        name: 'Héctor Natalizio',
        position: 'Gerente de Nataltec Instalaciones Técnicas SL',
        picture: Hector
      }
    },
    {
      highlight: '"Doctec World ha sido un socio invaluable en nuestro viaje hacia una presencia digital destacada."',
      testimonial: '"Como directora de la Escuela Emoción en Ebullición, he confiado en Doctec World para mejorar nuestra visibilidad en línea desde 2021. Su enfoque estratégico y su dedicación han sido cruciales para nuestro éxito digital. Estoy emocionada por las futuras oportunidades de colaboración."',
      client: {
        name: 'Rebecca García-Monzón Moore',
        position: 'Directora de la Escuela Emoción en Ebullición',
        picture: Rebecca2
      }
    },
    {
      highlight: '"Doctec World ha sido nuestro aliado por años, llevando nuestra marca a nuevas alturas."',
      testimonial: '"Desde 2020, Doctec World ha sido fundamental para el crecimiento y la expansión de nuestra empresa. Como gerente de Distribuidora Enka Estética Profesional - Málaga, confío plenamente en su experiencia y profesionalismo. ¡Espero con ansias lo que el futuro nos depara juntos!"',
      client: {
        name: 'Encarna Castillo',
        position: 'Gerente de Distribuidora Enka Estética Profesional - Málaga',
        picture: Encarna
      }
    }
  ]
  ,
  'en': [
    {
      highlight: '"Looking forward to working with Doctec World again."',
      testimonial: 'For five years, we have closely collaborated with this company to enhance our ecommerce and strengthen our search engine positioning. Thanks to their dedication and expertise, we have achieved outstanding goals. This partnership is invaluable, and we are excited to continue thriving together in the future.',
      client: {
        name: 'Alvaro Perez Muñoz',
        position: 'CEO of Termogar',
        picture: Alberto
      }
    },
    {
      highlight: '"Anticipating the next chapter of collaboration with Doctec World."',
      testimonial: '"In our partnership with the 2 beauty centers, we have enhanced our digital presence and consolidated our brand identity through digital marketing strategies. This collaboration has been essential for achieving notable accomplishments, and we look forward to advancing together in the future."',
      client: {
        name: 'María José Barba',
        position: 'CEO of MJ Esthetic Advanced',
        picture: Maria
      }
    },
    {
      highlight: '"The quality and professionalism of Doctec World have taken us to the next level."',
      testimonial: '"At Clinicas Salud, we rely on Doctec World\'s expertise to enhance our online presence and expand our reach. Since 2019, they have been a reliable partner on our journey to digital success. We look forward to collaborating on exciting projects in the future."',
      client: {
        name: 'Oscar Guerrero Soriano',
        position: 'Administrator Clinicas Salud',
        picture: Oscar,
      }
    },
    {
      highlight: '"Thanks to Doctec World, we have transformed our online presence."',
      testimonial: '"As the manager of Gimnasio Active Fitness Sotogrande, I trust Doctec World\'s expertise to take our digital presence to the next level. Since 2022, they have been instrumental in our online success, and we look forward to growing together."',
      client: {
        name: 'Hector Natalizio',
        position: 'Manager of Nataltec Technical Installations SL',
        picture: Hector,
      }
    },
    {
      highlight: '"Doctec World has been an invaluable partner in our journey towards outstanding digital presence."',
      testimonial: '"As the director of the Escuela Emoción en Ebullición, I have relied on Doctec World to enhance our online visibility since 2021. Their strategic approach and dedication have been crucial to our digital success. I am excited for future collaboration opportunities."',
      client: {
        name: 'Rebecca García-Monzón Moore',
        position: 'Director of the Escuela Emoción en Ebullición',
        picture: Rebecca2,
      }
    },
    {
      highlight: '"Doctec World has been our ally for years, taking our brand to new heights."',
      testimonial: '"Since 2020, Doctec World has been instrumental in the growth and expansion of our company. As the manager of Distribuidora Enka Estética Profesional - Málaga, I fully trust in their expertise and professionalism. I look forward to what the future holds for us together!"',
      client: {
        name: 'Encarna Castillo',
        position: 'Manager of Distribuidora Enka Estética Profesional - Málaga',
        picture: Encarna,
      }
    }

  ]
}

// Completed Translation
export const preFooterStats = {
  'es': [
    'Marketing vanguardia',
    'Desarrollo innovador',
    'Social media interactivo',
    'Diseños adaptables'
  ],
  'en': [
    'Marketing Vanguard',
    'Innovative Development',
    'Interactive Social Media',
    'Adaptable Designs'
  ]
}