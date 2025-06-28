const UserList = () => {

    const users = [
        {id: 1, name: 'Alice', age: 25},
        {id: 2, name: 'Bob  ', age: 30},
        {id: 1, name: 'Charlie', age: 32},

        
    ]

   return <div>
     {
        users.map(({name, age, id}) => (
           
           <div key={id}>
                <h1>Name: {name}</h1>
                <h2>age: {age}</h2>
            </div>             

        ))
    }
   </div>

}

export default UserList;