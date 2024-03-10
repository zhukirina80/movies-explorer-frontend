import React from 'react';
import './SavedMoviesCardList.css';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

function SavedMoviesCardList() {


  const savedCardsArray = Array.from({ length: 3 }, (_, index) => <SavedMoviesCard key={index} />);

  return (
    <section className="savedMoviesCardList">
      <ul className="savedMoviesCardList__cards">{savedCardsArray}</ul>
    </section>
  )
}

export default SavedMoviesCardList;