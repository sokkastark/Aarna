import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const FloatingCartButton: React.FC = () => {
  const { totalItemsCount, openCart } = useCart();

  if (totalItemsCount === 0) return null;

  return (
    <div className="fixed bottom-5 right-4 left-4 sm:left-auto sm:right-6 z-30 animate-slideUp">
      <button
        id="floating-cart-btn"
        type="button"
        onClick={openCart}
        className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-5 py-3.5 rounded-full bg-[#8B2635] hover:bg-[#721F2B] text-[#FAF7F2] font-bold text-sm shadow-xl active:scale-98 transition-all cursor-pointer border border-[#D4AF37]/30"
      >
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1.5 min-w-4 h-4 px-1 rounded-full bg-[#C29B38] text-[#2C2420] text-[10px] font-extrabold flex items-center justify-center">
              {totalItemsCount}
            </span>
          </div>
          <span>Pre-Order Cart ({totalItemsCount} {totalItemsCount === 1 ? 'pack' : 'packs'})</span>
        </div>

        <div className="flex items-center gap-1 text-xs text-[#FAF7F2]/90 bg-white/15 px-2.5 py-1 rounded-full">
          <span>View</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  );
};
