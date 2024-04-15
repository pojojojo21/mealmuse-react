import React from 'react';
import './ProfileCard.css'; // Import the CSS file for profile card styles

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <div className="icon-container">
        <div className="icon-circle">
          {/* Icon or profile image goes here */}
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
