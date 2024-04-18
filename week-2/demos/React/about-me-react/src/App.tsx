import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import TTAAL from './components/ttaal/TTAAL';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';

function App() {

  /*
  What on earth is this return in this function? What is happening here?

  Everything inside that return statement is called JSX (or TSX in our case) but it's a combination of TypeScript and HTML
  React bundles all of that together to allow you to use TypeScript and HTML seemlessly and dynamically create web pages

  Recall this guy controls EVERYTHING that is rendered on the screen, if it's not here in some capacity you will never see it
  */
  return (
    <>
    {/* // <h1>Hello World!</h1>} */}
      <Header></Header>
    {/* // NOTE: basic html elements are all lowercase, React Components start with Uppercase} */}



      {/* <Home></Home> */}
      {/* <TTAAL></TTAAL> */}


      {/* I only want to show the Home component OR the TTAAL component but I don't want to have to comment one out back and forth
        SOLUTION: ROUTING
        
        Routing creates different routes for your application
        / -> Home component
        /ttaal -> TTAAL component

        WOAH I thought we were making SPAs, how come there are multiple pages? There aren't actually multiple pages, it just
        gives the illusion of multiple page while it just changes what components are rendered

        React being a somewhat lightweight library it doesn't include a in-the-box solution for routing, we'll need to add one in
        We add in the React Router DOM by doing 'npm install react-router-dom' and it gives us the ability to navigate between pages

        Curly braces allow us to directly inject JS into our rendered model
        */}
        
        <BrowserRouter>
          <Nav></Nav> 
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/ttaal' element={<TTAAL></TTAAL>}></Route>
          </Routes>
        </BrowserRouter>




      <Footer></Footer>
    {/*
    Why is react mad? We did everything the same as before?

    When using the return for the JSX methods, they need to have one parent element that react can use to then render all of the children
    We need a parent component to hold all of this, we can use a div but if we don't want to create extra elements we can use a react fragment
    React fragment -> A blank element react can use to mount all of the child components
    */}
    </>
  );
}

export default App;
