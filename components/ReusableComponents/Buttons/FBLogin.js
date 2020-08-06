import React, { useContext, useEffect, useState } from 'react';

import FBIcon from '../../../public/icons/icon_facebook.svg';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { UserContext } from '../../../utilities/context/UserContext';

const FBLogin = () => {
  const { requestFbLogin } = useContext(UserContext);
  return (
    <>
      <button
        className='h-formButton w-formButton flex items-center justify-center text-sm text-white rounded-md mx-auto mb-4'
        onClick={() => {
          requestFbLogin();
        }}>
        <img src={FBIcon} alt='facebook icon' className='button-icon mr-4' />
        <p>Log in with Facebook</p>
      </button>
      <style jsx>{`
        .h-formButton {
          background: #1877f2;
          position: relative;
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
