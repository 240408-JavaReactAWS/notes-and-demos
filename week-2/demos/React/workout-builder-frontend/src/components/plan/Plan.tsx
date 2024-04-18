import React from 'react'
import { IPlan } from '../../models/IPlan'
import "./Plan.css"

interface IPlanProps{
    plan: IPlan,
    plans: IPlan[],
    setPlans: (plans: IPlan[]) => void
}

function Plan(props: IPlanProps) {

    let deletePlan = () => {
        // Any time we click the delete button we want to remove the associated plan from the list of plans
        // We now have access to the parent component's state and can affect it by using the setPlans method
        // We'll need the current list of plans too


        // Parent's arry => prop.plans
        // We set the value of the parent array using props.setPlans
        // Our current plan is props.plan so we need to filter for it and remove it

        props.setPlans( props.plans.filter ((plan) =>{
            // For filter if we return false we do not pass through the filter so we get removed
            if (plan.planId == props.plan.planId){
                return false;
            } else{
                return true;
            }
        }))
    }




  return (
    <div className='plan'>
      <h2>{props.plan.name}</h2>
      {/* Maybe let's just map our exercises and create divs for them */}
      {props.plan.exercises.map((exercise) => {
        return(
            <div key={"exercise-plan-container-"+ props.plan.planId}> 
                <p>{exercise.name}</p>
                <p>Body Group: {exercise.bodyGroup}</p>
            </div>
        )
      })}

      {/* To create some event handling inside of react we'll use the onWhatever attribute and set it equal to a function that we want to call
        We'll talk about synthetic events later but for now we're trying to do a simple click event */}
      <button onClick={deletePlan}>Delete This Plan!</button>
    </div>
  )
}

export default Plan
