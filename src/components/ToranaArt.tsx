import React from 'react';

interface ToranaProps {
  className?: string;
  variant?: 'banner' | 'corner-left' | 'corner-right' | 'hanging-pair' | 'compact';
}

/**
 * Subtle and Sleek South Indian Marigold & Mango Leaves Garland / Torana (ಮಾವಿನ ಎಲೆ & ಚೆಂಡು ಹೂವು ತೋರಣ)
 * Refined and scaled for elegant, uncluttered aesthetics.
 */

export const MarigoldFlower: React.FC<{
  cx: number;
  cy: number;
  r?: number;
  color?: 'orange' | 'yellow' | 'darkOrange';
  id?: string;
}> = ({ cx, cy, r = 7, color = 'orange' }) => {
  const fillMain = color === 'yellow' ? '#F5B014' : color === 'darkOrange' ? '#E65100' : '#FF6D00';
  const fillShadow = color === 'yellow' ? '#E59B00' : color === 'darkOrange' ? '#BF360C' : '#DD5700';
  const fillCenter = color === 'yellow' ? '#FFD54F' : '#FFA726';

  return (
    <g>
      {/* Outer petal ring (8 scalloped petals) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        const rad = (angle * Math.PI) / 180;
        const px = cx + (r * 0.5) * Math.cos(rad);
        const py = cy + (r * 0.5) * Math.sin(rad);
        return (
          <circle
            key={`p-out-${i}`}
            cx={px}
            cy={py}
            r={r * 0.45}
            fill={fillShadow}
          />
        );
      })}

      {/* Mid petal ring */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        const rad = (angle * Math.PI) / 180;
        const px = cx + (r * 0.35) * Math.cos(rad);
        const py = cy + (r * 0.35) * Math.sin(rad);
        return (
          <circle
            key={`p-mid-${i}`}
            cx={px}
            cy={py}
            r={r * 0.38}
            fill={fillMain}
          />
        );
      })}

      {/* Center core highlight */}
      <circle cx={cx} cy={cy} r={r * 0.4} fill={fillCenter} />
      <circle cx={cx} cy={cy} r={r * 0.2} fill={fillShadow} opacity={0.5} />
    </g>
  );
};

export const MangoLeaf: React.FC<{
  x: number;
  y: number;
  length?: number;
  width?: number;
  angle?: number;
  shade?: 'light' | 'deep';
}> = ({ x, y, length = 30, width = 9, angle = 0, shade = 'deep' }) => {
  const fillColor = shade === 'light' ? '#2E7D32' : '#1B5E20';
  const veinColor = shade === 'light' ? '#81C784' : '#4CAF50';

  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
      {/* Mango Leaf Blade Shape */}
      <path
        d={`M 0 0 C -${width / 2} ${length * 0.25}, -${width} ${length * 0.65}, 0 ${length} C ${width} ${length * 0.65}, ${width / 2} ${length * 0.25}, 0 0 Z`}
        fill={fillColor}
        stroke="#124116"
        strokeWidth="0.6"
      />
      {/* Central Vein */}
      <path d={`M 0 1.5 L 0 ${length * 0.88}`} stroke={veinColor} strokeWidth="0.8" strokeLinecap="round" />
    </g>
  );
};

/**
 * Cluster of 3 Mango leaves tied with a Marigold flower
 */
export const MangoLeafTrio: React.FC<{
  cx: number;
  cy: number;
  flowerColor?: 'orange' | 'yellow';
  stemHang?: boolean;
}> = ({ cx, cy, flowerColor = 'orange', stemHang = true }) => {
  return (
    <g>
      {/* 3 Leaves fan */}
      <MangoLeaf x={cx} y={cy + 3} length={30} width={8.5} angle={-16} shade="light" />
      <MangoLeaf x={cx} y={cy + 3} length={30} width={8.5} angle={16} shade="light" />
      <MangoLeaf x={cx} y={cy + 4} length={35} width={9.5} angle={0} shade="deep" />

      {/* Branch stem below */}
      {stemHang && (
        <g stroke="#2E7D32" strokeWidth="0.9" strokeLinecap="round" opacity={0.8}>
          <line x1={cx} y1={cy + 34} x2={cx} y2={cy + 46} />
          <line x1={cx} y1={cy + 37} x2={cx - 3.5} y2={cy + 41} />
          <line x1={cx} y1={cy + 37} x2={cx + 3.5} y2={cy + 41} />
          <circle cx={cx} cy={cy + 47} r="1.8" fill="#2E7D32" />
        </g>
      )}

      {/* Marigold flower knot at top */}
      <MarigoldFlower cx={cx} cy={cy + 2} r={8.5} color={flowerColor} />
    </g>
  );
};

/**
 * Single Mango Leaf with yellow flower
 */
