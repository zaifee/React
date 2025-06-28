// const Greeting = () => {
// const product = {
//      myName : 'Mohd Nawaz',
//      greet : "Hello",
//      today : new Date()
// }
// return <div>

//     <h1>{ product.greet } {product.myName}</h1>
//     <p>Date: { product.today.toLocaleDateString() }</p>


// </div>


// }

// export default Greeting;


// Ternary condition 
import React from 'react'

const Greeting = ({timeOfday}) => {
  return (
    <div>
        {timeOfday === 'morning' ? "Good Morning" : "Good Afternoon"}
    </div>
  )
}

export default Greeting