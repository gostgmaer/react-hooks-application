import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function UseCallbackHookOne() {
  const [age, setAge]=useState(25)
  const [salary,setSalary]=useState(25000)
  const incrementAge = useCallback(()=>{
    setAge(age+1)
    
  },[age])
  const incrementSalary = useCallback(()=>{
    setSalary (salary+1)
  },[salary])
  return (
    <div>
     <Title></Title>
     <Count text="Age"  count={age}></Count>
     <Button handlerClick={incrementAge}>Increment Age </Button>
     <Count text="Salary"  count={salary}></Count>
    <Button handlerClick={incrementSalary}>Increment Salary </Button>

    </div>
  )
}

export default UseCallbackHookOne