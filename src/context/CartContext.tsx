import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { CartItem, Product, ProductVariant } from '../types';

export interface ToastNotificationInfo {
  id: number;
  productName: string;
  variantWeight: string;
  imageUrl?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, deltaOrValue: number, isAbsolute?: boolean) => void;
  clearCart: () => void;
  totalItemsCount: number;

  // Added-to-Cart Feedback Animation & Toast
  isCartBumping: boolean;
  activeToast: ToastNotificationInfo | null;
  dismissToast: () => void;
  
  // UI state for Cart Drawer
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;

  // UI state for Order Form / WhatsApp Checkout
  isOrderFormOpen: boolean;
  openOrderForm: () => void;
  closeOrderForm: () => void;

  // UI state for Product Details Modal
  selectedProduct: Product | null;
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'aarna_food_cart_v1';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load cart from localStorage:', e);
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart Bump Animation & Toast Notification State
  const [isCartBumping, setIsCartBumping] = useState(false);
  const [activeToast, setActiveToast] = useState<ToastNotificationInfo | null>(null);

  const dismissToast = () => setActiveToast(null);

  // Auto-dismiss toast after 3.5 seconds
  useEffect(() => {
    if (activeToast) {
      const timer = setTimeout(() => {
        setActiveToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [activeToast]);

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save cart to localStorage:', e);
    }
  }, [items]);

  const addItem = (product: Product, variant: ProductVariant, quantity = 1) => {
    const itemKey = `${product.id}-${variant.id}`;
    
    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.id === itemKey);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        const newItem: CartItem = {
          id: itemKey,
          productId: product.id,
          productName: product.name,
          variantId: variant.id,
          variantWeight: variant.weight,
          pricePlaceholder: variant.pricePlaceholder,
          quantity: quantity,
          tagline: product.tagline,
          kannadaName: product.kannadaName,
          imageUrl: product.imageUrl
        };
        return [...prevItems, newItem];
      }
    });

    // Trigger cart bump animation
    setIsCartBumping(true);
    setTimeout(() => setIsCartBumping(false), 700);

    // Trigger visual toast banner feedback
    setActiveToast({
      id: Date.now(),
      productName: product.name,
      variantWeight: variant.weight,
      imageUrl: product.imageUrl,
      quantity
    });
  };

  const removeItem = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, deltaOrValue: number, isAbsolute = false) => {
    setItems(prev => {
      return prev
        .map(item => {
          if (item.id === itemId) {
            const nextQty = isAbsolute ? deltaOrValue : item.quantity + deltaOrValue;
            return {
              ...item,
              quantity: Math.max(0, nextQty)
            };
          }
          return item;
        })
        .filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemsCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openOrderForm = () => {
    setIsCartOpen(false);
    setIsOrderFormOpen(true);
  };
  const closeOrderForm = () => setIsOrderFormOpen(false);

  const openProductModal = (product: Product) => setSelectedProduct(product);
  const closeProductModal = () => setSelectedProduct(null);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItemsCount,
        isCartBumping,
        activeToast,
        dismissToast,
        isCartOpen,
        openCart,
        closeCart,
        isOrderFormOpen,
        openOrderForm,
        closeOrderForm,
        selectedProduct,
        openProductModal,
        closeProductModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
