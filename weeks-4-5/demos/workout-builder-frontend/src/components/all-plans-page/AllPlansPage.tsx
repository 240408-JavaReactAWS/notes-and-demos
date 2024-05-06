import React, { useEffect, useState } from 'react'
import { IPlan } from '../../models/IPlan'
import axios from 'axios';
import WorkoutPlanItem from '../workout-plan-item/WorkoutPlanItem';
import { useNavigate } from 'react-router-dom';
import './AllPlansPage.css';

function AllPlansPage() {

  const navigate = useNavigate();

  const [workoutPlans, setWorkoutPlans] = useState<IPlan[]>([])

  // Set workout plans to state after rendering component with fetch request
  // Make sure to add credentials: 'include' to fetch request
  useEffect(() => {
    axios.get('http://localhost:8080/plans', { withCredentials: true , headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}})
      .then((response) => {
        setWorkoutPlans(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate('/login');
      });
  }, []);


  let navigateToNewPlanForm = () => {
    navigate('/new-plan');
  }
  



  return (
    <div className='plans-container'>
      <div className='plans-flexbox'>
        {workoutPlans.map((plan) => {
          return <WorkoutPlanItem {...plan} key={"plan-icon-"+plan.planId}/>
        })}
      </div>
      <button onClick={navigateToNewPlanForm} className='new-plan-button'>Create a New Plan!</button>
    </div>
  )
}

export default AllPlansPage
