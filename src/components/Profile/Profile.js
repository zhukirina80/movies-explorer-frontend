import React from 'react';
import './Profile.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Profile({ onUpdateUser, userName }) {

  const { handleSubmit, register, formState: {errors, isValid}, trigger } = useForm({
    mode: 'all',
  });

  const [isEdit, setIsEdit] = useState(false);

  const nameClass = errors.name ? 'invalid' : '';
  const emailClass = errors.email ? 'invalid' : '';

  const onSubmit = (data) => {
      onUpdateUser(data);
      setIsEdit(false)
  };

  return (
    <section className="profile">
      <div className="profile__conteiner">
        <h2 className="profile__title">Привет, {userName}!</h2>
        <form noValidate onSubmit={handleSubmit(onSubmit)} className="profile__form">
        <div className="profile__input-conteiner">
          <label className="profile__title-input">Имя</label>
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
            })} onChange={() => trigger("name")} placeholder="Имя" disabled={!isEdit} type="name" className={`profile__input ${nameClass}`}/>
          </div>
          <span className="profile__error">{errors.name?.message}</span>
          <div className="profile__input-conteiner">
            <label className="profile__title-input">E-mail</label>
            <input {...register("email", {
                required: "Пожалуйста, введите Ваш Email!",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                    message: "Пожалуйста, введите корректный Email!"
                }
              })} onChange={() => trigger("email")} placeholder="E-mail" disabled={!isEdit} type="email" className={`profile__input ${emailClass}`}/>
          </div>
          <span className="profile__error">{errors.email?.message}</span>
          {!isEdit
            ? <>
                <button type="submit" onClick={() => {setIsEdit(true)}} className="profile__link">Редактировать</button>
                <Link to='/signin' className="profile__link-out">Выйти из аккаунта</Link>
              </>
            : <>
                <span className="profile__error-button"></span>
                <button type="submit" className={`profile__button ${isValid ? '' : 'profile__button_disabled'}`} disabled={!isValid}>Сохранить</button>
              </>
          }
        </form>
      </div>
    </section>
  );
}

export default Profile;