import React from 'react'
import { IExercise } from '../../models/IExercise'
import './ExerciseFormIcon.css'

interface IExerciseProps{
    exercise: IExercise
    currentExercises: IExercise[],
    setCurrentExercises: (exercises: IExercise[]) => void
    otherExercises: IExercise[],
    setOtherExercises: (exercises: IExercise[]) => void
    
}

function ExerciseFormIcon(props: IExerciseProps) {
    
    let togglePlan = () => {
        props.setOtherExercises(
            [...props.otherExercises, props.exercise].sort((a: IExercise, b: IExercise) => {
                return a.name.localeCompare(b.name)
            })
        )
        props.setCurrentExercises(
            props.currentExercises.filter((exercise) => {
                if (exercise.exerciseId == props.exercise.exerciseId){
                    return false;
                } else{
                    return true
                }
            })
        )

    }



  return (
    <div className='exercise' onClick={togglePlan}>
      <p>{props.exercise.name}</p>
      <p>Body Group: {props.exercise.bodyGroup}</p>
    </div>
  )
}

export default ExerciseFormIcon
