import React, { useReducer, useState } from "react";

export default function Reducer() {
  const initialcCount = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialcCount;
      case "increment":
        return { count: state.count + 1, name: "timmy" };
      case "decrement":
        return { count: state.count - 1, name: "amy" };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialcCount);
  return (
    <div>
      Count(Reducer):{state.count}
      Name:{state.name}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>-</button>
      <button onClick={() => dispatch({ type: "decrement" })}>+</button>
    </div>
  );
}
