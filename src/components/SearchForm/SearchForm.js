import React from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ value, onChange }) {

  const { handleSubmit, register, formState: { errors, isValid } } = useForm({
    mode: 'all',
  });

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <span className="searchForm__error">{errors.search?.message}</span>
      <div className="searchForm__input-conteiner">
        <input className={`searchForm__input ${errors.search ? 'invalid' : ''}`}
          placeholder="Фильм"
          {...register('search', { required: 'Пожалуйста, введите запрос!' })}
          value={value}
          onChange={onChange}/>
        <button className={`searchForm__button ${isValid ? '' : 'searchForm__button_disabled'}`} disabled={!isValid}>Поиск</button> 
      </div>
      <div className="searchForm__checkbox-conteiner">
        <FilterCheckbox/>
        <p className="searchForm__text">Короткометражки</p>      
      </div>
    </form>
  )
}

export default SearchForm;