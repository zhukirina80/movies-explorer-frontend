import React from 'react';
import './SectionTitle.css';

function SectionTitle({ text }) {
  return (
    <section className="sectionTitle">
      <h3 className="sectionTitle__text">{text}</h3> 
    </section>
  )
}

export default SectionTitle;