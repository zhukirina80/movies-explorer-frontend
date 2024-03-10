import React from 'react';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {

  const navigate = useNavigate();

  return (
    <div className="notFoundPage">
      <div className="notFoundPage__content">
        <h1 className="notFoundPage__title">404</h1>
        <p className="notFoundPage__text">Страница не найдена</p>
        <button className="notFoundPage__button" onClick={() => navigate(-1)}>Назад</button>
      </div> 
    </div>
  );
}

export default NotFoundPage;