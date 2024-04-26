import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IPlan } from '../../models/IPlan';
import { commonFunctions } from '../../common-functions';
import ExerciseIcon from '../exercise-icon/ExerciseIcon';
import './WorkoutPlan.css';


function WorkoutPlan() {

    const {id} = useParams();

    const navigate = useNavigate();

    const [workoutPlan, setWorkoutPlan] = useState<IPlan | null>(null);

    useEffect(() => {
        let asyncFunc = async () => {
            try {
                let response = await axios.get(`http://localhost:8080/plans/${id}`, { withCredentials: true });
                console.log(response.data);
                setWorkoutPlan(response.data);
            } catch (error: any) {
                let status = error.response.status;
                if (status === 401) {
                    console.log("Session is invalid");
                    navigate('/login');
                } else {
                    console.log("Error fetching plan");
                    navigate('/plans');
                }
            }
        };

        asyncFunc();
    }, []);

    // function to delete plan
    let deletePlan = async () => {
        try {
            let response = await axios.delete(`http://localhost:8080/plans/${id}`, { withCredentials: true });
            if (response.status === 200) {
                console.log("Plan deleted");
                navigate('/plans');
            }
        } catch (error) {
            console.log("Error deleting plan");
            alert("Error deleting plan");
        }
    }
    

    let navigateToUpdateForm = () => {
        navigate(`/update/${id}`);
    }


  return (
    <div className='workout-plan-container'>
        <h1>{workoutPlan?.name}</h1>
      {
        workoutPlan?.exercises.map((exercise) => {
            return <>
                <ExerciseIcon {...exercise}></ExerciseIcon>
            </>
            
        })
      }

      <button onClick={navigateToUpdateForm}>Update Plan</button>
      <button onClick={deletePlan}>Delete Plan</button>
    </div>
  )
}

export default WorkoutPlan
