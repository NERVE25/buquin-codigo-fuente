export interface TimelineImage {
  url: string;
  caption: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  badge: string;
  details: string;
  imagenes: TimelineImage[];
}

export const COMPANY_INFO = {
  name: 'Productos Buquin S.A.S.',
  nit: '830146404-0',
  nitFormatted: '830.146.404-0',
  shelfLife: '1 año (12 meses)',
  tagline: 'El sabor que une momentos',
  shortStory: 'Con más de 20 años de experiencia, combinamos ingredientes de alta calidad con recetas únicas para ofrecer productos irresistibles para el hogar y la industria.',
  foundedYear: '2004',
  founders: 'Jorge Buitrago y Misael Quintana',
  namingOrigin: 'El nombre surge de la unión de sus apellidos: Buitrago y Quintana (Bu-quin), símbolo de trabajo en equipo y visión compartida.',
  phone: '317 659 1699',
  phoneFormatted: '+57 317 659 1699',
  whatsappUrl: 'https://wa.me/573176591699',
  email: 'gerencia@productosbuquin.com',
  address: 'Transversal 18i 5-05, Soacha, Colombia',
  mapsUrl: 'https://maps.app.goo.gl/j5njSYXCNCiJFV2X6',
  instagram: 'https://instagram.com/PRODUCTOSBUQUIN',
  facebook: 'https://facebook.com/SALSASPRODUCTOSBUQUINS.A.S',
  schedule: {
    weekdays: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    saturdays: 'Sábados: 9:00 AM - 1:00 PM',
    sundays: 'Domingos y festivos: Cerrado'
  },
  mission: 'En PRODUCTOS BUQUIN S.A.S., nos dedicamos a la elaboración de salsas, incluyendo variedades como: Salsa con Tomate, Sirope sabor a Miel, Salsa BBQ, Salsa Picante/Ají, Salsa Rosada, Salsa Negra y Salsa Soya. Nuestro propósito es ofrecer al consumidor productos de alta calidad, seguros y con precios accesibles, acompañados de un servicio al cliente eficiente y cercano, garantizando así una experiencia confiable y satisfactoria.',
  vision: 'Ser reconocidos a nivel nacional como una empresa líder en la producción de salsas, destacándonos por la innovación, la calidad constante de nuestros productos y el compromiso con nuestros clientes, consolidando a PRODUCTOS BUQUIN S.A.S. como una marca confiable y preferida en el mercado alimenticio.'
};

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2004',
    badge: 'Nacimiento',
    title: 'Fundación y Primeros Pasos',
    description: 'Fundamos Productos Buquin en Bogotá. Iniciamos como maquiladores de una empresa de alimentos y pronto fabricamos nuestros primeros productos estrella en sachets.',
    details: 'El primer sobre sellado con registro sanitario INVIMA y rollos de laminado que dieron vida a la marca.',
    imagenes: [
      {
        url: '/assets/aistudio/primer-sobre_e8245114.jpg',
        caption: 'El primer sobre histórico de Productos Buquin (8g)'
      },
      {
        url: '/assets/aistudio/laminadosc_07fa99a4.jpg',
        caption: 'Bobinas de laminado en máquina de sellado'
      }
    ]
  },
  {
    year: 'Expansión',
    badge: 'Portafolio',
    title: 'Nuevos Sabores y Presentaciones',
    description: 'Ampliamos nuestro portafolio con nuevos sabores en galón y más presentaciones para la salsa de tomate, respondiendo a la creciente demanda de restaurantes y canal institucional.',
    details: 'Primeros galones clásicos (Tomate, Rosada y Mayonesa) y empaques flexibles con dispensador.',
    imagenes: [
      {
        url: '/assets/aistudio/nuevos-sabores-galon_fed83912.png',
        caption: 'Línea clásica de galones (Tomate, Rosada y Mayonesa)'
      },
      {
        url: '/assets/aistudio/gltmkl_6e792584.png',
        caption: 'Presentaciones de salsa de tomate en bolsa con dispensador'
      }
    ]
  },
  {
    year: '2010',
    badge: 'Infraestructura',
    title: 'Una Nueva Sede en Soacha',
    description: 'Inauguramos nuestra planta en Soacha (Cundinamarca), un salto que nos permitió crecer, mejorar procesos con marmita industrial de cocción y adquirir logística propia para nuestra distribución.',
    details: 'Sede propia con marmitas de cocción, dosificación por tolva y primer furgón de reparto cargado de cajas Buquin.',
    imagenes: [
      {
        url: '/assets/aistudio/empresafrente_a33cff76.jpg',
        caption: 'Fachada de la planta en Soacha (Transversal 18i 5-05)'
      },
      {
        url: '/assets/aistudio/marmita_b6b03156.jpg',
        caption: 'Marmita industrial de cocción continua'
      },
      {
        url: '/assets/aistudio/produ_79c349ce.jpg',
        caption: 'Llenado y pesado exacto en tolva de acero inoxidable'
      },
      {
        url: '/assets/aistudio/empaquegalon_502b79a8.jpg',
        caption: 'Equipo en la estación de dosificado y sellado'
      },
      {
        url: '/assets/aistudio/vehidistri_f7940d06.jpg',
        caption: 'Vehículo de reparto cargado de cajas Buquin'
      }
    ]
  },
  {
    year: '2023',
    badge: 'Logística',
    title: 'Mayor Capacidad Logística',
    description: 'Ampliamos nuestros canales de distribución para satisfacer la creciente demanda nacional y llegar a más clientes, restaurantes y mayoristas de manera rápida y segura.',
    details: 'Moderno camión furgón refrigerado para despachos ágiles en Bogotá, Sabana y enlace nacional.',
    imagenes: [
      {
        url: '/assets/aistudio/furgon_bcd4e7cd.png',
        caption: 'Nuevo furgón de distribución con equipo de logística Buquin'
      }
    ]
  },
  {
    year: '2025',
    badge: 'Evolución',
    title: 'Evolución de Nuestra Marca',
    description: 'Lanzamos la nueva y moderna presentación de nuestros galones de 4000g de salsa de tomate y BBQ en formato Doypack ergonómico con dispensador, reafirmando nuestro compromiso con la calidad.',
    details: 'Envases institucionales de alto rendimiento diseñados para las cocinas más exigentes.',
    imagenes: [
      {
        url: '/assets/aistudio/tomate-gl-frente_918ec95d.png',
        caption: 'Nuevo Galón Salsa con Tomate 4000g con dispensador'
      },
      {
        url: '/assets/aistudio/bbqgl_10c19256.png',
        caption: 'Nuevo Galón Salsa BBQ Ahumada 4000g'
      }
    ]
  }
];

