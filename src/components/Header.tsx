import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { PageId, Product } from '../types';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';

interface HeaderProps {
  currentPage: PageId;
  activeProduct?: Product | null;
  onNavigate: (page: PageId) => void;
  onSelectProduct?: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  activeProduct,
  onNavigate,
  onSelectProduct 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'productos', label: 'Productos' },
    { id: 'distribuidores', label: 'Distribuidores' },
    { id: 'comprar', label: 'Dónde Comprar' },
    { id: 'trabaja-con-nosotros', label: 'Trabaja con Nosotros' },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product: Product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top micro bar with contact & schedule */}
      <div className="bg-stone-900 text-stone-200 text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sede Principal Soacha, Cundinamarca • Envíos a todo el país
            </span>
            <span className="text-stone-500">|</span>
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-red-500" />
              PBX / WhatsApp: {COMPANY_INFO.phoneFormatted}
            </a>
          </div>

          <div className="flex items-center gap-2 text-stone-400">
            <span>Horario: Lun a Vie 8:00 AM – 5:00 PM | Sáb 9:00 AM – 1:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNav('inicio')} 
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1 shadow-sm border border-stone-200 group-hover:scale-105 transition-transform overflow-hidden">
              <img 
                src="/assets/aistudio/logob_865b9df2.jpg" 
                alt="Logo Productos Buquin" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-stone-900 uppercase">
                  BUQUIN
                </span>
                <span className="text-[10px] font-bold bg-red-100 text-red-700 px-1.5 py-0.2 rounded border border-red-200">
                  SAS
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-wide">
                Salsas &amp; Aderezos de Calidad
              </p>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = (currentPage === item.id && !activeProduct) || (item.id === 'productos' && !!activeProduct);

              if (item.id === 'productos') {
                return (
                  <div 
                    key={item.id} 
                    className="relative group"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNav('productos')}
                      className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1 ${
                        isActive
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'text-[#1c4b2b] hover:text-emerald-800 hover:bg-stone-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-stone-200 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                        <button
                          onClick={() => handleNav('productos')}
                          className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-red-700 hover:bg-red-50 transition-colors block border-b border-stone-100 mb-1"
                        >
                          Ver Catálogo Completo
                        </button>
                        <div className="space-y-0.5">
                          {PRODUCTS.map((prod) => (
                            <button
                              key={prod.id}
                              onClick={() => handleProductClick(prod)}
                              className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold text-stone-700 hover:text-emerald-700 hover:bg-stone-50 transition-colors flex items-center gap-2"
                            >
                              {prod.imagenPrincipal && (
                                <img 
                                  src={prod.imagenPrincipal} 
                                  alt={prod.nombre} 
                                  className="w-5 h-5 object-contain rounded shrink-0 mix-blend-multiply" 
                                />
                              )}
                              <span className="truncate">{prod.nombre}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'text-[#1c4b2b] hover:text-emerald-800 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:bg-stone-100 focus:outline-hidden"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = (currentPage === item.id && !activeProduct) || (item.id === 'productos' && !!activeProduct);
              return (
                <div key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {item.label}
                  </button>

                  {/* Sub-items for products on mobile */}
                  {item.id === 'productos' && (
                    <div className="pl-4 py-1 space-y-1">
                      {PRODUCTS.map(prod => (
                        <button
                          key={prod.id}
                          onClick={() => handleProductClick(prod)}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-stone-600 hover:bg-stone-50 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          <span>{prod.nombre}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-100 space-y-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Contactar a WhatsApp (317 659 1699)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
