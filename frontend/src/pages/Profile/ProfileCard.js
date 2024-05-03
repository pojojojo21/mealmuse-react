import React, { useState, useEffect } from 'react';
import './ProfileCard.css'; // Import the CSS file for profile card styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons

function ProfileCard({ user }) {
  const [points, setPoints] = useState(0);
  const [name, setName] = useState('Joanna');

  useEffect(() => {
    const interval = setInterval(() => {
      // Retrieve the points from localStorage
      const userString = localStorage.getItem('user');
      const user = JSON.parse(userString);
      const newPoints = user ? user.points : 0;
      const newName = user ? user.userName : 'Joanna';
      setPoints(newPoints);
      setName(newName);
    }, 100);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
  return (
    <div className="profile-card">
      <div className="icon-container">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faUserCircle} size="10x" />
        </div>
      </div>
      <div className="profile-text">
        <div className="userText userSize">{name}</div>
        <span className="userPoints">{points}</span> pts
      </div>
      <div className="button-not-clickable">
        Favorite Dish: Sushi
      </div>
      <div className="button-not-clickable">
        Favorite Cuisine: Mexican
      </div>
    </div>
  );
}

export default ProfileCard;
