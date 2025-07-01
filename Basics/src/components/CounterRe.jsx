import { useReducer, useState } from "react";
import { counterReducer, initalState } from "../../../UserReducer";
const CounterRe = () => {

    const [state, dispatch] = useReducer(counterReducer, initalState)
    const [inputValue, setInput] = useState();

    const handleIncrement = () =>  dispatch({type: 'increment'});
    const handleDecrement = () => dispatch({type: 'decrement'})

    const handleIncrementByAmount = () => {
        dispatch({type: 'incrementByAmount', payload: Number(inputValue)})
        setInput(0);
    }
    const handleDecrementByAmount = () => {
        dispatch({type: 'decrementByAmount', payload: Number(inputValue)});
        setInput(0);
    }
    



    return <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <div>
            <input type="text" value={inputValue} onChange={e => setInput(e.target.value)} placeholder="Enter value by which you have to incrment" />
            <button onClick={handleIncrementByAmount}>Incrment By Amount</button>
            <button onClick={handleDecrementByAmount}>Decrement By Amount</button>
        </div>
        
    </div>
}

export default CounterRe;