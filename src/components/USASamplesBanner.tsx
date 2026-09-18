import React from 'react';
import { Sparkles, MessageCircle, Send, CheckCircle2, Gift } from 'lucide-react';
import { getWhatsAppUSASampleUrl } from '../services/whatsappService';
import { MandalaOrnament } from './MandalaArt';

export const USASamplesBanner: React.FC = () => {
  return (
    <section id="usa-samples" className="py-10 md:py-14 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#4A121A] via-[#8B2635] to-[#5C1A25] text-[#FAF7F2] p-6 sm:p-10 md:p-12 shadow-2xl border-2 border-[#D4AF37]/40 overflow-hidden">
          
          {/* Subtle Rangoli Backdrop Overlay */}
          <div className="absolute -top-12 -right-12 opacity-15 pointer-events-none text-[#D4AF37]">
            <MandalaOrnament className="w-64 h-64" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-10 pointer-events-none text-[#FAF7F2]">
            <MandalaOrnament className="w-72 h-72" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/15 backdrop-blur-md border border-[#D4AF37]/50 text-xs font-bold text-[#F4E1A4] tracking-wide">
                <span className="text-base">🇺🇸</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <span>NOW AVAILABLE FOR USA RESIDENTS</span>
              </div>

              {/* Title */}
              <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF7F2] leading-tight tracking-tight">
                Authentic Mysuru Spice Samples <br className="hidden sm:inline" />
                <span className="text-[#F4E1A4] italic">Available Now in the USA!</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#F5EBE6] leading-relaxed max-w-2xl font-light">
                Craving the genuine, aromatic warmth of home-ground Mysuru Sambar, Rasam, Bisibelebath, and Puliyogre in America? 
                We are now dispatching exclusive, small-batch sample tasting packs directly within the United States. Order your sample today!
              </p>

              {/* Highlights Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-left">
                <div className="bg-[#FAF7F2]/10 backdrop-blur-xs p-3 rounded-xl border border-[#FAF7F2]/15 flex items-start gap-2.5">
                  <Gift className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#FAF7F2]">USA Tasting Packs</div>
                    <div className="text-[11px] text-[#E5D7CE]">Sample multi-spice packs</div>
                  </div>
                </div>

                <div className="bg-[#FAF7F2]/10 backdrop-blur-xs p-3 rounded-xl border border-[#FAF7F2]/15 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#FAF7F2]">100% Traditional Recipe</div>
                    <div className="text-[11px] text-[#E5D7CE]">Zero additives or fillers</div>
                  </div>
                </div>

                <div className="bg-[#FAF7F2]/10 backdrop-blur-xs p-3 rounded-xl border border-[#FAF7F2]/15 flex items-start gap-2.5">
                  <Send className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#FAF7F2]">Direct US Dispatch</div>
                    <div className="text-[11px] text-[#E5D7CE]">Fast local US shipping active</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Call-to-Action Column */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="bg-[#FAF7F2] text-[#2C2420] p-6 rounded-2xl shadow-xl border border-[#EAE2D8] text-center w-full max-w-sm">
                <div className="w-12 h-12 rounded-full bg-[#EBF2EC] border border-[#B8D5C0] text-[#234E35] flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🇺🇸</span>
                </div>

                <h3 className="font-serif-title text-xl font-bold text-[#8B2635] mb-1">
                  Order USA Sample
                </h3>
                <p className="text-xs text-[#6B5E55] mb-4 leading-relaxed">
                  Get authentic Mysuru spice sample packs delivered directly within the USA. Order now via WhatsApp!
                </p>

                <a
                  id="usa-sample-whatsapp-btn"
                  href={getWhatsAppUSASampleUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#234E35] hover:bg-[#1A3B28] text-[#FAF7F2] font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98 cursor-pointer border border-[#B8D5C0]"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Order Sample on WhatsApp</span>
                </a>

                <div className="mt-3 text-[10px] text-[#8C7A70] font-medium flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>Limited sample packs available for US shipping</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
