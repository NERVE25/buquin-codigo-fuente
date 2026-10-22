import React from 'react';
import { 
  ArrowRight, 
  Truck, 
  ShoppingBasket, 
  Award, 
  Sparkles, 
  CheckCircle, 
  Flame, 
  Droplets, 
  Building2, 
  Users 
} from 'lucide-react';
import { PageId, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductVisual } from '../components/ProductVisual';
import { COMPANY_INFO } from '../data/company';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectProduct }) => {
  const featuredProducts = PRODUCTS.filter(p => p.destacado);

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section with appetizing commercial food photography background */}
      <section 
        className="relative overflow-hidden text-white py-24 lg:py-36 px-4 sm:px-6 lg:px-8 rounded-b-[2.5rem] shadow-2xl bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/home_banner_notext_1792615499832.jpg')` }}
      >
        {/* Dark dramatic overlay to make text crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/75 to-stone-950/90 backdrop-blur-[0.5px]" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/30 border border-red-500/40 text-red-200 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Más de 20 años de tradición y sabor colombiano</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            El sabor que une momentos
          </h1>

          <p className="text-base sm:text-xl text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Descubre la calidad y tradición en cada uno de nuestros productos. Salsas y aderezos hechos con orgullo para deleitar tu mesa y tu negocio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('productos')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl hover:shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Ver Catálogo Completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('nosotros')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-xs transition-colors"
            >
              <span>Conoce Nuestra Historia</span>
            </button>
          </div>

          {/* Value Badges */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 text-left">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-2xl font-black text-red-400 block">+20 Años</span>
              <span className="text-xs text-stone-400">Trayectoria nacional</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-2xl font-black text-amber-400 block">7+ Líneas</span>
              <span className="text-xs text-stone-400">De sabor institucional</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-2xl font-black text-emerald-400 block">100%</span>
              <span className="text-xs text-stone-400">Empresa colombiana</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-2xl font-black text-blue-400 block">INVIMA</span>
              <span className="text-xs text-stone-400">Garantía sanitaria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Nuestra Esencia</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Quiénes Somos
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              En nuestra compañía <strong>Productos Buquin SAS</strong>, nos dedicamos a la elaboración de salsas que realzan el sabor de tus comidas. Con más de 20 años de experiencia, combinamos ingredientes de alta calidad con recetas únicas para ofrecer productos irresistibles tanto para el consumo familiar como para restaurantes y cadenas de comida rápida.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-stone-700">
              <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Empresa familiar fundada en 2004</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Planta de producción propia en Soacha</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('nosotros')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all"
              >
                <span>Conoce más sobre nosotros</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200 flex flex-col justify-between group">
            {/* Foto completa sin recortar personas */}
            <div className="p-3 bg-stone-100/80">
              <img 
                src="/assets/aistudio/equipo1_d443cee7.jpg" 
                alt="Familia y Equipo de Productos Buquin" 
                className="w-full h-auto rounded-2xl shadow-xs object-contain group-hover:scale-[1.01] transition-transform" 
              />
            </div>
            
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                  Pasión &amp; Familia
                </span>
                <span className="text-[11px] font-bold text-stone-500">
                  Tradición desde 2004
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Buquin:</strong> Buitrago + Quintana. Nuestro equipo de colaboradores y familia frente a la planta principal en Soacha.
              </p>
              <div className="pt-2 text-[11px] text-stone-500 border-t border-stone-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span><strong>Planta y Despachos:</strong> Transversal 18i 5-05, Soacha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Estrella */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Los Preferidos de Nuestros Clientes
          </span>
          <h2 className="text-3xl font-black text-stone-900">
            Nuestros Productos Estrella
          </h2>
          <p className="text-stone-500 text-sm max-w-lg mx-auto">
            Descubre los sabores icónicos que no pueden faltar en tu mesa o establecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              className="group bg-white rounded-3xl p-6 border border-stone-200 hover:border-red-500/50 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <ProductVisual 
                  productId={prod.id} 
                  presentationType={prod.presentaciones[0]?.tipo}
                  imageSrc={prod.imagenPrincipal}
                  alt={prod.nombre}
                  size="md" 
                />
                <div className="mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                    {prod.categoria}
                  </span>
                  <h3 className="text-lg font-black text-stone-900 mt-1.5 group-hover:text-red-600 transition-colors">
                    {prod.nombre}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1">
                    {prod.subtitulo}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-600">
                  {prod.presentaciones.length} presentaciones
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                  Ver Producto
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('productos')}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1: Ser Distribuidor */}
          <div className="bg-gradient-to-br from-emerald-900 to-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center">
                <Truck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">
                ¿Quieres ser Distribuidor?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Únete a nuestra red nacional de socios comerciales y lleva el inconfundible sabor de Productos Buquin a cada rincón del país con excelentes márgenes de ganancia.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onNavigate('distribuidores')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 uppercase tracking-wider"
              >
                <span>Más Información y Requisitos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Box 2: Quiero Comprar */}
          <div className="bg-gradient-to-br from-red-950 to-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600/30 border border-red-500/40 flex items-center justify-center">
                <ShoppingBasket className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">
                ¿Quieres Comprar?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Ideal para restaurantes, negocios de comida rápida o grandes consumidores. Consulta a tu distribuidor más cercano o realiza tus pedidos directamente por WhatsApp.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onNavigate('comprar')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 uppercase tracking-wider"
              >
                <span>Realizar un Pedido</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
