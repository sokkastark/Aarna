import React from 'react';
import { BRAND_CONFIG } from '../config/brand';
import aarnaLogoImg from '../assets/images/aarna_brand_logo_1787379384432.jpg';

interface BrandLogoProps {
  variant?: 'header' | 'hero' | 'footer' | 'compact' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header', className = '' }) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D9CBBF] shadow-2xs bg-[#FAF7F2] shrink-0">
          <img
            src={aarnaLogoImg}
            alt="Aarna Food Products Official Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-serif-title font-bold text-[#8B2635] text-base leading-tight tracking-wide">
            Aarna
          </span>
          <span className="text-[9px] uppercase tracking-widest text-[#234E35] font-semibold">
            Food Products
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shadow-md bg-[#FAF7F2] mb-3">
          <img
            src={aarnaLogoImg}
            alt="Aarna Food Products - Authentic Mysuru Flavours • Made at Home"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`w-14 h-14 rounded-2xl overflow-hidden border border-[#D9CBBF] shadow-xs bg-[#FAF7F2] ${className}`}>
        <img
          src={aarnaLogoImg}
          alt="Aarna Brand Emblem"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="flex items-center gap-3.5">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-[#D9CBBF] shadow-2xs bg-[#FAF7F2] shrink-0">
            <img
              src={aarnaLogoImg}
              alt="Aarna Food Products Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-serif-title text-2xl font-bold tracking-wide text-[#8B2635]">
              Aarna
            </span>
            <div className="text-[11px] tracking-[0.2em] font-semibold text-[#234E35] uppercase">
              Food Products • Mysuru
            </div>
          </div>
        </div>
        <p className="text-xs text-[#6B5E55] mt-2.5 max-w-sm leading-relaxed">
          {BRAND_CONFIG.missionStatement}
        </p>
      </div>
    );
  }

  // Default Header variant
  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none group ${className}`}>
      {/* Official Aarna Logo Avatar / Emblem */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#D9CBBF] shadow-2xs bg-[#FAF7F2] shrink-0 group-hover:border-[#8B2635]/60 transition-colors">
        <img
          src={aarnaLogoImg}
          alt="Aarna Food Products Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif-title text-xl font-bold tracking-wide text-[#8B2635] leading-tight group-hover:text-[#721F2B] transition-colors">
          Aarna
        </span>
        <span className="text-[10px] tracking-[0.22em] font-bold text-[#234E35] uppercase">
          Food Products
        </span>
      </div>
    </div>
  );
};



