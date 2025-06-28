import React from 'react'

const UserStatus = ( {LoggedIn, isAdmin } ) => {
  return (
    <div>
        
     {
        LoggedIn && isAdmin === true ? "Welcome Admin" : "Welcome User"
     }
    
    </div>
  )
}

export default UserStatus