import { ShoppingCart } from "../sdk/cart/ShoppingCart";
import { useShoppingCart } from "../sdk/cart/useShoppingCart";
import { Carousel } from "../sdk/carousel/Carousel";


/// hej

//funakr nu

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
    <div>
      <h1>Product Demo</h1>

      <Carousel items={products} />

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
