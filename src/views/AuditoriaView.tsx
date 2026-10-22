import React, { useState } from 'react';
import { 
  FileCheck2, 
  AlertTriangle, 
  CheckCircle2, 
  Code, 
  Layout, 
  Sparkles, 
  TrendingUp, 
  Copy, 
  Check, 
  ArrowRight, 
  HelpCircle 
} from 'lucide-react';
import { PageId } from '../types';

interface AuditoriaViewProps {
  onNavigate: (page: PageId) => void;
}

export const AuditoriaView: React.FC<AuditoriaViewProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const text = `INFORME DE REVISIÓN TÉCNICA - PRODUCTOS BUQUIN SAS
1. Fortalezas: Excelente narrativa comercial, más de 20 años de historia familiar, catálogo bien segmentado (institucional y masivo).
2. Errores detectados en HTML original:
   - Archivos ausentes: css/style.css, js/script.js y carpeta img/ con las fotos de productos.
   - Sintaxis DOM: Etiquetas </div> sobrantes antes del cierre del footer.
   - Formularios: Formulario de distribuidores con action="#".
   - SEO: Falta de OpenGraph images y Schema.org.
3. Soluciones aplicadas en la versión activa:
   - Modernización a SPA interactiva con React y Tailwind CSS.
   - Representaciones visuales de empaques para evitar imágenes rotas.
   - Fichas técnicas nutricionales interactivas.
   - Enlace inteligente a WhatsApp con cotizador por ciudad y salsas de interés.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 rounded-b-[2.5rem] text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
            Auditoría de Desarrollo Web
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Informe Técnico de Revisión del Proyecto
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Revisión integral de tus archivos HTML originales de <strong>Productos Buquin SAS</strong>. A continuación tienes el diagnóstico detallado de fortalezas, errores corregidos y recomendaciones técnicas.
          </p>
        </div>
      </section>

      {/* Main Audit Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Score cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl shrink-0">
              9.2
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm">Propuesta &amp; Contenido</h3>
              <p className="text-xs text-stone-500">Excelente historia familiar, valores claros y portafolio definido.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl shrink-0">
              6.5
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm">HTML Original (Estático)</h3>
              <p className="text-xs text-stone-500">Dependencias rotas de CSS, imágenes y scripts faltantes.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center font-black text-xl shrink-0">
              9.8
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm">Versión React Actual</h3>
              <p className="text-xs text-stone-500">Solución interactiva completa, responsive y lista para publicar.</p>
            </div>
          </div>
        </div>

        {/* Section 1: Errores detectados en los archivos originales */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-black text-stone-900">
                1. Hallazgos y Errores en tus archivos HTML originales
              </h2>
            </div>
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado al portapapeles' : 'Copiar diagnóstico'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-600 leading-relaxed">
            <div className="p-4 bg-red-50/60 rounded-2xl border border-red-200 space-y-2">
              <span className="font-bold text-red-800 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Archivos faltantes (404)
              </span>
              <ul className="list-disc pl-4 space-y-1 text-red-950">
                <li><code>css/style.css</code>: No estaba presente en el proyecto. Por eso tus páginas se verían sin colores, sin tipografía y sin estilos.</li>
                <li><code>js/script.js</code>: Ausente. El menú hamburguesa y los carruseles de productos no funcionaban.</li>
                <li><code>img/*</code>: Referencias como <code>img/logob.jpg</code>, <code>img/tomate8.jpg</code>, <code>img/bbqgl.png</code> no existían en el almacenamiento.</li>
              </ul>
            </div>

            <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2">
              <span className="font-bold text-amber-800 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Errores en formularios
              </span>
              <ul className="list-disc pl-4 space-y-1 text-amber-950">
                <li><code>distribuidores.html</code>: El formulario contenía <code>action="#"</code>, por lo que al hacer clic en "Enviar Solicitud" solo recargaba la página sin guardar ni enviar los datos.</li>
                <li><code>trabaja-con-nosotros.html</code>: Apuntaba a FormSubmit con redirección a un subdominio de GitHub Pages no configurado.</li>
              </ul>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
              <span className="font-bold text-stone-800 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-stone-600" />
                Estructura del DOM y etiquetas HTML
              </span>
              <ul className="list-disc pl-4 space-y-1">
                <li>En <code>index.html</code> (líneas 193 a 195) había etiquetas <code>&lt;/div&gt;</code> adicionales sin apertura previa justo antes del cierre de <code>&lt;/footer&gt;</code>.</li>
                <li>En <code>nosotros.html</code> y <code>productos.html</code> había secciones comentadas vacías antes del footer (ej. <code>&lt;section class="contact-section"&gt;&lt;/section&gt;</code>).</li>
              </ul>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
              <span className="font-bold text-stone-800 flex items-center gap-1.5">
                <Layout className="w-4 h-4 text-stone-600" />
                Mantenibilidad y Escalabilidad
              </span>
              <ul className="list-disc pl-4 space-y-1">
                <li>Tener 12 archivos HTML separados con el mismo Header y Footer duplicado dificulta el mantenimiento (un cambio en el teléfono obliga a editar 12 archivos a mano).</li>
                <li>En esta versión unificamos todo con componentes reutilizables React.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Puntos fuertes */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-black text-stone-900">
              2. Grandes Fortalezas del Proyecto
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-1.5">
              <span className="font-bold text-emerald-900 block">Identidad Auténtica</span>
              <p className="text-stone-600">
                La historia de don Jorge Buitrago y don Misael Quintana le da un valor humano y de confianza altísimo a la marca Buquin.
              </p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-1.5">
              <span className="font-bold text-emerald-900 block">Enfoque Comercial Claro</span>
              <p className="text-stone-600">
                Diferenciación exacta entre el cliente que quiere comprar (restaurante / consumidor) y el aliado que quiere distribuir.
              </p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-1.5">
              <span className="font-bold text-emerald-900 block">Transparencia Nutricional</span>
              <p className="text-stone-600">
                Incluir tablas nutricionales por porción y gramaje transmite seriedad y cumplimiento con la normatividad de alimentos.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Qué construimos aquí */}
        <div className="bg-gradient-to-br from-stone-900 to-red-950 text-white rounded-3xl p-8 shadow-md space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-black text-white">
              3. Mejoras y Transformación Implementadas en esta App
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Hemos convertido tus 12 páginas HTML en una <strong>aplicación moderna, rápida y 100% responsiva</strong> con las siguientes características:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
            <div className="bg-white/10 p-3 rounded-xl border border-white/10">
              <strong className="text-emerald-400 block mb-0.5">✓ 12 Fotografías Reales Integradas</strong>
              Logo oficial y fotos reales de empaques (Sobres 6g, 8g y Galones de Tomate, BBQ, Miel, Picante, Rosada, Soya y Salsa Negra) vinculadas con selector dinámico.
            </div>
            <div className="bg-white/10 p-3 rounded-xl border border-white/10">
              <strong className="text-red-400 block mb-0.5">✓ Modal de Ficha Técnica &amp; Nutrición</strong>
              Haz clic en cualquier salsa para ver tabla nutricional, usos recomendados y botón de cotización por WhatsApp.
            </div>
            <div className="bg-white/10 p-3 rounded-xl border border-white/10">
              <strong className="text-red-400 block mb-0.5">✓ Cotizador por Región en WhatsApp</strong>
              Genera mensajes automáticos adaptados a Bogotá, Santander, Medellín, Cali o Eje Cafetero.
            </div>
            <div className="bg-white/10 p-3 rounded-xl border border-white/10">
              <strong className="text-red-400 block mb-0.5">✓ Formularios con Validación Instantánea</strong>
              Tanto para solicitudes de distribución como para postulaciones laborales con simulador de hoja de vida.
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => onNavigate('inicio')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <span>Navegar la Página Web Actualizada</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
