import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = (value) => {
    setCount(prev => prev + value);
  };

  return { count, increase };
}
