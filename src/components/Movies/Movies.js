import React from 'react';
import { useState, useEffect } from 'react';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ savedMovies, addMovie }) {
  const searchKeywordFromStorage = localStorage.getItem('searchKeyword') || '';
  const checkedFromStorage = JSON.parse(localStorage.getItem('checked'));
  const moviesFromStorage = JSON.parse(localStorage.getItem('movies')) || [];
  const filteredMoviesFromStorage = JSON.parse(localStorage.getItem('filteredMovies')) || [];
  const [movies, setMovies] = useState(moviesFromStorage);
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(searchKeywordFromStorage);
  const [filteredMovies, setFilteredMovies] = useState(filteredMoviesFromStorage);
  const [isChecked, setIsChecked] = useState(checkedFromStorage);
  const [isFirstSearchPerformed, setIsFirstSearchPerformed] = useState(false);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    if (!isFirstSearchPerformed && searchKeywordFromStorage && movies.length === 0) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((data) => {
          setMovies(data);
          setIsFirstSearchPerformed(true);
          setServerError(false);
        })
        .catch((error) => {
          setServerError(true);
          console.error('Ошибка при загрузке данных о фильмах:', error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [movies, isFirstSearchPerformed, searchKeywordFromStorage]);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const name = (movie.nameRU || movie.nameEN || '').toLowerCase();
      return name.includes(searchKeyword.toLowerCase()) && (!isChecked || movie.duration <= 40);
    });
    setFilteredMovies(filtered);
  }, [movies, searchKeyword, isChecked]);

  useEffect(() => {
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }, [filteredMovies]);

  const handleSetSearch = (keyword) => {
    setSearchKeyword(keyword);
    localStorage.setItem('searchKeyword', keyword);
  };

  const handleFilterChange = (value) => {
    setIsChecked(value);
    localStorage.setItem('checked', JSON.stringify(value));
  };

  return (
    <section className="movies">
      <div className="movies__conteiner">
        <SearchForm 
          handleSetSearch={handleSetSearch}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleFilterChange={handleFilterChange}
          searchKeyword={searchKeyword}
        />
        <MoviesCardList 
          movies={filteredMovies} 
          isLoading={isLoading}
          serverError={serverError}
          isFirstSearchPerformed={isFirstSearchPerformed} 
          savedMovies={savedMovies}
          addMovie={addMovie}
        />
        {isLoading && <Preloader />}
      </div>
    </section>
  )
}

export default Movies;