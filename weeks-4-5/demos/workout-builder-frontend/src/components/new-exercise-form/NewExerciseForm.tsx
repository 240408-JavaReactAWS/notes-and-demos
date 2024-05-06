import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './NewExerciseForm.css';


function NewExerciseForm() {

    const navigate = useNavigate();
    const [exerciseName, setExerciseName] = useState('');
    const [bodyGroup, setBodyGroup] = useState('CHEST');

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
        }

        asyncCall();
    }, []);


    let updateExerciseName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExerciseName(e.target.value);
    }

    let changeBodyGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBodyGroup(e.target.value);
    }


    let submitNewExercise = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let res = await axios.post('http://ec2-54-221-99-230.compute-1.amazonaws.com/exercises', {
                name: exerciseName,
                bodyGroup: bodyGroup
            }, {
                withCredentials: true, headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}
            });
            if (res.status === 201) {
                navigate('/exercises');
            }
        } catch (error) {
            console.log("Error creating exercise");
            alert("Error creating exercise");
        }
    }

  return (
    <div className='new-exercise-form-container'> 
      <form onSubmit={submitNewExercise} className='new-exercise-form'>
        <label>
            Exercise Name:
            <input type="text" name="name" onChange={updateExerciseName}/>
        </label>
        <label>
            Body Group:
            <select onChange={changeBodyGroup}>
                <option value="CHEST">Chest</option>
                <option value="SHOULDERS">Shoulder</option>
                <option value="BACK">Back</option>
                <option value="BICEPS">Biceps</option>
                <option value="TRICEPS">Triceps</option>
                <option value="HAMSTRINGS">Hamstrings</option>
                <option value="QUADS">Quads</option>
                <option value="CALVES">Calves</option>
            </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewExerciseForm
