import React from 'react';

/**
 * Intricate Multi-Layered Mandalas & Rangoli Motifs
 * Crafted to match detailed reference artwork with multi-layered crown petals,
 * teardrop filigree, scalloped arches, fine dot rings, and ornate central flowers.
 */

const AnimationStyle: React.FC = () => (
  <style>{`
    @keyframes rangoli-rotate-cw {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes rangoli-rotate-ccw {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    .spin-rangoli-cw { animation: rangoli-rotate-cw 130s linear infinite; }
    .spin-rangoli-ccw { animation: rangoli-rotate-ccw 160s linear infinite; }
  `}</style>
);

const toRad = (deg: number) => (deg * Math.PI) / 180;

/**
 * 1. HERO RANGOLI – Master Multi-Layered Mandala (Reference Image 2 Style)
 * Features 5 concentric rings: outer scalloped dots, 16 crown petals with inner teardrops,
 * 24 arc scallops, 16 inner leaf petals with vein lines, and a 24-petal center sunflower.
 */
export const HeroRangoli: React.FC = () => {
  const size = 440;
  const r = size / 2;
  const color = '#8B2635';
  const opacity = 0.075;

  return (
    <div className="absolute top-[-90px] right-[-110px] z-0 pointer-events-none user-select-none overflow-hidden">
      <AnimationStyle />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="spin-rangoli-cw"
        style={{ opacity, display: 'block' }}
        aria-hidden="true"
      >
        {/* Layer 1: Outer Guide Rings */}
        <circle cx={r} cy={r} r={r * 0.96} stroke={color} strokeWidth={size * 0.005} strokeDasharray="6 4" />
        <circle cx={r} cy={r} r={r * 0.91} stroke={color} strokeWidth={size * 0.004} />

        {/* Layer 2: 16 Outer Scalloped Crown Arches with Fine Dots */}
        {Array.from({ length: 16 }, (_, i) => {
          const deg = (360 / 16) * i;
          const a1 = toRad(deg - 11);
          const a2 = toRad(deg + 11);
          const aMid = toRad(deg);

          const x1 = r + r * 0.82 * Math.cos(a1);
          const y1 = r + r * 0.82 * Math.sin(a1);
          const x2 = r + r * 0.82 * Math.cos(a2);
          const y2 = r + r * 0.82 * Math.sin(a2);
          const ox = r + r * 0.91 * Math.cos(aMid);
          const oy = r + r * 0.91 * Math.sin(aMid);

          const dotX = r + r * 0.94 * Math.cos(aMid);
          const dotY = r + r * 0.94 * Math.sin(aMid);

          return (
            <g key={`h-cr-${i}`}>
              <path d={`M ${x1} ${y1} Q ${ox} ${oy} ${x2} ${y2}`} stroke={color} strokeWidth={size * 0.005} fill="none" />
              <circle cx={dotX} cy={dotY} r={size * 0.009} fill={color} />
            </g>
          );
        })}

        {/* Layer 3: 16 Crown Petals with Inner Teardrop Buds */}
        {Array.from({ length: 16 }, (_, i) => {
          const deg = (360 / 16) * i;
          const a1 = toRad(deg - 10);
          const a2 = toRad(deg + 10);
          const aMid = toRad(deg);

          const ix1 = r + r * 0.65 * Math.cos(a1);
          const iy1 = r + r * 0.65 * Math.sin(a1);
          const ix2 = r + r * 0.65 * Math.cos(a2);
          const iy2 = r + r * 0.65 * Math.sin(a2);
          const ox = r + r * 0.82 * Math.cos(aMid);
          const oy = r + r * 0.82 * Math.sin(aMid);

          const cx1 = r + r * 0.76 * Math.cos(a1);
          const cy1 = r + r * 0.76 * Math.sin(a1);
          const cx2 = r + r * 0.76 * Math.cos(a2);
          const cy2 = r + r * 0.76 * Math.sin(a2);

          /* Inner Teardrop Bud */
          const budOx = r + r * 0.77 * Math.cos(aMid);
          const budOy = r + r * 0.77 * Math.sin(aMid);
          const budIx = r + r * 0.68 * Math.cos(aMid);
          const budIy = r + r * 0.68 * Math.sin(aMid);

          return (
            <g key={`h-cp-${i}`}>
              <path d={`M ${ix1} ${iy1} Q ${cx1} ${cy1} ${ox} ${oy} Q ${cx2} ${cy2} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.04} />
              <path d={`M ${budIx} ${budIy} Q ${r + r * 0.73 * Math.cos(toRad(deg - 4))} ${r + r * 0.73 * Math.sin(toRad(deg - 4))} ${budOx} ${budOy} Q ${r + r * 0.73 * Math.cos(toRad(deg + 4))} ${r + r * 0.73 * Math.sin(toRad(deg + 4))} ${budIx} ${budIy} Z`} stroke={color} strokeWidth={size * 0.0035} fill={color} fillOpacity={0.08} />
            </g>
          );
        })}

        {/* Ring 4: 24 Scalloped Semi-Circles with Dot Border */}
        <circle cx={r} cy={r} r={r * 0.65} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 24 }, (_, i) => {
          const a = toRad((360 / 24) * i);
          return <circle key={`h-dot24-${i}`} cx={r + r * 0.62 * Math.cos(a)} cy={r + r * 0.62 * Math.sin(a)} r={size * 0.008} fill={color} />;
        })}

        {/* Ring 5: 16 Leaf Petals with Inner Vein Lines */}
        {Array.from({ length: 16 }, (_, i) => {
          const deg = (360 / 16) * i + 11.25;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 9);
          const a2 = toRad(deg + 9);

          const ix1 = r + r * 0.42 * Math.cos(a1);
          const iy1 = r + r * 0.42 * Math.sin(a1);
          const ix2 = r + r * 0.42 * Math.cos(a2);
          const iy2 = r + r * 0.42 * Math.sin(a2);
          const ox = r + r * 0.60 * Math.cos(aMid);
          const oy = r + r * 0.60 * Math.sin(aMid);

          const cx1 = r + r * 0.53 * Math.cos(a1);
          const cy1 = r + r * 0.53 * Math.sin(a1);
          const cx2 = r + r * 0.53 * Math.cos(a2);
          const cy2 = r + r * 0.53 * Math.sin(a2);

          const veinIx = r + r * 0.43 * Math.cos(aMid);
          const veinIy = r + r * 0.43 * Math.sin(aMid);

          return (
            <g key={`h-lp-${i}`}>
              <path d={`M ${ix1} ${iy1} Q ${cx1} ${cy1} ${ox} ${oy} Q ${cx2} ${cy2} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.05} />
              <line x1={veinIx} y1={veinIy} x2={ox} y2={oy} stroke={color} strokeWidth={size * 0.0035} />
            </g>
          );
        })}

        {/* Ring 6: 24-Petal Center Sunflower & Hub */}
        <circle cx={r} cy={r} r={r * 0.42} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 24 }, (_, i) => {
          const a = toRad((360 / 24) * i);
          const aMid = toRad((360 / 24) * (i + 0.5));
          const ix = r + r * 0.20 * Math.cos(a);
          const iy = r + r * 0.20 * Math.sin(a);
          const ox = r + r * 0.40 * Math.cos(aMid);
          const oy = r + r * 0.40 * Math.sin(aMid);
          return <path key={`h-sun-${i}`} d={`M ${ix} ${iy} L ${ox} ${oy}`} stroke={color} strokeWidth={size * 0.004} />;
        })}

        <circle cx={r} cy={r} r={r * 0.20} stroke={color} strokeWidth={size * 0.005} />
        <circle cx={r} cy={r} r={r * 0.12} stroke={color} strokeWidth={size * 0.004} fill={color} fillOpacity={0.15} />
        <circle cx={r} cy={r} r={r * 0.05} fill={color} />
      </svg>
    </div>
  );
};

