import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { V2DishFilter, DISH_FILTERS } from './V2DishFilter';
import { V2ProductCard } from './V2ProductCard';
import { Sparkles, ShieldCheck, Truck } from 'lucide-react';

interface V2ProductGridProps {
  onOpenDetailModal: (product: Product) => void;
}

export const V2ProductGrid: React.FC<V2ProductGridProps> = ({ onOpenDetailModal }) => {
  const [activeFilterId, setActiveFilterId] = useState<string>('all');

  const currentFilter = DISH_FILTERS.find((f) => f.id === activeFilterId) || DISH_FILTERS[0];

  const filteredProducts = INITIAL_PRODUCTS.filter((product) =>
    currentFilter.matchedProductIds.includes(product.id)
  );

  return (
    <section id="products" className="py-12 bg-[#FAF7F2] scroll-mt-20">
      {/* Interactive Dish Filter Bar */}
      <V2DishFilter
        activeFilterId={activeFilterId}
        onSelectFilter={(id) => setActiveFilterId(id)}
      />

      {/* Main Grid Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b border-[#E8DFD5]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8B2635] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Small-Batch Heritage Recipes</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#4A121A]">
              Authentic Mysuru Spice Blends
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-[#6B5E55]">
            <div className="flex items-center gap-1.5 bg-[#F4EBE3] px-3 py-1.5 rounded-full border border-[#E2D8CC]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#234E35]" />
              <span>Zero Preservatives</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F4EBE3] px-3 py-1.5 rounded-full border border-[#E2D8CC]">
              <Truck className="w-3.5 h-3.5 text-[#8B2635]" />
              <span>Pre-Order Fresh Dispatch</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <V2ProductCard
              key={product.id}
              product={product}
              onOpenDetailModal={onOpenDetailModal}
              isHighlighted={activeFilterId !== 'all'}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-[#F5EFE6] rounded-2xl border border-[#E2D8CC]">
            <p className="text-sm text-[#6B5E55]">No products found for this meal filter.</p>
            <button
              onClick={() => setActiveFilterId('all')}
              className="mt-3 px-4 py-2 bg-[#8B2635] text-[#FAF7F2] rounded-xl text-xs font-bold"
            >
              Show All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
