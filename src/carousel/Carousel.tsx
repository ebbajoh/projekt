import React from "react";
import { useCarousel } from "./useCarousel";

type CarouselItem = {
  id: string;
  image: string;
};

type Props = {
  items: CarouselItem[];
};

export function Carousel({ items }: Props) {
  const { index, next, prev } = useCarousel(items.length);
  const current = items[index];

  if (!current) return null;

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={prev}>◀</button>
      <img src={current.image} alt="" width={300} />
      <button onClick={next}>▶</button>
    </div>
  );
}
