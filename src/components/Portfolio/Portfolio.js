import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__title">Портфолио</h2>
        <a href="https://github.com/zhukirina80/how-to-learn" target="_blank" rel="noreferrer"  className="portfolio__link-conteiner">      
          <p className="portfolio__link">Статичный сайт</p>
          <p className="portfolio__arrow">↗</p>
        </a> 
        <a href="https://github.com/zhukirina80/russian-travel" target="_blank" rel="noreferrer" className="portfolio__link-conteiner"> 
          <p className="portfolio__link">Адаптивный сайт</p>
          <p className="portfolio__arrow">↗</p>
        </a>
        <a href="https://github.com/zhukirina80/react-mesto-api-full-gha" target="_blank" rel="noreferrer" className="portfolio__link-conteiner"> 
          <p className="portfolio__link">Одностраничное приложение</p>
          <p className="portfolio__arrow">↗</p>
        </a> 
      </div> 
    </section>
  )
}

export default Portfolio;