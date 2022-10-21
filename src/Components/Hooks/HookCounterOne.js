import React, { useEffect } from "react";
import { useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name,setname]=useState("")

  useEffect(()=>{
    console.log("useEffect document Title");
    document.title = `Click ${count} Times`
  },[count])
  return (
    <div>
        <input type="text" value={name}  onChange={e=>setname(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
    </div>
  );
}

export default HookCounterOne;
