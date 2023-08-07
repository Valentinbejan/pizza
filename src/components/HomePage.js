import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd'; 

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/profile');
  };

  return (
    <div>
      <h1>Aceasta este pagina HomePage</h1>
      <Button onClick={handleButtonClick}>Mergi la Profile Page</Button>
     
    </div>
  );
}

export default HomePage;
