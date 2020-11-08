import { useState } from "react"

import { Option } from "./Option"

import chevronLeft from "../assets/images/chevron-left.png"
import chevronRight from "../assets/images/chevron-right.png"
import "./Carousel.css"

function OptionCarousel(props) {
  const [ value, setValue ] = useState(props.default || 0)
  
  const next = () => {
    let newValue = value + 1
    if (newValue >= props.options.length) {
      newValue = 0
    }

    setValue(newValue)
  }

  const previous = () => {
    let newValue = value - 1
    if (newValue < 0) {
      newValue = props.options.length - 1
    }

    setValue(newValue)
  }

  return (
    <Option title={props.title}>
      <div className="option-carousel">
        <button 
          className="option-carousel__button" 
          onClick={previous}
        >
          <img src={chevronLeft}/>
        </button>
        <p
          className="option-carousel__value"
        >
          { props.options[value] }
        </p>
        <button
          className="option-carousel__button" 
          onClick={next}
        >
          <img src={chevronRight}/>
        </button>
      </div>
    </Option>
  )
}

export default OptionCarousel