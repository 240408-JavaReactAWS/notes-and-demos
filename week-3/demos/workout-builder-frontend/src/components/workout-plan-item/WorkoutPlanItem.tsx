import React from 'react'
import { IPlan } from '../../models/IPlan'
import './WorkoutPlanItem.css'
import { IExercise } from '../../models/IExercise'
import { useNavigate } from 'react-router-dom'

function WorkoutPlanItem(props: IPlan) {

    const navigate = useNavigate();

    // write a function that takes in the list of exercises from props and returns the bodyGroup field with the most entries
    let bodyGroup = () => {
        let bodyGroups: { [key: string]: number } = {};
        props.exercises.forEach((exercise) => {
            if (exercise.bodyGroup in bodyGroups) {
                bodyGroups[exercise.bodyGroup] += 1
            } else {
                bodyGroups[exercise.bodyGroup] = 1
            }
        })
        let max = 0
        let maxBodyGroup = ''
        for (let key in bodyGroups) {
            if (bodyGroups[key] > max) {
                max = bodyGroups[key]
                maxBodyGroup = key
            }
        }
        return maxBodyGroup
    
    }

    let navigateToPlan = () => {
        console.log("Navigating to plan " + props.planId);
        navigate("/plans/" + props.planId);
    }

    return (
        <div className='workout-plan-icon' onClick={navigateToPlan}>
            <h2>{props.name}</h2>
            <h3>{"Focus: " + bodyGroup()}</h3>
        </div>
    )
}

export default WorkoutPlanItem
