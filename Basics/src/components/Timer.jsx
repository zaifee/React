import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Timer = () => {

 const[count, setCount] =   useState(0);
 const refValue = useRef(null);

 useEffect(() => {

  refValue.current = setInterval( () => {
       setCount(prevCount => prevCount+1);
  }, 1000)

    return () => 
      clearInterval(refValue.current);

    
 }, [])



  return <div>
    <h1>Time: {count} seconds</h1>
    <button onClick={() => clearInterval(refValue.current)}>Stop Timer</button>
  </div>
}

export default Timer;	