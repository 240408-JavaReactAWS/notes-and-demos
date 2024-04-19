import React, { createContext } from 'react'
import ContextConsumer1 from './ContextConsumer1'
import ContextConsumer2 from './ContextConsumer2'

/*
We just saw the problem with prop drilling and the headaches it can cause from passing not needed variables

So let's look at another solution and this is called creating a context
We can create a context which will act as a store for data and we can pass it to the components we want specifically
*/

export const stringContext = createContext("Default String")
// What I'll do next is create 2 components that will consume this data that is not passed through props

interface RandomInterface{
    value: number,
    username: string,
    listOfStuff: []
}

export const uniqueContext = createContext<RandomInterface>(
    {
    value: 0,
    username: '',
    listOfStuff: []
})

function ContextProvider() {
  return (
    <div>
        <stringContext.Provider value={"Initial String"}>
            <ContextConsumer1></ContextConsumer1>
            <ContextConsumer2></ContextConsumer2>
        </stringContext.Provider>

        <stringContext.Provider value={"Secondary String"}>
            <ContextConsumer1></ContextConsumer1>
            <ContextConsumer2></ContextConsumer2>
        </stringContext.Provider>
      
    </div>
  )
}

export default ContextProvider
