import React from 'react';
import { Check, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductVisual } from './ProductVisual';

export const ToastNotification: React.FC = () => {
  const { activeToast, dismissToast, openCart } = useCart();

  if (!activeToast) return null;

  return (
    <div
      id="cart-toast-notification"
      className="fixed top-4 left-4 right-4 sm:left-auto sm:right-6 z-50 max-w-md animate-toast-slide-down"
    >
      <div className="bg-[#2C2420] text-[#FAF7F2] p-3.5 rounded-2xl shadow-2xl border border-[#D4AF37]/50 flex items-center justify-between gap-3 backdrop-blur-md">
        <div className="flex items-center gap-3 min-w-0">
          {/* Thumbnail / Visual */}
          <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#E8DFD5]/20 bg-[#FAF7F2]/10 flex items-center justify-center">
            {activeToast.imageUrl ? (
              <ProductVisual
                productId="toast"
                imageUrl={activeToast.imageUrl}
                alt={activeToast.productName}
                className="w-full h-full object-cover"
              />
            ) : (
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            )}
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-xs text-[#EBF2EC] font-semibold">
              <span className="w-4 h-4 rounded-full bg-[#234E35] text-white flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5" />
              </span>
              <span>Added to Pre-Order Cart!</span>
            </div>
            <p className="text-xs text-[#FAF7F2] font-bold truncate mt-0.5">
              {activeToast.quantity > 1 ? `${activeToast.quantity} × ` : ''}
              {activeToast.productName} ({activeToast.variantWeight})
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => {
              dismissToast();
              openCart();
            }}
            className="px-3 py-1.5 rounded-xl bg-[#8B2635] hover:bg-[#721F2B] text-[#FAF7F2] text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1"
          >
            <span>View Cart</span>
          </button>

          <button
            type="button"
            onClick={dismissToast}
            className="p-1 rounded-lg text-[#FAF7F2]/60 hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
