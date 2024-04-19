import React, { useContext } from 'react'
import { stringContext } from './ContextProvider'

function ContextConsumer2() {
  /*
    Inside of my consuming class I'll need to take in that context and set it to a variable
    */

    const stringContextReference = useContext(stringContext)
  return (
    <div>
      <h1>String value is: {stringContextReference}</h1>
    </div>
  )
}

export default ContextConsumer2
