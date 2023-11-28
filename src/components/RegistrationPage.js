import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'antd';  
import {Button} from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, ShoppingOutlined, InfoCircleOutlined, PhoneOutlined, LogoutOutlined, LoginOutlined } from '@ant-design/icons';



const RegistrationPage = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required('necesar'),
        email: Yup.string()
          .email('Email invalid')
          .required('necesar'),
        password: Yup.string()
          .min(8, 'Parola de minim 8 caractere')
          .required('necesar'),
      }),
      onSubmit: (values) => {

        

        fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
         console.log('Success:', data);
       
        navigate('/login');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      },
    });
/*
    const getBackgroundImage = () => {
      // Use location.pathname to determine the current route
      switch (location.pathname) {
        case '/inregistrare':
          return 'url("https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg")';
      }
    };
*/
    const getBackgroundImage2 = () => {
      // Use location.pathname to determine the current route
      switch (location.pathname) {
        case '/inregistrare':
          return 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D")';
      }
    };

/*
    const cardStyle = {
      border: '1px solid black',
      width: '400px',
      padding: '10px',
      borderRadius: '40px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundImage: getBackgroundImage(),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
*/
    const cardStyle = {
    //backgroundColor: 'lightgreen',
    border: '1px solid black',
    width: '400px',
    padding: '10px',
    borderRadius: '40px',
    position: 'absolute', 
    top: '30%',
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    background: "linear-gradient(#fc0335, #00cc10)" 
  };


  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content at the top
    backgroundImage: getBackgroundImage2(),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '20px', // Add padding at the top
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
    <h1>Pagina de inregistrare</h1>
    <form style={cardStyle} onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nume</label>
      <Input
        id="name"
        type="text"
        {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="email">Adresa de email</label>
      <Input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <Input
        id="password"
        type="password"
        {...formik.getFieldProps('password')}
      />
      
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

<Button type="primary" htmlType="submit">
        Submit 
      </Button>
    </form>
    </div>
  );
};

export default RegistrationPage;
