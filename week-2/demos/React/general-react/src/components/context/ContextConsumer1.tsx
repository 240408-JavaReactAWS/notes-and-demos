import React, { useContext } from 'react'
import { stringContext } from './ContextProvider'

function ContextConsumer1() {

    /*
    Inside of my consuming class I'll need to take in that context and set it to a variable

    The useContext hook allows us to read in the information from the nearest provider and act upon that information accordingly
    Here, we're only reading the info, if we wanted to change it things get more complicated
    */

    const stringContextReference = useContext(stringContext)
    
  return (
    <div>
      <h1>String value is: {stringContextReference}</h1>
    </div>
  )
}

export default ContextConsumer1
