import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {

  return (
  <>
    <label className="switch">
      <input type="checkbox"/>
      <span className="slider"/>
    </label>
  </>
  )
}

export default FilterCheckbox;