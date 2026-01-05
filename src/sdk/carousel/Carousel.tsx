import { useEffect } from "react";
import { useCarousel } from "./useCarousel";

type ShoppingItem = {
  id: string;
  image: string;
};

// ? : add if you want
type Props = {
  items: ShoppingItem[];
  imageWidth?: number;
  onIndexChange?: (index: number) => void;
};
// 300: "suggestion"
export function Carousel({ items, imageWidth = 300, onIndexChange, }: Props) {
  const { index, next, prev } = useCarousel(items.length);
  // index: place of image 1, 2, 3
  const current = items[index];

  // active item changes
  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);
  // no item
  if (!current) return null;


  // no flex: buttons at bottom
  return (
      
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <button onClick={prev}>←</button>

      {/* active image */}
      <img
        src={current.image}
        alt=""
        width={imageWidth}
        style={{ borderRadius: "12px" }}
      />

      <button onClick={next}>→</button>
    </div>
  );
}
