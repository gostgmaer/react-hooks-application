import React, { useContext } from 'react'
import { UserContext } from '../../App'
import ComponentF from './ComponentF'

function ComponentE() {
 const user =   useContext(UserContext)
  return (
    <div>
       {user}
    </div>
  )
}

export default ComponentE