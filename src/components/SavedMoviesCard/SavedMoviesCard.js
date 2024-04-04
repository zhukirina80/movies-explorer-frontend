import React from 'react';
import './SavedMoviesCard.css';
import { Link } from 'react-router-dom';

function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
}

function SavedMoviesCard({ movie, onDelite }) {

  function handleClick() {
   onDelite(movie._id);
  }
  
  return (
    <>
      <li className="savedMoviesCard">
        <div className="savedMoviesCard__title-conteiner">
            <h2 className="savedMoviesCard__title">{movie.nameRU || movie.nameEN}</h2>
            <p className="savedMoviesCard__duration">{formatDuration(movie.duration)}</p>    
          </div> 
          <Link to={movie.trailerLink} target='_blank'>
            <img className="savedMoviesCard__image" src={movie.image} alt={movie.nameRU || movie.nameEN} />
          </Link>
        <button type="button" onClick={handleClick} className="savedMoviesCard__button" aria-label="Удалить"/>
      </li>
    </>
  )
}

export default SavedMoviesCard;
