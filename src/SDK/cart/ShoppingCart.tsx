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
  <li
    key={item.id}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "8px",
    }}
  >
    <img
      src={item.image}
      alt={item.name}
      width={50}
      style={{ borderRadius: "6px" }}
    />

    <span>
      {item.name} – {item.price} kr
    </span>

    <button onClick={() => onRemove(item.id)}>Remove</button>
  </li>
))}

      </ul>
      <strong>Total: {total} kr</strong>
    </>
  );
}