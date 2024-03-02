import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import LogoLink from '../LogoLink/LogoLink';

function Header({ headerName, navigationName }) {

  return (
    <header className={headerName === 'landing' ? 'header__landing' : 'header'}>
      <div className="header__container">
        <LogoLink/>
        <Navigation navigationName={navigationName}/>
      </div>
    </header>
  )
}

export default Header;