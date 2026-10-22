import React, { useState } from 'react';
import { 
  Briefcase, 
  UploadCloud, 
  CheckCircle2, 
  Send, 
  FileText, 
  X, 
  HeartHandshake, 
  Building,
  Award,
  Users,
  ShieldCheck
} from 'lucide-react';
import { JobApplication } from '../types';
import { COMPANY_INFO } from '../data/company';

export const TrabajaConNosotrosView: React.FC = () => {
  const [formData, setFormData] = useState<JobApplication>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        fileName: e.target.files[0].name
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero with authentic team & plant atmosphere */}
      <section 
        className="relative overflow-hidden text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 rounded-b-[2.5rem] text-center shadow-xl bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/trabaja_banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/80 to-stone-950/90 backdrop-blur-[0.5px]" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600/30 text-red-200 text-xs font-semibold border border-red-500/40 backdrop-blur-xs">
            <Briefcase className="w-3.5 h-3.5 text-red-400" />
            Talento Humano Buquin
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
            Únete a nuestro equipo
          </h1>
          <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
            Si eres una persona comprometida con la calidad, el trabajo en equipo y la tradición familiar, queremos que crezcas con nosotros.
          </p>
        </div>
      </section>

      {/* Cultura y Beneficios de Trabajar en Buquin */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Real Plant Photo Card */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 relative group">
            <div className="h-60 sm:h-72 w-full overflow-hidden">
              <img 
                src="/assets/aistudio/empaquegalon_502b79a8.jpg" 
                alt="Colaboradores en la planta de Soacha" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-stone-900 text-white text-xs">
              <span className="text-[10px] uppercase font-bold text-amber-300 block">Sede Soacha</span>
              <p className="text-stone-300 text-[11px] mt-0.5">
                Planta de producción y empaque con rigurosos protocolos de inocuidad.
              </p>
            </div>
          </div>

          {/* Pillars Right */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Nuestra Cultura
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              ¿Por qué trabajar en Productos Buquin?
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Somos una empresa con más de dos décadas de historia donde cada colaborador es valorado como parte de la familia. Ofrecemos estabilidad laboral, condiciones dignas y oportunidades continuas de aprendizaje.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1.5" />
                <h4 className="font-bold text-stone-900">Estabilidad Laboral</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Empresa formalizada y en constante crecimiento.</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <Users className="w-4 h-4 text-red-600 mb-1.5" />
                <h4 className="font-bold text-stone-900">Ambiente Familiar</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Cercanía, respeto mutuo y compañerismo.</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <Award className="w-4 h-4 text-amber-600 mb-1.5" />
                <h4 className="font-bold text-stone-900">Áreas Operativas</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Producción, logística, mantenimiento y comercial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-in fade-in">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-stone-900">¡Postulación Enviada con Éxito!</h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Hemos recibido tu información a nombre de <strong>{formData.nombre}</strong>. Nuestro equipo de gestión humana revisará tu perfil para nuestras vacantes activas en planta de producción, logística o ventas.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    mensaje: '',
                    fileName: ''
                  });
                }}
                className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Enviar otra postulación
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-stone-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-stone-900">Formulario de Postulación</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Envía tus datos directamente al área de gestión de Productos Buquin SAS.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-xs border border-stone-200 overflow-hidden shrink-0 hidden sm:block">
                  <img src="/assets/aistudio/logob_865b9df2.jpg" alt="Logo Buquin" className="w-full h-full object-contain" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1.5">
                    Teléfono o WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="3XX XXX XXXX"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5">
                  Área de Interés y Breve Presentación
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente tu experiencia previa (ej: operario de alimentos, auxiliar de bodega, conductor, asesor de ventas) y por qué te gustaría trabajar con nosotros."
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>

              {/* Adjuntar Hoja de Vida */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5">
                  Adjunta tu Hoja de Vida (CV) *
                </label>
                
                <div className="relative border-2 border-dashed border-stone-300 hover:border-red-500 rounded-2xl p-6 text-center transition-colors bg-stone-50/50">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  {formData.fileName ? (
                    <div className="flex items-center justify-center gap-2 text-stone-800">
                      <FileText className="w-5 h-5 text-red-600" />
                      <span className="text-xs font-semibold">{formData.fileName}</span>
                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData({ ...formData, fileName: '' });
                        }}
                        className="text-stone-400 hover:text-stone-600 ml-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <UploadCloud className="w-8 h-8 text-stone-400 mx-auto" />
                      <p className="text-xs text-stone-600">
                        <strong className="text-red-600">Haz clic para subir</strong> o arrastra tu archivo aquí
                      </p>
                      <p className="text-[11px] text-stone-400">
                        Formatos aceptados: PDF, DOC o DOCX (Máx. 10MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Enviando postulación...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Postulación</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-stone-400 text-center">
                Tus datos serán tratados bajo la Ley 1581 de Protección de Datos de Colombia exclusivamente con fines de selección.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
