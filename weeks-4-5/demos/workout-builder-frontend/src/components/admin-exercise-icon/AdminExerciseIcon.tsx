import React, { useState } from 'react'
import { IExercise } from '../../models/IExercise'
import './AdminExerciseIcon.css'
import axios from 'axios';

interface AdminExerciseIconProps{
    exercise: IExercise,
    refreshExercises: () => Promise<void>
}

function AdminExerciseIcon(props:AdminExerciseIconProps) {

    const [updateMode, setUpdateMode] = useState(false);
    const [bodyGroup, setBodyGroup] = useState(props.exercise.bodyGroup);
    const [exerciseName, setExerciseName] = useState(props.exercise.name);

    let toggleUpdateMode = () => {
        setUpdateMode(!updateMode);
    }

    let updateExercise = async () => {
        console.log("Updating exercise");
        console.log(exerciseName);
        console.log(bodyGroup);

        let updatedExercise = {
            exerciseId: props.exercise.exerciseId,
            name: exerciseName,
            bodyGroup: bodyGroup
        }

        // axios request to update exercise
        try {
            const res = await axios.put('http://localhost:8080/exercises', 
            updatedExercise, { headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')}});
            console.log(res.data);
            await props.refreshExercises();
        } catch (error) {
            console.log("Error updating exercise");
        }
        

        toggleUpdateMode();
    }

    let changeBodyGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBodyGroup(e.target.value);
    }

    let changeExerciseName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExerciseName(e.target.value);
    }

    let cancelUpdate = () => {
        setExerciseName(props.exercise.name);
        setBodyGroup(props.exercise.bodyGroup);
        toggleUpdateMode();
    }

    let bodyGroupOptions = ['CHEST', 'SHOULDERS', 'BACK', 'BICEPS', 'TRICEPS', 'HAMSTRINGS', 'QUADS', 'CALVES'];

    let deleteExercise = async () => {
        try {
            const res = await axios.delete(`http://localhost:8080/exercises/${props.exercise.exerciseId}`, 
            { headers: { 'Content-Type': 'application/json', 'username': localStorage.getItem('username')} });
            console.log(res.data);
            await props.refreshExercises();
        } catch (error) {
            console.log("Error deleting exercise");
        }
    }

  return (
    
    !updateMode ?
        <div className='exercise-admin' >
            <p>{props.exercise.name}</p>
            <p>Body Group: {props.exercise.bodyGroup}</p>
            <button onClick={toggleUpdateMode}>Update</button>
            <button onClick={deleteExercise}>Delete</button>
        </div>
    :
        <div className='exercise-admin'> 
            <h3>Updating:</h3>
            <input type='test' onChange={changeExerciseName} placeholder={props.exercise.name}></input>
            <br></br>
            <label>Body Group: 
                <select onChange={changeBodyGroup} defaultValue={props.exercise.bodyGroup}>
                    {
                        bodyGroupOptions.map((bg) => {
                            return (
                                <option key={bg} value={bg}>{bg.charAt(0) + bg.slice(1).toLowerCase()}</option>
                            )
                        })
                    }
                </select>
        </label>
        <br></br>
        <button onClick={updateExercise}>Submit</button>
        <button onClick={cancelUpdate}>Cancel</button>
        </div>
    
    
  )
}

export default AdminExerciseIcon
