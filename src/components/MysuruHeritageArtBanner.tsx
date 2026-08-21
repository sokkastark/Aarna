import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import folkBannerImg from '../assets/images/mysuru_folk_celebration_banner_1787340104183.jpg';

export const MysuruHeritageArtBanner: React.FC = () => {
  return (
    <section className="relative bg-[#3A1412] text-[#FAF7F2] overflow-hidden border-y-2 border-[#D4AF37]/50 shadow-inner">
      {/* Decorative top pattern bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#E86A33] to-[#D4AF37]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#8B2635] flex items-center justify-center border border-[#D4AF37]/60 text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#F4E1A4] tracking-wide">
                Heritage of Mysuru • ಮೈಸೂರು ಸಂಸ್ಕೃತಿ ಮತ್ತು ರುಚಿ
              </h3>
              <p className="text-xs text-[#E0D0C0]">
                Folk art depicting generations of traditional South Indian culinary celebration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/80 bg-black/25 px-3.5 py-1.5 rounded-full border border-white/10">
            <Heart className="w-3.5 h-3.5 text-[#E86A33] fill-[#E86A33]" />
            <span>Rooted in Mysuru Palace & Temple Town Heritage</span>
          </div>
        </div>

        {/* Traditional Panoramic Folk Art Canvas */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-xl group">
          <img
            src={folkBannerImg}
            alt="Traditional Mysuru folk art celebrating South Indian spice culture and culinary heritage"
            referrerPolicy="no-referrer"
            className="w-full h-44 sm:h-64 md:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />

          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

          {/* Caption over the mural */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5 flex items-end justify-between pointer-events-none">
            <div className="bg-[#2A100F]/85 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 text-left">
              <span className="text-[11px] sm:text-xs font-serif-title font-semibold text-[#F4E1A4]">
                ಮೈಸೂರು ಮನೆತನದ ಸಾಂಪ್ರದಾಯಿಕ ಮಸಾಲೆಗಳು
              </span>
              <span className="hidden sm:inline-block text-[11px] text-[#E0D0C0] ml-2">
                — Traditional Karnataka Spice Roasting & Feast Traditions
              </span>
            </div>
            <span className="text-[10px] text-[#FAF7F2]/70 bg-black/50 px-2 py-1 rounded">
              Folk Art Series
            </span>
          </div>
        </div>
      </div>

      {/* Decorative bottom pattern bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#8B2635] to-[#D4AF37]"></div>
    </section>
  );
};
