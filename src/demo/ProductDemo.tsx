<<<<<<< Updated upstream
import { ShoppingCart } from "../sdk/cart/ShoppingCart.tsx";
import { useShoppingCart } from "../sdk/cart/useShoppingCart.ts";
//funakr nu
=======
import React from "react";
import { ShoppingCart, useShoppingCart } from "../SDK/cart";
>>>>>>> Stashed changes

const products = [
  { id: "1", name: "T-shirt", price: 199 },
  { id: "2", name: "Shoes", price: 799 },
];

export function ProductDemo() {
  const cart = useShoppingCart();

  return (
    <div>
      <h1>Product Demo</h1>

      {products.map((p) => (
        <button key={p.id} onClick={() => cart.add(p)}>
          Add {p.name}
        </button>
      ))}

      <ShoppingCart
        items={cart.items}
        total={cart.total}
        onRemove={cart.remove}
      />
    </div>
  );
}
