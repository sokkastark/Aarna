import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles } from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { useCart } from '../context/CartContext';
import { ProductVisual } from './ProductVisual';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, openProductModal } = useCart();
  
  // Default to the designated default variant or first variant
  const defaultVar = product.variants.find(v => v.isDefault) || product.variants[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(defaultVar);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, selectedVariant, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => openProductModal(product)}
      className="group bg-[#FFFFFF] rounded-2xl border border-[#EAE2D8] hover:border-[#C29B38]/70 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md cursor-pointer relative overflow-hidden"
    >
      {/* Top badges */}
      <div className="flex items-center justify-between gap-1.5 mb-3.5 relative z-10">
        {product.badge ? (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#8B2635] text-[#FAF7F2] shadow-2xs whitespace-nowrap shrink-0">
            <Sparkles className="w-2.5 h-2.5 text-[#D4AF37] shrink-0" />
            <span className="whitespace-nowrap">{product.badge}</span>
          </span>
        ) : <span />}

        <span className="text-[10px] font-semibold text-[#234E35] bg-[#EBF2EC] border border-[#B8D5C0] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
          Pre-Order
        </span>
      </div>

      {/* Visual Image / spice bowl */}
      <div className="mb-4">
        <ProductVisual productId={product.id} imageUrl={product.imageUrl} alt={product.name} />
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-2 mb-0.5">
          <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2C2420] group-hover:text-[#8B2635] transition-colors">
            {product.name}
          </h3>
        </div>

        {product.kannadaName && (
          <div className="text-xs font-semibold text-[#8C4320] mb-2 font-serif-title">
            {product.kannadaName}
          </div>
        )}

        <p className="text-xs text-[#6B5E55] line-clamp-2 leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        {/* Variant / Size Selector */}
        <div className="mt-auto pt-3 border-t border-[#F0EAE1]">
          <div className="flex items-center justify-between text-xs text-[#5A4D46] mb-2">
            <span className="font-medium text-[#7A6D65]">Select Weight:</span>
            {selectedVariant.pricePlaceholder && (
              <span className="text-sm font-bold text-[#8B2635]">
                {selectedVariant.pricePlaceholder}
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-1.5 mb-4">
            {product.variants.map((variant) => {
              const isSelected = selectedVariant.id === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVariant(variant);
                  }}
                  className={`py-1.5 px-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
                    isSelected
                      ? 'bg-[#8B2635] text-[#FAF7F2] shadow-xs'
                      : 'bg-[#F6EFE9] text-[#4A3E39] hover:bg-[#EFE5DB] border border-[#E5DACE]'
                  }`}
                >
                  {variant.weight}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-5 gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`col-span-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
                addedAnimation
                  ? 'bg-[#234E35] text-[#FAF7F2]'
                  : 'bg-[#8B2635] hover:bg-[#721F2B] text-[#FAF7F2] active:scale-98'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {selectedVariant.weight}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openProductModal(product);
              }}
              title="View Ingredients & Details"
              className="col-span-1 flex items-center justify-center p-2.5 rounded-xl bg-[#F6EFE9] hover:bg-[#EFE5DB] text-[#4A3E39] border border-[#E5DACE] transition-colors cursor-pointer"
              aria-label={`View details for ${product.name}`}
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

