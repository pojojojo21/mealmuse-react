import React from 'react';
import './Header.css';
import StatusBar from './StatusBar';

function Header() {
  return (
    <header>
      <h1>Let's Cook!</h1>
      <StatusBar />
    </header>
  );
}

export default Header;