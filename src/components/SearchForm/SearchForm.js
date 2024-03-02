import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ value, onChange }) {

  return (
    <form className="searchForm__conteiner">
      <div className="searchForm__input-conteiner">     
        <input className="searchForm__input" placeholder="Фильм" value={value} onChange={onChange}/>
        <button className="searchForm__button">Поиск</button> 
      </div>
      <div className="searchForm__checkbox-conteiner">
        <FilterCheckbox/>
        <p className="searchForm__text">Короткометражки</p>      
      </div>
    </form>
  )
}

export default SearchForm;