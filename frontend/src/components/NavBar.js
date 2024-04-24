import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faBookOpen, faTrophy, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar({ activeLink, setActiveLink }) {
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <ul className="navBar">
        <li><Link to="/" className={activeLink === '/' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/')}><FontAwesomeIcon icon={faBookOpen} /></Link></li>
        <li><Link to="/leaderboard" className={activeLink === '/leaderboard' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/leaderboard')}><FontAwesomeIcon icon={faTrophy} /></Link></li>
        <li><Link to="/profile" className={activeLink === '/profile' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/profile')}><FontAwesomeIcon icon={faUserCircle} /></Link></li>
        <li><Link to="/search" className={activeLink === '/search' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/search')}><FontAwesomeIcon icon={faSearch} /></Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;