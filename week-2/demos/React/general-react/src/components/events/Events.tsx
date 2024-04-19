import React, { SyntheticEvent, useState } from 'react'

function Events() {

    let doSomething = () => {
        console.log("Did something!")
    }

    let storedString = ''
    const [storedStringState, setStoredStringState] = useState('')

    let changeString = (e : SyntheticEvent) => {
        // Cool we're getting called whenever there is a change, but how do we in the input
        // console.log("Text field was changed!")

        // How did we get the info from the box when we did basic JS?
        // The event object encapsulated the event including information like where the event took place, what kind of event, what element 
        // targeted etc

        /*
        Synthetic Events are React's representation of actual event that happen. What is the need for this? Why does this exist?
        React basically uses for effiency and pooling of events to make things a little more smooth under the hood

        We cannot directly call e.target.value because the target doesn't always have a value property. Inputs naturally do but other things
        may not (since we can't input data in them)
        How do we fix this? We need to cast.

        TS -> Strong and Static Typing. We can cast between types if there is a possible conversion
        */
        storedString = (e.target as HTMLInputElement).value
        console.log(storedString)
        setStoredStringState((e.target as HTMLInputElement).value)
        
    }

  return (
    <div>
      <button onClick={doSomething}>Click me to do something!</button>
      {/* This is the simplest event handling, we're referencing a method that getcalled whenever a specific event happens */}
        <br />
        <br />
        <br />
      <label>
        Text Field: <input id='text-field' name='text-field' type='text' onChange={changeString}></input>
      </label>
      {/* How do we gather input for this input box? */}

      <h2>Stored String Variable: {storedString}</h2>
      <h2>Stored String Variable (Held by state): {storedStringState}</h2>
    </div>
  )
}

export default Events
