import React from 'react';
import { ShoppingBag, MessageSquare, Flame, Truck, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: ShoppingBag,
      title: "Select Products",
      description: "Choose your favorite Mysuru specialties (Puliyogre Paste, Bisi Bele Bath, Vangi Bath, ChatniPudi, Sambar Powder, Rasam Powder) and desired pack sizes."
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
      description: `With 1-tap, your pre-filled order is sent directly to our kitchen (${BRAND_CONFIG.displayWhatsappNumber}). No login required.`
    },
    {
      number: "04",
      icon: Truck,
      title: "Freshly Roasted & Delivered",
      description: "We confirm your pre-order, hand-roast your fresh small batch, and deliver straight to your home."
    }
  ];

  return (
    <section id="how-it-works" className="py-14 md:py-20 bg-[#FAF8F5] border-y border-[#EAE2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EDE4] border border-[#D9CBBF] text-xs font-semibold text-[#8C4320] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C2420] tracking-tight">
            How Pre-Ordering Works
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E55] mt-2 leading-relaxed">
            We prepare every blend fresh on order so you get the genuine aroma of freshly roasted South Indian spices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#EAE2D8] shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#8B2635] text-[#FAF7F2] flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif-title text-2xl font-bold text-[#C29B38]">
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

                <div className="mt-5 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#234E35]">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-[#8C4320] font-medium font-serif-title">ಸಂತೃಪ್ತಿ ಖಾತರಿ</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


