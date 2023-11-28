import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Redirect,Navigate } from 'react-router-dom';
import { Button } from 'antd'; 
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import AuthContext from './components/AuthContext';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import MenuPage from './components/MenuPage';
import Pizza from './components/Pizza';
import BuyPizzaPage from './components/BuyPizzaPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };
// <Route path="/home" element={isAuth ? <HomePage /> : <LoginPage />} />
  return (
    <div className="App"> 
  <AuthContext.Provider value={{ isAuth, login, logout }}>
   
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/inregistrare" element={<RegistrationPage />} />
         
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={isAuth ? <ProfilePage /> : <LoginPage />} />
          <Route path="/menu" element={isAuth ? <MenuPage /> : <LoginPage />} />
          <Route path="/buy/:pizzaName" element={<BuyPizzaPage />} /> 
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
