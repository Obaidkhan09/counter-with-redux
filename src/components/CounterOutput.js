import React  from 'react'
import { useSelector } from 'react-redux';

export default function CounterOutput() {
  const counter = useSelector ( (state) => state.counter );
  return (
    <div>
        <h3>Counter Value is : {counter}</h3>
    </div>
  )
}