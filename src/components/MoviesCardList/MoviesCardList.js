import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import {
  MEDIUM_SCREEN_WIDTH,
  MINIMUM_SCREEN_WIDTH,
  VISIBLE_CARDS_MAXIMUM_SCREEN_WIDTH,
  VISIBLE_CARDS_MEDIUM_SCREEN_WIDTH,
  VISIBLE_CARDS_MINIMUM_SCREEN_WIDTH
} from '../../utils/constants';

function MoviesCardList({ movies, serverError, isFirstSearchPerformed, addMovie, savedMovies }) {

  const [visibleCards, setVisibleCards] = useState(0);
    
  useEffect(() => {
    const calculateVisibleCards = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= MEDIUM_SCREEN_WIDTH) {
        setVisibleCards(VISIBLE_CARDS_MAXIMUM_SCREEN_WIDTH); 
      } else if (windowWidth >= MINIMUM_SCREEN_WIDTH) {
        setVisibleCards(VISIBLE_CARDS_MEDIUM_SCREEN_WIDTH); 
      } else {
        setVisibleCards(VISIBLE_CARDS_MINIMUM_SCREEN_WIDTH); 
      }
    };

    calculateVisibleCards();

    window.addEventListener('resize', calculateVisibleCards);

    return () => {
      window.removeEventListener('resize', calculateVisibleCards);
    };
  }, []);

  const handleLoadMore = () => {
    const additionalCards = window.innerWidth >= 1024 ? 3 : 2;
    setVisibleCards((prevVisibleCards) => prevVisibleCards + additionalCards);
  };

  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__cards">
        {movies.slice(0, visibleCards).map((movie) => (
          <MoviesCard 
            key={movie.id || movie.movieId} 
            movie={movie}
            addMovie={addMovie}
            savedMovies={savedMovies} />
        ))}
      </ul>
      {(movies.length > visibleCards) && (
        <button className="moviesCardList__button" onClick={handleLoadMore}>
          Ещё
        </button>
      )}
      {(!movies.length && (serverError || isFirstSearchPerformed)) && (
        <span className="moviesCardList__text">
          {serverError
            ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
            : 'Ничего не найдено'}
        </span>
      )}
    </section>
  );
}

export default MoviesCardList;