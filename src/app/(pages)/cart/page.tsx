"use client";
import React from "react";
import { useCartStore } from "@/entities/Cart";
import { ProductItem } from "@/entities/Product";
import { Button } from "@/shared/ui/Button/Button";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cartItems, removeItemFromCart, getTotalPrice } = useCartStore();
  const router = useRouter();

  return (
    <div className="px-6 py-3">
      <Button
        onClick={() => router.back()}
        variant="filled"
        color="primary"
        className="mb-6"
      >
        Назад
      </Button>

      {cartItems.length === 0 ? (
        <p className="mt-10 flex items-center justify-center">Корзина пуста</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between shadow-lg rounded-lg p-6"
              >
                <ProductItem isCart product={item} />
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">
              Общая стоимость: ${getTotalPrice()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
