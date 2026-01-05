import { useState } from "react";

//length: number of items
export function useCarousel(length: number) {
  // index: current image, setindex: update value
  const [index, setIndex] = useState(0);

  // % length: back to start when reach end
  const next = () => setIndex((i) => (i + 1) % length);
  const prev = () => setIndex((i) => (i - 1 + length) % length);

  return { index, next, prev };
}
