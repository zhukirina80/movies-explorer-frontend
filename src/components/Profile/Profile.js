import React from 'react';
import './Profile.css';
import { useContext } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdateUser, userName, onSignOut }) {

  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation({ name: '', email: '' });
  const [isEdit, setIsEdit] = useState(false);
  const isFormChanged = values.name !== currentUser.name || values.email !== currentUser.email;

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
    setIsEdit(false);
  };

  const handleClick = () => {
    onSignOut();
    resetForm();
  }

  useEffect(() => {
    setValues({ name:currentUser.name || '', email:currentUser.email || '' });
  }, [currentUser]);

  return (
    <section className="profile">
      <div className="profile__conteiner">
        <h2 className="profile__title">Привет, {userName}!</h2>
        <form noValidate onSubmit={onSubmit} className="profile__form">
          <div className="profile__input-conteiner">
            <label className="profile__title-input">Имя</label>
            <input 
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              placeholder="Имя"
              disabled={!isEdit}
              type="name"
              className={`profile__input ${errors.name ? 'invalid' : ''}`}
              required
            />
          </div>
          <span className="profile__error">{errors.name}</span>
          <div className="profile__input-conteiner">
            <label className="profile__title-input">E-mail</label>
            <input 
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              placeholder="E-mail"
              disabled={!isEdit}
              type="email"
              className={`profile__input ${errors.email ? 'invalid' : ''}`}
              required
            />
          </div>
          <span className="profile__error">{errors.email}</span>
          {!isEdit
            ? (<>
                <button 
                  type="button" 
                  onClick={() => {
                    setIsEdit(true);
                  }} 
                  className="profile__link">
                    Редактировать
                </button>
                <button type="button" className="profile__link-out" onClick={handleClick}>Выйти из аккаунта</button>
              </>
            ) : (<>
                <span className="profile__error-message">{isFormChanged ? '' : 'Данные не были изменены'}</span>
                <button 
                  type="submit" 
                  className={`profile__button ${isValid && isFormChanged ? '' : 'profile__button_disabled'}`} 
                  disabled={!isValid || !isFormChanged}>
                    Сохранить
                </button>
              </>)
          }
        </form>
      </div>
    </section>
  );
}

export default Profile;