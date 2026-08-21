import React from 'react';
import { BRAND_CONFIG } from '../config/brand';
import { MandalaOrnament } from './MandalaArt';

interface BrandLogoProps {
  variant?: 'header' | 'hero' | 'footer' | 'compact';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header', className = '' }) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="relative w-9 h-9 flex items-center justify-center">
          <MandalaOrnament size={42} color="#D4AF37" opacity={0.6} className="absolute inset-0 m-auto animate-spin-slow" />
          <div className="w-7 h-7 rounded-full bg-[#8B2635] flex items-center justify-center text-[#FAF7F2] font-serif-title font-bold text-sm shadow-sm border border-[#D4AF37]/50 relative z-10">
            A
          </div>
        </div>
        <div className="flex flex-col">
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
        {/* Replaceable Brand Asset / Wordmark Area */}
        <div className="relative mb-2">
          {/* Traditional motif badge with mini mandala */}
          <div className="inline-flex items-center justify-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C29B38]/40 shadow-xs">
            <MandalaOrnament size={16} color="#8B2635" />
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#8C4320]">
              Mysuru Home Kitchen • ಮೈಸೂರು
            </span>
            <MandalaOrnament size={16} color="#8B2635" />
          </div>

          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-title font-bold tracking-tight text-[#8B2635] relative z-10">
              Aarna
            </h1>
          </div>

          <div className="flex items-center justify-center gap-3 mt-1">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-[#C29B38] to-[#C29B38]"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#234E35] uppercase">
              Food Products
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent via-[#C29B38] to-[#C29B38]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <MandalaOrnament size={52} color="#D4AF37" opacity={0.65} className="absolute inset-0 m-auto animate-spin-slow" />
            <div className="w-9 h-9 rounded-full bg-[#8B2635] flex items-center justify-center text-[#FAF7F2] font-serif-title font-bold text-xl border border-[#D4AF37]/60 shadow-sm relative z-10">
              A
            </div>
          </div>
          <div>
            <span className="font-serif-title text-2xl font-bold tracking-wide text-[#8B2635]">
              Aarna
            </span>
            <div className="text-[10px] tracking-[0.2em] font-semibold text-[#234E35] uppercase">
              Food Products • Mysuru
            </div>
          </div>
        </div>
        <p className="text-xs text-[#6B5E55] mt-2 max-w-xs leading-relaxed">
          {BRAND_CONFIG.missionStatement}
        </p>
      </div>
    );
  }

  // Default Header variant
  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none group ${className}`}>
      {/* Brand Icon Token with Mandala halo */}
      <div className="relative w-11 h-11 flex items-center justify-center">
        <MandalaOrnament size={46} color="#D4AF37" opacity={0.55} className="absolute inset-0 m-auto group-hover:rotate-45 transition-transform duration-500" />
        <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-br from-[#8B2635] to-[#6E1723] flex items-center justify-center text-[#FAF7F2] font-serif-title font-bold text-xl shadow-sm border border-[#D4AF37]/50 relative z-10 group-hover:scale-105 transition-transform">
          A
        </div>
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif-title text-xl font-bold tracking-wide text-[#8B2635] leading-tight">
          Aarna
        </span>
        <span className="text-[10px] tracking-[0.22em] font-bold text-[#234E35] uppercase">
          Food Products
        </span>
      </div>
    </div>
  );
};

