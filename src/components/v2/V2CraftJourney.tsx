import React from 'react';
import { Sparkles, Flame, ShieldCheck, HeartHandshake } from 'lucide-react';

export const V2CraftJourney: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Hand-Selected Heritage Spices',
      kannada: 'ಆಯ್ದ ಸಾಂಬಾರು ಪದಾರ್ಥಗಳು',
      description: 'We source sun-dried Byadagi red chillies, fragrant coriander seeds, and pure cold-pressed sesame oil straight from traditional growers.',
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      step: '02',
      title: 'Iron Skillet Slow-Roasting',
      kannada: 'ಕಬ್ಬಿಣದ ಹೆಂಚಿನಲ್ಲಿ ಹದವಾದ ಹುರಿ',
      description: 'Spices are slow-roasted in small batches on heavy iron skillets at controlled temperatures to lock in natural essential oils and deep aromas.',
      icon: <Flame className="w-5 h-5 text-[#8B2635]" />,
    },
    {
      step: '03',
      title: 'Made Fresh on Pre-Order',
      kannada: 'ತಾಜಾ ತಯಾರಿಕೆ',
      description: 'No commercial warehouse storage or mass production. Every batch is ground and sealed fresh upon your order with zero artificial additives.',
      icon: <ShieldCheck className="w-5 h-5 text-[#234E35]" />,
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-[#FAF7F2] via-[#F4EBE3] to-[#FAF7F2] border-t border-[#E8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8B2635]/10 text-[#8B2635] text-xs font-bold uppercase tracking-wider mb-2">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Our Small-Batch Philosophy</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#4A121A]">
            The Secret Behind Authentic Mysuru Taste
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5E55] mt-2 font-light">
            Crafted with traditional care, patience, and 100% homestyle purity
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#EAE2D8] shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F4EBE3] border border-[#E2D8CC] flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="font-serif-title font-bold text-2xl text-[#8B2635]/30">
                  {s.step}
                </span>
              </div>

              <h3 className="font-serif-title text-lg font-bold text-[#4A121A] mb-0.5">
                {s.title}
              </h3>
              <div className="text-xs text-[#8C4320] font-semibold mb-3">
                {s.kannada}
              </div>

              <p className="text-xs text-[#6B5E55] leading-relaxed font-light">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
