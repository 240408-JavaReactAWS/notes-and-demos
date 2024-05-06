import React, { SyntheticEvent, useEffect, useState } from 'react'
import { IExercise } from '../../models/IExercise';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { commonFunctions } from '../../common-functions';
import { IPlan } from '../../models/IPlan';
import ExerciseFormIcon from '../exercise-form-icon/ExerciseFormIcon';
import './UpdatePlanForm.css'

function UpdatePlanForm() {
    const {id} = useParams();
    const [allExercises, setAllExercises] = useState<IExercise[]>([]);
    const [addedExercises, setAddedExercises] = useState<IExercise[]>([]);
    const [formName, setFormName]  = useState('')
    const navigate = useNavigate();

    const getCurrentPlan = async () => {
        try {
            const res = await axios.get(`http://ec2-54-221-99-230.compute-1.amazonaws.com/plans/${id}`, { 
                withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
            });
            const currentPlan: IPlan = res.data;
            setFormName(currentPlan.name);
            setAddedExercises(currentPlan.exercises);
        } catch (error : any) {
            let status = error.response.status;
            if (status === 401) {
                console.log("Session is invalid");
                navigate('/login');
            } else if (status === 403){
                console.log("Unauthorized access");
                navigate('/plans');
            }
            console.log("Error getting current plan");
            
            
        }
    };

    const fetchAllExercises = async () => {
        try {
            const res = await axios.get('http://ec2-54-221-99-230.compute-1.amazonaws.com/exercises', { 
                withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
             });
            const allExercises: IExercise[] = res.data;
            // console.log(allExercises);
            // console.log(addedExercises);
            const filteredExercises = allExercises.filter(exercise => {
                for (let addedExercise of addedExercises){
                    if (exercise.exerciseId === addedExercise.exerciseId){
                        return false;
                    }
                }
                return true;
        });
            setAllExercises(filteredExercises);
        } catch (error) {
            console.log("Error fetching all exercises");
            alert("Error fetching all exercises");
        }
    };

    useEffect(() => {
        let asyncCall = async () => {
            // let isValidSession = await commonFunctions.validateSession();
            let isValidSession = (!!localStorage.getItem('username'))
            if (!isValidSession) {
                navigate('/login');
            } 
            await getCurrentPlan();
            
        };
        asyncCall();
    }, []);

    useEffect(() => {
        let asyncCall = async () => {
            await fetchAllExercises();
        };
        asyncCall();
    }, [addedExercises]);




    let submitNewForm = async (e: SyntheticEvent) => {
        e.preventDefault()
        let newPlan: IPlan = {
            planId: id ? parseInt(id) : 0,
            name: formName,
            exercises: addedExercises
        }

        // axios request to create a new plan
        try {
            let res = await axios.put('http://ec2-54-221-99-230.compute-1.amazonaws.com/plans', newPlan, { 
                withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
             });
            if (res.status === 200) {
                console.log("Plan updated successfully");
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
  <div className='true-parent'>
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

export default UpdatePlanForm
