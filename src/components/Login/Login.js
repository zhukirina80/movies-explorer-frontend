import React from 'react';
import './Login.css';
import {useForm} from "react-hook-form"
import BlockWithForm from '../BlockWithForm/BlockWithForm';

function Login({ onLogin }) {

  const { reset, handleSubmit, register, formState: {errors, isValid}, trigger } = useForm({
    mode: 'all',
  });

  const onSubmit = (data) => {
   onLogin(data);
   reset();
  };

  const emailClass = errors.email ? 'invalid' : '';
  const passwordClass = errors.password ? 'invalid' : '';

  return (
    <BlockWithForm 
      nameForm="login"
      onSubmit={handleSubmit(onSubmit)}
      isFormValid={isValid}>
        <label className="login__title-input">E-mail</label>
        <input {...register("email", {
            required: "Пожалуйста, введите Ваш Email!",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                message: "Пожалуйста, введите корректный Email!"
            }
          })} onChange={() => trigger("email")} placeholder="E-mail" type="email" id="email" className={`login__input ${emailClass}`}/>
        <span className="login__error">{errors.email?.message}</span>
        <label className="login__title-input">Пароль</label>
        <input {...register("password", {
            required: "Пожалуйста, введите Ваш пароль",
            minLength: {
              value: 6,
              message: "Пароль должен содержать не менее 6 символов!"
            }
          })} onChange={() => trigger("password")} placeholder="Пароль" type="password" id="password" className={`login__input ${passwordClass}`}/>
        <span className="login__error">{errors.password?.message}</span>
    </BlockWithForm>
  );
}

export default Login;