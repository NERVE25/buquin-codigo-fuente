import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Flame, 
  Droplets, 
  Sparkles, 
  ExternalLink, 
  Check, 
  Send 
} from 'lucide-react';
import { REGIONS_BUY, COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';

export const ComprarView: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(REGIONS_BUY[0].city);
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['salsa-tomate', 'salsa-bbq']);
  const [orderType, setOrderType] = useState<'restaurante' | 'distribuidor' | 'personal'>('restaurante');

  const toggleProduct = (id: string) => {
    setSelectedProducts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const selectedProductNames = PRODUCTS.filter(p => selectedProducts.includes(p.id)).map(p => p.nombre).join(', ');

  const generateWhatsAppLink = (cityText: string) => {
    const orderDetails = selectedProductNames ? `\nProductos de interés: ${selectedProductNames}` : '';
    const typeLabel = orderType === 'restaurante' ? 'Restaurante / Comidas Rápidas' : orderType === 'distribuidor' ? 'Distribuidor / Mayorista' : 'Consumo Personal';
    const text = encodeURIComponent(
      `Hola Productos Buquin SAS. ${cityText}\nTipo de negocio: ${typeLabel}.${orderDetails}\n¿Me podrían brindar información de contacto del distribuidor o lista de precios?`
    );
    return `https://wa.me/573176591699?text=${text}`;
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-stone-900 via-red-950 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 rounded-b-[2.5rem] text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 text-red-300 text-xs font-semibold border border-red-500/40">
            <ShoppingBag className="w-3.5 h-3.5 text-red-400" />
            Ventas &amp; Red de Distribución
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Encuentra Nuestros Productos
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Descubre nuestras líneas de sabor y contacta directamente al distribuidor autorizado de tu zona.
          </p>
        </div>
      </section>

      {/* Líneas de Sabor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Variedad para tu Mesa
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            Nuestras Líneas de Sabor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Flame className="w-6 h-6" />
                </div>
                {/* Thumbnails of classic products */}
                <div className="flex -space-x-2">
                  <img src="/assets/aistudio/tomate8_9157d505.jpg" alt="Salsa Tomate" className="w-10 h-10 object-contain rounded-xl bg-white border border-stone-200 shadow-xs p-0.5" />
                  <img src="/assets/aistudio/bbq8_5a5aecf8.jpg" alt="Salsa BBQ" className="w-10 h-10 object-contain rounded-xl bg-white border border-stone-200 shadow-xs p-0.5" />
                  <img src="/assets/aistudio/picante8_33e51b3a.jpg" alt="Salsa Picante" className="w-10 h-10 object-contain rounded-xl bg-white border border-stone-200 shadow-xs p-0.5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-stone-900">Salsas Clásicas</h3>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                El sabor tradicional que no puede faltar en tu mesa: Tomate, BBQ ahumada, Ají Picante y Rosada.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-red-600 block mt-4">
              Sachets 6g, 8g y Galón 4000g
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Droplets className="w-6 h-6" />
                </div>
                {/* Thumbnails of miel products */}
                <div className="flex -space-x-2">
                  <img src="/assets/aistudio/miel8_0c449177.jpg" alt="Sirope Miel 8g" className="w-10 h-10 object-contain rounded-xl bg-white border border-stone-200 shadow-xs p-0.5" />
                  <img src="/assets/aistudio/miel6_80743061.jpg" alt="Sirope Miel 6g" className="w-10 h-10 object-contain rounded-xl bg-white border border-stone-200 shadow-xs p-0.5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-stone-900">Siropes Dulces</h3>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                El toque perfecto de dulzura dorada con nuestro inconfundible Sirope sabor a Miel.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-amber-600 block mt-4">
              Sachets 6g y 8g Premium
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-stone-800" />
                </div>
                {/* Thumbnails of special galones */}
                <div className="flex -space-x-2">
                  <img src="/assets/aistudio/ssygl_c42f7dfc.jpg" alt="Salsa Soya Galón" className="w-10 h-10 object-contain rounded-xl bg-white border border-stone-200 shadow-xs p-0.5" />
                  <img src="/assets/aistudio/sngl_2c0dbc6a.jpg" alt="Salsa Negra Galón" className="w-10 h-10 object-contain rounded-xl bg-white border border-stone-200 shadow-xs p-0.5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-stone-900">Salsas Especiales</h3>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Para preparaciones culinarias únicas: dale un giro a tus recetas con Salsa de Soya y Salsa Negra.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-stone-700 block mt-4">
              Galón institucional 3700g y 3800g
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Region Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Cobertura Nacional
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              Contacta a tu Distribuidor Autorizado
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-xl mx-auto">
              Tenemos presencia en las principales ciudades y departamentos. Selecciona tu zona para consultar el contacto inmediato por WhatsApp.
            </p>
          </div>

          {/* Quick builder for customized WhatsApp inquiry */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 mb-8 max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                  Simulador de Pedido Mayorista
                </span>
                <h3 className="text-lg font-black text-stone-900">
                  Arma tu Cotización Rápida para Negocio o Restaurante
                </h3>
              </div>
              <span className="text-[11px] text-stone-500 bg-stone-100 px-3 py-1 rounded-full font-medium">
                Despachos desde Soacha
              </span>
            </div>

            {/* Business type */}
            <div className="mb-6">
              <span className="text-xs text-stone-600 block mb-2 font-bold uppercase tracking-wider">
                1. Tipo de Establecimiento:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'restaurante', label: 'Restaurante / Comidas Rápidas' },
                  { id: 'asadero', label: 'Asadero de Pollo / Parrilla' },
                  { id: 'distribuidor', label: 'Distribuidor / Mayorista' },
                  { id: 'casino', label: 'Casino / Comedor Institucional' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setOrderType(type.id as any)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      orderType === type.id
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Products of interest */}
            <div className="mb-6">
              <span className="text-xs text-stone-600 block mb-2 font-bold uppercase tracking-wider">
                2. Selecciona las salsas que necesitas:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {PRODUCTS.map((prod) => {
                  const isChecked = selectedProducts.includes(prod.id);
                  return (
                    <button
                      key={prod.id}
                      onClick={() => toggleProduct(prod.id)}
                      className={`p-2 rounded-xl text-xs font-semibold border text-left flex items-center justify-between gap-1.5 transition-all ${
                        isChecked
                          ? 'bg-red-50 border-red-500 text-red-900 shadow-xs'
                          : 'bg-stone-50/50 border-stone-200 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        {prod.imagenPrincipal && (
                          <img 
                            src={prod.imagenPrincipal} 
                            alt={prod.nombre} 
                            className="w-5 h-5 object-contain rounded shrink-0 bg-white" 
                          />
                        )}
                        <span className="truncate">{prod.nombre}</span>
                      </div>
                      {isChecked ? (
                        <Check className="w-4 h-4 text-red-600 shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-stone-300 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Summary preview button */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-stone-500 uppercase block">Resumen del pedido:</span>
                <p className="text-xs text-stone-800 font-medium">
                  {selectedProductNames || 'Ninguna salsa seleccionada aún'}
                </p>
              </div>

              <a
                href={generateWhatsAppLink(`Hola Productos Buquin, deseo cotizar salsas para mi negocio en ${selectedCity}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Cotización a WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Regional Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS_BUY.map((region, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <h3 className="text-base font-bold text-stone-900">{region.city}</h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {region.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <a
                    href={generateWhatsAppLink(region.phoneText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Accordion Section */}
          <div className="mt-14 pt-10 border-t border-stone-200">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Resuelve tus dudas
              </span>
              <h3 className="text-xl font-black text-stone-900">
                Preguntas Frecuentes de Clientes y Restaurantes
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {[
                {
                  q: '¿Tienen pedido mínimo para despachos en Bogotá y la Sabana?',
                  a: 'Para despachos directos en Bogotá y Soacha manejamos compras por cajas cerradas de sobres o paquetes de galones. También puedes comprar por unidades a través de nuestros distribuidores zonales aliados.'
                },
                {
                  q: '¿Qué vida útil o vencimiento tienen las salsas?',
                  a: 'Nuestras salsas (tanto en sobres individuales como en galones de 4000g) cuentan con una vida útil garantizada de 1 año (12 meses) conservadas en lugar fresco y seco, gracias a nuestro empaque con barrera hermética y rigurosos estándares de inocuidad alimentaria.'
                },
                {
                  q: '¿Cuentan con registro sanitario INVIMA y factura electrónica?',
                  a: 'Sí, absolutamente. Todos los productos elaborados en nuestra planta de Soacha cuentan con registro sanitario INVIMA vigente y emitimos factura electrónica para empresas, casinos y restaurantes formalizados.'
                },
                {
                  q: '¿Hacen despachos a otras ciudades fuera de Cundinamarca?',
                  a: 'Sí. Atendemos Santander, Antioquia, Eje Cafetero, Valle del Cauca y costa a través de distribuidores autorizados o por despachos coordinados con transportadoras de alimentos certificadas.'
                }
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-2xl p-4 border border-stone-200 shadow-xs transition-all open:ring-1 open:ring-red-500/20"
                >
                  <summary className="font-bold text-xs text-stone-900 cursor-pointer flex items-center justify-between list-none">
                    <span>{faq.q}</span>
                    <span className="text-red-600 font-black text-sm group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="mt-2.5 pt-2.5 border-t border-stone-100 text-xs text-stone-600 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
