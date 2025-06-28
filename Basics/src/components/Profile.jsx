import { useState } from "react";

const Profile = () =>{

   const[profile, setProfile] =  useState(
    {
      name: "",
      age: ""
   })

   const handleChange = (event) => {
        const {name, value} = event.target;

       
       setProfile((prevProfile) => ({
            ...prevProfile, 
            [name]:value
       }))
   }

    return <div>
        <h2>User Profile</h2>
        <div>
            <label>Name: 
                {/* name="name" pass karna hota hai */}
                <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Enter your Name.." />
            </label>
        </div>

         <div>
            <label>Age: 
                <input type="number" name= "age" value={profile.age} onChange={handleChange} placeholder="Enter your age.." />
            </label>
        </div>


        <h3>Profile Information</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
    </div>
}

export default Profile;