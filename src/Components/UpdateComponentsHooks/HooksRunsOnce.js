import React, { useEffect, useState } from 'react'

function HooksRunsOnce() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
   const logMousePosition = e =>{
    console.log("Mouse Event");
       setX(e.clientX) 
       setY(e.clientY)
    }
    useEffect(()=>{
        console.log("User Effect Call");
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
        Hooks <br/> X - {x}  
        Y-{y}
    </div>
  )
}

export default HooksRunsOnce