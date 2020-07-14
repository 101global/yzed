import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';
import { FacebookLoginButton } from 'react-social-login-buttons';

const FBLogin = () => {
  const { requestFbLogin } = useContext(UserContext);
  return (
    <FacebookLoginButton
      onClick={() => {
        requestFbLogin();
      }}
    />
  );
};

export default FBLogin;
