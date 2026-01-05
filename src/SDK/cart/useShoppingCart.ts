import { useState } from "react";

export type CartItem = {
  cartItemId: string; 
  id: string;         
  name: string;
  price: number;
  image?: string;
};

export function useShoppingCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (item: Omit<CartItem, "cartItemId">) => {
  setItems((prev) => [
    ...prev,
    {
      ...item,
      cartItemId: crypto.randomUUID(),
    },
  ]);
};

const remove = (cartItemId: string) => {
  setItems((prev) =>
    prev.filter((i) => i.cartItemId !== cartItemId)
  );
};


  const total = items.reduce((sum, i) => sum + i.price, 0);

  return {
    items,
    add,
    remove,
    total,
  };
}
