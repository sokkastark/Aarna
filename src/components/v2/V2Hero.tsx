import React from 'react';
import { Sparkles, ShoppingBag, Gift, ArrowRight, ShieldCheck, Flame, Heart, Star, CheckCircle2 } from 'lucide-react';
import { MandalaOrnament } from '../MandalaArt';
import heroVisualImg from '../../assets/images/puliyogare_paste_1787377095868.jpg';
import sambarImg from '../../assets/images/sambar_powder_1787377123649.jpg';

export const V2Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#3D0C13] via-[#7B1E28] to-[#4A121A] text-[#FAF7F2] py-14 sm:py-20 lg:py-24 overflow-hidden shadow-2xl border-b-2 border-[#D4AF37]/40">
      
      {/* Decorative Gold Mandala Ornaments in Background */}
      <div className="absolute -top-20 -right-20 opacity-15 pointer-events-none text-[#D4AF37] animate-pulse">
        <MandalaOrnament className="w-96 h-96" />
      </div>
      <div className="absolute -bottom-28 -left-28 opacity-10 pointer-events-none text-[#FAF7F2]">
        <MandalaOrnament className="w-[450px] h-[450px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text & CTA Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/15 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-extrabold text-[#F4E1A4] tracking-wide shadow-lg">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin-slow" />
              <span>AUTHENTIC MYSURU BRAHMIN KITCHEN RECIPES</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF7F2] leading-[1.1] tracking-tight drop-shadow-md">
              Aromatic Mysuru Spices <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E1A4] via-[#D4AF37] to-[#F4E1A4] italic">
                Hand-Crafted in Small Batches
              </span>
            </h1>

            {/* Subtitle in English & Kannada */}
            <p className="text-sm sm:text-base md:text-lg text-[#F5EBE6] leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Slow-roasted on iron skillets with sun-dried Byadagi chillies and pure cold-pressed sesame oil. Made fresh on pre-order with zero preservatives.
            </p>

            <div className="inline-block text-xs sm:text-sm font-serif text-[#F4E1A4] font-semibold bg-[#FAF7F2]/10 px-3.5 py-1 rounded-full border border-[#FAF7F2]/20">
              ನಮ್ಮ ಮೈಸೂರು ಶೈಲಿಯ ಪಾರಂಪರಿಕ ರುಚಿ ಮತ್ತು ಪರಿಮಳ 🌾
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#products"
                className="py-3.5 px-6 rounded-2xl bg-[#D4AF37] hover:bg-[#C29B38] text-[#3D0C13] font-extrabold text-xs sm:text-sm shadow-xl shadow-[#D4AF37]/20 transition-all active:scale-98 cursor-pointer flex items-center gap-2 border border-[#F4E1A4]"
              >
                <ShoppingBag className="w-4 h-4 text-[#3D0C13]" />
                <span>Explore Products</span>
              </a>

              <a
                href="#combo-builder"
                className="py-3.5 px-6 rounded-2xl bg-[#234E35] hover:bg-[#1A3B28] text-[#FAF7F2] font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-98 cursor-pointer flex items-center gap-2 border border-[#B8D5C0]"
              >
                <Gift className="w-4 h-4 text-[#D4AF37]" />
                <span>Build Combo Box (10% Off)</span>
              </a>

              <a
                href="#usa-samples"
                className="py-3.5 px-4 rounded-2xl bg-[#FAF7F2]/15 hover:bg-[#FAF7F2]/25 text-[#FAF7F2] font-semibold text-xs sm:text-sm backdrop-blur-md border border-[#FAF7F2]/30 shadow-xs transition-all flex items-center gap-1.5"
              >
                <span>🇺🇸 USA Samples</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#E5D7CE] font-medium border-t border-[#FAF7F2]/15">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Traditional Recipe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#F4E1A4]" />
                <span>Iron Skillet Slow-Roasted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B8D5C0]" />
                <span>Zero Preservatives</span>
              </div>
            </div>

          </div>

          {/* Right Visual Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame Stack */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Golden Glow Aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4AF37] via-[#F4E1A4] to-[#D4AF37] opacity-40 blur-xl animate-pulse" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-[#FAF7F2] text-[#2C2420] p-4 sm:p-5 shadow-2xl border-2 border-[#D4AF37]">
                
                {/* Visual Image */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 bg-[#F5EFE6]">
                  <img
                    src={heroVisualImg}
                    alt="Authentic Mysuru Puliyogre Paste"
                    className="w-full h-full object-cover shadow-inner"
                  />
                  <div className="absolute top-3 left-3 bg-[#8B2635] text-[#FAF7F2] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Mysuru Temple Style
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#234E35] font-bold text-[10px] px-2.5 py-1 rounded-full border border-[#B8D5C0] flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>Cold-Pressed Sesame Oil</span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-title text-lg font-bold text-[#4A121A]">
                      Puliyogre Paste (Gojju)
                    </h3>
                    <span className="text-xs font-serif text-[#8C4320] font-bold">
                      ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು
                    </span>
                  </div>

                  <p className="text-xs text-[#6B5E55] line-clamp-2 font-light">
                    Slow-simmered tamarind extract, roasted peanuts, curry leaves, and secret temple-blend spices.
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-[#EAE2D8]">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                      <span className="text-[10px] font-bold text-[#6B5E55] ml-1">(5.0 Rating)</span>
                    </div>

                    <a
                      href="#products"
                      className="text-xs font-bold text-[#8B2635] hover:text-[#5C1A25] underline cursor-pointer"
                    >
                      Pre-Order Now →
                    </a>
                  </div>
                </div>

              </div>

              {/* Floating Mini Overlay Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#234E35] text-[#FAF7F2] p-3 rounded-2xl shadow-xl border border-[#B8D5C0] flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7F2]/10 flex items-center justify-center text-lg shrink-0">
                  🔥
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#F4E1A4]">Small-Batch Roasting</div>
                  <div className="text-[10px] text-[#E5D7CE]">Packed fresh on pre-order</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
