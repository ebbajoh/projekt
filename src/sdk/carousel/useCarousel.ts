import { useState } from "react";

//length: number of items
export function useCarousel(length: number) {
  // index: current image, setindex: update value
  const [index, setIndex] = useState(0);

  // % length: back to start when reach end
  // from img 1 -> 2: i= 0 to 1(0 + 1) % 3 = 1 = i img 2
  const next = () => setIndex((i) => (i + 1) % length);
  const prev = () => setIndex((i) => (i - 1 + length) % length);

  return { index, next, prev };
}
