import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'antd';  
import {Button} from 'antd';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {

    const navigate = useNavigate();


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



  return (
    <div>
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
