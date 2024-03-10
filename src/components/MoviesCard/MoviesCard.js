import React from 'react';
import './MoviesCard.css';
import { useState } from 'react';

function MoviesCard() {

  const [isMovieSaved, setIsMovieSaved] = useState(false);

  function handleClick() {
    setIsMovieSaved((prevValue) => !prevValue);
  }
  
  return (
    <>
      <li className="moviesCard">
        <div className="moviesCard__title-conteiner">
          <h2 className="moviesCard__title">В погоне за Бенкси</h2>
          <p className="moviesCard__duration">0ч 42м</p>    
        </div>     
        <div className="moviesCard__image" style={{ backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/c63/fd5/eedaba3c4b25c10ea62eea71ffb42ea334-02-rolling-stones-exile-on-main-street.jpg)` } }/>
        <button type="button" onClick={handleClick} className={`moviesCard__button ${isMovieSaved ? 'moviesCard__button-active' : ''}`} aria-label="Сохранить">Сохранить</button>
      </li>
    </>
  )
}

export default MoviesCard;