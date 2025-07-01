import React, { useState, useEffect } from 'react'

const UseFetch = (url) => {
    const [data,setData] = useState(null);

     useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data))
        }, []);

    return data;
}

export default UseFetch