export const REGIONS_BUY = [
  {
    city: 'Bogotá D.C. & Cundinamarca',
    phoneText: 'Deseo contactar al distribuidor en Bogotá y alrededores.',
    description: 'Despacho directo desde planta en Soacha para restaurantes, cadenas y mayoristas.'
  },
  {
    city: 'Medellín & Antioquia',
    phoneText: 'Deseo contactar al distribuidor en Medellín y el Valle de Aburrá.',
    description: 'Red de distribución para restaurantes de comidas rápidas y distribuidores locales.'
  },
  {
    city: 'Cali & Valle del Cauca',
    phoneText: 'Deseo contactar al distribuidor en Cali y Valle del Cauca.',
    description: 'Abastecimiento de sachets y galones institucionales en el suroccidente del país.'
  },
  {
    city: 'Bucaramanga & Santanderes',
    phoneText: 'Deseo contactar al distribuidor en Bucaramanga y Santanderes.',
    description: 'Presencia en el oriente colombiano con tiempos de entrega garantizados.'
  },
  {
    city: 'Eje Cafetero (Pereira / Manizales / Armenia)',
    phoneText: 'Deseo contactar al distribuidor en el Eje Cafetero.',
    description: 'Puntos autorizados para surtir al sector gastronómico y turístico regional.'
  },
  {
    city: 'Otras Ciudades y Envíos Nacionales',
    phoneText: 'Deseo consultar envíos a otras ciudades de Colombia.',
    description: 'Despachos consolidados por transportadora a cualquier municipio de Colombia.'
  }
];
