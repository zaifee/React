import React, { useState } from 'react'

const Example2UseState = () => {
    const [randomNo, setRandomNo] = useState(() => 
        Math.floor(Math.random()*100)
    );

    const changeRandomNumb = () => {
        setRandomNo(Math.floor(Math.random()* 100))
    };

  return (
    <div>
        <h1>Random No: {randomNo}</h1>
        <button onClick={changeRandomNumb}>Change Number</button>
    </div>
  )
}

export default Example2UseState