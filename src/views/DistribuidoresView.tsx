import React, { useState } from 'react';
import { 
  Award, 
  Handshake, 
  DollarSign, 
  Star, 
  Building2, 
  Warehouse, 
  Truck, 
  Users, 
  Phone, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { DistributorInquiry } from '../types';
import { COMPANY_INFO } from '../data/company';

export const DistribuidoresView: React.FC = () => {
  const [formData, setFormData] = useState<DistributorInquiry>({
    razonSocial: '',
    nit: '',
    nombreContacto: '',
    email: '',
    telefono: '',
    ciudad: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola Productos Buquin SAS. Mi empresa es *${formData.razonSocial || 'Distribuidor'}*, NIT/CC: *${formData.nit || 'En trámite'}*, contacto: *${formData.nombreContacto || 'Interesado'}*, teléfono: *${formData.telefono}*, ciudad/zona: *${formData.ciudad}*. Mensaje: ${formData.mensaje || 'Deseo postularme como distribuidor autorizado.'}`
    );
    window.open(`https://wa.me/573176591699?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero with Logistics & Fleet Banner */}
      <section 
        className="relative overflow-hidden text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 rounded-b-[2.5rem] text-center shadow-xl bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/distribuidores_banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/80 to-stone-950/90 backdrop-blur-[0.5px]" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600/30 text-emerald-300 text-xs font-semibold border border-emerald-500/40 backdrop-blur-xs">
            <Handshake className="w-3.5 h-3.5 text-emerald-400" />
            Red Comercial &amp; Logística Nacional
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
            Conviértete en nuestro Distribuidor Estratégico
          </h1>
          <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto font-normal drop-shadow-sm">
            Forma parte de una marca con más de 20 años de trayectoria, capacidad logística propia y un sabor que conquista el paladar colombiano.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Crecimiento Mutuo
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            Beneficios de ser un Distribuidor Buquin
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900">Calidad Comprobada</h3>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Ofrece a tus clientes productos elaborados con los más altos estándares de calidad y un sabor único y delicioso.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900">Respaldo de Marca</h3>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Asóciate con una empresa de confianza, con una sólida trayectoria de más de 20 años en el mercado colombiano.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900">Precios Competitivos</h3>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Accede a un portafolio con una excelente relación precio-calidad que te garantizará márgenes de ganancia atractivos.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900">Portafolio Ganador</h3>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Distribuye un catálogo de salsas de alta rotación, perfectas para restaurantes, mayoristas y el consumidor final.
            </p>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Perfil del Aliado
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              Requisitos para ser un Distribuidor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="text-sm font-bold text-stone-900">Empresa Constituida</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Contar con empresa legalmente registrada en Cámara de Comercio y NIT activo (o persona natural con RUT comercial).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mb-3">
                <Warehouse className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="text-sm font-bold text-stone-900">Capacidad de Almacén</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Disponer de una bodega o espacio que cumpla con la normatividad vigente para conservar productos alimenticios.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mb-3">
                <Truck className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="text-sm font-bold text-stone-900">Capacidad Logística</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Contar con los medios de transporte y logística para surtir oportunamente tu zona asignada.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="text-sm font-bold text-stone-900">Experiencia Comercial</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Experiencia previa en la distribución de productos de consumo masivo o sector de alimentos institucional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Welcome panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-emerald-950 text-white p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-white p-1.5 shadow-md border border-stone-200 overflow-hidden mb-2">
                <img 
                  src="/assets/aistudio/logob_865b9df2.jpg" 
                  alt="Logo Productos Buquin" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Paso Final
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                ¡Estás a un paso de ser nuestro socio comercial!
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                En Productos Buquin, valoramos a cada uno de nuestros distribuidores. Son una pieza fundamental de nuestra familia y de nuestro crecimiento.
              </p>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Al completar este formulario, tu solicitud será revisada directamente por nuestra gerencia comercial, quien te contactará en menos de 24 horas hábiles.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                ¿Prefieres hablar con alguien ahora mismo?
              </p>
              <a 
                href={COMPANY_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-white font-semibold text-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Llámanos o escríbenos al {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Form panel */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-stone-900">
                  ¡Solicitud Enviada con Éxito!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Gracias, <strong>{formData.nombreContacto || 'estimado aliado'}</strong>. Hemos recibido los datos de <strong>{formData.razonSocial || 'tu empresa'}</strong> para la zona de <strong>{formData.ciudad}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-emerald-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar también por WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        razonSocial: '',
                        nit: '',
                        nombreContacto: '',
                        email: '',
                        telefono: '',
                        ciudad: '',
                        mensaje: ''
                      });
                    }}
                    className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-stone-100 pb-3 mb-4">
                  <h4 className="text-lg font-black text-stone-900">Completa tu Información</h4>
                  <p className="text-xs text-stone-500">Campos obligatorios marcados con (*)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Nombre de la Empresa / Razón Social *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Distribuidora del Oriente S.A.S."
                      value={formData.razonSocial}
                      onChange={(e) => setFormData({ ...formData, razonSocial: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      NIT / C.C. *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. 901.234.567-8"
                      value={formData.nit}
                      onChange={(e) => setFormData({ ...formData, nit: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Nombre del Contacto Principal *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre y apellido"
                      value={formData.nombreContacto}
                      onChange={(e) => setFormData({ ...formData, nombreContacto: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Teléfono de Contacto (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 310 123 4567"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="comercial@tuempresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Ciudad / Departamento de Cobertura *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Bucaramanga, Santander"
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Cuéntanos sobre tu negocio (canales de venta, clientes actuales, volumen estimado)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Distribuyo actualmente en restaurantes de comida rápida y asaderos..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Procesando solicitud...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitud de Distribución</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
