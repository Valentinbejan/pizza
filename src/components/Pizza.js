import React from 'react';
import { List, Space, Avatar } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const pizzaData = [
  {
    name: 'Margherita',
    ingredients: 'Tomato, Mozzarella, Basil',
    weight: '250g',
    price: '10.99 RON',
    image: 'https://www.fbgcdn.com/pictures/1a18c52b-7a5c-4cd8-a4a5-7ebe5d80ac1c_d3.jpg',
  },
  {
    name: 'Pepperoni',
    ingredients: 'Tomato, Mozzarella, Pepperoni',
    weight: '300g',
    price: '$12.99 RON',
    image: 'https://www.fbgcdn.com/pictures/517b24d1-c608-4fab-9afe-3b4e823d9da5_d3.jpg',
  },
  {
    name: 'Vegetarian',
    ingredients: 'Tomato, Mozzarella, Bell Peppers, Olives',
    weight: '280g',
    price: '$15.99 RON',
    image: 'https://www.fbgcdn.com/pictures/72b420fe-4634-4480-b37f-dd562e09e475_d3.jpg',
  },
  {
    name: 'Formagio',
    ingredients: 'Tomato, Mozzarella, Basil',
    weight: '250g',
    price: '$14.99 RON',
    image: 'https://www.fbgcdn.com/pictures/e78c51ea-83c3-47ed-b330-7454be0f5b8a_d3.jpg',
  },
  {
    name: 'Hawai',
    ingredients: 'Tomato, Mozzarella, Pepperoni',
    weight: '300g',
    price: '$13.99 RON',
    image: 'https://www.fbgcdn.com/pictures/7ace9600-17ba-4c66-8279-6edb842bfe98_d3.jpg',
  },
  {
    name: 'Diavola',
    ingredients: 'Tomato, Mozzarella, Bell Peppers, Olives',
    weight: '280g',
    price: '$11.99 RON',
    image: 'https://www.fbgcdn.com/pictures/a57cb148-3bb0-4446-ade0-4d066fca3cbf_d3.jpg',
  },

];

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const listStyle = {
    border: '1px solid black',
    width: '400px',
    padding: '10px',
    borderRadius: '20px',
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'linear-gradient(#3f87a6, #00cc10)',
  };

  const Pizza = () => {
    const navigate = useNavigate();
  
    const handlePizzaClick = (pizzaName) => {
     
      navigate(`/buy/${pizzaName}`);
    };
  
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={pizzaData}
        style={listStyle}
        renderItem={(pizza) => (
          <List.Item
            key={pizza.name}
            actions={[
              // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            onClick={() => handlePizzaClick(pizza.name)}
            extra={<img width={120} alt={pizza.name} src={pizza.image} />}
          >
            <Link to={`/buy/${pizza.name}`} onClick={() => handlePizzaClick(pizza.name)}>
            <List.Item.Meta
              //avatar={<Avatar src="https://placekitten.com/50/50" />} 
              title={pizza.name}
              description={`Ingediente: ${pizza.ingredients} | Greutate: ${pizza.weight} | Pret: ${pizza.price}`}
            />
          </Link>
          
        </List.Item>
        )}
      />
    );
  };
  
  export default Pizza;
  export { pizzaData };
