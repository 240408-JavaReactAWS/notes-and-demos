import React from 'react'
import { IExercise } from '../../models/IExercise'
import './ExerciseIcon.css'

function ExerciseIcon(props: IExercise) {
  return (
    <div className='exercise' >
      <p>{props.name}</p>
      <p>Body Group: {props.bodyGroup}</p>
    </div>
  )
}

export default ExerciseIcon