export const SingleLeafWithFlower: React.FC<{
  cx: number;
  cy: number;
}> = ({ cx, cy }) => {
  return (
    <g>
      <MangoLeaf x={cx} y={cy + 2} length={22} width={7.5} angle={0} shade="deep" />
      <MarigoldFlower cx={cx} cy={cy + 1} r={6} color="yellow" />
    </g>
  );
};

/**
 * Spiral twisted green leaf garland column
 */
export const SpiralLeafGarland: React.FC<{
  cx: number;
  topY: number;
  flowerColor?: 'orange' | 'yellow';
}> = ({ cx, topY, flowerColor = 'yellow' }) => {
  return (
    <g>
      <MarigoldFlower cx={cx} cy={topY + 2} r={7.5} color="yellow" />

      {/* Twisted spiral green loops */}
      {Array.from({ length: 4 }).map((_, i) => {
        const y = topY + 12 + i * 8;
        return (
          <g key={`spiral-${i}`}>
            <ellipse cx={cx} cy={y} rx={4.5} ry={3.5} fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.6" />
            <path
              d={`M ${cx - 4} ${y} Q ${cx} ${y + 2.5} ${cx + 4} ${y}`}
              fill="#1B5E20"
              opacity={0.4}
            />
          </g>
        );
      })}

      {/* Bottom dangling marigold */}
      <MarigoldFlower cx={cx} cy={topY + 48} r={6.5} color={flowerColor} />
    </g>
  );
};

/**
 * Full Width Festive Torana (Mango leaves & Marigolds banner) - Sleek & Compact
 */
export const ToranaGarlandBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1200 62"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMin meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Golden connecting thread / string */}
        <line x1="0" y1="8" x2="1200" y2="8" stroke="#E67E22" strokeWidth="1.8" strokeDasharray="4 2" />
        <line x1="0" y1="8" x2="1200" y2="8" stroke="#D4AF37" strokeWidth="1" />

        {/* Repeating rhythmic torana units across 1200px */}
        {Array.from({ length: 8 }).map((_, idx) => {
          const baseX = idx * 150 + 65;
          return (
            <g key={`torana-unit-${idx}`}>
              {/* Trio cluster */}
              <MangoLeafTrio cx={baseX} cy={8} flowerColor={idx % 2 === 0 ? 'orange' : 'darkOrange'} />

              {/* Intermediate single leaf with yellow flower */}
              <SingleLeafWithFlower cx={baseX + 38} cy={8} />

              {/* Spiral leaf hanging with flower */}
              <SpiralLeafGarland cx={baseX + 75} topY={8} flowerColor={idx % 2 === 0 ? 'orange' : 'yellow'} />

              {/* Second intermediate single leaf */}
              <SingleLeafWithFlower cx={baseX + 112} cy={8} />
            </g>
          );
        })}

        {/* Side decorative corner clusters */}
        <MarigoldFlower cx={12} cy={8} r={9} color="orange" />
        <MangoLeaf x={12} y={10} length={26} width={8} angle={20} shade="deep" />
        <MarigoldFlower cx={1188} cy={8} r={9} color="orange" />
        <MangoLeaf x={1188} y={10} length={26} width={8} angle={-20} shade="deep" />
      </svg>
    </div>
  );
};

/**
 * Hanging Torana Column / Corner Garland (Matches side pillars of image #2)
 */
