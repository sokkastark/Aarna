import React from 'react';
import { ArrowDown, MessageCircle, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { getWhatsAppInquiryUrl } from '../services/whatsappService';
import heroMuralImg from '../assets/images/mysuru_heritage_mural_1787340068067.jpg';
import { HangingMandalaCluster, HangingSingleMandala, MandalaOrnament } from './MandalaArt';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F0E7] to-[#FAF7F2] py-10 md:py-16 border-b border-[#EAE1D7]">
      {/* Hanging Festive Mandala Clusters (from reference designs) */}
      <div className="absolute top-0 left-2 sm:left-8 z-10 hidden sm:block">
        <HangingMandalaCluster />
      </div>
      <div className="absolute top-0 right-2 sm:right-8 z-10">
        <HangingMandalaCluster />
      </div>

      {/* Rotating Background Mandala Watermarks */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
        <MandalaOrnament
          size={500}
          color="#D4AF37"
          opacity={0.18}
          spin={true}
          className="absolute -top-24 -left-28 sm:left-4"
        />
        <MandalaOrnament
          size={460}
          color="#8B2635"
          opacity={0.12}
          spin={true}
          className="absolute -bottom-20 -right-24 sm:right-6"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Heritage Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C29B38]/40 shadow-xs mb-4 text-xs font-semibold text-[#8C4320]">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
          <span>Mysuru Home-Crafted Spice Traditions</span>
        </div>

        {/* Brand Main Title */}
        <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-bold text-[#8B2635] tracking-tight leading-[1.15] mb-2">
          {BRAND_CONFIG.name}
        </h1>

        {/* Tagline & Subheading */}
        <div className="text-xl sm:text-2xl md:text-3xl font-serif-title font-medium text-[#234E35] mt-1 mb-6">
          <span>{BRAND_CONFIG.tagline}</span>
          <span className="block text-base sm:text-lg italic font-normal text-[#8C4320] mt-1">
            {BRAND_CONFIG.subTagline}
          </span>
        </div>

        {/* Mysuru Heritage Folk Mural Art Showcase Card in Hero */}
        <div className="max-w-4xl mx-auto mb-8 rounded-2xl p-2 sm:p-2.5 bg-gradient-to-r from-[#D4AF37]/40 via-[#8B2635]/30 to-[#D4AF37]/40 border border-[#D4AF37]/60 shadow-lg relative group">
          <div className="relative rounded-xl overflow-hidden aspect-21/9 sm:aspect-16/7 max-h-[300px] w-full bg-[#3A1412]">
            <img
              src={heroMuralImg}
              alt="Traditional Mysuru Karnataka folk mural art of culinary celebrations, spice grinding, and temple heritage"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Heritage subtle tag */}
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#2A100F]/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#D4AF37]/40 text-[10px] sm:text-xs font-serif-title font-medium text-[#F4E1A4] flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>ಮೈಸೂರು ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆ • Heritage Art</span>
            </div>
          </div>
        </div>

        {/* Supporting Message */}
        <p className="text-base sm:text-lg text-[#5A4D46] max-w-xl mx-auto leading-relaxed mb-7">
          {BRAND_CONFIG.missionStatement}
        </p>

        {/* CTAs: Primary & Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto mb-8">
          <a
            id="hero-explore-btn"
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#8B2635] text-[#FAF7F2] font-semibold text-sm hover:bg-[#721F2B] active:scale-98 transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Explore Spice Powders</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            id="hero-whatsapp-btn"
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF7F2] text-[#234E35] border-2 border-[#234E35] font-semibold text-sm hover:bg-[#EBF2EC] active:scale-98 transition-all shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#234E35]" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Quick visual preview of the 4 spice blends */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-3xl mx-auto mb-10 text-left">
          <a
            href="#products"
            className="group/pill p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EBE1] border border-[#E8DFD5] transition-all flex items-center gap-2.5 shadow-2xs hover:shadow-xs"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-[#C29B38]/40">
              <img
                src="/src/assets/images/puliyogare_powder_1787339731415.jpg"
                alt="Puliyogare Powder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/pill:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#2C2420] truncate">Puliyogare</div>
              <div className="text-[10px] text-[#8C4320] font-serif-title truncate">ಹುಳಿಯೋಗರೆ</div>
            </div>
          </a>

          <a
            href="#products"
            className="group/pill p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EBE1] border border-[#E8DFD5] transition-all flex items-center gap-2.5 shadow-2xs hover:shadow-xs"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-[#C29B38]/40">
              <img
                src="/src/assets/images/vangi_bath_powder_1787339748872.jpg"
                alt="Vangi Bath Powder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/pill:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#2C2420] truncate">Vangi Bath</div>
              <div className="text-[10px] text-[#234E35] font-serif-title truncate">ವಾಂಗಿಬಾತ್</div>
            </div>
          </a>

          <a
            href="#products"
            className="group/pill p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EBE1] border border-[#E8DFD5] transition-all flex items-center gap-2.5 shadow-2xs hover:shadow-xs"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-[#C29B38]/40">
              <img
                src="/src/assets/images/bisibelebath_powder_1787339763697.jpg"
                alt="Bisi Bele Bath Powder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/pill:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#2C2420] truncate">Bisi Bele Bath</div>
              <div className="text-[10px] text-[#8C4320] font-serif-title truncate">ಬಿಸಿಬೇಳೆಭಾತ್</div>
            </div>
          </a>

          <a
            href="#products"
            className="group/pill p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EBE1] border border-[#E8DFD5] transition-all flex items-center gap-2.5 shadow-2xs hover:shadow-xs"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-[#C29B38]/40">
              <img
                src="/src/assets/images/chitranna_mix_1787339778424.jpg"
                alt="Lemon Rice Chitranna Mix"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/pill:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#2C2420] truncate">Lemon Rice Mix</div>
              <div className="text-[10px] text-[#8A6A15] font-serif-title truncate">ಚಿತ್ರಾನ್ನ</div>
            </div>
          </a>
        </div>

        {/* Trust Badges in Warm Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#E8DFD5]/80 text-left">
          <div className="bg-[#FAF7F2]/80 p-3 rounded-xl border border-[#EBE3D9] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#234E35] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#2C2420]">Small-Batch</div>
              <div className="text-[11px] text-[#6B5E55]">Freshly prepared</div>
            </div>
          </div>

          <div className="bg-[#FAF7F2]/80 p-3 rounded-xl border border-[#EBE3D9] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#234E35] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#2C2420]">Authentic Mysuru</div>
              <div className="text-[11px] text-[#6B5E55]">Traditional recipes</div>
            </div>
          </div>

          <div className="bg-[#FAF7F2]/80 p-3 rounded-xl border border-[#EBE3D9] flex items-start gap-2.5">
            <Heart className="w-4 h-4 text-[#8B2635] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#2C2420]">Made at Home</div>
              <div className="text-[11px] text-[#6B5E55]">Hand-roasted spices</div>
            </div>
          </div>

          <div className="bg-[#FAF7F2]/80 p-3 rounded-xl border border-[#EBE3D9] flex items-start gap-2.5">
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
