import { CartItem } from "./useShoppingCart";

type Props = {
  items: CartItem[];
  total: number;
  onRemove: (cartItemId: string) => void;
};

export function ShoppingCart({ items, total, onRemove }: Props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        padding: "16px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "16px", textAlign: "center" }}>
        Shopping Cart
      </h2>

      {items.length === 0 && (
        <p style={{ textAlign: "center", color: "#666" }}>
          Your cart is empty
        </p>
      )}

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item.cartItemId}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  width={40}
                  style={{ borderRadius: "6px" }}
                />
              )}
              <span>
                {item.name} – {item.price} kr
              </span>
            </div>

            <button
              onClick={() => onRemove(item.cartItemId)}
              style={{
                padding: "4px 8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "16px",
          paddingTop: "12px",
          borderTop: "1px solid #eee",
          textAlign: "right",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Total: {total} kr
      </div>
    </div>
  );
}
