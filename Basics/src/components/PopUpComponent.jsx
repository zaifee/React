import React from 'react'
import {createPortal} from 'react-dom'


const PopUpComponent = ({copy}) => {
  return createPortal(
    <section> 
        {copy && (
            <div style={{position:'absolute', bottom: '3rem'}}>
                Copied to Clipboard
            </div>
        )}
        
    </section>,
    document.querySelector('#popup-content')
  )
}

export default PopUpComponent