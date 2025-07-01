import React from 'react'
import { useId } from 'react'

const UseId = () => {
    const id = useId();
  return (
    <div>
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" placeholder='enter name' />

        <br />
         <label htmlFor={`${id}-name`}>email</label>
        <input type="email" placeholder='enter email' />
    </div>
  )
}

export default UseId