/**
 * 2. PRODUCT GRID RANGOLI – Ornate Crown Mandala with Hatched Fans (Reference Image 3 Style)
 * Features 8 large ornate paisley crown peaks with inner hatched lines, dot clusters,
 * 16 fan arches with fine radial hatching, and a central starburst blossom.
 */
export const ProductGridRangoli: React.FC = () => {
  const size = 360;
  const r = size / 2;
  const color = '#C29B38';
  const opacity = 0.07;

  return (
    <div className="absolute top-[10px] left-[-110px] z-0 pointer-events-none user-select-none">
      <AnimationStyle />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="spin-rangoli-ccw"
        style={{ opacity, display: 'block' }}
        aria-hidden="true"
      >
        <circle cx={r} cy={r} r={r * 0.95} stroke={color} strokeWidth={size * 0.005} strokeDasharray="5 4" />

        {/* 8 Ornate Crown Peaks */}
        {Array.from({ length: 8 }, (_, i) => {
          const deg = (360 / 8) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 20);
          const a2 = toRad(deg + 20);

          const ix1 = r + r * 0.68 * Math.cos(a1);
          const iy1 = r + r * 0.68 * Math.sin(a1);
          const ix2 = r + r * 0.68 * Math.cos(a2);
          const iy2 = r + r * 0.68 * Math.sin(a2);
          const ox = r + r * 0.93 * Math.cos(aMid);
          const oy = r + r * 0.93 * Math.sin(aMid);

          const cx1 = r + r * 0.88 * Math.cos(a1);
          const cy1 = r + r * 0.88 * Math.sin(a1);
          const cx2 = r + r * 0.88 * Math.cos(a2);
          const cy2 = r + r * 0.88 * Math.sin(a2);

          return (
            <g key={`p-crown-${i}`}>
              <path d={`M ${ix1} ${iy1} Q ${cx1} ${cy1} ${ox} ${oy} Q ${cx2} ${cy2} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.04} />
              <circle cx={ox} cy={oy} r={size * 0.012} fill={color} />
            </g>
          );
        })}

        {/* 16 Scalloped Hatched Fans */}
        <circle cx={r} cy={r} r={r * 0.68} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 16 }, (_, i) => {
          const deg = (360 / 16) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 10);
          const a2 = toRad(deg + 10);

          const x1 = r + r * 0.48 * Math.cos(a1);
          const y1 = r + r * 0.48 * Math.sin(a1);
          const x2 = r + r * 0.48 * Math.cos(a2);
          const y2 = r + r * 0.48 * Math.sin(a2);
          const ox = r + r * 0.67 * Math.cos(aMid);
          const oy = r + r * 0.67 * Math.sin(aMid);

          /* Radial Hatching Lines */
          const hx1 = r + r * 0.49 * Math.cos(aMid);
          const hy1 = r + r * 0.49 * Math.sin(aMid);

          return (
            <g key={`p-fan-${i}`}>
              <path d={`M ${x1} ${y1} Q ${ox} ${oy} ${x2} ${y2}`} stroke={color} strokeWidth={size * 0.0045} fill={color} fillOpacity={0.05} />
              <line x1={hx1} y1={hy1} x2={ox} y2={oy} stroke={color} strokeWidth={size * 0.003} />
            </g>
          );
        })}

        {/* 16 Floral Medallions */}
        <circle cx={r} cy={r} r={r * 0.48} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 16 }, (_, i) => {
          const a = toRad((360 / 16) * i);
          const cx = r + r * 0.40 * Math.cos(a);
          const cy = r + r * 0.40 * Math.sin(a);
          return <circle key={`p-med-${i}`} cx={cx} cy={cy} r={size * 0.022} stroke={color} strokeWidth={size * 0.0035} fill={color} fillOpacity={0.06} />;
        })}

        {/* Center Starburst Bloom */}
        <circle cx={r} cy={r} r={r * 0.28} stroke={color} strokeWidth={size * 0.005} />
        {Array.from({ length: 8 }, (_, i) => {
          const a = toRad((360 / 8) * i);
          const ox = r + r * 0.26 * Math.cos(a);
          const oy = r + r * 0.26 * Math.sin(a);
          return <line key={`p-spk-${i}`} x1={r} y1={r} x2={ox} y2={oy} stroke={color} strokeWidth={size * 0.004} />;
        })}

        <circle cx={r} cy={r} r={r * 0.12} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.20} />
        <circle cx={r} cy={r} r={r * 0.05} fill={color} />
      </svg>
    </div>
  );
};

/**
 * 3. HERITAGE BANNER RANGOLI – 12-Petal Layered Lotus Wheel (Reference Image 1 Top-Right Style)
 * Features 12 outer double-contoured lotus petals, 12 peeking leaf tips, fine dot accents,
 * and a 12-spoke wheel hub.
 */
export const HeritageBannerRangoli: React.FC = () => {
  const size = 280;
  const r = size / 2;
  const color = '#F4E1A4';
  const opacity = 0.10;

  return (
    <div className="absolute top-[50%] right-[-70px] translate-y-[-50%] z-0 pointer-events-none user-select-none">
      <AnimationStyle />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="spin-rangoli-cw"
        style={{ opacity, display: 'block' }}
        aria-hidden="true"
      >
        <circle cx={r} cy={r} r={r * 0.96} stroke={color} strokeWidth={size * 0.005} strokeDasharray="4 3" />

        {/* 12 Outer Double-Line Lotus Petals */}
        {Array.from({ length: 12 }, (_, i) => {
          const deg = (360 / 12) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 14);
          const a2 = toRad(deg + 14);

          const ix1 = r + r * 0.58 * Math.cos(a1);
          const iy1 = r + r * 0.58 * Math.sin(a1);
          const ix2 = r + r * 0.58 * Math.cos(a2);
          const iy2 = r + r * 0.58 * Math.sin(a2);
          const ox = r + r * 0.90 * Math.cos(aMid);
          const oy = r + r * 0.90 * Math.sin(aMid);

          const cx1 = r + r * 0.82 * Math.cos(a1);
          const cy1 = r + r * 0.82 * Math.sin(a1);
          const cx2 = r + r * 0.82 * Math.cos(a2);
          const cy2 = r + r * 0.82 * Math.sin(a2);

          const dotX = r + r * 0.95 * Math.cos(aMid);
          const dotY = r + r * 0.95 * Math.sin(aMid);

          return (
            <g key={`hb-lotus-${i}`}>
              <path d={`M ${ix1} ${iy1} Q ${cx1} ${cy1} ${ox} ${oy} Q ${cx2} ${cy2} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.0055} fill={color} fillOpacity={0.06} />
              <circle cx={dotX} cy={dotY} r={size * 0.012} fill={color} />
            </g>
          );
        })}

        {/* 12 Peeking Leaf Tips */}
        {Array.from({ length: 12 }, (_, i) => {
          const deg = (360 / 12) * i + 15;
          const aMid = toRad(deg);
          const ox = r + r * 0.72 * Math.cos(aMid);
          const oy = r + r * 0.72 * Math.sin(aMid);
          const ix = r + r * 0.56 * Math.cos(aMid);
          const iy = r + r * 0.56 * Math.sin(aMid);
          return <line key={`hb-tip-${i}`} x1={ix} y1={iy} x2={ox} y2={oy} stroke={color} strokeWidth={size * 0.005} />;
        })}

        {/* Inner Ring & Spokes */}
        <circle cx={r} cy={r} r={r * 0.56} stroke={color} strokeWidth={size * 0.005} />
        <circle cx={r} cy={r} r={r * 0.36} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.10} />
        {Array.from({ length: 12 }, (_, i) => {
          const a = toRad((360 / 12) * i);
          return <line key={`hb-spk-${i}`} x1={r + r * 0.16 * Math.cos(a)} y1={r + r * 0.16 * Math.sin(a)} x2={r + r * 0.36 * Math.cos(a)} y2={r + r * 0.36 * Math.sin(a)} stroke={color} strokeWidth={size * 0.004} />;
        })}

        <circle cx={r} cy={r} r={r * 0.16} stroke={color} strokeWidth={size * 0.006} />
        <circle cx={r} cy={r} r={r * 0.08} fill={color} />
      </svg>
    </div>
  );
};

