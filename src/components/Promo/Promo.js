import React from 'react';
import './Promo.css';

function Promo({ handleScrollToAboutProject }) {

  function onClick() {
    handleScrollToAboutProject();
  }

  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__text">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="promo__link" onClick={onClick}>Узнать больше</button>
        </div>
        <div className="promo__logo"/>
      </div>       
    </section>
  )
}

export default Promo;