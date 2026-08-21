import React from 'react';

interface MandalaProps {
  className?: string;
  size?: number | string;
  color?: string;
  opacity?: number;
  spin?: boolean;
}

/**
 * Detailed Traditional Indian Mandala SVG Motif inspired by classical Rangoli & Kolam designs
 */
export const MandalaOrnament: React.FC<MandalaProps> = ({
  className = '',
  size = 200,
  color = 'currentColor',
  opacity = 1,
  spin = false
}) => {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${spin ? 'animate-spin-slow' : ''} ${className}`}
      style={{ opacity }}
    >
      <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Center core circles */}
        <circle cx="200" cy="200" r="14" fill={color} fillOpacity="0.15" strokeWidth="2" />
        <circle cx="200" cy="200" r="24" strokeDasharray="3 3" />
        <circle cx="200" cy="200" r="36" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="48" strokeDasharray="4 2" />
        <circle cx="200" cy="200" r="62" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="80" strokeWidth="2" />
        <circle cx="200" cy="200" r="102" strokeDasharray="5 3" />
        <circle cx="200" cy="200" r="128" strokeWidth="1.8" />
        <circle cx="200" cy="200" r="156" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="185" strokeWidth="2" />

        {/* 16-spoke center rays */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const x1 = 200 + 24 * Math.cos(rad);
          const y1 = 200 + 24 * Math.sin(rad);
          const x2 = 200 + 36 * Math.cos(rad);
          const y2 = 200 + 36 * Math.sin(rad);
          return <line key={`ray-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.5" />;
        })}

        {/* Inner Floral Petals (8 petals) */}
        {Array.from({ length: 8 }).map((_, i) => {
          const deg = i * 45;
          return (
            <g key={`inner-petal-${i}`} transform={`rotate(${deg} 200 200)`}>
              <path
                d="M200 138 C185 160 185 180 200 190 C215 180 215 160 200 138 Z"
                fill={color}
                fillOpacity="0.08"
                strokeWidth="1.5"
              />
              <path d="M200 148 C192 165 192 178 200 185 C208 178 208 165 200 148 Z" />
              <circle cx="200" cy="154" r="2.5" fill={color} />
            </g>
          );
        })}

        {/* Mid Layer Intricate Petals (16 Petals) */}
        {Array.from({ length: 16 }).map((_, i) => {
          const deg = i * 22.5;
          return (
            <g key={`mid-petal-${i}`} transform={`rotate(${deg} 200 200)`}>
              {/* Petal Outer Arc */}
              <path
                d="M200 98 C182 120 186 142 200 148 C214 142 218 120 200 98 Z"
                fill={color}
                fillOpacity="0.05"
                strokeWidth="1.5"
              />
              {/* Inner Petal Vein & Beads */}
              <path d="M200 106 Q200 128 200 146" strokeWidth="1.2" />
              <circle cx="200" cy="116" r="2" fill={color} />
              <circle cx="192" cy="126" r="1.5" />
              <circle cx="208" cy="126" r="1.5" />
            </g>
          );
        })}

        {/* Outer Grand Petals with Crown Ornaments (16 Large Petals) */}
        {Array.from({ length: 16 }).map((_, i) => {
          const deg = i * 22.5 + 11.25;
          return (
            <g key={`outer-petal-${i}`} transform={`rotate(${deg} 200 200)`}>
              {/* Main Spear/Flame Petal */}
              <path
                d="M200 15 C165 65 170 115 200 128 C230 115 235 65 200 15 Z"
                fill={color}
                fillOpacity="0.06"
                strokeWidth="1.8"
              />
              {/* Inner Concentric Contour */}
              <path
                d="M200 32 C176 72 180 105 200 116 C220 105 224 72 200 32 Z"
                strokeWidth="1.2"
              />
              {/* Central Spine */}
              <path d="M200 40 L200 112" strokeWidth="1" strokeDasharray="3 2" />
              {/* Droplet & Jewel details */}
              <circle cx="200" cy="50" r="3.5" fill={color} fillOpacity="0.3" strokeWidth="1.5" />
              <circle cx="200" cy="65" r="2.5" fill={color} />
              <circle cx="188" cy="80" r="2" />
              <circle cx="212" cy="80" r="2" />
              {/* Scalloped edge details */}
              <path d="M178 78 Q170 65 184 55" strokeWidth="1" />
              <path d="M222 78 Q230 65 216 55" strokeWidth="1" />
            </g>
          );
        })}

        {/* Outer Scalloped Lace Border */}
        {Array.from({ length: 32 }).map((_, i) => {
          const deg = (i * 360) / 32;
          return (
            <g key={`scallop-${i}`} transform={`rotate(${deg} 200 200)`}>
              <path d="M190 18 C200 8 200 8 210 18" strokeWidth="1.5" />
              <circle cx="200" cy="8" r="2" fill={color} />
            </g>
          );
        })}
      </g>
    </svg>
  );
};

