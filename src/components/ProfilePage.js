import React from 'react';
import { Menu, Button, Card, Space, Row, Col, Tag } from 'antd'; // Adăugare Tag pentru preț
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  InfoCircleOutlined,
  ShoppingOutlined,
  PhoneOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


const SubscriptionSection = () => {
  const handleSubscribeClick = (plan, price) => {
    
    alert(`Ai ales abonamentul ${plan} cu prețul ${price}!`);
  };

  return (
    <Card title="Abonamente Lunare" style={{ width: '80%', marginTop: '20px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Space direction="vertical">
            <Button onClick={() => handleSubscribeClick('Basic', '9.99 RON')}>
              Abonament de bază
            </Button>
            <p>Avantaje:</p>
            <ul>
              <li>2 pizza/lună</li>
              <li>Ingrediente standard</li>
            </ul>
            <Tag color="green">9.99 RON/lună</Tag>
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical">
            <Button onClick={() => handleSubscribeClick('Standard', '19.99 RON')}>
              Abonament Standard
            </Button>
            <p>Avantaje:</p>
            <ul>
              <li>4 pizza/lună</li>
              <li>Ingrediente premium</li>
            </ul>
            <Tag color="gold">19.99 RON/lună</Tag>
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical">
            <Button onClick={() => handleSubscribeClick('Premium', '29.99 RON')}>
              Abonament Premium
            </Button>
            <p>Avantaje:</p>
            <ul>
              <li>Număr nelimitat de pizza</li>
              <li>Ingrediente exclusive</li>
              <li>Livrare expres</li>
            </ul>
            <Tag color="magenta">29.99 RON/lună</Tag>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

function ProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (key) => {
    
    switch (key) {
      case 'home':
        navigate('/home');
        break;
      case 'menu':
        navigate('/menu');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'inregistrare':
        navigate('/inregistrare');
        break;
      case 'login':
        navigate('/login');
        break;
      default:
        
        break;
    }
  };

  const getBackgroundImage4 = () => {
    
    switch (location.pathname) {
      case '/profile':
        return 'url("https://images7.alphacoders.com/129/1290221.jpg")';
      default:
        return null;
    }
  };

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    backgroundImage: getBackgroundImage4(),
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
        onClick={({ key }) => handleMenuClick(key)}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="menu" icon={<ShoppingOutlined />}>
          Menu
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          About Us
        </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneOutlined />}>
          Contact
        </Menu.Item>
        <Menu.Item key="inregistrare" icon={<LogoutOutlined />}>
          Inregistrare
        </Menu.Item>
        <Menu.Item key="login" icon={<LoginOutlined />}>
          Login
        </Menu.Item>
      </Menu>

      <h1>Pagina de Profile Page</h1>
      
      <SubscriptionSection />
    </div>
  );
}

export default ProfilePage;
