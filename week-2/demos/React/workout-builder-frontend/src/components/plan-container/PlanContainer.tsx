import React, { useState } from 'react'
import { IPlan } from '../../models/IPlan'
import Plan from '../plan/Plan'

function PlanContainer() {
    /*
    We'll use this component to store the info for the page that shows off a user's plans
    We'll make child components called Plans and pass props to them to initialize their data

    Inside of here let's start with what we had before and make an array of plans and create a child component ready to accept them
    */

    // NOTE: Today we won't get this info from the backend but normally that's how we'd get this so we don't need to hardcode
    let hardcodedPlans :IPlan[] = [
        {
            planId: 1,
            name: 'Upper Body',
            owner: {
                userId: 1,
                username: 'bryanserfozo',
                password: 'password',
                role: 'USER'
            },
            exercises: [
                {
                    exerciseId: 1,
                    name: 'Bench Press',
                    bodyGroup: 'CHEST'
                },
                {
                    exerciseId: 2,
                    name: 'Dumbbell Hammer Curls',
                    bodyGroup: 'BICEPS'
                }
            ]
        },
        {
            planId: 2,
            name: 'Legs',
            owner: {
                userId: 1,
                username: 'bryanserfozo',
                password: 'password',
                role: 'USER'
            },
            exercises: [
                {
                    exerciseId: 3,
                    name: 'RDLs',
                    bodyGroup: 'HAMSTRINGS'
                }
            ]
        },
        {
            planId: 3,
            name: 'Legs Again',
            owner: {
                userId: 2,
                username: 'kaitlyn',
                password: 'password',
                role: 'USER'
            },
            exercises: [
                {
                    exerciseId: 3,
                    name: 'RDLs',
                    bodyGroup: 'HAMSTRINGS'
                }
            ]
        }

    ]

    // Use the useState hook for a functional component
    // We follow the following syntax to start and then pass the values as props as needed
    const [plans, setPlans] = useState(hardcodedPlans)
    // Destructuring argument, basically sets plans the first value of the useState hook and setPlans as the second value
    // Plans is the state, and setPlans allows us to update that state from a child component




  return (
    <div >
        <h1>Your Plans!</h1>
        {/* Recall earlier that we wanted to pass this info to the child component so we could render dynamically
            We also made use of the map function on the array to create the elements as needed */}

            {
                plans.map( (plan) =>{

                    if(plan.owner.userId === 1){
                        return (<Plan 
                            plan={plan} 
                            plans={plans}
                            setPlans={setPlans}
                            key={"plan-"+plan.planId}
                            ></Plan>)
                    }

                    
                })
            }

    </div>
  )
}

export default PlanContainer
