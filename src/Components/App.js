import React from 'react';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

function App() {
  return (
    <div className="App">
      <h1>Introduction to Redux</h1>
      <div className='counterBody'>
        <CounterOutput />
        <br />
        <CounterInput />
      </div>
    </div>
  );
}

export default App;
