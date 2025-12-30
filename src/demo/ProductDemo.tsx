import { ShoppingCart, useShoppingCart } from "../cart";

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
