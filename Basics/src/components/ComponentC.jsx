import React, { useContext } from 'react'
import ComponentA from './ComponentA'
//using context api 
import { Data, Data1 } from '../App'

const ComponentC = ({name}) => {
    // using 2 solution of receving data in child component which is useContext
   const userName =  useContext(Data);
   const age = useContext(Data1);


  return (
    // <div>
    //      {/* <h1>Name from Component C: {name}</h1> */}
    //     {/* <ComponentA name={name}/> */}

       
        
       
    // </div>

    // {/* using context api -- 1 Solution of Propdrilling */}
    // <Data.Consumer>
        
    // {(name) => (
    //     // <h1>Data coming from Component C after receving from parent: {name}</h1> 
    //     <Data1.Consumer>
    //         {(age) => (
    //             <h1>My name is {name} and my age is {age}</h1>
    //         )}

    //     </Data1.Consumer>
    // )};

    // </Data.Consumer>

    // using 2 solution that is useContext
    <div>
        <h1>I'm {userName} and my age is {age}</h1>
        
    </div>


  )
}

export default ComponentC