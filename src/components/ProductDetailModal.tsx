import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Utensils, Info } from 'lucide-react';
import { Product } from '../types';
import { ProductVisual } from './ProductVisual';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose
}) => {
  if (!product) return null;

  const [selectedPresIndex, setSelectedPresIndex] = useState(0);
  const currentPres = product.presentaciones[selectedPresIndex] || product.presentaciones[0];

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa solicitar cotización del producto: ${product.nombre} (${currentPres.tipo}). ¿Podrían darme más información sobre precios y disponibilidad?`
  );
  const whatsappLink = `https://wa.me/573176591699?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/80">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Ficha Técnica de Producto
            </span>
            <h3 className="text-xl font-black text-stone-900">{product.nombre}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Visual preview */}
            <div>
              <ProductVisual 
                productId={product.id} 
                presentationType={currentPres.tipo} 
                imageSrc={currentPres.imagen || product.imagenPrincipal}
                alt={`${product.nombre} - ${currentPres.tipo}`}
                size="lg" 
              />
              <p className="text-xs text-center text-stone-500 font-medium mt-2">
                Fotografía original de empaque y presentación
              </p>
            </div>

            {/* General Info */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-red-700">{product.subtitulo}</p>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {product.descripcionLarga}
                </p>
              </div>

              {/* Selector de presentaciones */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Seleccionar Presentación:
                </label>
                <div className="space-y-2">
                  {product.presentaciones.map((pres, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPresIndex(idx)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${
                        selectedPresIndex === idx
                          ? 'border-red-600 bg-red-50/80 text-red-900 shadow-xs'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                      }`}
                    >
                      <span>{pres.tipo}</span>
                      {selectedPresIndex === idx && (
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current presentation details */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80">
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-red-600" />
              Detalle de la presentación: {currentPres.tipo}
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              {currentPres.descripcion}
            </p>

            {/* Nutrition table */}
            {currentPres.nutricion && (
              <div className="bg-white rounded-xl p-3 border border-stone-200 shadow-xs">
                <div className="flex items-center justify-between mb-2 pb-1 border-b border-stone-100">
                  <span className="text-xs font-bold text-stone-900 uppercase">Tabla Nutricional</span>
                  <span className="text-[11px] text-stone-500 font-medium">
                    Porción: {currentPres.nutricion.porcion || 'Estándar'}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 bg-stone-50 rounded-lg">
                    <span className="text-stone-400 block text-[10px]">Energía</span>
                    <span className="font-bold text-stone-800">{currentPres.nutricion.calorias}</span>
                  </div>
                  <div className="p-2 bg-stone-50 rounded-lg">
                    <span className="text-stone-400 block text-[10px]">Grasa</span>
                    <span className="font-bold text-stone-800">{currentPres.nutricion.grasaTotal}</span>
                  </div>
                  <div className="p-2 bg-stone-50 rounded-lg">
                    <span className="text-stone-400 block text-[10px]">Sodio</span>
                    <span className="font-bold text-stone-800">{currentPres.nutricion.sodio}</span>
                  </div>
                  <div className="p-2 bg-stone-50 rounded-lg">
                    <span className="text-stone-400 block text-[10px]">Azúcares</span>
                    <span className="font-bold text-stone-800">{currentPres.nutricion.azucares}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Usos recomendados */}
          <div>
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-red-600" />
              Usos gastronómicos ideales
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.usosRecomendados.map((uso, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 px-3 py-2 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>{uso}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications strip */}
          <div className="p-3 bg-stone-100/70 rounded-2xl border border-stone-200 text-stone-600 text-[11px] grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <span className="font-bold text-stone-800 block">Registro Sanitario:</span>
              <span>INVIMA Vigente para alimentos</span>
            </div>
            <div>
              <span className="font-bold text-stone-800 block">Vida Útil:</span>
              <span>1 año (12 meses) en lugar fresco y seco</span>
            </div>
            <div>
              <span className="font-bold text-stone-800 block">Empaque:</span>
              <span>Trilaminado barrera / Polietileno HD</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 px-6 border-t border-stone-100 bg-stone-50 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <span className="text-xs text-stone-500">
            Productos Buquin SAS • Soacha, Colombia
          </span>
          <div className="flex w-full sm:w-auto gap-2">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-800 rounded-xl hover:bg-stone-200/50 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar en WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
