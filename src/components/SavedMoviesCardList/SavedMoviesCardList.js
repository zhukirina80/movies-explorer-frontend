import React from 'react';
import './SavedMoviesCardList.css';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

function SavedMoviesCardList({ movies, onDelite, serverError, isFirstSearchPerformed }) {

  return (
    <section className="savedMoviesCardList">
      <ul className="savedMoviesCardList__cards">
        {movies.map((movie) => (
            <SavedMoviesCard 
              key={movie._id} 
              movie={movie}
              onDelite={onDelite} />
          ))}
      </ul>
      {(!movies.length && (serverError || isFirstSearchPerformed)) && (
        <span className="savedMoviesCardList__text">
          {serverError
            ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
            : 'Ничего не найдено'}
        </span>
      )}
    </section>
  )
}

export default SavedMoviesCardList;