import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';

function MoviesCardList() {

  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const calculateVisibleCards = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setVisibleCards(12); 
      } else if (windowWidth >= 768) {
        setVisibleCards(8); 
      } else {
        setVisibleCards(5); 
      }
    };

    calculateVisibleCards();

    window.addEventListener('resize', calculateVisibleCards);

    return () => {
      window.removeEventListener('resize', calculateVisibleCards);
    };
  }, []);


  const cardsArray = Array.from({ length: visibleCards }, (_, index) => <MoviesCard key={index} />);

  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__cards">{cardsArray}</ul>
      <button className="moviesCardList__button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;