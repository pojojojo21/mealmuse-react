import React from 'react';
import './ProfileCard.css'; // Import the CSS file for profile card styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <div className="icon-container">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faUserCircle} size="10x" />
        </div>
      </div>
      <div className="profile-text">
        <div className="userText">{user}</div>
        <span className="userPoints">120</span> pts
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
