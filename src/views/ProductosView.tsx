import React, { useState } from 'react';
import { Search, Filter, Sparkles, ArrowRight, Check, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductVisual } from '../components/ProductVisual';

interface ProductosViewProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductosView: React.FC<ProductosViewProps> = ({ onSelectProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [presentationIndices, setPresentationIndices] = useState<Record<string, number>>({});

  const handlePrevPres = (productId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setPresentationIndices(prev => {
      const current = prev[productId] || 0;
      return { ...prev, [productId]: (current - 1 + total) % total };
    });
  };

  const handleNextPres = (productId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setPresentationIndices(prev => {
      const current = prev[productId] || 0;
      return { ...prev, [productId]: (current + 1) % total };
    });
  };

  const filteredProducts = PRODUCTS.filter(prod => {
    const matchesSearch = prod.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subtitulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.descripcionLarga.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'todas') return true;
    if (selectedCategory === 'clasicas') return prod.categoria === 'clasicas';
    if (selectedCategory === 'siropes') return prod.categoria === 'siropes';
    if (selectedCategory === 'especiales') return prod.categoria === 'especiales';
    if (selectedCategory === 'galon') {
      return prod.presentaciones.some(p => p.tipo.toLowerCase().includes('galón') || p.tipo.toLowerCase().includes('galon'));
    }
    if (selectedCategory === 'sachet') {
      return prod.presentaciones.some(p => p.tipo.toLowerCase().includes('sobre') || p.tipo.toLowerCase().includes('sachet'));
    }
    return true;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-stone-900 via-red-950 to-stone-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 rounded-b-[2.5rem] text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 px-3 py-1 rounded-full">
            Catálogo Oficial Buquin
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Nuestros Productos
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
            Salsas elaboradas con las recetas tradicionales y los más altos estándares de calidad e inocuidad.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar salsa o presentación..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {[
                { id: 'todas', label: 'Todas las Salsas' },
                { id: 'clasicas', label: 'Salsas Clásicas' },
                { id: 'siropes', label: 'Siropes' },
                { id: 'especiales', label: 'Salsas Especiales' },
                { id: 'galon', label: 'Galones 4000g' },
                { id: 'sachet', label: 'Sobres / Sachets' },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid with Slides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
            <p className="text-stone-500 text-sm">No encontramos salsas que coincidan con tu búsqueda.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('todas'); }}
              className="mt-3 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => {
              const activeIndex = presentationIndices[prod.id] || 0;
              const currentPres = prod.presentaciones[activeIndex] || prod.presentaciones[0];
              const totalPres = prod.presentaciones.length;

              return (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  className="bg-white rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  {/* Card Visual & Carousel Header */}
                  <div className="relative p-5 bg-stone-50/50">
                    <ProductVisual
                      productId={prod.id}
                      presentationType={currentPres.tipo}
                      imageSrc={currentPres.imagen || prod.imagenPrincipal}
                      alt={`${prod.nombre} - ${currentPres.tipo}`}
                      size="md"
                    />

                    {/* Carousel navigation controls if more than 1 presentation */}
                    {totalPres > 1 && (
                      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-2">
                        <button
                          onClick={(e) => handlePrevPres(prod.id, totalPres, e)}
                          className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-stone-200"
                          aria-label="Presentación anterior"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => handleNextPres(prod.id, totalPres, e)}
                          className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-stone-200"
                          aria-label="Siguiente presentación"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {/* Dots indicator */}
                    {totalPres > 1 && (
                      <div className="flex justify-center gap-1.5 mt-3">
                        {prod.presentaciones.map((_, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === activeIndex ? 'w-5 bg-red-600' : 'bg-stone-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                          {prod.categoria}
                        </span>
                        <span className="text-[11px] font-medium text-stone-500">
                          {currentPres.formato}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-stone-900 mt-2 group-hover:text-red-600 transition-colors">
                        {prod.nombre}
                      </h3>

                      <p className="text-xs font-semibold text-red-700 mt-1">
                        {currentPres.tipo}
                      </p>

                      <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                        {currentPres.descripcion}
                      </p>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-700 flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-stone-400" />
                        Ficha &amp; Nutrición
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                        Ver Página de Producto
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
