import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import BlockWithForm from '../BlockWithForm/BlockWithForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ email: '', password: '' });

  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email: values.email, password: values.password })
    .then(() => {
      navigate('/movies');
      resetForm();
    })
    .catch((err) => {
      console.error(`Ошибка при авторизации пользователя ${err}`);
      if (err.includes('401')) {
        setMessage('Вы ввели неправильный логин или пароль');
      } else {
        setMessage('При авторизации произошла ошибка');
      }
    })
  }

  return (
    <BlockWithForm
      nameForm="login"
      onSubmit={handleSubmit}
      isFormValid={isValid}
      message={message}
    >
      <label className="login__title-input">E-mail</label>
      <input
        name="email"
        value={values.email || ''}
        onChange={handleChange}
        placeholder="E-mail"
        type="email"
        required
        className={`login__input ${errors.email ? 'invalid' : ''}`}
      />
      <span className="login__error">{errors.email}</span>
      <label className="login__title-input">Пароль</label>
      <input
        name="password"
        value={values.password || ''}
        onChange={handleChange}
        placeholder="Пароль"
        type="password"
        required
        className={`login__input ${errors.password ? 'invalid' : ''}`}
      />
      <span className="login__error">{errors.password}</span>
    </BlockWithForm>
  );
}

export default Login;