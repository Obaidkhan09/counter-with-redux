import React from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'

export default function CounterInput() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className='btnInc'
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className='btnDec'
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className='btnRes'
      >
        Reset
      </button>
    </div>
  )
}
