import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, MessageCircle, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../config/brand';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItemsCount,
    openOrderForm
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-2xs animate-fadeIn"
      onClick={closeCart}
    >
      <div
        id="cart-drawer-panel"
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8DFD5] animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8DFD5] flex items-center justify-between bg-[#F7EFE8]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#8B2635] text-[#FAF7F2] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-title text-xl font-bold text-[#2C2420]">
                Pre-Order Cart
              </h3>
              <span className="text-xs text-[#6B5E55]">
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
              </span>
            </div>
          </div>

          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-[#EAE1D7] text-[#4A3E39] transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F2ECE4] border border-[#DDD3C7] flex items-center justify-center text-[#8C7A70]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <div>
                <h4 className="font-serif-title text-lg font-bold text-[#2C2420]">
                  Your Pre-Order Cart is Empty
                </h4>
                <p className="text-xs text-[#6B5E55] mt-1 max-w-xs leading-relaxed">
                  Browse our authentic Mysuru spice powders and add fresh batches to your pre-order list.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="px-5 py-2.5 rounded-full bg-[#8B2635] text-[#FAF7F2] text-xs font-bold hover:bg-[#721F2B] transition-colors shadow-xs cursor-pointer"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              {/* Batch reminder */}
              <div className="p-2.5 rounded-lg bg-[#EBF2EC] border border-[#B8D5C0] text-[11px] text-[#234E35] flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Prepared in small batches upon receiving your order on WhatsApp.</span>
              </div>

              {/* Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFD5] shadow-2xs flex flex-col justify-between space-y-2.5"
                >
                  <div className="flex items-start gap-3">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.productName}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-lg object-cover border border-[#E0D5C7] shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-lg bg-[#F2ECE4] flex items-center justify-center text-xs font-bold text-[#8B2635] shrink-0 border border-[#E0D5C7]">
                        Aarna
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-bold text-[#2C2420] font-serif-title truncate">
                          {item.productName}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-[#A0522D] hover:text-[#8B2635] hover:bg-[#F2ECE4] rounded-lg transition-colors cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-xs font-semibold text-[#8C4320] flex items-center gap-1.5 mt-0.5">
                        <span className="bg-[#F2ECE4] px-1.5 py-0.5 rounded text-[11px] border border-[#E0D5C7]">
                          {item.variantWeight}
                        </span>
                        {item.pricePlaceholder && (
                          <span className="text-[11px] text-[#6B5E55]">
                            {item.pricePlaceholder} (est.)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between pt-1 border-t border-[#F2ECE4]">
                    <span className="text-[11px] font-medium text-[#6B5E55]">
                      Quantity:
                    </span>
                    <div className="flex items-center gap-2 border border-[#DDD3C7] rounded-lg bg-[#F2ECE4] p-0.5">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE1D7] flex items-center justify-center font-bold text-xs cursor-pointer shadow-2xs"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-bold text-xs text-[#2C2420]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE1D7] flex items-center justify-center font-bold text-xs cursor-pointer shadow-2xs"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart Button */}
              <div className="text-right pt-1">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] font-semibold text-[#8C4320] hover:text-[#8B2635] hover:underline cursor-pointer"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>

        {/* Cart Footer */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#E8DFD5] bg-[#F7EFE8] space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#5A4D46]">Total Items:</span>
              <span className="font-bold text-[#2C2420]">
                {totalItemsCount} {totalItemsCount === 1 ? 'pack' : 'packs'}
              </span>
            </div>

            <div className="text-[11px] text-[#6B5E55] leading-normal">
              Final total amount and dispatch timeline will be confirmed by {BRAND_CONFIG.name} directly on WhatsApp.
            </div>

            <button
              id="cart-proceed-checkout-btn"
              type="button"
              onClick={openOrderForm}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#8B2635] hover:bg-[#721F2B] text-[#FAF7F2] text-sm font-bold shadow-md active:scale-98 transition-all cursor-pointer"
            >
              <span>Proceed to Customer Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
