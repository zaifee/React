import React from 'react'
import '../style.css'
import { useState } from 'react'

const ToggleBackgroundColor = () => {

  const [backGroundColor, setBackGrounColor] = useState('white');
  const [textColor, setTextColor] = useState('#1b1b1b');
  const [buttonStyle, setButtonStyle] = useState('white');

  const handleClick = () => {
    setBackGrounColor(backGroundColor === "white" ? "#1b1b1b": "white");
    setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
    setButtonStyle(backGroundColor === 'white' ? '#1b1b1b' : 'white')
  }

  return (
    <div style={{ backgroundColor: backGroundColor, color: textColor }}>
      <button onClick={handleClick}
     style={{
       buttonStyle,
       color: textColor,
       border: `2px solid ${textColor}` }}
       
       >
        {backGroundColor == '#1b1b1b' ? "Black Theme" : "White Theme"}


       </button>

       <section className="content">
         <h1>Welcome to A <br />
          Real World...
          </h1>
       </section>
    </div>
  )
}

export default ToggleBackgroundColor