/**
 * 4. HOW IT WORKS RANGOLI – Double Starburst Crown Mandala (Reference Image 1 Bottom-Right Style)
 * Features 16 outer sharp double-layered starburst points, 16 rounded arches with inner teardrops,
 * a 12-petal lotus bloom, and a central dot core.
 */
export const HowItWorksRangoli: React.FC = () => {
  const size = 380;
  const r = size / 2;
  const color = '#8C4320';
  const opacity = 0.07;

  return (
    <div className="absolute top-[-60px] right-[-110px] z-0 pointer-events-none user-select-none">
      <AnimationStyle />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="spin-rangoli-ccw"
        style={{ opacity, display: 'block' }}
        aria-hidden="true"
      >
        <circle cx={r} cy={r} r={r * 0.95} stroke={color} strokeWidth={size * 0.005} strokeDasharray="6 4" />

        {/* 16 Sharp Double Starburst Points */}
        {Array.from({ length: 16 }, (_, i) => {
          const step = 360 / 16;
          const a1 = toRad(step * i);
          const aMid = toRad(step * (i + 0.5));
          const a2 = toRad(step * (i + 1));

          const ix1 = r + r * 0.72 * Math.cos(a1);
          const iy1 = r + r * 0.72 * Math.sin(a1);
          const ox = r + r * 0.93 * Math.cos(aMid);
          const oy = r + r * 0.93 * Math.sin(aMid);
          const ix2 = r + r * 0.72 * Math.cos(a2);
          const iy2 = r + r * 0.72 * Math.sin(a2);

          const innerOx = r + r * 0.85 * Math.cos(aMid);
          const innerOy = r + r * 0.85 * Math.sin(aMid);

          return (
            <g key={`hw-star-${i}`}>
              <path d={`M ${ix1} ${iy1} L ${ox} ${oy} L ${ix2} ${iy2}`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.03} />
              <path d={`M ${ix1} ${iy1} L ${innerOx} ${innerOy} L ${ix2} ${iy2}`} stroke={color} strokeWidth={size * 0.0035} />
            </g>
          );
        })}

        {/* 16 Rounded Arches with Inner Teardrops */}
        <circle cx={r} cy={r} r={r * 0.72} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 16 }, (_, i) => {
          const deg = (360 / 16) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 10);
          const a2 = toRad(deg + 10);

          const x1 = r + r * 0.52 * Math.cos(a1);
          const y1 = r + r * 0.52 * Math.sin(a1);
          const x2 = r + r * 0.52 * Math.cos(a2);
          const y2 = r + r * 0.52 * Math.sin(a2);
          const ox = r + r * 0.71 * Math.cos(aMid);
          const oy = r + r * 0.71 * Math.sin(aMid);

          const tdIx = r + r * 0.54 * Math.cos(aMid);
          const tdIy = r + r * 0.54 * Math.sin(aMid);
          const tdOx = r + r * 0.66 * Math.cos(aMid);
          const tdOy = r + r * 0.66 * Math.sin(aMid);

          return (
            <g key={`hw-arch-${i}`}>
              <path d={`M ${x1} ${y1} Q ${ox} ${oy} ${x2} ${y2}`} stroke={color} strokeWidth={size * 0.0045} fill="none" />
              <line x1={tdIx} y1={tdIy} x2={tdOx} y2={tdOy} stroke={color} strokeWidth={size * 0.004} />
            </g>
          );
        })}

        {/* 12-Petal Lotus Bloom Center */}
        <circle cx={r} cy={r} r={r * 0.52} stroke={color} strokeWidth={size * 0.004} strokeDasharray="3 3" />
        {Array.from({ length: 12 }, (_, i) => {
          const deg = (360 / 12) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 12);
          const a2 = toRad(deg + 12);

          const ix1 = r + r * 0.26 * Math.cos(a1);
          const iy1 = r + r * 0.26 * Math.sin(a1);
          const ix2 = r + r * 0.26 * Math.cos(a2);
          const iy2 = r + r * 0.26 * Math.sin(a2);
          const ox = r + r * 0.50 * Math.cos(aMid);
          const oy = r + r * 0.50 * Math.sin(aMid);

          return (
            <path key={`hw-bloom-${i}`} d={`M ${ix1} ${iy1} Q ${r + r * 0.42 * Math.cos(a1)} ${r + r * 0.42 * Math.sin(a1)} ${ox} ${oy} Q ${r + r * 0.42 * Math.cos(a2)} ${r + r * 0.42 * Math.sin(a2)} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.08} />
          );
        })}

        <circle cx={r} cy={r} r={r * 0.26} stroke={color} strokeWidth={size * 0.005} />
        <circle cx={r} cy={r} r={r * 0.12} stroke={color} strokeWidth={size * 0.004} fill={color} fillOpacity={0.18} />
        <circle cx={r} cy={r} r={r * 0.05} fill={color} />
      </svg>
    </div>
  );
};

/**
 * 5. BRAND STORY RANGOLI – Scroll & Leaf Bloom Mandala (Reference Image 1 Bottom-Left Style)
 * Features 16 pointed leaves with inner filigree scroll curves, 16 teardrops with spiral tendril flourishes,
 * and an 8-petal central flower blossom.
 */
export const BrandStoryRangoli: React.FC = () => {
  const size = 400;
  const r = size / 2;
  const color = '#8B2635';
  const opacity = 0.07;

  return (
    <div className="absolute top-[-60px] left-[-110px] z-0 pointer-events-none user-select-none">
      <AnimationStyle />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="spin-rangoli-cw"
        style={{ opacity, display: 'block' }}
        aria-hidden="true"
      >
        <circle cx={r} cy={r} r={r * 0.95} stroke={color} strokeWidth={size * 0.005} strokeDasharray="5 4" />

        {/* 16 Outer Leaves with Filigree Scroll Curves */}
        {Array.from({ length: 16 }, (_, i) => {
          const deg = (360 / 16) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 10);
          const a2 = toRad(deg + 10);

          const ix1 = r + r * 0.66 * Math.cos(a1);
          const iy1 = r + r * 0.66 * Math.sin(a1);
          const ix2 = r + r * 0.66 * Math.cos(a2);
          const iy2 = r + r * 0.66 * Math.sin(a2);
          const ox = r + r * 0.93 * Math.cos(aMid);
          const oy = r + r * 0.93 * Math.sin(aMid);

          /* Scroll tendril curve */
          const scx1 = r + r * 0.82 * Math.cos(a1);
          const scy1 = r + r * 0.82 * Math.sin(a1);
          const scx2 = r + r * 0.82 * Math.cos(a2);
          const scy2 = r + r * 0.82 * Math.sin(a2);

          return (
            <g key={`bs-leaf-${i}`}>
              <path d={`M ${ix1} ${iy1} Q ${scx1} ${scy1} ${ox} ${oy} Q ${scx2} ${scy2} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.04} />
              <circle cx={ox} cy={oy} r={size * 0.01} fill={color} />
            </g>
          );
        })}

        {/* 16 Inner Teardrops with Spiral Flourishes */}
        <circle cx={r} cy={r} r={r * 0.66} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 16 }, (_, i) => {
          const deg = (360 / 16) * i + 11.25;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 9);
          const a2 = toRad(deg + 9);

          const ix1 = r + r * 0.44 * Math.cos(a1);
          const iy1 = r + r * 0.44 * Math.sin(a1);
          const ix2 = r + r * 0.44 * Math.cos(a2);
          const iy2 = r + r * 0.44 * Math.sin(a2);
          const ox = r + r * 0.64 * Math.cos(aMid);
          const oy = r + r * 0.64 * Math.sin(aMid);

          return (
            <path key={`bs-spiral-${i}`} d={`M ${ix1} ${iy1} Q ${r + r * 0.56 * Math.cos(a1)} ${r + r * 0.56 * Math.sin(a1)} ${ox} ${oy} Q ${r + r * 0.56 * Math.cos(a2)} ${r + r * 0.56 * Math.sin(a2)} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.0045} fill={color} fillOpacity={0.06} />
          );
        })}

        {/* 8-Petal Central Flower Blossom */}
        <circle cx={r} cy={r} r={r * 0.44} stroke={color} strokeWidth={size * 0.004} strokeDasharray="4 3" />
        {Array.from({ length: 8 }, (_, i) => {
          const deg = (360 / 8) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 18);
          const a2 = toRad(deg + 18);

          const ix1 = r + r * 0.20 * Math.cos(a1);
          const iy1 = r + r * 0.20 * Math.sin(a1);
          const ix2 = r + r * 0.20 * Math.cos(a2);
          const iy2 = r + r * 0.20 * Math.sin(a2);
          const ox = r + r * 0.42 * Math.cos(aMid);
          const oy = r + r * 0.42 * Math.sin(aMid);

          return (
            <path key={`bs-fl-${i}`} d={`M ${ix1} ${iy1} Q ${r + r * 0.35 * Math.cos(a1)} ${r + r * 0.35 * Math.sin(a1)} ${ox} ${oy} Q ${r + r * 0.35 * Math.cos(a2)} ${r + r * 0.35 * Math.sin(a2)} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.0055} fill={color} fillOpacity={0.10} />
          );
        })}

        <circle cx={r} cy={r} r={r * 0.20} stroke={color} strokeWidth={size * 0.005} />
        <circle cx={r} cy={r} r={r * 0.10} stroke={color} strokeWidth={size * 0.004} fill={color} fillOpacity={0.20} />
        <circle cx={r} cy={r} r={r * 0.04} fill={color} />
      </svg>
    </div>
  );
};

