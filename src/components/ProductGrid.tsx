import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { BRAND_CONFIG } from '../config/brand';
import { Sparkles, Clock } from 'lucide-react';
import { MandalaSectionDivider, MandalaOrnament } from './MandalaArt';

export const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'Traditional Powders', label: 'Traditional Powders' },
    { id: 'Bath Powders', label: 'Bath Powders' },
    { id: 'Quick Mixes', label: 'Quick Mixes' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? INITIAL_PRODUCTS
    : INITIAL_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-12 md:py-18 max-w-6xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative background mandala accent */}
      <MandalaOrnament
        size={340}
        color="#D4AF37"
        opacity={0.08}
        className="absolute top-10 right-4 pointer-events-none hidden lg:block"
      />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2EC] border border-[#B8D5C0] text-xs font-bold text-[#234E35] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Small-Batch Catalog</span>
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C2420] tracking-tight">
          Our Traditional Product Range
        </h2>
        <p className="text-sm sm:text-base text-[#6B5E55] mt-2.5 leading-relaxed">
          Pure South Indian spice blends, hand-roasted and freshly ground in Mysuru. Handcrafted in limited quantities on pre-order.
        </p>
      </div>

      {/* Traditional Mandala Divider */}
      <MandalaSectionDivider kannada="ಸಾಂಪ್ರದಾಯಿಕ ಮಸಾಲೆ ಪುಡಿಗಳು" className="mb-8" />

      {/* Small Batch Pre-Order Banner */}
      <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-[#F6EFE9] border border-[#DFCFC2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#5C4A40] shadow-2xs">
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-[#8C4320] shrink-0" />
          <span>
            <strong>Pre-Order Model:</strong> {BRAND_CONFIG.preOrderNotice}
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[#8B2635] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#DDB6AD] shrink-0">
          WhatsApp Confirmation
        </span>
      </div>


      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#8B2635] text-[#FAF7F2] shadow-xs'
                : 'bg-[#F2ECE4] text-[#5A4D46] hover:bg-[#EAE1D7] border border-[#DDD3C7]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
