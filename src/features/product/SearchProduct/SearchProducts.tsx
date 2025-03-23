import { useProductsStore } from "@/entities/Product/model/hooks/useProductsStore";
import { Input } from "@/shared/ui/Input/Input";
import React from "react";

export const SearchProducts = ({ className }: { className?: string }) => {
  const searchQuery = useProductsStore((state) => state.searchQuery);
  const setSearchQuery = useProductsStore((state) => state.setSearchQuery);
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <Input
      type="text"
      placeholder="Поиск по названию"
      value={searchQuery}
      onChange={handleSearchChange}
      className={`border border-gray-300 rounded w-full ${className}`}
    />
  );
};
