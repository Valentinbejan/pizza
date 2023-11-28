import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ShoppingOutlined, PhoneOutlined,LoginOutlined,LogoutOutlined } from '@ant-design/icons';
import Pizza from './Pizza';

function MenuPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/profile');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Menu mode="horizontal" defaultSelectedKeys={['menu']} style={{ width: '100%', marginBottom: '20px' }}>
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

      <h1>Aceasta este pagina Menu</h1>
     
      <Pizza />

      <Button onClick={handleButtonClick}>Mergi la Profile Page</Button>
    </div>
  );
}

export default MenuPage;
