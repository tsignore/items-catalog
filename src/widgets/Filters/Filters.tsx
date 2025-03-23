import React from "react";
import {
  ChangeCategory,
  SearchProducts,
  SortProducts,
} from "@/features/product";

export const Filters = () => {
  return (
    <div className="px-6 py-3 flex items-center gap-5">
      <SearchProducts />
      <ChangeCategory />
      <SortProducts />
    </div>
  );
};
