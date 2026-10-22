import React from 'react';
import { Phone, Clock, MapPin, Instagram, Facebook, ArrowUpRight, Heart, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                <img 
                  src="/assets/aistudio/logob_865b9df2.jpg" 
                  alt="Logo Productos Buquin" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-lg text-white uppercase tracking-tight">
                  PRODUCTOS BUQUIN
                </span>
                <span className="text-[10px] ml-1 bg-red-600 text-white px-1.5 py-0.5 rounded font-bold">
                  S.A.S.
                </span>
                <p className="text-xs text-stone-300 font-semibold tracking-wide">NIT: 830.146.404-0</p>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Más de 20 años elaborando con amor y tradición las salsas que acompañan y realzan cada momento en la mesa de los colombianos.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Planta certificada y registro sanitario INVIMA</span>
            </div>
          </div>

          {/* Col 2: Horarios & Atención */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              Horario de Atención
            </h3>
            <div className="text-xs text-stone-400 space-y-2 bg-stone-800/60 p-3 rounded-xl border border-stone-800">
              <p>
                <strong className="text-stone-200 block">Lunes a Viernes:</strong>
                8:00 AM – 5:00 PM (Jornada continua)
              </p>
              <p>
                <strong className="text-stone-200 block">Sábados:</strong>
                9:00 AM – 1:00 PM
              </p>
              <p className="text-stone-500 italic">
                Domingos y festivos no hay despacho físico.
              </p>
            </div>
          </div>

          {/* Col 3: Ubicación y Contacto */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              Ubicación &amp; PBX
            </h3>
            <div className="space-y-2 text-xs text-stone-300">
              <a 
                href={COMPANY_INFO.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-stone-800/60 hover:bg-stone-800 border border-stone-800 transition-colors group"
              >
                <span className="text-white font-medium flex items-center gap-1 group-hover:text-red-400 transition-colors">
                  {COMPANY_INFO.address}
                  <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="text-stone-400 text-[11px] block mt-0.5">
                  Ver mapa en Google Maps
                </span>
              </a>

              <a 
                href={COMPANY_INFO.whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">WhatsApp y Celular</span>
                  <span className="text-xs">{COMPANY_INFO.phoneFormatted}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 4: Redes & Accesos */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Síguenos en Redes
            </h3>
            <div className="flex gap-2">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-pink-600 text-stone-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-blue-600 text-stone-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-stone-400 block mb-2">
                Navegación Rápida
              </span>
              <ul className="grid grid-cols-2 gap-1.5 text-xs">
                <li>
                  <button onClick={() => onNavigate('nosotros')} className="hover:text-white transition-colors">
                    Nuestra Historia
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('productos')} className="hover:text-white transition-colors">
                    Catálogo
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('distribuidores')} className="hover:text-white transition-colors">
                    Distribuidores
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('comprar')} className="hover:text-white transition-colors">
                    Dónde Comprar
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('trabaja-con-nosotros')} className="hover:text-white transition-colors">
                    Trabaja con Nosotros
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Productos Buquin S.A.S. Todos los derechos reservados. Soacha, Cundinamarca, Colombia.</p>
          <p className="flex items-center gap-1">
            <span>Elaborado con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>para el sabor colombiano</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
