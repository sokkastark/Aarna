import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, Check, MessageCircle, Sparkles, ChefHat, Info } from 'lucide-react';
import { ProductVariant } from '../types';
import { useCart } from '../context/CartContext';
import { ProductVisual } from './ProductVisual';
import { getWhatsAppInquiryUrl } from '../services/whatsappService';

export const ProductDetailModal: React.FC = () => {
  const { selectedProduct, closeProductModal, addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Set default variant whenever a new product is selected
  useEffect(() => {
    if (selectedProduct) {
      const defaultVar = selectedProduct.variants.find(v => v.isDefault) || selectedProduct.variants[0];
      setSelectedVariant(defaultVar);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [selectedProduct]);

  if (!selectedProduct || !selectedVariant) return null;

  const handleAddToCart = () => {
    addItem(selectedProduct, selectedVariant, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      closeProductModal();
    }, 800);
  };

  return (
    <div
      id="product-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={closeProductModal}
    >
      <div
        className="bg-[#FAF7F2] w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl border border-[#E8DFD5] overflow-y-auto flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeProductModal}
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-[#FAF7F2]/90 hover:bg-[#EAE1D7] text-[#4A3E39] border border-[#DDD3C7] transition-colors cursor-pointer shadow-xs"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 relative z-10">

          {/* Header & Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            <div className="sm:col-span-5">
              <ProductVisual
                productId={selectedProduct.id}
                imageUrl={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="aspect-4/3 sm:aspect-square"
              />
            </div>

            <div className="sm:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#8B2635] text-[#FAF7F2] whitespace-nowrap">
                  {selectedProduct.badge || selectedProduct.category}
                </span>
                <span className="text-[11px] font-semibold text-[#234E35] bg-[#EBF2EC] px-2 py-0.5 rounded-full border border-[#B8D5C0] whitespace-nowrap">
                  Small-Batch
                </span>
              </div>

              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2C2420]">
                {selectedProduct.name}
              </h2>

              {selectedProduct.kannadaName && (
                <div className="text-sm font-semibold text-[#8C4320] mb-2 font-serif-title">
                  {selectedProduct.kannadaName}
                </div>
              )}

              <p className="text-xs font-semibold text-[#6B5E55] uppercase tracking-wider mb-2">
                {selectedProduct.tagline}
              </p>

              {/* Estimated Price Tag */}
              {selectedVariant.pricePlaceholder && (
                <div className="inline-flex items-baseline gap-1.5 text-[#8B2635] font-serif-title text-xl font-bold">
                  <span>{selectedVariant.pricePlaceholder}</span>
                  <span className="text-xs font-normal text-[#8C7A70]">({selectedVariant.weight} • estimated placeholder)</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#F6EFE9] p-4 rounded-xl border border-[#E4D7CA]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C4320] mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About this Blend</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
              {selectedProduct.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-2.5">
              Highlights:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedProduct.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#5A4D46] bg-[#FAF7F2] p-2 rounded-lg border border-[#EAE1D7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B2635] shrink-0"></span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients Note (Placeholder) */}
          <div className="border-t border-[#EFE8DF] pt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2420] flex items-center gap-1.5">
                <ChefHat className="w-4 h-4 text-[#8C4320]" />
                <span>Ingredients (Placeholder Structure):</span>
              </h4>
              <span className="text-[10px] text-[#8C7A70] flex items-center gap-1">
                <Info className="w-3 h-3" />
                <span>Client to finalize</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedProduct.ingredientsPlaceholder.map((ing, i) => (
                <span key={i} className="text-[11px] bg-[#F2ECE4] text-[#4A3E39] px-2.5 py-1 rounded-md border border-[#E0D5C7]">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Serving / Recipe Tip */}
          <div className="p-3.5 rounded-xl bg-[#EBF2EC] border border-[#B8D5C0] text-xs text-[#234E35]">
            <strong className="block font-bold mb-1">Traditional Serving Suggestion:</strong>
            <p className="leading-relaxed text-[#2C523A]">{selectedProduct.servingSuggestion}</p>
          </div>

          {/* Variant Selector & Quantity Stepper */}
          <div className="border-t border-[#E8DFD5] pt-4 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-2">
                Select Package Size:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {selectedProduct.variants.map((v) => {
                  const isCurrent = selectedVariant.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                        isCurrent
                          ? 'bg-[#8B2635] text-[#FAF7F2] shadow-sm'
                          : 'bg-[#F2ECE4] text-[#4A3E39] hover:bg-[#E8DFD5] border border-[#DDD3C7]'
                      }`}
                    >
                      <span>{v.weight}</span>
                      {v.pricePlaceholder && (
                        <span className={`text-[10px] ${isCurrent ? 'text-[#FAF7F2]/80' : 'text-[#8C4320]'}`}>
                          {v.pricePlaceholder}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <div className="flex items-center border border-[#DDD3C7] rounded-xl bg-[#F2ECE4] p-1 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-lg bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE1D7] flex items-center justify-center font-bold text-sm cursor-pointer shadow-2xs"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-sm text-[#2C2420]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-lg bg-[#FAF7F2] text-[#4A3E39] hover:bg-[#EAE1D7] flex items-center justify-center font-bold text-sm cursor-pointer shadow-2xs"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer ${
                  isAdded
                    ? 'bg-[#234E35] text-[#FAF7F2]'
                    : 'bg-[#8B2635] hover:bg-[#721F2B] text-[#FAF7F2] active:scale-98'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {quantity} × {selectedVariant.weight} to Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick direct inquiry */}
            <div className="text-center pt-1">
              <a
                href={getWhatsAppInquiryUrl(selectedProduct.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234E35] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask a question about this powder on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
