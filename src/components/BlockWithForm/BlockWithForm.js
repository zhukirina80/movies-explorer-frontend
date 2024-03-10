import LogoLink from '../LogoLink/LogoLink';
import './BlockWithForm.css';
import { Link } from "react-router-dom";

function BlockWithForm({ onSubmit, children, nameForm, isFormValid }) {

  return (
    <div className="blockWithForm">
      <div className="blockWithForm__conteiner">
        <LogoLink />
        <h2 className="blockWithForm__title">{nameForm === 'register' ? 'Добро пожаловать!' : 'Рады видеть!'}</h2>
        <form noValidate onSubmit={onSubmit} className="blockWithForm__form">
          {children}
          <span className={nameForm === 'register' ? 'blockWithForm__error' : 'blockWithForm__error-login'} >Что-то пошло не так</span>
          <button type="submit" disabled={!isFormValid} className={`blockWithForm__button ${isFormValid ? '' : 'blockWithForm__button_disabled'}`}>
            {nameForm === 'register' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
        <p className="blockWithForm__subtitle">{nameForm === 'register' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}&nbsp; 
          <Link to={nameForm === 'register' ? '/signin' : '/signup'} className="blockWithForm__link">{nameForm === 'register' ? 'Войти' : ' Регистрация'}</Link>
        </p>
      </div>
    </div>
  );
}

export default BlockWithForm;
