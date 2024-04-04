import React from 'react';
import './SavedMovies.css';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({ savedMovies, serverError, onDelite }) {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isChecked, setIsChecked] = useState(false);
  const [isFirstSearchPerformed, setIsFirstSearchPerformed] = useState(false);
  
  useEffect(() => {
    const filtered = savedMovies.filter((movie) => {
      const name = (movie.nameRU || movie.nameEN || '').toLowerCase();
      return name.includes(searchKeyword.toLowerCase()) && (!isChecked || movie.duration <= 40);
    });
    setFilteredMovies(filtered);
  }, [savedMovies, searchKeyword, isChecked]);

  useEffect(() => {
    if (savedMovies.length === 0) {
      setIsFirstSearchPerformed(false);
    } else {
      setIsFirstSearchPerformed(true);
    }
  }, [savedMovies]);

  const handleSetSearch = (keyword) => {
    setSearchKeyword(keyword);
    setIsFirstSearchPerformed(true);
  };

  const handleFilterChange = (value) => {
    setIsChecked(value);
  };

  return (
    <section className="savedMovies">
      <div className="savedMovies__conteiner">
        <SearchForm
          handleSetSearch={handleSetSearch}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleFilterChange={handleFilterChange}
          searchKeyword={searchKeyword}
        />
        <SavedMoviesCardList
          movies={filteredMovies} 
          onDelite={onDelite} 
          serverError={serverError} 
          isFirstSearchPerformed={isFirstSearchPerformed}
        />
      </div>
    </section>
  )
}

export default SavedMovies;