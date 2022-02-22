import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementAction, decrementAction, resetAction } from './redux/Action';
import '../App.css'

export default function CounterInput() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(incrementAction())}
        className='btnInc'
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrementAction())}
        className='btnDec'
      >
        -
      </button>
      <button
        onClick={() => dispatch(resetAction())}
        className='btnRes'
      >
        Reset
      </button>
    </div>
  )
}
