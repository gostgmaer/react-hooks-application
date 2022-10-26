import React, { useContext } from "react";
import { countContext } from "../../App";

function CompD() {
  const countcontext = useContext(countContext);
  return (
    <div>
      CompD - {countcontext.countState}
      <div>
        <button onClick={() =>countcontext.countDispatch("increment")} type="button">
          Increment
        </button>
        <button onClick={() => countcontext.countDispatch("reset")} type="button">
          Reset
        </button>
        <button onClick={() => countcontext.countDispatch("decrement")} type="button">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CompD;
