import React from 'react'
import { useState, useEffect } from 'react'
import '../style.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
     const handleDecrement = () => setCount(count - 1);
   
  return (
    <div className='container'>
      <div>
          <h1 className='number'>{count}</h1>
      </div>

      <div className="btn-container">
        <button onClick={handleIncrement} className="increment">+</button>
        <button onClick={handleDecrement} className="increment">-</button>
      </div>
    </div>
  )
}

export default Counter