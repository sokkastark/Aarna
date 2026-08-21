import React, { useState } from 'react';
import { X, MessageCircle, Copy, Check, MapPin, Phone, User, FileText, ArrowLeft, Send, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CustomerOrderDetails } from '../types';
import { BRAND_CONFIG } from '../config/brand';
import { generateWhatsAppOrderMessage, getWhatsAppOrderUrl } from '../services/whatsappService';

export const OrderFormModal: React.FC = () => {
  const { items, isOrderFormOpen, closeOrderForm, openCart, totalItemsCount } = useCart();

  const [customer, setCustomer] = useState<CustomerOrderDetails>({
    customerName: '',
    phone: '',
    orderType: 'delivery',
    address: '',
    note: ''
  });

  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isOrderFormOpen) return null;

  const generatedMessage = generateWhatsAppOrderMessage(items, customer);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customer.customerName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!customer.phone.trim() || customer.phone.trim().length < 8) {
      setValidationError('Please enter a valid WhatsApp contact number.');
      return;
    }

    if (customer.orderType === 'delivery' && !customer.address.trim()) {
      setValidationError('Please enter your delivery address in Mysuru / Karnataka.');
      return;
    }

    setValidationError(null);

    // Generate WhatsApp URL and redirect
    const url = getWhatsAppOrderUrl(items, customer);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="order-form-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={closeOrderForm}
    >
      <div
        className="bg-[#FAF7F2] w-full max-w-2xl max-h-[92vh] rounded-2xl shadow-2xl border border-[#E8DFD5] overflow-y-auto flex flex-col relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#E8DFD5] bg-[#F7EFE8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                closeOrderForm();
                openCart();
              }}
              className="p-1.5 rounded-lg hover:bg-[#EAE1D7] text-[#4A3E39] transition-colors cursor-pointer"
              title="Back to cart"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2C2420]">
                Pre-Order Details
              </h3>
              <p className="text-xs text-[#6B5E55]">
                {totalItemsCount} items ready for WhatsApp order generation
              </p>
            </div>
          </div>

          <button
            onClick={closeOrderForm}
            className="p-2 rounded-full hover:bg-[#EAE1D7] text-[#4A3E39] transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSendWhatsApp} className="p-4 sm:p-6 space-y-5">
          {/* Validation Warning Alert */}
          {validationError && (
            <div className="p-3 rounded-xl bg-[#FDE8E8] border border-[#F8B4B4] text-[#9B1C1C] text-xs font-semibold">
              {validationError}
            </div>
          )}

          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-1.5">
                Your Full Name <span className="text-[#8B2635]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={customer.customerName}
                  onChange={(e) => {
                    setCustomer({ ...customer, customerName: e.target.value });
                    if (validationError) setValidationError(null);
                  }}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C7] focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] outline-none text-xs sm:text-sm text-[#2C2420] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-1.5">
                WhatsApp Phone Number <span className="text-[#8B2635]">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={customer.phone}
                  onChange={(e) => {
                    setCustomer({ ...customer, phone: e.target.value });
                    if (validationError) setValidationError(null);
                  }}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C7] focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] outline-none text-xs sm:text-sm text-[#2C2420] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Order Type Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-2">
              Order Type:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  customer.orderType === 'delivery'
                    ? 'bg-[#F6EFE9] border-[#8B2635] text-[#2C2420]'
                    : 'bg-[#FAF7F2] border-[#DDD3C7] text-[#5A4D46] hover:bg-[#F2ECE4]'
                }`}
              >
                <input
                  type="radio"
                  name="orderType"
                  value="delivery"
                  checked={customer.orderType === 'delivery'}
                  onChange={() => setCustomer({ ...customer, orderType: 'delivery' })}
                  className="mt-0.5 text-[#8B2635] focus:ring-[#8B2635]"
                />
                <div>
                  <div className="text-xs font-bold text-[#2C2420]">
                    {BRAND_CONFIG.orderTypes.delivery.label}
                  </div>
                  <div className="text-[11px] text-[#6B5E55] mt-0.5 leading-snug">
                    {BRAND_CONFIG.orderTypes.delivery.description}
                  </div>
                </div>
              </label>

              <label
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  customer.orderType === 'pickup'
                    ? 'bg-[#F6EFE9] border-[#8B2635] text-[#2C2420]'
                    : 'bg-[#FAF7F2] border-[#DDD3C7] text-[#5A4D46] hover:bg-[#F2ECE4]'
                }`}
              >
                <input
                  type="radio"
                  name="orderType"
                  value="pickup"
                  checked={customer.orderType === 'pickup'}
                  onChange={() => setCustomer({ ...customer, orderType: 'pickup' })}
                  className="mt-0.5 text-[#8B2635] focus:ring-[#8B2635]"
                />
                <div>
                  <div className="text-xs font-bold text-[#2C2420]">
                    {BRAND_CONFIG.orderTypes.pickup.label}
                  </div>
                  <div className="text-[11px] text-[#6B5E55] mt-0.5 leading-snug">
                    {BRAND_CONFIG.orderTypes.pickup.description}
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Delivery Address (if Delivery is selected) */}
          {customer.orderType === 'delivery' && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-1.5">
                Delivery Address <span className="text-[#8B2635]">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#8C7A70] absolute left-3 top-3 pointer-events-none" />
                <textarea
                  rows={2}
                  required
                  placeholder="House/Flat No, Street, Area, Mysuru, Pincode"
                  value={customer.address}
                  onChange={(e) => {
                    setCustomer({ ...customer, address: e.target.value });
                    if (validationError) setValidationError(null);
                  }}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C7] focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] outline-none text-xs sm:text-sm text-[#2C2420] transition-colors resize-none"
                />
              </div>
            </div>
          )}

          {/* Optional Note */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-1.5">
              Special Note / Custom Request (Optional)
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-[#8C7A70] absolute left-3 top-3 pointer-events-none" />
              <textarea
                rows={2}
                placeholder="e.g. Mild spice preference, expected date, gift packing..."
                value={customer.note}
                onChange={(e) => setCustomer({ ...customer, note: e.target.value })}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#DDD3C7] focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] outline-none text-xs sm:text-sm text-[#2C2420] transition-colors resize-none"
              />
            </div>
          </div>

          {/* Live Formatted WhatsApp Message Preview */}
          <div className="rounded-xl border border-[#D5E5D8] bg-[#F1F8F3] p-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#234E35]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generated WhatsApp Message Preview:</span>
              </div>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#234E35] hover:text-[#183925] bg-[#E1EFE4] hover:bg-[#D4E8D8] px-2 py-1 rounded-md transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-[#234E35]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>

            <pre className="text-[11px] text-[#2C3B30] font-mono whitespace-pre-wrap bg-[#FAF7F2] p-3 rounded-lg border border-[#D3E3D6] max-h-36 overflow-y-auto leading-relaxed">
              {generatedMessage}
            </pre>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              id="send-whatsapp-order-btn"
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#234E35] hover:bg-[#1A3D29] text-[#FAF7F2] text-sm font-bold shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Order on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#F2ECE4] hover:bg-[#E8DFD5] text-[#4A3E39] text-xs font-bold border border-[#DDD3C7] transition-colors cursor-pointer shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#234E35]" />
              <span>{copied ? 'Copied to Clipboard!' : 'Copy for WhatsApp'}</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-[#6B5E55]">
            No account required. Clicking "Send Order on WhatsApp" opens WhatsApp with your pre-filled order directly to {BRAND_CONFIG.displayWhatsappNumber}.
          </p>
        </form>
      </div>
    </div>
  );
};
