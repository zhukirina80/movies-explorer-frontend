import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__link-conteiner">      
          <a href="https://github.com/zhukirina80/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__link">Статичный сайт</a>
          <p className="portfolio__arrow">&#129125;</p>
        </div> 
        <div className="portfolio__link-conteiner"> 
          <a href="https://github.com/zhukirina80/russian-travel" target="_blank" rel="noreferrer" className="portfolio__link">Адаптивный сайт</a>
          <p className="portfolio__arrow">&#129125;</p>
        </div>
        <div className="portfolio__link-conteiner"> 
          <a href="https://github.com/zhukirina80/react-mesto-api-full-gha" target="_blank" rel="noreferrer" className="portfolio__link">Одностраничное приложение</a>
          <p className="portfolio__arrow">&#129125;</p>
        </div> 
      </div> 
    </section>
  )
}

export default Portfolio;