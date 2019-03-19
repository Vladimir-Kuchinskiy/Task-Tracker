import React from 'react';
import UserAvatar from 'react-user-avatar';

const ProfileInfo = ({ userEmail }) => {
  const avatar = require(`../../images/avatar-placeholder.png`);
  return (
    <React.Fragment>
      <h2 className="row">Profile info</h2>
      <div className="row">
        <div className="col-5 offset-3">
          <div className="row">
            <div className="col-3">
              <UserAvatar
                size="65"
                name="Vladimir Kuchinskiy"
                colors={['#ccc', '#fafafa', '#ccaabb']}
                src={avatar}
              />
            </div>
            <h5 className="col-9 mt-3">{userEmail}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileInfo;
