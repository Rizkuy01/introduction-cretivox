import React from 'react';
import Profile from '../img/profile.png'

const ProfileCard = () => {
  return (
    <div className="profile-card opacity-0 transform translate-y-12 absolute">
      <img src={Profile} alt="Profile" className="w-500 h-500 border-white" />
    </div>
  );
};

export default ProfileCard;
