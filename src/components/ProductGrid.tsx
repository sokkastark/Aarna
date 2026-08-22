import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { BRAND_CONFIG } from '../config/brand';
import { Sparkles, Clock } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products (6)' },
    { id: 'Rice Masala Powders', label: 'Rice Masala Powders' },
    { id: 'Curry & Rasam Powders', label: 'Sambar & Rasam' },
    { id: 'Pastes & Chutney Podis', label: 'Pastes & Chutney Podis' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? INITIAL_PRODUCTS
    : INITIAL_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-14 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EDE4] border border-[#D9CBBF] text-xs font-semibold text-[#8C4320] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
          <span>Small-Batch Heritage Catalog</span>
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C2420] tracking-tight">
          Traditional Product Range
        </h2>
        <p className="text-sm sm:text-base text-[#6B5E55] mt-2 leading-relaxed">
          Pure South Indian spice blends, hand-roasted and freshly ground in Mysuru. Handcrafted in limited quantities on pre-order.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-2 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#8B2635] text-[#FAF7F2] shadow-xs'
                : 'bg-[#FFFFFF] text-[#5A4D46] hover:bg-[#F6EFE9] border border-[#E5DACE]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Clean, Subtle Pre-Order Notice footer note */}
      <div className="p-3.5 rounded-xl bg-[#F6EFE9] border border-[#E5DACE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#5C4A40]">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#8C4320] shrink-0" />
          <span>
            <strong>Pre-Order Kitchen:</strong> {BRAND_CONFIG.preOrderNotice}
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[#8B2635] bg-[#FFFFFF] px-3 py-0.5 rounded-full border border-[#DDB6AD] shrink-0">
          WhatsApp Direct Order
        </span>
      </div>
    </section>
  );
};

