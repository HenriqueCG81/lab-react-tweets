import React from 'react';
import ProfileImage from './ProfileImage';

const User = props => {
  return (
    <div className="user">
      <div className="user-info">
        <div className="user-image">
          <ProfileImage image={props.user.image} />
        </div>
        <div className="user-details">
          <p className="user-label">User</p>
          <h4>{props.user.name}</h4>
          <p className="handle">{props.user.handle}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
