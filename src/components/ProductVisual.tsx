import React, { useState } from 'react';
import { Sparkles, Flame, Droplets, Heart } from 'lucide-react';

interface ProductVisualProps {
  productId: string;
  presentationType?: string;
  imageSrc?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  productId,
  presentationType = '',
  imageSrc,
  alt,
  size = 'md'
}) => {
  const [imageError, setImageError] = useState(false);
  const isGalon = presentationType.toLowerCase().includes('galón') || presentationType.toLowerCase().includes('galon');

  // Dimension classes
  const containerDimensions = {
    sm: 'h-36 w-full',
    md: 'h-52 w-full',
    lg: 'h-64 sm:h-72 w-full'
  }[size];

  // Colors & badges by product
  let mainColor = '#dc2626';
  let accentColor = '#991b1b';
  let labelBg = 'bg-red-700';
  let badgeText = 'Tomate';
  let Icon = Sparkles;

  if (productId.includes('bbq')) {
    mainColor = '#881337';
    accentColor = '#4c0519';
    labelBg = 'bg-rose-950';
    badgeText = 'BBQ Ahumada';
    Icon = Flame;
  } else if (productId.includes('miel')) {
    mainColor = '#d97706';
    accentColor = '#92400e';
    labelBg = 'bg-amber-600';
    badgeText = 'Sirope Miel';
    Icon = Droplets;
  } else if (productId.includes('picante')) {
    mainColor = '#ea580c';
    accentColor = '#c2410c';
    labelBg = 'bg-red-600';
    badgeText = 'Ají Picante';
    Icon = Flame;
  } else if (productId.includes('rosada')) {
    mainColor = '#f43f5e';
    accentColor = '#e11d48';
    labelBg = 'bg-rose-500';
    badgeText = 'Salsa Rosada';
    Icon = Heart;
  } else if (productId.includes('soya')) {
    mainColor = '#374151';
    accentColor = '#1f2937';
    labelBg = 'bg-zinc-800';
    badgeText = 'Salsa de Soya';
    Icon = Sparkles;
  } else if (productId.includes('negra')) {
    mainColor = '#1e293b';
    accentColor = '#0f172a';
    labelBg = 'bg-slate-900';
    badgeText = 'Salsa Negra';
    Icon = Sparkles;
  }

  // Format label text for the badge
  const getBadgeFormat = () => {
    if (presentationType.includes('4000g')) return 'Galón 4000g';
    if (presentationType.includes('3800g')) return 'Galón 3800g';
    if (presentationType.includes('3700g')) return 'Galón 3700g';
    if (presentationType.includes('8g')) return 'Sobre 8g';
    if (presentationType.includes('6g')) return 'Sobre 6g';
    return isGalon ? 'Galón' : 'Sachet';
  };

  // If real image is available and hasn't errored
  if (imageSrc && !imageError) {
    return (
      <div className={`relative ${containerDimensions} flex items-center justify-center p-3 rounded-2xl overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-100/80 border border-stone-100 shadow-inner group-hover:scale-[1.02] transition-transform duration-300`}>
        {/* Subtle radial ambient glow based on product theme */}
        <div 
          className="absolute w-36 h-36 rounded-full opacity-15 blur-2xl pointer-events-none"
          style={{ backgroundColor: mainColor }}
        />

        {/* Real Product Packshot */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={imageSrc}
            alt={alt || `${badgeText} - ${presentationType}`}
            onError={() => setImageError(true)}
            className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
            loading="lazy"
          />
        </div>

        {/* Floating badge */}
        <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-xs text-stone-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs border border-stone-200 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mainColor }} />
          <span>{getBadgeFormat()}</span>
        </div>
      </div>
    );
  }

  // Fallback SVG representation
  return (
    <div className={`relative ${containerDimensions} flex items-center justify-center p-3 rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 via-stone-50 to-neutral-200 shadow-inner group-hover:scale-[1.02] transition-transform duration-300`}>
      {/* Decorative background glow */}
      <div 
        className="absolute w-32 h-32 rounded-full opacity-20 blur-xl pointer-events-none"
        style={{ backgroundColor: mainColor }}
      />

      {isGalon ? (
        /* Galón Graphic */
        <div className="relative flex flex-col items-center">
          {/* Jug Handle & Neck */}
          <div className="w-10 h-4 bg-stone-300 rounded-t-md border border-stone-400 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-red-700 rounded-t-sm shadow-sm" />
          </div>
          {/* Galon Body */}
          <div className="w-32 h-36 bg-gradient-to-b from-stone-100 to-stone-200 rounded-2xl border-2 border-stone-300 shadow-md relative flex flex-col items-center justify-between p-2">
            <div className="absolute -left-3 top-6 w-3 h-14 border-4 border-stone-300 rounded-l-lg bg-stone-100" />
            
            <div className="w-full flex justify-between items-center text-[10px] text-stone-500 font-semibold px-1">
              <span>BUQUIN</span>
              <span className="text-red-700 font-bold">{getBadgeFormat()}</span>
            </div>

            {/* Label */}
            <div className={`w-full py-2 px-1 rounded-lg ${labelBg} text-white text-center shadow-sm`}>
              <div className="flex items-center justify-center gap-1">
                <Icon className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                <span className="font-extrabold text-[11px] tracking-wide uppercase">{badgeText}</span>
              </div>
              <span className="text-[8px] opacity-90 block">LÍNEA INSTITUCIONAL</span>
            </div>

            <div className="text-[9px] text-stone-600 font-medium">
              Calidad y Rendimiento
            </div>
          </div>
        </div>
      ) : (
        /* Sachet / Sobre Graphic */
        <div className="relative flex flex-col items-center">
          <div 
            className="w-24 sm:w-28 h-36 sm:h-40 rounded-xl shadow-md border-2 border-white/60 relative overflow-hidden flex flex-col justify-between p-2 text-white"
            style={{ 
              background: `linear-gradient(145deg, ${mainColor}, ${accentColor})` 
            }}
          >
            {/* Zig-zag cut visual at top */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/20 flex justify-between px-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-black/20 rounded-full" />
              ))}
            </div>

            {/* Sachet brand */}
            <div className="mt-2 text-center">
              <span className="text-[10px] font-black tracking-widest uppercase bg-black/20 px-1.5 py-0.5 rounded">
                BUQUIN
              </span>
            </div>

            {/* Center pill */}
            <div className="bg-white/95 text-stone-900 rounded-lg py-1.5 px-1 text-center shadow-sm">
              <div className="flex items-center justify-center gap-1">
                <Icon className="w-3 h-3 text-red-600" />
                <p className="font-extrabold text-[11px] leading-tight">{badgeText}</p>
              </div>
              <p className="text-[8px] text-stone-500 font-semibold mt-0.5">
                {presentationType.includes('6g') ? 'Sobre 6g' : 'Sobre 8g'}
              </p>
            </div>

            {/* Footer stamp */}
            <div className="text-center text-[8px] font-medium opacity-80 pb-0.5">
              Calidad Garantizada
            </div>
          </div>
        </div>
      )}

      {/* Floating mini badge */}
      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs text-stone-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs border border-stone-200">
        {getBadgeFormat()}
      </div>
    </div>
  );
};
