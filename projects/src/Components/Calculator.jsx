import React, { useState } from 'react'
import "../style.css"

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');

    const clear = () => setInputValue("");
    const dispaly = (value) => setInputValue(inputValue + value);
    const calculate = () => setInputValue(eval(inputValue));

    

  return (
    <form className='calculator' name='calc'>
    <input type="text" className="value" value={inputValue} />

    <span className="num clear" onClick={() => setInputValue("")}>c</span>

    <span onClick={ () => dispaly('/')}>/</span>
    <span onClick={ () => dispaly('*')}>*</span>
    <span onClick={ () => dispaly('7')}>7</span>
    <span onClick={ () => dispaly('8')}>8</span>
    <span onClick={ () => dispaly('9')}>9</span>
    <span onClick={ () => dispaly('-')}>-</span>
    <span onClick={ () => dispaly('4')}>4</span>
    <span onClick={ () => dispaly('5')}>5</span>
    <span onClick={ () => dispaly('6')}>6</span>
    <span className='plus' onClick={ () => dispaly('+')}>
    +
    </span>

    <span onClick={ () => dispaly('1')}>1</span>
    <span onClick={ () => dispaly('2')}>2</span>
    <span onClick={ () => dispaly('3')}>3</span>
    <span onClick={ () => dispaly('0')}>0</span>
    <span onClick={ () => dispaly('00')}>00</span>
    <span onClick={ () => dispaly('.')}>.</span>
    <span className='num equal' onClick={ () => calculate()}>=</span>
  

    </form>
  )
}

export default Calculator