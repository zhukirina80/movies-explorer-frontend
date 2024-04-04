import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

function Navigation ({ navigationName }) {

  const [isNavTabOpen, setIsNavTabOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setIsNavTabOpen(true);
  }

  function handleClose() {
    setIsNavTabOpen(false);
  }

  useEffect(() => {
    setIsNavTabOpen(false);
  }, [navigate]) 

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1023) {
        setIsNavTabOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navigation">
      {navigationName === 'unauthorized' ?
      <>
        <Link to={`/signup`} className="navigation__link-register">Регистрация</Link>
        <Link to={`/signin`} className="navigation__button-signin">Войти</Link>
      </>
      :
      <>
        <button className="navigation__menu-button" onClick={handleClick} aria-label="Открыть меню" />
        {!isNavTabOpen
        ? <>
          <Link to={`/movies`} className="navigation__link">Фильмы</Link> 
          <Link to={`/saved-movies`} className="navigation__link">Сохранённые фильмы</Link>
          <Link to={`/profile`} className="navigation__link-profile"><p className="navigation__link-text">Аккаунт</p><div className="navigation__link-icon"/></Link>
        </>
        : <NavTab onClose={handleClose}/>
        }
      </>
      }
    </nav>
  )
}

export default Navigation;