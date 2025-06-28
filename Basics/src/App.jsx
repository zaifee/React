
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Header from './components/Header'
import WelcomeMessage from './components/WelcomeMessage'
import JSXRULES from './components/JSXRULES'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserList'
import ProductList from './components/ProductList'
import Person from './components/Person'
import Product from './components/Product'
import UserStatus from './components/UserStatus'
import Weather from './components/Weather'
import StyledCard from './components/StyledCard'
import ProfileCard from './components/ProfileCard'
import IconComponent from './components/IconComponent'
import Friends from './components/Friends'
import { useContext, useEffect, useReducer, useState } from 'react'
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'
import Example2UseState from './components/Example2UseState'
import Example3UseState from './components/Example3UseState'
import Counter from './components/Counter'
import Profile from './components/Profile'
import ToDoList from './components/ToDoList'
import ShoppingList from './components/ShoppingList'
import CopyInput from './components/CopyInput'
import Switcher from './components/Switcher'
import UseEffectExam from './components/UseEffectExam'

import ComponentA from './components/ComponentA'

import { createContext } from 'react'
import { UserContext,  UserProvider } from './components/UserContext'
import UserProfile from './components/UserProfile'
import UpdateUser from './components/UpdateUser'

export  const Data = createContext();
export const  Data1 = createContext();

const inititalState = {count: 0};

//useReducer 
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
          return {...state, count: state.count+1 };
        
        case 'decrement':
            return {...state, count: state.count-1};
        
        case "reset":
            return {...state, count:0}
          
    
        default:
            break;
    }
}



const App = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [state, action] = useReducer(reducer, initialState);
    

   //  useEffect(() => {
   //    async function fetchData(){
   //       const response = await fetch('https://www.google.com');
   //       const data = response.json();

   //       if(data && data.length) //do something  
   //          setData(data)
         
   //    }
   //    fetchData()
   //  }, [])
   const name = "Mohammad Nawaz";
   const age = 23;
  return (
    
     <section>
     
      {/* <Header />
       <MainContent />
       <Footer /> */}

       {/* <WelcomeMessage /> */}
       {/* < JSXRULES /> */}

        {/* JSX */}
       {/* <Greeting /> */}
       {/* <ProductInfo /> */}

       {/* Expression in JSX */}
       {/* <UserList />
       <ProductList /> */}

       {/* props */}
       {/* <Person name="Mohammad" age={23} />
       <Product name="samsung" price= {23000}/> */}

       {/* conditional rendering */}

      {/* <Weather />
       <UserStatus LoggedIn={true} isAdmin={true} /> 
       <Greeting timeOfday="afternoon"/> */}

       {/* styling in react */}
        {/* <StyledCard />
        <ProfileCard /> */}

        {/* Icons in react */}
        {/* <IconComponent /> */}

        {/* events in react like when clicking on btn -> onMouseMove, onCopy, */}
        {/* Hooks in react */}
        {/* <Friends /> */}

        {/* Sharing state hook in react */}

       
       {/* <ComponentOne count={count} onClickHandler={() => setCount(count+1)}/>
       <ComponentTwo count={count} onClickHandler={() => setCount(count+1)}/>
        <Example2UseState /> */}

        {/* <Example3UseState /> */}
        {/* <Counter /> */}
        {/* <ToDoList /> */}
        {/* <Profile />   */}
        {/* <ShoppingList /> */}

        {/* Portal in React */}
         {/* <CopyInput /> */}

         {/* key helps to distinguish features */}
         {/* <Switcher /> */}
         
         {/* use effect in react */}
         {/* <UseEffectExam /> */}

         {/* fetching with the help of useEffect */}

         {/* propdrilling is a problem in which one component bound to another component  */}
          {/* <ComponentA name={name}/> */}

         {/*Solving problem of prop drilling using Context API */}
         {/* <Data.Provider value={name}>
          <Data1.Provider value={age}>
              <ComponentA />
          </Data1.Provider>
         </Data.Provider>
          */}


         {/* <UserContext /> */}
         {/* challenge */}
        {/* <UserProvider>
             <UpdateUser />
             <UserProfile />
            
        </UserProvider> */}

        {/* useReducer hook in react */}
        
        <h1>Count: {state.count}</h1>
        


     </section>
   
  )
}

export default App