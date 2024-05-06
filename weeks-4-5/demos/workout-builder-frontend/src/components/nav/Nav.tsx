import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { commonFunctions } from '../../common-functions';
import axios from 'axios';
import './Nav.css';

function Nav() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    

    
    


  return (
    <nav className="nav-container">
        <ul className="nav-list">
            <li><Link to="/plans">View Plans</Link></li>
            <li><Link to="/new-plan">Create a New Plan</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/exercises">View All Exercises (Admin Only)</Link></li>
            <li><Link to="/new-exercise">Create A New Exercise (Admin Only)</Link></li>
        </ul>
    </nav>
  )
}

export default Nav
