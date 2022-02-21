import React from 'react';
import CounterInput from './components/CounterInput';
import CounterOutput from './components/CounterOutput';
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterOutput />
      <br />
      <CounterInput />
    </div>
  );
}

export default App;
