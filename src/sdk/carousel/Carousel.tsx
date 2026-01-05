import { useEffect } from "react";
import { useCarousel } from "./useCarousel";

type ShoppingItem = {
  id: string;
  image: string;
};

type Props = {
  items: ShoppingItem[];
  imageWidth?: number;
  onIndexChange?: (index: number) => void;
};

export function Carousel({
  items,
  imageWidth = 300,
  onIndexChange,
}: Props) {
  const { index, next, prev } = useCarousel(items.length);
  const current = items[index];

  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  if (!current) return null;

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <button onClick={prev}>←</button>

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
