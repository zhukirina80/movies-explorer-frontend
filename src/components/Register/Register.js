import React from 'react';
import './Register.css';
import {useForm} from "react-hook-form"
import BlockWithForm from '../BlockWithForm/BlockWithForm';

function Register({ onRegister }) {

  const { reset, handleSubmit, register, formState: { errors, isValid }, trigger } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    shouldUnregister: false,
  });

  const onSubmit = (data) => {
    onRegister(data);
    reset();
  };

  const nameClass = errors.name ? 'invalid' : '';
  const emailClass = errors.email ? 'invalid' : '';
  const passwordClass = errors.password ? 'invalid' : '';

  return (
    <BlockWithForm 
      nameForm="register"
      onSubmit={handleSubmit(onSubmit)}
      isFormValid={isValid}>
        <label className="register__title-input">Имя</label>
        <input {...register("name", {
            required: "Пожалуйста, введите Ваше имя!",
            minLength: {
              value: 2,
              message: "Имя должно содержать не менее 2 символов!"
              },
            maxLength: {
              value: 40,
              message: "Имя должно содержать не более 40 символов!"
              }
          })} onChange={() => trigger("name")} placeholder="Имя" type="name" id="name" className={`register__input ${nameClass}`}/>
        <span className="register__error">{errors.name && errors.name.message}</span>
        <label className="register__title-input">E-mail</label>
        <input {...register("email", {
            required: "Пожалуйста, введите Ваш Email!",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                message: "Пожалуйста, введите корректный Email!"
            }
          })} onChange={() => trigger("email")} placeholder="E-mail" type="email" id="email" className={`register__input ${emailClass}`}/>
        <span className="register__error">{errors.email?.message}</span>
        <label className="register__title-input">Пароль</label>
        <input {...register("password", {
            required: "Пожалуйста, введите Ваш пароль",
            minLength: {
              value: 6,
              message: "Пароль должен содержать не менее 6 символов!"
            }
          })} onChange={() => trigger("password")} placeholder="Пароль" type="password" id="password" className={`register__input ${passwordClass}`}/>
        <span className="register__error">{errors.password?.message}</span>
       
    </BlockWithForm>
  );
}

export default Register;