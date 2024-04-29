import React from 'react';
import './Header.css';
import StatusBar from './StatusBar';

function Header() {
  return (
    <header>
      <div id="logo">
        <img src="Images/Logo.png" alt="" width="200" height="90" />
      </div>
      <StatusBar />
    </header>
  );
}

export default Header;