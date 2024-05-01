import React from 'react';
import { Link } from 'react-router-dom';
import "./GenericButton.css"

function GenericButton({ to, children }) {

  var imageText = to.replace(/\s+/gm, '');
  imageText = 'Images/Dishes/' + imageText + '.png';

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className="circle-general"><span id='dishPic'><img src={imageText} alt='dish' width="20" /></span></div>
      <Link to={to} className="generic-button">
        <span>{children}</span>
        <span className="arrow-general"><img src='Images/Arrow.png' alt='arrow' width="15" height="20" /></span>
      </Link>
    </div>
  );
}
export default GenericButton;
