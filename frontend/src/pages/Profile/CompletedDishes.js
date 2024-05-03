import React from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

function CompletedDishes() {
  return (
    <div>
      <Link to={'/profile'}>
        <span className="back-arrow" ><img src='Images/BackArrow.png' alt='arrow' height="50vh" /></span>
      </Link>
      <Carousel />
    </div>
  );
}

export default CompletedDishes;
