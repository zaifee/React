import React from 'react'
import { useRef } from 'react'

const FocustInput = () => {
    const inputValue = useRef(null);
    const focusInput = () => {
        if(inputValue.current){
            inputValue.current.focus();
        }
    }
  return (
    <div>
        <input type="text" ref={inputValue} placeholder='Enter value'/>
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocustInput