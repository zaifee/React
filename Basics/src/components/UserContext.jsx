import React, { Children, createContext, useState } from 'react'
import UserProfile from './UserProfile';


const UserContext = createContext();

const UserProvider = ({children}) => {

  const [user, setUser] = useState({name: "Mohd Nawaz"});

  const updateUser = (newName) => {
     setUser({name: newName}); //yaha mistake kar rakhi sabse badi name: newName hoga
  }

  return <UserContext.Provider value={{user, updateUser}}>
        {children}
  </UserContext.Provider>;
}

export {UserContext, UserProvider}

