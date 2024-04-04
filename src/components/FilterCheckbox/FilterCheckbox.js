import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ checked, handleChangeCheckbox }) {

  return (
  <>
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={handleChangeCheckbox} />
      <span className="slider"/>
    </label>
  </>
  )
}

export default FilterCheckbox;