import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav>
        <ul>
            {/* Anytime you use HREF it will navigate to a different page and RELOAD the page, this could break desired functionality so we'll
                use the react router dom to change "pages" without reloading the whole thing
            
            */}
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/ttaal">TTAAL</Link></li>
            <li><a href="https://www.google.com">Questions?</a></li>
        </ul>
    </nav>
  )
}

export default Nav
