import React from 'react';
import Navigation from './nav';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import './Login.css';
import './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Navigation />
    <Login />
    <Signup />
    </>
   
  );
}

export default App;
