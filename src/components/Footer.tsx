import React from 'react';
import { MessageCircle, MapPin, Sparkles, Heart } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG } from '../config/brand';
import { getWhatsAppInquiryUrl } from '../services/whatsappService';
import { MandalaOrnament, HangingMandalaCluster } from './MandalaArt';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F2ECE4] border-t border-[#E4D7CA] text-[#4A3E39] pt-12 pb-8 relative overflow-hidden">
      {/* Hanging Festive Mandala in Footer Corner */}
      <div className="absolute top-0 right-4 sm:right-12 z-0 opacity-80 hidden sm:block">
        <HangingMandalaCluster />
      </div>

      {/* Background Mandala Watermark */}
      <MandalaOrnament
        size={380}
        color="#D4AF37"
        opacity={0.08}
        className="absolute -bottom-24 -left-20 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#DFD3C5]">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <BrandLogo variant="footer" />
            <p className="text-xs text-[#6B5E55] max-w-sm leading-relaxed">
              Traditional recipes thoughtfully prepared in small batches in our Mysuru home kitchen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-[#2C2420] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#5A4D46]">
              <li>
                <a href="#products" className="hover:text-[#8B2635] transition-colors">
                  Products Range
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#8B2635] transition-colors">
                  How Pre-Ordering Works
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#8B2635] transition-colors">
                  Our Story & Values
                </a>
              </li>
            </ul>
          </div>

          {/* Order & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-[#2C2420] uppercase tracking-wider">
              Direct Kitchen Contact
            </h4>
            
            <div className="space-y-2 text-xs text-[#5A4D46]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8C4320] shrink-0" />
                <span>{BRAND_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#234E35] shrink-0" />
                <span>WhatsApp: {BRAND_CONFIG.displayWhatsappNumber}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#234E35] hover:bg-[#1A3D29] text-[#FAF7F2] text-xs font-bold transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#7D6E64]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {BRAND_CONFIG.name}. Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#8B2635] fill-[#8B2635]" />
            <span>in Mysuru.</span>
          </div>

          <div className="flex items-center gap-2 text-[10px]">
            <Sparkles className="w-3 h-3 text-[#C29B38]" />
            <span>Prototype V1 • Small-batch pre-order website</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
