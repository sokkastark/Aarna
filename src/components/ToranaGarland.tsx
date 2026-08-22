import React from 'react';

/**
 * Traditional South Indian Mango Leaf (Mavina Ele) & Marigold (Chenduvoo) Torana Garland.
 * Features 36px compact proportional mango leaves with visible veins,
 * smooth breeze sway animation, and zero bottom clipping (90px viewBox).
 */
interface ToranaProps {
  className?: string;
}

/* Inline Mango Leaf Component to ensure 100% SVG render reliability */
const MangoLeaf: React.FC<{
  x: number;
  y: number;
  rotate: number;
  animClass?: string;
}> = ({ x, y, rotate, animClass = '' }) => (
  <g className={animClass} style={{ transformOrigin: `${x}px ${y}px` }}>
    <g transform={`translate(${x}, ${y}) rotate(${rotate})`}>
      {/* Outer Leaf Blade */}
      <path
        d="M 0 0 C 6 10 8 22 0 36 C -8 22 -6 10 0 0 Z"
        fill="url(#mangoLeafGrad)"
        stroke="#152E17"
        strokeWidth="0.8"
      />
      {/* Central Spine Vein */}
      <path d="M 0 1 L 0 33" stroke="url(#leafVeinGrad)" strokeWidth="1" />
      {/* Side Veins Right */}
      <path d="M 0 9 Q 3 12 5 14 M 0 17 Q 4 20 5 22 M 0 24 Q 3 26 4 28" stroke="url(#leafVeinGrad)" strokeWidth="0.6" fill="none" />
      {/* Side Veins Left */}
      <path d="M 0 9 Q -3 12 -5 14 M 0 17 Q -4 20 -5 22 M 0 24 Q -3 26 -4 28" stroke="url(#leafVeinGrad)" strokeWidth="0.6" fill="none" />
    </g>
  </g>
);

export const ToranaGarland: React.FC<ToranaProps> = ({ className = '' }) => {
  const swags = [0, 1, 2, 3, 4, 5];

  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      {/* CSS Gentle Breeze Sway Animations */}
      <style>{`
        @keyframes torana-sway-left {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3.5deg); }
        }
        @keyframes torana-sway-right {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-3.5deg); }
        }
        .sway-a { animation: torana-sway-left 5.2s ease-in-out infinite; }
        .sway-b { animation: torana-sway-right 6.4s ease-in-out infinite 0.3s; }
        .sway-c { animation: torana-sway-left 5.8s ease-in-out infinite 0.7s; }
      `}</style>

      <svg
        viewBox="0 0 1200 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-w-[700px] block"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Mango Leaf Gradient */}
          <linearGradient id="mangoLeafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3E7D46" />
            <stop offset="55%" stopColor="#234E27" />
            <stop offset="100%" stopColor="#17341B" />
          </linearGradient>

          {/* Leaf Vein Highlight */}
          <linearGradient id="leafVeinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CEBA7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3E7D46" stopOpacity="0.3" />
          </linearGradient>

          {/* Marigold Yellow Gradient */}
          <radialGradient id="marigoldYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="50%" stopColor="#FBC02D" />
            <stop offset="100%" stopColor="#F57F17" />
          </radialGradient>

          {/* Marigold Orange Gradient */}
          <radialGradient id="marigoldOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB74D" />
            <stop offset="60%" stopColor="#F57C00" />
            <stop offset="100%" stopColor="#E65100" />
          </radialGradient>

          {/* Yellow Marigold Flower Symbol */}
          <g id="marigold-yellow">
            <circle cx="0" cy="0" r="8" fill="url(#marigoldYellow)" />
            {Array.from({ length: 8 }, (_, i) => {
              const a = ((360 / 8) * i * Math.PI) / 180;
              return <circle key={i} cx={5.5 * Math.cos(a)} cy={5.5 * Math.sin(a)} r="3" fill="#FBC02D" opacity="0.95" />;
            })}
            <circle cx="0" cy="0" r="3.5" fill="#E65100" />
            <circle cx="0" cy="0" r="1.5" fill="#FFF176" />
          </g>

          {/* Orange Marigold Flower Symbol */}
          <g id="marigold-orange">
            <circle cx="0" cy="0" r="7.5" fill="url(#marigoldOrange)" />
            {Array.from({ length: 8 }, (_, i) => {
              const a = ((360 / 8) * i * Math.PI) / 180;
              return <circle key={i} cx={5 * Math.cos(a)} cy={5 * Math.sin(a)} r="2.8" fill="#EF6C00" opacity="0.95" />;
            })}
            <circle cx="0" cy="0" r="2.8" fill="#BF360C" />
            <circle cx="0" cy="0" r="1.2" fill="#FFB74D" />
          </g>
        </defs>

        {/* Top Hanging Cord / String */}
        <line x1="0" y1="6" x2="1200" y2="6" stroke="#8D6E63" strokeWidth="2" strokeDasharray="6 3" />

        {/* Swag Loops and Garland Items */}
        {swags.map((idx) => {
          const startX = idx * 200;

          return (
            <g key={idx}>
              {/* Festoon Curved Cord Arc */}
              <path
                d={`M ${startX} 6 Q ${startX + 100} 34 ${startX + 200} 6`}
                stroke="#A1887F"
                strokeWidth="1.5"
                fill="none"
              />

              {/* 5 Proportional 36px Mango Leaves Per Swag (100% Render Guarantee) */}
              <MangoLeaf x={startX + 25} y={14} rotate={-14} animClass="sway-a" />
              <MangoLeaf x={startX + 60} y={22} rotate={-6} animClass="sway-b" />
              <MangoLeaf x={startX + 100} y={26} rotate={0} animClass="sway-c" />
              <MangoLeaf x={startX + 140} y={22} rotate={6} animClass="sway-a" />
              <MangoLeaf x={startX + 175} y={14} rotate={14} animClass="sway-b" />

              {/* Marigold Flowers */}
              <use href="#marigold-yellow" x={startX + 10} y="8" />
              <use href="#marigold-orange" x={startX + 40} y="11" />
              <use href="#marigold-yellow" x={startX + 80} y="16" />
              <use href="#marigold-orange" x={startX + 100} y="18" />
              <use href="#marigold-yellow" x={startX + 120} y="16" />
              <use href="#marigold-orange" x={startX + 160} y="11" />
              <use href="#marigold-yellow" x={startX + 190} y="8" />
            </g>
          );
        })}

        {/* End Drops on Left and Right */}
        <g transform="translate(10, 8)">
          <use href="#marigold-orange" x="0" y="4" />
          <use href="#marigold-yellow" x="0" y="16" />
          <MangoLeaf x={0} y={24} rotate={0} animClass="sway-a" />
        </g>
        <g transform="translate(1190, 8)">
          <use href="#marigold-orange" x="0" y="4" />
          <use href="#marigold-yellow" x="0" y="16" />
          <MangoLeaf x={0} y={24} rotate={0} animClass="sway-b" />
        </g>
      </svg>
    </div>
  );
};
