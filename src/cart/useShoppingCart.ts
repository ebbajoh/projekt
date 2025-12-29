import { useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
};

export function useShoppingCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return {
    items,
    add,
    remove,
    total,
  };
}
