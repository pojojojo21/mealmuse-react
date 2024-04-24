import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Import the check icon

function CircleButton({ task }) {
  const [isClicked, setIsClicked] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowCheck(!showCheck);
  };

  return (
    <div className={isClicked ? 'circle clicked' : 'circle'} onClick={handleClick}>
      {isClicked && <FontAwesomeIcon icon={faCheck} id="check" className={showCheck ? 'show' : ''} />}
    </div>
  );
}

export default CircleButton;