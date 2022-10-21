import React, { useState } from 'react'
import HooksRunsOnce from '../UpdateComponentsHooks/HooksRunsOnce'

function MouseContainer() {
    const [display,setDisplay]=useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)} >Toggle Display</button>
        {display && <HooksRunsOnce></HooksRunsOnce>}
    </div>
  )
}

export default MouseContainer