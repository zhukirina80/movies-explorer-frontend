import React from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm( {handleSetSearch, handleFilterChange, isChecked, setIsChecked, searchKeyword }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm({ search: searchKeyword });
  }, [searchKeyword, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetSearch(values.search);
  };
  
  function handleChangeCheckbox() {
    setIsChecked(!isChecked); 
    handleFilterChange(!isChecked); 
  }

  return (
    <form noValidate className="searchForm" onSubmit={handleSubmit}>
      <span className="searchForm__error">{errors.search ? 'Нужно ввести ключевое слово' : ''}</span>
      <div className="searchForm__input-conteiner">
        <input
          className={`searchForm__input ${errors.search ? 'invalid' : ''}`}
          placeholder="Фильм"
          name="search"
          type="text"
          value={values.search || ''}
          onChange={handleChange}
          required
        />
        <button className={`searchForm__button ${isValid ? '' : 'searchForm__button_disabled'}`} disabled={!isValid}>
          Поиск
        </button>
      </div>
      <div className="searchForm__checkbox-conteiner">
        <FilterCheckbox checked={isChecked} handleChangeCheckbox={handleChangeCheckbox} />
        <p className="searchForm__text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;