import React from 'react';
import ProfileCard from './ProfileCard';
import GenericButton from '../../components/GenericButton';

function Profile() {
  return (
    <div>
      <ProfileCard user="User" />
      <GenericButton to={'completedDishes'}>
        Completed Dishes
      </GenericButton>
    </div>
  );
}

export default Profile;