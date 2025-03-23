"use client";
import { Product, ProductItem } from "@/entities/Product";
import { useProductsStore } from "@/entities/Product/model/hooks/useProductsStore"; // Импортируем Zustand
import { Filters } from "@/widgets/Filters/Filters";

export default function CatalogPage() {
  const { filteredProducts } = useProductsStore();

  return (
    <div>
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredProducts().map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
