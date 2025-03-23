import { create } from "zustand";
import { ProductsStore } from "../types/productTypes";

export const useProductsStore = create<ProductsStore>((set, get) => ({
  products: [],
  selectedCategory: null,
  searchQuery: "",
  sortBy: null,
  setProducts: (products) => set({ products }),
  setCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSortBy: (sortType) => set({ sortBy: sortType }),

  filteredProducts: () => {
    const { products, selectedCategory, searchQuery, sortBy } = get();

    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy) {
      switch (sortBy) {
        case "price_asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price_desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "title_asc":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "title_desc":
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
    }

    return filtered;
  },
}));
