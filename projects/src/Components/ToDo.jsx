import React, { useState } from 'react'

const ToDo = () => {
   const[todo, setToDos] = useState([]);
   const [inputValue, setInputValue] = useState('');

    const submitHanlder = (e) => {
        e.preventDefault();
     setToDos((todos) => {
        
       return  todos.concat({
            text: inputValue, 
            id: Math.floor(Math.random() * 10)
          })
        })

       setInputValue("")
    };

    const removeToDo = (id) => {
      //if the id we are getting is not equal to the id then we are removing it from the list
      setToDos((todos) => todos.filter((t) => t.id !== id))
    }

  return (
    <div className='container'>
       
            <input type="text" name='name' value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Enter todo'/>
            <button onClick={submitHanlder}>Add ToDo</button>


            <ul>
              {todo.map(({text, id}) => (
                <li className='todo' key={id}>
                  <span>{text}</span>
                  <button className='close' onClick={() => removeToDo(id)}>x</button>
                </li>
              ))}
            </ul>
      
    </div>
  )
}

export default ToDo