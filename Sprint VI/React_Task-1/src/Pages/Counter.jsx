import React, { useState } from 'react';
function Counter() {
  const [count, setcount] =useState(0);
  const Increment = () =>{
    setcount(count+1);
  }
  const Decrement = () =>{
    setcount(count-1);
  }
  const Rest = () =>{
    setcount(0);
  }

  return (
    <div className='counter-container'>
      <h1 className='header'>Welcome to Counter Component</h1>
      <p className='count-display'>{count}</p>
      
      <button className='Counter-button' onClick={Decrement}>Decrement</button>
      <button className='Counter-button' onClick={Rest}>Rest</button>
      <button className='Counter-button' onClick={Increment}>Increment</button>

    </div>
  );
}

export default Counter;