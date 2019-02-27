import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, []);

  return <Redirect to="/auth" />;
};

export default Logout;
