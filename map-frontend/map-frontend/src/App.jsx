import React, { useState } from 'react'
import './App.css'
import Signin from './components/Signin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import StreetMap from './components/StreetMap';


function App() {

  const isLoggedIn = window.localStorage.getItem("loggedIn")
  const userType = window.localStorage.getItem("userType")

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/api/register' element={<Signup />}></Route>
        <Route path='/api/login' element={<Signin />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/api/map' element={<StreetMap />}></Route>
        <Route path='/api/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App