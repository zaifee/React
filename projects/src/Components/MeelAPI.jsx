import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MeelAPI = () => {
    const[items, setItem] = useState([]);
    
    useEffect(() => {
     axios
     .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
     .then(res => {
        setItem(res.data.meals)
        
      }).catch(err => {
        console.log(err);
        
      })
     
        
    }, []);

    const itemList = items.map(({idMeal, strMeal, strMealThumb}) => {
        return <section className='card'>
            <img src={strMealThumb} alt='foodImage'/>
            <section className="content">
                <p>{strMeal}</p>
                <p>{idMeal}</p>
            </section>
        </section>
    })

  return (
    <div className='items-container'>
        {itemList}

    </div>
  )
}

export default MeelAPI