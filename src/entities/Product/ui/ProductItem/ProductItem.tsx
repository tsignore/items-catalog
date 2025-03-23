"use client";
import React, { useCallback } from "react";
import { Product } from "../../model/types/productTypes";
import Image from "next/image";
import { useCartStore } from "@/entities/Cart";
import { Button } from "@/shared/ui/Button/Button";
import Link from "next/link";

interface ProductItemProps {
  product: Product;
  isCart?: boolean;
}

export const ProductItem: React.FC<ProductItemProps> = React.memo(
  ({ product, isCart }) => {
    const { id, title, description, price, image } = product;
    const { addItemToCart, cartItems } = useCartStore();

    const isInCart = cartItems.some((item) => item.id === +id);

    const handleAddToCart = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        addItemToCart(product);
      },
      [addItemToCart, product]
    );

    return (
      <div
        className={`flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
          isCart &&
          "shadow-none hover:shadow-none flex-row justify-between w-full"
        }`}
      >
        <Link href={`product/${id}`} className="grow">
          <div>
            <div className="w-full relative h-60">
              <Image
                alt={`product ${id} image`}
                src={image}
                fill={isCart ? false : true}
                width={isCart ? 140 : undefined}
                height={isCart ? 100 : undefined}
                className="object-cover"
              />
            </div>
          </div>

          <div className="p-4 grow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            {!isCart && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </Link>

        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold text-gray-900">{price} $</span>
          {!isCart && (
            <Button
              className="w-50"
              variant="filled"
              color="primary"
              onClick={handleAddToCart}
            >
              {!isInCart ? "Добавить в корзину" : "В корзине"}
            </Button>
          )}
        </div>
      </div>
    );
  }
);

ProductItem.displayName = "ProductItem";
