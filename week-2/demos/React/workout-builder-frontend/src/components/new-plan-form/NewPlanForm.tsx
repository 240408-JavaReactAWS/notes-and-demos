import React, { useState } from 'react'
import { IExercise } from '../../models/IExercise'
import Exercise from '../exercise/Exercise';

function NewPlanForm() {

    /*

    Inside this component we want to create a form that allows us to update the list of plans to add a new plan

    We should have a list of exercises we want to add to the plan and we should be able to give it a name and then submit
    Additionally it should have a specific user associated with it, but for now we'll try to avoid that functionality

    */

    let exercises : IExercise[] = [
        {
            exerciseId: 1,
            name: 'Bench Press',
            bodyGroup: 'CHEST'
        },
        {
            exerciseId: 2,
            name: 'Dumbbell Hammer Curls',
            bodyGroup: 'BICEPS'
        },
        {
            exerciseId: 3,
            name: 'RDLs',
            bodyGroup: 'HAMSTRINGS'
        },
        {
            exerciseId: 4,
            name: "Dumbbell Overhead Triceps Extensions",
            bodyGroup: "TRICEPS"
        },
        {
            exerciseId: 5,
            name: "Weighted Calf Raises",
            bodyGroup: "CALVES"
        }
    ]

    let addedExercises : IExercise[] = []

    // Let's get some practice with the useState Hook
    // GOAL: Click on an exercise in the list of all exercises and it should be added to the list of added exercises so we can create
    // a new plan
    const [allExercises, setAllExercises] = useState(exercises);
    // Recall that this is setting up a variable called allExercises that will hold the current state of the component and that this creates
    // the function setAllExercises which allows us to update that state itself
    const [newExercises, setNewExercises] = useState(addedExercises);



  return (
    <>
        <h1>New Plan Form!</h1>

        <form>
            {/* Input field for name */}
            <label>Name: <input type='text' name='name'/></label>

            {/* We'll need a way to select the proper exercises */}
            <h2>All Exercises</h2>
            {
                allExercises.map((exercise) => {
                    return (
                        <Exercise 
                        exercise={exercise} 
                        sourceList={allExercises}
                        setSourceExerciseList={setAllExercises}
                        destList={newExercises}
                        setDesitnationExerciseList={setNewExercises}
                        ></Exercise>
                    )
                })
            }

            <h2>Added Exercises</h2>

            {
                newExercises.map((exercise) => {
                    return (
                        <Exercise 
                        exercise={exercise} 
                        sourceList={newExercises}
                        setSourceExerciseList={setNewExercises}
                        destList={allExercises}
                        setDesitnationExerciseList={setAllExercises}
                        ></Exercise>
                    )
                })
            }

            {/* We'll need to have a submit button */}
            <button>Create new plan!</button>
        </form>
      
    </>
  )
}

export default NewPlanForm
