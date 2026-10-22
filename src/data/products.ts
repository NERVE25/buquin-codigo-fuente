import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'salsa-tomate',
    slug: 'salsa-tomate',
    nombre: 'Salsa con Tomate',
    categoria: 'clasicas',
    subtitulo: 'El sabor clásico y versátil que complementa cualquier platillo',
    headlineIntro: 'Calidad y Sabor en cada Presentación',
    descripcionLarga: 'Nuestra Salsa con Tomate está elaborada con ingredientes seleccionados para garantizar un sabor consistente y delicioso. Es el acompañante perfecto para hamburguesas, perros calientes, papas fritas y una infinidad de recetas, ideal tanto para porciones individuales como para cocinas de alto volumen.',
    imagenPrincipal: '/assets/aistudio/tomate8_9157d505.jpg',
    colorTheme: '#dc2626',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    destacado: true,
    usosRecomendados: ['Hamburguesas y perros calientes', 'Papas a la francesa y snacks', 'Bases de salsas y aderezos', 'Cocinas de comida rápida y casinos'],
    presentaciones: [
      {
        tipo: 'Sobre 8g - Línea Premium',
        nombre: 'Sachet 8g Premium',
        descripcion: 'Perfecto para dosis individuales que requieren la máxima calidad. Ideal para restaurantes y domicilios.',
        formato: 'Sobre individual 8g',
        imagen: '/assets/aistudio/tomate8_9157d505.jpg',
        nutricion: {
          porcion: '8g (1 sobre)',
          calorias: '10 kcal',
          grasaTotal: '0g',
          sodio: '95mg',
          carbohidratos: '2g',
          azucares: '2g',
          fibra: '0g'
        }
      },
      {
        tipo: 'Sobre 6g - Línea Económica',
        nombre: 'Sachet 6g Económica',
        descripcion: 'La opción ideal para eventos y negocios de gran volumen, manteniendo un sabor tradicional y delicioso.',
        formato: 'Sobre individual 6g',
        imagen: '/assets/aistudio/tomate6_dca83ca2.jpg',
        nutricion: {
          porcion: '6g (1 sobre)',
          calorias: '8 kcal',
          grasaTotal: '0g',
          sodio: '80mg',
          carbohidratos: '1.5g',
          azucares: '1.5g',
          fibra: '0g'
        }
      },
      {
        tipo: 'Galón 4000g - Línea Premium',
        nombre: 'Galón Institucional 4000g',
        descripcion: 'Nuestro formato de mayor rendimiento, diseñado para las cocinas más exigentes de restaurantes, cadenas y casinos.',
        formato: 'Galón 4000g (Doypack con dispensador)',
        imagen: '/assets/aistudio/tomate-gl-frente_918ec95d.png',
        nutricion: {
          porcion: '15g',
          calorias: '8.2 kcal',
          grasaTotal: '0g',
          sodio: '115mg',
          carbohidratos: '2.1g',
          azucares: '1.3g',
          fibra: '0.1g'
        }
      }
    ]
  },
  {
    id: 'salsa-bbq',
    slug: 'salsa-bbq',
    nombre: 'Salsa BBQ Buquin',
    categoria: 'clasicas',
    subtitulo: 'El irresistible sabor ahumado para tus parrillas y platillos',
    headlineIntro: 'El Toque Ahumado Perfecto',
    descripcionLarga: 'Nuestra Salsa BBQ combina el dulzor justo con notas ahumadas para crear un aderezo inconfundible. Es la compañera ideal para costillas, alitas, hamburguesas y carnes a la parrilla, diseñada para dar un acabado profesional y delicioso a tus creaciones culinarias.',
    imagenPrincipal: '/assets/aistudio/bbq8_5a5aecf8.jpg',
    colorTheme: '#b91c1c',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    destacado: true,
    usosRecomendados: ['Alitas BBQ y costillas de cerdo', 'Marinado y glaseado de carnes', 'Hamburguesas artesanales', 'Pasabocas y deditos de queso'],
    presentaciones: [
      {
        tipo: 'Sobre 8g - Línea Premium',
        nombre: 'Sachet 8g Premium',
        descripcion: 'La dosis perfecta para acompañar alitas, costillas y porciones individuales con un sabor intenso y de alta calidad.',
        formato: 'Sobre individual 8g',
        imagen: '/assets/aistudio/bbq8_5a5aecf8.jpg',
        nutricion: {
          porcion: '8g (1 sobre)',
          calorias: '25 kcal',
          grasaTotal: '0g',
          sodio: '200mg',
          carbohidratos: '6g',
          azucares: '5g',
          fibra: '0g'
        }
      },
      {
        tipo: 'Galón 4000g - Línea Premium',
        nombre: 'Galón Institucional 4000g',
        descripcion: 'El formato ideal para marinar, glasear y salsear en cocinas de alto volumen, garantizando un sabor consistente.',
        formato: 'Galón 4000g (Doypack con dispensador)',
        imagen: '/assets/aistudio/bbqgl_10c19256.png',
        nutricion: {
          porcion: '15g',
          calorias: '8.2 kcal',
          grasaTotal: '0g',
          sodio: '130mg',
          carbohidratos: '2.1g',
          azucares: '1.2g',
          fibra: '0.1g'
        }
      }
    ]
  },
  {
    id: 'sirope-miel',
    slug: 'miel',
    nombre: 'Sirope Sabor a Miel',
    categoria: 'siropes',
    subtitulo: 'El toque dulce y dorado para endulzar tus momentos',
    headlineIntro: 'Dulzura que Acompaña',
    descripcionLarga: 'Nuestro Sirope sabor a Miel ofrece una dulzura equilibrada y una textura ideal para acompañar una gran variedad de alimentos. Es perfecto para aderezar postres, endulzar bebidas, acompañar hojuelas de maíz, pollo frito y mucho más, aportando un sabor clásico y delicioso.',
    imagenPrincipal: '/assets/aistudio/miel8_0c449177.jpg',
    colorTheme: '#d97706',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    destacado: true,
    usosRecomendados: ['Pollo apanado y nuggets', 'Waffles, panqueques y postres', 'Hojuelas de maíz y cereales', 'Infusiones y bebidas'],
    presentaciones: [
      {
        tipo: 'Sobre 8g - Línea Premium',
        nombre: 'Sachet 8g Premium',
        descripcion: 'La dosis individual perfecta para acompañar porciones de pollo, postres o para endulzar bebidas con la máxima calidad.',
        formato: 'Sobre individual 8g',
        imagen: '/assets/aistudio/miel8_0c449177.jpg',
        nutricion: {
          porcion: '8g (1 sobre)',
          calorias: '25 kcal',
          grasaTotal: '0g',
          sodio: '0mg',
          carbohidratos: '6g',
          azucares: '6g',
          fibra: '0g'
        }
      },
      {
        tipo: 'Sobre 6g - Línea Económica',
        nombre: 'Sachet 6g Económica',
        descripcion: 'Una opción práctica y rentable para negocios de alto volumen, manteniendo el delicioso sabor que nos caracteriza.',
        formato: 'Sobre individual 6g',
        imagen: '/assets/aistudio/miel6_80743061.jpg',
        nutricion: {
          porcion: '6g (1 sobre)',
          calorias: '20 kcal',
          grasaTotal: '0g',
          sodio: '0mg',
          carbohidratos: '5g',
          azucares: '5g',
          fibra: '0g'
        }
      }
    ]
  },
  {
    id: 'salsa-picante',
    slug: 'salsa-picante',
    nombre: 'Salsa Picante (Ají) Buquin',
    categoria: 'clasicas',
    subtitulo: 'El toque justo de picor para despertar el sabor de tus comidas',
    headlineIntro: 'El Picor que Complementa',
    descripcionLarga: 'Nuestra Salsa Picante está elaborada a base de ají, ofreciendo un equilibrio perfecto entre sabor y picor. Es ideal para darle vida a empanadas, sopas, carnes y cualquier platillo que necesite un toque audaz y delicioso, sin ser abrumador.',
    imagenPrincipal: '/assets/aistudio/picante8_33e51b3a.jpg',
    colorTheme: '#b91c1c',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    destacado: false,
    usosRecomendados: ['Empanadas y pasteles salados', 'Sopas, caldos y sancochos', 'Asados y carnes a la plancha', 'Tacos y comidas mexicanas'],
    presentaciones: [
      {
        tipo: 'Sobre 8g - Línea Premium',
        nombre: 'Sachet 8g Premium',
        descripcion: 'La dosis individual ideal para que tus clientes personalicen el picante de sus platos al gusto exacto.',
        formato: 'Sobre individual 8g',
        imagen: '/assets/aistudio/picante8_33e51b3a.jpg',
        nutricion: {
          porcion: '8g (1 sobre)',
          calorias: '5 kcal',
          grasaTotal: '0g',
          sodio: '120mg',
          carbohidratos: '1g',
          azucares: '0g',
          fibra: '0.2g'
        }
      }
    ]
  },
  {
    id: 'salsa-rosada',
    slug: 'salsa-rosada',
    nombre: 'Salsa Rosada Buquin',
    categoria: 'clasicas',
    subtitulo: 'La combinación cremosa y clásica para tus comidas rápidas',
    headlineIntro: 'Cremosidad y Sabor Inigualable',
    descripcionLarga: 'Nuestra Salsa Rosada es la mezcla perfecta de salsa con tomate y mayonesa, creando un aderezo suave y delicioso que es el favorito de todos. Es indispensable para perros calientes, papas fritas, hamburguesas y pasabocas.',
    imagenPrincipal: '/assets/aistudio/rosada6_78580bf4.jpg',
    colorTheme: '#e11d48',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    destacado: false,
    usosRecomendados: ['Perros calientes tradicionales', 'Papas fritas y salchipapas', 'Cócteles de camarón y mariscos', 'Sándwiches y wraps'],
    presentaciones: [
      {
        tipo: 'Sobre 6g - Línea Económica',
        nombre: 'Sachet 6g Económica',
        descripcion: 'La dosis individual perfecta para grandes eventos y negocios de comida, garantizando sabor y practicidad.',
        formato: 'Sobre individual 6g',
        imagen: '/assets/aistudio/rosada6_78580bf4.jpg',
        nutricion: {
          porcion: '6g (1 sobre)',
          calorias: '15 kcal',
          grasaTotal: '1g',
          sodio: '110mg',
          carbohidratos: '1g',
          azucares: '1g',
          fibra: '0g'
        }
      }
    ]
  },
  {
    id: 'salsa-soya',
    slug: 'salsa-soya',
    nombre: 'Salsa de Soya Buquin',
    categoria: 'especiales',
    subtitulo: 'El toque oriental y aromático para sazonar tus mejores recetas',
    headlineIntro: 'Tradición Oriental en tu Cocina',
    descripcionLarga: 'Elaborada con fermentación controlada para lograr ese toque salino, profundo y aromático que realza carnes, arroces y salteados. Un básico infaltable en cocinas profesionales orientales y fusión.',
    imagenPrincipal: '/assets/aistudio/ssygl_c42f7dfc.jpg',
    colorTheme: '#374151',
    bgColor: 'bg-zinc-50',
    borderColor: 'border-zinc-300',
    destacado: false,
    usosRecomendados: ['Arroces orientales y salteados al wok', 'Marinado de carnes, pescados y pollo', 'Salsas agridulces y adobos', 'Cocinas de restaurantes y hoteles'],
    presentaciones: [
      {
        tipo: 'Galón 3700g Institucional',
        nombre: 'Galón 3700g',
        descripcion: 'Formato económico de alto rendimiento para chefs y restaurantes de comida asiática y tradicional.',
        formato: 'Galón 3700g',
        imagen: '/assets/aistudio/ssygl_c42f7dfc.jpg',
        nutricion: {
          porcion: '15ml',
          calorias: '12 kcal',
          grasaTotal: '0g',
          sodio: '920mg',
          carbohidratos: '1.2g',
          azucares: '0.4g',
          fibra: '0g'
        }
      }
    ]
  },
  {
    id: 'salsa-negra',
    slug: 'salsa-negra',
    nombre: 'Salsa Negra Buquin',
    categoria: 'especiales',
    subtitulo: 'Sabor intenso, cuerpo y color perfecto para aderezar tus carnes',
    headlineIntro: 'El Adobo Ideal para tus Carnes',
    descripcionLarga: 'Nuestra Salsa Negra proporciona cuerpo, color y una mezcla equilibrada de especias diseñada para resaltar el sabor natural de carnes rojas, guisados y marinados especiales.',
    imagenPrincipal: '/assets/aistudio/sngl_2c0dbc6a.jpg',
    colorTheme: '#1f2937',
    bgColor: 'bg-stone-50',
    borderColor: 'border-stone-300',
    destacado: false,
    usosRecomendados: ['Adobo previo a asados y parrilladas', 'Guisos tradicionales colombianos', 'Sazonador de hamburguesas y albóndigas', 'Cocina comercial y catering'],
    presentaciones: [
      {
        tipo: 'Galón 3800g Institucional',
        nombre: 'Galón 3800g',
        descripcion: 'Presentación rendidora para marinar grandes lotes de carne y preparaciones a granel.',
        formato: 'Galón 3800g',
        imagen: '/assets/aistudio/sngl_2c0dbc6a.jpg',
        nutricion: {
          porcion: '15ml',
          calorias: '14 kcal',
          grasaTotal: '0g',
          sodio: '850mg',
          carbohidratos: '2g',
          azucares: '1g',
          fibra: '0g'
        }
      }
    ]
  }
];
