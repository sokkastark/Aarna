import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../config/brand';
import { getWhatsAppInquiryUrl } from '../services/whatsappService';

export const Header: React.FC = () => {
  const { totalItemsCount, openCart, isCartBumping } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'How to Order', href: '#how-it-works' },
    { label: 'Our Story', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF7F2] shadow-xs border-b border-[#E8DFD5]'
          : 'bg-[#FAF7F2] border-b border-[#EFE8DF]'
      }`}
    >
      {/* Top Banner for Small-Batch & USA Announcement */}
      <div className="bg-[#8B2635] text-[#FAF7F2] text-xs font-medium py-1.5 px-4 text-center flex flex-wrap items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse shrink-0" />
        <span>Authentic Mysuru spice blends crafted in small batches</span>
        <span className="hidden sm:inline text-[#D4AF37]">•</span>
        <a
          href="#usa-samples"
          className="inline-flex items-center gap-1 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 px-2 py-0.5 rounded-full text-[#F4E1A4] font-semibold text-[11px] border border-[#D4AF37]/40 transition-colors"
        >
          <span>🇺🇸 USA Samples Available — Order Now!</span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center" aria-label="Aarna Food Products Home">
          <BrandLogo variant="header" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#4A3E39] hover:text-[#8B2635] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B2635] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Buttons: WhatsApp & Cart */}
        <div className="flex items-center gap-3">
          {/* Quick WhatsApp Link */}
          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full bg-[#EBF2EC] text-[#234E35] border border-[#B8D5C0] hover:bg-[#DCEADA] transition-colors"
            title="Chat directly with our Mysuru kitchen"
          >
            <MessageCircle className="w-4 h-4 text-[#234E35]" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Cart Trigger */}
          <button
            id="header-cart-btn"
            onClick={openCart}
            className={`relative flex items-center justify-center p-2.5 rounded-full bg-[#8B2635] text-[#FAF7F2] hover:bg-[#721F2B] active:scale-95 transition-all shadow-xs cursor-pointer ${
              isCartBumping ? 'animate-cart-bump ring-4 ring-[#D4AF37]/50' : ''
            }`}
            aria-label="View shopping cart"
          >
            <ShoppingBag className={`w-5 h-5 transition-transform ${isCartBumping ? 'text-[#D4AF37]' : ''}`} />
            {totalItemsCount > 0 && (
              <span
                className={`absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-[#C29B38] text-[#2C2420] text-xs font-bold flex items-center justify-center shadow-xs ${
                  isCartBumping ? 'animate-badge-pop bg-[#FAF7F2] text-[#8B2635]' : ''
                }`}
              >
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#4A3E39] hover:text-[#8B2635] hover:bg-[#F2ECE4] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] px-4 pt-2 pb-5 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#4A3E39] hover:text-[#8B2635] border-b border-[#F0EAE1]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#234E35] text-[#FAF7F2] text-sm font-semibold shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp ({BRAND_CONFIG.displayWhatsappNumber})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
