import { ShoppingCart } from "../sdk/cart/ShoppingCart";
import { useShoppingCart } from "../sdk/cart/useShoppingCart";
import { Carousel } from "../sdk/carousel/Carousel";

const products = [
  {
    id: "1",
    name: "T-shirt",
    price: 199,
    image: "/images/tshirt.png",
  },
  {
    id: "2",
    name: "Shoes",
    price: 799,
    image: "/images/shoes.png",
  },
  {
    id: "3",
    name: "Hat",
    price: 299,
    image: "/images/hat.png",
  },
];

export function ProductDemo() {
  const cart = useShoppingCart();

  return (
<<<<<<< Updated upstream
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "24px",
        fontFamily: "system-ui, sans-serif",
        background: "#f5f5f7",
        borderRadius: "16px",
      }}
    >
      <h1 style={{ marginBottom: "24px" }}>Product Demo</h1>
=======
    <div>
      <h1>My Shopping Cart</h1>
>>>>>>> Stashed changes

      {/* Carousel section */}
      <div
        style={{
          padding: "16px",
          borderRadius: "12px",
          background: "#ffffff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          marginBottom: "24px",
        }}
      >
        <Carousel items={products} />
      </div>

      {/* Add buttons */}
      <div style={{ marginBottom: "32px" }}>
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => cart.add(p)}
            style={{
              marginRight: "8px",
              marginBottom: "8px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              background: "#0070f3",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add {p.name}
          </button>
        ))}
      </div>

      {/* Shopping Cart */}
      <ShoppingCart
        items={cart.items}
        total={cart.total}
        onRemove={cart.remove}
      />
    </div>
  );
}