/**
 * Hanging Festive Mandala Medallions (matching reference image #2)
 */
export const HangingMandalaCluster: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none flex items-start justify-end gap-2 sm:gap-6 ${className}`}>
      {/* Hanging Medallion 1 - Small Left */}
      <div className="flex flex-col items-center animate-sway-slow origin-top" style={{ animationDelay: '0.2s' }}>
        <div className="w-[1.5px] h-12 sm:h-20 bg-gradient-to-b from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-xs"></div>
        <MandalaOrnament size={50} color="#8B2635" className="text-[#8B2635] -mt-1 drop-shadow-xs" />
        <div className="w-1 h-3 bg-[#D4AF37] -mt-0.5 rounded-b-full"></div>
      </div>

      {/* Hanging Medallion 2 - Large Center */}
      <div className="flex flex-col items-center animate-sway origin-top" style={{ animationDelay: '0.8s' }}>
        <div className="w-[1.5px] h-20 sm:h-32 bg-gradient-to-b from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-xs"></div>
        <MandalaOrnament size={84} color="#C29B38" className="text-[#C29B38] -mt-2 drop-shadow-sm" />
        <div className="w-1.5 h-4 bg-[#8B2635] -mt-1 rounded-b-full border-t border-[#D4AF37]"></div>
      </div>

      {/* Hanging Medallion 3 - Medium Right */}
      <div className="hidden sm:flex flex-col items-center animate-sway-slow origin-top" style={{ animationDelay: '1.4s' }}>
        <div className="w-[1.5px] h-16 sm:h-24 bg-gradient-to-b from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-xs"></div>
        <MandalaOrnament size={64} color="#8B2635" className="text-[#8B2635] -mt-1.5 drop-shadow-xs" />
        <div className="w-1 h-3.5 bg-[#D4AF37] -mt-0.5 rounded-b-full"></div>
      </div>
    </div>
  );
};

/**
 * Hanging Single Medallion
 */
export const HangingSingleMandala: React.FC<{
  stringLength?: string;
  size?: number;
  color?: string;
  className?: string;
  delay?: string;
}> = ({
  stringLength = 'h-16',
  size = 56,
  color = '#C29B38',
  className = '',
  delay = '0s'
}) => {
  return (
    <div
      className={`flex flex-col items-center animate-sway origin-top pointer-events-none select-none ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className={`w-[1px] ${stringLength} bg-gradient-to-b from-transparent via-[${color}] to-[${color}] opacity-80`}></div>
      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
      <MandalaOrnament size={size} color={color} className="-mt-1 drop-shadow-xs" />
      <div className="w-1 h-3 bg-[#D4AF37] -mt-0.5 rounded-b-full"></div>
    </div>
  );
};

/**
 * Traditional Section Divider with Central Mandala Motif
 */
export const MandalaSectionDivider: React.FC<{
  title?: string;
  kannada?: string;
  className?: string;
}> = ({ title, kannada, className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 sm:my-8 px-4 ${className}`}>
      <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#C29B38]"></div>
      
      <div className="flex items-center gap-2 text-[#8B2635] shrink-0">
        <MandalaOrnament size={28} color="#C29B38" />
        {title && (
          <span className="font-serif-title text-sm sm:text-base font-bold text-[#8B2635] tracking-wide">
            {title} {kannada && <span className="text-[#8C4320] font-normal text-xs ml-1">({kannada})</span>}
          </span>
        )}
        <MandalaOrnament size={28} color="#C29B38" />
      </div>

      <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#C29B38]"></div>
    </div>
  );
};

/**
 * Corner Mandala Rosette for Cards and Modals
 */
export const CornerMandala: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}> = ({
  position = 'top-right',
  size = 120,
  color = '#C29B38',
  opacity = 0.15,
  className = ''
}) => {
  const positionClasses = {
    'top-left': '-top-12 -left-12',
    'top-right': '-top-12 -right-12',
    'bottom-left': '-bottom-12 -left-12',
    'bottom-right': '-bottom-12 -right-12'
  };

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none select-none z-0 ${className}`}>
      <MandalaOrnament size={size} color={color} opacity={opacity} />
    </div>
  );
};
