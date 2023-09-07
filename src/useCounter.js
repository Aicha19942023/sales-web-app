import { useState } from "react";

export default function useCounter(initialValue = 0, step = 1) {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => setCounter(counter + step);
  const descrement = () => setCounter(counter - step);

  return [counter, { increment, descrement }];
}
