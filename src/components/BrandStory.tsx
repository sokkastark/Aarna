import React from 'react';
import {
  Heart,
  Sparkles,
  Home,
  ShieldCheck,
  Flame,
} from 'lucide-react';

import { BRAND_CONFIG } from '../config/brand';
import { getWhatsAppInquiryUrl } from '../services/whatsappService';

import kitchenArtImg from '../assets/images/mysuru_kitchen_folkart_1787340085196.jpg';
import arnaLogoLandImg from '../assets/images/Arna logo land.png';
import { BrandStoryRangoli } from './SectionRangolis';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="story"
      className="relative py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 relative z-10 overflow-hidden"
    >
      <BrandStoryRangoli />
      <div className="bg-[#FFFFFF] rounded-3xl border border-[#EAE2D8] p-6 sm:p-10 md:p-12 shadow-2xs relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Brand Story Presentation & Folk Art */}
          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EDE4] border border-[#D9CBBF] text-xs font-semibold text-[#8C4320]">
              <Heart className="w-3.5 h-3.5 text-[#8B2635] fill-[#8B2635]/20" />
              <span>Made with Love for Family</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#8B2635] tracking-tight leading-snug">
              {BRAND_CONFIG.story.title}
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
              {BRAND_CONFIG.story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Folk Art Inset */}
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D8]">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-[#D4AF37]/50 shadow-2xs">
                <img
                  src={kitchenArtImg}
                  alt="Mysuru traditional kitchen folk art showing spice roasting in brass uruli"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1 text-left">
                <div className="font-serif-title text-sm font-bold text-[#8B2635]">
                  ಸಾಂಪ್ರದಾಯಿಕ ಒಲೆ ಮತ್ತು ಹಿತ್ತಾಳೆ ಪಾತ್ರೆಗಳ ಪರಿಮಳ
                </div>

                <p className="text-xs text-[#5A4D46] leading-relaxed">
                  Slow-roasting spices in heavy brass cookware enhances natural
                  essential oils, delivering the distinct aroma of grandmother's
                  kitchen in Mysuru.
                </p>
              </div>
            </div>

            {/* Mysuru Heritage Stamp */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#234E35] bg-[#EBF2EC] px-3.5 py-1.5 rounded-full border border-[#B8D5C0]">
                <Home className="w-3.5 h-3.5" />
                <span>Mysuru, Karnataka, India</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C4320] bg-[#FAF5E6] px-3.5 py-1.5 rounded-full border border-[#E8DAAA]">
                <Flame className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Slow Roasted in Small Batches</span>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Kitchen Heritage Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-[#EAE2D8] space-y-4">

            {/* Visual Wordmark / Heritage Badge */}
            <div className="text-center pb-4 border-b border-[#EAE2D8]">

              {/* Aarna Logo Landscape Graphic */}
              <div className="max-w-[180px] mx-auto flex items-center justify-center mb-2">
                <img
                  src={arnaLogoLandImg}
                  alt="Aarna Food Products Official Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>

              <p className="text-[11px] text-[#6B5E55] uppercase tracking-widest font-semibold mt-1">
                Authentic Mysuru Flavours • Made at Home
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {BRAND_CONFIG.story.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#EAE2D8]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#234E35] shrink-0 mt-0.5" />

                  <div>
                    <h4 className="text-xs font-bold text-[#2C2420]">
                      {pillar.title}
                    </h4>

                    <p className="text-[11px] text-[#6B5E55] mt-0.5 leading-snug">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#234E35] hover:bg-[#1A3D29] text-[#FAF7F2] text-xs font-bold transition-colors shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Talk to Us on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};