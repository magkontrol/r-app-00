import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const Decrement = () => {
    setCount(count - 1);
  };
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default Counter;
