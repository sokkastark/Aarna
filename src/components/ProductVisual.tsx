import React, { useState } from 'react';
import puliyogarePasteImg from '../assets/images/puliyogare_paste_1787377095868.jpg';
import vangiBathImg from '../assets/images/vangi_bath_powder_1787339748872.jpg';
import bisiBeleBathImg from '../assets/images/bisibelebath_powder_1787339763697.jpg';
import chatniPudiImg from '../assets/images/chatni_pudi_1787377112072.jpg';
import sambarPowderImg from '../assets/images/sambar_powder_1787377123649.jpg';
import rasamPowderImg from '../assets/images/rasam_powder_1787377135166.jpg';

interface ProductVisualProps {
  productId: string;
  imageUrl?: string;
  alt?: string;
  className?: string;
}

const PRODUCT_MEDIA: Record<string, { image: string; kannada: string; tag: string; bgGradient: string }> = {
  'puliyogare-paste': {
    image: puliyogarePasteImg,
    kannada: 'ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು',
    tag: 'Temple-Style Tamarind Gojju',
    bgGradient: 'from-[#80221E]/85 to-transparent'
  },
  'bisi-bele-bath-powder': {
    image: bisiBeleBathImg,
    kannada: 'ಬಿಸಿಬೇಳೆಭಾತ್ ಪುಡಿ',
    tag: '14 Heritage Spices & Kapok Buds',
    bgGradient: 'from-[#8C4320]/85 to-transparent'
  },
  'vangi-bath-powder': {
    image: vangiBathImg,
    kannada: 'ವಾಂಗಿಬಾತ್ ಪುಡಿ',
    tag: 'Aromatic Clove & Roasted Coconut',
    bgGradient: 'from-[#234E35]/85 to-transparent'
  },
  'chatni-pudi': {
    image: chatniPudiImg,
    kannada: 'ಚಟ್ನಿ ಪುಡಿ',
    tag: 'Spiced Lentil & Copra Gunpowder',
    bgGradient: 'from-[#8A6A15]/85 to-transparent'
  },
  'sambar-powder': {
    image: sambarPowderImg,
    kannada: 'ಸಾಂಬಾರ್ (ಹುಳಿ) ಪುಡಿ',
    tag: 'Homestyle Roasted Coriander & Fenugreek',
    bgGradient: 'from-[#9C3814]/85 to-transparent'
  },
  'rasam-powder': {
    image: rasamPowderImg,
    kannada: 'ಸಾರಿನ (ರಸಂ) ಪುಡಿ',
    tag: 'Crushed Malabar Pepper & Cumin',
    bgGradient: 'from-[#A82A2A]/85 to-transparent'
  }
};

export const ProductVisual: React.FC<ProductVisualProps> = ({
  productId,
  imageUrl,
  alt = 'Aarna authentic spice blend powder',
  className = ''
}) => {
  const [imgError, setImgError] = useState(false);
  const info = PRODUCT_MEDIA[productId] || PRODUCT_MEDIA['puliyogare-paste'];
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

