import { Button } from "@/shared/ui/Button/Button";
import Link from "next/link";

import React from "react";

export const Header = () => {
  return (
    <div className="p-6 flex items-center justify-between gap-5">
      <Link href="/">
        <Button variant="filled" color="primary" className="text-lg">
          Главная
        </Button>
      </Link>
      <Link href="/cart">
        <Button variant="filled" color="primary" className="text-lg">
          Корзина
        </Button>
      </Link>
    </div>
  );
};
