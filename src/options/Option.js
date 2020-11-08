import { useState } from "react"
import "./Option.css"

function Option({ title, children }) {
  return (
    <div className="option">
      <div className="option__title">
        <p>{title}</p>
      </div>
      <div className="option__input">
        { children }
      </div>
    </div>
  )
}

function Group({ title, children }) {
  return (
    <div className="option-group">
      <h2 className="option-group__title">{ title }</h2>
      { children }
    </div>
  )
}

function Intend({ children }) {
  return (
    <div className="option-intend">
      { children }
    </div>
  )
}

function Collapse({ title, children }) {
  const [ open, setOpen ] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <div className="option-collapse">
      <div className="option-collapse__controls">
        <div className="option option-collapse__title">
          <p className="option__title">{title}</p>
        </div>
        <div 
          className="option option-collapse__toggle"
          onClick={toggle}
        >
          <p className="option__title">{open ? "-" : "+"}</p>
        </div>
      </div>

      { open && (
        <div className="option-collapse__container">
          { children }
        </div>
      )}
    </div>
  )
}

export { Option, Group, Intend, Collapse }