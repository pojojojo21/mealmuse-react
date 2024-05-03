import React from 'react';
import { Link } from 'react-router-dom';
import "./GenericButton.css"
import { useNavigate } from 'react-router-dom';

function GenericButton({ to, children, newDishPage }) {
  const navigate = useNavigate();
  var imageText = to.replace(/\s+/gm, '');
  imageText = 'Images/Dishes/' + imageText + '.png';

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className="circle-general"><span id='dishPic'><img src={imageText} alt='dish' width="150%" /></span></div>
      <button className="generic-button" onClick={() => {
        newDishPage(to, '/search');
        navigate(`/${to.toLowerCase().replace(/\s/g, '')}`)
      }}>
        <span>{children}</span>
        <span className="arrow-general"><img src='Images/Arrow.png' alt='arrow' width="15" height="20" /></span>
      </button>
    </div>
  );
}
export default GenericButton;
