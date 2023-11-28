import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Menu, Form, Input } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ShoppingOutlined, PhoneOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import AuthContext from './AuthContext'; 
const { SubMenu } = Menu;

function ContactPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const authContext = useContext(AuthContext);

  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    navigate('/profile');
  };

  const handleFormSubmit = () => {
   
    if (authContext.isAuth) {
     
      console.log('Message:', message);
    } else {
    
      navigate('/login');
    }
  };

  const getBackgroundImage = () => {
    
    switch (location.pathname) {
      case '/contact':
        return 'url("https://ceaunulrazesului.ro/wp-content/uploads/2021/10/Pizza-Pizza-Casei.jpg")'; 
      default:
        return null;
    }
  };

  const descriptionStyle = {
    backgroundColor: '#FFD700',
    color: '#333', 
    padding: '20px', 
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', 
    textAlign: 'center',
    maxWidth: '600px',
    margin: '20px auto',
    width: '80%', 
  };

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    backgroundImage: getBackgroundImage(),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '20px', 
  };

  return (
    <div style={pageStyle}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['contact']}
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

      <h1>Aceasta este pagina Contact</h1>
      <p style={descriptionStyle}>Contactați-ne pentru orice întrebări sau informații suplimentare. Suntem aici să vă ajutăm!</p>
        
    
      {authContext.isAuth ? (
        <div  style={descriptionStyle}>
        <Form onFinish={handleFormSubmit}>
          <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Va rugam introduceti mesajul!' }]}>
            <Input.TextArea rows={4} onChange={(e) => setMessage(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
        </div>
      ) : (
        <p>Please log in to send a message.</p>
      )}

      <Button onClick={handleButtonClick}>Mergi la Profile Page</Button>
    </div>
  );
}

export default ContactPage;
