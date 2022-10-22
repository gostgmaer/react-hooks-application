import React, {useState,useEffect } from "react";

function IntervalHookCounter() {
  const [ count, setCount]  = useState(0)
  const tick = () => {
    setCount(count + 1)
  };
  useEffect(() => {
    function doSomething(params) {
        console.log("Do someing");
        
    }
    doSomething()
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [tick]);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
