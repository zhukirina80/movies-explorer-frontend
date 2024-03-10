import React from 'react';
import { useRef } from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {

  const aboutProjectRef = useRef(null)
  
  const handleScrollToAboutProject = () => aboutProjectRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className="main">
      <Promo handleScrollToAboutProject={handleScrollToAboutProject}/>
      <AboutProject refProp={aboutProjectRef}/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  )
}

export default Main;