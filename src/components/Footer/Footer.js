import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <nav className="footer__column">
          <p className="footer__year">&copy; 2024</p>
          <div className="footer__links">
            <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            <a className="footer__link" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
