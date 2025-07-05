import React from 'react'
import Counter from './Components/Counter'
import ToDo from './Components/ToDo'
import MeelAPI from './Components/MeelAPI'
import Calculator from './Components/Calculator'
import ToggleBackgroundColor from './Components/ToggleBackgroundColor'
import HiddenSearchBar from './Components/HiddenSearchBar'
import Testimonial from './Components/Testimonial'
import { accordionData } from '../utils/content'
import Accordian from './Components/Accordian'

const App = () => {
  return (
    <div>
      {/* <Counter /> proj1 */}
      {/* <ToDo /> */}
      {/* <MeelAPI /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonial /> */}
      <div className="accordion">
        {accordionData.map(({title, content}) => (
          <Accordian title={title} content={content}/>
        ))}
      </div>
    </div>
  )
}

export default App