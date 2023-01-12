import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {incrementCounter, decrementCounter, resetCounter, incrementByNumber} from './CounterSlice.js'


const Counter = () => {

  const [incrementAmount, setIncrementAmount] = useState(0)
  const actualAmount = Number(incrementAmount) || 0

  const addAmount = () =>{
      dispatch(incrementByNumber(actualAmount))
  }

  const counter = useSelector((state)=> {
    return state.counter;
    })

    const dispatch = useDispatch()
    console.log(counter);

  const ResetCounter = () =>{
      dispatch(resetCounter())
      setIncrementAmount(0)
  }

  return (
    <div className='counter-container'>
         <h1 className='counter-value'>{counter.value}</h1>
         <div className="counter-buttons">
            <button className='btn' onClick={()=> dispatch(incrementCounter())}>+</button>
            <button className='btn' onClick={()=> dispatch(decrementCounter())}>-</button>
         </div>
        <div className="input">
            <input type="text" value={incrementAmount} onChange={(e)=> {
              setIncrementAmount(e.target.value)
            }}/>
        </div>
        <div className="input-buttons">
            <button className='btn btn-add' onClick={()=> addAmount()}>Add Amount</button>
            <button className='btn btn-reset' onClick={()=> ResetCounter()}>Reset</button>
        </div>
        
    </div>
  )
}

export default Counter