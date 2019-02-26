import React from 'react';
import jwt_decode from 'jwt-decode';

const Session = ({ authToken }) => {
  const profile = jwt_decode(authToken);
  return <h6 style={{ color: 'white' }}>{profile.email}</h6>;
};

export default Session;
