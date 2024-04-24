import React from 'react';
import ProfileCard from './ProfileCard';
import GenericButton from '../../components/GenericButton';
import "./Profile.css"

function Profile() {
  return (
    <div className='profile-container'>
      <ProfileCard user="User" />
      <GenericButton to={'completedDishes'}>
        Completed Dishes
      </GenericButton>
    </div>
  );
}

export default Profile;