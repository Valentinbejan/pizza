import React, { useState, useContext } from 'react';
import { Input, Menu, Button } from 'antd';  
import { HomeOutlined, ShoppingOutlined, InfoCircleOutlined, PhoneOutlined, LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import AuthContext from './AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const location = useLocation();

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

  const getBackgroundImage3 = () => {
    
    switch (location.pathname) {
      case '/login':
        return 'url("https://pixelz.cc/wp-content/uploads/2018/10/pizza-uhd-4k-wallpaper.jpg")';
    }
  };

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    backgroundImage: getBackgroundImage3(),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '20px', 
  };

  const cardStyle = {
    //backgroundColor: 'green',
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
    <div style={pageStyle}>
      <Menu
        mode="horizontal"
        //defaultSelectedKeys={['home']}
        style={{
          width: '100%', 
          marginBottom: '20px',
          position: 'fixed',
          top: 0, 
          zIndex: 1000,
        }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => navigate('/home')}>
          Home
        </Menu.Item>
        <Menu.Item key="menu" icon={<ShoppingOutlined />} onClick={() => navigate('/menu')}>
          Menu
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />} onClick={() => navigate('/about')}>
          About Us
        </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneOutlined />} onClick={() => navigate('/contact')}>
          Contact
        </Menu.Item>
        <Menu.Item key="inregistrare" icon={<LogoutOutlined />} onClick={() => navigate('/inregistrare')}>
          inregistrare
        </Menu.Item>
        <Menu.Item key="login" icon={<LoginOutlined />} onClick={() => navigate('/login')}>
          login
        </Menu.Item>
      </Menu>
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
