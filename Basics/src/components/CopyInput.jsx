import React, { useState } from 'react'
import PopUpComponent from './PopUpComponent';

const CopyInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [copy, setCopy] = useState(false);

    const handleCopy = () => {

        navigator.clipboard.writeText(inputValue).then(() => {
             setCopy(true);
             setTimeout(() => setCopy(false), 6000);
        });
    };



  return (
    <div>

        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='copy value'/>
        <button onClick={handleCopy}>Copy</button>
        <PopUpComponent copy={copy} />

    </div>
  )
}

export default CopyInput