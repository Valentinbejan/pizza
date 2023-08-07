import React, { useState, useContext } from 'react';
import { Input } from 'antd';  
import {Button} from 'antd';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/users');
      const users = await response.json();

      const user = users.find(
        user => user.email === email && user.password === password
      );

      if (user) {
        login();
         navigate('/home');
      } else {
        throw new Error('Invalid email or password');
      }

      alert('Login successful');

    // if (user) {
    //     login();
    //     navigate('/home');
    //   }

    } catch (error) {
      setError(error.message);
    }
  }
  const cardStyle = {
    //backgroundColor: 'lightgreen',
    border: '1px solid black',
    width: '400px',
    padding: '10px',
    borderRadius: '20px',
    position: 'absolute', 
    top: '30%',
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    background: "linear-gradient(#3f87a6, #00cc10)" 

  };


  return (
    <div>
    <h1>Pagina de Logare</h1>
    <form  style={cardStyle} onSubmit={handleSubmit}>
      <label>
        Email:
        <Input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <Input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
      Login:
      <Input type="submit" value="Login" />
      </label>
      {error && <p>{error}</p>}
    </form>
    </div>
  );
}

export default LoginPage;
