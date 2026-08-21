import React from 'react';
import { ShoppingBag, MessageSquare, Flame, Truck, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { ToranaRibbon, MarigoldFlower } from './ToranaArt';
import { MandalaOrnament } from './MandalaArt';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: ShoppingBag,
      title: "Select Spice Powders",
      description: "Choose your favorite Mysuru mixes (Puliyogare, Vangi Bath, Bisi Bele Bath, Chitranna) and desired pack sizes (100g, 250g, 500g)."
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Review & Enter Details",
      description: "Add to your pre-order cart and enter your name, contact, and delivery or pickup preference in Mysuru."
    },
    {
      number: "03",
      icon: Flame,
      title: "Send via WhatsApp",
      description: `With 1-tap, your pre-filled order is sent directly to our kitchen (${BRAND_CONFIG.displayWhatsappNumber}). No login or account required.`
    },
    {
      number: "04",
      icon: Truck,
      title: "Freshly Roasted & Delivered",
      description: "We confirm your pre-order, hand-roast your fresh small batch, and deliver straight to your home."
    }
  ];

  return (
    <section id="how-it-works" className="py-10 md:py-16 bg-[#F6EFE9] border-y border-[#E8DFD5] relative overflow-hidden">
      {/* Light subtle rotating Rangoli in background */}
      <MandalaOrnament
        size={380}
        color="#8B2635"
        opacity={0.03}
        spin={true}
        className="absolute -top-16 -left-16 pointer-events-none select-none"
      />
      <MandalaOrnament
        size={400}
        color="#D4AF37"
        opacity={0.035}
        spin={true}
        className="absolute -bottom-20 -right-20 pointer-events-none select-none"
      />

      {/* Top Torana Garland Ribbon */}
      <div className="w-full relative z-10 -mt-2 mb-4 opacity-75">
        <ToranaRibbon className="h-6 sm:h-8" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#C29B38]/40 text-xs font-bold text-[#8C4320] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>Simple 4-Step Pre-Order Process</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C2420] tracking-tight">
            How Pre-Ordering Works
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E55] mt-2.5 leading-relaxed">
            We prepare every blend fresh on order so you get the genuine aroma of freshly roasted South Indian spices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E4D7CA] shadow-2xs hover:shadow-xs transition-all relative flex flex-col justify-between overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#8B2635] text-[#FAF7F2] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif-title text-2xl font-bold text-[#C29B38]/70">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-lg font-bold text-[#2C2420] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A4D46] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFE8DF] flex items-center justify-between text-[11px] font-semibold text-[#234E35] relative z-10">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-[#8C4320] font-medium">ಸಂತೃಪ್ತಿ ಖಾತರಿ</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

