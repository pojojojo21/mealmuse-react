import React, { useState } from 'react';

function CircleButton({ task }) {
  const [isClicked, setIsClicked] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowCheck(!showCheck);
  };

  return (
    <div className={isClicked ? 'circle clicked' : 'circle'} onClick={handleClick}>
      {isClicked && <span className={showCheck ? 'show' : ''} id="check"><img src='Images/Check.png' alt='arrow' width="20" /></span>}
    </div>
  );
}

export default CircleButton;