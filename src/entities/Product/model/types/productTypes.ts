export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export type Category =
  | "men's clothing"
  | "women's clothing"
  | "jewelery"
  | "electronics"
  | "all"
  | null;

export type Sort = "price_asc" | "price_desc" | "title_asc" | "title_desc";

export interface ProductsStore {
  products: Product[];
  selectedCategory: string | null;
  searchQuery: string;
  sortBy: string | null;
  setProducts: (products: Product[]) => void;
  setCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sortType: string | null) => void;
  filteredProducts: () => Product[];
}
