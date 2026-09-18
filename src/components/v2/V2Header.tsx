import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles, Flame, Check } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';
import { useCart } from '../../context/CartContext';
import { getWhatsAppInquiryUrl } from '../../services/whatsappService';

interface V2HeaderProps {
  currentRoute: 'v1' | 'v2';
  onSwitchRoute: (route: 'v1' | 'v2') => void;
}

export const V2Header: React.FC<V2HeaderProps> = ({ currentRoute, onSwitchRoute }) => {
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
    { label: 'Build Combo Box', href: '#combo-builder' },
    { label: 'USA Samples', href: '#usa-samples' },
    { label: 'Our Story', href: '#story' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF7F2] shadow-sm border-b border-[#E8DFD5]'
          : 'bg-[#FAF7F2] border-b border-[#EFE8DF]'
      }`}
    >
      {/* Top Banner with Version Switcher Pill */}
      <div className="bg-[#4A121A] text-[#FAF7F2] text-xs font-medium py-1.5 px-4 text-center flex flex-wrap items-center justify-between gap-2 border-b border-[#D4AF37]/30">
        
        {/* Left Live Roasting Badge */}
        <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
          <Flame className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse shrink-0" />
          <span>🔥 Next Batch Slow-Roasting: Saturday — Pre-orders Open</span>
        </div>

        {/* Right Version Switcher */}
        <div className="flex items-center gap-1 bg-[#FAF7F2]/10 p-0.5 rounded-full border border-[#D4AF37]/40 mx-auto sm:mx-0">
          <button
            onClick={() => onSwitchRoute('v1')}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
              currentRoute === 'v1'
                ? 'bg-[#D4AF37] text-[#4A121A] shadow-xs'
                : 'text-[#F4E1A4] hover:text-white'
            }`}
          >
            V1 Classic
          </button>
          <button
            onClick={() => onSwitchRoute('v2')}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
              currentRoute === 'v2'
                ? 'bg-[#8B2635] text-[#FAF7F2] shadow-xs border border-[#D4AF37]/60'
                : 'text-[#F4E1A4] hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>V2 Enhanced</span>
          </button>
        </div>

      </div>

      {/* Main Nav Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#v2" className="flex items-center" aria-label="Aarna Food Products Home">
          <BrandLogo variant="header" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-[#4A3B32] hover:text-[#8B2635] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B2635] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          
          {/* WhatsApp Direct Order Button */}
          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-[#EBF2EC] hover:bg-[#D8E6DB] text-[#234E35] font-bold text-xs border border-[#B8D5C0] transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order via WhatsApp</span>
          </a>

          {/* Cart Bag Icon Button */}
          <button
            onClick={openCart}
            aria-label={`Shopping Cart with ${totalItemsCount} items`}
            className={`relative p-2.5 rounded-xl bg-[#8B2635] hover:bg-[#7B1E28] text-[#FAF7F2] transition-all cursor-pointer shadow-md ${
              isCartBumping ? 'scale-110 shadow-lg ring-2 ring-[#D4AF37]' : ''
            }`}
          >
            <ShoppingBag className="w-4.5 h-4.5 text-[#D4AF37]" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-[#4A121A] text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF7F2] shadow-sm animate-bounce">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#4A121A] hover:bg-[#F2ECE4] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#4A3B32] hover:text-[#8B2635] py-2 border-b border-[#F4EBE3]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#234E35] text-[#FAF7F2] font-bold text-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>Order via WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
