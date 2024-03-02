import React from 'react';
import './SavedMoviesCard.css';

function SavedMoviesCard() {

  function handleClick() {
   console.log(111)
  }
  
  return (
    <>
      <li className="savedMoviesCard">
        <div className="savedMoviesCard__title-conteiner">
          <h2 className="savedMoviesCard__title">В погоне за Бенкси</h2>
          <p className="savedMoviesCard__duration">0ч 42м</p>    
        </div>     
        <div className="savedMoviesCard__image" style={{ backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/c63/fd5/eedaba3c4b25c10ea62eea71ffb42ea334-02-rolling-stones-exile-on-main-street.jpg)` } }/>
        <button type="button" onClick={handleClick} className="savedMoviesCard__button" aria-label="Удалить"/>
      </li>
    </>
  )
}

export default SavedMoviesCard;
