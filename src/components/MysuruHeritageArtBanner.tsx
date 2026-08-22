import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import folkBannerImg from '../assets/images/mysuru_folk_celebration_banner_1787340104183.jpg';
import { HeritageBannerRangoli } from './SectionRangolis';
import { ToranaGarland } from './ToranaGarland';

export const MysuruHeritageArtBanner: React.FC = () => {
  return (
    <section className="relative bg-[#24130E] text-[#FAF7F2] pt-0 pb-12 md:pb-16 border-y border-[#C29B38]/30 relative z-10 overflow-hidden">
      <div className="relative z-20 mb-4 opacity-90">
        <ToranaGarland />
      </div>
      <HeritageBannerRangoli />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8B2635] flex items-center justify-center border border-[#D4AF37]/50 text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#F4E1A4] tracking-wide">
                Heritage of Mysuru • ಮೈಸೂರು ಸಂಸ್ಕೃತಿ ಮತ್ತು ರುಚಿ
              </h3>
              <p className="text-xs text-[#D8C7B8] mt-0.5">
                Generations of traditional South Indian culinary celebration and spice roasting
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-[#FAF7F2]/90 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
            <Heart className="w-3.5 h-3.5 text-[#E86A33] fill-[#E86A33]" />
            <span>Rooted in Mysuru Heritage</span>
          </div>
        </div>

        {/* Traditional Panoramic Folk Art Canvas */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl group">
          <img
            src={folkBannerImg}
            alt="Traditional Mysuru folk art celebrating South Indian spice culture and culinary heritage"
            referrerPolicy="no-referrer"
            className="w-full h-48 sm:h-64 md:h-80 object-cover object-center group-hover:scale-101 transition-transform duration-700 ease-out"
          />

          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

          {/* Caption over the mural */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5 flex items-end justify-between pointer-events-none">
            <div className="bg-[#1C0E0B]/85 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 text-left">
              <span className="text-xs font-serif-title font-semibold text-[#F4E1A4]">
                ಮೈಸೂರು ಮನೆತನದ ಸಾಂಪ್ರದಾಯಿಕ ಮಸಾಲೆಗಳು
              </span>
              <span className="hidden sm:inline-block text-xs text-[#D8C7B8] ml-2">
                — Traditional Karnataka Spice Roasting & Feast Traditions
              </span>
            </div>
            <span className="text-[10px] text-[#FAF7F2]/80 bg-black/60 px-2.5 py-1 rounded">
              Heritage Folk Art
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

