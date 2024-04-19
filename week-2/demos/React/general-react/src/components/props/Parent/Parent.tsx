import React, { useState } from 'react'
import './Parent.css'
import Child from '../Child/Child'

function Parent() {

  let parentValue = 51;

  /*
  Let's talk a little bit about state. State referes to the values or current state of the component
  React will monitor the state and will rerender based off of changes to that state

  To get started we'll use the useState hook which allows us to create a variable state and create a mutator to update that state
  */
  const [nameValue, setNameValue] = useState('Bryan');

  // If I want to update the name we'll use the setNameValue function
  let toggleName = () =>{
    setNameValue(nameValue === "Bryan" ? "John" : "Bryan")
    /*
    if (nameValue === Bryan){
      return John
    } else{
      return Bryan
    }
    */
  }
  // When we change the value of the state variable we'll rerender any components that were reliant on that field

  let increment = ()=>{
    parentValue++ // Post-Fix operator ==> parentValue = parentValue + 1
    console.log(parentValue)
  }
  /*
  Why does this function not rerender the page? This updates a normal variable, not something stored in state, so React will not watch the value
  of parentValue and rerender on changes
  */


  return (
    <div className='parent'>
      {/* This is a functional component, we use to render custom things to the screen
        Inside of the return statement is TSX which is a combo of HTML and JS/TS so we can JS expressions here to dynamically render things */}
        <h1>Hello from the Parent Component!</h1>
        <h1>The name stored in state is: {nameValue}</h1>
        <button onClick={toggleName}>Toggle Name</button>
        <button onClick={increment}>Increment Value</button>

        {/* What if there is a situation where I need to pass information from a parent component to a child component?
            Let's say I'm using an array to dynamically create components, each component will need the appropriate info to get started 
            
            Why is this mad now? Well the child component is asking for information in the form of props but we haven't yet provided it
            
            What happens when the child component needs to update the state of the parent component?
            Typically in React, data flows one way: parent -> child
            We have a function that allows us to update the state variable, why don't we pass that function to the child and give it access?
            */}
        <Child 
        value={parentValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        // toggleNameFunction={toggleName}
        ></Child>
    </div>
  )
}

export default Parent
