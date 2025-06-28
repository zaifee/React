import { useState } from "react"

const shoppingList = () => {
   
  const[items, setItems] =  useState([]);
  const [name, setName] = useState('');
  const[quantity, setQauntity] = useState('');


    const submitHandler = (e) => {

        e.preventDefault();

        if(!name || !quantity) return;

        const newItems = {
            name: name, 
            quantity: parseInt(quantity)
        }

        setItems((prevItem) => [...prevItem, newItems]);
        setName('');
        setQauntity('');

    }
    
   return <div>

    <h1>Shopping List</h1>
    <form onSubmit={submitHandler}>
        <input type="text" value={name} placeholder="Enter Item" onChange={e => setName(e.target.value)} />
        <input type="number" value={quantity} placeholder="Enter age" onChange={e => setQauntity(e.target.value)} />
        <button type="submit">Add Item</button>

       <ul>
         {items.map((item, index) => {
            return <li key={index}>{item.name} - Quantity:{item.quantity}</li>
         })}
       </ul>

    </form>


    </div>
}


export default shoppingList