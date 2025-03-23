"use client";
import { useCartStore } from "@/entities/Cart";
import { Product } from "@/entities/Product";
import { useProductsStore } from "@/entities/Product/model/hooks/useProductsStore";
import { Button } from "@/shared/ui/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Usable } from "react";

interface ProductPageProps {
  params: Usable<{ id: string }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const router = useRouter();
  const products = useProductsStore((state) => state.products);
  const { cartItems, addItemToCart } = useCartStore();
  const product = products.find((product: Product) => product.id === +id);
  const isInCart = cartItems.some((item) => item.id === +id);
  if (!product) {
    return <p>Продукт не найден</p>;
  }

  return (
    <div className="px-6 py-2">
      <Button
        onClick={() => router.back()}
        variant="filled"
        color="primary"
        className="mb-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Назад
      </Button>

      <div className="mb-6 flex">
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={`product ${product.id} image`}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      <h1 className="text-3xl font-semibold text-gray-800 mb-2">
        {product.title}
      </h1>

      <p className="text-gray-600 text-lg mb-4">{product.description}</p>

      <div className="text-2xl font-bold text-green-600">{product.price} $</div>

      <div className="mt-8">
        <Button
          onClick={() => addItemToCart(product)}
          variant="outlined"
          color="primary"
          className="w-full px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
        >
          {!isInCart ? "Добавить в корзину" : "В корзине"}
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
