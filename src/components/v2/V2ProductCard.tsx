import React, { useState } from 'react';
import { ShoppingBag, Eye, MessageCircle, Sparkles, Check, Flame, Utensils } from 'lucide-react';
import { Product, ProductVariant } from '../../types';
import { useCart } from '../../context/CartContext';
import { getWhatsAppInquiryUrl } from '../../services/whatsappService';

interface V2ProductCardProps {
  product: Product;
  onOpenDetailModal: (product: Product) => void;
  isHighlighted?: boolean;
}

export const V2ProductCard: React.FC<V2ProductCardProps> = ({
  product,
  onOpenDetailModal,
  isHighlighted = false,
}) => {
  const { addToCart } = useCart();

  const defaultVar = product.variants.find((v) => v.isDefault) || product.variants[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(defaultVar);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const getSavingsNote = (variant: ProductVariant) => {
    if (variant.weight === '1kg') return 'Best Value • Save Big!';
    if (variant.weight === '500g') return 'Popular Size';
    return null;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleWhatsAppInquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = getWhatsAppInquiryUrl(`${product.name} (${selectedVariant.weight})`);
    window.open(url, '_blank');
  };

  return (
    <div
      className={`group relative rounded-3xl bg-[#FAF7F2] border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl ${
        isHighlighted
          ? 'border-[#8B2635] ring-2 ring-[#8B2635]/40 scale-[1.02]'
          : 'border-[#EAE2D8] hover:border-[#D4AF37]'
      }`}
    >
      {/* Top Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F5EFE6]">
        
        {/* Product Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Dark subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-[#8B2635] text-[#FAF7F2] font-extrabold text-[10px] uppercase tracking-wider shadow-md border border-[#D4AF37]/50">
            {product.badge}
          </span>

          <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#234E35] font-bold text-[10px] border border-[#B8D5C0] shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Small Batch</span>
          </span>
        </div>

        {/* Recipe Pairing Hint Banner overlay over image */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <div className="bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#D4AF37]/50 shadow-lg text-[11px] font-semibold text-[#4A121A] flex items-center justify-between gap-1 group-hover:bg-[#8B2635] group-hover:text-[#FAF7F2] transition-colors duration-300">
            <div className="flex items-center gap-1.5 truncate">
              <Utensils className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="truncate">{product.servingSuggestion || 'Best with hot steamed rice & ghee'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Kannada Name & English Title */}
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="font-serif-title text-xl font-bold text-[#4A121A] group-hover:text-[#8B2635] transition-colors">
              {product.name}
            </h3>
            <span className="text-xs font-serif text-[#8C4320] font-bold shrink-0">
              {product.kannadaName}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-xs text-[#6B5E55] line-clamp-2 leading-relaxed font-light mb-3">
            {product.shortDescription}
          </p>

          {/* Key Ingredients Mini Pills */}
          {product.ingredientsPlaceholder && (
            <div className="flex flex-wrap gap-1 mb-3">
              {product.ingredientsPlaceholder.slice(0, 3).map((ing, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-[#F4EBE3] text-[#7B5B49] text-[10px] font-medium border border-[#E8DFD5]"
                >
                  {ing}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Weight Selector */}
        <div className="space-y-2 pt-2 border-t border-[#EAE2D8]">
          <div className="flex items-center justify-between text-[11px] font-medium text-[#6B5E55]">
            <span>Select Pack Size:</span>
            {getSavingsNote(selectedVariant) && (
              <span className="text-[#8B2635] font-extrabold text-[10px] animate-pulse">
                ✨ {getSavingsNote(selectedVariant)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {product.variants.map((v) => {
              const isSelected = selectedVariant.id === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`py-1.5 px-1 rounded-xl text-center text-xs font-extrabold transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#8B2635] text-[#FAF7F2] border-[#8B2635] shadow-md ring-1 ring-[#D4AF37]'
                      : 'bg-[#F7F2EB] text-[#4A3B32] border-[#E5DCD0] hover:bg-[#EFE8DF] hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div>{v.weight}</div>
                  <div className={`text-[10px] font-normal ${isSelected ? 'text-[#F4E1A4]' : 'text-[#8C7A70]'}`}>
                    {v.pricePlaceholder}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          
          {/* Add to Cart Primary Button */}
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer border ${
              addedAnimation
                ? 'bg-[#234E35] text-[#FAF7F2] border-[#234E35] scale-98'
                : 'bg-[#8B2635] hover:bg-[#7B1E28] text-[#FAF7F2] border-[#7B1E28] active:scale-98'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>Add ({selectedVariant.pricePlaceholder})</span>
              </>
            )}
          </button>

          {/* Quick View Button */}
          <button
            onClick={() => onOpenDetailModal(product)}
            title="View full recipe and ingredients"
            className="p-3 rounded-xl bg-[#F4EBE3] hover:bg-[#EAE1D7] text-[#4A121A] border border-[#D4AF37]/40 transition-colors cursor-pointer shrink-0"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Quick WhatsApp Button */}
          <button
            onClick={handleWhatsAppInquire}
            title="Inquire via WhatsApp"
            className="p-3 rounded-xl bg-[#EBF2EC] hover:bg-[#D8E6DB] text-[#234E35] border border-[#B8D5C0] transition-colors cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
