import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles } from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { useCart } from '../context/CartContext';
import { ProductVisual } from './ProductVisual';
import { CornerMandala } from './MandalaArt';

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
      className="group bg-[#FAF7F2] rounded-2xl border border-[#E8DFD5] hover:border-[#C29B38]/60 p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md cursor-pointer relative overflow-hidden"
    >
      {/* Decorative Corner Mandala Rosette */}
      <CornerMandala position="top-right" size={100} color="#D4AF37" opacity={0.12} className="group-hover:opacity-25 transition-opacity" />

      {/* Top badges */}
      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">

        {product.badge ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#8B2635] text-[#FAF7F2] shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            {product.badge}
          </span>
        ) : <span />}

        <span className="text-[11px] font-semibold text-[#234E35] bg-[#EBF2EC] border border-[#B8D5C0] px-2 py-0.5 rounded-full">
          Pre-Order Fresh
        </span>
      </div>

      {/* Visual Image / spice bowl */}
      <div className="mb-4">
        <ProductVisual productId={product.id} imageUrl={product.imageUrl} alt={product.name} />
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-2 mb-1">
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
        <div className="mt-auto pt-3 border-t border-[#EFE8DF]">
          <div className="flex items-center justify-between text-xs text-[#5A4D46] mb-2">
            <span className="font-semibold">Select Size:</span>
            {selectedVariant.pricePlaceholder && (
              <span className="text-[11px] font-medium text-[#8C4320]">
                {selectedVariant.pricePlaceholder}{' '}
                <span className="text-[9px] text-[#8C7A70]">(Est. placeholder)</span>
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
                      : 'bg-[#F2ECE4] text-[#4A3E39] hover:bg-[#E8DFC] border border-[#E0D5C7]'
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
                  <span>Added to Cart</span>
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
              className="col-span-1 flex items-center justify-center p-2.5 rounded-xl bg-[#F2ECE4] hover:bg-[#E8DFD5] text-[#4A3E39] border border-[#DDD3C7] transition-colors cursor-pointer"
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
