import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { getWhatsAppInquiryUrl } from '../services/whatsappService';
import heroMuralImg from '../assets/images/mysuru_heritage_mural_1787340068067.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#FAF8F5] pt-8 sm:pt-12 pb-14 md:pb-20 border-b border-[#EAE2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Small Heritage Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EDE4] border border-[#D9CBBF] text-xs font-semibold text-[#8C4320] mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
          <span>Mysuru Home-Crafted Spice Traditions</span>
        </div>

        {/* Brand Main Title */}
        <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-bold text-[#8B2635] tracking-tight leading-[1.12] mb-3">
          {BRAND_CONFIG.name}
        </h1>

        {/* Tagline & Subheading */}
        <div className="text-xl sm:text-2xl md:text-3xl font-serif-title font-medium text-[#234E35] mb-2">
          {BRAND_CONFIG.tagline}
        </div>
        <p className="text-sm sm:text-base italic text-[#8C4320] mb-8 font-serif-title">
          {BRAND_CONFIG.subTagline}
        </p>

        {/* Mysuru Heritage Folk Mural Art Showcase Card */}
        <div className="max-w-4xl mx-auto mb-8 rounded-2xl p-2 bg-[#FCFAF7] border border-[#E2D6C7] shadow-sm relative group">
          <div className="relative rounded-xl overflow-hidden aspect-21/9 sm:aspect-16/7 max-h-[320px] w-full bg-[#2C1810]">
            <img
              src={heroMuralImg}
              alt="Traditional Mysuru Karnataka folk mural art of culinary celebrations, spice grinding, and temple heritage"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Heritage subtle tag */}
            <div className="absolute top-3 left-3 bg-[#1C0E0B]/85 backdrop-blur-xs px-3 py-1 rounded-md border border-[#D4AF37]/40 text-[11px] font-serif-title font-medium text-[#F4E1A4] flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>ಮೈಸೂರು ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆ • Heritage Kitchen Art</span>
            </div>
          </div>
        </div>

        {/* Supporting Message */}
        <p className="text-base sm:text-lg text-[#5A4D46] max-w-2xl mx-auto leading-relaxed mb-8">
          {BRAND_CONFIG.missionStatement}
        </p>

        {/* CTAs: Primary & Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto mb-12">
          <a
            id="hero-explore-btn"
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#8B2635] text-[#FAF7F2] font-semibold text-sm hover:bg-[#721F2B] active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Explore Products</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            id="hero-whatsapp-btn"
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FFFFFF] text-[#234E35] border border-[#234E35] font-semibold text-sm hover:bg-[#F2F7F3] active:scale-98 transition-all shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#234E35]" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges - Clean, spacious row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#EAE2D8] text-left">
          <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#EAE2D8] flex items-start gap-2.5 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#234E35] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#2C2420]">Small-Batch</div>
              <div className="text-[11px] text-[#6B5E55]">Freshly prepared</div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#EAE2D8] flex items-start gap-2.5 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#234E35] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#2C2420]">Authentic Mysuru</div>
              <div className="text-[11px] text-[#6B5E55]">Traditional recipes</div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#EAE2D8] flex items-start gap-2.5 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#234E35] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#2C2420]">Pure Ingredients</div>
              <div className="text-[11px] text-[#6B5E55]">Hand-roasted spices</div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#EAE2D8] flex items-start gap-2.5 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#234E35] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#2C2420]">Pre-Order Basis</div>
              <div className="text-[11px] text-[#6B5E55]">Zero old stock</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