/**
 * 6. FOOTER RANGOLI – Octagonal Wheel Kolam Mandala (Reference Image 1 Top-Left Style)
 * Features 8 sharp triangular outer peaks, 8 rounded scalloped lobes with fine vertical hatching,
 * 8 trapezoidal window panels with inner teardrops, and an 8-spoke wheel hub.
 */
export const FooterRangoli: React.FC = () => {
  const size = 320;
  const r = size / 2;
  const color = '#8C4320';
  const opacity = 0.065;

  return (
    <div className="absolute bottom-[-80px] right-[-80px] z-0 pointer-events-none user-select-none">
      <AnimationStyle />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="spin-rangoli-ccw"
        style={{ opacity, display: 'block' }}
        aria-hidden="true"
      >
        <circle cx={r} cy={r} r={r * 0.95} stroke={color} strokeWidth={size * 0.005} strokeDasharray="5 4" />

        {/* 8 Sharp Triangular Peaks */}
        {Array.from({ length: 8 }, (_, i) => {
          const step = 360 / 8;
          const a1 = toRad(step * i);
          const aMid = toRad(step * (i + 0.5));
          const a2 = toRad(step * (i + 1));

          const ix1 = r + r * 0.74 * Math.cos(a1);
          const iy1 = r + r * 0.74 * Math.sin(a1);
          const ox = r + r * 0.94 * Math.cos(aMid);
          const oy = r + r * 0.94 * Math.sin(aMid);
          const ix2 = r + r * 0.74 * Math.cos(a2);
          const iy2 = r + r * 0.74 * Math.sin(a2);

          return (
            <path key={`ft-peak-${i}`} d={`M ${ix1} ${iy1} L ${ox} ${oy} L ${ix2} ${iy2}`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.04} />
          );
        })}

        {/* 8 Scalloped Lobes with Vertical Hatching */}
        <circle cx={r} cy={r} r={r * 0.74} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 8 }, (_, i) => {
          const deg = (360 / 8) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 20);
          const a2 = toRad(deg + 20);

          const x1 = r + r * 0.52 * Math.cos(a1);
          const y1 = r + r * 0.52 * Math.sin(a1);
          const x2 = r + r * 0.52 * Math.cos(a2);
          const y2 = r + r * 0.52 * Math.sin(a2);
          const ox = r + r * 0.73 * Math.cos(aMid);
          const oy = r + r * 0.73 * Math.sin(aMid);

          /* Hatching lines inside lobe */
          const hx1 = r + r * 0.53 * Math.cos(aMid);
          const hy1 = r + r * 0.53 * Math.sin(aMid);

          return (
            <g key={`ft-lobe-${i}`}>
              <path d={`M ${x1} ${y1} Q ${ox} ${oy} ${x2} ${y2}`} stroke={color} strokeWidth={size * 0.0045} fill="none" />
              <line x1={hx1} y1={hy1} x2={ox} y2={oy} stroke={color} strokeWidth={size * 0.0035} />
            </g>
          );
        })}

        {/* 8 Trapezoidal Window Panels */}
        <circle cx={r} cy={r} r={r * 0.52} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 8 }, (_, i) => {
          const deg = (360 / 8) * i;
          const aMid = toRad(deg);
          const tdIx = r + r * 0.26 * Math.cos(aMid);
          const tdIy = r + r * 0.26 * Math.sin(aMid);
          const tdOx = r + r * 0.48 * Math.cos(aMid);
          const tdOy = r + r * 0.48 * Math.sin(aMid);
          return <line key={`ft-spk-${i}`} x1={tdIx} y1={tdIy} x2={tdOx} y2={tdOy} stroke={color} strokeWidth={size * 0.004} />;
        })}

        <circle cx={r} cy={r} r={r * 0.26} stroke={color} strokeWidth={size * 0.005} />
        <circle cx={r} cy={r} r={r * 0.12} stroke={color} strokeWidth={size * 0.004} fill={color} fillOpacity={0.16} />
        <circle cx={r} cy={r} r={r * 0.05} fill={color} />
      </svg>
    </div>
  );
};

