import { CartItem } from "./useShoppingCart";

type Props = {
  items: CartItem[];
  total: number;
  onRemove: (id: string) => void;
};

export function ShoppingCart({ items, total, onRemove }: Props) {
  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} – {item.price} kr
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <strong>Total: {total} kr</strong>
    </>
  );
}