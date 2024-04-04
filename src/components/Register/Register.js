import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import BlockWithForm from '../BlockWithForm/BlockWithForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';


function Register({ onRegister }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation({ name: '', email: '', password: '' });

  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name: values.name, email: values.email, password: values.password })
      .then(() => {
        navigate('/movies');
        resetForm();
      })
      .catch((err) => {
        console.error(`Ошибка при регистрации пользователя ${err}`);
        if (err.includes('409')) {
          setMessage('Пользователь с таким email уже существует');
        } else {
          setMessage('При регистрации пользователя произошла ошибка');
        }
      })
  }

  return (
    <BlockWithForm
      nameForm="register"
      onSubmit={handleSubmit}
      isFormValid={isValid}
      message={message}
    >
      <label className="register__title-input">Имя</label>
      <input
        name="name"
        value={values.name || ''}
        onChange={handleChange}
        placeholder="Имя"
        type="name"
        required
        className={`register__input ${errors.name ? 'invalid' : ''}`}
      />
      <span className="register__error">{errors.name}</span>
      <label className="register__title-input">E-mail</label>
      <input
        name="email"
        value={values.email || ''}
        onChange={handleChange}
        placeholder="E-mail"
        type="email"
        required
        className={`register__input ${errors.email ? 'invalid' : ''}`}
      />
      <span className="register__error">{errors.email}</span>
      <label className="register__title-input">Пароль</label>
      <input
        name="password"
        value={values.password || ''}
        onChange={handleChange}
        placeholder="Пароль"
        type="password"
        required
        className={`register__input ${errors.password ? 'invalid' : ''}`}
      />
      <span className="register__error">{errors.password}</span>
    </BlockWithForm>
  );
}

export default Register;