/**
 * HERO BOTTOM-LEFT RANGOLI
 * 16-petal rich mandala positioned in the bottom-left corner of the Hero landing section.
 */
export const HeroRangoliBottomLeft: React.FC = () => {
  const size = 400;
  const r = size / 2;
  const color = '#8C4320';
  const opacity = 0.075;

  return (
    <div className="absolute bottom-[-90px] left-[-110px] z-0 pointer-events-none user-select-none overflow-hidden">
      <AnimationStyle />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="spin-rangoli-ccw"
        style={{ opacity, display: 'block' }}
        aria-hidden="true"
      >
        <circle cx={r} cy={r} r={r * 0.95} stroke={color} strokeWidth={size * 0.005} strokeDasharray="5 4" />
        <circle cx={r} cy={r} r={r * 0.89} stroke={color} strokeWidth={size * 0.004} />

        {/* 16 Outer Curved Petals */}
        {Array.from({ length: 16 }, (_, i) => {
          const deg = (360 / 16) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 9);
          const a2 = toRad(deg + 9);

          const ix1 = r + r * 0.64 * Math.cos(a1);
          const iy1 = r + r * 0.64 * Math.sin(a1);
          const ix2 = r + r * 0.64 * Math.cos(a2);
          const iy2 = r + r * 0.64 * Math.sin(a2);
          const ox = r + r * 0.88 * Math.cos(aMid);
          const oy = r + r * 0.88 * Math.sin(aMid);

          return (
            <path key={`hbl-p-${i}`} d={`M ${ix1} ${iy1} Q ${r + r * 0.78 * Math.cos(a1)} ${r + r * 0.78 * Math.sin(a1)} ${ox} ${oy} Q ${r + r * 0.78 * Math.cos(a2)} ${r + r * 0.78 * Math.sin(a2)} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.04} />
          );
        })}

        <circle cx={r} cy={r} r={r * 0.64} stroke={color} strokeWidth={size * 0.004} />
        {Array.from({ length: 16 }, (_, i) => {
          const a = toRad((360 / 16) * i);
          return <circle key={`hbl-dot-${i}`} cx={r + r * 0.55 * Math.cos(a)} cy={r + r * 0.55 * Math.sin(a)} r={size * 0.012} fill={color} />;
        })}

        <circle cx={r} cy={r} r={r * 0.46} stroke={color} strokeWidth={size * 0.005} />
        <circle cx={r} cy={r} r={r * 0.22} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.12} />
        <circle cx={r} cy={r} r={r * 0.08} fill={color} />
      </svg>
    </div>
  );
};

/**
 * PRODUCT GRID BOTTOM-RIGHT RANGOLI
 * Ornate crown mandala positioned in the bottom-right corner of the Product Grid section.
 */
export const ProductGridRangoliBottomRight: React.FC = () => {
  const size = 350;
  const r = size / 2;
  const color = '#8B2635';
  const opacity = 0.075;

  return (
    <div className="absolute bottom-[-70px] right-[-90px] z-0 pointer-events-none user-select-none">
      <AnimationStyle />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="spin-rangoli-cw"
        style={{ opacity, display: 'block' }}
        aria-hidden="true"
      >
        <circle cx={r} cy={r} r={r * 0.95} stroke={color} strokeWidth={size * 0.005} strokeDasharray="6 4" />

        {/* 12 Outer Lotus Petals */}
        {Array.from({ length: 12 }, (_, i) => {
          const deg = (360 / 12) * i;
          const aMid = toRad(deg);
          const a1 = toRad(deg - 13);
          const a2 = toRad(deg + 13);

          const ix1 = r + r * 0.58 * Math.cos(a1);
          const iy1 = r + r * 0.58 * Math.sin(a1);
          const ix2 = r + r * 0.58 * Math.cos(a2);
          const iy2 = r + r * 0.58 * Math.sin(a2);
          const ox = r + r * 0.88 * Math.cos(aMid);
          const oy = r + r * 0.88 * Math.sin(aMid);

          return (
            <path key={`pbr-p-${i}`} d={`M ${ix1} ${iy1} Q ${r + r * 0.78 * Math.cos(a1)} ${r + r * 0.78 * Math.sin(a1)} ${ox} ${oy} Q ${r + r * 0.78 * Math.cos(a2)} ${r + r * 0.78 * Math.sin(a2)} ${ix2} ${iy2} Z`} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.05} />
          );
        })}

        <circle cx={r} cy={r} r={r * 0.58} stroke={color} strokeWidth={size * 0.004} strokeDasharray="3 3" />
        <circle cx={r} cy={r} r={r * 0.38} stroke={color} strokeWidth={size * 0.005} fill={color} fillOpacity={0.10} />
        <circle cx={r} cy={r} r={r * 0.16} stroke={color} strokeWidth={size * 0.005} />
        <circle cx={r} cy={r} r={r * 0.06} fill={color} />
      </svg>
    </div>
  );
};
