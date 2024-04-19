import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
            <ul>
                <li><Link to="/">Props/State</Link></li>
                <li><Link to="context">UseContext</Link></li>
                <li><Link to="events">Events</Link></li>
                <li><Link to="login">Login with axios/fetch</Link></li>
                <li><Link to="admin">Admin Page</Link></li>
            </ul>
        </nav>
  )
}

export default Nav
