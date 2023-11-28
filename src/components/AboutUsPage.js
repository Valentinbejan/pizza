import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ShoppingOutlined, PhoneOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function AboutUsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate('/profile');
  };

  const getBackgroundImage = () => {
   
    switch (location.pathname) {
      case '/about':
        return 'url("https://tazzcdn.akamaized.net/uploads/cover/WhatsApp_Image_2023-04-21_at_11.30.42_2.jpeg")'; // Replace with the actual URL
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
        defaultSelectedKeys={['about']}
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

      <h1>Aceasta este pagina About Us</h1>
      <p style={descriptionStyle}>
        Bine ați venit la restaurantul nostru! Cu o istorie bogată și o tradiție culinară ce
        începe acum mai bine de două decenii, suntem mândri să vă oferim cele mai delicioase și
        autentice pizze. Fondat în anul 2001, restaurantul nostru a devenit un
        punct de referință în comunitatea noastră.
        <br />
        Echipa noastră dedicată și pasionată lucrează zilnic pentru a aduce bucurie în farfurii
        și pentru a oferi experiențe gastronomice de neuitat. Folosim doar ingrediente proaspete
        și de cea mai înaltă calitate, iar rețetele noastre autentice vă vor transporta într-o
        călătorie culinară memorabilă.
        <br />
        Suntem recunoscători comunității noastre și vă mulțumim pentru susținere de-a lungul
        anilor. În fiecare pizza pe care o pregătim, păstrăm spiritul tradiției și căldura
        ospitalității. Vă invităm să vă alăturați familiei noastre și să savurați bucatele noastre
        cu dragoste și grijă.
      </p>
      <Button onClick={handleButtonClick}>Mergi la Profile Page</Button>
    </div>
  );
}

export default AboutUsPage;
