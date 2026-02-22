import React from 'react'
import {useState} from 'react';

const CounterApp = () => {
    const [count, setCount ] = useState(0);
    const [step, setStep ] = useState(1);

  const handleIncrementClick= ()=> {
    console.log("clicked", count, step)
  return setCount(count+step);
  }

  
   const handleDecrementClick = () => {
    if(count === 0) return;
    setCount(count-step);
  }
   const handleResetClick = () => {
  return setCount(0);
  }

  const handleChange = (e)=> {
    setStep(Number(e.target.value));
  }
  return (
    <>
    <p> {count}</p>
    <input type="number" value={step} onChange={handleChange} ></input>
      <button onClick={handleIncrementClick}>Increment</button>
     
      <button onClick={handleDecrementClick}>Decrement</button>
      
      <button onClick={handleResetClick}>Reset</button>
    </>
  )
}

export default CounterApp
