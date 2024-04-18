import React from 'react'
import './TTAAL.css';
import Fact from '../fact/Fact';

function TTAAL() {

    const facts = [
        {
            id: 1,
            fact: "I've competed internationally for the US Karate National Team",
            isTrue: "truth"
        },
        {
            id: 2,
            fact: "I once did a semester at Harvard University",
            isTrue: "truth"
        },
        {
            id:3,
            fact: "I drink 2 cups of coffee every morning before training",
            isTrue: "lie"
        }
    ]


  return (
    <main> 
        <h3>Two Truths and a Lie</h3>

        <table>
            {/* Right now we have 3 repeated block of code, it may make more sense to turn this into a component so we can render dynamically 
            
                Problem right now is that we have 3 of the same fact, we want 3 different facts to render
                We created an array that holds all of our facts but we want to render each on the page slightly differently

                2 things to do, first we'll use a map to create an element for each item inside of the array

                Now we need to find a way to pass the information to the component
            */}

            {
                /* All my JS/TS expressions go between {}, this is known as DATA BINDING*/
                facts.map( (fact) => {
                    // Inside of here we need to create a return for this function which includes JSX
                    // Whenever you use map your child components should have some key value to uniquely identify them, this allows React to keep 
                    // track of them more effectively and prevent unexpected behavior
                    return <Fact 
                    id={fact.id} 
                    fact={fact.fact} 
                    isTrue={fact.isTrue} 
                    key={"fact-" + fact.id}
                    ></Fact>
                })
            }
            
        </table>
    </main>
  )
}

export default TTAAL
