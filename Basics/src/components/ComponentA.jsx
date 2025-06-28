import React from 'react'
import ComponentB from './ComponentC'

const ComponentA = ({name}) => {
  return (
    <div>
        {/* <h1>Name from Component A: {name}</h1> */}
        <ComponentB name={name}/>
        
    </div>
  )
}

export default ComponentA