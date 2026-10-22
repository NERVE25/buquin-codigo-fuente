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
import { Loader2, Download, CheckCircle, Package } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDownloadBar, setShowDownloadBar] = useState(true);
  const [downloadingHostinger, setDownloadingHostinger] = useState(false);
  const [downloadingSource, setDownloadingSource] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<string>('');

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

  // In-memory authenticated blob download: avoids 401/403 or "El sitio no se encontraba disponible"
  const handleDownloadBlob = async (fileName: string, type: 'hostinger' | 'source') => {
    try {
      if (type === 'hostinger') setDownloadingHostinger(true);
      else setDownloadingSource(true);
      setDownloadProgress('Preparando archivo...');

      const response = await fetch(`/${fileName}`, {
        credentials: 'same-origin'
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: No se pudo descargar el archivo.`);
      }

      setDownloadProgress('Descargando a tu memoria...');
      const blob = await response.blob();
      
      setDownloadProgress('Guardando en tu equipo...');
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
        setDownloadProgress('¡Descarga completada!');
        setTimeout(() => setDownloadProgress(''), 3000);
      }, 1000);
    } catch (err) {
      console.error('Error al descargar:', err);
      setDownloadProgress('Error al descargar. Intenta de nuevo.');
      setTimeout(() => setDownloadProgress(''), 4000);
    } finally {
      if (type === 'hostinger') setDownloadingHostinger(false);
      else setDownloadingSource(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/50 text-stone-800 selection:bg-red-500 selection:text-white font-['Poppins',sans-serif]">
      {/* Banner de Descarga con Descarga Directa Segura en Memoria */}
      {showDownloadBar && (
        <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 px-4 py-2.5 text-xs font-semibold flex flex-wrap items-center justify-between border-b border-amber-500 shadow-md z-50 gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-stone-900 text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
              <Package className="w-3 h-3 text-amber-400" />
              <span>Para Publicar</span>
            </span>
            <span className="font-bold">Descarga tus archivos directamente a tu computador:</span>
            {downloadProgress && (
              <span className="text-[11px] text-stone-900 font-bold bg-white/80 px-2 py-0.5 rounded-full border border-stone-300 animate-pulse">
                {downloadProgress}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Botón Hostinger */}
            <button
              onClick={() => handleDownloadBlob('productosbuquin-web-hostinger.zip', 'hostinger')}
              disabled={downloadingHostinger || downloadingSource}
              className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              {downloadingHostinger ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  <span>Descargando...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>📦 Descargar ZIP para Hostinger</span>
                </>
              )}
            </button>

            {/* Botón Código Fuente */}
            <button
              onClick={() => handleDownloadBlob('productosbuquin-codigo-fuente.zip', 'source')}
              disabled={downloadingHostinger || downloadingSource}
              className="px-3.5 py-2 bg-white hover:bg-stone-50 active:scale-95 text-stone-900 text-xs font-bold rounded-xl shadow-md border border-amber-500 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              {downloadingSource ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-red-600" />
                  <span>Descargando...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-red-600" />
                  <span>💻 Código Fuente (GitHub)</span>
                </>
              )}
            </button>

            <button 
              onClick={() => setShowDownloadBar(false)} 
              className="text-stone-900 hover:text-stone-700 ml-1 p-1 font-bold text-sm cursor-pointer"
              title="Ocultar barra"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
