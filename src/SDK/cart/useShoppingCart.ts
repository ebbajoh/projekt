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

  //Adding an item and generates a random unique ID
  const add = (item: Omit<CartItem, "cartItemId">) => {
  setItems((prev) => [ ...prev,
    {
      ...item,
      cartItemId: crypto.randomUUID(),
    },
  ]);
};

//Removes one item form the cart
const remove = (cartItemId: string) => {
  setItems((prev) =>
  // keep all items with other id than chosen item
    prev.filter((i) => i.cartItemId !== cartItemId)
  );
};


//Adding the prices to get out total 
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return {
    items,
    add,
    remove,
    total,
  };
}
