import { useState } from "react";

export function useCarousel(length: number) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % length);
  const prev = () => setIndex((i) => (i - 1 + length) % length);

  return { index, next, prev };
}
