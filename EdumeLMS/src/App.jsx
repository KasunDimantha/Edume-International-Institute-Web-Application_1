
import './App.css'
import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import TopBar from './pages/component/TopBar';
import Footer from './pages/component/Footer';
import { FaHome } from 'react-icons/fa';
import Home from './pages/Home';
import SignIn_Page from './pages/SignIn_Page';
import SignUp_Page from './pages/SignUp_Page';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"            element={<Home/>} />
          <Route exact path="/signInPage"  element={<SignIn_Page/>} />
          <Route exact path="/signUpPage"  element={<SignUp_Page/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
