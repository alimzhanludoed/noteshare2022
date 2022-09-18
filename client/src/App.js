import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Confirmation from './pages/confirmation';
import Forgot from './pages/forgot-password';
import Home from './pages/home';
import Units from './pages/units';
import Test from './pages/test';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/confirmation' element={<Confirmation />} />
          <Route path='/forgot-password' element={<Forgot />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/units/:coursename' element={<Units />} />
          <Route path='/test/:coursename/:section' element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
