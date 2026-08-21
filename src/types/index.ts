export interface ProductVariant {
  id: string;
  weight: string;
  pricePlaceholder?: string;
  isDefault?: boolean;
}

export interface Product {
  id: string;
  name: string;
  kannadaName?: string;
  tagline: string;
  shortDescription: string;
  description: string;
  category: string;
  available: boolean;
  availabilityNote?: string;
  imageUrl?: string;
  variants: ProductVariant[];
  highlights: string[];
  ingredientsPlaceholder: string[];
  servingSuggestion: string;
  flavorNotes: string[];
  badge?: string;
  themeColor: {
    bg: string;
    text: string;
    border: string;
    pillBg: string;
    pillText: string;
  };
}

export interface CartItem {
  id: string; // generated unique key e.g. productId + variantId
  productId: string;
  productName: string;
  variantId: string;
  variantWeight: string;
  pricePlaceholder?: string;
  quantity: number;
  tagline?: string;
  kannadaName?: string;
  imageUrl?: string;
}

export interface CustomerOrderDetails {
  customerName: string;
  phone: string;
  orderType: 'delivery' | 'pickup';
  address: string;
  note: string;
}
