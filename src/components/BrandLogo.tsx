import React from 'react';
import { BRAND_CONFIG } from '../config/brand';
import arnaLogoLandImg from '../assets/images/Arna logo land.png';
import aarnaSquareLogoImg from '../assets/images/aarna_brand_logo_1787379384432.png';

interface BrandLogoProps {
  variant?: 'header' | 'hero' | 'footer' | 'compact' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
}) => {
  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src={arnaLogoLandImg}
          alt="Aarna Food Products Official Logo"
          referrerPolicy="no-referrer"
          className="h-10 w-auto object-contain mix-blend-multiply"
        />
      </div>
    );
  }

  // Hero variant
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="max-w-xs sm:max-w-sm flex items-center justify-center mb-3">
          <img
            src={arnaLogoLandImg}
            alt="Aarna Food Products - Authentic Mysuru Flavours • Made at Home"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-24 object-contain mix-blend-multiply"
          />
        </div>
      </div>
    );
  }

  // Badge variant
  if (variant === 'badge') {
    return (
      <div className={`w-14 h-14 flex items-center justify-center ${className}`}>
        <img
          src={aarnaSquareLogoImg}
          alt="Aarna Brand Emblem"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>
    );
  }

  // Footer variant
  if (variant === 'footer') {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="flex items-center">
          <img
            src={arnaLogoLandImg}
            alt="Aarna Food Products Official Logo"
            referrerPolicy="no-referrer"
            className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply"
          />
        </div>

        <p className="text-xs text-[#6B5E55] mt-2.5 max-w-sm leading-relaxed">
          {BRAND_CONFIG.missionStatement}
        </p>
      </div>
    );
  }

  // Default Header variant: Displays the official landscape logo image directly
  return (
    <div className={`flex items-center cursor-pointer select-none group ${className}`}>
      <img
        src={arnaLogoLandImg}
        alt="Aarna Food Products Official Landscape Logo"
        referrerPolicy="no-referrer"
        className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply group-hover:scale-102 transition-transform duration-300"
      />
    </div>
  );
};