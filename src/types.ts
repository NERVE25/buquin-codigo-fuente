export type PageId = 
  | 'inicio' 
  | 'nosotros' 
  | 'productos' 
  | 'distribuidores' 
  | 'comprar' 
  | 'trabaja-con-nosotros'
  | 'auditoria';

export interface NutritionalInfo {
  porcion?: string;
  calorias: string;
  grasaTotal: string;
  sodio: string;
  carbohidratos: string;
  azucares: string;
  fibra?: string;
}

export interface ProductPresentation {
  tipo: string;
  nombre: string;
  descripcion: string;
  formato: string;
  imagen?: string;
  nutricion?: NutritionalInfo;
}

export interface Product {
  id: string;
  slug: string;
  nombre: string;
  categoria: 'clasicas' | 'siropes' | 'especiales';
  subtitulo: string;
  headlineIntro?: string;
  descripcionLarga: string;
  imagenPrincipal?: string;
  colorTheme: string;
  bgColor: string;
  borderColor: string;
  destacado: boolean;
  presentaciones: ProductPresentation[];
  usosRecomendados: string[];
}

export interface DistributorInquiry {
  razonSocial: string;
  nit: string;
  nombreContacto: string;
  email: string;
  telefono: string;
  ciudad: string;
  mensaje?: string;
}

export interface JobApplication {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  fileName?: string;
}
