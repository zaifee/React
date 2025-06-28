import React from 'react'

const ComponentOne = ({count, onClickHandler}) => {
    const incrementCount = () => onClickHandler;
    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default ComponentOne