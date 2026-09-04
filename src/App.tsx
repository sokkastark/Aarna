import React from 'react';
import { CartProvider } from './context/CartContext';
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

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420]">
        {/* Navigation Bar */}
        <Header />

        {/* Floating Toast Feedback Notification */}
        <ToastNotification />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <ProductGrid />
          <USASamplesBanner />
          <MysuruHeritageArtBanner />
          <HowItWorks />
          <BrandStory />
        </main>

        {/* Footer */}
        <Footer />

        {/* Drawers, Modals & Floating UI Elements */}
        <ProductDetailModal />
        <CartDrawer />
        <OrderFormModal />
        <FloatingCartButton />
        <PWAInstallBanner />
      </div>
    </CartProvider>
  );
}
