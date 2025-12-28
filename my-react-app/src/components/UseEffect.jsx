import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement = () => {
    setCount1(prev => prev + 1);
  };

  const handleIncrement2 = () => {
    setCount2(prev => prev + 1);
  };

  useEffect(() => {
    console.log("This is useEffect - count1 changed:", count1);
  }, [count1]);

  return (
    <div>
      <h1>Counter 1: {count1}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <h1>Counter 2: {count2}</h1>
      <button onClick={handleIncrement2}>Increment</button>
    </div>
  );
}
