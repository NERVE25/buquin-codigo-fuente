import React, { useState } from 'react';
import { 
  Building, 
  Heart, 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Truck, 
  Users,
  ShieldCheck,
  Maximize2,
  X
} from 'lucide-react';
import { TIMELINE_MILESTONES, COMPANY_INFO, TimelineImage } from '../data/company';

export const NosotrosView: React.FC = () => {
  const [activeZoomImage, setActiveZoomImage] = useState<TimelineImage | null>(null);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero with authentic factory & company ambiance */}
      <section 
        className="relative overflow-hidden text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 rounded-b-[2.5rem] text-center shadow-xl bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/home_banner_notext_1792615499832.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/80 to-stone-950/90 backdrop-blur-[0.5px]" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 text-red-200 text-xs font-semibold border border-red-500/40 backdrop-blur-xs">
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            Nuestra Historia &amp; Identidad
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
            Una Familia, un Sueño, un Sabor
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
            Más de 20 años de historia, esfuerzo y recetas auténticas en cada gota de nuestras salsas.
          </p>
        </div>
      </section>

      {/* Introducción a la Historia con Fotos Auténticas de la Planta */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Card Left: Brand origin highlight with real photos */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-white flex flex-col justify-between">
            {/* Foto completa sin recortar personas */}
            <div className="p-3 bg-stone-100/90 relative">
              <img 
                src="/assets/aistudio/equipo1_d443cee7.jpg" 
                alt="Familia y Equipo de Productos Buquin SAS" 
                className="w-full h-auto rounded-2xl shadow-xs object-contain"
              />
              {/* Logo Stamp */}
              <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/95 p-1 shadow-md border border-stone-200">
                <img 
                  src="/assets/aistudio/logob_865b9df2.jpg" 
                  alt="Logo Oficial Buquin" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="p-6 bg-stone-900 text-white space-y-3 text-center">
              <h3 className="text-lg font-black uppercase tracking-tight text-white">El Origen del Nombre</h3>
              <div className="py-2.5 px-4 bg-white/10 rounded-xl border border-white/10 text-xs text-stone-200">
                <p><strong className="text-red-400 font-bold">BU</strong>ITRAGO + <strong className="text-red-400 font-bold">QUIN</strong>TANA = <strong className="text-amber-300 font-bold">BUQUIN</strong></p>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Símbolo de amistad, trabajo en equipo y una visión que comenzó en Bogotá en 2004 y hoy sigue viva con la familia Buitrago.
              </p>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Trayectoria de Calidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              Nuestra Historia
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              En el año <strong>2004</strong>, Jorge Buitrago, motivado por la trayectoria laboral que forjó en su juventud, tomó la decisión de hacer realidad su sueño de emprender: tener su propio negocio y ser independiente. Junto a su socio Misael Quintana nació <strong>Productos Buquin</strong>.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Con el paso del tiempo, la sociedad se disolvió y la empresa quedó a nombre de Jorge Buitrago, quien con el apoyo incondicional de su familia continuó construyendo lo que soñó en un inicio. Aunque hoy Misael ya no nos acompaña, su valioso aporte en los primeros pasos de la empresa hace parte de nuestra memoria histórica y siempre será recordado con profunda gratitud.
            </p>
            <p className="text-sm font-medium text-stone-800 bg-red-50 p-4 rounded-xl border border-red-100">
              Hoy, después de más de 20 años, seguimos siendo una <strong>empresa familiar</strong> que conserva la misma esencia: <strong>trabajo con amor, compromiso con la calidad y pasión por el sabor.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LÍNEA DEL TIEMPO CON TUS FOTOGRAFÍAS REALES E HISTÓRICAS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Línea del Tiempo
          </span>
          <h2 className="text-3xl font-black text-stone-900">
            Hitos de Nuestra Trayectoria
          </h2>
          <p className="text-stone-500 text-sm max-w-lg mx-auto">
            Galería histórica con las fotografías reales del camino recorrido por Productos Buquin.
          </p>
        </div>

        <div className="relative border-l-2 border-red-200 ml-4 sm:ml-32 space-y-14 pl-6 sm:pl-10">
          {TIMELINE_MILESTONES.map((item, index) => (
            <div key={index} className="relative group">
              {/* Year marker badge on left */}
              <div className="sm:absolute sm:-left-36 top-0 hidden sm:flex flex-col items-end w-28 text-right">
                <span className="text-base font-black text-stone-900 group-hover:text-red-600 transition-colors">
                  {item.year}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full mt-0.5 border border-red-100">
                  {item.badge}
                </span>
              </div>

              {/* Dot on timeline line */}
              <div className="absolute -left-[31px] sm:-left-[49px] top-4 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform" />

              {/* Content Card with Real Photo Gallery */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all space-y-6">
                <div>
                  <div className="sm:hidden mb-2">
                    <span className="text-sm font-black text-red-600 mr-2">{item.year}</span>
                    <span className="text-[10px] font-bold uppercase bg-red-50 text-red-700 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-stone-900 group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-stone-500 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.details}</span>
                  </div>
                </div>

                {/* Real Photo Gallery of this milestone */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-3">
                    Fotografías del hito:
                  </span>
                  
                  <div className={`grid gap-4 ${
                    item.imagenes.length === 1 
                      ? 'grid-cols-1 max-w-md' 
                      : item.imagenes.length === 2 
                        ? 'grid-cols-1 sm:grid-cols-2' 
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {item.imagenes.map((img, imgIdx) => (
                      <div 
                        key={imgIdx} 
                        className="rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden shadow-xs hover:shadow-md transition-all group/photo flex flex-col justify-between"
                      >
                        <div 
                          className="h-48 sm:h-52 w-full relative overflow-hidden bg-white flex items-center justify-center p-2 cursor-pointer"
                          onClick={() => setActiveZoomImage(img)}
                        >
                          <img 
                            src={img.url} 
                            alt={img.caption} 
                            className={`max-h-full max-w-full ${img.url.endsWith('.png') ? 'object-contain' : 'object-cover'} group-hover/photo:scale-105 transition-transform duration-300`}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/photo:opacity-100">
                            <span className="px-3 py-1.5 rounded-full bg-white/90 text-stone-900 text-xs font-bold shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                              <Maximize2 className="w-3.5 h-3.5 text-red-600" />
                              <span>Ver foto</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-white border-t border-stone-100 text-[11px] text-stone-600 font-medium">
                          <p>{img.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-stone-900">Misión</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-red-700 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Calidad constante y accesibilidad</span>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-stone-900">Visión</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-amber-700 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Liderazgo e innovación en salsas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Corporativos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Nuestros Pilares
          </span>
          <h2 className="text-3xl font-black text-stone-900">
            Valores que nos Guían
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs hover:border-red-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Calidad Innegociable</h4>
            <p className="text-xs text-stone-500 mt-1">Selección estricta de materia prima e inocuidad garantizada en cada lote.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs hover:border-red-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Espíritu Familiar</h4>
            <p className="text-xs text-stone-500 mt-1">Cercanía y respeto mutuo con nuestros colaboradores, aliados y clientes.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs hover:border-red-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Compromiso y Cumplimiento</h4>
            <p className="text-xs text-stone-500 mt-1">Entregas puntuales y abastecimiento seguro para el negocio gastronómico.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs hover:border-red-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Pasión por el Sabor</h4>
            <p className="text-xs text-stone-500 mt-1">Amor por las recetas que acompañan las mesas y comidas rápidas de Colombia.</p>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal para ver la foto en grande */}
      {activeZoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveZoomImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-stone-900 rounded-3xl p-4 sm:p-6 overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveZoomImage(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-stone-900 flex items-center justify-center transition-colors z-10"
              aria-label="Cerrar foto"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40">
              <img 
                src={activeZoomImage.url} 
                alt={activeZoomImage.caption} 
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            <p className="text-white text-sm font-semibold mt-4 text-center">
              {activeZoomImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
