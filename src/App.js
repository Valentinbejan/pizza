import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button } from 'antd'; 
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import AuthContext from './components/AuthContext';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <div className="App"> 
  <AuthContext.Provider value={{ isAuth, login, logout }}>
   
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/inregistrare" element={<RegistrationPage />} />
          <Route path="/home" element={isAuth ? <HomePage /> : <LoginPage />} />
          <Route path="/profile" element={isAuth ? <ProfilePage /> : <LoginPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
