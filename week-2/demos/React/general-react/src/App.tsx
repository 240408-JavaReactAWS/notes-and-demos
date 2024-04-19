import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/props/Parent/Parent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import ContextProvider from './components/context/ContextProvider';
import { createContext } from 'react';
import Events from './components/events/Events';
import AxiosFetch from './components/axios-fetch/AxiosFetch';
import UserDashboard from './components/UserDashboard/UserDashboard';

export const hiddenValueContext = createContext(42)

function App() {
  return (
    <>
      {/* <Parent></Parent> */}
      <hiddenValueContext.Provider value={42}>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Parent />}></Route>
          <Route path='/context' element={<ContextProvider/>}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/login' element={<AxiosFetch />}></Route>
          <Route path='/dashboard' element={<UserDashboard />}></Route>
        </Routes>
      </BrowserRouter>
      </hiddenValueContext.Provider>
    </>
  );
}

export default App;
