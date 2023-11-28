import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ShoppingOutlined, PhoneOutlined, LoginOutlined,LogoutOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate('/profile');
  };

  const getBackgroundImage = () => {
  
    switch (location.pathname) {
      case '/home':
        return 'url("https://wallpapersmug.com/download/3840x2160/ebde76/delicious-pizza-food.jpg")';
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
      defaultSelectedKeys={['home']}
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

    <h1>Aceasta este pagina HomePage</h1>
    <p style={descriptionStyle}>Bine ați venit la restaurantul nostru de pizza! Ne străduim să oferim cele mai delicioase și de înaltă calitate pizze făcute cu ingrediente proaspete. Explorați meniul nostru și răsfățați-vă cu o experiență culinară încântătoare.</p>
    <Button onClick={handleButtonClick}>Mergi la Profile Page</Button>
  </div>
  );
}

export default HomePage;
