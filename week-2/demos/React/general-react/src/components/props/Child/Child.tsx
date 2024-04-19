import React from 'react'
import './Child.css'
import GrandChild from '../Grandchild/GrandChild'
/*
If we need information passed down from the parent component to the child component, we will specify what we want inside of the child component

Right now it doesn't really make sense to use an interface since there's only one property we're setting
*/

interface IChildProps{
    value:number,
    nameValue:string,
    setNameValue: (nameValue: string) => void
    // toggleNameFunction: () => void
}

function Child(props:IChildProps) {

    let toggleName = () =>{
        props.setNameValue(props.nameValue === "Bryan" ? "John" : "Bryan")
        /*
        if (nameValue === Bryan){
          return John
        } else{
          return Bryan
        }
        */
      }


  return (
    <div className='child'>
      <h2>Hello from the child component!</h2>
      <h2>I received this value as a prop: {props.value}</h2>
      {/* <h2>I received the name: {props.nameValue}</h2> */}
      <h2>I no longer care about the name in the child component</h2>
      {/* <button onClick={toggleName}>Toggle Name</button> */}
      <GrandChild
      nameValue={props.nameValue}
      setNameValue={props.setNameValue}
      ></GrandChild>
    </div>
  )
}

export default Child
