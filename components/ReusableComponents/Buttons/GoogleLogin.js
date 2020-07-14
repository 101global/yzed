import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';
import { GoogleLoginButton } from 'react-social-login-buttons';
const GoogleLogin = () => {
  const { requestGoogleLogin } = useContext(UserContext);
  return (
    <GoogleLoginButton
      onClick={() => {
        requestGoogleLogin();
      }}
    />
  );
};

export default GoogleLogin;
