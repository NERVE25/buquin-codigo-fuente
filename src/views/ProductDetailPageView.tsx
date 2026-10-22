import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  MessageCircle, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Share2
} from 'lucide-react';
import { Product, PageId } from '../types';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailPageViewProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageId) => void;
}

export const ProductDetailPageView: React.FC<ProductDetailPageViewProps> = ({
  product,
  onSelectProduct,
  onNavigate
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  // Map each product to its real photographic banner
  const getProductHeroBanner = (productId: string) => {
    if (productId === 'salsa-tomate') {
      return '/assets/banners/tomato_hero_banner_1792613875789.jpg';
    }
    if (productId === 'salsa-bbq') {
      return '/assets/banners/bbq_hero_banner_1792613892278.jpg';
    }
    if (productId === 'sirope-miel') {
      return '/assets/banners/miel_hero_banner_1792613905635.jpg';
    }
    if (productId === 'salsa-picante') {
      return '/assets/banners/spicy_hero_banner_1792613918601.jpg';
    }
    if (productId === 'salsa-soya' || productId === 'salsa-negra') {
      return '/assets/banners/asian_culinary_banner_1792613939117.jpg';
    }
    return '/assets/banners/tomato_hero_banner_1792613875789.jpg';
  };

  // WhatsApp link generator
  const getWhatsAppOrderLink = (presentationName?: string) => {
    const text = encodeURIComponent(
      `Hola Productos Buquin SAS. Me interesa solicitar cotización de: ${product.nombre}${presentationName ? ` (${presentationName})` : ''}. ¿Podrían brindarme información de precios y disponibilidad para mi negocio?`
    );
    return `https://wa.me/573176591699?text=${text}`;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Find previous and next products for footer switcher
  const currentIndex = PRODUCTS.findIndex(p => p.id === product.id);
  const prevProduct = PRODUCTS[(currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length];
  const nextProduct = PRODUCTS[(currentIndex + 1) % PRODUCTS.length];

  const currentBanner = getProductHeroBanner(product.id);

  return (
    <div className="space-y-12 pb-20 bg-stone-50/40">
      {/* Top Bar: Breadcrumbs & Quick Sauce Switcher */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          {/* Breadcrumb & back button */}
          <div className="flex items-center gap-2 text-stone-500 font-medium w-full md:w-auto">
            <button
              onClick={() => onNavigate('productos')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver al Catálogo</span>
            </button>
            <span className="text-stone-300">/</span>
            <button onClick={() => onNavigate('inicio')} className="hover:text-stone-900 transition-colors">
              Inicio
            </button>
            <span className="text-stone-300">/</span>
            <button onClick={() => onNavigate('productos')} className="hover:text-stone-900 transition-colors">
              Productos
            </button>
            <span className="text-stone-300">/</span>
            <span className="text-stone-900 font-bold">{product.nombre}</span>
          </div>

          {/* Quick share or direct quote */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 transition-colors"
              title="Copiar enlace del producto"
            >
              <Share2 className="w-3.5 h-3.5 text-stone-500" />
              <span>{copiedLink ? '¡Enlace copiado!' : 'Compartir'}</span>
            </button>
            <a
              href={getWhatsAppOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Cotizar {product.nombre}</span>
            </a>
          </div>
        </div>

        {/* Quick Sauce Switcher Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-max">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1">
              Ver otra salsa:
            </span>
            {PRODUCTS.map((p) => {
              const isActive = p.id === product.id;
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {p.imagenPrincipal && (
                    <img 
                      src={p.imagenPrincipal} 
                      alt={p.nombre} 
                      className="w-4 h-4 object-contain rounded shrink-0 bg-white" 
                    />
                  )}
                  <span>{p.nombre}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          PANORAMIC HERO BANNER CON FOTOGRAFÍA REAL DE ALTA CALIDAD (SIN DIBUJOS)
          ========================================================================= */}
      <section 
        className="relative overflow-hidden text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 shadow-xl bg-cover bg-center border-y border-stone-800 transition-all duration-500"
        style={{ backgroundImage: `url(${currentBanner})` }}
      >
        {/* Subtle dark gradient overlay to ensure 100% text readability over real photograph */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85" />

        {/* Central Content (Matches exact text from user screenshot) */}
        <div className="relative max-w-4xl mx-auto text-center space-y-4 z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Poppins',sans-serif] drop-shadow-md">
            {product.nombre} Buquin
          </h1>
          <p className="text-base sm:text-xl text-stone-200 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            {product.subtitulo}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium border border-white/20 backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garantía Sanitaria INVIMA</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium border border-white/20 backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{product.presentaciones.length} Presentaciones Disponibles</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium border border-white/20 backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
              <span>Vida Útil: 1 Año</span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DESCRIPCIÓN GENERAL ("Calidad y Sabor en cada Presentación")
          FOTOGRAFÍA REAL A LA IZQUIERDA + TÍTULO DORADO Y TEXTO A LA DERECHA
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Real Photographic Poster / Real Image Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            {product.id === 'salsa-tomate' ? (
              /* The exact original poster image cropped from user's layout */
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-700/20 max-w-sm hover:scale-[1.02] transition-transform duration-300 bg-white">
                <img 
                  src="/assets/aistudio/poster_tomate_perfect.png" 
                  alt="Afiche oficial Salsa con Tomate Buquin" 
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              /* Real Packshot Showcase Card for the other products */
              <div className="w-full max-w-md bg-stone-50 rounded-3xl p-6 border border-stone-200 shadow-xl flex flex-col items-center text-center">
                <div className="h-64 sm:h-72 w-full flex items-center justify-center p-4 bg-white rounded-2xl shadow-inner mb-4">
                  <img 
                    src={product.imagenPrincipal} 
                    alt={product.nombre} 
                    className="max-h-full max-w-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-black text-stone-900 text-lg uppercase tracking-tight">
                  {product.nombre} Buquin
                </h3>
                <span className="text-xs font-semibold text-red-600 mt-1">
                  Línea Institucional y Consumo Masivo
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Title in Golden Warm Ochre + Description */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              {/* Exact Golden / Warm Ochre Color Header from user screenshot: #b4832c */}
              <h2 className="text-2xl sm:text-4xl font-black text-[#b4832c] tracking-tight leading-tight">
                {product.headlineIntro || 'Calidad y Sabor en cada Presentación'}
              </h2>
              <div className="w-16 h-1 bg-[#b4832c] rounded-full mt-3" />
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {product.descripcionLarga}
            </p>

            {/* Usos Recomendados & Puntos Fuertes */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Usos recomendados y beneficios:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-stone-800">
                {product.usosRecomendados.map((uso, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{uso}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotizar {product.nombre} al {COMPANY_INFO.phoneFormatted}</span>
              </a>

              <button
                onClick={() => onNavigate('comprar')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors text-center"
              >
                Ver Distribuidores por Ciudad
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN DE PRESENTACIONES (CON FOTOGRAFÍAS REALES Y TABLAS NUTRICIONALES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-[#f8f9fa] rounded-3xl p-8 sm:p-12 border border-stone-200/80">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Formatos Disponibles
            </span>
            <h2 className="text-3xl font-black text-stone-900">
              Nuestras Presentaciones
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-lg mx-auto">
              Fotografías oficiales de empaque para cada tamaño disponible.
            </p>
          </div>

          {/* Grid of presentation cards with clean nutrition tables */}
          <div className={`grid grid-cols-1 ${
            product.presentaciones.length === 1 
              ? 'max-w-md mx-auto' 
              : product.presentaciones.length === 2 
                ? 'md:grid-cols-2 max-w-4xl mx-auto' 
                : 'md:grid-cols-2 lg:grid-cols-3'
          } gap-8`}>
            {product.presentaciones.map((pres, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Real Photo Packshot */}
                  <div className="h-56 w-full flex items-center justify-center p-4 bg-stone-50 rounded-2xl border border-stone-100 group-hover:bg-white transition-colors mb-6">
                    <img 
                      src={pres.imagen || product.imagenPrincipal} 
                      alt={`${product.nombre} - ${pres.nombre}`} 
                      className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Header */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full inline-block">
                      {pres.formato}
                    </span>
                    <h3 className="text-lg font-black text-stone-900 group-hover:text-red-600 transition-colors">
                      {pres.tipo}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {pres.descripcion}
                    </p>
                  </div>

                  {/* Nutritional Info Table */}
                  {pres.nutricion && (
                    <div className="mt-4 pt-4 border-t border-stone-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                          Información Nutricional
                        </span>
                        {pres.nutricion.porcion && (
                          <span className="text-[10px] text-stone-400 font-medium">
                            Porción: {pres.nutricion.porcion}
                          </span>
                        )}
                      </div>

                      <div className="rounded-xl overflow-hidden border border-stone-200 text-xs">
                        <table className="w-full text-left">
                          <tbody>
                            <tr className="border-b border-stone-100 bg-stone-50/60">
                              <td className="py-1.5 px-3 font-medium text-stone-600">Calorías</td>
                              <td className="py-1.5 px-3 font-bold text-stone-900 text-right">{pres.nutricion.calorias}</td>
                            </tr>
                            <tr className="border-b border-stone-100">
                              <td className="py-1.5 px-3 font-medium text-stone-600">Grasa Total</td>
                              <td className="py-1.5 px-3 font-bold text-stone-900 text-right">{pres.nutricion.grasaTotal}</td>
                            </tr>
                            <tr className="border-b border-stone-100 bg-stone-50/60">
                              <td className="py-1.5 px-3 font-medium text-stone-600">Sodio</td>
                              <td className="py-1.5 px-3 font-bold text-stone-900 text-right">{pres.nutricion.sodio}</td>
                            </tr>
                            <tr className="border-b border-stone-100">
                              <td className="py-1.5 px-3 font-medium text-stone-600">Carbohidratos</td>
                              <td className="py-1.5 px-3 font-bold text-stone-900 text-right">{pres.nutricion.carbohidratos}</td>
                            </tr>
                            <tr className="border-b border-stone-100 bg-stone-50/60">
                              <td className="py-1.5 px-3 font-medium text-stone-600">Azúcares</td>
                              <td className="py-1.5 px-3 font-bold text-stone-900 text-right">{pres.nutricion.azucares}</td>
                            </tr>
                            {pres.nutricion.fibra && (
                              <tr>
                                <td className="py-1.5 px-3 font-medium text-stone-600">Fibra</td>
                                <td className="py-1.5 px-3 font-bold text-stone-900 text-right">{pres.nutricion.fibra}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Order Button for this specific presentation */}
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <a
                    href={getWhatsAppOrderLink(pres.tipo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs active:scale-95 group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-white" />
                    <span>Cotizar {pres.tipo}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Switcher: Previous & Next Product */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-3xl border border-stone-200 shadow-xs">
          <button
            onClick={() => onSelectProduct(prevProduct)}
            className="w-full sm:w-auto inline-flex items-center gap-3 text-left p-2 rounded-xl hover:bg-stone-50 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 text-stone-400 group-hover:text-red-600 transition-colors" />
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Salsa Anterior
              </span>
              <span className="text-sm font-black text-stone-800 group-hover:text-red-600 transition-colors">
                {prevProduct.nombre}
              </span>
            </div>
          </button>

          <button
            onClick={() => onNavigate('productos')}
            className="px-6 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors"
          >
            Ver Todas las Salsas
          </button>

          <button
            onClick={() => onSelectProduct(nextProduct)}
            className="w-full sm:w-auto inline-flex items-center justify-end gap-3 text-right p-2 rounded-xl hover:bg-stone-50 transition-colors group"
          >
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Siguiente Salsa
              </span>
              <span className="text-sm font-black text-stone-800 group-hover:text-red-600 transition-colors">
                {nextProduct.nombre}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-red-600 transition-colors" />
          </button>
        </div>
      </section>
    </div>
  );
};
