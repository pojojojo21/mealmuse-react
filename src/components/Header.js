import React from 'react';
import './Header.css';
import StatusBar from './StatusBar';

function Header({ isHome }) {
  return (
    <header>
      <h1>Let's Cook!</h1>
      <StatusBar isHomePage={isHome} />
    </header>
  );
}

export default Header;