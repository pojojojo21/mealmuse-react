import React, { useState } from 'react';
import { getDishStatusByName } from "../crud"
function CircleButton({ task }) {

  const [isClicked, setIsClicked] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowCheck(!showCheck);
  };
  // <li><Link to="/search" className={activeLink === '/search' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/search')}><FontAwesomeIcon icon={faSearch} /></Link></li>

  return (
    <div className={isClicked ? 'circle clicked' : 'circle'} onClick={handleClick}>
      {isClicked &&
        <span className={showCheck ? 'show' : ''} id="check">
          <img src='Images/Check.png' alt='check' width="50vh" />
        </span>}
    </div>
  );
}

export default CircleButton;