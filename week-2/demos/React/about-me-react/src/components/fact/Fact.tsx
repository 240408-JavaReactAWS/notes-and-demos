import React from 'react'

/*
Inside of here I need to create a way to receive the information from the parent component, TTAAL. SO I will create an interface that describes
the shape of the data I plan to receive AND I will mark it as the props parameter

Props -> Properties passed from parent components to child components in react, the data flow is one-way meaning parents only send props to 
children. Props are generally used for initialization info or for managing state

*/

interface IFactProps{
    id: number,
    fact:string,
    isTrue: string
}

function Fact(props: IFactProps) {
  return (
    <tr className={props.isTrue}>
            <th>{props.id}</th>
            <td>{props.fact}</td>
    </tr>
  )
}

export default Fact
