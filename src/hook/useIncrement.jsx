import { useState } from "react";

export const useIncrement = ({
  initilaState = 0,
  max = Infinity,
  min = -Infinity,
}) => {
  const [count, setCount] = useState(initilaState);

  const incrementFunction = () =>
    setCount((prev) => (prev < max ? prev + 1 : prev));
  const decrement = () => setCount((prev) => (prev > min ? prev - 1 : prev));

  return { count, increment: incrementFunction, decrement };
};
