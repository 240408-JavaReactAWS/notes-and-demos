import React from 'react'
import { IExercise } from '../../models/IExercise'

interface IExerciseProps{
    exercise: IExercise,
    sourceList: IExercise[],
    setSourceExerciseList: (currentExercises: IExercise[]) => void,
    destList: IExercise[],
    setDesitnationExerciseList: (otherExercises: IExercise[]) => void
}

function Exercise(props:IExerciseProps) {

    let toggleList = () =>{
        // We need to remove this exercise from the source list
        props.setSourceExerciseList(props.sourceList.filter((exerciseToBeRemoved) => {
            if (exerciseToBeRemoved.exerciseId == props.exercise.exerciseId){
                return false; //This removes it from the source list
            } else {
                return true;
            }
        }))

        // We need to add this exercise to the destination list
        props.setDesitnationExerciseList([...props.destList, props.exercise])
    }


  return (
    <div onClick={toggleList}>
        <p>{props.exercise.name}</p>
        <p>{props.exercise.bodyGroup}</p>
    </div>
  )
}

export default Exercise
