import { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "24px",
        fontFamily: "system-ui, sans-serif",
        background: "#f5f5f7",
        borderRadius: "16px",
        textAlign: "center", // ✅ center text
      }}
    >
      <h1 style={{ marginBottom: "24px" }}>My Shopping Cart</h1>

      {/* Carousel section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // ✅ center carousel
          padding: "16px",
          borderRadius: "12px",
          background: "#ffffff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          marginBottom: "24px",
        }}
      >
        <Carousel
          items={products}
          onIndexChange={setCurrentIndex}
        />
      </div>

      {/* Single synced Add button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // ✅ center button
          marginBottom: "32px",
        }}
      >
        <button
          onClick={() => cart.add(products[currentIndex])}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#0070f3",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add {products[currentIndex].name}
        </button>
      </div>

      {/* Shopping Cart */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // ✅ center cart
        }}
      >
        <ShoppingCart
          items={cart.items}
          total={cart.total}
          onRemove={cart.remove}
        />
      </div>
    </div>
  );
}
