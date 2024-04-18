// This will be our first React Component
// We'll start by making a class component

// Class component (representation of HTML/TS that is stored in a class, we'll use the render method from the class to add the info to the page)

import React from 'react';
import './Header.css';

class Header extends React.Component{
    // This is just like a normal TS class, it can have a constructor, state, etc
    // The most important thing it needs is a render method
    // Render controls what this component looks like on the page and is made up of JSX/TSX.

    render() {
        return(
            <header>
                <h1>Bryan Serfozo</h1>
            </header>
        )
    }
}

export default Header;
// This line allows us to use this Component in other components