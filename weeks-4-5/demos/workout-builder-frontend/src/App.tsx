import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import AllPlansPage from './components/all-plans-page/AllPlansPage';
import WorkoutPlan from './components/workout-plan/WorkoutPlan';
import NewPlanForm from './components/new-plan-form/NewPlanForm';
import UpdatePlanForm from './components/update-plan-form/UpdatePlanForm';
import Register from './components/register/Register';
import AllExercises from './components/all-exercises/AllExercises';
import NewExerciseForm from './components/new-exercise-form/NewExerciseForm';
import Nav from './components/nav/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path='/' element={<Navigate to={'/plans'} />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/plans' element={<AllPlansPage />}></Route>
        <Route path='/plans/:id' element={<WorkoutPlan />}></Route>
        <Route path='/new-plan' element={<NewPlanForm />}></Route>
        <Route path='/update/:id' element={<UpdatePlanForm />}></Route>
        <Route path='/exercises' element={<AllExercises />}></Route>
        <Route path='/new-exercise' element={<NewExerciseForm />}></Route>
        <Route path='*' element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
