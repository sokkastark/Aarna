import { CartItem, CustomerOrderDetails } from '../types';
import { BRAND_CONFIG } from '../config/brand';

/**
 * Builds a clean, courteous WhatsApp message for Aarna Food Products order
 */
export function generateWhatsAppOrderMessage(
  items: CartItem[],
  customer: CustomerOrderDetails
): string {
  const itemsList = items
    .map((item, index) => {
      const priceText = item.pricePlaceholder ? ` [${item.pricePlaceholder}]` : '';
      return `${index + 1}. ${item.productName} (${item.variantWeight}${priceText}) × ${item.quantity}`;
    })
    .join('\n');

  const estimatedTotal = items.reduce((sum, item) => {
    if (!item.pricePlaceholder) return sum;
    const num = parseInt(item.pricePlaceholder.replace(/[^0-9]/g, ''), 10);
    return sum + (isNaN(num) ? 0 : num * item.quantity);
  }, 0);

  const orderTypeLabel = customer.orderType === 'pickup' 
    ? 'Self Pickup (Mysuru)' 
    : 'Home Delivery';

  let message = `Hello Aarna Food Products,\n\nI would like to place a pre-order:\n\n${itemsList}\n\n`;
  if (estimatedTotal > 0) {
    message += `💰 Total Amount: ₹${estimatedTotal.toLocaleString('en-IN')}\n\n`;
  }
  message += `👤 Customer Name: ${customer.customerName.trim()}\n`;
  message += `📞 Phone: ${customer.phone.trim()}\n`;
  message += `📦 Order Type: ${orderTypeLabel}\n`;

  if (customer.orderType === 'delivery' && customer.address.trim()) {
    message += `📍 Delivery Address:\n${customer.address.trim()}\n`;
  }

  if (customer.note.trim()) {
    message += `📝 Note: ${customer.note.trim()}\n`;
  }

  message += `\nPlease confirm availability and share the order confirmation. Thank you!`;

  return message;
}

/**
 * Generates the full WhatsApp link for direct redirection
 */
export function getWhatsAppOrderUrl(
  items: CartItem[],
  customer: CustomerOrderDetails,
  customNumber?: string
): string {
  const phone = customNumber || BRAND_CONFIG.whatsappNumber;
  const cleanNumber = phone.replace(/[^0-9]/g, '');
  const message = generateWhatsAppOrderMessage(items, customer);
  
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a quick inquiry WhatsApp link for general questions
 */
export function getWhatsAppInquiryUrl(productName?: string): string {
  const cleanNumber = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  let message = `Hello Aarna Food Products, I would like to inquire about your authentic Mysuru food products.`;
  if (productName) {
    message = `Hello Aarna Food Products, I would like to inquire about your "${productName}". Could you please share more details?`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates USA sample order link
 */
export function getWhatsAppUSASampleUrl(): string {
  const cleanNumber = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const message = `Hello Aarna Food Products! I am located in the USA 🇺🇸 and would like to order an authentic Mysuru spice sample pack. Please share order details!`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
