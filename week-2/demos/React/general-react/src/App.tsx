import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/props/Parent/Parent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      {/* <Parent></Parent> */}
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Parent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
