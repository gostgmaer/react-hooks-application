import React,{useState} from 'react'

function HookCounterTWO() {
    const initialCount = 0
    const [count,setCount]=useState(initialCount)
    const IncrementFIve=()=>{
        for (let index = 0; index < 5; index++) {
           setCount(prevCount => prevCount+1)
            
        }
    }
  return (
    <div>
        count :{count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevCount => prevCount+1)} >Increment</button>
        <button onClick={()=>setCount(prevCount => prevCount-1)} >Decrement</button>
        <button onClick={IncrementFIve} >Increment 5</button>
    </div>
  )
}

export default HookCounterTWO