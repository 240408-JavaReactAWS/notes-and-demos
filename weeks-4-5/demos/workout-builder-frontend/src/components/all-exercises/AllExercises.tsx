import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IExercise } from '../../models/IExercise';
import ExerciseIcon from '../exercise-icon/ExerciseIcon';
import AdminExerciseIcon from '../admin-exercise-icon/AdminExerciseIcon';
import './AllExercises.css';

function AllExercises() {
    
    const navigate = useNavigate();
    const [exercises, setExercises] = useState<IExercise[]>([]); 
    const [filter, setFilter] = useState('all');

    // on component mount, fetch all exercises from the database after validating user is admin
    useEffect(() => {
        let asyncCall = async () => {
            try {
                let res = await axios.get('http://ec2-54-221-99-230.compute-1.amazonaws.com/users/admin', {
                    withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
                });
                // console.log(res);
            } catch (error : any) {
                let status = error.response.status;
                if (status === 401) {
                    console.log("Session is invalid");
                    navigate('/login');
                } else if (status === 403){
                    console.log("Unauthorized access");
                    navigate('/plans');
                }
            }


            try {
                let res = await axios.get('http://ec2-54-221-99-230.compute-1.amazonaws.com/exercises', {
                    withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
                });
                // console.log(res.data);
                setExercises(res.data.sort((a: IExercise, b: IExercise) => {
                    return a.name.localeCompare(b.name)
                }));
            } catch (error) {
                console.log("Error fetching exercises");
            }
        }

        asyncCall();
    }, []);

    let filterExercises = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
        try {
            let res = await axios.get(`http://ec2-54-221-99-230.compute-1.amazonaws.com/exercises`, {
                withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
            });
            let filteredExercises = res.data.filter((exercise: IExercise) => {
                return exercise.bodyGroup === e.target.value || e.target.value === 'all';
            }).sort((a: IExercise, b: IExercise) => {
                return a.name.localeCompare(b.name)
            });;

            setExercises(filteredExercises);
        } catch (error) {
            console.log("Error fetching exercises");
        }
    }

    let refreshExercises = async () => {
        try {
            let res = await axios.get('http://ec2-54-221-99-230.compute-1.amazonaws.com/exercises', {
                withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
            });
            let filteredExercises = res.data.filter((exercise: IExercise) => {
                return exercise.bodyGroup === filter || filter === 'all';
            }).sort((a: IExercise, b: IExercise) => {
                return a.name.localeCompare(b.name)
            });
            setExercises(filteredExercises);
        } catch (error) {
            console.log("Error fetching exercises");
        }
    }

  return (
    <div className='parent-container'>
    <select onChange={filterExercises} className='exercise-filter'>
            <option value="all">All</option>
            <option value="CHEST">Chest</option>
            <option value="SHOULDERS">Shoulder</option>
            <option value="BACK">Back</option>
            <option value="BICEPS">Biceps</option>
            <option value="TRICEPS">Triceps</option>
            <option value="HAMSTRINGS">Hamstrings</option>
            <option value="QUADS">Quads</option>
            <option value="CALVES">Calves</option>
        </select>
        <div className='all-exercises-container'>
        
        <div className='exercises-icons'> 
      {
        exercises.map((exercise) => {
          return (
            <AdminExerciseIcon exercise={exercise} refreshExercises={refreshExercises}></AdminExerciseIcon>
          )
        })
      }
      </div>
    </div>
    </div>
    
  )
}

export default AllExercises
