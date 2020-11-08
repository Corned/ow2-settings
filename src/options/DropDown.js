import { useState } from "react"
import { Option } from "./Option"

import chevronUp from "../assets/images/chevron-up.png"
import chevronDown from "../assets/images/chevron-down.png"
import "./DropDown.css"

function OptionDropDown(props) {
  const [ value, setValue ] = useState(props.default || 0)
  const [ open, setOpen ] = useState(false)

  return (
    <Option title={props.title}>
      <div className="dropdownmenu">
        
        <button className="dropdownmenu--toggle">
          <p className="dropdownmenu--value">{props.options[value]}</p>
          <img
            className="dropdownmenu--icon"
            src={ open ? chevronUp : chevronDown }
          />
        </button>

      </div>
    </Option>
  )
}

export default OptionDropDown