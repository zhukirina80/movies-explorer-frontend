import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutMe() {

  return (
    <section className="aboutMe">
      <div className="aboutMe__content">
        <SectionTitle text="Студент"/>
        <article className="aboutMe__article">
          <div className="aboutMe__text">
            <h2 className="aboutMe__title">Ирина</h2>
            <h3 className="aboutMe__subtitle">Фронтенд-разработчик</h3>
            <p className="aboutMe__description">Я живу в Мурманске, у меня 2 высших образования, закончила МГТУ по специальностям "Инженер-технолог рыбной промышленности" и 
              "Логистика и управление цепями поставок". Я замужем, воспитываю двух сыновей. Люблю фитнес, прогулки на лыжах и путешествия. 
              У меня свой бизнес - небольшой копировальный центр. Но я не люблю стоять на месте, и с недавних пор я начала заниматься веб-разработкой. 
              Надеюсь самореализоваться в этой профессии. </p>
            <a href="https://github.com/zhukirina80" target="_blank" rel="noreferrer" className="aboutMe__link-github">Github</a>
          </div>
          <div className="aboutMe__foto"></div>
        </article>
      </div> 
    </section>
  )
}

export default AboutMe;