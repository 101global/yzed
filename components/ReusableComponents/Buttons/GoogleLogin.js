import React, { useContext, useEffect, useState } from 'react';

import { FacebookLoginButton } from 'react-social-login-buttons';
import GoogleIcon from '../../../public/icons/icon_google.svg';
import { UserContext } from '../../../utilities/context/UserContext';
import theme from '../../../utilities/theme';

const FBLogin = () => {
  const { requestGoogleLogin } = useContext(UserContext);
  return (
    <>
      <button
        className='h-formButton w-formButton flex items-center justify-center text-sm text-white rounded-md mx-auto mb-4'
        onClick={() => {
          requestGoogleLogin();
        }}>
        <img src={GoogleIcon} alt='facebook icon' className='button-icon mr-4' />
        <p>Log in with Google</p>
      </button>
      <style jsx>{`
        .h-formButton {
          border: 1px solid ${theme.colors.lightGrey};
          background: ${theme.colors.white};
          position: relative;
          color: ${theme.colors.mediumGrey};
        }
        .button-icon {
          position: absolute;
          left: 10px;
        }
        p {
          position: absolute;
          left: 55px;
        }
      `}</style>
    </>
  );
};

export default FBLogin;
