"use client";
import { useProductsStore } from "@/entities/Product/model/hooks/useProductsStore";
import React from "react";

export const SortProducts = ({ className }: { className?: string }) => {
  const { setSortBy } = useProductsStore();
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType = event.target.value;
    setSortBy(sortType === "default" ? null : sortType);
  };

  return (
    <div>
      <select
        onChange={handleSortChange}
        className={`p-[10px] border border-gray-300 rounded ${className}`}
      >
        <option value="default">Без сортировки</option>
        <option value="price_asc">Цена по возрастанию</option>
        <option value="price_desc">Цена по убыванию</option>
        <option value="title_asc">По алфавиту</option>
        <option value="title_desc">Не по алфавиту</option>
      </select>
    </div>
  );
};
