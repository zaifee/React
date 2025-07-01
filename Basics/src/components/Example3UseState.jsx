import React, { useEffect, useState } from 'react'

const Example3UseState = () => {

    const [name, setName] = useState( () => {

        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : '';

    })

    useEffect(() => {
       localStorage.setItem("name", JSON.stringify(name))
    }, [name]) //as we have passed name isndie the it will change the name at every render 


    // const handleChange = (event) => {
    //     setName(event.target.value);
    // }

    // const handleClear = () => setName("");

  return (
    <div>
        <h1>Your Name: {name}</h1>
        <input type="text" value={name} onChange={(e) => handleChange(e.target.value)} placeholder='Enter your name'/>
        <button onClick={() => setName("")}>Clear Name</button>

    </div>
  )
}

export default Example3UseState