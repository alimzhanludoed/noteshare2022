import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Confirmation from './pages/confirmation';
import Forgot from './pages/forgot-password';
import Account from './pages/account';

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
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
