import React, { useState } from "react";

export default function State() {
  const initialcCount = 0;
  const [count, setCount] = useState(initialcCount);
  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialcCount)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Reset</button>
    </div>
  );
}
