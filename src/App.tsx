import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { USASamplesBanner } from './components/USASamplesBanner';
import { MysuruHeritageArtBanner } from './components/MysuruHeritageArtBanner';
import { HowItWorks } from './components/HowItWorks';
import { BrandStory } from './components/BrandStory';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderFormModal } from './components/OrderFormModal';
import { FloatingCartButton } from './components/FloatingCartButton';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { ToastNotification } from './components/ToastNotification';
import { V2Page } from './components/v2/V2Page';

function AppContent() {
  const { openProductModal } = useCart();
  
  // Detect current route from pathname or hash
  const getInitialRoute = (): 'v1' | 'v2' => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/v2' || path.startsWith('/v2/') || hash === '#v2') {
        return 'v2';
      }
    }
    return 'v1';
  };

  const [route, setRoute] = useState<'v1' | 'v2'>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleSwitchRoute = (newRoute: 'v1' | 'v2') => {
    setRoute(newRoute);
    if (typeof window !== 'undefined') {
      const newUrl = newRoute === 'v2' ? '/v2' : '/';
      window.history.pushState({}, '', newUrl);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420]">
      {/* Toast Notification */}
      <ToastNotification />

      {/* Render either V1 Classic or V2 Enhanced */}
      {route === 'v2' ? (
        <V2Page
          currentRoute={route}
          onSwitchRoute={handleSwitchRoute}
          onOpenDetailModal={openProductModal}
        />
      ) : (
        <>
          {/* Header with Switcher Pill for V1 */}
          <div className="bg-[#4A121A] text-[#FAF7F2] text-[11px] py-1 px-4 text-center flex items-center justify-between border-b border-[#D4AF37]/30">
            <span className="text-[#F4E1A4] font-medium">✨ Frozen Original Design (V1)</span>
            <div className="flex items-center gap-1.5">
              <span className="hidden sm:inline text-[#E5D7CE]">Want to see the new layout?</span>
              <button
                onClick={() => handleSwitchRoute('v2')}
                className="px-2.5 py-0.5 rounded-full bg-[#8B2635] text-[#FAF7F2] hover:bg-[#7B1E28] font-bold border border-[#D4AF37]/50 cursor-pointer shadow-xs"
              >
                Switch to V2 Design →
              </button>
            </div>
          </div>

          {/* V1 Frozen Page Components */}
          <Header />
          <main className="flex-1">
            <Hero />
            <ProductGrid />
            <USASamplesBanner />
            <MysuruHeritageArtBanner />
            <HowItWorks />
            <BrandStory />
          </main>
          <Footer />
        </>
      )}

      {/* Shared Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <OrderFormModal />
      <FloatingCartButton />
      <PWAInstallBanner />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
