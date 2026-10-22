import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickOptions = [
    'Hola, quiero lista de precios para mi negocio.',
    'Hola, deseo saber sobre requisitos para distribuidores.',
    'Hola, quiero realizar un pedido de salsas Buquin.',
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text || 'Hola Productos Buquin, deseo información sobre sus salsas.');
    window.open(`https://wa.me/573176591699?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-emerald-700 flex items-center justify-center font-black shadow-xs">
                B
              </div>
              <div>
                <h4 className="font-bold text-sm">Productos Buquin SAS</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Respuesta en horario laboral
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-full hover:bg-emerald-700/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-stone-50 text-xs">
            <div className="bg-white p-3 rounded-2xl shadow-xs border border-stone-100 text-stone-700">
              ¡Hola! 👋 Bienvenido a <strong>Productos Buquin</strong>. ¿En qué podemos asesorarte hoy?
            </div>

            <div className="space-y-1.5">
              <p className="text-[10px] uppercase font-bold text-stone-400 px-1">
                Preguntas Frecuentes
              </p>
              {quickOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(opt)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 hover:border-emerald-200 border border-stone-200 text-stone-700 font-medium transition-all text-xs"
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="pt-2 flex gap-1.5">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend(customMsg);
                }}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-emerald-500"
              />
              <button
                onClick={() => handleSend(customMsg)}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-transform active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden ring-4 ring-emerald-500/20"
        aria-label="Abrir chat de WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600"></span>
        </span>
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
