import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject({ refProp }) {

  return (
    <section className="aboutProject" ref={refProp}>
      <div className="aboutProject__content">
        <SectionTitle text="О проекте"/>
        <article className="aboutProject__columns">
          <div className="aboutProject__column">
            <h2 className="aboutProject__columns-brief">Дипломный проект включал 5 этапов</h2>
            <p className="aboutProject__columns-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="aboutProject__column">
            <h2 className="aboutProject__columns-brief">На выполнение диплома ушло 5 недель</h2>
            <p className="aboutProject__columns-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </article>
        <div className="aboutProject__diagram">
          <p className="aboutProject__diagram-column aboutProject__diagram-column_week">1 неделя</p>
          <p className="aboutProject__diagram-column aboutProject__diagram-column_second-week">4 недели</p>
        </div>
        <div className="aboutProject__diagram">
          <p className="aboutProject__diagram-column aboutProject__diagram-column_stage">Back-end</p>
          <p className="aboutProject__diagram-column aboutProject__diagram-column_stage">Front-end</p>
        </div>
      </div> 
    </section>
  )
}

export default AboutProject;