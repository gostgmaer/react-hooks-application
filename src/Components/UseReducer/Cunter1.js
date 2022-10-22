import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  // return newState
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Cunter1() {
  const [count,dispatch]= useReducer(reducer, initialState)
  return (
    <div>
        <div>Count  - {count}</div>
      <button onClick={()=>dispatch("increment")} type="button" className="btn btn-primary">
        Increment
      </button>
      <button  onClick={()=>dispatch("reset")} type="button" className="btn btn-denger">
        Reset
      </button>
      <button  onClick={()=>dispatch("decrement")} type="button" className="btn btn-secondary">
        Decrement
      </button>
    </div>
  );
}

export default Cunter1;
