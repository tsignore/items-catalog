import { Product } from "../../../Product";

export interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}
