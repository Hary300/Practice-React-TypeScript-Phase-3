import { useState } from 'react';

export default function useCounter(initialVaalue: number = 0) {
  const [count, setCount] = useState<number>(initialVaalue);

  function increment(): void {
    setCount((prev) => prev + 1);
  }

  function decrement(): void {
    setCount((prev) => prev - 1);
  }

  function reset(): void {
    setCount(initialVaalue);
  }

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
