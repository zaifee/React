import React from 'react'
import { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {
    const { updateUser} = useContext(UserContext);

    const [newName, setNewName] = useState('');
    const submitHandler = e => {
        e.preventDefault()

       
       if(newName.trim()){
          updateUser(newName);
         setNewName("");
       }
       

    }

  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={submitHandler}>
            <input type="text" value={newName} placeholder='Enter name' onChange={(e) => setNewName(e.target.value)} />
            <button type='submit'>Update Name</button>
        </form>

    </div>
  )
}

export default UpdateUser