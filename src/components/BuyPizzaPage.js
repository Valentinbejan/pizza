import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Pizza, { pizzaData } from './Pizza' 
import {  Form, Input,Button, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ShoppingOutlined, PhoneOutlined,LoginOutlined,LogoutOutlined } from '@ant-design/icons';

const BuyPizzaPage = () => {
    const { pizzaName } = useParams();
    const navigate = useNavigate();
  
    
    useEffect(() => {
      
      const handleNavigation = () => {
        navigate('/menu');
      };
  
      
      window.addEventListener('popstate', handleNavigation);
  
      
      return () => {
        window.removeEventListener('popstate', handleNavigation);
      };
    }, [navigate]);
  
   
    const selectedPizza = pizzaData.find((pizza) => pizza.name === pizzaName);
  
    if (!selectedPizza) {
     
      return (
        <div>
          <h1>Buy Pizza Page</h1>
          <p>Error: Pizza not found</p>
        </div>
      );
    }
  
    const cardStyle = {
      border: '1px solid black',
      width: '600px',
      padding: '10px',
      borderRadius: '40px',
      position: 'absolute', 
      top: '50%',
      left: '50%', 
      transform: 'translate(-50%, -50%)',
      background: "linear-gradient(#fc0335, #00cc10)" 
    };

    const handleFinish = (formData) => {
      console.log(formData);
    };
    
    return (
      <div  style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      <div style={cardStyle}>
  <h1>Buy Pizza Page</h1>
  <p>Cumperi pizza: {selectedPizza.name}</p>
  <img src={selectedPizza.image} alt={selectedPizza.name} style={{ maxWidth: '100%' }} />
  <p>Ingrediente: {selectedPizza.ingredients}</p>
  <p>Greutate: {selectedPizza.weight}</p>
  <p>Pret: {selectedPizza.price}</p>
  <Form onFinish={handleFinish} style={{ marginTop: '20px' }}>
  <Form.Item label="Strada" name="street">
    <Input />
  </Form.Item>
  <Form.Item label="Oras" name="city">
    <Input />
  </Form.Item>
  <Form.Item label="Apartament" name="apartament">
    <Input />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Comanda Pizza
    </Button>
  </Form.Item>
</Form>
  
</div>
      </div>
    );
  };
  
  export default BuyPizzaPage;