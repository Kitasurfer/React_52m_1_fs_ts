import { useState } from "react";
import { jsx } from '@emotion/react';
import { CounterProps } from "./types";
import { CounterWrapper, CounterButtons, CounterButton } from './styles';

const Counter = ({
  initialCount = 0 
}: CounterProps) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterWrapper>
      <h2>Counter: {count}</h2>
      <CounterButtons>
        <CounterButton 
          onClick={decrement} 
        >
          -
        </CounterButton>
        <CounterButton 
          onClick={increment} 
        >
          +
        </CounterButton>
      </CounterButtons>
    </CounterWrapper>
  );
};

export default Counter;