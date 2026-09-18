import React, { useState } from 'react';
import { Package, Plus, Check, Trash2, MessageCircle, Sparkles, Gift, Flame } from 'lucide-react';
import { INITIAL_PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { BRAND_CONFIG } from '../../config/brand';
import { MandalaOrnament } from '../MandalaArt';

export const V2ComboBuilder: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([
    INITIAL_PRODUCTS[0], // Puliyogre Paste (default 250g)
    INITIAL_PRODUCTS[1], // Bisibelebath
    INITIAL_PRODUCTS[3], // Chatni Pudi
  ]);

  const maxSlots = 4;

  const toggleSelectProduct = (product: Product) => {
    const isAlreadySelected = selectedProducts.some((p) => p.id === product.id);
    if (isAlreadySelected) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      if (selectedProducts.length >= maxSlots) return;
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const getItemPrice = (p: Product) => {
    const def = p.variants.find((v) => v.isDefault) || p.variants[0];
    const num = parseInt(def.pricePlaceholder.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? 200 : num;
  };

  const totalPrice = selectedProducts.reduce((sum, p) => sum + getItemPrice(p), 0);
  const discountAmount = Math.round(totalPrice * 0.1); // 10% discount
  const finalComboPrice = totalPrice - discountAmount;

  const handleOrderComboWhatsApp = () => {
    const itemsList = selectedProducts
      .map((p, i) => `${i + 1}. ${p.name} (250g)`)
      .join('\n');

    const cleanNumber = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const message = `Hello Aarna Food Products! 🎁 I would like to order a Custom Mysuru Spice Combo Box (${selectedProducts.length} items):\n\n${itemsList}\n\n💰 Total Price: ₹${finalComboPrice} (10% Combo Discount applied)\n\nPlease share order and payment details!`;

    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="combo-builder" className="py-14 md:py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Box Wrapper */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#3D0C13] via-[#7B1E28] to-[#4A121A] text-[#FAF7F2] p-6 sm:p-10 md:p-12 shadow-2xl border-2 border-[#D4AF37] overflow-hidden">
          
          {/* Subtle Mandala Art in Corner */}
          <div className="absolute -top-16 -right-16 opacity-15 pointer-events-none text-[#D4AF37]">
            <MandalaOrnament className="w-80 h-80" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Product Selection Grid */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/15 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-extrabold text-[#F4E1A4] tracking-wide mb-3 shadow-md">
                  <Gift className="w-4 h-4 text-[#D4AF37]" />
                  <span>CUSTOM SPICE BOX BUILDER</span>
                </div>
                <h2 className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#FAF7F2] leading-tight">
                  Build Your Mysuru Combo Box <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E1A4] via-[#D4AF37] to-[#F4E1A4] italic">
                    & Get 10% Discount Instant!
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#F5EBE6] mt-2 font-light">
                  Select 3 or 4 of your favorite 250g authentic spice packs to create your personalized Mysuru tasting gift box.
                </p>
              </div>

              {/* Product Pick Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {INITIAL_PRODUCTS.map((product) => {
                  const isSelected = selectedProducts.some((p) => p.id === product.id);
                  const defVar = product.variants.find((v) => v.isDefault) || product.variants[0];

                  return (
                    <button
                      key={product.id}
                      onClick={() => toggleSelectProduct(product)}
                      className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border-2 flex flex-col justify-between relative ${
                        isSelected
                          ? 'bg-[#FAF7F2] text-[#4A121A] border-[#D4AF37] ring-2 ring-[#D4AF37]/80 shadow-xl scale-102'
                          : 'bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border-[#FAF7F2]/20 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1 mb-2">
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          isSelected ? 'bg-[#8B2635] text-[#FAF7F2]' : 'bg-[#FAF7F2]/20 text-[#F4E1A4]'
                        }`}>
                          {defVar.weight} • {defVar.pricePlaceholder}
                        </span>

                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                          isSelected ? 'bg-[#234E35] text-[#FAF7F2]' : 'bg-[#FAF7F2]/20 text-[#FAF7F2]'
                        }`}>
                          {isSelected ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Plus className="w-3 h-3" />}
                        </div>
                      </div>

                      <div className="font-serif-title font-bold text-xs line-clamp-1">
                        {product.name}
                      </div>
                      <div className={`text-[10px] font-light ${isSelected ? 'text-[#6B5E55]' : 'text-[#E5D7CE]'}`}>
                        {product.kannadaName}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Visual Box Summary Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="bg-[#FAF7F2] text-[#2C2420] p-6 rounded-3xl shadow-2xl border-2 border-[#D4AF37] w-full max-w-sm">
                
                <div className="flex items-center justify-between border-b border-[#EAE2D8] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-[#8B2635]" />
                    <h3 className="font-serif-title text-base font-bold text-[#4A121A]">
                      Your Custom Box ({selectedProducts.length}/{maxSlots})
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#EBF2EC] text-[#234E35] border border-[#B8D5C0]">
                    10% Off Applied
                  </span>
                </div>

                {/* Box Slot List */}
                <div className="space-y-2 mb-5 min-h-[150px]">
                  {Array.from({ length: maxSlots }).map((_, index) => {
                    const item = selectedProducts[index];
                    return (
                      <div
                        key={index}
                        className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
                          item
                            ? 'bg-[#F9F5EF] border-[#D4AF37] text-[#4A121A] font-semibold shadow-xs'
                            : 'border-dashed border-[#D1C5B6] text-[#A09386] bg-transparent'
                        }`}
                      >
                        {item ? (
                          <>
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#8B2635] text-[#FAF7F2] text-[10px] flex items-center justify-center font-bold">
                                {index + 1}
                              </span>
                              <span className="line-clamp-1">{item.name} (250g)</span>
                            </div>
                            <button
                              onClick={() => toggleSelectProduct(item)}
                              className="text-[#8B2635] hover:text-[#5C1A25] p-1 cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </>
                        ) : (
                          <div className="flex items-center gap-2 font-light italic text-[#A09386]">
                            <span className="w-5 h-5 rounded-full border border-dashed border-[#A09386] text-[10px] flex items-center justify-center">
                              {index + 1}
                            </span>
                            <span>Empty Slot — Select product on left</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Price Breakdown */}
                <div className="bg-[#F4EBE3] p-3.5 rounded-2xl border border-[#E8DFD5] mb-4 space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#6B5E55]">
                    <span>Original Price:</span>
                    <span className="line-through">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-[#234E35] font-bold">
                    <span>Combo Discount (10%):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-[#8B2635] pt-2 border-t border-[#E0D4C5]">
                    <span>Final Combo Total:</span>
                    <span className="text-[#8B2635]">₹{finalComboPrice}</span>
                  </div>
                </div>

                {/* WhatsApp Order Button */}
                <button
                  onClick={handleOrderComboWhatsApp}
                  disabled={selectedProducts.length === 0}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#234E35] hover:bg-[#1A3B28] text-[#FAF7F2] font-extrabold text-xs sm:text-sm shadow-lg transition-all active:scale-98 cursor-pointer border border-[#B8D5C0] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <MessageCircle className="w-4.5 h-4.5 text-[#D4AF37]" />
                  <span>Order Custom Combo Box on WhatsApp</span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
