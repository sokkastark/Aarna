import React, { useState } from 'react';
import puliyogareImg from '../assets/images/puliyogare_powder_1787339731415.jpg';
import vangiBathImg from '../assets/images/vangi_bath_powder_1787339748872.jpg';
import bisiBeleBathImg from '../assets/images/bisibelebath_powder_1787339763697.jpg';
import chitrannaImg from '../assets/images/chitranna_mix_1787339778424.jpg';

interface ProductVisualProps {
  productId: string;
  imageUrl?: string;
  alt?: string;
  className?: string;
}

const PRODUCT_MEDIA: Record<string, { image: string; kannada: string; tag: string; bgGradient: string }> = {
  'puliyogare-powder': {
    image: puliyogareImg,
    kannada: 'ಹುಳಿಯೋಗರೆ ಪುಡಿ',
    tag: 'Temple-Style Tamarind Blend',
    bgGradient: 'from-[#80221E]/80 to-transparent'
  },
  'vangi-bath-powder': {
    image: vangiBathImg,
    kannada: 'ವಾಂಗಿಬಾತ್ ಪುಡಿ',
    tag: 'Aromatic Clove & Coconut',
    bgGradient: 'from-[#234E35]/80 to-transparent'
  },
  'bisi-bele-bath-powder': {
    image: bisiBeleBathImg,
    kannada: 'ಬಿಸಿಬೇಳೆಭಾತ್ ಪುಡಿ',
    tag: '14 Heritage Spices',
    bgGradient: 'from-[#8C4320]/80 to-transparent'
  },
  'lemon-rice-chitranna-mix': {
    image: chitrannaImg,
    kannada: 'ಚಿತ್ರಾನ್ನ ಮಿಕ್ಸ್',
    tag: 'Zesty Turmeric & Dal',
    bgGradient: 'from-[#8A6A15]/80 to-transparent'
  }
};

export const ProductVisual: React.FC<ProductVisualProps> = ({
  productId,
  imageUrl,
  alt = 'Aarna authentic spice blend powder',
  className = ''
}) => {
  const [imgError, setImgError] = useState(false);
  const info = PRODUCT_MEDIA[productId] || PRODUCT_MEDIA['puliyogare-powder'];
  const src = imageUrl || info?.image;

  if (imgError || !src) {
    return (
      <div className={`w-full aspect-4/3 rounded-xl bg-[#F6EFE9] flex items-center justify-center p-4 border border-[#E8DFD5] ${className}`}>
        <div className="text-center">
          <div className="font-serif-title text-base font-bold text-[#8B2635]">{info?.kannada}</div>
          <div className="text-xs text-[#6B5E55] mt-1">{info?.tag}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full aspect-4/3 rounded-xl overflow-hidden relative border border-[#E0D3C4] shadow-xs group/img bg-[#2C2420] ${className}`}>
      {/* High-resolution AI generated spice photograph */}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setImgError(true)}
        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
      />

      {/* Subtle bottom gradient overlay for readability & aesthetic polish */}
      <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t ${info.bgGradient} pt-8 pb-2.5 px-3 flex items-end justify-between pointer-events-none`}>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#FAF7F2] drop-shadow-sm">
          <span className="font-serif-title">{info.kannada}</span>
          <span className="opacity-70">•</span>
          <span className="opacity-90">{info.tag}</span>
        </div>
      </div>

      {/* Subtle gold border highlight */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 pointer-events-none"></div>
    </div>
  );
};

