import React, { useContext } from 'react'
import './GreatGrandChild.css'
import { globalState } from '../../../globalStore'
import { hiddenValueContext } from '../../../App'

interface IGreatGrandChildProps{
    nameValue: string,
    setNameValue: (nameValue: string) => void
}

/*
To get the props down here we had to perform something called prop drilling (passing props down through child components that don't them until
    we get to the one that does). This makes our application needlessly complex so we need to find a way around it
*/

function GreatGrandChild(props: IGreatGrandChildProps) {

  const hiddenValueReference = useContext(hiddenValueContext)


  return (
    <div className='greatgrandchild'>
      <h4>Hello from the great grand child</h4>
      <h4>I care about the name value, how do I get it?</h4>
      <h4>I now know the name, it is {props.nameValue}</h4>
      <h4>Let's pull the name from the global state: {globalState.globalNameValue}</h4>
      <h4>The hidden value is {hiddenValueReference}</h4>
    </div>
  )
}

export default GreatGrandChild
