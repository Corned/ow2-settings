import { useState, useRef, useEffect } from "react"
import { Option } from "./Option"

import "./Slider.css"

function OptionSlider(props) {
  const [ value, setValue ] = useState(props.default)
  const rangeInputRef = useRef(null)

  useEffect(() => {
    rangeInputRef.current.style.setProperty("--webkitProgressPercent", `${(props.default-props.min)/(props.max-props.min)*100}%`)
  }, [ ])

  return (
    <Option title={props.title}>
      <div className="option-slider">
        <p 
          className="option-slider__value"
        >
          { value.toFixed(props.precision || 0) }
        </p>
        <input
          {...props}
          ref={rangeInputRef}
          type="range"
          value={value}
          onChange={(event) => {
            const { max, value: newValue } = event.target
            event.target.style.setProperty("--webkitProgressPercent", `${(newValue-props.min)/(max-props.min)*100}%`)
            setValue(+newValue)
          }}
        />
      </div>
      </Option>
  )
}

export default OptionSlider