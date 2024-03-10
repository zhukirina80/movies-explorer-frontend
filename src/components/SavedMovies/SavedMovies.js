import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies() {

  return (
    <section className="savedMovies">
      <div className="savedMovies__conteiner">
        <SearchForm/>
        <SavedMoviesCardList/>
      </div>
    </section>
  )
}

export default SavedMovies;