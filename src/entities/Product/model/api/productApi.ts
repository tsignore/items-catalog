import { Product } from "../types/productTypes";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};
