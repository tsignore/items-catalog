"use client";
import "./globals.css";
import { Container } from "@/shared/ui/Container";
import { Header } from "@/widgets/Header";
import { useProductsStore } from "@/entities/Product/model/hooks/useProductsStore";
import { useEffect } from "react";
import { fetchProducts } from "@/entities/Product/model/api/productApi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setProducts, filteredProducts } = useProductsStore();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    if (filteredProducts.length === 0) {
      loadProducts();
    }
  }, [setProducts, filteredProducts.length]);

  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
