import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
import { CounterProps } from "./types";

function Counter ({
	 initialCount = 0 
	}: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <Button 
          name="-" 
          type="button" 
          onClick={decrement} 
          className="counter-button"
        />
        <Button 
          name="+" 
          type="button" 
          onClick={increment} 
          className="counter-button"
        />
      </div>
    </div>
  );
};

export default Counter;