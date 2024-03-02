import React from 'react';
import './NavTab.css';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function NavTab({ onClose }) {

  return (
    <nav className="navTab">
      <button onMouseDown={onClose} type="reset" className="navTab__button-close" aria-label="Закрыть" />
      <NavLink to={`/`} className="navTab__link" activeClassName="active">Главная</NavLink>
      <NavLink to={`/movies`} className="navTab__link" activeClassName="active">Фильмы</NavLink>
      <NavLink to={`/saved-movies`} className="navTab__link" activeClassName="active">Сохранённые фильмы</NavLink>
      <Link to={`/profile`} className="navTab__link-profile"><p className="navTab__link-text">Аккаунт</p><div className="navTab__link-icon"/></Link>
    </nav>
  )
}

export default NavTab;