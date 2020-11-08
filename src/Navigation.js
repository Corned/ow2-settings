import { useLocation, Link } from "react-router-dom"
import classnames from "classnames"

import "./Navigation.css"

function NavButton({ text, selected }) {
  const classes = classnames("nav-button", selected && "selected")
  return (
    <Link to={`/${text}`}>
      <button
        className={classes}>
        <p>{ text }</p>
      </button>
    </Link>
  )
}

function Navigation() {
  const location = useLocation().pathname.substr(1)
  const buttons = [ 
    "video", "sound", "controls", 
    "gameplay", "social", "crossplay" 
  ]
  return (
    <nav>
      { 
        buttons.map(v => (
          <NavButton
            text={v}
            selected={v === location}
          />
        ))
      }
    </nav>
  )
}

export default Navigation
