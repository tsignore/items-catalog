import { Product } from "@/entities/Product";
import { create } from "zustand";

interface CartStore {
  cartItems: Product[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (productId: number) => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  addItemToCart: (product) => {
    set((state) => ({
      cartItems: [...state.cartItems, product],
    }));
  },
  removeItemFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    }));
  },
  getTotalPrice: () => {
    const { cartItems } = get();
    return cartItems.reduce((total, product) => total + product.price, 0);
  },
}));
