import React, { useState } from 'react'

const ToDoList = () => {
    const [todos, setToDos] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if(inputValue.trim()){
            setToDos([...todos, inputValue]);
            setInputValue(""); //set empty

        }
    };

    const handleChange = (e) => setInputValue(e.target.value);
    
  return (
    <div>
        <h1>Todos List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Enter your todo'/>
            <button type='submit'>Add Todo</button>
        </form>


      <ul>
          {todos.map((todos, index) => (
                <li key={index}>{todos}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList