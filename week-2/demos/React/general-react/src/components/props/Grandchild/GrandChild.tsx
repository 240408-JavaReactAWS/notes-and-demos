import React from 'react'

import './GrandChild.css'
import GreatGrandChild from '../GreatGrandChild/GreatGrandChild'

interface IGrandChildProps{
    nameValue:string,
    setNameValue: (nameValue: string) => void
}

function GrandChild(props: IGrandChildProps) {
  return (
    <div className='grandchild'>
      <h3>Hello from the Grandchild component!</h3>
      <h3>I also do not care about the name</h3>
      <GreatGrandChild
      nameValue={props.nameValue}
      setNameValue={props.setNameValue}
      ></GreatGrandChild>
    </div>
  )
}

export default GrandChild
