import { useCarousel } from "./useCarousel";

type ShoppingItem = {
  id: string;
  image: string;
};

type Props = {
  items: ShoppingItem[];
  imageWidth?: number;
};


export function Carousel({ items, imageWidth = 300 }: Props) {
  const { index, next, prev } = useCarousel(items.length);
  const current = items[index];

  if (!current) return null;
// Anpassningsbar bredd
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={prev}>←</button>
      <img src={current.image} alt="" width={imageWidth} /> 
      <button onClick={next}>→</button>
    </div>
  );
}
