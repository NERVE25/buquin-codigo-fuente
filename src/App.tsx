/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Product } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomeView } from './views/HomeView';
import { NosotrosView } from './views/NosotrosView';
import { ProductosView } from './views/ProductosView';
import { ProductDetailPageView } from './views/ProductDetailPageView';
import { DistribuidoresView } from './views/DistribuidoresView';
import { ComprarView } from './views/ComprarView';
import { TrabajaConNosotrosView } from './views/TrabajaConNosotrosView';
import { AuditoriaView } from './views/AuditoriaView';


export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Secret developer shortcut: access audit view via URL hash #auditoria or Ctrl+Shift+D
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#auditoria') {
        setCurrentPage('auditoria');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setCurrentPage(prev => prev === 'auditoria' ? 'inicio' : 'auditoria');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    setSelectedProduct(null); // Clear selected product when explicitly changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product | null) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/50 text-stone-800 selection:bg-red-500 selection:text-white font-['Poppins',sans-serif]">
      {/* Top Header Navigation with real logo & dropdown */}
      <Header 
        currentPage={currentPage} 
        activeProduct={selectedProduct}
        onNavigate={handleNavigate}
        onSelectProduct={handleSelectProduct}
      />

      {/* Main Dynamic View: switches between dedicated product page or standard public views */}
      <main className="flex-1">
        {selectedProduct ? (
          <ProductDetailPageView
            product={selectedProduct}
            onSelectProduct={handleSelectProduct}
            onNavigate={handleNavigate}
          />
        ) : (
          <>
            {currentPage === 'inicio' && (
              <HomeView 
                onNavigate={handleNavigate} 
                onSelectProduct={handleSelectProduct} 
              />
            )}

            {currentPage === 'nosotros' && (
              <NosotrosView />
            )}

            {currentPage === 'productos' && (
              <ProductosView 
                onSelectProduct={handleSelectProduct} 
              />
            )}

            {currentPage === 'distribuidores' && (
              <DistribuidoresView />
            )}

            {currentPage === 'comprar' && (
              <ComprarView />
            )}

            {currentPage === 'trabaja-con-nosotros' && (
              <TrabajaConNosotrosView />
            )}

            {currentPage === 'auditoria' && (
              <AuditoriaView 
                onNavigate={handleNavigate} 
              />
            )}
          </>
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Standardized Complete Footer */}
      <Footer 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}
