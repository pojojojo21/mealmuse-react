import React, { useState, useEffect } from 'react';
import { getDishByName, getDishStatusByName } from "../crud"
import JSConfetti from 'js-confetti'

function CircleButton({ task }) {

  const [isClicked, setIsClicked] = useState(false);
  const [points, setPoints] = useState(0);
  const jsConfetti = new JSConfetti()

  // var dish 
  useEffect(() => {
    // Define async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await getDishByName(task);

        setPoints(response.points)
        setIsClicked(response.status);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the async function
    fetchData();
  }, [task]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      var userString = localStorage.getItem('user');
      var user = JSON.parse(userString);
      var newPoints = user.points + points + 5;

      localStorage.setItem('user', JSON.stringify({ 'userName': 'Joanna', 'points': newPoints }));
      userString = localStorage.getItem('user');
      user = JSON.parse(userString);

      jsConfetti.addConfetti()
    }
  };
  // <li><Link to="/search" className={activeLink === '/search' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/search')}><FontAwesomeIcon icon={faSearch} /></Link></li>

  return (
    <div className={isClicked ? 'circle clicked' : 'circle'} onClick={handleClick}>
      {isClicked &&
        <span className={'show'} id="check">
          <img src='Images/Check.png' alt='check' width="50vh" />
        </span>}
    </div>
  );
}

export default CircleButton;