export const ToranaCornerGarland: React.FC<{
  position?: 'left' | 'right';
  className?: string;
}> = ({ position = 'left', className = '' }) => {
  const isLeft = position === 'left';
  return (
    <div
      className={`pointer-events-none select-none flex flex-col items-center ${
        isLeft ? 'origin-top-left' : 'origin-top-right'
      } ${className}`}
    >
      <svg
        viewBox="0 0 110 260"
        width="90"
        height="220"
        className="w-16 sm:w-22 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Thread */}
        <line x1="0" y1="10" x2="110" y2="10" stroke="#E67E22" strokeWidth="2" />

        {/* Top Mango leaf fan */}
        <g transform={isLeft ? 'translate(55, 12)' : 'translate(55, 12) scale(-1, 1)'}>
          <MangoLeaf x={0} y={0} length={52} width={15} angle={-35} shade="deep" />
          <MangoLeaf x={0} y={0} length={50} width={14} angle={-15} shade="light" />
          <MangoLeaf x={0} y={0} length={54} width={15} angle={10} shade="deep" />
          <MarigoldFlower cx={0} cy={0} r={16} color="yellow" />
        </g>

        {/* Thick Marigold Garland Column */}
        {Array.from({ length: 7 }).map((_, i) => {
          const y = 38 + i * 24;
          const color = i % 2 === 0 ? 'orange' : 'yellow';
          return (
            <g key={`garland-ball-${i}`}>
              <MarigoldFlower cx={55} cy={y} r={15} color={color} />
            </g>
          );
        })}

        {/* Side spiral hanging garland */}
        <g transform={`translate(${isLeft ? 18 : 92}, 18)`}>
          <SpiralLeafGarland cx={0} topY={0} flowerColor="orange" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Compact Torana Ribbon for headers and cards
 */
export const ToranaRibbon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 600 48"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMin meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="8" x2="600" y2="8" stroke="#E67E22" strokeWidth="2" />
        {Array.from({ length: 9 }).map((_, i) => {
          const x = i * 65 + 35;
          return (
            <g key={`ribbon-${i}`}>
              <MangoLeaf x={x} y={8} length={28} width={9} angle={0} shade={i % 2 === 0 ? 'deep' : 'light'} />
              <MarigoldFlower cx={x} cy={8} r={8} color={i % 2 === 0 ? 'orange' : 'yellow'} />
              <SingleLeafWithFlower cx={x + 32} cy={8} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/**
 * Traditional Mango Leaves & Marigold Section Divider
 */
export const ToranaSectionDivider: React.FC<{
  title?: string;
  kannada?: string;
  className?: string;
}> = ({ title, kannada, className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 sm:my-8 px-4 select-none ${className}`}>
      {/* Left garland line */}
      <div className="flex-1 max-w-xs flex items-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#E67E22] to-[#2E7D32]"></div>
      </div>

      {/* Center Mango Leaves & Marigold Cluster */}
      <div className="flex items-center gap-2 text-[#8B2635] shrink-0 bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#D4AF37]/50 shadow-2xs">
        <svg viewBox="0 0 50 36" width="36" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <MangoLeaf x={14} y={6} length={22} width={7} angle={-24} shade="light" />
          <MangoLeaf x={14} y={6} length={24} width={7} angle={0} shade="deep" />
          <MarigoldFlower cx={14} cy={6} r={7} color="yellow" />
          <MarigoldFlower cx={32} cy={8} r={6} color="orange" />
        </svg>

        {title && (
          <span className="font-serif-title text-sm sm:text-base font-bold text-[#8B2635] tracking-wide">
            {title}
          </span>
        )}
        {kannada && (
          <span className="text-[#234E35] font-serif-title font-medium text-xs sm:text-sm">
            {kannada}
          </span>
        )}

        <svg viewBox="0 0 50 36" width="36" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <MangoLeaf x={36} y={6} length={22} width={7} angle={24} shade="light" />
          <MangoLeaf x={36} y={6} length={24} width={7} angle={0} shade="deep" />
          <MarigoldFlower cx={36} cy={6} r={7} color="yellow" />
          <MarigoldFlower cx={18} cy={8} r={6} color="orange" />
        </svg>
      </div>

      {/* Right garland line */}
      <div className="flex-1 max-w-xs flex items-center">
        <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-[#E67E22] to-[#2E7D32]"></div>
      </div>
    </div>
  );
};

/**
 * Corner Mango Leaf & Marigold Accent for Cards and Modals (Delicate, Minimalist)
 */
export const CornerToranaAccent: React.FC<{
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  size?: number;
  className?: string;
}> = ({ position = 'top-right', size = 36, className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 scale-x-[-1]';
      case 'bottom-right':
        return 'bottom-0 right-0 scale-y-[-1]';
      case 'bottom-left':
        return 'bottom-0 left-0 scale-[-1]';
      case 'top-right':
      default:
        return 'top-0 right-0';
    }
  };

  return (
    <div
      className={`absolute ${getTransform()} pointer-events-none select-none z-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 50 50" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 0)">
          {/* Subtle leaves arching into card */}
          <MangoLeaf x={-4} y={0} length={24} width={7} angle={-50} shade="deep" />
          <MangoLeaf x={-2} y={0} length={20} width={6} angle={-25} shade="light" />
          {/* Mini Marigold flower tucked in corner */}
          <MarigoldFlower cx={-3} cy={3} r={6.5} color="orange" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Circular Marigold and Mango Leaves Wreath Halo for Brand Seal
 */
export const MarigoldLeafHalo: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 48, className = '' }) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ring of 8 mango leaves radiated outwards */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45;
          return (
            <g key={`wreath-leaf-${i}`} transform={`translate(50, 50) rotate(${angle}) translate(0, -42)`}>
              <MangoLeaf x={0} y={0} length={20} width={6} angle={0} shade={i % 2 === 0 ? 'deep' : 'light'} />
            </g>
          );
        })}

        {/* Outer golden thread ring */}
        <circle cx={50} cy={50} r={40} stroke="#E67E22" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* 4 cardinal marigold flowers */}
        <MarigoldFlower cx={50} cy={10} r={7} color="orange" />
        <MarigoldFlower cx={90} cy={50} r={7} color="yellow" />
        <MarigoldFlower cx={50} cy={90} r={7} color="orange" />
        <MarigoldFlower cx={10} cy={50} r={7} color="yellow" />
      </svg>
    </div>
  );
};



