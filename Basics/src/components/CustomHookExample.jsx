import React from 'react'
import { useState, useEffect } from 'react';
import UseFetch from './UseFetch';

const CustomHookExample = () => {
//   const [data, setData] = useState(0);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // }, []);

    //using custom hook 
   const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos");
   


  return (
    <div>
        {data && data.map((item) => {
            return <p key={item.id}>{item.title}</p>
        } )}
    </div>
  )
}

export default CustomHookExample