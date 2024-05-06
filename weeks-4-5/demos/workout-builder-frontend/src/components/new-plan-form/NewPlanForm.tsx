import React, { SyntheticEvent, useEffect, useState } from 'react'
import { IPlan } from '../../models/IPlan'
import { IUser } from '../../models/IUser'
import { IExercise } from '../../models/IExercise'
import './NewPlanForm.css'
import { redirect, useNavigate } from 'react-router-dom'
import ExerciseFormIcon from '../exercise-form-icon/ExerciseFormIcon'
import axios from 'axios'
import { commonFunctions } from '../../common-functions'





function NewPlanForm() {

     

    const [allExercises, setAllExercises] = useState<IExercise[]>([]);
    const [addedExercises, setAddedExercises] = useState<IExercise[]>([]);
    const [formName, setFormName]  = useState('')
    const navigate = useNavigate();

    // fetch all exercises
    let fetchAllExercises = async () => {
        try {
            let res = await axios.get('http://ec2-54-221-99-230.compute-1.amazonaws.com/exercises', { 
                withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
            });
            setAllExercises(res.data.sort((a: IExercise, b: IExercise) => {
                return a.name.localeCompare(b.name)
            }));
        } catch (error) {
            console.log("Error fetching exercises");
        }
    }

    useEffect(() => {
        let asyncCall = async () => {
            // let isValidSession = await commonFunctions.validateSession();
            let isValidSession = (!!localStorage.getItem('username'))
            if (!isValidSession) {
                navigate('/login');
            } else {
            await fetchAllExercises();
            }
        }
        asyncCall();
    },[])




    let submitNewForm = async (e: SyntheticEvent) => {
        e.preventDefault()
        let newPlan: IPlan = {
            planId: 0,
            name: formName,
            exercises: addedExercises
        }

        // axios request to create a new plan
        try {
            let res = await axios.post('http://ec2-54-221-99-230.compute-1.amazonaws.com/plans', newPlan, { 
                withCredentials: true , headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
            });
            if (res.status === 201) {
                console.log("Plan created successfully");
                navigate('/plans')
            }
        } catch (error) {
            console.log("Error creating plan");
            alert("Error creating plan");
        }
         
    }

    let updateFormName = (e: SyntheticEvent) => {
        setFormName((e.target as HTMLInputElement).value)
    }




  return (<>
  <div className='new-plan-form-container'>
    <h1>New Exercise Form</h1>
    <form onSubmit={submitNewForm}>
    {/* <label>Name:
        <input type="text" name="name" onChange={updateFormName}/>
        
    </label> */}
    <label>Name:
        <input type="text" name="name" onChange={updateFormName} required/>
    </label>
    <div className='parent'>
    <div className="all-exercises">
        <h2>All Exercises</h2>
        {
            allExercises.length == 0 ? 
            <h3>No Exercises Left!</h3>
            :
            allExercises.map((exercise) => {
                return (<ExerciseFormIcon 
                    exercise={exercise} 
                    key={"exercise-"+exercise.exerciseId}
                    currentExercises={allExercises}
                    setCurrentExercises={setAllExercises}
                    otherExercises={addedExercises}
                    setOtherExercises={setAddedExercises}
                    ></ExerciseFormIcon>)
            })
        }
      
    </div>
    <div className="new-plan">
        <h2>Exercises to be added</h2>
    {
            addedExercises.length == 0 ?
            <h3 >Click on some exercises to add them to your plan!</h3>
            :
            addedExercises.map((exercise) => {
                return (<ExerciseFormIcon 
                    exercise={exercise} 
                    key={"exercise-"+exercise.exerciseId}
                    currentExercises={addedExercises}
                    setCurrentExercises={setAddedExercises}
                    otherExercises={allExercises}
                    setOtherExercises={setAllExercises}
                    ></ExerciseFormIcon >)
            })
        }
    </div>
    </div>
        <button type='submit' className='submit-button'>Create New Plan!</button>
    </form>
    </div>
    </>
  )
}

export default NewPlanForm
