"use client";
import { useProductsStore } from "@/entities/Product/model/hooks/useProductsStore";
import React, { useCallback } from "react";

export const ChangeCategory = ({ className }: { className?: string }) => {
  const { setCategory } = useProductsStore();

  const handleCategoryChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const category = event.target.value;
      setCategory(category === "all" ? null : category);
    },
    [setCategory]
  );

  return (
    <select
      onChange={handleCategoryChange}
      className={`p-[10px] border border-gray-300 rounded ${className}`}
    >
      <option value="all">Все категории</option>
      <option value="men's clothing">Мужская одежда</option>
      <option value="jewelery">Украшения</option>
      <option value="electronics">Электроника</option>
      <option value="women's clothing">Женская одежда</option>
    </select>
  );
};
