import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import "./Profile.css"

function Profile({ setActiveLink }) {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveLink('/profile');
  }, [setActiveLink]);

  return (
    <div className='profile-container'>
      <ProfileCard user="User" />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <button className="completed-button" onClick={() => navigate('/completeddishes')}>
          <span>Completed Dishes</span>
          <span className="arrow-general"><img src='Images/Arrow.png' alt='arrow' width="15" height="20" /></span>
        </button>
      </div>
    </div>
  );
}

export default Profile;