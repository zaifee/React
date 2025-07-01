import React, { useState } from 'react'

const Example2UseState = () => {
    const [randomNo, setRandomNo] = useState(() => 
        Math.floor(Math.random()*100) 

    //Note -------> we are intializing inside the useState becuase it sets the intital value and we are passing as function
    //because it will render just once and it is the preferred on to use changeRandomNumb only triggered when btn in clicked
    //other wise randomNumb will be zero
    
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