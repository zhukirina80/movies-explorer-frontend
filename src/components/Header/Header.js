import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import LogoLink from '../LogoLink/LogoLink';

function Header({ headerName, navigationName }) {

  return (
    <header className={`header ${headerName === 'landing' ? 'header__landing' : 'header__movies'}`}>
      <div className="header__container">
        <LogoLink/>
        <Navigation navigationName={navigationName}/>
      </div>
    </header>
  )
}

export default Header;