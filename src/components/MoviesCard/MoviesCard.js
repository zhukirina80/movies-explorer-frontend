import React from 'react';
import './MoviesCard.css';
import {MOVIES_API_ADDRESS} from '../../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
}

function MoviesCard({ movie, addMovie, savedMovies }) { 
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const imageUrl = MOVIES_API_ADDRESS + movie.image.url;
  
  useEffect(() => {
    setIsMovieSaved(savedMovies.some(c => movie.id === c.movieId));
  }, [setIsMovieSaved, savedMovies, movie.id]);

  function handleClick() {
    if (savedMovies.some(c => movie.id === c.movieId)) {
      setIsMovieSaved(true);
      addMovie(movie);
    } else {
      setIsMovieSaved(false);
      addMovie(movie);
    }
  }
  
  return (
    <>
      <li className="moviesCard">
        <div className="moviesCard__title-conteiner">
          <h2 className="moviesCard__title">{movie.nameRU || movie.nameEN}</h2>
          <p className="moviesCard__duration">{formatDuration(movie.duration)}</p>    
        </div> 
        <Link to={movie.trailerLink} target='_blank'>
          <img className="moviesCard__image" src={imageUrl} alt={movie.nameRU || movie.nameEN} />
        </Link>
        <button type="button" onClick={handleClick} className={`moviesCard__button ${isMovieSaved ? 'moviesCard__button-active' : ''}`} aria-label="Сохранить">Сохранить</button>
      </li>
    </>
  )
}

export default MoviesCard;